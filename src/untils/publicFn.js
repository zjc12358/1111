// 公共方法！
export default {
  install(Vue) {
    Vue.prototype.sendMsg = function () {
      console.log('我是公共方法')
    }
    Vue.prototype.sendMsg2 = function () {
      console.log('我是公共方法2')
    }
    Vue.prototype.linkTo = function (path) {
      this.$router.push(path)
    }
  }
}
