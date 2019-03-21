<template>
  <div>
    <div class="switch-box">
      <div class="switch-button-item selected">代理</div>
      <div class="switch-button-item">店铺</div>
    </div>
    <div class="inputMsg">

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
  .inputMsg {
    height: 5rem;
    background: #FFFFFF;
    border-radius: 0.1rem;
    margin: 2.23rem 0.22rem 0 0.22rem;
    padding: 1.25rem 0.25rem 1.5rem 0.25rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    line-height: 0.6rem;
  }
  .input_phone {
    color: #333333;
    width: 5rem;
    margin-top: 0.2rem;
    font-size: 0.2rem;
    border: 0;
  }
  .phoneImg {
    width: 0.3rem;
  }
  .switch-box {
    padding: 0 0.22rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin-top: 0.35rem;
  }
  .switch-box .switch-button-item {
    background-color: #ffffff;
    box-shadow: 0 0.04rem 0.07rem 0.01rem rgba(0, 0, 0, 0.12);
    border-radius: 0 0.1rem 0.1rem 0;
    width: 50%;
    color: #666666;
    text-align: center;
    height: 0.8rem;
    line-height: 0.8rem;
    font-size: 0.25rem;
  }

  .switch-box .switch-button-item.selected {
    background-color: #1bbf8e;
    box-shadow: 0 0.04rem 0.07rem 0.01rem rgba(27, 191, 142, 0.34);
    color: #FFF;
  }

</style>
