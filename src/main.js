// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('./mock')
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import {
  Button,
  Select,
  Slider,
  Menu,
  MenuItem,
  Container,
  Header,
  Submenu,
  Main,
  Row,
  Input
} from 'element-ui';
import MINT from 'mint-ui'
import 'mint-ui/lib/style.css';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store/index'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(Vuex);
Vue.use(Slider);
Vue.use(Button);
Vue.use(Select);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Container);
Vue.use(Header);
Vue.use(Submenu);
Vue.use(Main);
Vue.use(Row);
Vue.use(Input);

Vue.use(MINT)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
