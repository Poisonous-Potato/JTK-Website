import axios from "axios"

const AUTH_URL = process.env.CMS_API_URL
const instance = axios.create({
  baseURL: AUTH_URL,
})

export default instance
