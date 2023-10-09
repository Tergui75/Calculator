<script setup>
import { defineComponent } from "vue";
import { useCounterStore } from "src/stores/counterStore";

defineComponent({ name: "CounterComponent" });
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});
const store = useCounterStore();
</script>

<template lang="pug">
.column.justify-evenly(:id="'counter_' + props.id")
  .row.justify-center.items-center
    p.q-ma-md.text-h5.text-purple-9.self-center Operand {{ props.id }}
  .row.justify-center.items-end
    q-btn.q-ma-md.col-1(
      rounded,
      color="cyan",
      @click="store.increment(props.id)",
      data-cy="btn-up"
    )
      q-tooltip(anchor="top left").bg-teal increment
      q-icon(name="arrow_drop_up", size="md")
    q-input.col-8(
      v-model.number="store.counters[props.id]",
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
      @click="store.decrement(props.id)",
      data-cy="btn-dn"
    )
      q-tooltip(anchor="top right").bg-teal decrement
      q-icon(name="arrow_drop_down", size="md")
  .row.justify-center.items-center
    q-btn.q-ma-md.col(
      rounded,
      color="primary",
      data-cy="btn-save",
      @click="store.storeCounter(props.id)"
    )
      q-tooltip(anchor="top left").bg-teal save
      q-icon(name="save", size="md")
    q-btn.q-ma-md.col-1(
      rounded,
      color="cyan",
      @click="store.reset(props.id)",
      data-cy="btn-reset"
    )
      q-tooltip(anchor="top left").bg-teal reset
      q-icon(name="refresh", size="md")
    q-btn.q-ma-md.col(
      rounded,
      color="primary",
      data-cy="btn-restore",
      @click="store.restoreCounter(props.id)"
    )
      q-tooltip(anchor="top left").bg-teal restore
      q-icon(name="restore", size="md")
</template>
