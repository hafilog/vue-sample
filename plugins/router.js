function afterEach (context, to, from) {
  context.store.commit('sample/afterEachDefault/setDefaultVal', 'Hello World!!')
}

export default (context) => {
  context.app.router.afterEach(afterEach.bind(null, context))
}
