import { reactive } from "vue";
import { defineStore } from "pinia";
import { LocalStorage } from "quasar";

import { defineComponent, ref } from 'vue';

export const states = reactive({
  counters: {},
  operator: {},
  
    total() {
      let result =0;
      var operator ='+';
      console.log("intit = " + result);
      for (const key in this.operator) {
        if (this.operator.hasOwnProperty(key)) {
          const value = this.counters[key];
          switch (operator) {
            case "+":
              result += value;
              break;
            case "-":
              result -= value;
              break;
            case "*":
              result *= value;
              break;
            case "/":
              result /= value;
              break;
            default:
              break;
          }
        }
        operator = this.operator[key];
      }
    
      return result;
    },

    increment(ctr_name) {
      this.counters[ctr_name]++;
    },
    decrement(ctr_name) {
      this.counters[ctr_name]--;
    },
    reset(ctr_name) {
      this.counters[ctr_name] = 0;
    },
    storeCounter(ctr_name) {
      LocalStorage.set(ctr_name, this.counters[ctr_name]);
    },
    restoreCounter(ctr_name) {
      this.counters[ctr_name] = LocalStorage.getItem(ctr_name);
    },
    setOperator(op) {
      this.operator = op;
    },
    addCounter() {
      const name = prompt("Name of the new operand");
      
    if(name !== null){
      this.counters[name] = 0;
      this.operator[name]=ref('+');
    }
    },
    delCounter(ctr_name) {
      if (ctr_name in this.counters) {
        delete this.counters[ctr_name];
        delete this.operator[ctr_name];
      }
    }
  })
