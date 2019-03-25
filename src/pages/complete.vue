<template>
    <div>
      <div style="text-align: center;margin-top: 0.98rem;">
        <p class="com_wb">提交完成!</p>
        <p class="com_bz">资料将在2个工作日内审核完成</p>
      </div>

      <div class="tpDiv">
        <img src="../assets/img/tpF.png" class="tpF" />

      </div>

      <div style="text-align: center;margin-top:0.79rem;">
        <img src="../assets/img/ewm1.jpg" class="ewmimg" />
        <img src="../assets/img/finger.png" class="finger" />
        <p class="ewmsm">长按识别二维码，加客服
          微信，了解详情。</p>
      </div>
      <div style="text-align: center;">
        <button class="agingop"> 再开一个</button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "complete"
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
    top: -0.3rem;
    width: 2.96rem;
    height: 0.54rem;
    left: 2.3rem;

    color: #333333;
    font-size: 0.28rem;
  }
</style>
