<template>
    <div>
      <div  class="app-container">
      <div class="firstlogin_t">
        <p class="pavetext">设备解绑</p>
        <p class="pavetext1">请先选择要解绑的店铺</p>
      </div>
      <div class="yuan"></div>

  <div class="content_list" v-for="(item,key) in unbindList" @click="unBindDevice($event,key)" >
        <img :src="item.point_img" class="shopPhoto" />
        <div class="rightDiv">
          <div class="shopName" >{{item.shop_name}}</div>
          <div class="deviceDiv">{{item.count}}台</div>

          <div class="deviceAdress" >{{item.dev_addr}}</div>
        </div>
       <!--<div class="Behave">已绑定：<span>2</span>台</div>-->
      </div>

      </div>
    </div>
</template>

<script>

  export default {
    name: "unbind",
    data() {
      return {
        // tabs: this.$store.state.tabs,
        unbindList: []
      }
    },
    created() {
      //  网络请求.
      let config = {
        headers: {
          'Authorization': this.$store.state.token
        }
      }
      let data = new FormData();
      this.$axios.post(process.env.API_HOST+'/device/getNumberbyshopid.do', data, config)
     /* this.$axios.post('//device/getNumberbyshopid.do ', data, config)*/
        .then(res => {
          console.log(res)
         if (res.data.code === '200') {
            this.unbindList = res.data.data
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

      unBindDevice:function(e,k) {
        console.log(11)

         let config = {
       headers: {
         'Authorization': this.$store.state.token
       }
     }
        let data = new FormData();
       // console.log(k)
        //console.log(this.unbindList)
        let shop_name=this.unbindList[k].shop_name;
        let dev_addr=this.unbindList[k].dev_addr;
        let count=this.unbindList[k].count;
        console.log(this.unbindList[k].shop_name)

       // this.$router.push('/bindDevice'+shop_name);
        this.$router.push({
          path: '/bindDevice',
          query: {
            shop_name: shop_name,
            dev_addr:dev_addr,
            count:count

          }
        })

        //data.append("shop_name",shop_name)
        //console.log(shop_name)
      /*  this.$axios.post('//device/getShopBindByAgentId.do', data, config)
          .then(res => {
            console.log(res)
            if (res.data.code === '200') {
              //this.unbindList = res.data.data
            this.$router.push('/bindDevice');
            }
          }).catch(res => {
          console.log(res)
        })*/


      }

    }
  }

</script>

<style scoped>
  @import '../assets/css/mui.min.css';
  @import '../assets/css/unbind.css';

</style>
