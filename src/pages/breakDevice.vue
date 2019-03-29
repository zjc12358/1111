<template>
  <div class="myDevice-container">
    <div class="equipmentList">
      <div class="equipmentItem" v-for="item in equipmentList" :key="index">
        <label type="primary" class="lay" >故障中</label>
        <div>
          <div>
            <img :src="item.point_img" alt="">
          </div>
          <div>
            <div>编号:<span>{{ item.dev_num }}</span></div>
            <div>类型:<span>{{ item.type_name }}</span></div>
            <div class="cargoQuantity">货量:<span style="flex: 1">{{ item.papernum }}/{{item.maxcount}}</span>

            </div>
            <div class="address">地址:<span>{{ item.dev_addr }}</span></div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "MyDevice",
    data(){
      return {
        // tabs: this.$store.state.tabs,
        equipmentList: []
      }
    },
    created() {
      //  网络请求.
      let config = {
        headers: {
          'Authorization': this.$store.state.token
        }
      }
      let data = new FormData();
      this.$axios.post('/api/device/getFaultDevice.do',data,config)
        .then(res => {
          console.log(res)
          if ( res.data.code === '200' ){
            this.equipmentList = res.data.data
          }
        }).catch(res=>{
        console.log(res)
      })


    },
    mounted() {

    },
    methods:{
      goToPage (path) {
        this.$router.push(path)
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
    right: 2vw;
    border-radius: 2vw;
    color: #cc4f4f;

  }
  .getTheEquipmentBtn{
    width: 100vw;
    height: 13.3vw;
    font-size: 5.3vw;
  }

</style>
