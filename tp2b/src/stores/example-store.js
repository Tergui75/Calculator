import { reactive } from "vue";
import { defineStore } from "pinia";
import { LocalStorage } from "quasar";
import { Dialog } from "quasar";
import { defineComponent, ref } from 'vue';

export const states = reactive({
    counters: {},
    operator: {},
    virgule:0,
    total() {
      let result =0;
      var operator ='+';
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
    },
    add_number(ctr_name,number){
      var valeur=this.counters[ctr_name].toString();
      if(valeur==0){
        this.counters[ctr_name] = '';
        valeur='';
      }
      if(number=="11"){
        valeur = valeur * (-1);
      }
      else if(number=="12"){
        if(!valeur.includes('.')) {
          this.virgule = 1;
        }
      }
      else{
        if(this.virgule == 1){
          valeur += '.';
          valeur += number.toString();
          
          this.virgule=0;
        }
        else{
          valeur += number.toString();
        }
      }
      this.counters[ctr_name] = parseFloat(valeur);
    },

    del_number(ctr_name){
      var valeur = this.counters[ctr_name];
      var newvaleur = Math.floor(valeur / 10);
      this.counters[ctr_name] = newvaleur;
    }
  })
