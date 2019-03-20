<template>
    <div class="myDevice-container">
      <div class="equipmentList">
        <div class="equipmentItem" v-for="item in equipmentList">
          <mt-button type="primary" class="lay">设备铺设</mt-button>
          <div>
            <div>
              <img :src="item.img" alt="">
            </div>
            <div>
              <div>编号:<span>{{ item.number }}</span></div>
              <div class="cargoQuantity">货量:<span style="flex: 1">{{ item.cargoQuantity }}</span><div>信号: <span>{{ item.signal }}</span></div></div>
              <div class="address">地址:<span>{{ item.address }}</span></div>
            </div>
          </div>
        </div>
      </div>
      <div class="getTheEquipment">
        <mt-button type="primary" class="getTheEquipmentBtn">扫描二维码领取设备</mt-button>
      </div>
    </div>
</template>

<script>
    export default {
      name: "MyDevice",
      data(){
        return {
          equipmentList: [
            {
              img: '12211212.png',
              number: 'DIXEIC',
              cargoQuantity: "0包/120包",
              address: '浙江省金华市永康市东城街道三马路28号',
              signal: '0'
            },
            {
              img: '12211212.png',
              number: 'DIXEIC',
              cargoQuantity: "0包/120包",
              address: '浙江省金华市永康市东城街道三马路28号',
              signal: '0'
            }
          ]
        }
      }
    }
</script>

<style scoped>
  .myDevice-container{
    height: 100vh;
    background: #efeff4;
  }
  .getTheEquipment{
    position: fixed;
    bottom: 0;
  }
  .equipmentItem{
    padding: 2vw 2vw 0 2vw;
    position: relative;
  }
  .equipmentItem>div{
    width: 96vw;
    height: 33.3vw;
    background: #ffffff;
    border-radius: 1.5vw;
    box-shadow: 0 1vw 0.8vw 0 rgba(50, 50, 50, 0.2);
    font-size: 3.7vw;
    display: flex;
    align-items: center;
    color: #aaaaaa;
  }
  .equipmentItem>div>div:nth-child(1){
    width: 26.6vw;
    height: 26.6vw;
    overflow: hidden;
  }
  .equipmentItem>div>div:nth-child(2){
    height: 26.6vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 58vw;
  }
  .equipmentItem>div>div:nth-child(2)>div>span{
    color: #666666;
  }
  .equipmentItem>div>div:nth-child(2)>div>div>span{
    color: #e41b3e;
  }
  .equipmentItem>div>div:nth-child(1)>img{
    width: 26.6vw;
  }
  .address{
    width: 100%;
    line-height:6vw;
    word-break:break-all;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
    overflow:hidden;
  }
  .cargoQuantity{
    display: flex;
  }
  .cargoQuantity>div{
    color: #1e9fff;
  }
  .lay{
    width: 21.8vw;
    height: 7.2vw;
    font-size: 3.7vw;
    position: absolute;
    top: 5vw;
    right: 5vw;
    border-radius: 2vw;
  }
  .getTheEquipmentBtn{
    width: 100vw;
    height: 13.3vw;
    font-size: 5.3vw;
  }
</style>
