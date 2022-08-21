import axios from 'axios'
const baseURL = 'https://api.uuggaa.com'
const axiosApi = axios.create({ baseURL })
const endpoints = {
  login: '/a/users/login',
  register: '/a/users/register',
  getShop: '/a/shop/get-Shop',
}

// console.log("init data", initialData);
export { baseURL, axiosApi, endpoints }
