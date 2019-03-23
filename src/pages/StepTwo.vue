<template>
  <div class="centerDiv">
    <div class="progressbarWrap">
      <img class="progress1" src="../assets/progress2.png" alt="">
    </div>
    <div class="shopHead">
      <div class="upLoadShopHead">
        <img v-if="!shopHead" class="uploadHead" src="../assets/img/uploadHead.png" alt="">
        <input @change="imgUpload($event,1)" class="uploadHeadInput" type="file">
        <div v-if="shopHead" class="readShopHead">
          <img style="width: 17vw;display: block" :src="shopHead" alt="">
        </div>
      </div>
    </div>
    <div v-for="item in stepTwoInputList" class="stepInputGroup">
      <div>
        <img style="width: 0.3rem;height: 0.3rem;margin-right: 0.1rem" :src="item.img" alt="">
        <div style="letter-spacing: 1px">{{ item.name }}</div>
        <span style="color: red;">*</span>
      </div>
      <div style="flex: 1"></div>
      <div>
        <input type="text" :placeholder="item.placeholder">
      </div>
    </div>

    <!--可抽离成组件-->
    <div class="stepInputGroup stepFileInputGroup">
      <div>
        <img style="width: 0.3rem;height: 0.3rem;margin-right: 0.1rem" src="../assets/call.png" alt="">
        <div style="letter-spacing: 1px">上传营业执照照片</div>
        <span style="color: red;">*</span>
      </div>
      <div style="flex: 1"></div>
      <div>
        <div>
          <input type="file" @change="imgUpload($event,2)">
          <img :src="license" alt="">
        </div>
      </div>
    </div>
    <div class="stepInputGroup stepFileInputGroup">
      <div>
        <img style="width: 0.3rem;height: 0.3rem;margin-right: 0.1rem" src="../assets/call.png" alt="">
        <div style="letter-spacing: 1px">上传合作协议照片</div>
        <span style="color: red;">*</span>
      </div>
      <div style="flex: 1"></div>
      <div>
        <div>
          <input type="file" @change="imgUpload($event,3)">
          <img :src="agreement" alt="">
        </div>
      </div>
    </div>
    <div class="stepInputGroup stepFileInputGroup">
      <div>
        <img style="width: 0.3rem;height: 0.3rem;margin-right: 0.1rem" src="../assets/call.png" alt="">
        <div style="letter-spacing: 1px">上传场内照片</div>
        <span style="color: red;">*</span>
      </div>
      <div style="flex: 1"></div>
      <div>
        <div>
          <input type="file" @change="imgUpload($event,4)">
          <img :src="basedOn" alt="">
        </div>
        <div>
          <input type="file" @change="imgUpload($event,5)">
          <img :src="basedOn2" alt="">
        </div>
      </div>
    </div>

    <div style="text-align: center;margin-top: 0.4rem;">
      <mt-button @click="nextPro" type="primary" style="background: #1bbf8d;width: 90%;font-size: 4.2vw;height: 10vw;">提交</mt-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "stepTwo",
    data(){
      return {
        shopHead: '',//店铺头像
        license: '', //营业执照
        agreement: '', //协议
        basedOn: '', //场内照片
        basedOn2: '',
        getNumBtnDis: false,
        sendTime: 60,
        getNumMsg: '获取验证码',
        stepTwoInputList: [
          {img: require('../assets/call.png'), name: '店铺名称',placeholder: '请输入您的店铺名称'},
          {img: require('../assets/call.png'), name: '店铺电话',placeholder: '请输入您的店铺电话号'},
          {img: require('../assets/call.png'), name: '主营业务',placeholder: '请输入您的主营业务'},
          {img: require('../assets/call.png'), name: '所在省份地区',placeholder: '请输入您的店铺所在地区'},
          {img: require('../assets/call.png'), name: '详细地址',placeholder: '请输入您的店铺详细地址'},
        ]
      }
    },
    created() {

    },
    mounted () {

    },
    methods:{
      //下一步
      nextPro(){
        // this.progressStatus = 2
        // this.$emit('ee',0)
      },

      imgUpload(e,type){
        let file = e.target.files[0]
        if(file.type.indexOf("image") == 0) {
          let reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = (e) => {
            // 图片base64化
            let newUrl = e.target.result;
            console.log(newUrl)
            switch (type) {
              case 1:
                this.shopHead = newUrl;
                break;
              case 2:
                this.license = newUrl;
                break;
              case 3:
                this.agreement = newUrl;
                break;
              case 4:
                this.basedOn = newUrl;
                break;
              case 5:
                this.basedOn2 = newUrl;
                break;
            }
          }
        }
      }

    }
  }
</script>

<style scoped>
  @import "../assets/css/shop.css";
  .centerDiv{
    padding-top: 10vw;
    margin-top: 40vw;
  }
  .progressbarWrap{
    top: -30vw;
  }
  .stepInputGroup{
    display: flex;
    align-items: center;
    font-size: 3.2vw;
    height: 18vw;
    border-bottom: 1px solid rgba(153, 153, 153, 0.3);
  }
  .stepInputGroup>div{
    display: flex;
    align-items: center;
  }
  .stepInputGroup>div:nth-child(1){
    width: 30vw;
    margin-left: 2vw;
  }
  .stepInputGroup>div:nth-child(3){
    width: 50vw;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .stepInputGroup>div:nth-child(3) input{
    outline: 0;
    border: 0;
    width: 100%;
  }
  .shopHead{
    position: relative;
    width: 100%;
  }
  .upLoadShopHead{
    position: absolute;
    top: -20vw;
    width: 100%;
    text-align: center;
  }
  .uploadHead{
    width: 20vw;
  }
  .uploadHeadInput{
    width: 20vw;
    height: 20vw;
    border-radius: 50%;
    opacity: 0;
    position: absolute;
    z-index: 2;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
  .readShopHead{
    overflow: hidden;
    width: 17vw;
    height: 17vw;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 1;
  }
  .stepFileInputGroup{
    height: 25vw;
    border-bottom: none;
  }
  .stepFileInputGroup>div:nth-child(3)>div{
    width: 20vw;
    height: 20vw;
    overflow: hidden;
    background: url("../assets/fileUpload.png");
    background-size: 20vw 20vw;
    position: relative;
    margin-right: 2vw;
  }
  .stepFileInputGroup>div:nth-child(3)>div>input{
    position: absolute;
    width: 20vw;
    height: 20vw;
    opacity: 0;
    z-index: 2;
  }
  .stepFileInputGroup>div:nth-child(3)>div>img{
    position: absolute;
    width: 20vw;
    z-index: 1;
  }
</style>
