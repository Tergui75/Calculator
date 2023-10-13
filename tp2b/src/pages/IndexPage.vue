<script setup>
import { defineComponent, ref } from 'vue';
import CounterComponent from 'src/components/CounterComponent.vue';
import OperatorComponent from 'src/components/OperatorComponent.vue';
import ResultComponent from 'src/components/ResultComponent.vue'
import { states } from "../stores/example-store.js";

defineComponent({
    name: 'IndexPage',
    components: { CounterComponent, OperatorComponent, ResultComponent }
});
const operator = ref('+');
const ctrAValue = ref(0);
const ctrBValue = ref(0);
const operands = [];

</script>

<template lang="pug">
q-page(padding)
  q-btn(color="orange" @click="states.addCounter()",).q-mb-md Add Operand
  .row.justify-center
    //CounterComponent(id="A", v-model:counterValue="ctrAValue")
    //CounterComponent(id="B", v-model:counterValue="ctrBValue")
    .row(v-for="(operand,index) in Object.keys(states.counters)" :key="index")
      CounterComponent(:key="operand" :id="operand" v-model:counterValue="states.counters[operand]" )
      OperatorComponent(v-if="index!== Object.keys(states.counters).length - 1" v-model:operator="states.operator[operand]")
  //CounterComponent(v-for="operand in operands" :key="operand.id + '_result'" :id="operand.id + '_result'" v-model:counterValue="getResult(operand.id)" :readonly="true")
  span.text-h4.text-purple-9.q-my-md.self-end   =
  ResultComponent(:ctrAValue="states.total()" :ctrBValue="ctrBValue" :operator="operator")
  //CounterComponent(v-for="operand in operands" :key="operand.id" :id="operand.id" v-model:counterValue="operand.value")
</template>
