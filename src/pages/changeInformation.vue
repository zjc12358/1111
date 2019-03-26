<template>
  <div class="changeInformation-container">
    <mt-header fixed style="color: black;background: white;height: 10.6vw;font-size: 3.7vw" title="修改信息">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div style="height: 10.6vw;"></div>
    <panel title="个人银行卡信息">
      <inputGroup ref="inputGroup" title="姓名" placeholder="请输入姓名"></inputGroup>
      <inputGroup ref="inputGroup2" title="银行卡账号" placeholder="请输入银行卡账号" :icon="require('../assets/img/bankCard.png')"></inputGroup>
      <inputGroup ref="inputGroup3" title="银行卡开户行" placeholder="请输入银行卡开户行" :icon="require('../assets/img/openingBank.png')"></inputGroup>
      <imagesPiceker ref="imagesPiceker" title="上传银行卡照片"></imagesPiceker>
    </panel>
    <panel title="支付宝信息">
      <inputGroup ref="inputGroup" title="支付宝账号姓名" placeholder="请输入支付宝账号姓名" :icon="require('../assets/img/bankCard.png')"></inputGroup>
      <inputGroup ref="inputGroup2" title="支付宝账号" placeholder="请输入支付宝账号"></inputGroup>
      <imagesPiceker ref="imagesPiceker" title="上传支付宝收款码"></imagesPiceker>
    </panel>
    <panel title="微信信息">
      <inputGroup ref="inputGroup" title="微信账号" placeholder="请输入微信账号"></inputGroup>
      <imagesPiceker ref="imagesPiceker" title="上传微信收款码"></imagesPiceker>
    </panel>
    <div style="text-align: center">
      <mt-button @click="" type="primary" style="background: #1bbf8d;margin: 0 auto;width: 80%;font-size: 4.2vw;height: 10vw;">提交</mt-button>
    </div>
    <div class="agreeGroup">
      <input checked="checked" type="checkbox" id="agree">
      <label for="agree">我已阅读并同意</label>
      <div style="color: blue;">《用户注册协议》</div>
    </div>
  </div>
</template>

<script>
  import panel from "../components/panel";
  import inputGroup from "../components/inputGroup";
  import imagesPiceker from "../components/imagesPiceker";

  export default {
    name: "changeInformation",
    components: {
      panel,
      inputGroup,
      imagesPiceker
    },
    methods:{
      getValue(){
        console.log(this.$refs.inputGroup.inputValue)
        console.log(this.$refs.inputGroup2.inputValue)
        console.log(this.$refs.inputGroup3.inputValue)
        console.log(this.$refs.imagesPiceker.files)
      }
    }
  }
</script>

<style scoped>
  .changeInformation-container{
    width: 100vw;
    height: 100vh;
    overflow: auto;
    background: #f0eff4;
  }
  .agreeGroup{
    font-size: 3.2vw;
    display: flex;
    align-items: center;
    width: 75vw;
    height: 15vw;
    margin: 0 auto;
  }
</style>
