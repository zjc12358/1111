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
          <label style="margin-left: 2vw">代理商名称</label>
        </div>
        <div>
          <input v-model="agentname" class="input_group" style="border-bottom: 1px solid rgba(153, 153, 153,0.5);font-size: 3.2vw;" label="" placeholder="请输入代理商名称" type="text" />
        </div>
        <div style="font-size: 0.3rem;display: flex;align-items: center;margin-top: 0.5rem">
          <img class="shop_img" src="../assets/call.png" style="width: 0.3rem;height: 0.3rem;">
          <label style="margin-left: 2vw">手机号码</label>
        </div>
        <div>
          <input v-model="agentMoblie" class="input_group" style="border-bottom: 1px solid rgba(153, 153, 153,0.5);font-size: 3.2vw;" label="" placeholder="请输入手机号" type="text" />
        </div>
        <div>
          <img class="shop_img" src="../assets/call.png" style="width: 0.3rem;height: 0.3rem;">
          <label>验证码</label>
        </div>
        <div style="position: relative;">
          <input v-model="agentCode" class="input_group" style="border-bottom: 1px solid rgba(153, 153, 153,0.5);font-size: 3.2vw;width: 50vw;" label="" placeholder="请输入验证码" type="text" />
          <mt-button @click="getNum(sendTime)" type="primary" class="getNum" :disabled="getNumBtnDis">{{ getNumMsg }}</mt-button>
        </div>
        <div style="font-size: 0.3rem;display: flex;align-items: center;margin-top: 0.5rem">
          <img class="shop_img" src="../assets/call.png" style="width: 0.3rem;height: 0.3rem;">
          <label style="margin-left: 2vw">邮箱</label>
        </div>
        <div>
          <input v-model="agentEmail" class="input_group" style="border-bottom: 1px solid rgba(153, 153, 153,0.5);font-size: 3.2vw;" label="" placeholder="请输入邮箱" type="text" />
        </div>
        <div style="text-align: center;margin-top: 0.4rem;">
          <mt-button @click="sub" type="primary" style="background: #1bbf8d;width: 90%;font-size: 4.2vw;height: 10vw;">提交</mt-button>
        </div>
      </div>
      <div v-if="changeModule === 2">
        <shop ref="shop" v-if="step===1" @ee="cc" />
        <StepTwo ref="stepTwo" v-if="step===2" />
        <div style="text-align: center">
          <mt-button v-if="step === 1" @click="nextpro(1)" type="primary" style="background: #1bbf8d;margin: 0 auto;width: 80%;font-size: 4.2vw;height: 10vw;">下一步</mt-button>
          <mt-button v-if="step === 2" @click="nextpro(2)" type="primary" style="background: #1bbf8d;margin: 0 auto;width: 80%;font-size: 4.2vw;height: 10vw;">下一步</mt-button>
        </div>
        <div v-if="step === 2" class="agreeGroup">
          <input checked="checked" type="checkbox" id="agree">
          <label for="agree">我已阅读并同意</label>
          <div style="color: blue;">《用户注册协议》</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import '../untils/rem.js'
  import shop from "./shop";
  import StepTwo from "./StepTwo";
  import {Toast} from "mint-ui";
  export default {
    name: "agency",
    components: {
      shop,
      StepTwo
    },
    data(){
      return {
        agentname: '', // 代理商名称
        agentMoblie: '', //代理商手机号
        agentCode: '', //代理商手机验证码
        agentEmail: '', // 代理商邮箱号
        getNumBtnDis: false,
        sendTime: 60,
        getNumMsg: '获取验证码',
        changeModule: 1, // 1 代理, 2 店家
        step: 1,
        stepOneData: null,
        stepTwoData: null,
      }
    },
    methods: {

      imgUpload(file){
        let data = new FormData()
        data.append('file',file)
        data.append('fileName',file.name.replace(/^.+\./,''))
        let config = {
          headers: {
            'Authorization': this.$store.state.token
          }
        }
        return this.$axios.post('/api/base/upload.lxkj',
          data,config
        )
      },

      /**
       * 店铺提交操作
       * @param type  1:下一步  2: 提交
       */
      nextpro(type){
        switch (type) {
          case 1:
            this.step = 2
            let data = {
              ag_name: this.$refs.shop.ag_name,
              ag_mobile: this.$refs.shop.ag_mobile,
              user_email: this.$refs.shop.user_email,
              idcard_a: this.$refs.shop.idcard_a,
              idcard_b: this.$refs.shop.idcard_b,
            }
            console.log(data)
            this.stepOneData = data;
            break;
          case 2:
            // 将俩个步骤的图片上传.
            console.log(this.stepOneData)
            this.$axios.all([this.imgUpload(this.stepOneData.idcard_a),this.imgUpload(this.stepOneData.idcard_b)])
              .then(this.$axios.spread((acct,perms)=>{
                console.log(acct)
                console.log(perms)
              }))
              .catch(err=>{
                Toast({
                  message: '网络错误!'
                });
              })
            let data2 = {
              shop_photo: this.$refs.stepTwo.shopHeadFile,
              shop_name: this.$refs.stepTwo.shop_name,
              phone: this.$refs.stepTwo.phone,
              shop_type_name: this.$refs.stepTwo.mainBusiness[this.$refs.stepTwo.typeSelected],
              shop_addr: this.$refs.stepTwo.provinces + this.$refs.stepTwo.addDetail,
              license: this.$refs.stepTwo.licenseFile,
              cooperation_agreement: this.$refs.stepTwo.agreementFile,
              shop_scene_photo: this.$refs.stepTwo.basedOnFile,
            }
            console.log(data2)
            this.stepTwoData = data2
            break;
        }
      },

      /**
       * 代理提交
       */
      sub(){
        if (this.isnull(this.agentname)){
          Toast('名称为空')
          return
        }
        if (this.isnull(this.agentMoblie)){
          Toast('手机号为空')
          return
        }else if(!this.isMoblie(this.agentMoblie)){
          Toast('手机号不正确')
          return
        }
        if (this.isnull(this.agentEmail)){
          Toast('邮箱为空')
          return
        }else if(!this.isEmail(this.agentEmail)){
          Toast('邮箱格式错误')
          return
        }
        let data = new FormData();
        data.append('ag_mobile',this.agentMoblie)
        data.append('ag_name',this.agentname)
        data.append('user_email',this.agentEmail)
        let config = {
          headers: {
            'Authorization': this.$store.state.token
          }
        }
        this.$axios.post('/api/agency/addAgency.lxkj',
          data,config
        )
          .then(res => {
            console.log(res)
          }).catch(res=>{
          console.log(res)
        })
      },

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
  .agreeGroup{
    font-size: 3.2vw;
    display: flex;
    align-items: center;
    width: 75vw;
    height: 15vw;
    margin: 0 auto;
  }
  label{
    font-size: 3.7vw;
  }
</style>
