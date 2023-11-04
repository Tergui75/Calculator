<script setup>
import { defineComponent, onMounted, reactive } from "vue";
import useAuthUser from "src/composables/useAuthUser";
import useNotify from "src/composables/useNotify";
import { useRouter } from "vue-router";
import InputEmailComponent from "src/components/InputEmailComponent.vue";
import InputPasswordComponent from "src/components/InputPasswordComponent.vue";

defineComponent({ name: "SignInComponent" });

const router = useRouter();
const { isSignedIn, signIn, user } = useAuthUser();
console.log(user);
//console.log(`User: ${ user.user_metadata.name.value }`)
//const userName = user.user_metadata.name
const { notifyError, notifySuccess } = useNotify();
const form = reactive({ email: "", password: "" });

const handleSignIn = async () => {
  try {
    user.value = await signIn(form);
    // ({ email, password } = form.value)
    notifySuccess(`Successful sign in as ${user.value.email}!`);
    router.push({
      name: "IndexPage",
    });
  } catch (error) {
    console.log(error);
    notifyError(error.message);
  }
};
</script>

<template lang="pug">
q-form.row.justify-center(@submit.prevent="handleSignIn")
  .col-md-4.col-sm-6.col-xs-10.q-gutter-y-md
    InputEmailComponent(v-model="form.email")
    //p Email: {{ form.email }}
    InputPasswordComponent(v-model="form.password")
    //p Password: {{ form.password }}
    .full-width.q-pt-md
      q-btn.full-width(
        label="Sign In",
        color="primary",
        outline, rounded,
        type="submit"
        data-cy="btn-submit",
        )
      // q-btn.full-width(
        label="Forgot Password ?",
        color="primary",
        flat,
        :to="{ name: 'forgot-password'}",
        size="sm"
        )
</template>
