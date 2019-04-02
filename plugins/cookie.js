export default function injectCookie (context, inject) {
  const getCookieVal = key => {
    const foundVal = document.cookie
      .split(';')
      .map(str => str.replace(/^\s+/, ''))
      .map(str => str.split('='))
      .find(([k, v]) => k === key)
    return foundVal && foundVal[1]
  }

  inject('cookie', { get: getCookieVal })
}
