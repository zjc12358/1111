<template>
  <div class="login-container">
    <div style="height: 12vw;width: 100%;"></div>
    <div>
      <div>登录</div>
      <div>欢迎回到管理系统</div>

      <div style="margin-top: 12.5vw" class="input_group">
        <div class="icon"><img src="../assets/icon/people.svg" alt=""></div>
        <input :placeholder="loginWayControl==2 ? '请输入手机号' : '请输入用户名'" type="text">
      </div>
      <div style="margin-top: 8vw" class="input_group">
        <div class="icon"><img src="../assets/icon/lock.svg" alt=""></div>
        <input :placeholder="loginWayControl==2 ? '请输入验证码' : '请输入密码'" :type="loginWayControl==2 ? 'text':'password'">
        <mt-button @click="getNum(sendTime)" v-if="loginWayControl==2" type="primary" class="getNum" :disabled="getNumBtnDis">{{ getNumMsg }}</mt-button>
      </div>
      <div v-if="loginWayControl==1" class="rememberPwd">
        <input type="checkbox" id="checkbox">
        <label for="checkbox">记住账号和密码</label>
        <div style="flex: 1"></div>
        <div @click="moblieWay(2)">手机验证码登录</div>
      </div>
      <div v-if="loginWayControl==2" class="rememberPwd">
        <div @click="moblieWay(1)">账号密码登录</div>
      </div>
      <div class="subBtn">
        <mt-button @click="sub()" style="width:100%;height: 10vw; font-size: 4.2vw" type="primary">完成</mt-button>
      </div>
      <div class="rememberPwd">
        <input checked="checked" type="checkbox" id="checkbox2">
        <label for="checkbox2">登录即表示同意</label>
        <div style="color: blue;">《用户使用条款及服务协议》</div>
      </div>
    </div>
  </div>
</template>

<script>
  import '../untils/publicFn'
  import {Toast} from "mint-ui";
  export default {
    name: "Login",
    data () {
      return {
        value: [],
        username: '',
        password: '',
        loginWayControl: 1,
        sendTime: 60,
        getNumMsg: '获取验证码',
        getNumBtnDis: false
      }
    },
    created () {
      this.option1 = ['保存账号密码']
    },
    methods: {
      //手机登录
      moblieWay(n){
        this.loginWayControl = n
      },
      //获取验证码计时
      getNum(i){
        if (i == 0) {
          this.getNumBtnDis = false
          this.sendTime = 60
          this.getNumMsg = '获取验证码'
        } else {
          this.getNumBtnDis = true
          this.sendTime -= 1
          this.getNumMsg = this.sendTime + 'S后重新发送'
          setTimeout(()=>{
            this.getNum(this.sendTime)
          },1000)
        }
      },
      //完成提交
      sub() {
        this.$router.push('/')
        Toast({
          message: '登录成功',
          iconClass: 'mintui mintui-success'
        });
      }
    },
    watch: {

    }
  }

</script>

<style scoped>
  .login-container{
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: url("../assets/login-bg.png");
    background-size: 100vw 100vh;
  }
  .login-container>div:nth-child(2){
    flex: 1;
    padding-top: 18vw;
    color: white;
    padding-left: 8.3vw;
    padding-right: 8.3vw;
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
  .input_group{
    display: flex;
    align-items: center;
    font-size: 3.7vw;
    height: 9vw;
    border-bottom: 1px solid rgba(255,255,255,0.6);
    position: relative;
  }
  .input_group .icon{
    width: 10vw;
    text-align: center;
    border-right: 1px solid rgba(255,255,255,0.3);
    margin-right: 2vw;
  }
  .input_group .icon img{
    width: 4.8vw;
    height: 4.8vw;
  }
  .input_group input{
    background: transparent;
    color: white;
    border: 0;
    outline:none;
    font-size: 3.2vw;
    transition: background-color 50000s ease-in-out 0s;
  }
  .rememberPwd{
    font-size: 3.2vw;
    display: flex;
    align-items: center;
    height: 10vw;
    margin-top: 5vw;
  }
  .rememberPwd input{
    width: 3.7vw;
    height: 3.7vw;
    margin-right: 2vw;
    margin-left: 2vw;
  }
  .rememberPwd label{
    font-size: 3.2vw;
  }
  .subBtn .mint-button--primary{
    background: #4cbdf9;
  }
  .getNum{
    font-size: 3.2vw;
    min-width: 100px;
    width: 30vw;
    height: 10vw;
    border-radius: 2vw;
    position: absolute;
    right: 0;
    top: -1vw;
  }
</style>
