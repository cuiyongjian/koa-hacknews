<template>
  <div class="login-wrapper">
    <h2>欢迎登录腾讯新闻</h2>
    <p style="color: red;">{{errMsg}}</p>
    <Form :model="formItem">
      <FormItem prop="username">
          <Input v-model="formItem.username" placeholder="请输入用户名..."></Input>
        </FormItem>
      <FormItem prop="password">
          <Input type="password" v-model="formItem.password" placeholder="请输入密码"></Input>
      </FormItem>
      <FormItem>
          <Button class="login-btn" type="primary" @click="handleSubmit()">登录</Button>
      </FormItem>
    </Form>
    <div>
      {{formItem.username}} - {{formItem.password}}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formItem: {
        username: '',
        password: ''
      },
      errMsg: ''
    }
  },
  methods: {
    handleReset() {

    },
    async handleSubmit() {
      const rel = await this.$store.dispatch('user/login', this.formItem)
      if (rel.status === 0) {
        // 登录成功
        this.$router.push('/profile')
      }
      else {
        this.errMsg = rel.msg
      }
    }
  }
}
</script>

<style lang="stylus">
.login-wrapper {
  padding: 30px;
  text-align: center;
  & h2 {
    margin-bottom 40px
  }
}
.login-btn {
  width: 100%;
}
</style>
