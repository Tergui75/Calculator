<script setup>
import { defineComponent, ref } from "vue";
import CounterComponent from "src/components/CounterComponent.vue";
import OperatorComponent from "src/components/OperatorComponent.vue";
import ResultComponent from "src/components/ResultComponent.vue";

defineComponent({
  name: "IndexPage",
  components: { CounterComponent, OperatorComponent, ResultComponent },
});
</script>

<template lang="pug">
q-page(padding)
  .row.justify-center
    CounterComponent(id="A")
    OperatorComponent
    CounterComponent(id="B")
    span.text-h4.text-purple-9.q-my-md.self-end   =
    ResultComponent
</template>
