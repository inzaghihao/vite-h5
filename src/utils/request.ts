import axios, { AxiosRequestConfig } from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: '/api', // 基础api
  timeout: 10000, // 请求超时时间
})

// 请求拦截
service.interceptors.request.use(
  (config): AxiosRequestConfig<any> => {
    return config
  },
  (error) => {
    return error
  }
)

// 响应拦截
service.interceptors.response.use((res) => {
  return res
})

export default service
