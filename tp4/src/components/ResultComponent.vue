<script setup>
import { defineComponent, computed } from "vue";
import { useCounterStore } from "src/stores/counterStore";
defineComponent({
  name: "ResultComponent",
});
const store = useCounterStore();
</script>
<template lang="pug">
.column.flex.flex-center
  p.q-ma-md.text-h5.text-purple-9 Total
  p.q-my-md.q-mx-xl.text-h5.text-cyan(data-cy="total") {{ store.total }}
</template>
