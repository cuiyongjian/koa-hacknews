<template>
  <div id="app">
    <div class="layout">
        <Layout>
            <Header :style="{position: 'fixed', width: '100%'}">
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <router-link tag="a" to="/new" class="layout-logo">腾讯新闻</router-link>
                    <div class="layout-nav">
                        <MenuItem name="1" to="/new">
                            <Icon type="ios-navigate"></Icon>
                            最新
                        </MenuItem>
                        <MenuItem name="2" to="/top">
                            <Icon type="ios-keypad"></Icon>
                            最热
                        </MenuItem>
                    </div>
                    <div class="user-nav">
                        <MenuItem name="1" to="/login">
                            <Icon type="ios-navigate"></Icon>
                            登录
                        </MenuItem>
                        <router-link to="profile">
                          <Avatar icon="ios-person" size="default" />
                          <span style="color: white; margin-left: 8px; cursor: pointer;">崔永键</span>
                        </router-link>
                    </div>
                </Menu>
            </Header>
            <Content :style="{margin: '100px 100px 40px', background: '#fff', minHeight: '500px'}">
                <router-view></router-view>
            </Content>
        </Layout>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    console.log('ocnfig')

  }
}
</script>

<style lang="stylus">
    .layout{
        position: relative;
        overflow: hidden;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
        color: white;
        line-height: 30px;
        text-align: center;
    }
    .layout-nav{
        float: left;
        margin-left: 30px;
    }
    .user-nav {
      float: right;

    }
</style>
