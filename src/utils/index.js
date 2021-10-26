// 替换文本指定位置的字符
export function replaceStr ({
  startPosition = 0,
  endPosition = 0,
  originStr = '',
  replaceStr = ''
}) {
  if (originStr === '') {
    throw new TypeError('请传入有效文本！')
  }
  let finalStr = ''
  const repeatStrLength = endPosition - startPosition
  const middleStr = ''.padEnd(repeatStrLength, replaceStr)
  finalStr = `${originStr.slice(0, startPosition)}${middleStr}${originStr.slice(
      endPosition
    )}`
  return finalStr
}

// 判断当前机型是否是异形屏
export function isIphonexSeries () {
  if (typeof window !== 'undefined' && window) {
    return /iphone/gi.test(window.navigator.userAgent) && window.screen.height >= 812
  }
  return false
};

/* 函数防抖 */
export function debounce (fn, interval) {
  let timer = null
  const gapTime = interval || 1000// 间隔时间，如果interval不传，则默认1000ms
  return function () {
    clearTimeout(timer)
    const context = this
    const args = arguments// 保存此处的arguments，因为setTimeout是全局的，arguments不是防抖函数需要的。
    timer = setTimeout(function () {
      fn.call(context, args)
    }, gapTime)
  }
}
