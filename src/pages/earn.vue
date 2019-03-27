<template>
	<div>
		<div class="top-box">
			<div  id="check1" @click="changeTimeV(1)" :class="'top-box-item ' + (changeTime == 1 ? 'selected' : '')">今日</div>
			<div  id="check2" @click="changeTimeV(2)" :class="'top-box-item ' + (changeTime == 2 ? 'selected' : '')">昨日</div>
			<div  id="check3" @click="changeTimeV(3)" :class="'top-box-item ' + (changeTime == 3 ? 'selected' : '')">本月</div>
			<div  id="check4" @click="changeTimeV(4)" :class="'top-box-item ' + (changeTime == 4 ? 'selected' : '')">上月</div>
			<div  id="check4" @click="changeTimeV(5)" :class="'top-box-item ' + (changeTime == 5 ? 'selected' : '')">自定义</div>
		</div>
			<div class="search-box">
				<div class="search-box-left">
					<input type="date" value=""name="startime" class="startime" />
					<span>至</span>
					<input type="date" value=""  class="endtime" />
				</div>
				<button class="findButton" onclick="getfdTime();">查询</button>
			</div>
		<div class="switch-box">
      <div @click="changeModuleV(1)" :class="'switch-button-item ' + (changeModule == 1 ? 'selected' : '')">支付宝订单</div>
      <div @click="changeModuleV(2)" :class="'switch-button-item ' + (changeModule == 2 ? 'selected' : '')">微信订单</div>
		</div>
			<div class="leijiDiv">
       <!-- <div class="item">
          <div>收单累计(元) </div>
        </div>-->
        <div style="font-size: 0.24rem;margin-left: 0.3rem;margin-right: 0.3rem; display: flex;color: #999999;line-height: 0.8rem;border-bottom: 1px solid #d3d8d6">
          <div>订单统计：</div>
          <div style="margin-left: 0.1rem;">全部(100)</div>
          <div style="margin-left: 0.65rem;">有效激励单(80)</div>
          <div style="margin-left: 0.65rem;">激励单(20)</div>
        </div>
				<div class="item">
          <div>收单累计(元) </div>
          <div> <span >0.00</span></div>
        </div>
				<!--<div class="line"></div>
				<div class="item"> <span>0.00</span></div>-->
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
					<div>2019-03-19  14:14:14   创建</div>
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
					<div>2019-03-19  14:14:14   创建</div>
					<div>激励金预估收入：<span style="color: #ff0000;">￥0.5元</span></div>
			</div>
		</div>

	</div>
</template>

<script>
	import '../untils/rem.js'

    export default {
        name: "earn",
      data(){
        return {
          changeModule: 1, // 1 支付宝订单, 2 微信订单
          changeTime:1,

        }
      },
        methods:{
          fn(n){
            console.log(n)
          },
          goTo(path){
            this.$router.push(path)
          },
          changeModuleV(i){
            this.changeModule = i;
          },
          changeTimeV(i){
            this.changeTime = i;
          },
        }
    }

</script>

<style scoped>
  @import '../assets/css/new_earnorder.css';
</style>
