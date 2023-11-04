<script setup>
import { defineComponent } from "vue";
import TechStackLinks from "src/components/TechStackLinks.vue";
import useAuthUser from "src/composables/useAuthUser";
import useNotify from "src/composables/useNotify";
import { useRouter } from "vue-router";

defineComponent({ name: "MainLayout" });

const router = useRouter();
const { isSignedIn, signOut, user } = useAuthUser();
const { notifyError, notifySuccess } = useNotify();
const handleSignOut = async () => {
  try {
    const oldUser = await signOut();
    notifySuccess(`Successful sign out as ${oldUser.email}!`);
    console.log(`isSignedIn: ${isSignedIn}`);
    router.push({ name: "IndexPage" });
  } catch (error) {
    notifyError(error.message);
  }
};
</script>

<template lang="pug">
q-layout(view="hHh lpR fFf")
  q-header.bg-purple-9(elevated)
    q-toolbar.q-pa-lg.text-h4.items-center.justify-center
      q-space
      TechStackLinks.q-pr-lg
      span.text-h6.text-weight-medium.flex.flex-center
        span.text-yellow-2 The Adder
        span.q-mx-sm.row
          .huggyBearFont.text-italic.text-h4.text-blue-3 QUASAR
          //.huggyBearFont.text-italic.text-h4.text-teal-2 BASE
        span.text-yellow-2 starter app
      q-space
      q-tabs(shrink dense no-caps align="right")
        q-route-tab(to="/", exact, label="Keypad Operand",data-cy="btn-keypad-operand")
        q-route-tab(to="/input", exact, label="Input Operand", data-cy="btn-input-operand")
        q-route-tab(v-if="!isSignedIn", label="Sign In", icon="login", to="/signInPage",data-cy="btn-signIn")
        template(v-if="isSignedIn")
          q-route-tab(label="Sign Out", icon="logout", to="/", @click="handleSignOut",data-cy="btn-signOut")
          q-tab(disable,:label="user.user_metadata.name", icon="person")
        q-route-tab(to="/config", exact, icon="settings")
  q-page-container
    router-view
</template>
