<template>
    <div>
      <div class="mui-tab-icon">
        <div class="tab_list" >
          <img src="../assets/img/claimImg.png" class="tabImg" />
          <p class="listgn_title">设备认领</p>
        </div>
        <div class="tab_list" @click="goToPage('/MyDevice')">
          <img src="../assets/img/paveImg.png" class="tabImg" />
          <p class="listgn_title">设备铺设</p>
        </div>
        <div class="tab_list" @click="goToPage('/bind')">
          <img src="../assets/img/bindImg.png" class="tabImg" />
          <p class="listgn_title">设备绑定</p>
        </div>
        <div class="tab_list" @click="goToPage('/unbind')">
          <img src="../assets/img/unbindImg.png" class="tabImg" />
          <p class="listgn_title">设备解绑</p>
        </div>
        <div class="tab_list" @click="goToPage('/fillGoods')">
          <img src="../assets/img/replenishment.png" class="tabImg" />
          <p class="listgn_title">设备补货</p>
        </div>
        <div class="tab_list" @click="goToPage('/breakDevice')">
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

      <tabbar :selected="selected" :tabs='tabs'></tabbar>
    </div>
</template>

<script>

  import tabbar from "../components/tabbar";

  export default {
    name: "deviceManager",

    components: {
      tabbar,
    },

    data(){
      return {
        selected: "GroupList",
        tabs: this.$store.state.tabs,
      /*  pickerValue: '',
        pickerValue2: ''*/
      }
    },

    created () {
      console.log()
    },

    mounted() {

    },

    methods: {
    /*  openPicker() {
        this.$refs.picker.open();
      },
      openPicker2() {
        this.$refs.picker2.open();
      }*/
      goToPage (path) {
        this.$router.push(path)
      }

    }

  }
</script>

<style scoped>
  @import '../assets/css/deviceManager.css';
  @import '../assets/css/mui.min.css';


</style>
