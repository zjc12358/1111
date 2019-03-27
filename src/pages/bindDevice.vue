<template>
  <div>
    <div class="app-container">
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
          <div id="claimPage"  style="margin-top: -0.2rem;" v-on:click="showModel()">
            <img src="../assets/img/unbind.png" class="claimclickImg" />
            <div class="unbind" >解除绑定</div>
          </div>
        </div>
      </footer>
      <!--解除绑定弹框-->
      <div class="allModal" style="display: none" >
        <div class="modal_show"></div>
        <!--1弹框-->
        <div class="unbindDiv" style="">
          <div class="unbind_content" v-on:click="sureModel()">解除绑定</div>
          <div class="concel_unbind" v-on:click="closeModel()">取消</div>
        </div>
        <!--确认弹框-->
        <div class="sureUnbind" style="display: none"  >
          <img src="../assets/img/pop_up.png" style="width: 4.5rem;" />
          <div style="text-align: center;">
            <div style="position: relative;top: -2.2rem;font-size: 0.36rem;">审核后，绑定将解除</div>
            <div style="position: relative;top: -1.9rem;color: #999999;font-size: 0.24rem;">
              审核将在1~2个工作日内完成
            </div>
            <button class="sureBt" v-on:click="closeModel()">确定</button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "bindDevice",
    data() {
      return {
        selected: "MainPage",
        show: false,   // 是否显示模态框require('../assets/myteamImg.png')

      }
    },
    methods: {
      closeModel: function () {
        $(".allModal").hide();
      },
      showModel: function () {
        $(".allModal").show();
        $(".sureUnbind").hide();
      },
      sureModel: function () {
        $(".allModal").show();
        $(".sureUnbind").show();
        $(".unbindDiv").hide();
      },
    }
  }
</script>

<style scoped>
  @import '../assets/css/mui.min.css';
  @import '../assets/css/bindDevice.css';

  .app-container{
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    /*overflow: hidden;*/

  }
</style>
