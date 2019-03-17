export default function storeWatchPlugin ({ store }) {
  store.watch(state => {
    const { lastName, firstName } = state.sample.storeWatch
    return `${lastName} ${firstName}`
  }, val => {
    store.commit('sample/storeWatch/setFullName', val)
  })
}
