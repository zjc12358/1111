<template>
  <div>
    <div class="my-container">
        <div class="head_all">
          <div style="margin-right: 2.6vw;">
            <img src="../assets/loginimg.png" class="userImg">
          </div>
          <div>
            <p style="font-size: 5.3vw ;color: #FFFFFF;" class="username">{{ name }}</p>
            <p style="font-size: 3.7vw;	color: #ffffff;">
              <label class="message">资讯</label>
              <span class="message-text">您喜欢的，这里都有······</span>
            </p>
          </div>
        </div>

      <div class="yu_money">
        <label class="yue-title">余&nbsp;额&nbsp;(元)</label>
        <div style="height: 6vw;width: 1px;background: white"></div>
        <label class="yue-num">{{ money }}</label>
        <div style="flex: 1"></div>
        <div class="tixian">
          提现
        </div>
      </div>
      <div class="mui-content" id="mui-content-part2">
        <div class="mui-row">
          <div class="shouyi" style="font-size: 3.7vw">
            <!--<img src="" class="earn_img">-->
            我的收益
          </div>
          <div style="height: 1px;margin: 0 4vw;background: #dadadd"></div>
          <div class="content_top">
            <div v-for="(item,key) in earnings">
              <p class="today_earn">{{ item.num }}</p>
              <p class="earn_title">{{ item.title }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mui-content" id="mui-content-part3">
        <div class="mui-row">
          <div class="content_top">
            <div>
              <div class="funBtn"  @click="linkTo('/earnTime')">
                <div><img src="../assets/myorder.png" class="orderImg"></div>
                <div class="order_title">交易订单</div>
              </div>
              <div class="funBtn"  @click="linkTo('/changePwd')">
                <div><img src="../assets/updatepsw.png" class="orderImg"></div>
                <div class="order_title">修改密码</div>
              </div>
            </div>
            <div style="display: flex;align-items: center">
              <div @click="goTo('/agency')" class="openAccount">开设账户</div>
            </div>
            <div>
              <div class="funBtn"  @click="linkTo('/MyTeam')">
                <div><img src="../assets/team.png" class="orderImg"></div>
                <div class="order_title">我的团队</div>
              </div>
              <div class="funBtn"  @click="linkTo('/earn')">
                <div><img src="../assets/myorder.png" class="orderImg"></div>
                <div class="order_title">收入报表</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mui-content" id="mui-content-part4" >
        <div v-for="item in myOperatingOptions" @click="linkTo(item.linkTo)">
          <img :src="item.img"  style="width: 0.5rem;height: 0.5rem;">
          <div class="down_text">{{ item.title }}</div>
        </div>
      </div>


      <div style="height: 55px;"></div>
    </div>
    <tabbar :selected="selected" :tabs='tabs'></tabbar>
  </div>
</template>

<script>
  import tabbar from "../components/tabbar";


  export default {
    name: "My",
    components: {
      tabbar
    },
    data(){
      return {
        name: '用户',
        money: '0',
        selected: "UserCenter",
        tabs: this.$store.state.tabs,
        earnings: [
          {title: '今日预估(元)',num: 0},
          {title: '昨日预估(元)',num: 0},
          {title: '本月预估(元)',num: 1.6},
          {title: '上月预估(元)',num: 2}
        ],
        myFunBtns: [
          { img: require("../assets/myorder.png"),title: '交易订单',linkTo: '/earn' },
          { img: require("../assets/team.png"),title: '我的团队' },
          { img: require("../assets/report.png"),title: '收入报表' },
          { img: require("../assets/updatepsw.png"),title: '修改密码' }
        ],
        myOperatingOptions: [
            { img: require("../assets/zf_ewm.png"), title: '修改收款二维码',linkTo: '/changeEwm' },
            { img: require("../assets/problem.png"), title: '常见问题' },
            { img: require("../assets/call.png"), title: '联系我们',linkTo: '/contact' },
            { img: require("../assets/uploadImg.png"), title: '素材下载' },
          ]
      }
    },
    created(){
      this.$axios.get(process.env.API_HOST+'/agency/getInfo.lxkj',
        {
          headers: {
            'Authorization': this.$store.state.token
          }
        }
      )
        .then(res => {
          if ( res.data.code === '200' ){
            this.name = res.data.data.agency_name
            this.money = res.data.data.money
            console.log(res)
          }
          console.log(res)
        }).catch(res=>{
        console.log(res)
      })
    },
    methods:{
      fn(n){
        console.log(n)
      },
      goTo(path){
        this.$router.push(path)
      }
    }
  }
</script>

<style scoped>
  @import '../assets/css/mui.min.css';
  .my-container{
    background: #efeff4;
    height: 100vh;
    overflow: auto;
    background: url("../assets/img/my-Bg.png") center no-repeat;
    background-size: 100vw 100vh;
    padding-top: 0.5rem;

  }

  .head_all{
    height: 13.8vw;
    padding-top: 5vw;
    margin-left: 2.6vw;
    display: flex;
    align-items: center;
  }
  .head_all>div:nth-child(2){
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
  }
  .zfb_text{
    font-size: 3.7vw;
  }
  .userImg{
    width: 13.3vw;
    height: 13.3vw;
    border-radius: 50%;
    margin: 6vw 0 1vw 1vw;
  }
  .yu_money{
    height: 13.3vw;
    background-color: #83e0cb;
    border-radius: 1vw;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: white;
    margin: 1rem 0.55rem 0 0.55rem;
    border-radius: 0.1rem;
    opacity: 0.9;
  }
  .yue-num{
    margin-left: 2vw;
    font-size: 6vw;
  }


  .tixian{
    width: 21vw;
    height: 80%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    color: #ffffff;
    font-size: 4vw;
  }
  .yue-title{
    width: 21vw;
    text-align: center;
    font-size: 3.7vw;
  }
  .mui-content{
    position: relative;
    top: 5vw;
    background: #FFFFFF;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 86%;
    border-radius: 2vw;
  }
  .shouyi{
    padding: 2.9vw 4vw;
  }
  .content_top{
    display: flex;
    justify-content:space-around;
    text-align: center;
    padding: 5.3vw 3.7vw 3.7vw 3.7vw;
    font-size: 3.2vw;
  }
  .content_top>div>p:nth-child(2){
    margin-top: 2vw;
    color: #8f8f94;
  }
  .content_top>div>div:nth-child(2){
    margin-top: 2vw;
  }
  #mui-content-part3{
    top: 8vw;
  }
  .funBtn{
  /*  width: 13.8vw;
    height: 14vw;*/
  }
  .funBtn>p:nth-child(2){
    margin-top: 0.5vw;
  }
  .orderImg{
    width: 6.1vw;
    height: 7.2vw;
  }
  .addDiv{
    height: 16.5vw;
    margin-top: 2vw;
  }
  .addDiv>a{
    display: block;
    position: relative;
  }
  .addDiv>a>div{
    position: absolute;
    top: 0;
    width: 100%;
    height: 16.5vw;
    display: flex;
    align-items: center;
  }
  .addDiv>a>div>span{
    margin-left: 13vw;
    font-size: 5.3vw;
    color: white;
  }
  .adduser{
    display: block;
    margin: 0 4vw;
  }
  .jiantou{
    width: 3.4vw;
    margin-right: 5vw;
  }
  #mui-content-part4{
    top: 11vw;
    margin-bottom: 5vw;
    font-size: 2vw;
    display: flex;
    justify-content: space-around;
    text-align: center;
    padding: 5vw 3vw;
  }
  .mui-table-view-cell2{
    height: 11.7vw;
  }
  .mui-table-view-cell2>a{
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    color: #666666;
    font-size: 3.7vw;
    position: relative;
  }
  .mui-table-view-cell2:after{
    height: 1px;
    background-color: #c8c7cc;
    content: '';
    position: absolute;
    left: 4vw;
    right: 4vw;
  }
  .mui-table-view-cell2>a:after{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    text-decoration: none;
    color: #bbb;
    -webkit-font-smoothing: antialiased;
    right: 15px;
    content: '\e583';
  }
  .mui-table-view-cell2>a>img{
    width: 3.7vw;
    height: 3.7vw;
    margin: 0 4vw;
  }
  #mui-row-part4>li:nth-last-child(1):after{
    opacity: 0;
  }
  .openAccount{
    width: 20vw;
    height: 20vw;
    background: #3fcf9c;
    color: white;
    border-radius: 50%;
    font-size: 4vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .down_text{
    margin-top: 0.1rem;
    font-size: 0.24rem;
  }
  .earn_title{
    font-size: 0.24rem;
  }
  .order_title{
    color: #4f5965;
    font-size: 0.24rem;
  }
</style>
