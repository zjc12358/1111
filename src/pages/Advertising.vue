<template>
  <div>
    <!--Advertising-->
    <!--{{ selected }}-->
    <div>
      <div class="modal_mask">
      </div>
      <div class="modal_container">
        <div class="modal_title">选择分类</div>
      </div>
    </div>
    <mt-button @click="fn" size="large">点击上拉 action sheet</mt-button>
    <tabbar :selected="selected" :tabs='tabs'></tabbar>
  </div>
</template>

<script>
    import tabbar from "../components/tabbar";

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
          this.modalShow = !this.modalShow
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
  .modal_container{
    background: white;
    position: relative;
    z-index: 10000;
    border-radius: 10px;
    font-size: 4.2vw;
    min-height: 100px;
  }
  .modal_title{

  }
</style>
