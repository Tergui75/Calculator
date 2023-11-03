<script setup>
import { defineComponent, computed } from "vue";
import { useCounterStore } from "src/stores/counterStore";
defineComponent({
  name: "OperatorComponent",
});
const store = useCounterStore();
</script>

<template lang="pug">
.column.items-end.self-end
  .q-py-lg
    q-btn-dropdown(color="primary" :label="store.operator" split size="lg").fixed-width
      q-item(
        v-for="op in ['+', '-', '*', '/']"
        :key="op"
        :label="op"
        clickable
        @click="store.operator = op"
        v-close-popup
        )
        q-item-section(side)
          span.text-h5.text-weight-bold {{ op }}
</template>
