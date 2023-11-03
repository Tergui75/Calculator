<script setup>
import { computed } from 'vue'
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>

<template lang="pug">
q-input(
  label="Email",
  :model-value="modelValue",
  @update:model-value="(value) => $emit('update:modelValue', value)"
  lazy-rules,
  :rules="[val => (val && val.length > 0) || 'Email is required']",
  type="email"
  )
</template>
