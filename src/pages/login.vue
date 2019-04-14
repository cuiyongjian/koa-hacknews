<template>
  <div class="login-wrapper">
    <h2>欢迎登录腾讯新闻</h2>
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
      }
    }
  },
  methods: {
    handleReset() {

    },
    handleSubmit() {
      // 我们需要刷新时也有登录态，因此我们的token要写到sessionStorage/cookie当中（不能放在store里)

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
