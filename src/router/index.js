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
import changePwd from "../pages/changePwd";
import breakDevice from "../pages/breakDevice";

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
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
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
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: MyDevice
    },
    {
      // 提现
      path: '/withdrawDeposit',
      name: 'WithdrawDeposit',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: WithdrawDeposit
    },
    {
      // 订单
      path: '/earn',
      name: 'earn',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: earn
    },
    {
      // 订单时间
      path: '/earnTime',
      name: 'earnTime',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: earnTime
    }
    ,
    {
      // 添加代理商
      path: '/agency',
      name: 'agency',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: agency
    }
    ,
    {
      // 添加设备铺设
      path: '/devicePave',
      name: 'devicePave',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: devicePave
    } ,
    {
      // 设备管理
      path: '/deviceManager',
      name: 'deviceManager',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: deviceManager
    },
    {
      // 绑定设备
      path: '/bindDevice',
      name: 'bindDevice',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: bindDevice
    },
    {
      // 认领设备
      path: '/claimDevice',
      name: 'claimDevice',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: claimDevice
    },
    {
      // 认领设备
      path: '/MyTeam',
      name: 'MyTeam',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: MyTeam
    },
    {
      //
      path: '/wxCode',
      name: 'wxCode',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: wxCode
    },
    {
      //解绑设备
      path: '/unbind',
      name: 'unbind',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: unbind
    },
    {
      //peopleSet个人设置
      path: '/peopleSet',
      name: 'peopleSet',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: peopleSet
    }
    ,
    {
      //complete
      path: '/complete',
      name: 'complete',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: complete
    },
    {
      //提现记录
      path: '/record',
      name: 'record',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: record
    },
    {
      //changeInformation 修改信息
      path: '/changeInformation',
      name: 'changeInformation',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: changeInformation
    }
    ,
    {
      //联系我们
      path: '/contact',
      name: 'contact',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: contact
    },
    // 修改密码
    {
      path: '/changePwd',
      name: 'changePwd',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: changePwd
    }
    ,
    {
      //故障设备
      path: '/breakDevice',
      name: 'breakDevice',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: breakDevice
    }
  ]
})
