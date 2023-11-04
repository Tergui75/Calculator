<script setup>
import { defineComponent } from "vue"
import EmailConfirmationComponent from 'src/components/EmailConfirmationComponent.vue'

defineComponent({ name: "EmailConfirmationPage" })
</script>

<template lang="pug">
q-page
  EmailConfirmationComponent
</template>
