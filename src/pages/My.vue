<template>
  <div>

    <div class="my-container">

        <div class="head_all">
          <div style="margin-right: 2.6vw;">
            <img src="../assets/loginimg.png" class="userImg">
          </div>
          <div style="margin-top: -10vw">
            <p style="font-size: 5.3vw ;color: #FFFFFF;" class="username">super</p>
            <p style="font-size: 3.7vw;	color: #ffffff;">
              <label class="message">资讯</label>
              <span class="message-text">您喜欢的，这里都有······</span>
            </p>
          </div>
         <!-- <div class="setDiv" >
            <div style="margin-right: 2.6vw;">
              <img src="../assets/loginimg.png"  class="setImg">
            </div>
            <div>
              <img src="../assets/loginimg.png" class="setImg">
            </div>
          </div>-->
          </div>

      <div class="yu_money">
        <label class="yue-title">金 额 (元)</label>
        <div style="height: 6vw;width: 1px;background: white"></div>
        <label class="yue-num">8.00</label>
        <div style="flex: 1"></div>
        <div class="tixian">
          提现
        </div>
        <!--<img class="jiantou" src="../assets/jiant1.png" alt="">-->
        <!--<div style="flex: 1;height: 80%;border-right: 1px solid #d1a86b"></div>-->
        <!--<a class="tixian" href="../phoneOrder/statistics.do"> 提现</a>-->
        <!--<a class="tixian" href="javascript:void(0);"> 提现</a>-->
      </div>
      <div class="mui-content" id="mui-content-part2">
        <div class="mui-row">
          <div class="shouyi" style="font-size: 3.7vw">
            <img src="../assets/img/myearn.png" class="earn_img">
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
              <div class="funBtn"  @click="goTo('/earnTime')">
                <div><img src="../assets/myorder.png" class="orderImg"></div>
                <div class="order_title">交易订单</div>
              </div>
              <div class="funBtn"  @click="goTo('/earn')">
                <div><img src="../assets/updatepsw.png" class="orderImg"></div>
                <div class="order_title">修改密码</div>
              </div>
            </div>
            <div style="display: flex;align-items: center">
              <div @click="goTo('/agency')" class="openAccount">开设账户</div>
            </div>
            <div>
              <div class="funBtn"  @click="goTo('/MyTeam')">
                <div><img src="../assets/team.png" class="orderImg"></div>
                <div class="order_title">我的团队</div>
              </div>
              <div class="funBtn"  @click="goTo('/earn')">
                <div><img src="../assets/reporting.png" class="orderImg"></div>
                <div class="order_title">收入报表</div>
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

      <div class="mui-content" id="mui-content-part4" >
        <div v-for="item in myOperatingOptions">
          <img :src="item.img" style="width: 0.5rem;height: 0.5rem;">
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
  @import '../assets/css/mui.min.css';
  @import '../assets/css/my.css';

</style>
