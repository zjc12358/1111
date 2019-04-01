<template>
    <div class="myTeam-container">
      <div class="top-box">
        <div @click="changetopSelected(1)" :class="'top-box-item ' + (topSelected ==1 ? 'selected': null)"  id="check1">全部</div>
        <div @click="changetopSelected(2)" :class="'top-box-item ' + (topSelected ==2 ? 'selected': null)"  id="check3">审核中</div>
        <div @click="changetopSelected(3)" :class="'top-box-item ' + (topSelected ==3 ? 'selected': null)" id="check4">通过</div>
        <div @click="changetopSelected(4)" :class="'top-box-item ' + (topSelected ==4 ? 'selected': null)" id="check4">未通过</div>
      </div>
      <div class="selectDiv">
        <img style="width: 5vw;height: 5vw;margin: 0 2vw" src="../assets/img/search.png" alt="">
        <input type="text" class="select-condition" placeholder="请输入姓名/手机号/店铺名"></input>
        <button class="selectBtn">搜索</button>
      </div>
      <div style="margin-top: 5vw" class="switch-box">
        <div @click="changetopSelected2(1)" :class="'switch-button-item ' + (topSelected2 ==1 ? 'selected': null)">代理商</div>
        <div @click="changetopSelected2(2)" :class="'switch-button-item ' + (topSelected2 ==2 ? 'selected': null)">店铺</div>
      </div>
      <div style="font-size: 3.7vw;text-align: center" v-if="(topSelected2== 1 ? daili : shop).length===0">暂无数据</div>
      <div class="plate-list"  v-for="item in (topSelected2== 1 ? daili : shop)">
        <div style="overflow: hidden;display: flex">
          <div class="people_photo">
            <img class="head_img" src="../assets/img/timg.jpg">
          </div>
          <div class="shop_detailall">
            <div class="shop_list">
              <div class="shop-dj">{{item.shop}}</div>
              <div class="shop_name">{{item.shop_name}}</div>
              <div class="shopUser">{{item.ag_name}}</div>
              <div class="contact-phone">{{item.ag_mobile}}</div>
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

    </div>
</template>

<script>
    export default {
      name: "MyTeam",
      data () {
        return {
          daili: [],
          shop: [],
          topSelected: 1,
          topSelected2: 1,
          selected: "MainPage",
          tabs: this.$store.state.tabs,
          funList: [

          ]
        }
      },
      created() {
        if(this.$route.params.id) this.topSelected2=this.$route.params.id
        this.$axios.get(process.env.API_HOST+'/agency/getAgencyTeam.lxkj',
          {
            headers: {
              'Authorization': this.$store.state.token
            }
          }
        )
          .then(res => {
            if ( res.data.code === '200' ){
              res.data.data.map(item => {
                switch (item.ag_role) {
                  case '2':
                    // 代理
                    this.daili.push(item)
                    break;
                  case '22':
                    // 店铺
                    this.shop.push(item)
                    break;
                }

              })
              console.log(res)
            }
          }).catch(res=>{
          console.log(res)
        })
      },
      methods:{
        changetopSelected(n){
          this.topSelected = n
        },
        changetopSelected2(n){
          this.topSelected2 = n
        }
      }
    }
</script>

<style scoped>
  @import '../assets/css/mui.min.css';
  @import '../assets/css/MyTeam.css';
  .top-box{
    justify-content: space-around;
  }
  .myTeam-container{
    height: 100vh;
    overflow: auto;
    background: #efeff4;
  }
  .select-condition{
    border: 0!important;
    outline: none!important;
    padding: 0!important;
    margin: 0!important;
    height: 10vw;
    width: 100%!important;
  }
  .selectDiv{
    background: white;
    align-items: center;
  }
</style>
