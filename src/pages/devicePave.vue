<template>
    <div class="app-container">
      <div class="firstlogin_t">
        <p class="pavetext" style="color: black;">设备铺设</p>
        <p class="pavetext1">
          <span>{{type_name}}</span>
          <span>{{devicenum}} </span></p>
      </div>
      <div class="yuan"></div>


      <div class="inputMg">
         <input type="text" class="inputlxr"  placeholder="联系人"  ref="inputlxr"  v-model="inputlxr"  @click="changeModuleV(1)" :class="'inputlxr ' + (changeModule == 1 ? 'selected' : '')"/>
         <input type="text" class="inputPhone" placeholder="联系电话" ref="moblieNumber" v-model="inputPhone" @click="changeModuleV(2)" :class="'inputPhone ' + (changeModule == 2 ? 'selected' : '')"/>
         <input type="text" class="inputShopname" placeholder="店铺名称" disabled="disabled"  v-model="inputShopname"/>
         <textarea type="text" class="inputAdress"  placeholder="铺设地址" disabled="disabled"  v-model="inputAdress"></textarea>

      </div>

      <div style="text-align: center;margin-top:0.7rem;">
        <button class="sureBt" @click="surePave()">确认</button>
      </div>
    </div>
</template>

<script>
  import '../untils/rem.js'
  import {Toast} from "mint-ui";

  export default {
    name: "devicePave",
    data() {
      return {
        inputAdress: '',
        inputShopname:'',
        moblieNumber: '',
        devicenum: "", // 设备编号
        type_name:"",
        inputlxr:"",
        agency_id:"",
        shop_name:"",
        inputPhone:"",
        dev_addr:"",
        changeModule: 1,

      }
    },
    created() {
      //  网络请求.
      let config = {
        headers: {
          'Authorization': this.$store.state.token
        }
      }
      this.dev_num=this.$route.query.dev_num;
      this.type_name=this.$route.query.type_name;
   /*  this.agency_id=this.$route.query.agency_id;*/

      this.devicenum= this.dev_num
      this.type_name=this.type_name;

      console.log(this.dev_num)
      console.log(this.type_name)


      let data = new FormData();
       data.append('dev_num',this.devicenum);
      this.$axios.post('/api/device/selectDevice.do', data, config)
        .then(res => {
          console.log(res)
          if (res.data.code === '200') {
            console.log(res.data.data.data.shop_name)
           // console.log(res.data.data.shop_name)
            this.inputlxr=res.data.data.data.connect_name
            this.inputPhone =res.data.data.data.connect_mobile
            this.shop_name = res.data.data.data.shop_name
            this.dev_addr = res.data.data.data.dev_addr
           // this.inputShopname=this.$refs.inputShopname.value;

          }
        }).catch(res => {
        console.log(res)
      })


    },
    mounted() {

    },
    methods: {
       goToPage(path) {
        this.$router.push(path)
      },

      surePave (){
        let config = {
          headers: {
            'Authorization': this.$store.state.token
          }
        }
        this.connect_name=this.$refs.inputlxr.value
        this.moblieNumber=this.$refs.moblieNumber.value
       if(!this.connect_name){
         Toast('联系人不能为空');
         console.log('联系人不能为空')
          return
        }

     /*   if(!this.moblieNumber){
          Toast('手机号不能为空');
          console.log('手机号不能为空')
          return
        }*/
        if(this.isnull(this.moblieNumber) || !this.isMoblie(this.moblieNumber) ){
          // 用户名为空
          Toast('手机号不正确');
          return
        }
       /* this.inputShopname=this.$refs.inputShopname.value*/
        console.log(this.connect_name)
        console.log(this.moblieNumber)
        let data = new FormData();
        this.devicenum= this.dev_num
        data.append('dev_num',this.devicenum);
        data.append('connect_name',this.connect_name);
        data.append('connect_mobile',this.moblieNumber);
       this.$axios.post('/api/device/insertDevice.do',data,config)

        .then(function(res){
          console.log("1111")
       if (res.data.code === '200') {
      // this.$store.commit('saveToken',res.data.data.data)

            Toast({
              message: '铺设成功',
             iconClass: 'mintui mintui-success'
            });

        }

        });
      } ,
    changeModuleV(i){
        this.changeModule = i;
      },



    }
  }


</script>

<style scoped>
  .app-container{
    height: 100vh;
    display: flex;
    flex-direction: column;
   /* background: url("../assets/login-bg.png");*/
    background-size: 100vw 100vh;
    overflow: hidden;
  }

  .yuan {
    position: relative;
    top: -2.4rem;
    left: 5.4rem;
    width: 4rem;
    height: 4rem;
    background-color: #1cb969;
    border-radius: 4rem;
    border: 0.4rem solid #a4e6c5;
  }

  .sureBt {
    font-size: 0.44rem;
    width: 6.1rem;
    height: 1rem;
    background-color: #1cb969;
    border-radius: 0.51rem;
    color: #ffffff;
    letter-spacing: 0.22rem;
    border: 0;
  }

  .inputMg {
    text-align: center;
    margin-top: -2.3rem;
  }

  .firstlogin_t {
    position: absolute;
    top: 0.85rem;
    left: 0.8rem;
    font-family: PingFangSC-Semibold;
    color: #333333;
    font-size: 0.64rem;
  }

  .pavetext {
    color: #333333;
    font-size: 0.6rem;
  }

  .pavetext1 {
    color: #999999;
    font-size: 0.26rem;
    margin-top: 0.2rem;
  }
  input.inputlxr {
    width: 5.6rem;
    padding-left: 1rem;
    background: url(../assets/img/lxrno.png) no-repeat;
    background-position: 0.3rem;
    background-size: 0.4rem;
    height: 0.8rem;
    border-radius: 0.5rem;
    background-color: #f1f4f5;
    border: 0;
  }

 input.inputlxr.selected {
    background: url(../assets/img/lxrno1.png) no-repeat;
    background-position: 0.3rem;
    background-size: 0.4rem;
    background-color: #f1f4f5;
  }

  input.inputPhone {
    width: 5.8rem;
    padding-left: 1rem;
    background: url(../assets/img/phoneno.png) no-repeat;
    background-position: 0.4rem;
    background-size: 0.4rem;
    height: 0.8rem;
    border-radius: 0.5rem;
    background-color: #f1f4f5;
    border: 0;
  }

  input.inputPhone.selected {
    background: url(../assets/img/phoneno1.png) no-repeat;
    background-position: 0.4rem;
    background-size: 0.4rem;
    background-color: #f1f4f5;
  }

  input.inputShopname {
    width: 5.6rem;
    padding-left: 1rem;
    background: url(../assets/img/shopname.png) no-repeat;
    background-position: 0.3rem;
    background-size: 0.4rem;
    height: 0.8rem;
    border-radius: 0.5rem;
    background-color: #f1f4f5;
    border: 0;
  }

 input.inputShopname.selected {
    background: url(../assets/img/shopname1.png) no-repeat;
    background-position: 0.3rem;
    background-size: 0.4rem;
    background-color: #f1f4f5;
  }

  input.inputShopname {
    width: 5.6rem;
    padding-left: 1rem;
    background: url(../assets/img/shopname.png) no-repeat;
    background-position: 0.3rem;
    background-size: 0.4rem;
    height: 0.8rem;
    border-radius: 0.5rem;
    background-color: #f1f4f5;
    border: 0;
  }

  input.inputShopname.selected {
    background: url(../assets/img/shopname1.png) no-repeat;
    background-position: 0.3rem;
    background-size: 0.4rem;
    background-color: #f1f4f5;
  }

  textarea.inputAdress {
    width: 5.6rem;
    padding-left: 1rem;
    margin-top: 0.3rem;
    background: url(../assets/img/adress.png) no-repeat;
    background-position: 0.3rem 0.1rem;
    background-size: 0.5rem;
    height: 2.3rem;
    border-radius: 0.5rem;
    background-color: #f1f4f5;
    border: 0;
    padding-top: 0.2rem;
  }

/*  textarea.inputAdress.selected {
    background: url(../assets/img/adress1.png) no-repeat;
    background-position: 0.3rem 0.1rem;
    background-size: 0.4rem;
    background-color: #f1f4f5;
  }*/
</style>
