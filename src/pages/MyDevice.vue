<template>
  <div class="myDevice-container">
    <div class="equipmentList">
      <div class="equipmentItem" v-for="(item,key) in equipmentList" >
        <label type="primary" class="lay" @click="getDevnum($event,key)" >设备铺设</label>
        <div>
          <div>
            <img :src="item.point_img" alt="">
          </div>
          <div>
            <div>编号:<span id="dev_num">{{ item.dev_num }}</span></div>
            <div>类型:<span id="type_name">{{ item.type_name }}</span></div>
            <div class="cargoQuantity">货量:<span style="flex: 1">{{ item.papernum }}/{{item.maxcount}}</span>
              <!-- <div>
                 信号:<span>{{ item.signal }}</span>
               </div>-->
            </div>
            <div class="address">地址:<span>{{ item.dev_addr }}</span></div>
          </div>
        </div>
      </div>
    </div>
    <!--  <div class="getTheEquipment">
        <mt-button type="primary" class="getTheEquipmentBtn">扫描二维码领取设备</mt-button>
      </div>-->
  </div>
</template>

<script>

  export default {
    name: "MyDevice",
    data() {
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
      this.$axios.post(process.env.API_HOST+'/device/selectall.do', data, config)
        .then(res => {
          console.log(res)
          if (res.data.code === '200') {
            this.equipmentList = res.data.data
          }
        }).catch(res => {
        console.log(res)
      })


    },
    mounted() {

    },
    methods: {
      goToPage(path) {
        this.$router.push(path)
      },
      getDevnum:function(e,k) {
        let dev_num=this.equipmentList[k].dev_num;
        let type_name=this.equipmentList[k].type_name;
        console.log(this.equipmentList[k].type_name);
       // return;
        /* console.log(e.target.innerHTML)*/
        console.log(dev_num)
        //this.$router.push('/devicePave'+dev_num);
        this.$router.push({
          path: '/devicePave',
          query: {
            dev_num: dev_num,
            type_name: type_name,
            //  agency_id:agency_id,
          }
        })

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
    width: 22vw;
    height: 22vw;
    border-radius: 22vw;
    margin-left: 0.2rem;
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
