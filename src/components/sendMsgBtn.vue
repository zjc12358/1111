<template>
  <mt-button @click="callback(sendTime)" type="primary" class="getNum" :disabled="getNumBtnDis">{{ getNumMsg }}</mt-button>
</template>

<script>
    export default {
      name: "sendMsgBtn",
      data(){
        return {
          getNumBtnDis: this.getNumBtnDisProps,
          sendTime: this.sendTimeProps,
          getNumMsg: this.getNumMsgProps,
        }
      },
      props:{
        callback: Function,
        getNumBtnDisProps: Boolean,
        sendTimeProps: Number,
        getNumMsgProps: String,
      },
    }
</script>

<style scoped>
  .getNum{
    background: #1bbf8d;
    font-size: 3.2vw;
    min-width: 100px;
    width: 30vw;
    height: 10vw;
    border-radius: 2vw;
    position: absolute;
    right: 0;
    top: 0vw;
  }
</style>
