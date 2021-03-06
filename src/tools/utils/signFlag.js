/**
 * @Author: Firmiana
 * @Date: 2019-04-03 11:40:22
 * @Last Modified by: huweijian
 * @Last Modified time: 2019-04-28 17:17:46
 * @Desc: 签名加密方法
 */

import md5 from 'md5'

/**
 * 生成签名
 * @param timestamp
 * @param token
 * @returns {*}
 */
export function sign(timestamp, token) {
  return md5('xxx')
}

/**
 * 生成签名
 * @param token
 * @returns {{timestamp: number, sign}}
 */
export function createSign(token) {
  const timestamp = +new Date()
  // console.log(strStartEnd(token), strStartEnd(timestamp))
  return {
    timestamp,
    sign: sign(timestamp, token)
  }
}

/**
 * 生成唯一标识
 */
export function createUniqueString() {
  const timestamp = +new Date() + ''
  const randomNum = parseInt((1 + Math.random()) * 65536) + ''
  return (+(randomNum + timestamp)).toString(32)
}
