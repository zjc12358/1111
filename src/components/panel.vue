<template>
  <div class="panel-container">
    <div class="panel-title">{{ panelTitle }}</div>
    <div class="panel-content">
      <slot>
        <div>这里是默认文字</div>
      </slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "panel",
    data(){
      return{
        panelTitle: this.title
      }
    },
    props:{
      title: {default: '默认标题'}
    }
  }
</script>

<style scoped>
  .panel-container{
    background: white;
    border-radius: 2vw;
    margin: 5vw 3vw;
    padding: 5vw;
    font-size: 3.7vw;
  }
  .panel-title{
    font-size: 3.7vw;
    font-weight: bold;
    text-align: center;
  }
  .panel-content{
    margin-top: 5vw;
  }
</style>
