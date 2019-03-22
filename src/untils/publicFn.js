// 公共方法！
export default {
  install(Vue) {
    Vue.prototype.sendMsg = function (i) {
      if (i == 0) {
        this.getNumBtnDis = false
        this.sendTime = 60
        this.getNumMsg = '获取验证码'
      } else {
        this.getNumBtnDis = true
        this.sendTime -= 1
        this.getNumMsg = this.sendTime + 'S后重新发送'
        setTimeout(()=>{
          this.sendMsg(this.sendTime)
        },1000)
      }
    }
    Vue.prototype.sendMsg2 = function () {
      console.log('我是公共方法2')
    }
    Vue.prototype.linkTo = function (path) {
      this.$router.push(path)
    }
  }
}
