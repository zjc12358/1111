<template>
  <div ref="agencyBox" class="agency-container">
    <mt-header fixed style="color: black;background: white;height: 10.6vw;font-size: 3.7vw" title="开设账户">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div style="height: 10.6vw;"></div>
    <div>
      <div class="switch-box">
        <div @click="changeModuleV(1)" :class="'switch-button-item ' + (changeModule == 1 ? 'selected' : '')">代理</div>
        <div @click="changeModuleV(2)" :class="'switch-button-item ' + (changeModule == 2 ? 'selected' : '')">店铺</div>
      </div>
      <div v-if="changeModule == 1" class="centerDiv">
        <div style="font-size: 0.3rem;display: flex;align-items: center">
          <img class="shop_img" src="../assets/call.png" style="width: 0.3rem;height: 0.3rem;">
          <label style="margin-left: 2vw">手机号码</label>
        </div>
        <div>
          <input class="input_group" style="border-bottom: 1px solid rgba(153, 153, 153,0.5);font-size: 3.2vw;" label="" placeholder="请输入手机号" type="text" />
        </div>
        <div>
          <img class="shop_img" src="../assets/call.png" style="width: 0.3rem;height: 0.3rem;">
          <label style="font-size: 0.3rem;">验证码</label>
        </div>

        <div style="position: relative;">
          <input class="input_group" style="border-bottom: 1px solid rgba(153, 153, 153,0.5);font-size: 3.2vw;width: 50vw;" label="" placeholder="请输入验证码" type="text" />
          <mt-button @click="getNum(sendTime)" type="primary" class="getNum" :disabled="getNumBtnDis">{{ getNumMsg }}</mt-button>
        </div>
      </div>
      <div v-if="changeModule === 2 && step === 1">
        <shop @ee="cc" />
      </div>
      <div v-if="step === 2">
        <StepTwo />
      </div>
    </div>
  </div>
</template>

<script>
  import '../untils/rem.js'
  import shop from "./shop";
  import StepTwo from "./StepTwo";
  export default {
    name: "agency",
    components: {
      shop,
      StepTwo
    },
    data(){
      return {
        getNumBtnDis: false,
        sendTime: 60,
        getNumMsg: '获取验证码',
        changeModule: 1, // 1 代理, 2 店家
        step: 1,
      }
    },
    methods: {
      cc (){
        this.$refs.agencyBox.scrollTop = 0
        this.step = 2
      },
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
      changeModuleV(i){
        this.changeModule = i;
      }
    }
  }

</script>

<style scoped>
  @import '../assets/css/agency.css';
  .getNum{
    background: #1bbf8d;
    font-size: 3.2vw;
    min-width: 100px;
    width: 30vw;
    height: 10vw;
    border-radius: 2vw;
    position: absolute;
    right: 0;
    top: 0vw;
  }
  .input_group{
    height: 10vw;
    font-size: 3.2vw;
    display: block;
    border: 0;
    outline: none;
    height: 11vw;
    width: 100%;
  }
</style>
