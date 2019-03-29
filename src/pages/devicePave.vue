<template>
    <div class="app-container">
      <div class="firstlogin_t">
        <p class="pavetext" style="color: black;">设备铺设</p>
        <p class="pavetext1">壁挂式纸巾机 A03365322168856</p>
      </div>
      <div class="yuan"></div>


      <div class="inputMg">
        <input type="text" class="inputlxr" placeholder="联系人" />
        <input type="text" class="inputPhone" placeholder="联系电话" />
        <input type="text" class="inputShopname" placeholder="店铺名称" />
        <textarea type="text" class="inputAdress"  placeholder="铺设地址"></textarea>

      </div>

      <div style="text-align: center;margin-top:0.7rem;">
        <button class="sureBt" @click="surePave()">确认</button>
      </div>
    </div>
</template>

<script>
  import '../untils/rem.js'

  export default {
    name: "devicePave",
    data() {
      return {
        username: '',
        moblieNumber: '',
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
      console.log(this.dev_num)
  /*    let data = new FormData();
     this.$axios.post('/api/device/insertDevice.do', data, config)
        .then(res => {
          console.log(res)
          if (res.data.code === '200') {
            this.equipmentList = res.data.data
          }
        }).catch(res => {
        console.log(res)
      })*/


    },
    mounted() {

    },
    methods: {
       goToPage(path) {
        this.$router.push(path)
      },
      getDevnum(e) {
        //let dev_num = $("#dev_num").text();
       // console.log(dev_num)

      },
      surePave (){
        this.$axios.post('/api/device/insertDevice.do',{
          //dev_num:this.dev_num,

          },{
            emulateJSON: true
          }
        ).then(function(res){
          console.log("1111")
          this.$root.dev_num=res.data.dev_num;
          //this.$root.userid=res.data.userid;
          //console.log(this.$root.userid)
          //this.$router.push('/content') ;
        });
      }
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
    margin-top: -1.8rem;
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
    width: 6.1rem;
    padding-left: 1rem;
    background: url(../assets/img/lxrno.png) no-repeat;
    background-position: 0.3rem;
    background-size: 0.4rem;
    height: 1rem;
    border-radius: 0.5rem;
    background-color: #f1f4f5;
    border: 0;
  }

/*  input.inputlxr.selected {
    background: url(../assets/img/lxrno1.png) no-repeat;
    background-position: 0.3rem;
    background-size: 0.4rem;
    background-color: #f1f4f5;
  }*/

  input.inputPhone {
    width: 6.1rem;
    padding-left: 1rem;
    background: url(../assets/img/phoneno.png) no-repeat;
    background-position: 0.3rem;
    background-size: 0.4rem;
    height: 1rem;
    border-radius: 0.5rem;
    background-color: #f1f4f5;
    border: 0;
  }

/*  input.inputPhone.selected {
    background: url(../assets/img/phoneno1.png) no-repeat;
    background-position: 0.3rem;
    background-size: 0.4rem;
    background-color: #f1f4f5;
  }*/

  input.inputShopname {
    width: 6.1rem;
    padding-left: 1rem;
    background: url(../assets/img/shopname.png) no-repeat;
    background-position: 0.3rem;
    background-size: 0.4rem;
    height: 1rem;
    border-radius: 0.5rem;
    background-color: #f1f4f5;
    border: 0;
  }

/*  input.inputShopname.selected {
    background: url(../assets/img/hopname1.png) no-repeat;
    background-position: 0.3rem;
    background-size: 0.4rem;
    background-color: #f1f4f5;
  }*/

  input.inputShopname {
    width: 6.1rem;
    padding-left: 1rem;
    background: url(../assets/img/shopname.png) no-repeat;
    background-position: 0.3rem;
    background-size: 0.4rem;
    height: 1rem;
    border-radius: 0.5rem;
    background-color: #f1f4f5;
    border: 0;
  }

/*  input.inputShopname.selected {
    background: url(../assets/img/shopname1.png) no-repeat;
    background-position: 0.3rem;
    background-size: 0.4rem;
    background-color: #f1f4f5;
  }*/

  textarea.inputAdress {
    width: 6.1rem;
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
