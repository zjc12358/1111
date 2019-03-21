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
import agency from "../pages/agency";
import devicePave from "../pages/devicePave";
import deviceManager from "../pages/deviceManager";
import bindDevice from "../pages/bindDevice";
import claimDevice from "../pages/claimDevice";

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
    ,
    {
      // 添加代理商
      path: '/agency',
      name: 'agency',
      component: agency
    }
    ,
    {
      // 添加设备铺设
      path: '/devicePave',
      name: 'devicePave',
      component: devicePave
    } ,
    {
      // 设备管理
      path: '/deviceManager',
      name: 'deviceManager',
      component: deviceManager
    },
    {
      // 绑定设备
      path: '/bindDevice',
      name: 'bindDevice',
      component: bindDevice
    },
    {
      // 认领设备
      path: '/claimDevice',
      name: 'claimDevice',
      component: claimDevice
    }
  ]
})
