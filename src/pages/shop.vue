<template>
  <div class="centerDiv">
    <div class="progressbarWrap">
      <img v-if="progressStatus == 1" class="progress1" src="../assets/progress1.png" alt="">
      <img v-if="progressStatus == 2" class="progress1" src="../assets/progress2.png" alt="">
    </div>
    <div style="font-size: 0.3rem;display: flex;align-items: center">
      <img class="shop_img" src="../assets/img/name.png" style="width: 0.3rem;height: 0.3rem;">
      <label style="margin-left: 2vw">店铺主姓名</label>
    </div>
    <div>
      <input v-model="ag_name" class="input_group" style="border-bottom: 1px solid rgba(153, 153, 153,0.5);font-size: 3.2vw;" label="" placeholder="请输入店铺主姓名" type="text" />
    </div>
    <div style="font-size: 0.3rem;display: flex;align-items: center;margin-top: 6vw">
      <img class="shop_img" src="../assets/img/moblie.png" style="width: 0.3rem;height: 0.3rem;">
      <label style="margin-left: 2vw">手机号码</label>
    </div>
    <div>
      <input v-model="ag_mobile" class="input_group" style="border-bottom: 1px solid rgba(153, 153, 153,0.5);font-size: 3.2vw;" label="" placeholder="请输入手机号" type="text" />
    </div>
    <div style="font-size: 0.3rem;display: flex;align-items: center;margin-top: 6vw">
      <img class="shop_img" src="../assets/img/code.png" style="width: 3.7vw;height: 3.7vw;">
      <label style="font-size: 0.3rem;margin-left: 2vw">验证码</label>
    </div>
    <div style="position: relative;">
      <input v-model="codeNum" class="input_group" style="border-bottom: 1px solid rgba(153, 153, 153,0.5);font-size: 3.2vw;width: 50vw;" label="" placeholder="请输入验证码" type="text" />
      <mt-button @click="getMsgCode(sendTime)" type="primary" class="getNum" :disabled="getNumBtnDis">{{ getNumMsg }}</mt-button>
    </div>
    <div style="font-size: 0.3rem;display: flex;align-items: center;margin-top: 6vw">
      <img class="shop_img" src="../assets/call.png" style="width: 0.3rem;height: 0.3rem;">
      <label style="margin-left: 2vw">电子邮箱</label>
    </div>
    <div>
      <input v-model="user_email" class="input_group" style="border-bottom: 1px solid rgba(153, 153, 153,0.5);font-size: 3.2vw;" label="" placeholder="请输入电子邮箱" type="text" />
    </div>
    <!--<div style="font-size: 0.3rem;display: flex;align-items: center;margin-top: 6vw">-->
      <!--<img class="shop_img" src="../assets/call.png" style="width: 0.3rem;height: 0.3rem;">-->
      <!--<label style="margin-left: 2vw">身份证号码</label>-->
    <!--</div>-->
    <!--<div>-->
      <!--<input v-model="idcartNum" class="input_group" style="border-bottom: 1px solid rgba(153, 153, 153,0.5);font-size: 3.2vw;" label="" placeholder="请输入身份证号码" type="text" />-->
    <!--</div>-->

    <!--<div style="font-size: 0.3rem;display: flex;align-items: center;margin-top: 6vw">-->
      <!--<img class="shop_img" src="../assets/call.png" style="width: 0.3rem;height: 0.3rem;">-->
      <!--<label style="margin-left: 2vw">身份证有效期</label>-->
    <!--</div>-->
    <!--<div>-->
      <!--<input v-model="user_email" class="input_group" style="border-bottom: 1px solid rgba(153, 153, 153,0.5);font-size: 3.2vw;" label="" placeholder="请输入身份证有效期" type="text" />-->
    <!--</div>-->
    <div style="font-size: 0.3rem;display: flex;align-items: center;margin-top: 6vw">
      <img class="shop_img" src="../assets/call.png" style="width: 0.3rem;height: 0.3rem;">
      <label style="margin-left: 2vw">上传身份证正反面</label>
      <div style="flex: 1"></div>
      <div class="fileUploadBox">
        <div>
          <input @change="sfzUpload($event,1)" class="fileUpload" type="file">
          <img class="readImages" :src="idcard_a" alt="">
        </div>
        <div>
          <input @change="sfzUpload($event,2)" class="fileUpload" type="file">
          <img class="readImages" :src="idcard_b" alt="">
        </div>
      </div>
    </div>
    <!--<div style="text-align: center;margin-top: 0.4rem;">-->
      <!--<mt-button @click="nextPro" type="primary" style="background: #1bbf8d;width: 90%;font-size: 4.2vw;height: 10vw;">下一步</mt-button>-->
    <!--</div>-->
  </div>
</template>

<script>
    import {Toast,Indicator} from "mint-ui";

    export default {
      name: "shop",
      data(){
        return {
          id_card_date: '',
          name: '',
          id_card_num: '',
          idcard_a: null,
          idcard_b:null,
          user_email: '',
          ag_mobile: null,
          ag_name: '',
          codeNum: '',
          getNumBtnDis: true,
          sendTime: 60,
          getNumMsg: '获取验证码',
          progressStatus: 1,
          front: null,
          reverse: null
        }
      },
      created() {

      },
      mounted () {

      },
      methods:{
        getSmsCodeReq(){
          // let data = new FormData();
          // data.append('phone',this.moblieNumber);
          // let data = {phone: JSON.stringify(this.moblieNumber)}
          this.$axios.get('/api/login/getSmsCode.lxkj?phone='+this.ag_mobile)
            .then(res => {
              console.log(res)
            }).catch(res=>{
            console.log(res)
          })
        },
        getMsgCode(){
          this.getSmsCodeReq()
          this.sendMsg(this.sendTime)
        },
        //下一步
        nextPro(){

          this.progressStatus = 2
          this.$emit('ee',0)
        },
        fileReq(file,type){
          Indicator.open(); // loading
          console.log(file)
          let data = new FormData()
          data.append('file',file)
          data.append('idCardSide',type==1?'front':'back')
          let config = {
            headers: {
              'Authorization': this.$store.state.token
            }
          }
          this.$axios.post('/api/base/getIdCard.lxkj',
            data,config
          ).then(res =>{
            if(res.data.code==200){
              if(type==1){
                this.name = res.data.data.name
                this.id_card_num = res.data.data.id_card_num
              }else{
                this.id_card_date = res.data.data.id_card_date
              }
              this.imgUpload(file,type)
            }
            console.log(res)
          }).catch(err=>{
            Indicator.close();
            console.log(err)
            Toast('身份证读取失败请上传有效证件!')
          })
        },
        sfzUpload(e,type){
          let file = e.target.files[0]
          console.log(file.size)
          if(file.size>10485760){
            Toast('图片过大！')
            return
          }
          if(file.type.indexOf("image") == 0) {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
              // 图片base64化
              let newUrl = e.target.result;
              console.log(newUrl)
              switch (type) {
                case 1:
                  this.front = newUrl;
                  // this.idcard_a = file
                  this.fileReq(file,1)
                  break;
                case 2:
                  this.reverse = newUrl;
                  // this.idcard_b = file
                  this.fileReq(file,2)
                  break;
              }
            }
          }
        },
        imgUpload(file,type){
          let data = new FormData();
          data.append('file',file)
          data.append('fileName','png')
          let config = {
            headers: {
              'Authorization': this.$store.state.token
            }
          }
          this.$axios.post('/api/base/upload.lxkj',
            data,config
          ).then(res => {
            Indicator.close();
            if(res.data.code=='200'){
              switch (type) {
                case 1:
                  this.idcard_a = res.data.data;
                  break;
                case 2:
                  this.idcard_b = res.data.data;
                  break;
              }
            }
          }).catch(err=>{
            Indicator.close();
            Toast('身份证上传失败请检查网络设置!')
          })
        }

      },
      watch:{
        ag_mobile: function(val,oldVal){
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
  @import "../assets/css/shop.css";
  .readImages{
    /*width: ;*/
    position: absolute;
    width: 20vw;
    overflow: hidden;
    z-index: 1;
  }
  .fileUploadBox>div{
    overflow: hidden;
    position: relative;
  }
  .fileUploadBox>div>input{
    position: absolute;
    z-index: 2;
  }
</style>
