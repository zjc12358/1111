<template>
    <div>
      <div  class="app-container">
      <div class="firstlogin_t">
        <p class="pavetext">设备绑定</p>
        <p class="pavetext1">请先选择要绑定的店铺</p>
      </div>
      <div class="yuan"></div>

  <div class="content_list" v-for="item in unbindList" @click="unBindDevice($event,key)" >
        <img :src="item.point_img" class="shopPhoto" />
        <div class="rightDiv">
          <div class="deviceDiv">店铺</div>
          <div class="shopName" >{{item.shop_name}}</div>


          <div class="deviceAdress" >{{item.dev_addr}}</div>
        </div>
       <div class="Behave">已绑定：<span>{{item.count}}</span>台</div>
      </div>

      </div>
    </div>
</template>

<script>

  export default {
    name: "bind",
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

     /*   let dev_num=this.equipmentList[k].dev_num;
        let type_name=this.equipmentList[k].type_name;
        console.log(this.equipmentList[k].type_name);*/
        // return;
        /* console.log(e.target.innerHTML)*/
        console.log(345)
        //this.$router.push('/devicePave'+dev_num);
    /*    this.$router.push({
          path: '/devicePave',
          query: {
            dev_num: dev_num,
            type_name: type_name,

          }
        })*/

      }

    }
  }

</script>

<style scoped>
  @import '../assets/css/mui.min.css';
  @import '../assets/css/unbind.css';

</style>
