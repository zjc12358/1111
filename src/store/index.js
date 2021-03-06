import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  // 待添加
  state:{
    testMsg: '原始文本',
    isLogin: false,
    selectedTab: '',
    token: '',
    server_url: 'http://lovegll.natapp1.cc',
    tabs:[
      {
        id:'MainPage',
        src: [
          require("../assets/icon/home.png"),
          require("../assets/icon/home-fill.png")
        ]
      },
      {
        id: 'ShoppingList',
        src: [
          require("../assets/icon/home.png"),
          require("../assets/icon/home-fill.png")
        ]
      },
      {
        id: 'GroupList',
        src: [
          require("../assets/icon/home.png"),
          require("../assets/icon/home-fill.png")
        ]
      },
      {
        id: 'UserCenter',
        src: [
          require("../assets/icon/people.png"),
          require("../assets/icon/people-fill.png")
        ]
      },
    ]
  },
  mutations: {
    changeTestMsg(state,str){
      state.testMsg = str;
    },
    saveToken(state,token) {
      state.token = token;
    }
  }
})

export default store;
