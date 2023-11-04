<script setup>
import { defineComponent } from "vue"
import SignUpComponent from 'src/components/SignUpComponent.vue'

defineComponent({ name: "SignUpPage" })
</script>

<template lang="pug">
q-page.q-pa-xl
  SignUpComponent
</template>
