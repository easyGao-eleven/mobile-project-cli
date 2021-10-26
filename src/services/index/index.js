import { request, METHOD } from '../../utils/request'
import {
  checkIdCard
} from '../api.js'

// 测试
export function testCheckIdCard (params) {
  return request(checkIdCard, METHOD.POST, params)
}
