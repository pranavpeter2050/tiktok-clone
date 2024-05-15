import { defineStore } from "pinia"

export const useProfileStore = defineStore('profile', {
  state: () => ({ 
    id: '',
    name: '',
    bio: '',
    image: '',
    post: null,
    posts: null,
    allLikes: 0,
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    
  },
  persist: true
})