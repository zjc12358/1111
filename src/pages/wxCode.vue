<!--&lt;!&ndash;-->
<!--<template>-->
 <!--<div>-->
   <!--<div class="login_div">-->
     <!--<mt-button id="wxsys" type="primary" v-on:click="sys_click()">{{qsa}}</mt-button>-->
   <!--</div>-->
 <!--</div>-->
<!--</template>-->
<!--<script>-->

<!--import wx from 'weixin-js-sdk'-->
<!--import  '../assets/js/jquery-3.3.1.min'-->
 <!--/*import $ from 'jquery'*/-->
  <!--export default {-->
    <!--data() {-->
      <!--return {-->
        <!--qsa: 'qwe'-->
      <!--}-->
    <!--},-->
    <!--methods: {-->
      <!--sys_click: function () {-->
        <!--this.qsa = 'qqq'-->
        <!--let config = {-->
          <!--headers: {-->
            <!--'Authorization': this.$store.state.token-->
          <!--}-->
        <!--}-->
        <!--let data = new FormData();-->
        <!--this.$axios.post('//device/receiveDevice.do',data,config)-->
       <!--/* this.$axios({-->
          <!--method: 'post',-->
          <!--url: '//device/receiveDevice.do ',//自己填写请求地址-->

        <!--})*/-->
       <!--.then((res) => {-->
          <!--// 认证-->
          <!--wx.config({-->
            <!--debug: true, // 开启调试模式,-->
            <!--appId: res.appId, // 必填，企业号的唯一标识，此处填写企业号corpid-->
            <!--timestamp: res.timestamp, // 必填，生成签名的时间戳-->
            <!--nonceStr: res.nonceStr, // 必填，生成签名的随机串-->
            <!--signature: res.signature,// 必填，签名，见附录1-->
            <!--jsList: ['scanQRCode', 'checkJs'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2-->
          <!--});-->
        <!--})-->

        <!--// 错误时-->
        <!--wx.error(function (res) {-->
          <!--alert("出错了：" + res.errMsg);//这个地方的好处就是wx.config配置错误，会弹出窗口哪里错误，然后根据微信文档查询即可。-->
        <!--});-->

        <!--// 成功时-->
        <!--wx.ready(function () {-->
          <!--wx.checkJs({-->
            <!--jsList: ['scanQRCode'],-->
            <!--success: function (res) {-->

            <!--}-->
          <!--});-->


          <!--wx.scanQRCode({-->
            <!--needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，-->
            <!--scanType: ["qrCode"], // 可以指定扫二维码还是一维码，默认二者都有-->
            <!--success: function (res) {-->
              <!--var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果-->
              <!--alert("扫描结果：" + result);-->
              <!--window.location.href = result;//因为我这边是扫描后有个链接，然后跳转到该页面-->
            <!--}-->
          <!--});-->

        <!--});-->
      <!--}-->

    <!--},-->
    <!--created() {-->

    <!--},-->
    <!--mounted() {-->


    <!--}-->
  <!--}-->
<!--</script>-->
<!--&ndash;&gt;-->
