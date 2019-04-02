const COOKIE_KEY = 'InjectInInjectPage'

export default function injecUppercase (context, inject) {
  const uppercaseFunc = () => {
    const str = context.app.$cookie.get(COOKIE_KEY)
    return typeof str === 'string' ? str.toUpperCase() : str
  }

  inject('uppercase', { convert: uppercaseFunc })
}
