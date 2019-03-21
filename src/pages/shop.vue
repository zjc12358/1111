<template>
  <div class="centerDiv">
    <div style="font-size: 0.3rem;display: flex;align-items: center">
      <img class="shop_img" src="../assets/call.png" style="width: 0.3rem;height: 0.3rem;">
      <label style="margin-left: 2vw">手机号码</label>
    </div>
    <div>
      <input class="input_group" style="border-bottom: 1px solid rgba(153, 153, 153,0.5);font-size: 3.2vw;" label="" placeholder="请输入手机号" type="text" />
    </div>
    <div style="font-size: 0.3rem;display: flex;align-items: center;margin-top: 6vw">
      <img class="shop_img" src="../assets/call.png" style="width: 0.3rem;height: 0.3rem;">
      <label style="margin-left: 2vw">手机号码</label>
    </div>
    <div>
      <input class="input_group" style="border-bottom: 1px solid rgba(153, 153, 153,0.5);font-size: 3.2vw;" label="" placeholder="请输入手机号" type="text" />
    </div>
    <div class="inputTitle">
      <div>
        <img src="../assets/call.png" style="width: 3.7vw;height: 3.7vw;">
        <label style="font-size: 0.3rem;">验证码</label>
      </div>
    </div>

    <div style="position: relative;">
      <input class="input_group" style="border-bottom: 1px solid rgba(153, 153, 153,0.5);font-size: 3.2vw;width: 50vw;" label="" placeholder="请输入验证码" type="text" />
      <mt-button @click="getNum(sendTime)" type="primary" class="getNum" :disabled="getNumBtnDis">{{ getNumMsg }}</mt-button>
    </div>
  </div>
</template>

<script>
    export default {
      name: "shop",
      data(){
        return {
          getNumBtnDis: false,
          sendTime: 60,
          getNumMsg: '获取验证码',
        }
      },
      created() {
        console.log('我是店铺')
      },
      methods:{
        getNum(i){
          if (i == 0) {
            this.getNumBtnDis = false
            this.sendTime = 60
            this.getNumMsg = '获取验证码'
          } else {
            this.getNumBtnDis = true
            this.sendTime -= 1
            this.getNumMsg = this.sendTime + 'S后重新发送'
            setTimeout(()=>{
              this.getNum(this.sendTime)
            },1000)
          }
        }
      }
    }
</script>

<style scoped>
  .getNum{
    background: #1bbf8d;
    font-size: 3.2vw;
    min-width: 100px;
    width: 30vw;
    height: 10vw;
    border-radius: 2vw;
    position: absolute;
    right: 0;
    top: 0vw;
  }
  .input_group{
    height: 10vw;
    font-size: 3.2vw;
    display: block;
    border: 0;
    outline: none;
    height: 11vw;
    width: 100%;
  }
  .inputTitle{
    display: flex;
    align-items: flex-end;
    height: 10vw;
  }
  .inputTitle>div>{
    display: flex;
    align-items: center;
    height: 10vw;
  }
  .inputTitle>div>img{
    width: 3.7vw;
    height: 3.7vw;
    margin-right: 2vw;
  }
</style>
