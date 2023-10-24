import { reactive } from "vue";
import { defineStore } from "pinia";
import { LocalStorage } from "quasar";
import { Dialog } from "quasar";
import { defineComponent, ref } from 'vue';

export const states = reactive({
    counters: {},
    operator: {},
    virgule:0,
    total() {// Permet de faire le total de tous les counters
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
    addCounter() {//Permet de rajouter un counter égale à 0 et son operateur qui le suit +
      const name = prompt("Name of the new operand");
      
    if(name !== null){
      this.counters[name] = 0;
      this.operator[name]=ref('+');
    }
    },
    delCounter(ctr_name) {//Permet de supprimer un counter
      if (ctr_name in this.counters) {
        delete this.counters[ctr_name];
        delete this.operator[ctr_name];
      }
    },
    add_number(ctr_name,number){//Permet d'ajouter un chiffre à la suite du nombre du counter identifier
      var valeur=this.counters[ctr_name].toString();
      if(valeur==0){
        this.counters[ctr_name] = '';
        valeur='';
      }
      if(number=="11"){//Le nombre doit devenir négatif
        valeur = valeur * (-1);
      }
      else if(number=="12"){//cas du nombe à virigule, enregistre dans une variable pour pouvoir afficher la virigule au prochain chiffre ajouté
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

    del_number(ctr_name){//Permet d'enlever le dernier chiffre du nombre du counter identifier
      var valeur = this.counters[ctr_name].toString(); // Convertir en chaîne de caractères
      var parts = valeur.split('.'); // Diviser en parties avant et après la virgule
    
      if (parts[1]) {
        // Si le nombre a une partie après la virgule
        parts[1] = parts[1].slice(0, -1); // Supprimer le dernier chiffre après la virgule
      } else {
        parts[0] = parts[0].slice(0, -1); // Supprimer le dernier chiffre avant la virgule
      }
    
      this.counters[ctr_name] = parseFloat(parts.join('.')); // Rejoindre les parties et convertir en nombre à virgule flottante
    }
  })
