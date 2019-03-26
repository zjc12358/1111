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

    <div class="stepInputGroup">
      <div>
        <img style="width: 0.3rem;height: 0.3rem;margin-right: 0.1rem" src="../assets/call.png" alt="">
        <div style="letter-spacing: 1px">主营业务</div>
        <span style="color: red;">*</span>
      </div>
      <div style="flex: 1"></div>
      <div style="position: relative;">
        <span @click="modalOpen">
          {{ typeSelected === null ? '请选择您的主营业务' : mainBusiness[typeSelected] }}
        </span>
        <div style="flex: 1"></div>
        <i class="mint-cell-allow-right"></i>
      </div>
    </div>

    <div class="stepInputGroup">
      <div>
        <img style="width: 0.3rem;height: 0.3rem;margin-right: 0.1rem" src="../assets/call.png" alt="">
        <div style="letter-spacing: 1px">所在省份地区</div>
        <span style="color: red;">*</span>
      </div>
      <div style="flex: 1"></div>
      <div style="position: relative;">
        <span @click="modal2Open">{{ provinces ? provinces : '请选择省份地区' }}</span>
        <div style="flex: 1"></div>
        <i class="mint-cell-allow-right"></i>
      </div>
    </div>

    <div class="stepInputGroup">
      <div>
        <img style="width: 0.3rem;height: 0.3rem;margin-right: 0.1rem" src="../assets/call.png" alt="">
        <div style="letter-spacing: 1px">详细地址</div>
        <span style="color: red;">*</span>
      </div>
      <div style="flex: 1"></div>
      <div>
        <input type="text" placeholder="请输入您的店铺详细地址">
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
    <div class="agreeGroup">
      <input checked="checked" type="checkbox" id="agree">
      <label for="agree">我已阅读并同意</label>
      <div style="color: blue;">《用户注册协议》</div>
    </div>

    <modal ref="modal">
      <div class="mainBusiness">
        <div v-for="(item,key) in mainBusiness">
          <div @click="changeTypeSelected(key)" :class=" typeSelected === key ? 'typeSelected' : null">{{ item }}</div>
        </div>
      </div>
      <div style="display: flex;justify-content: center">
        <mt-button @click="makeSure(1)" style="width: 40vw;height: 10vw;background: #1bbf8d;font-size: 3.2vw" type="primary">确&nbsp;认</mt-button>
      </div>
    </modal>
    <modal ref="modal2">
      <div>
        <mt-picker style="font-size: 3.2vw" ref="picker" :slots="slots" value-key="name" @change="onValuesChange"></mt-picker>
      </div>
      <div style="display: flex;justify-content: center;margin-top: 5vw">
        <mt-button @click="makeSure(2)" style="width: 40vw;height: 10vw;background: #1bbf8d;font-size: 3.2vw" type="primary">确&nbsp;认</mt-button>
      </div>
    </modal>
    <!--<input @change="upload($event)" type="file">-->
  </div>
</template>

<script>
  import modal from "../components/modal";
  import {Toast} from "mint-ui";
  const address = require('../../city');
  export default {
    name: "stepTwo",
    components:{
      modal
    },
    data(){
      return {
        provinces: '',
        typeSelected: null,
        shopHead: '',//店铺头像
        license: '', //营业执照
        agreement: '', //协议
        basedOn: '', //场内照片
        basedOn2: '',
        getNumBtnDis: false,
        sendTime: 60,
        getNumMsg: '获取验证码',
        mainBusiness: [
          '餐饮',
          '零售',
          '水果',
          '超市',
          '美发',
          '美容',
          '箱包',
          '鞋',
          '饰品',
          '蔬菜'
        ],
        stepTwoInputList: [
          {img: require('../assets/call.png'), name: '店铺名称',placeholder: '请输入您的店铺名称'},
          {img: require('../assets/call.png'), name: '店铺电话',placeholder: '请输入您的店铺电话号'},
          // {img: require('../assets/call.png'), name: '详细地址',placeholder: '请输入您的店铺详细地址'},
        ],
        myAdress:null,
        slots: [
          {
            flex: 1,
            values: address,
            defaultIndex:10,
            className: 'slot1',
            textAlign: 'center'
          }, {
            divider: true,
            content: '-',
            className: 'slot2'
          }, {
            flex: 1,
            values: address[0].childs,
            defaultIndex:0,
            className: 'slot3',
            textAlign: 'center'
          }, {
            divider: true,
            content: '-',
            className: 'slot4'
          }, {
            flex: 1,
            values: address[0].childs[0].childs,
            defaultIndex:0,
            className: 'slot5',
            textAlign: 'center'
          }
        ]
      }
    },
    created() {

    },
    mounted () {

    },
    methods:{
      changeTypeSelected(n){
        this.typeSelected = n
      },
      modalOpen(){
        this.$refs.modal.$emit('modalOpen')
      },
      modal2Open(){
        this.$refs.modal2.$emit('modalOpen')
      },
      //提交
      nextPro(){
        let data = new FormData();
        data.append('ag_mobile','13587011698') //手机号
        data.append('ag_name','祝佳程') // 名称
        data.append('user_email','710124011@qq.com') //邮箱
        data.append('idcard_a','123132')  //身份证正面
        data.append('idcard_b','123132') //身份证反面
        data.append('shop_name','肯德基')  // 店铺名称
        data.append('phone','4397675')  // 店铺电话
        data.append('shop_type_name','美食') // 店铺主营业务

        data.append('shop_addr','浙江衢州江山虎山城清河坊3幢8单元316室') // 店铺地址
        data.append('license','123132') // 营业执照照片
        data.append('cooperation_agreement','123132') // 合作协议
        data.append('shop_scene_photo','123132')  //场内照片 用*号隔开
        data.append('shop_photo','123132') // 店铺头像

        let config = {
          headers: {
            'Authorization': this.$store.state.token
          }
        }
        this.$axios.post('/api/agency/addAgencyShop.lxkj',
          data,config
        )
          .then(res => {
            console.log(res)
          }).catch(res=>{
          console.log(res)
        })

        // Toast({
        //   message: '操作成功',
        //   iconClass: 'mintui mintui-success'
        // })
        // this.$router.push('./complete')
      },
      upload(e){
        let file = e.target.files[0];
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
        )
          .then(res => {
            console.log(res)
          }).catch(res=>{
          console.log(res)
        })
      },

      imgUpload(e,type){
        let file = e.target.files[0];
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
      },

      onValuesChange(picker, values) {
        if(!values[0]){
          this.$nextTick(()=>{
            if(this.myAdress){
              // 赋默认值
            }else{
              picker.setValues([address[0],address[0].childs[0],address[0].childs[0].childs[0]])
            }
          });
        }else{
          picker.setSlotValues(1, values[0].childs);
          let town = [];
          if(values[1]){
            town = values[1].childs;
          }
          picker.setSlotValues(2,town);
        }
      },

      // 选择确认
      makeSure(type){
        switch (type) {
          case 1:
            this.$refs.modal.$emit('modalClose')
            break;
          case 2:
            // console.log(this.$refs.picker.getValues())
            let selectAdress = this.$refs.picker.getValues()
            // console.log(selectAdress)
            let str = ''
            selectAdress.map(item => {
              // console.log(item.name)
              str += item.name
            });
            this.provinces = str
            console.log(str)
            this.$refs.modal2.$emit('modalClose')
            // console.log()
            break;
        }
      }

    }
  }
</script>

<style scoped>
  @import "../assets/css/shop.css";
  .centerDiv{
    padding-top: 10vw;
    padding-bottom: 0;
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
  .agreeGroup{
    font-size: 3.2vw;
    display: flex;
    align-items: center;
    width: 75vw;
    height: 15vw;
    margin: 0 auto;
  }
  .mainBusiness{
    display: flex;
    flex-flow: wrap;
    justify-content: flex-start;
  }
  .mainBusiness>div{
    width: 28vw;
    height: 10vw;
    display: flex;
    margin-bottom: 5vw;
    justify-content: center;
  }
  .mainBusiness>div>div{
    width: 20vw;
    height: 10vw;
    background: #c5c5c5;
    border-radius: 2vw;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3.2vw;
  }
  .typeSelected{
    background: #1bbf8d!important;
    color: white;
  }
  /deep/ .picker-item{
    font-size: 3.4vw;
  }
</style>
