<script setup>
import { defineComponent, ref } from 'vue';
import CounterComponent from 'src/components/CounterComponent.vue';
import OperatorComponent from 'src/components/OperatorComponent.vue';
import ResultComponent from 'src/components/ResultComponent.vue'

defineComponent({
    name: 'IndexPage',
    components: { CounterComponent, OperatorComponent, ResultComponent }
});
const operator = ref('+');
const ctrAValue = ref(0);
const ctrBValue = ref(0);
</script>

<template lang="pug">
q-page(padding)
  .row.justify-center
    CounterComponent(id="A", v-model:counterValue="ctrAValue")
    OperatorComponent(v-model:operator="operator")
    CounterComponent(id="B", v-model:counterValue="ctrBValue")
    span.text-h4.text-purple-9.q-my-md.self-end   =
    ResultComponent(:ctrAValue="ctrAValue" :ctrBValue="ctrBValue" :operator="operator")
</template>
