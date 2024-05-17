import { defineStore } from "pinia"
import axios from "~/plugins/axios"

const $axios = axios().provide.axios

export const useUserStore = defineStore('user', {
  state: () => ({ 
    id: '',
    name: '',
    bio: '',
    image: ''
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    async getTokens() {
      await $axios.get('/sanctum/csrf-cookie')
    },

    async login(email, password) {
      await $axios.post('/login', {
        email: email,
        password: password
      })
    },

    async getUser() {
      let response = await $axios.get('/api/logged-in-user')

      this.$state.id = response.data[0].id
      this.$state.name = response.data[0].name
      this.$state.bio = response.data[0].bio
      this.$state.image = response.data[0].image
    },
  },
  persist: true
})