import axios from 'axios'
import { Toast } from 'vant'
axios.defaults.timeout = 10000
// 签名字符串
// const noncestr = 'THISNEW'

const METHOD = {
  GET: 'get',
  POST: 'post',
  DEFAULT_POST: 'default_post',
  DEFAULT_GET: 'default_post',
  RSA_POST: 'rsa_post'
}

/**
 * 制作签名
 * @param timestamp 时间戳
 * @param token token
 * @param key key
 * @returns {string} 返回签名
 */
// function handleSign (timestamp) {
//   const str = 'yxxzyy'
//   const signString = `noncestr=${noncestr}&thirdSourceCode=${str}&timestamp=${timestamp}&key=0361db81627d4fba813f68e511f93211`
//   // console.log(signString, 'signString');
//   const sign = md5(signString).toUpperCase()
//   return sign
// }

/**
 * axios请求
 * @param url 请求地址
 * @param method {METHOD} http method
 * @param params 请求参数
 * @returns {Promise<AxiosResponse<T>>}
 */
async function request (url, method, params, requestType) {
  return axios.post(
    url,
    {
      ...params
    },
    requestType
  )
  // const timestamp = new Date().getTime()
  // const sign = await handleSign(timestamp)
  // console.log(params)
  // let str
  // switch (method) {
  //   case METHOD.GET:
  //     return axios.get(url, {
  //       params
  //     })
  //   case METHOD.POST:
  //     return axios.post(
  //       url,
  //       {
  //         thirdSourceCode: 'yxxzyy',
  //         timestamp,
  //         sign,
  //         noncestr,
  //         reqData: params
  //       },
  //       requestType
  //     )
  //   case METHOD.DEFAULT_POST:
  //     return axios.post(url, params)
  //   case METHOD.DEFAULT_GET:
  //     return axios.get(url, params)
  //   case METHOD.RSA_POST:
  //     // console.log(dealRsaSign(JSON.stringify(params)))
  //     str = dealRsaSign(JSON.stringify(params))
  //     return axios.post(url, str, {
  //       headers: {
  //         'Content-Type': 'text/plain'
  //       }
  //     })
  // }
}

// function dealRsaSign (msg) {
//   const _serverPublicKey =
//     '-----BEGIN PUBLIC KEY-----' + ServerPublicKey + '-----END PUBLIC KEY-----'
//   const myEncrypt = new JSEncrypt()
//   myEncrypt.setPublicKey(_serverPublicKey)
//   const cryptStr = myEncrypt.encryptLong(msg)
//   // console.log(cryptStr);
//   return cryptStr
// }

let ajaxTimes = 0

axios.interceptors.request.use(
  (config) => {
    ajaxTimes++
    Toast.loading({
      message: '加载中...',
      forbidClick: true,
      duration: 0
    })
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)
axios.interceptors.response.use(
  (response) => {
    ajaxTimes--
    if (ajaxTimes === 0) {
      Toast.clear()
    }
    // 拦截响应，做统一处理
    return response
  },
  // 接口错误状态处理，也就是说无响应时的处理
  (error) => {
    ajaxTimes--
    if (ajaxTimes === 0) {
      Toast.clear()
      Toast.fail('请求错误')
    }
    return Promise.reject(error) // 返回接口返回的错误信息
  }
)

export { request, METHOD }
