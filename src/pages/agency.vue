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
          <img class="shop_img" src="../assets/img/name.png" style="width: 0.3rem;height: 0.3rem;">
          <label style="margin-left: 2vw">代理商名称</label>
        </div>
        <div>
          <input v-model="agentname" class="input_group" style="border-bottom: 1px solid rgba(153, 153, 153,0.5);font-size: 3.2vw;" label="" placeholder="请输入代理商名称" type="text" />
        </div>
        <div style="font-size: 0.3rem;display: flex;align-items: center;margin-top: 0.5rem">
          <img class="shop_img" src="../assets/img/moblie.png" style="width: 0.3rem;height: 0.3rem;">
          <label style="margin-left: 2vw">手机号码</label>
        </div>
        <div>
          <input v-model="agentMoblie" class="input_group" style="border-bottom: 1px solid rgba(153, 153, 153,0.5);font-size: 3.2vw;" label="" placeholder="请输入手机号" type="text" />
        </div>
        <div>
          <img class="shop_img" src="../assets/img/code.png" style="width: 0.3rem;height: 0.3rem;">
          <label>验证码</label>
        </div>
        <div style="position: relative;">
          <input v-model="agentCode" class="input_group" style="border-bottom: 1px solid rgba(153, 153, 153,0.5);font-size: 3.2vw;width: 50vw;" label="" placeholder="请输入验证码" type="text" />
          <mt-button @click="getCode(sendTime)" type="primary" class="getNum" :disabled="getNumBtnDis">{{ getNumMsg }}</mt-button>
        </div>
        <div style="font-size: 0.3rem;display: flex;align-items: center;margin-top: 0.5rem">
          <img class="shop_img" src="../assets/img/email.png" style="width: 0.3rem;height: 0.3rem;">
          <label style="margin-left: 2vw">邮箱</label>
        </div>
        <div>
          <input v-model="agentEmail" class="input_group" style="border-bottom: 1px solid rgba(153, 153, 153,0.5);font-size: 3.2vw;" label="" placeholder="请输入邮箱" type="text" />
        </div>
      </div>
      <div v-if="changeModule === 1" style="text-align: center;margin-top: 0.4rem;">
        <mt-button @click="verifyCodeReq" type="primary" style="background: #1bbf8d;width: 80%;font-size: 4.2vw;height: 10vw;">提交</mt-button>
      </div>
      <div v-if="changeModule === 2">
        <shop ref="shop" v-if="step===1" @ee="cc" />
        <StepTwo ref="stepTwo" v-if="step===2" />
        <div style="text-align: center">
          <mt-button v-if="step === 1" @click="nextpro(1)" type="primary" style="background: #1bbf8d;margin: 0 auto;width: 80%;font-size: 4.2vw;height: 10vw;">下一步</mt-button>
          <mt-button v-if="step === 2" @click="nextpro(2)" type="primary" style="background: #1bbf8d;margin: 0 auto;width: 80%;font-size: 4.2vw;height: 10vw;">提交</mt-button>
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
  import {Toast,Indicator} from "mint-ui";
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
        getNumBtnDis: true,
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
        console.log(file)
        let data = new FormData()
        data.append('file',file)
        data.append('fileName',file.name.replace(/^.+\./,''))
        let config = {
          headers: {
            'Authorization': this.$store.state.token
          }
        }
        return this.$axios.post(process.env.API_HOST+'/base/upload.lxkj',
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
            if (!this.isnull(this.$refs.shop.ag_name)&&!this.isnull(this.$refs.shop.ag_mobile)&&!this.isnull(this.$refs.shop.user_email)&&this.$refs.shop.name&&this.$refs.shop.id_card_date){

            }else{
              Toast('必填项不得为空！')
              return
            }
            if(this.$refs.shop.name==this.$refs.shop.ag_name){

            }else{
              Toast('店铺主姓名与身份证信息不一致！')
              return
            }
            if(this.isMoblie(this.$refs.shop.ag_mobile)==false){
              Toast('请输入正确的手机号！')
              return
            }
            if(this.isEmail(this.$refs.shop.user_email)==false){
              Toast('邮箱格式错误！')
              return
            }

            this.step = 2
            let data = {
              ag_name: this.$refs.shop.ag_name,
              ag_mobile: this.$refs.shop.ag_mobile,
              user_email: this.$refs.shop.user_email,
              name: this.$refs.shop.name,
              id_card_num: this.$refs.shop.id_card_num,
              id_card_date: this.$refs.shop.id_card_date,
              idcard_a: this.$refs.shop.idcard_a,
              idcard_b: this.$refs.shop.idcard_b
            }
            console.log(data)
            this.stepOneData = data;
            break;
          case 2:
            if(!this.isnull(this.$refs.stepTwo.shop_name)&&this.$refs.stepTwo.shopHead&&this.$refs.stepTwo.license&&this.$refs.stepTwo.agreement&&this.$refs.stepTwo.basedOn&&this.$refs.stepTwo.basedOn2&&!this.isnull(this.$refs.stepTwo.phone)&&this.$refs.stepTwo.mainBusiness[this.$refs.stepTwo.typeSelected]&&!this.isnull(this.$refs.stepTwo.provinces)&&!this.isnull(this.$refs.stepTwo.addDetail)){

            }else{
              Toast('必填项不得为空！')
              return
            }
            // 将俩个步骤的图片上传.
            console.log(this.stepOneData)
            Indicator.open('加载中...');
            //图片上传成功,将返回的图片链接写入
            let dataAll = new FormData();
            dataAll.append('ag_mobile',this.stepOneData.ag_mobile) //手机号
            dataAll.append('ag_name',this.stepOneData.ag_name) // 名称
            dataAll.append('user_email',this.stepOneData.user_email) //邮箱
            dataAll.append('name',this.stepOneData.name) // 身份证姓名
            dataAll.append('id_card_num',this.stepOneData.id_card_num)
            dataAll.append('id_card_date',this.stepOneData.id_card_date)
            dataAll.append('idcard_a',this.stepOneData.idcard_a)  //身份证正面
            dataAll.append('idcard_b',this.stepOneData.idcard_b) //身份证反面

            dataAll.append('shop_name',this.$refs.stepTwo.shop_name)  // 店铺名称
            dataAll.append('phone',this.$refs.stepTwo.phone)  // 店铺电话
            dataAll.append('shop_type_name',this.$refs.stepTwo.mainBusiness[this.$refs.stepTwo.typeSelected].code + '##' +this.$refs.stepTwo.mainBusiness[this.$refs.stepTwo.typeSelected].name) // 店铺主营业务
            dataAll.append('shop_addr',this.$refs.stepTwo.provinces + '##' + this.$refs.stepTwo.addDetail) // 店铺地址
            dataAll.append('store_address_code',this.$refs.stepTwo.addCode) // 盛世编码
            dataAll.append('license',this.$refs.stepTwo.license) // 营业执照照片
            dataAll.append('cooperation_agreement',this.$refs.stepTwo.agreement) // 合作协议
            dataAll.append('shop_scene_photo',this.$refs.stepTwo.basedOn + '##' + this.$refs.stepTwo.basedOn2)  //场内照片 用#号隔开
            dataAll.append('shop_photo',this.$refs.stepTwo.shopHead) // 店铺头像

            let config = {
              headers: {
                'Authorization': this.$store.state.token
              }
            }
            this.$axios.post(process.env.API_HOST+'/agency/addAgencyShop.lxkj',
              dataAll,config
            )
              .then(res => {
                Indicator.close();
                if(res.data.code == '200'){
                  this.$router.push('/complete')
                }
                console.log(res)
              }).catch(res=>{
              console.log(res)
              Indicator.close();
              Toast('提交失败请检查网络设置!')
            })
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
        Indicator.open()
        let data = new FormData();
        data.append('ag_mobile',this.agentMoblie)
        data.append('ag_name',this.agentname)
        data.append('user_email',this.agentEmail)
        let config = {
          headers: {
            'Authorization': this.$store.state.token
          }
        }
        this.$axios.post(process.env.API_HOST+'/agency/addAgency.lxkj',
          data,config
        )
          .then(res => {
            Indicator.close()
            if(res.data.code==='200'){
              Toast(res.data.msg)
            }else{
              Toast(res.data.msg)
            }
          }).catch(res=>{
          Indicator.close()
          Toast('请检查网络设置')
          console.log(res)
        })
      },

      cc (){
        this.$refs.agencyBox.scrollTop = 0
        this.step = 2
      },
      //获取验证码计时
      getCode(i){
        // this.$axios.get('//login/verifyPhone.lxkj',{params:{phone: this.agentMoblie}})
        //   .then(res=>{
        //     console.log(res);
            // if (res.data.code=== '200'){
              this.getSmsCodeReq()
              this.getNum(i)
            // }else{
            //   Toast('手机号已存在')
            // }
        //   }).catch(err=>{
        //
        // })

      },
      //获取验证码
      getSmsCodeReq(){
        // let data = new FormData();
        // data.append('phone',this.moblieNumber);
        // let data = {phone: JSON.stringify(this.moblieNumber)}
        this.$axios.get(process.env.API_HOST+'/login/getSmsCode.lxkj?phone='+this.agentMoblie)
          .then(res => {
            console.log(res)
          }).catch(res=>{
          console.log(res)
        })
      },
      verifyCodeReq(){
        let data = new FormData();
        data.append('ag_mobile',this.agentMoblie);
        data.append('code',this.agentCode);
        this.$axios.post(process.env.API_HOST+'/login/verifyCode.lxkj',data)
          .then(res => {
            if (res.data.code === '200') {
              this.sub()
            }else{
              Toast(res.data.msg)
            }
          }).catch(res=>{
          Toast('请检查网络设置！')
          console.log(res)
        })
      },
      getNum(i){
        // if (this.moblieBlur() === false) return
        if( this.isnull(this.agentMoblie) || !this.isMoblie(this.agentMoblie) ){
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
      changeModuleV(i){
        this.changeModule = i;
      }
    },
    watch:{
      agentMoblie: function(val,oldVal){
        console.log('change')
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
