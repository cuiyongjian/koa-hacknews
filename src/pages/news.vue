<template>
  <div class="news-wrapper">
    <div class="pager">
      <Page :current="page" :total="dataTotal" :page-size="size" :show-total="true" @on-change="onChange" />
    </div>
    <ul>
      <li v-for="item in activeItems" :key="item.id">
        <item :item="item"></item>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters, mapState } from 'vuex'
import Item from '../components/news-item'

export default {
  computed: {
    page() {
      return Number(this.$route.params.page) || 1
    },
    type() {
      return this.$route.params.type
    },
    ...mapGetters(['activeItems']),
    ...mapState({
      size: 'size',
      dataTotal(state) {
        return state.idLists[this.type].length
      }
    })
  },
  async beforeMount() {
    await this.fetchLists()
    console.log('fetch ok', this.$store, this.activeItems)
  },
  beforeRouteEnter(to, from, next) {
    console.log('1')
    next()
  },
  beforeRouteUpdate(to, from, next) {
    this.fetchLists({ route: to })
    // 页码重置
    console.log('state.page', this.$store.state.page)
    next()
  },
  methods: {
    onChange(page) {
      console.log('page', page)
      this.$router.push({
        params: {
          page
        }
      })
      this.fetchLists()
    },
    fetchLists(params) {
      this.$Loading.config({
        color: '#5cadff',
        failedColor: '#f0ad4e',
        height: 5
      });
      this.$Loading.start()
      this.$store.dispatch('FETCH_LISTS', params)
      this.$Loading.finish()
    }
  },
  components: {
    Item
  }
}
</script>


<style lang="stylus">
.pager {
  padding: 10px 10px;
  text-align: center;
}
.news-wrapper ul li{
  list-style none
}
</style>
