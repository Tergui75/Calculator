<script setup>
import { defineComponent, computed } from "vue";
import { states } from "../stores/example-store.js";

defineComponent({
  name: "OperatorComponent",
});
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  operator: {
    type: String,
    required: true,
  },
});
const emit = defineEmits(["update:operator"]);
const operator = computed({
  get: () => states.operator[props.id],
  set: (val) => {states.operator[props.id] = val;
  emit("update:operator", val)}
});
</script>

<template lang="pug">
.column.justify-evenly(:id="'operator_' + props.id")
  .row.justify-center.items-center
    p.q-ma-md.text-h5.text-purple-9.self-center Operator {{ props.id }}
  .column.items-end.self-end
    .q-py-lg
      q-btn-dropdown(color="primary" :label="operator" split size="lg" data-cy="select").fixed-width
        q-item(
        v-for="op in ['+', '-', '*', '/']"
        :key="op"
        :label="op"
        clickable
        @click="operator = op"
        v-close-popup
        )
        q-item-section(side)
          span.text-h5.text-weight-bold {{ op }}
</template>
