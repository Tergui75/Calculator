import { ref } from "vue";
import useAuthUser from "src/composables/useAuthUser";
import useSupabase from "src/boot/supabase";
import useNotify from "src/composables/useNotify";
import { states } from "src/stores/example-store.js";

export default function useAPI() {
  const { supabase } = useSupabase();
  const { user } = useAuthUser();
  const { notifyError, notifySuccess } = useNotify();
  const store = states;

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

  const addToServer = async (id) => {
    console.log("id = " + id);
    console.log("states.counters[id] = " + states.counters[id]);
    console.log("user.value.id= " + user.value.id);
    const element ={ letter: id, counter: states.counters[id], user: user.value.id};
    const { data: data0, error: error0 } = await supabase
      .from("counters")
      .select()
      .match({ letter: id, user: user.value.id });
    if (error0) throw error;
    if (data0 !== undefined && data0.length > 0) {
      //L'élémént existe déja dans la table
      console.log("counters: ", data0);
      const { data, error } = await supabase
        .from("counters")
        .update(element)
        .match({ id:data0[0].id});
        
      if (error) {
        console.log(error);
        throw error;
      }
    } else //si l'élément n'existe pas dans la table counters
    {
    const { data, error } = await supabase.from("counters").insert(element);
    }
  };

  const restoreToServer = async (id) => {
    console.log("id = " + id);
    console.log("states.counters[id] = " + states.counters[id]);
    console.log("user.value.id= " + user.value.id);
    const { data, error } = await supabase
      .from("counters")
      .select()
      .match({ letter: id, user: user.value.id});
      if (data && data.length > 0) {
        const { letter, counter, user } = data[0];
        states.counters[id] = counter;
      }
      console.log("id = " + id);
      console.log("states.counters[id] = " + states.counters[id]);
      console.log("user.value.id= " + user.value.id);
  };

  const deleteToServer = async (id) => {
    states.delCounter(id);
    const { data: data0, error: error0 } = await supabase
      .from("counters")
      .select()
      .match({ letter: id, user: user.value.id });
    if (error0) throw error;
    if (data0 !== undefined && data0.length > 0) {
      //L'élémént existe déja dans la table
      console.log("counters: ", data0);
      const { data, error } = await supabase
        .from("counters")
        .delete()
        .match({ id:data0[0].id});
        
      if (error) {
        console.log(error);
        throw error;
      }
    } else //si l'élément n'existe pas dans la table counters
    {
      console.log(error);
      throw error;
    }
  };

    const sharedToServer = async (id) => {
      console.log("id = " + id);
      console.log("states.counters[id] = " + states.counters[id]);
      console.log("user.value.id= " + user.value.id);
      const name = prompt("Enter the id of the user you want to share with");
      const { data: data0, error: error0 } = await supabase
        .from("counters")
        .select()
        .match({ letter: id, user: user.value.id });
      if (error0) throw error;
      if (data0 !== undefined && data0.length > 0) {
        //L'élémént existe  dans la table
        console.log("counters: ", data0);
        const element = {counter_id:data0[0].id,shared_with:name}
        const { data, error } = await supabase
          .from("counter_shared")
          .insert(element)        
        if (error) {
          console.log(error);
          throw error;
        }
      } else //si l'élément n'existe pas dans la table counters
      {
        addToServer(id);
      }
    };

    const pullfromServer = async () => {
      console.log("user.value.id = " + user.value.id);
    
      // Fetch all records from counters_shared matching the user's ID
      const { data: data0, error: error0 } = await supabase
        .from("counter_shared")
        .select()
        .match({ shared_with: user.value.id });
    
      if (error0) {
        console.error(error0);
        throw error0;
      }
    
      if (data0 !== undefined && data0.length > 0) {
        console.log("counters: ", data0);
    
        // Iterate through each record in counters_shared
        for (let i = 0; i < data0.length; i++) {
          const counterSharedRecord = data0[i];
    
          // Fetch the corresponding record from the counters table
          const { data, error } = await supabase
            .from("counters")
            .select()
            .match({ id: counterSharedRecord.counter_id });
    
          console.log("counters 2: ", data);
    
          if (error) {
            console.error(error);
            throw error;
          }
    
          if (data && data.length > 0) {
            const name =
              data[0].user.toString() + ":" + data[0].letter.toString();
            states.counters[name] = data[0].counter;
            states.operator[name] = ref('+');
          }
        }
      } else {
        // If no records found in counters_shared
        alert("We can't share this element");
      }
    };
    
    

  return {
    syncFromServer,
    syncToServer,
    addToServer,
    restoreToServer,
    deleteToServer,
    sharedToServer,
    pullfromServer,
  };
}
