<template>
    <div>
      <div  class="app-container">
      <div class="firstlogin_t">
        <p class="pavetext">设备解绑</p>
        <p class="pavetext1">请先选择要解绑的店铺</p>
      </div>
      <div class="yuan"></div>

  <div class="content_list" v-for="item in unbindList">
        <img :src="item.point_img" class="shopPhoto" />
        <div class="rightDiv">
          <div class="shopName" >{{item.shop_name}}</div>
          <div class="deviceDiv">{{item.type_name}}</div>

          <div class="deviceAdress" >{{item.dev_addr}}</div>
        </div>
       <div class="Behave">已绑定：<span>2</span>台</div>
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
      this.$axios.post('/api/device/selectBind.do', data, config)
     // this.$axios.post('/api/device/selectall.do', data, config)
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

    }
  }

</script>

<style scoped>
  @import '../assets/css/mui.min.css';
  @import '../assets/css/unbind.css';

</style>
