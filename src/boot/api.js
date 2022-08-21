import axios from 'axios'
const baseURL = 'https://api.uuggaa.com'
const axiosApi = axios.create({ baseURL })
const endpoints = {
  login: '/a/users/login',
  register: '/a/users/register',
}

// console.log("init data", initialData);
export { baseURL, axiosApi, endpoints }
