<template>
    <div>
      <mt-header fixed style="color: black;background: white;height: 10.6vw;font-size: 3.7vw" title="开设账户">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <div style="text-align: center;margin-top: 0.98rem;">
        <p class="com_wb">提交完成!</p>
        <p class="com_bz">资料将在2个工作日内审核完成</p>
      </div>

      <div class="tpDiv">
        <img src="../assets/img/tpF.png" class="tpF" />

      </div>

      <div style="text-align: center;margin-top:0.79rem;">
        <img src="../assets/img/ewm1.png" class="ewmimg" />
        <img src="../assets/img/finger.png" class="finger" />
        <p class="ewmsm">长按识别二维码，加客服
          微信，了解详情。</p>
      </div>
      <div style="text-align: center;">
        <button @click="back" class="agingop"> 再开一个</button>
      </div>
    </div>
</template>

<script>
  export default {
    name: "complete",
    methods:{
      // 返回开设账户
      back(){
        this.$router.push('./agency')
      }
    }
  }
</script>

<style scoped>
  .com_wb {
    color: #333333;
    font-size: 0.64rem;
  }

  .com_bz {
    position: relative;
    color: #666666;
    font-size: 0.24rem;
  }

  .tpF {
    width: 4.88rem;
  }

  .tpDiv {
    text-align: center;
    margin-top: 0.43rem;
  }

  .finger,
  .ewmimg {
    width: 0.98rem;
  }

  .agingop {
    width: 4.8rem;
    height: 0.86rem;
    background-color: #1cb969;
    box-shadow: 0 0.08rem 0.3rem 0 rgba(2, 100, 32, 0.3);
    border-radius: 0.1rem;
    border: 0;
    color: #FFFFFF;
    font-size: 0.4rem;
    letter-spacing: 0.02rem;
  }
  .ewmsm{
    position: relative;
    top: -0.2rem;
    width: 2.96rem;
    height: 0.54rem;
    left: 2.3rem;
    color: #333333;
    font-size: 0.28rem;
  }
</style>
