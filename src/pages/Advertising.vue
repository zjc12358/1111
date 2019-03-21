<template>
  <div>
    <!--Advertising-->
    <!--{{ selected }}-->
    <div @click.stop="fn">djsafkldsjfalsd</div>
    <div v-if="modalShow== true">
      <div class="modal_mask">
      </div>
      <div @click="modalClose()" class="modal_box">
        <div @click.stop="fnn" class="modal_container">
          <div class="modal_title">选择分类</div>
        </div>
      </div>
    </div>
    <tabbar :selected="selected" :tabs='tabs'></tabbar>
  </div>
</template>

<script>
    import tabbar from "../components/tabbar";
    import modal from "../components/modal"
    export default {
      name: "Advertising",
      components: {
        tabbar
      },
      data(){
        return {
          selected: "GroupList",
          tabs: this.$store.state.tabs,
          modalShow: false
        }
      },
      created () {
        console.log()
      },
      mounted() {
        console.log(1221);
      },
      methods: {
        fn(){
          this.modalShow = true
        },
        fnn(){

        },
        modalClose() {
          this.modalShow = false
        }
      }
    }
</script>

<style scoped>
  .modal_mask{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 9999;
    background: black;
    opacity: 0.6;
  }
  .modal_box{
    position: fixed;
    top: 0;
    z-index: 10000;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .modal_container{
    background: white;
    width: 90%;
    border-radius: 5px;
    font-size: 4.2vw;
    min-height: 300px;
  }
  .modal_title{
    font-weight: bold;
    padding: 3vw;
  }
</style>
