import { ref } from "vue";
import useAuthUser from "src/composables/useAuthUser";
import useSupabase from "src/boot/supabase";
import useNotify from "src/composables/useNotify";
import { useCounterStore } from "src/stores/counterStore";

export default function useAPI() {
  const { supabase } = useSupabase();
  const { user } = useAuthUser();
  const { notifyError, notifySuccess } = useNotify();
  const store = useCounterStore();

  const syncToServer = async (id) => {
    const counter = store.counters[id];
    //First Check if the counter exists
    const { data: data0, error: error0 } = await supabase
      .from("counters")
      .select()
      .match({ letter: id, user: user.value.id });
    if (error0) throw error;
    if (data0 !== undefined && data0.length > 0) {
      //This means that the data exists so do an update
      console.log("counters: ", data0);
      const { data, error } = await supabase
        .from("counters")
        //schema now has value instead of counter as column
        .update({ counter: counter })
        .match({ letter: id, user: user.value.id });
      if (error) {
        console.log(error);
        throw error;
      }
    } else {
      //This means that the data does not exist so do an insert
      const { data, error } = await supabase.from("counters").insert([
        {
          user: user.value.id,
          letter: id,
          counter: counter,
        },
      ]);
      if (error) {
        console.log(error);
        throw error;
      }
    }
  };

  const syncFromServer = async (id) => {
    //let counterValue = null;
    const { data, error } = await supabase
      .from("counters")
      .select("counter")
      .match({ letter: id, user: user.value.id });
    if (error) throw error;
    if (data && data.length === 1) {
      store.setVal(id, data[0].counter);
    }
  };

  return {
    syncFromServer,
    syncToServer,
  };
}
