import getIdsByType from '@/apis/get-ids-by-type'
import getItemsByIds from '@/apis/get-items-by-ids'

export default {
  // 获取当前type的所有的新闻列表数据, 并获取当前页的数据
  async FETCH_LISTS({ dispatch, commit, state, getters }, payload = {}) {
    const { type } = (payload.route || state.route)['params'] // 从 vue-router-sync 中拿出 type
    const { data } = await getIdsByType(type)

    if (!data) return
    commit('SET_ID_LISTS', { type, ids: data }) // 把 ids 都存储下来 (要分type，因为分页要基于某个type分)
    dispatch('FETCH_ITEMS', { ids: getters.activeIds }) //
  },
  async FETCH_ITEMS({ dispatch, commit, getters, state }, { ids }) {
    // 再把当前页的id的详细内容拉取回来
    let curIds = ids
    // 获取过的id就不获取了
    curIds = curIds.filter(id => {
      const item = state.itemLists[id]
      return !item
    })

    if (curIds.length) {
      const res = await getItemsByIds(curIds)
      if (!res) return
      commit('SET_ITEM_LISTS', res)
    }
  }
}
