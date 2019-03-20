<template>
    <div class="withdrawDeposit-container">
      <div class="top">
        <img src="../assets/balancebg.png" class="balance_bg">
      </div>
      <div class="remainder">
        <div>
          <p class="yuetext">余额</p>
          <p class="yue_num">8.00</p>
        </div>
        <div>
          <!--<button style="color: white; background-image: linear-gradient(-44deg, #4db1f7 0%, #4dcfff 100%), linear-gradient(#ffffff, #ffffff);" class="Totixian" onclick="tixian();">申请提现-->
          <!--</button>-->
          <mt-button type="primary" class="applyBtn">申请提现</mt-button>
        </div>
        <div class="content_top">
          <div style="width: 50%; border-right: solid 1px #FFFFFF;">
            <p class="tixian_title">可提现</p>
            <p class="tixian_num">2.0</p>
          </div>
          <div style="width: 50%; border-right: solid 1px #FFFFFF;">
            <p class="comp_title">已结算</p>
            <p class="comp_num">0.00</p>
          </div>
          <div style="width: 50%;">
            <p class="re_title">待结算</p>
            <p class="re_num">6.00</p>
          </div>
        </div>
      </div>
      <div class="remainder1">
        <div class="fistCell">
          <mt-cell title="滞留资金: 0.0">
            <mt-button size="small" type="primary">取回滞留资金</mt-button>
          </mt-cell>
          <mt-cell title="什么是滞留资金？">
          </mt-cell>
        </div>
        <div>
          <mt-cell
            title="已结算订单多久可提现？"
            to="//github.com"
            is-link
            value="查看详情">
            <img slot="icon" src="../assets/what.png" style="width: 20px;height: 20px;">
          </mt-cell>
          <mt-cell
            title="提现记录"
            to="//github.com"
            is-link
            value="查看详情">
            <img slot="icon" src="../assets/record.png" style="width: 20px;height: 20px;">
          </mt-cell>
          <mt-cell
            title="收益流水"
            to="//github.com"
            is-link
            value="查看详情">
            <img slot="icon" src="../assets/earn.png" style="width: 20px;height: 20px;">
          </mt-cell>
        </div>
        <div>
          <mt-cell
            title="支付宝提现">
            <img slot="icon" src="../assets/zfb.png" style="width: 20px;height: 20px;">
          </mt-cell>
          <div class="page-part">
            <mt-field placeholder="请输入支付宝账号"></mt-field>
            <mt-field placeholder="请输入姓名"></mt-field>
          </div>
        </div>
      </div>
      <div style="display: flex;align-items: center;margin-top: 4vw">
        <mt-button type="primary" style="width: 94.6vw;margin: 0 auto">保存账号</mt-button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "WithdrawDeposit"
    }
</script>

<style scoped>
  .withdrawDeposit-container{
    height: 100vh;
    overflow: auto;
    background: #efeff4;
    position: relative;
  }
  .top{
    display: flex;
    justify-content: center;
  }
  .balance_bg{
    width: 94.6vw;
    height: 53.3vw;
    box-shadow: 0px 8px 20px 0px rgba(0, 14, 63, 0.2);
    border-radius: 2vw;
  }
  .remainder{
    height: 53.3vw;
    width: 94.6vw;
    margin: 0 auto;
    position: absolute;
    top: 10vw;
    left: 0;
    right: 0;
    color: white;
  }
  .remainder>div:nth-child(1){
    margin-left: 10vw;

  }
  .remainder>div:nth-child(2){
    position: absolute;
    right: 10vw;
    top: 0;
  }
  .yuetext{
    font-size: 3.7vw;
    opacity: 0.6;
  }
  .yue_num{
    font-size: 7.3vw;
  }
  .content_top{
    display: flex;
    text-align: center;
    padding-top: 7.4vw;
  }
  .content_top>div{
    height: 13.3vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 3.7vw;
  }
  .content_top>div>p:nth-child(1){
    opacity: 0.6;
  }
  .applyBtn{
    font-size: 3.2vw;
    border-radius: 2vw;
    width: 20vw;
    min-width: 75px;
    height: 7vw;
  }
  .remainder1{
    width: 94.6vw;
    margin: 0 auto;
  }
  .remainder1>div{
    border-radius: 2vw;
    background: white;
    margin-top: 4.2vw;
  }
  .remainder1 .fistCell>a{
    border-top: 1px solid #c8c7cc;
  }
  .remainder1 .fistCell>a:nth-child(1){
    border: 0;
  }
  .remainder1>div .mint-cell{
    background: transparent;
  }
  .mint-cell-text{
    font-size: 3.2vw;
  }
</style>
