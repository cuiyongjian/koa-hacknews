<template>
  <div>
    <h1>用户信息</h1>
    <div>
      <ul>
        <li>uid: {{userInfo.id}}</li>
        <li>用户名: {{userInfo.username}}</li>
        <li>昵称: {{fullUserInfo.nickname}}</li>
        <li>年龄: {{fullUserInfo.age}}</li>
        <li>邮箱: {{fullUserInfo.email}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      fullUserInfo: {}
    }
  },
  computed: {
    ...mapGetters('user', ['userInfo'])
  },
  async created() {
    const rel = await this.$http.get('/api/user/' + this.userInfo.username)
    console.log('rel', rel.data)
    this.fullUserInfo = rel.data.data
  }
}
</script>

<style lang="stylus">

</style>
