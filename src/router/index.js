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
import MyTeam from "../pages/MyTeam";
import wxCode from "../pages/wxCode";
import unbind from "../pages/unbind";
import peopleSet from "../pages/peopleSet";
import complete from "../pages/complete";
import record from "../pages/record";
import changeInformation from "../pages/changeInformation";
import contact from "../pages/contact";
import breakDevice from "../pages/breakDevice";
import fillGoods from "../pages/fillGoods";

Vue.use(Router)


export default new Router({
  routes: [
    {
      // 首页
      path: '/',
      name: 'Home',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: Home
    },
    {
      // 统计
      path:'/statistics',
      name: 'Statistics',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
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
    },
    {
      // 认领设备
      path: '/MyTeam',
      name: 'MyTeam',
      component: MyTeam
    },
    {
      //
      path: '/wxCode',
      name: 'wxCode',
      component: wxCode
    },
    {
      //解绑设备
      path: '/unbind',
      name: 'unbind',
      component: unbind
    },
    {
      //peopleSet个人设置
      path: '/peopleSet',
      name: 'peopleSet',
      component: peopleSet
    }
    ,
    {
      //complete
      path: '/complete',
      name: 'complete',
      component: complete
    },
    {
      //提现记录
      path: '/record',
      name: 'record',
      component: record
    },
    {
      //changeInformation 修改信息
      path: '/changeInformation',
      name: 'changeInformation',
      component: changeInformation
    }
    ,
    {
      //联系我们
      path: '/contact',
      name: 'contact',
      component: contact
    }
    ,
    {
      //故障设备
      path: '/breakDevice',
      name: 'breakDevice',
      component: breakDevice
    },
    {
      //补货
      path: '/fillGoods',
      name: 'fillGoods',
      component: fillGoods
    },
  ]
})
