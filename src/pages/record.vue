<template>
    <div>
    <mt-header fixed class="tabPage" style="" title="提现记录">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>

     <div style="height: 10.6vw;"></div>
 <div class="TopOne" style="">
        <div>
          <span style="font-size: 0.24rem;">
            2019年3月
          </span>
          <label style="font-size: 0.24rem;margin-left: 0.5rem">总计:
            <span style="font-size: 0.4rem;">26945.36</span>
          </label>
        </div>
        <div>
          <span style="font-size: 0.24rem;">看本周</span>
        </div>
      </div>
  <div class="mui-content" style="margin-top: 1.3rem;">
        <ul class="mui-table-view-list" style="margin-top: -1rem" >
          <li class="mui-table-view-cell" v-for="item in recordList">
            <div class="oneList">
              <div class="left_title">{{item.dateTime}}</div>
              <div class="right-num">{{item.money}}</div>
            </div>
          </li>
        </ul>
      </div>

    </div>
</template>

<script>
    export default {
        name: "record",
        data () {
          return {
            selected: "MainPage",
            recordList: [
              {dateTime: '11日-星期一  09:06' ,money:'18644.00'},
              {dateTime: '11日-星期一  09:06' ,money:'22'},
              {dateTime: '11日-星期一  09:06' ,money:'33'},
            ]
          }
        },
    }
</script>

<style scoped>
.tabPage{
  background-color: #f7f7f7;
  color: black;
  background: white;
  height: 10.6vw;
  font-size: 3.7vw;
}

  .mui-table-view-list{
    background: #FFFFFF;
    padding-right: 0.4rem;
  }
  .left_title{
    font-size: 0.24rem;
    color: #666666;
  }
  .right-num{
    font-size: 0.28rem;
    color: #333333;
  }
 .oneList{
   text-align: center;
   display: flex;
   justify-content: space-between;
   margin: 0.2rem 0rem 0 0.35rem;
   border-bottom: 1px solid #dedada;
   line-height: 0.6rem;
 }
  .TopOne{
    display: flex;
    justify-content: space-between;
    margin: 0rem 0.35rem 0 0.35rem;
  }

</style>
