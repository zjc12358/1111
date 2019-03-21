<template>
  <div>
    <div class="switch-box">
      <div class="switch-button-item selected">支付宝订单</div>
      <div class="switch-button-item">微信订单</div>
    </div>
    <div class="centerDiv">

      <div style="font-size: 0.3rem;">
        <img class="shop_img" src="../assets/call.png" style="width: 0.3rem;height: 0.3rem;">
        <label>手机号码</label>
      </div>
      <div>
        <input type="text" value="" class="input_phone" placeholder="请输入手机号码" />
      </div>
      <div>
        <img class="shop_img" src="../assets/call.png" style="width: 0.3rem;height: 0.3rem;">
        <label style="font-size: 0.3rem;">验证码</label>
      </div>

      <div>
        <input type="text" value="" class="input_code" placeholder="请输入验证码" />
       <button class="getCode" >获取验证码</button>

      </div>
    </div>

    <div style="text-align: center;margin-top: 0.7rem;">
      <button class="completeBt">下一步</button>
    </div>
  </div>
</template>

<script>
  import '../untils/rem.js'
  export default {
    name: "agency",

  }

</script>

<style scoped>
  @import '../assets/css/mui.min.css';
  @import '../assets/css/agency.css';

</style>
