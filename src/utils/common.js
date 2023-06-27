/**
 * 判断设备是否是IOS
 * @returns
 */
export function isIOS() {
  const u = navigator.userAgent
  return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
}
