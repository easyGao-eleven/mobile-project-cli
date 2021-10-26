const API_PROXY_PREFIX = '/api'
const BASE_URL = process.env.NODE_ENV === 'production' ? process.env.VUE_APP_API_BASE_URL : API_PROXY_PREFIX
module.exports = {
  // 验证身份证号
  checkIdCard: `${BASE_URL}/checkIdCard`
}
