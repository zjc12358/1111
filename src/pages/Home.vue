<template>
    <div class="app-container">
      <div style="height: 3vw;"></div>
      <div class="tissue-all" style="height: 45vw;color: #fff;">
        <div style="display: flex">
          <div style="margin-left: 6vw;margin-top: 5vw">
            <div style="font-size: 3.7vw">可提现收益</div>
            <div style="font-size: 6.6vw;margin-top: 2vw">2.0</div>
          </div>
          <div style="flex: 1;"></div>
          <div style="display: flex;align-items: center;margin-right: 10vw;">
            <mt-button @click="goToPage('/withdrawDeposit')" style="background: #6dc09f;height: 6vw;width: 14.6vw;font-size: 3.7vw;color: white;">提现</mt-button>
          </div>
        </div>
        <div class="money-tablist">
          <div>
            <div>累计收入</div>
            <div>37.6</div>
          </div>
          <div>
            <div>月收益</div>
            <div>1.6</div>
          </div>
          <div>
            <div>余额</div>
            <div>8.00</div>
          </div>
        </div>
      </div>
      <div class="myCard">
        <div class="myDevice">
          <p class="select_top" @click="goToPage('/myDevice')">我的设备</p>
          <p class="device_select">我的设备查询</p>
        </div>
        <div class="nextmyDevice">
          <p class="select_top">下级代理设备</p>
          <p class="device_select">下级代理设备查询</p>
        </div>
      </div>
      <div class="quickFun">
        <div></div>
        <div style="font-size: 4.3vw">快捷功能</div>
        <div></div>
      </div>
      <div class="funBox">
        <div class="funItem" v-for="item in funList">
          <img :src="item.img" alt="">
          <div>{{ item.title }}</div>
        </div>
      </div>
      <div style="height: 55px;"></div>
      <tabbar :selected="selected" :tabs='tabs'></tabbar>
    </div>
</template>

<script>
  import tabbar from '../components/tabbar'
  export default {
    name: "Home",
    components: {
      tabbar
    },
    data () {
      return {
        selected: "MainPage",
        tabs: this.$store.state.tabs,
        funList: [
          { img: require('../assets/myteamImg.png'), title: '我的商户' },
          { img: require('../assets/myteamImg.png'), title: '代理商' },
          { img: require('../assets/myteamImg.png'), title: '订单' },
          { img: require('../assets/myteamImg.png'), title: '提现记录' },
          { img: require('../assets/myteamImg.png'), title: '收益明细' },
          { img: require('../assets/myteamImg.png'), title: '修改密码' },
          { img: require('../assets/myteamImg.png'), title: '收款信息' },
          { img: require('../assets/myteamImg.png'), title: '故障信息' },
          { img: require('../assets/myteamImg.png'), title: '开设下级' },
          { img: require('../assets/myteamImg.png'), title: '设置' },
          { img: require('../assets/myteamImg.png'), title: '设备认领' },
        ]
      }
    },
    created() {
      //  网络请求.
      this.$axios.get('/api/index/initPage.lxkj',
        {
          headers: {
            'Authorization': this.$store.state.token
          }
        }
      )
        .then(res => {
          console.log(res)
        }).catch(res=>{
        console.log(res)
      })
    },
    mounted() {

    },
    methods:{
      goToPage (path) {
        this.$router.push(path)
      }
    }
  }
</script>

<style scoped>
  .app-container{
    background: #efeff4;
    height: 100vh;
    overflow: auto;
  }
  .tissue-all{
    background: url("../assets/bg_top.png") center no-repeat;
    background-size:100vw 45vw;
  }
  .money-tablist{
    margin-top: 8vw;
    margin-left: 4vw;
    margin-right: 4vw;
    height: 13vw;
    display: flex;
    font-size: 3.7vw;
    color: #fefefe;
    opacity: 0.8;
    align-items: center;
  }
  .money-tablist>div{
    flex: 1;
    text-align: center;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .money-tablist>div:nth-child(2){
    border-left: 1px solid white;
    border-right: 1px solid white;
  }
  .myCard{
    display: flex;
    justify-content: space-between;
    padding: 0 2vw;
  }
  .myCard>div{
    flex: 1;
    height: 26.6vw;
    color: white;
    /*margin-top: 8.6vw;*/
  }
  .myCard>div:nth-child(1){
    background: url("../assets/deviceImg.png") center no-repeat;
    background-size: 50vw 26.6vw;
    font-size: 3.2vw;
    padding-left: 8vw;
  }
  .myCard>div>p:nth-child(1){
    padding-top: 5.6vw;
    margin-bottom: 2vw;
  }
  .myCard>div>p:nth-child(2){
    opacity: 0.8;
  }
  .myCard>div:nth-child(2){
    background: url("../assets/nextdeviceImg.png") center no-repeat;
    background-size: 50vw 26.6vw;
    font-size: 3.2vw;
    padding-left: 8vw;
  }
  .quickFun{
    display: flex;
    align-items: center;
    margin: 0 4vw;
  }
  .quickFun>div{
    flex: 1;
  }
  .quickFun>div:nth-child(1),.quickFun>div:nth-child(3){
    height: 1px;
    background: #cccccc;
  }
  .quickFun>div:nth-child(2){
    text-align: center;
  }
  .funBox{
    display: flex;
    justify-content: flex-start;
    flex-flow: wrap;
  }
  .funItem{
    width: 24vw;
    height: 20vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 3.2vw;
  }
  .funItem>img{
    width: 6.6vw;
    display: block;
    margin-bottom: 1vw;
  }
</style>
