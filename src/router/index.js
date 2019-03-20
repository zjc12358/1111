import Vue from 'vue'
import Router from 'vue-router'
import Home from "../pages/Home";
import Login from "../pages/Login";
import Statistics from "../pages/Statistics";
import Advertising from "../pages/Advertising";
import My from "../pages/My";
import MyDevice from "../pages/MyDevice";
import WithdrawDeposit from "../pages/WithdrawDeposit";
import earn from "../pages/earn";
import earnTime from "../pages/earnTime";

Vue.use(Router)

export default new Router({
  routes: [
    {
      // 首页
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      // 统计
      path:'/statistics',
      name: 'Statistics',
      component: Statistics
    },
    {
      // 广告
      path:'/advertising',
      name: 'Advertising',
      component: Advertising
    },
    {
      // 我的
      path:'/my',
      name: 'My',
      component: My
    },
    {
      // 登录
      path:'/login',
      name: 'Login',
      component: Login
    },
    {
      // 我的设备
      path:'/myDevice',
      name: 'MyDevice',
      component: MyDevice
    },
    {
      // 提现
      path: '/withdrawDeposit',
      name: 'WithdrawDeposit',
      component: WithdrawDeposit
    },
    {
      // 订单
      path: '/earn',
      name: 'earn',
      component: earn
    },
    {
      // 订单时间
      path: '/earnTime',
      name: 'earnTime',
      component: earnTime
    }
  ]
})
