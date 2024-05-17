<template>
  <div class="text-center text-[28px] mb-4 font-bold">Log in</div>

  <div class="px-6 pb-1.5 text-[15px]">Email address</div>

  <div class="px-6 pb-2">
    <TextInput
      placeholder="Email address"
      v-model:input="email"
      inputType="email"
      :autofocus="true"
      :error="errors && errors.email ? errors.email[0] : ''"
    />
  </div>

  <div class="px-6 pb-2">
    <TextInput
      placeholder="Password"
      v-model:input="password"
      inputType="password"
    />
  </div>

  <div class="px-6 text-[12px] text-gray-600">Forgot password?</div>

  <div class="px-6 pb-2 mt-6">
    <button 
      :disabled="(!email || !password)"
      :class="(!email || !password) ? 'bg-gray-200' : 'bg-[#f02c56]'"
      @click="login"
      class="w-full text- font-semibold text-white py-3 rounded-sm"
    >
      Log in
    </button>
  </div>
</template>

<script setup>
const { $userStore, $generalStore } = useNuxtApp()
let email = ref(null)
let password = ref(null)
let errors = ref(null)

const login = async () => {
  errors.value = null
  try {

    await $userStore.getTokens()
    await $userStore.login(email.value, password.value)
    await $userStore.getUser()

    $generalStore.isLoginOpen = false
  }
  catch (error) {
    // console.log(error)
    errors.value = error.response.data.errors
  }

}
</script>