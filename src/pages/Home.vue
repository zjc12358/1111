<template>
    <div class="app-container">
      <div style="height: 3vw;"></div>
      <div class="tissue-all" style="height: 45vw;color: #fff;">
        <div style="display: flex">
          <div style="margin-left: 8vw;margin-top: 5vw">
            <div style="font-size: 3.7vw">可提现收益</div>
            <div style="font-size: 6.6vw;margin-top: 2vw">{{ takeMoney }}</div>
          </div>
          <div style="flex: 1;"></div>
          <div style="display: flex;align-items: center;margin-right: 10vw;">
            <mt-button @click="goToPage('/withdrawDeposit')" style="background: #6dc09f;height: 6vw;width: 14.6vw;font-size: 3.7vw;color: white;">提现</mt-button>
          </div>
        </div>
        <div class="money-tablist">
          <div>
            <div>累计收入</div>
            <div>{{ accumulatedIncome }}</div>
          </div>
          <div>
            <div>月收益</div>
            <div>{{ monthlyIncome }}</div>
          </div>
          <div>
            <div>余额</div>
            <div>{{ balance }}</div>
          </div>
        </div>
      </div>
      <div class="myCard">
        <div class="myDevice">
          <p class="select_top" @click="goToPage('/MyDevice')">我的设备</p>
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
        <div class="funItem" v-for="item in funList" @click="item.param ? linkTo(item.path,item.param) : linkTo(item.path)">
          <img :src="item.img" alt="">
          <div>{{ item.title }}</div>
        </div>
      </div>
      <div style="height: 65px;"></div>
      <tabbar :selected="selected" :tabs='tabs'></tabbar>
    </div>
</template>

<script>
  import tabbar from '../components/tabbar'
  import {Toast} from "mint-ui";
  export default {
    name: "Home",
    components: {
      tabbar
    },
    data () {
      return {
        selected: "MainPage",
        tabs: this.$store.state.tabs,
        accumulatedIncome: 0, //总收益
        balance: 0, // 余额
        monthlyIncome: 0, //月收益
        takeMoney: 0, // 可提现收益
        funList: [
          { img: require('../assets/myteamImg.png'), title: '我的商户',path: '/MyTeam', param: 2 },
          { img: require('../assets/agencyImg.png'), title: '代理商',path: '/MyTeam',param: 1 },
          { img: require('../assets/orderIng.png'), title: '订单',path: '/earn' },
          { img: require('../assets/tx_history.png'), title: '提现记录',path: '/record' },
          { img: require('../assets/earn_Img.png'), title: '收益明细',path: '/record' },
          { img: require('../assets/updatepsw1.png'), title: '修改密码',path: '/changePwd' },
          { img: require('../assets/skmsgImg.png'), title: '收款信息',path: '/record' },
          { img: require('../assets/breakoutImg.png'), title: '故障信息',path: '/breakDevice' },
          { img: require('../assets/nextPeopleImg.png'), title: '开设下级',path: '/agency' },
          { img: require('../assets/Msgset.png'), title: '设置',path: '/peopleSet' },
          { img: require('../assets/getdevice.png'), title: '设备认领' },
        ]
      }
    },
    created() {
      //  网络请求.
      this.$axios.get(process.env.API_HOST+'/index/initPage.lxkj',
        {
          headers: {
            'Authorization': this.$store.state.token
          }
        }
      )
        .then(res => {
          if ( res.data.code === '200' ){
            this.accumulatedIncome = res.data.data.accumulatedIncome
            this.balance = res.data.data.balance
            this.monthlyIncome = res.data.data.monthlyIncome
            this.takeMoney = res.data.data.takeMoney
            console.log(this.tabs)
          }
          console.log(res)
        }).catch(res=>{
        console.log(res)
        Toast('请检查网络设置!')
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
    height: 6.6vw;
    display: block;
    margin-bottom: 1vw;
  }
  /deep/ .mint-tabbar > .mint-tab-item.is-selected {
    background-color: #eaeaea;
  }

</style>
