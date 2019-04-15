<template>
  <div class="news-item">
    <span class="score">{{ item.score }}</span>
    <span class="title">
      <template v-if="item.url">
        <a class="outer-link" :href="item.url" target="_blank" rel="noopener">{{ item.title }}</a>
        <!-- <span class="host">({{ item.url }})</span> -->
      </template>
      <template v-else>
        <router-link :to="'/detail/' + item.id">{{ item.title }}</router-link>
      </template>
    </span>
    <span>{{item.time}}</span>
  </div>
</template>


<script>
export default {
  props: ['item']
};
</script>


<style lang="stylus">
.news-item {
  display: flex;
  align-items: center;
  justify-content: left;
  /* height: 40px; */
  padding: 20px;
  border-bottom: 1px solid #ccc;
  & span:last-child {
    flex: 1;
    text-align: right;
  }
}
.score {
  font-weight: bold
  width: 80px;
}
.title a {
  color: #e04242
}
.title a.outer-link{
  color: #2d8cf0
}
</style>
