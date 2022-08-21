import { defineStore } from 'pinia'
import { endpoints, baseURL } from '../boot/api'
import axios from 'axios'
import { i18n } from '../boot/i18n'

export const useShopStore = defineStore({
  id: 'shop',
  state: () => ({
    shop: {},
  }),
  getters: {},
  actions: {
    async getShop() {
      await axios
        .post(`${baseURL}${endpoints.getShop}`)
        .then((res) => {
          if (res.status == 200) {
            const shop = res.data.shop
            console.log(user)
            this.shop = user
          }
        })
        .catch((err) => {
          console.log('Fetch Failed', err)
        })
    },
  },
  persist: true,
})
