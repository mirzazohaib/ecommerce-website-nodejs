import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'development' ? 'http://localhost:4000/api' : '/',
  headers: {
    'Content-type': 'application/json'
  }
})

apiClient.interceptors.request.use(
  async (config) => {
    if (localStorage.getItem('userInfo'))
      config.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('userInfo')!).token}`
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

export default apiClient
