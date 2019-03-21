<template>
    <div>
      <div class="firstlogin_t">
        <p class="pavetext" style="color: black;">设备铺设</p>
        <p class="pavetext1">壁挂式纸巾机 A03365322168856</p>
      </div>
      <div class="yuan"></div>


      <div class="inputMg">
        <input type="text" class="inputlxr" placeholder="联系人" />
        <input type="text" class="inputPhone" placeholder="联系电话" />
        <input type="text" class="inputShopname" placeholder="店铺名称" />
        <textarea type="text" class="inputAdress"  placeholder="铺设地址"></textarea>

      </div>

      <div style="text-align: center;margin-top:0.7rem;">
        <button class="sureBt">确认</button>
      </div>
    </div>
</template>

<script>
  import '../untils/rem.js'
    export default {
        name: "devicePave"
    }
</script>

<style scoped>
  html,
  body {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    overflow: hidden;
    overflow-y: auto;
  }
  .yuan {
    position: relative;
    top: -2.4rem;
    left: 5.4rem;
    width: 4rem;
    height: 4rem;
    background-color: #1cb969;
    border-radius: 4rem;
    border: 0.4rem solid #a4e6c5;
  }

  .sureBt {
    font-size: 0.44rem;
    width: 6.1rem;
    height: 1rem;
    background-color: #1cb969;
    border-radius: 0.51rem;
    color: #ffffff;
    letter-spacing: 0.22rem;
    border: 0;
  }

  .inputMg {
    text-align: center;
    margin-top: -1.8rem;
  }

  .firstlogin_t {
    position: absolute;
    top: 0.85rem;
    left: 0.8rem;
    font-family: PingFangSC-Semibold;
    color: #333333;
    font-size: 0.64rem;
  }

  .pavetext {
    color: #333333;
    font-size: 0.6rem;
  }

  .pavetext1 {
    color: #999999;
    font-size: 0.26rem;
    margin-top: 0.2rem;
  }
  input.inputlxr {
    width: 6.1rem;
    padding-left: 1rem;
    background: url(../assets/img/lxrno.png) no-repeat;
    background-position: 0.3rem;
    background-size: 0.4rem;
    height: 1rem;
    border-radius: 0.5rem;
    background-color: #f1f4f5;
    border: 0;
  }

/*  input.inputlxr.selected {
    background: url(../assets/img/lxrno1.png) no-repeat;
    background-position: 0.3rem;
    background-size: 0.4rem;
    background-color: #f1f4f5;
  }*/

  input.inputPhone {
    width: 6.1rem;
    padding-left: 1rem;
    background: url(../assets/img/phoneno.png) no-repeat;
    background-position: 0.3rem;
    background-size: 0.4rem;
    height: 1rem;
    border-radius: 0.5rem;
    background-color: #f1f4f5;
    border: 0;
  }

/*  input.inputPhone.selected {
    background: url(../assets/img/phoneno1.png) no-repeat;
    background-position: 0.3rem;
    background-size: 0.4rem;
    background-color: #f1f4f5;
  }*/

  input.inputShopname {
    width: 6.1rem;
    padding-left: 1rem;
    background: url(../assets/img/shopname.png) no-repeat;
    background-position: 0.3rem;
    background-size: 0.4rem;
    height: 1rem;
    border-radius: 0.5rem;
    background-color: #f1f4f5;
    border: 0;
  }

/*  input.inputShopname.selected {
    background: url(../assets/img/hopname1.png) no-repeat;
    background-position: 0.3rem;
    background-size: 0.4rem;
    background-color: #f1f4f5;
  }*/

  input.inputShopname {
    width: 6.1rem;
    padding-left: 1rem;
    background: url(../assets/img/shopname.png) no-repeat;
    background-position: 0.3rem;
    background-size: 0.4rem;
    height: 1rem;
    border-radius: 0.5rem;
    background-color: #f1f4f5;
    border: 0;
  }

/*  input.inputShopname.selected {
    background: url(../assets/img/shopname1.png) no-repeat;
    background-position: 0.3rem;
    background-size: 0.4rem;
    background-color: #f1f4f5;
  }*/

  textarea.inputAdress {
    width: 6.1rem;
    padding-left: 1rem;
    margin-top: 0.3rem;
    background: url(../assets/img/adress.png) no-repeat;
    background-position: 0.3rem 0.1rem;
    background-size: 0.5rem;
    height: 2.3rem;
    border-radius: 0.5rem;
    background-color: #f1f4f5;
    border: 0;
    padding-top: 0.2rem;
  }

/*  textarea.inputAdress.selected {
    background: url(../assets/img/adress1.png) no-repeat;
    background-position: 0.3rem 0.1rem;
    background-size: 0.4rem;
    background-color: #f1f4f5;
  }*/
</style>
