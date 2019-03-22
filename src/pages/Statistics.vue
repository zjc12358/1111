<template>
  <div>
    Statistics
    <sendMsgBtn :getNumBtnDisProps="false" :sendTimeProps="60" :getNumMsgProps="'获取验证码'" :callback="sendMsg" />
    <tabbar :selected="selected" :tabs='tabs'></tabbar>
  </div>
</template>

<script>
    import tabbar from "../components/tabbar";
    import sendMsgBtn from "../components/sendMsgBtn";

    export default {
      name: "Statistics",
      components: {
        tabbar,
        sendMsgBtn
      },
      data(){
        return {
          selected: "ShoppingList",
          tabs: this.$store.state.tabs
        }
      },
      methods:{
        fn(){
          console.log('我是传入的方法')
        }
      }
    }
</script>

<style scoped>

</style>
