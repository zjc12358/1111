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

    // 验证表单是否为空
    Vue.prototype.isnull = function (val) {
      var str = val.replace(/(^\s*)|(\s*$)/g, '');//去除空格;
      if (str == '' || str == undefined || str == null) {
        return true;
        console.log('空')
      } else {
        return false;
        console.log('非空');
      }
    }

    /**
     * 验证表单 --- 手机号  false不是  true是
     * @param val
     * @returns {boolean}
     */
    Vue.prototype.isMoblie = function (val) {
      var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
      if (!myreg.test(val)) {
        return false;
      } else {
        return true;
      }
    }

    /**
     * 验证表单 --- 邮箱  false不是
     * @param val
     * @returns {boolean}
     */
    Vue.prototype.isEmail = function (val) {
      var myreg=/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
      if (!myreg.test(val)) {
        return false;
      } else {
        return true;
      }
    }

  }
}
