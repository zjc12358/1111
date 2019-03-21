<template>
  <div v-if="modalShow== true">
    <div class="modal_mask">
    </div>
    <div @click="modalClose()" class="modal_box">
      <div @click.stop="fnn" class="modal_container">
        <div class="modal_title">选择分类</div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      data (){
        return {
          modalShow: this.show
        }
      },
      props: {
        show: Boolean,
      },
      methods: {
        fnn(){

        },
        modalClose() {
          this.modalShow = false
        }
      }
    }
</script>

<style scoped>

</style>
