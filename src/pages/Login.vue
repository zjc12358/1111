<template>
  <div class="login-container">
    <div style="height: 12vw;width: 100%;"></div>
    <div>
      <div>登录</div>
      <div>欢迎回到管理系统</div>
      <mt-field style="background: transparent" label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
      <mt-field style="background: transparent" label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
    </div>
  </div>
</template>

<script>
  import '../untils/fn'
  export default {
    name: "Login",
    data () {
      return {
        value: [],
        username: '',
        password: ''
      }
    },
    created () {
      this.option1 = ['保存账号密码']
    },
    methods: {

    }
  }

</script>

<style scoped>
  .login-container{
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: url("../assets/login-bg.png") no-repeat;
    background-size: 100vw 100vh;
  }
  .login-container>div:nth-child(2){
    flex: 1;
    padding-top: 18vw;
    color: white;
    padding-left: 8.3vw;
  }
  .login-container>div:nth-child(2)>div:nth-child(1){
    font-size: 8.3vw;
    letter-spacing: 1vw;
  }
  .login-container>div:nth-child(2)>div:nth-child(2){
    margin-top: 3.7vw;
    font-size: 7vw;
    letter-spacing: 1vw;
  }
</style>
