import { defineStore } from "pinia";
import { LocalStorage } from "quasar";

export const useCounterStore = defineStore("counters", {
  state: () => ({
    counters: {
      A: 0,
      B: 0,
    },
    operator: "+",
  }),

  getters: {
    total(state) {
      switch (state.operator) {
        case "+":
          return state.counters["A"] + state.counters["B"];
        case "-":
          return state.counters["A"] - state.counters["B"];
        case "*":
          return state.counters["A"] * state.counters["B"];
        case "/":
          return state.counters["A"] / state.counters["B"];
        default:
          return 0;
      }
    },
  },
  actions: {
    increment(ctr_name) {
      this.counters[ctr_name]++;
    },
    decrement(ctr_name) {
      this.counters[ctr_name]--;
    },
    reset(ctr_name) {
      this.counters[ctr_name] = 0;
    },
    setVal(ctr_name, val) {
      this.counters[ctr_name] = val;
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
  },
});
