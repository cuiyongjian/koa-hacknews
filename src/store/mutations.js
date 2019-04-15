import Vue from 'vue'

export default {
  SET_ID_LISTS(state, { type, ids }) {

    state.idLists[type] = ids
  },
  SET_ITEM_LISTS(state, items) {

    // 由于新增id为key的属性，所以 Vue.set
    items.forEach(item => {
      if (item) {
        Vue.set(state.itemLists, item.id, item)
      }
    })
  }
}
