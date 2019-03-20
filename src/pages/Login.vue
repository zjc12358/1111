<template>
  <div>
    <div>登录</div>
    <div>欢迎回到管理系统</div>
    <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    <mt-checklist
      v-model="value"
      :options="option1">
    </mt-checklist>
  </div>
</template>

<script>
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

</style>
