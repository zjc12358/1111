<template>
  <div class="login-container">
    <div style="height: 12vw;width: 100%;"></div>
    <div>
      <div>登录</div>
      <div>欢迎回到管理系统</div>

      <div style="margin-top: 12.5vw" class="input_group">
        <div class="icon"><img src="../assets/icon/people.svg" alt=""></div>
        <input v-if="loginWayControl==1" v-model="username" placeholder="请输入用户名" type="text">
        <input @blur="" v-if="loginWayControl==2" v-model="moblieNumber" placeholder="请输入手机号" type="text">
      </div>
      <div style="margin-top: 8vw" class="input_group">
        <div class="icon"><img src="../assets/icon/lock.svg" alt=""></div>
        <input v-model="password" v-if="loginWayControl==1" placeholder="请输入密码" type="password">
        <input v-model="codeNumber" @blur="" v-if="loginWayControl==2" placeholder="请输入验证码" type="text">
        <mt-button @click="getCode(sendTime)" v-if="loginWayControl==2" type="primary" class="getNum" :disabled="getNumBtnDis">{{ getNumMsg }}</mt-button>
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
  import {Toast,Indicator} from "mint-ui";
  export default {
    name: "Login",
    data () {
      return {
        value: [],
        username: '',
        moblieNumber: '',
        codeNumber: '',
        password: '',
        loginWayControl: 1,
        sendTime: 60,
        getNumMsg: '获取验证码',
        getNumBtnDis: true
      }
    },
    created () {
      this.option1 = ['保存账号密码']
      console.log(12121)
    },
    methods: {
      //判断手机号是否存在
      // checkMoblieReq(phone){
      //   this.$axios.get('/api/login/verifyPhone.lxkj',{params:{phone: phone}})
      //     .then((res)=>{
      //       console.log(res.data.code)
      //       if (res.data.code=== '200') {
      //         this.getNumBtnDis = false
      //       } else{
      //         // this.getNumBtnDis = true
      //       }
      //     }).catch((res)=>{
      //       console.log(res)
      //   })
      // },
      //手机登录
      moblieWay(n){
        this.loginWayControl = n
      },
      //获取验证码计时
      getCode(i){
        this.getSmsCodeReq()
        this.getNum(i)
      },
      getNum(i){
        // if (this.moblieBlur() === false) return
        if( this.isnull(this.moblieNumber) || !this.isMoblie(this.moblieNumber) ){
          this.getNumBtnDis = true
          this.sendTime = 60
          this.getNumMsg = '获取验证码'
          return
        }
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
        console.log(12)
        switch (this.loginWayControl) {
          case 1:
            console.log('qingqiu')
            if(this.isnull(this.username)){
              // 用户名为空
              Toast('用户名为空');
              return
            }
            if(this.isnull(this.password)){
              // 密码为空
              Toast('密码为空');
              return
            }
            this.loginReq()
            break;
          case 2:
            if(this.isnull(this.moblieNumber)){
              // 手机号为空
              Toast('手机号为空');
              return
            }
            if(this.isnull(this.codeNumber)){
              // 验证码为空
              Toast('验证码为空');
              return
            }
            this.verifyCodeReq();
            break;
        }
        // this.$router.push('/')
        // Toast({
        //   message: '登录成功',
        //   iconClass: 'mintui mintui-success'
        // });
      },
      //账号密码登录
      loginReq(){
        Indicator.open(); // loading
        let data = new FormData();
        data.append('ag_mobile',this.username);
        data.append('password',this.password);
        this.$axios.post('/api/login/loginByToken.lxkj',data)
          .then(res => {
            Indicator.close();
            if (res.data.code === '200') {
              this.$store.commit('saveToken',res.data.data)
              Toast({
                message: '操作成功',
                iconClass: 'mintui mintui-success'
              });
              this.$router.push('/')
            }else{
              Toast('账号密码错误!')
            }
          }).catch(res=>{
            Indicator.close();
            Toast('请检查网络设置！')
            console.log(res)
        })
      },
      //验证码登录
      verifyCodeReq(){
        Indicator.open(); // loading
        let data = new FormData();
        data.append('ag_mobile',this.moblieNumber);
        data.append('code',this.codeNumber);
        this.$axios.post('/api/login/loginByCode.lxkj',data)
          .then(res => {
            Indicator.close();
            if (res.data.code === '200') {
              this.$store.commit('saveToken',res.data.data)
              Toast({
                message: '登录成功',
                iconClass: 'mintui mintui-success'
              });
              this.$router.push('/')
            }else{
              Toast('手机号验证码错误!')
            }
          }).catch(res=>{
          Indicator.close();
          Toast('请检查网络设置！')
          console.log(res)
        })
      },
      //获取验证码
      getSmsCodeReq(){
        // let data = new FormData();
        // data.append('phone',this.moblieNumber);
        // let data = {phone: JSON.stringify(this.moblieNumber)}
        this.$axios.get('/api/login/getSmsCode.lxkj?phone='+this.moblieNumber)
          .then(res => {
            console.log(res)
          }).catch(res=>{
          console.log(res)
        })
      },


    },
    watch: {
      moblieNumber: function (val,oldVal) {
        // console.log(this.isMoblie(val))
        if (this.isnull(val) || !this.isMoblie(val)) {
          this.getNumBtnDis = true
        }else{
          this.getNumBtnDis = false
        }
      }
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
