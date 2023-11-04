<script setup>
import { defineComponent } from "vue"

defineComponent({ name: "TechStackLinks" })
</script>

<template lang="pug">
span
  q-btn(
    flat,
    dense,
    href="https://quasar.dev/",
    )
    q-icon(name="img:icons/quasar.svg", size="md")
  q-btn(
    flat,
    dense,
    href="https://vuejs.org/",
    )
    q-icon(name="img:icons/vue.svg", size="md")
  q-btn.q-mr-xs(
    flat,
    dense,
    href="https://pugjs.org/api/getting-started.html"
    )
    q-icon(name="img:icons/pug.svg", size="md")
  q-btn(
    flat,
    dense,
    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    )
    q-icon(name="img:icons/js.svg", size="md")
  q-btn(
    flat,
    dense,
    href="https://www.cypress.io/"
    )
    q-icon(name="img:icons/cypressGreen.svg", size="md")
</template>
