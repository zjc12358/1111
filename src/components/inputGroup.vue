<template>
    <div class="inputGroup-container">
      <div class="inputGroup-left">
        <img class="inputGroup-icon" :src="inputIcon" alt="">
        <div>{{ inputTitle }}</div>
      </div>
      <input v-model="inputValue" :placeholder="inputPlaceholder" class="inputGroup-right" type="text">
    </div>
</template>

<script>
  /**
   * 获取inputGroup组件文本框值得方法 --  ref --
   *    在父组件为 <inputGroup ref='input' /> 添加ref
   *    使用this.$refs.input.inputValue得到值
   */

  export default {
    name: "inputGroup",
    data(){
      return{
        inputValue: '',
        inputTitle: this.title,
        inputPlaceholder: this.placeholder,
        inputIcon: this.icon
      }
    },
    props: {
      title: {default: '标题'},
      placeholder: {default: '我是placeholder'},
      icon: {default: require('../assets/img/name.png')}
    },
  }
</script>

<style scoped>
  .inputGroup-container{
    display: flex;
    align-items: center;
    font-size: 3.7vw;
    width: 100%;
    padding: 5vw 0 3vw 0;
    border-bottom: 1px solid rgba(153, 153, 153, 0.5);
  }
  .inputGroup-left{
    display: flex;
    align-items: center;
    width: 40vw;
    height: 100%;
  }
  .inputGroup-icon{
    width: 4vw;
    height: 4vw;
    margin-right: 2vw;
    margin-left: 2vw;
  }
  .inputGroup-right{
    outline: none;
    border: 0;
    width: 50vw;
    min-height: 20px;
    font-size: 3.7vw;
  }
</style>
