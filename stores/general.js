import { defineStore } from "pinia"
import { useUserStore } from "./user"
import axios from "~/plugins/axios"

const $axios = axios().provide.axios

export const useGeneralStore = defineStore('general', {
  state: () => ({ 
    isLoginOpen: false,
    isEditProfileOpen: false,
    selectedPost: null,
    ids: null,
    isBackUrl: "/",
    posts: null,
    suggested: null,
    following: null
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    bodySwitch(val) {
      if (val) {
        document.body.style.overflow = 'hidden'
        return
      }
      document.body.style.overflow = 'visible'
    },

    allLowerCaseNoCaps(str) {
      return str.split(' ').join('').toLowerCase()
    },

    setBackUrl(url) {
      this.isBackUrl = url
    },

    async hasSessionsExpired() {
      await $axios.interceptors.response.use((response) => {
        // axios Call was successful, continue...
        return response;
      }, (error) => {
        switch(error.response.status) {
          case 401: // Not logged in
          case 419: // Session expired
          case 503: //Down for maintenance
            useUserStore().resetUser()
            window.location.href = '/';
            break;
          case 500:
            alert('Oops, something went wrong! The team has been notified.');
            break;
          default:
            // Allow individual requests to handle other errors
            return Promise.reject(error);
        }
      })
    }
  },
  persist: true
})