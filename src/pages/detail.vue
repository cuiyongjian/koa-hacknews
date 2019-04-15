<template>
  <div v-if="content" class="detail-wrapper">
    <Card style="width:350px">
      <h2 slot="title">{{ content.title }}</h2>
      <ul class="info">
        <li>{{ new Date(content.time) }}</li>
        <li>author: {{ content.by }}</li>
        <li v-if="content.url"> {{ content.url | host }} </li>
      </ul>
    </Card>
  </div>
</template>

<script>
export default {
  computed: {
    content() {
      debugger
      return this.$store.state.itemLists[this.$route.params.id]
    }
  },
  created() {
    this.$store.dispatch('FETCH_ITEMS', { ids: [this.$route.params.id] })
  }
}
</script>

<style lang="stylus">
.detail-wrapper {
  display: flex;
  justify-content: center;
  padding-top: 40px;
  & li {
    list-style: none;
    /* line-height: 1; */
    margin: 5px;
  }
}
</style>

