// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('./mock')
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import MINT, {Toast,Indicator} from 'mint-ui'
import 'mint-ui/lib/style.css';
import store from './store/index'
import axios from 'axios'
import publicFn from './untils/publicFn'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(Vuex);
Vue.use(MINT);
Vue.use(publicFn);
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

// 登录路由拦截
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    if (store.state.token) {  // 通过vuex state获取当前的token是否存在
      next();
    }
    else {
      Indicator.close();
      Toast('登录过期,请重新登录!')
      next({
        path: '/login',
        // query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    next();
  }
})

/* 响应拦截器 */

// axios.interceptors.response.use(function (response) {
//
//   if (response.data.msg === 'token失效') {
//
//     // Storage.localRemove('token') // 删除已经失效或过期的token（不删除也可以，因为登录后覆盖）
//     Indicator.close();
//     Toast('登录过期,请重新登录!')
//     router.replace({
//     path: '/login' // 到登录页重新获取token
//
//   })
//
//   }
//
//   return response
//
// }, function (error) {
//
//   return Promise.reject(error)
// })

