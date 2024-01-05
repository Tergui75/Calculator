<script setup>
import { computed, defineComponent} from "vue"
import { states } from "../stores/example-store.js";
import useApi from "src/composables/useApi";

defineComponent({ name: "CounterComponent" })
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  counterValue: {
    type: Number,
    required: true,
  },
})

const { syncFromServer, syncToServer, addToServer, restoreToServer, deleteToServer,sharedToServer} = useApi();

const emit = defineEmits(['update:counterValue']);
const counterValue = computed({
  get: () => states.counters[props.id],
  set: (val) => {
    states.counters[props.id] = parseFLoat(val);
    emit("update:counterValue", parseFloat(val));
  },
})
</script>

<template lang="pug">
.column.justify-evenly(:id="'counter_' + props.id")
  .row.justify-center.items-center
    p.q-ma-md.text-h5.text-purple-9.self-center Operand {{ props.id }}
  .row.justify-center.items-end
    q-btn.q-ma-md.col-1(
        rounded,
        color="cyan"
        @click="states.reset(props.id)",
        data-cy="btn-clear"
      ).q-mb-md C
    q-input.col-8(
      :model-value="counterValue",
      :readonly="true",
      @update:model-value="$emit('update:counterValue', parseFloat($event))",
      placeholder="Enter number",
      error-message = "Input must be a number",
      outlined,
      dense,
      rounded,
      input-class=" text-h5 text-center text-cyan",
      :rules="[val => (Number.isFinite(val)) || 'error']",
      data-cy="input"
    )
    // span.text-h5.text-cyan.flex.flex-center.q-mx-md {{ counterValue }}
    q-btn.q-ma-md.col-1(
      rounded,
      color="cyan",
      @click="states.del_number(props.id)",
      data-cy="btn-dn"
    ).q-mb-md DEL 


  
  .row.justify-center.items-center
    q-btn.q-ma-md.col-1(
        rounded,
        color="primary",
        @click="states.add_number(props.id,1)",
        data-cy="btn-1"
      ).q-mb-md 1
    q-btn.q-ma-md.col-1(
        rounded,
        color="primary",
        @click="states.add_number(props.id,2)",
        data-cy="btn-2"
      ).q-mb-md 2
    q-btn.q-ma-md.col-1(
        rounded,
        color="primary",
        @click="states.add_number(props.id,3)",
        data-cy="btn-3"
      ).q-mb-md 3
  .row.justify-center.items-center
    q-btn.q-ma-md.col-1(
        rounded,
        color="primary",
        @click="states.add_number(props.id,4)",
        data-cy="btn-4"
      ).q-mb-md 4
    q-btn.q-ma-md.col-1(
        rounded,
        color="primary",
        @click="states.add_number(props.id,5)",
        data-cy="btn-5"
      ).q-mb-md 5
    q-btn.q-ma-md.col-1(
        rounded,
        color="primary",
        @click="states.add_number(props.id,6)",
        data-cy="btn-6"
      ).q-mb-md 6
  .row.justify-center.items-center
    q-btn.q-ma-md.col-1(
        rounded,
        color="primary",
        @click="states.add_number(props.id,7)",
        data-cy="btn-7"
      ).q-mb-md 7
    q-btn.q-ma-md.col-1(
        rounded,
        color="primary",
        @click="states.add_number(props.id,8)",
        data-cy="btn-8"
      ).q-mb-md 8
    q-btn.q-ma-md.col-1(
        rounded,
        color="primary",
        @click="states.add_number(props.id,9)",
        data-cy="btn-9"
      ).q-mb-md 9

  .row.justify-center.items-center
    q-btn.q-ma-md.col-1(
        rounded,
        color="primary",
        @click="states.add_number(props.id,11)",
        data-cy="btn--"
      ).q-mb-md -
    q-btn.q-ma-md.col-1(
        rounded,
        color="primary",
        @click="states.add_number(props.id,0)",
        data-cy="btn-0"
      ).q-mb-md 0
    q-btn.q-ma-md.col-1(
        rounded,
        color="primary",
        @click="states.add_number(props.id,12)",
        data-cy="btn-12"
      ).q-mb-md .
  .row.justify-center.items-center
    q-btn.q-ma-md.col-1(
        rounded,
        @click="states.delCounter(props.id)",
        data-cy="btn-del"
      )
        q-tooltip(anchor="top left").bg-teal delete
        q-icon(name="delete", size="md")
  .row.justify-center.items-center  
      q-btn.q-ma-md.col(
        rounded,
        color="cyan-7",
        @click="sharedToServer(props.id)",
        data-cy="btn-share"
        label="Share"
      )
        q-icon(name="share", size="md")

      q-btn.q-ma-md.col(
        rounded,
        color="orange-7",
        @click="deleteToServer(props.id)",
        data-cy="btn-del-serv"
        label="Delete"
      )
        q-icon(name="delete", size="md")
  
  .row.justify-center.items-center
      q-btn.q-ma-md.col(
            rounded,
            color="primary",
            @click="states.storeCounter(props.id)",
            data-cy="btn-save"
            label="Persit to LS"
          )
            q-icon(name="save", size="md")
      q-btn.q-ma-md.col(
            rounded,
            color="primary",
            @click="states.restoreCounter(props.id)",
            data-cy="btn-restore"
            label="Sync from LS"
          )
            q-icon(name="restore", size="md")
  .row.justify-center.items-center
      q-btn.q-ma-md.col(
          rounded,
          color="primary",
          data-cy="btn-save-serv",
          @click="addToServer(props.id)"
          label="Persist to Derver"
        )
          q-icon(name="download", size="md")
     
</template>
