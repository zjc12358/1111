<template>
	<div>
    <div class="top-box">
      <div class="top-box-item selected" id="check1"> 全部</div>
      <div class="top-box-item" id="check2">待确认</div>
      <div class="top-box-item" id="check3">已结算</div>
      <div class="top-box-item" id="check4">失效订单</div>
    </div>
    <div class="choice_text">
      选择时间  <span>></span>
    </div>

    <div class="switch-box">
      <div class="switch-button-item selected">支付宝订单</div>
      <div class="switch-button-item">微信订单</div>
    </div>
    <div class="leijiDiv" style="">
      <div class="item">收单累计(元) <span>0.00</span></div>
      <div class="line"></div>
      <div class="item">激励金累计(元) <span>0.00</span></div>
    </div>
    <div class="plate-list">
      <div class="device_photo">
        <img class="shop_img" src="img/test.png">
        <div class="shop_name">
          <p class="shop_Title" style="">店铺：沙县小吃</p>
          <p class="shop_Title">设备类型：纸巾机</p>
          <p class="shop_Title">设备型号：MJ0001</p>
          <p class="shop_Title">地 址：浙江省XXXXXXX</p>
        </div>
        <div class="re_account">已结算</div>
        <div class="price-text">收单金额：￥1元</div>
      </div>
      <div class="item-bottom-box">
        <div>2019-03-19 14:14:14 创建</div>
        <div>激励金预估收入：<span style="color: #ff0000;">￥0.5元</span></div>
      </div>
    </div>
    <div class="plate-list">
      <div class="device_photo">
        <img class="shop_img" src="img/test.png">
        <div class="shop_name">
          <p class="shop_Title" style="">店铺：沙县小吃</p>
          <p class="shop_Title">设备类型：纸巾机</p>
          <p class="shop_Title">设备型号：MJ0001</p>
          <p class="shop_Title">地 址：浙江省XXXXXXX</p>
        </div>
        <div class="re_account">已结算</div>
        <div class="price-text">收单金额：￥1元</div>
      </div>
      <div class="item-bottom-box">
        <div>2019-03-19 14:14:14 创建</div>
        <div>激励金预估收入：<span style="color: #ff0000;">￥0.5元</span></div>
      </div>
    </div>

	</div>
</template>

<script>
	import '../untils/rem.js'
		import '../assets/css/new_earnorder.css'
    export default {
        name: "earnTime"
    }
</script>

<style scoped>
  .top-box{
    margin-top: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 0.22rem;
    box-sizing: border-box;
  }

  .choice_text {
    color: #666666;
    font-size: 0.2rem;
    position: relative;
    left: 6.1rem;
    line-height: 0.01rem;
  }
</style>
