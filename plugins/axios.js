import axios from "axios"

export default defineNuxtPlugin((NuxtApp) => {
  
  axios.defaults.withCredentials = true
  axios.defaults.withXSRFToken = true;
  axios.defaults.baseURL = 'http://localhost:8040'
  return {
    provide: {
      axios: axios
    }
  }
})
