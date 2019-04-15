export default {
  activeIds(state) {
    const { idLists, size } = state
    const page = Number(state.route.params.page) || 1
    const type = String(state.route.params.type)
    const start = (page - 1) * size
    const end = page * size

    return idLists[type].slice(start, end)
  },
  activeItems(state, getters) {

    return getters.activeIds.map(id => state.itemLists[id]).filter(item => item)
  }
}
