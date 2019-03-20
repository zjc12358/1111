<template>
	<div>
		<div class="top-box">
			<div class="top-box-item selected"  id="check1">今日</div>
			<div class="top-box-item" id="check2">昨日</div>
			<div class="top-box-item"  id="check3">本月</div>
			<div class="top-box-item" id="check4">上月</div>
			<div class="top-box-item" id="check4">自定义</div>
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
				<div class="switch-button-item selected">支付宝订单</div>
				<div class="switch-button-item" >微信订单</div>
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
		import '../assets/css/new_earnorder.css'
    export default {
        name: "earn"
    }
</script>

<style>

</style>