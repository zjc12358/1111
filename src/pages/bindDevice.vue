<template>
    <div>
      <div style="position: relative;">
        <div class="yuan"></div>
        <div class="firstlogin_t">
          <div style="float: left;">
            <img src="../assets/img/paveImg.png" style="width: 1.6rem;" />
          </div>
          <div class="device_unbind">
            <div class="pavetext">纽约客</div>
            <div class="pavetext1">已绑定：3台</div>
            <div class="pavetext2">江苏省南京市武义区东鹏北路226号</div>
          </div>
        </div>
      </div>
      <div id="goodsList" class="mui-tab-icon">
        <div class="tab_list">
          <img src="../assets/img/33.png" class="checkImg" />
          <div style="text-align: center;">
            <img src="login/zjj.png" class="deviceImg" />
          </div>
          <div class="device_detail">
            <label class="listgn_title">挂式纸巾机</label>
            <label class="listgn_num">No.A021533659874216</label>
          </div>
        </div>
        <div class="tab_list">
          <img src="../assets/img/33.png" class="checkImg" />
          <div style="text-align: center;">
            <img src="login/zjj.png" class="deviceImg" id="deviceImg" />

          </div>
          <div class="device_detail">
            <label class="listgn_title">挂式纸巾机</label>
            <label class="listgn_num">No.A021533659874216</label>
          </div>
        </div>

      </div>

   <footer class="footer">
        <div style="text-align: center;">
          <div id="claimPage" onclick="unbindDv();" style="margin-top: -0.2rem;">
            <img src="../assets/img/unbind.png" class="claimclickImg" />
            <div class="unbind">解除绑定</div>
          </div>
        </div>
      </footer>
    </div>
</template>

<script>
    export default {
        name: "bindDevice"
    }
</script>

<style scoped>
  @import '../assets/css/mui.min.css';
  @import '../assets/css/bindDevice.css';
</style>
