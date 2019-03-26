<template>
  <div class="imagesPiceker-container">
    <div class="imagesPiceker-left">
      <img class="imagesPiceker-icon" src="../assets/img/camera.png" alt="">
      <div>{{ imagesPicekerTitle }}</div>
    </div>
    <div class="imagesPiceker-right">
      <div class="imagesPicekerItem">
        <input class="inputFile" type="file">
      </div>
    </div>
  </div>
</template>

<script>
  /**
   * 图片选择器
   */
  export default {
    name: "imagesPiceker",
    data(){
      return {
        imagesPicekerTitle: this.title,
        files: null
      }
    },
    props:{
      title: {default: '标题'}
    }
  }
</script>

<style scoped>
  .imagesPiceker-container{
    display: flex;
    align-items: center;
    font-size: 3.7vw;
    width: 100%;
    padding: 5vw 0 3vw 0;
    border-bottom: 1px solid rgba(153, 153, 153, 0.5);
  }
  .imagesPiceker-left{
    display: flex;
    align-items: center;
    width: 40vw;
    height: 100%;
  }
  .imagesPiceker-icon{
    width: 4vw;
    height: 4vw;
    margin-right: 2vw;
    margin-left: 2vw;
  }
  .imagesPiceker-right{
    outline: none;
    border: 0;
    width: 50vw;
    min-height: 20px;
    font-size: 3.7vw;
  }
  .imagesPicekerItem{
    width: 20vw;
    height: 20vw;
    overflow: hidden;
    background: url("../assets/fileUpload.png");
    background-size: 20vw 20vw;
  }
  .inputFile{
    width: 20vw;
    height: 20vw;
    opacity: 0;
  }
</style>
