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
    states.counters[props.id] = val;
    emit("update:counterValue", val);
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
      color="cyan",
      @click="states.increment(props.id);",
      data-cy="btn-up"
    )
      q-tooltip(anchor="top left").bg-teal increment
      q-icon(name="arrow_drop_up", size="md")
    q-input.col-8(
      :model-value="counterValue",
      @update:model-value="$emit('update:counterValue', parseInt($event))",
      placeholder="Enter number",
      error-message = "Input must be a number",
      outlined,
      dense,
      rounded,
      input-class=" text-h5 text-center text-cyan",
      :rules="[val => (Number.isFinite(val)) || 'error']",
      data-cy="input"
    )
      q-tooltip(anchor="bottom middle").bg-teal Enter number
    // span.text-h5.text-cyan.flex.flex-center.q-mx-md {{ counterValue }}
    q-btn.q-ma-md.col-1(
      rounded,
      color="cyan",
      @click="states.decrement(props.id)",
      data-cy="btn-dn"
    )
      q-tooltip(anchor="top right").bg-teal decrement
      q-icon(name="arrow_drop_down", size="md")
  .row.justify-center.items-center
      q-btn.q-ma-md.col-1(
        rounded,

        @click="states.reset(props.id)",
        data-cy="btn-clear"
      )
        q-tooltip(anchor="top left").bg-teal reset
        q-icon(name="clear", size="md")
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
            label="Save to LS"
          )
            q-icon(name="save", size="md")
      q-btn.q-ma-md.col(
            rounded,
            color="primary",
            @click="states.restoreCounter(props.id)",
            data-cy="btn-restore"
            label="Restore from LS"
          )
            q-icon(name="restore", size="md")
  .row.justify-center.items-center
      q-btn.q-ma-md.col(
          rounded,
          color="primary",
          data-cy="btn-save-serv",
          @click="addToServer(props.id)"
          label="Save to DB"
        )
          q-icon(name="download", size="md")
      q-btn.q-ma-md.col(
        rounded,
        color="primary",
        data-cy="btn-restore-serv",
        @click="restoreToServer(props.id)"
        label="Restore from DB"
      )
        q-icon(name="upload", size="md")

</template>
