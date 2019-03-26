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
      <div @click="getValue()">点我</div>
    </panel>
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
</style>
