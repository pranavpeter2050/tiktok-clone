import { defineStore } from "pinia"

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
    
  },
  persist: true
})