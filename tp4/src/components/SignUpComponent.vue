<script setup>
import { defineComponent, ref, reactive, toRefs} from 'vue'
import useAuthUser from 'src/composables/useAuthUser'
import useNotify from 'src/composables/useNotify'
import { useRouter } from 'vue-router'
import InputEmailComponent from 'src/components/InputEmailComponent.vue'
import InputPasswordComponent from 'src/components/InputPasswordComponent.vue'

defineComponent({ name: 'SignUpComponent' })

const router = useRouter()
const { signUp, user } = useAuthUser()
//const userName = user.user_metadata.name
const { notifyError, notifySuccess } = useNotify()
const form = reactive({
  name: '',
  email: '',
  password: ''
})

const handleSignUp = async () => {
  try {
    user.value = await signUp(form)
    // ({ email, password } = form.value)
    notifySuccess(`Successful sign up as ${ form.email } and automatically signed in`)
    router.push({
      name: 'emailConfirmationPage',
      params: { email: form.email }
    })
  } catch (error) {
    notifyError(error.message)
  }
}
</script>

<template lang="pug">
q-form.row.justify-center(@submit.prevent="handleSignUp")
  .col-md-4.col-sm-6.col-xs-10.q-gutter-y-md
    q-input(
      label="Name",
      v-model="form.name",
      lazy-rules,
      :rules="[val => (val && val.length > 0) || 'Name is required']"
      )
    //p Name: {{ form.name }}
    InputEmailComponent(v-model="form.email")
    //p Email: {{ form.email }}
    InputPasswordComponent(v-model="form.password")
    //p Password: {{ form.password }}
    .full-width.q-pt-md.q-gutter-y-sm
      q-btn.full-width(
        label="Sign Up",
        color="primary",
        outline, rounded,
        type="submit"
      )
</template>

// kuezabeiz@LDR117
// kuezabeiz@CRI117
// kuezabeiz@Home117
