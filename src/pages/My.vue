<template>
  <div>
    <div class="my-container">
      <div class="banner_topImg">
        <div class="head_all">
          <div style="margin-right: 2.6vw;">
            <img src="../assets/loginimg.png" class="userImg">
          </div>
          <div>
            <p style="font-size: 5.3vw ;color: #FFFFFF;" class="username">测试代理商</p>
            <p style="font-size: 3.7vw;	color: #ffffff;">
              <label class="message">资讯</label>
              <span class="message-text">您喜欢的，这里都有······</span>
            </p>
          </div>
        </div>
      </div>
      <div class="yu_money">
        <label class="yue-title">余&nbsp;额&nbsp;(元)</label>
        <div style="height: 6vw;width: 1px;background: white"></div>
        <label class="yue-num">8.00</label>
        <div style="flex: 1"></div>
        <img class="jiantou" src="../assets/jiant1.png" alt="">
        <!--<div style="flex: 1;height: 80%;border-right: 1px solid #d1a86b"></div>-->
        <!--<a class="tixian" href="../phoneOrder/statistics.do"> 提现</a>-->
        <!--<a class="tixian" href="javascript:void(0);"> 提现</a>-->
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
              <div class="funBtn"  @click="goTo('/earn')">
                <p><img src="../assets/myorder.png" class="orderImg"></p>
                <p class="order_title">交易订单</p>
              </div>
              <div class="funBtn"  @click="goTo('/earn')">
                <p><img src="../assets/myorder.png" class="orderImg"></p>
                <p class="order_title">交易订单</p>
              </div>
            </div>
            <div style="display: flex;align-items: center">
              <div class="openAccount">开设账户</div>
            </div>
            <div>
              <div class="funBtn"  @click="goTo('/earn')">
                <p><img src="../assets/myorder.png" class="orderImg"></p>
                <p class="order_title">交易订单</p>
              </div>
              <div class="funBtn"  @click="goTo('/earn')">
                <p><img src="../assets/myorder.png" class="orderImg"></p>
                <p class="order_title">交易订单</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--<div class="addDiv">-->
        <!--<a href="javascript:void(0);">-->
          <!--<img style="width: 89.6vw;" src="../assets/adduser.png" class="adduser">-->
          <!--<div>-->
            <!--<span class="add_account" @click="fn(1)">开设账户</span>-->
            <!--<div style="flex: 1;"></div>-->
            <!--<img src="../assets/jiant1.png" class="jiantou">-->
          <!--</div>-->
        <!--</a>-->
      <!--</div>-->
      <div class="mui-content" id="mui-content-part4">
        <div class="mui-row" id="mui-row-part4">
          <li class="mui-table-view-cell2" v-for="item in myOperatingOptions">
            <a class="mui-navigate-right" href="javascript:void(0)">
              <img :src="item.img" class="left_img">
              <span class="down_text">{{ item.title }}</span>
            </a>
          </li>
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
            { img: require("../assets/zf_ewm.png"), title: '修改支付二维码' },
            { img: require("../assets/problem.png"), title: '常见问题' },
            { img: require("../assets/call.png"), title: '联系我们' },
            { img: require("../assets/uploadImg.png"), title: '素材下载' },
          ]
        }
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
  /*@import '../assets/css/mui.min.css';*/
  .my-container{
    background: #efeff4;
    height: 100vh;
    overflow: auto;
  }
  .banner_topImg{
    width: 100%;
    height: 35.2vw;
    background-image: linear-gradient(-77deg, #86de45 0%, #48bd5b 43%, #0a9b70 100%), linear-gradient( #6446e3, #6446e3);
    background-blend-mode: normal, normal;
    color: white;
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
    position: relative;
    top: -6.6vw;
    left: 2.5vw;
    width: 95vw;
    height: 13.3vw;
    background-color: #83e0cb;
    border-radius: 1vw;
    display: flex;
    align-items: center;
    color: white;
  }
  .yue-num{
    margin-left: 2vw;
    font-size: 6vw;
  }
.order_title{
  font-size: 2vw;
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
    color: #333333;
    font-size: 4vw;
  }
  .yue-title{
    width: 21vw;
    text-align: center;
    font-size: 3.7vw;
  }
  .mui-content{
    position: relative;
    top: -4vw;
    background: #FFFFFF;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 95%;
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
    top: -1vw;
  }
  .funBtn{
    width: 13.8vw;
    height: 14vw;
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
    top: 3vw;
    margin-bottom: 5vw;
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
    font-size: 4.2vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
