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
    p.q-ma-md.text-h5.text-purple-9.self-center {{ operator }}
  .column.items-end.self-end
    .q-py-lg
      q-btn.q-ma-md.col-1(
      
      color="primary",
      @click="operator = '+'",
      data-cy="btn-+"
    ).q-mb-md +
      q-btn.q-ma-md.col-1(
      
      color="primary",
      @click="operator = '-'",
      data-cy="btn--"
    ).q-mb-md -
    .row.justify-center.items-center
      q-btn.q-ma-md.col-1(  
      color="primary",
      @click="operator ='*'",
      data-cy="btn-*"
    ).q-mb-md *
      q-btn.q-ma-md.col-1(     
      color="primary",
      @click="operator ='/'",
      data-cy="btn-/"
    ).q-mb-md /

    </template>
