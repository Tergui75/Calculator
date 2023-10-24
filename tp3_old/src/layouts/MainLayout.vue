<script setup>
import { defineComponent } from "vue";
import TechStackLinks from "src/components/TechStackLinks.vue";

defineComponent({ name: "MainLayout" });
</script>

<template lang="pug">
q-layout(view="hHh lpR fFf")
  q-header.bg-purple-9(elevated)
    q-toolbar.q-pa-lg.text-h4.items-center.justify-center
      q-space
      TechStackLinks.q-pr-lg
      span.text-h6.text-weight-medium.flex.flex-center
        span.text-yellow-2 The multipage 2 operand calculator
        span.q-mx-sm.row
          .huggyBearFont.text-italic.text-h4.text-blue-3 QUASAR
          //.huggyBearFont.text-italic.text-h4.text-teal-2 BASE
        span.text-yellow-2 app
      q-space
      q-tabs(shrink dense no-caps align="right")
        q-route-tab(to="/" exact label="Home" data-cy="Home")
        q-route-tab(to="/about" exact label="About" data-cy="About")
        q-route-tab(to="/config" exact icon="settings" data-cy="Config")
  q-page-container
    router-view
</template>
