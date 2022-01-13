import axios from 'axios'
const service = axios.create({
  timeout: 5000 // request timeout
})
service.interceptors.response.use(
  response => {
    const res = response.data
    return res.data
  },
  error => {
    console.log('err=-=' + error) // for debug
    return Promise.reject(error)
  }
)

export default service