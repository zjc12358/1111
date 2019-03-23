<template>
    <div>
      <div class="top-box">
        <div class="top-box-item selected"  id="check1">全部</div>
        <div class="top-box-item"  id="check3">审核中</div>
        <div class="top-box-item" id="check4">通过</div>
        <div class="top-box-item" id="check4">未通过</div>
      </div>
      <div class="selectDiv">
        <input type="text" class="select-condition" placeholder="请输入姓名/手机号/店铺名"></input>
        <button class="selectBtn">搜索</button>
      </div>
      <div class="switch-box">
        <div class="switch-button-item selected">代理商</div>
        <div class="switch-button-item">店铺</div>
      </div>

      <div class="plate-list"  v-for="item in funList">
        <div>
          <div class="people_photo">
            <img class="head_img" :src="item.img">
          </div>
          <div class="shop_detailall">
            <div class="shop_list">
              <div class="shop-dj">{{item.shop}}</div>
              <div class="shop_name">{{item.shop_name}}</div>
              <div class="shopUser">{{item.shopUser}}</div>
              <div class="contact-phone">{{item.contact}}</div>
            </div>
          </div>
          <div style="padding-top: 0.2rem;">
            <!--<span class="nopass">未通过</span>
            <span class="update_shop">修改</span>-->
            <span class="nopass" v-if="item.status==3">审核中</span>
            <span class="nopass" v-if="item.status==2">未通过</span>
            <span class="nopass" v-if="item.status==1">通过</span>
            <span class="update_shop" v-if="item.status==1||item.status==2">修改</span>
          </div>
        </div>
      </div>
    <!--  <div class="plate-list">
        <div>
          <div class="people_photo">
            <img class="head_img" src="img/1.jpg">
          </div>
          <div class="shop_detailall">
            <div class="shop_list">
              <div class="shop-dj">店铺</div>
              <div class="shop_name">沙县小吃</div>
              <div class="shopUser">叶子</div>
              <div class="contact-phone">18845555555</div>
            </div>

          </div>
          <div style="padding-top: 0.2rem;">
            <span class="nopass">通过</span>
            <span class="update_shop">修改</span>
          </div>
        </div>
      </div>-->

 <!--     <div class="plate-list">
        <div>
          <div class="people_photo">
            <img class="head_img" src="img/1.jpg">
          </div>
          <div class="shop_detailall">
            <div class="shop_list">
              <div class="shop-dj">店铺</div>
              <div class="shop_name">沙县小吃</div>
              <div class="shopUser">叶子</div>
              <div class="contact-phone">18845555555</div>
            </div>
          </div>
          <div style="padding-top: 0.2rem;">
            <span class="nopass">审核中</span>
          </div>
        </div>
      </div>-->

    </div>
</template>

<script>
    export default {
        name: "MyTeam",
      data () {
        return {
          selected: "MainPage",
          tabs: this.$store.state.tabs,
          funList: [
            { img: require('../assets/myteamImg.png'), shop: '代理' ,shop_name:'沙县小吃',shopUser:'叶子',contact:'18845555555',status:'2'},
            { img: require('../assets/myteamImg.png'), shop: '店铺' ,shop_name:'沙县小吃',shopUser:'叶子',contact:'18845555555',status:'2'},
            { img: require('../assets/myteamImg.png'), shop: '店铺' ,shop_name:'沙县小吃',shopUser:'叶子',contact:'18845555555',status:'3'},
            { img: require('../assets/myteamImg.png'), shop: '店铺' ,shop_name:'沙县小吃',shopUser:'叶子',contact:'18845555555',status:'1'},
          ]
        }
      },
    }
</script>

<style scoped>
  @import '../assets/css/mui.min.css';
  @import '../assets/css/MyTeam.css';

</style>
