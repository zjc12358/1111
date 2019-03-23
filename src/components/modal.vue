<template>
  <div v-if="modalShow== true">
    <div class="modal_mask">
    </div>
    <div class="modal_box">
      <div @click.stop="fnn" class="modal_container">
        <div class="modal_title">选择分类</div>
        <div class="modal_content">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      data (){
        return {
          modalShow: false
        }
      },
      mounted(){
        this.$on('modalOpen',()=>{
          this.modalOpen();
        })
        this.$on('modalClose',()=>{
          this.modalClose();
        })
      },
      methods: {
        fnn(){

        },
        modalClose() {
          this.modalShow = false
        },
        modalOpen(){
          console.log(212112)
          this.modalShow = true
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
    left: 0;
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
  .modal_content{
    padding: 3vw;
  }
</style>
