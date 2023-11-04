<script setup>
import { defineComponent, defineProps } from 'vue'

defineComponent({ name: 'EmailConfirmationComponent' })

defineProps(['email']);
</script>

<template lang="pug">
h6.flex.flex-center
  span.text-deep-purple-7.q-mx-sm To finish sign in please click on the confirmation link sent to:
  span.text-cyan-6 {{ $route.params.email }}
</template>
