<script setup>
import { computed } from "vue";
import { ref } from "vue";

defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);

let showPassword = ref(false);
let passwordIcon = ref("visibility_off");

function toggleShowPassword() {
  showPassword.value = !showPassword.value;
  passwordIcon.value = showPassword.value ? "visibility" : "visibility_off";
  return { showPassword, passwordIcon };
}
</script>

<template lang="pug">
q-input(
  label="Password",
  :model-value="modelValue",
  lazy-rules,
  :rules="[val => (val && val.length > 0) || 'Password is required']",
  :type="showPassword ? 'text': 'password'"
  @update:model-value="(value) => $emit('update:modelValue', value)"
  )
  template(v-slot:append)
    q-icon(:name="passwordIcon", @click="toggleShowPassword")
</template>
