<template>
  <div class="imagesPiceker-container">
    <div class="imagesPiceker-left">
      <img class="imagesPiceker-icon" src="../assets/img/camera.png" alt="">
      <div>{{ imagesPicekerTitle }}</div>
    </div>
    <div class="imagesPiceker-right">
      <div class="imagesPicekerItem">
        <input @change="uploadFile($event)" class="inputFile" type="file">
        <img class="readImages" :src="baseFile" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  /**
* 图片选择器
*/

import {Toast,Indicator} from "mint-ui";


export default {
    name: "imagesPiceker",
    data(){
      return {
        imagesPicekerTitle: this.title,
        baseFile:null,
        files: null,
        bank_card_number: null,
        bank_name: null
      }
    },
    props:{
      title: {default: '标题'},
      request: {default: null}
    },
    methods:{
      imgUpload(file){
        let data = new FormData();
        data.append('file',file)
        data.append('fileName',file.name.replace(/^.+\./,''))
        let config = {
          headers: {
            'Authorization': this.$store.state.token
          }
        }
        this.$axios.post(process.env.API_HOST+'/base/upload.lxkj',
          data,config
        ).then(res => {
          // Indicator.close();
          if(res.data.code=='200'){
            this.files = res.data.data;
            this.baseFile = res.data.data;
          }else{
            Toast('图片上传失败!')
          }
        }).catch(err=>{
          Indicator.close();
          Toast('图片上传失败请检查网络设置!')
        })
      },
      getBankCard(file){
        let data = new FormData();
        data.append('file',file)
        let config = {
          headers: {
            'Authorization': this.$store.state.token
          }
        }
        this.$axios.post(process.env.API_HOST+'/base/getBankCard.lxkj',data,config)
          .then(res=>{
            if(res.data.code=='200'){
              this.bank_card_number = res.data.data.bank_card_number
              this.bank_name = res.data.data.bank_name
              this.imgUpload(file)
            }else{
              Toast(res.data.msg)
            }
          }).catch(err=>{
          console.log(err)
          Toast('请检查网络设置!')
        })
      },
      uploadFile(e){
        let file = e.target.files[0]
        if(file.size>10485760){
          Toast('图片过大！')
          return
        }
        if(file.type.indexOf("image") == 0) {
          let reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = (e) => {
            if(this.request){
              // 银行卡上传先验证
              this.getBankCard(file)
            }else{
              this.imgUpload(file)
            }
          }
        }else{
          Toast('图片格式错误!')
        }
      }
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
    /*border-bottom: 1px solid rgba(153, 153, 153, 0.5);*/
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
    position: relative;
  }
  .inputFile{
    width: 20vw;
    height: 20vw;
    opacity: 0;
    position: absolute;
    z-index: 3;
  }
  .readImages{
    width: 20vw;
    position: absolute;
    z-index: 2;
  }
</style>
