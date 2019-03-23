<template>
    <div>
      <div class="mui-tab-icon">
        <div class="tab_list"  @click="claimDevice">
          <img src="../assets/img/claimImg.png" class="tabImg" />
          <p class="listgn_title">设备认领</p>
        </div>
        <div class="tab_list" @click="devicePave">
          <img src="../assets/img/paveImg.png" class="tabImg" />
          <p class="listgn_title">设备铺设</p>
        </div>
        <div class="tab_list" @click="bindDevice">
          <img src="../assets/img/bindImg.png" class="tabImg" />
          <p class="listgn_title">设备绑定</p>
        </div>
        <div class="tab_list">
          <img src="../assets/img/unbindImg.png" class="tabImg" />
          <p class="listgn_title">设备解绑</p>
        </div>
        <div class="tab_list">
          <img src="../assets/img/replenishment.png" class="tabImg" />
          <p class="listgn_title">设备补货</p>
        </div>
        <div class="tab_list">
          <img src="../assets/img/breakdown.png" class="tabImg" />
          <span class="breakdown_num">199</span>
          <p class="listgn_title">设备故障</p>
        </div>
      </div>

    <!--  <footer class="footer" v-on:click="test()">-->
      <footer class="footer" >
        <div style="text-align: center;">
          <div class="mui-icon mui-icon-closeempty" id="closePage"></div>
        </div>
      </footer>
    </div>
</template>

<script>
  import '../assets/js/jquery-3.3.1.min'
    export default {
        name: "deviceManager",

      methods:{
        claimDevice:function(){
          this.$router.push('/claimDevice')
        },
        devicePave:function(){
          this.$router.push('/devicePave')
        },
        bindDevice:function(){
          this.$router.push('/bindDevice')
        },

      }
    }

</script>

<style scoped>
  @import '../assets/css/deviceManager.css';
  @import '../assets/css/mui.min.css';


</style>
