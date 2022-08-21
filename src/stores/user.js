import { defineStore } from 'pinia'
import { endpoints, baseURL } from '../boot/api'
import axios from 'axios'
import { i18n } from '../boot/i18n'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    user: {},
  }),
  getters: {
    userGetter: (state) => state.user,
    roleGetter: (state) => state.user.role || '',
  },
  actions: {
    async login(payload) {
      await axios
        .post(`${baseURL}${endpoints.login}`, payload)
        .then((res) => {
          if (res.status == 200) {
            const token = res.data.token
            const user = res.data.user
            console.log(user)
            this.user = user
            localStorage.setItem('token', token)
            axios.defaults.headers.common['Authorization'] = token
          }
        })
        .catch((err) => {
          console.log('Login Failed', err)
        })
    },
    async register(payload) {
      await axios
        .post(`${baseURL}${endpoints.register}`, payload)
        .then((res) => {
          if (res.status == 200) {
            const token = res.data.token
            const user = res.data.user
            console.log(user)
            this.user = user
            localStorage.setItem('token', token)
            axios.defaults.headers.common['Authorization'] = token
          }
        })
        .catch((err) => {
          console.log('Login Failed', err)
        })
    },
    //this is for demo of i18n
    i18nTest() {
      alert(i18n.t('welcome'))
    },
  },
  persist: true,
})
