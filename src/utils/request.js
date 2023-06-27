import axios from 'axios'
import qs from 'qs'
import { Toast } from 'vant'

const service = axios.create({
  baseURL: '/'
})

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'

service.interceptors.request.use(
  (config) => {
    const { data, method } = config
    if (method.toLowerCase() === 'post' && typeof data === 'object') {
      config.data = qs.stringify(data)
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    const res = response.data
    const config = response.config
    if (res?.errno === 0) {
      return res
    }
    if (config.showToast !== false) {
      Toast(res.errmsg || 'Error')
    }

    return Promise.reject(res || {})
  },
  (error) => {
    const res = error.response
    const req = error.request
    let msg = '未知错误'

    if (req.readyState === 4 && req.status === 0) {
      msg = '请求超时，请重试'
    }

    if (res) {
      const { status } = res
      switch (status) {
        case 400:
          msg = '请求错误(400)'
          break
        case 401:
          msg = '登录过期'
          break
        case 403:
          msg = '拒绝访问(403)'
          break
        case 404:
          msg = '请求出错(404)'
          break
        case 408:
          msg = '请求超时(408)'
          break
        case 500:
          msg = '服务器错误(500)'
          break
        case 501:
          msg = '服务未实现(501)'
          break
        case 502:
          msg = '网络错误(502)'
          break
        case 503:
          msg = '服务不可用(503)'
          break
        case 504:
          msg = '网络超时(504)'
          break
        case 505:
          msg = 'HTTP版本不受支持(505)'
          break
        default:
          msg = `连接出错(${status})!`
      }
    }

    Toast(msg)

    return Promise.reject(error)
  }
)

export default service
