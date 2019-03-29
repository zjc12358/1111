<template>
  <div class="changeEwm-container">
    <mt-header fixed style="color: black;background: white;height: 10.6vw;font-size: 3.7vw" title="修改收款二维码">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div style="height: 10.6vw;"></div>
    <panel title="支付宝信息">
      <imagesPiceker ref="alipay_img" title="上传支付宝收款码"></imagesPiceker>
    </panel>

    <panel title="微信信息">
      <imagesPiceker ref="wechat_img" title="上传微信收款码"></imagesPiceker>
    </panel>

    <div style="text-align: center">
      <mt-button @click="sub" type="primary" style="background: #1bbf8d;margin: 0 auto;width: 80%;font-size: 4.2vw;height: 10vw;">提交</mt-button>
    </div>

  </div>
</template>

<script>
  import imagesPiceker from "../components/imagesPiceker";
  import panel from "../components/panel";
  import {Toast} from "mint-ui";

  export default {
    name: "changeEwm",
    components:{
      imagesPiceker,
      panel
    },
    methods:{
      sub(){
        console.log(this.$refs.alipay_img.files)
        console.log(this.$refs.wechat_img.files)
        if(this.$refs.alipay_img.files&&this.$refs.wechat_img.files){
          let data = new FormData();
          data.append('alipay_img',this.$refs.alipay_img.files)
          data.append('wechat_img',this.$refs.wechat_img.files)
          let config = {
            headers: {
              'Authorization': this.$store.state.token
            }
          }
          this.$axios.post('/api/agency/editQRCode.lxkj',data,config)
            .then(res=>{
              console.log(res)
              if(res.data.code=='200'){
                Toast('修改二维码成功!')
              }else{
                Toast(this.data.msg)
              }
            }).catch(err=>{
            console.log(err)
            Toast('请检查网络设置')
          })
        }else{
          Toast('必填项不得为空!')
        }

      }
    }
  }
</script>

<style scoped>
  .changeEwm-container{
    width: 100vw;
    height: 100vh;
    overflow: auto;
    background: #f0eff4;
  }
</style>
