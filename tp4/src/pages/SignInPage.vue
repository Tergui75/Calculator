<script setup>
import { defineComponent } from "vue"
import SignInComponent from 'src/components/SignInComponent.vue'

defineComponent({ name: "SignInPage" })
</script>

<template lang="pug">
q-page.q-pa-xl
  SignInComponent
</template>
