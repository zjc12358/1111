<template>
    <div class="changePwd-container">
      <mt-header fixed style="color: black;background: white;height: 10.6vw;font-size: 3.7vw" title="修改密码">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <div style="height: 10.6vw;"></div>
      <div class="changePwd-content">
        <div style="margin-top: 12.5vw" class="input_group">
          <div class="icon"><img src="../assets/icon/people.svg" alt=""></div>
          <input v-model="oldpassword" placeholder="请输入旧密码" type="password">
        </div>
        <div style="margin-top: 8vw" class="input_group">
          <div class="icon"><img src="../assets/icon/lock.svg" alt=""></div>
          <input v-model="password" placeholder="请输入新密码" type="password">
        </div>
        <div style="margin-top: 8vw" class="input_group">
          <div class="icon"><img src="../assets/icon/lock.svg" alt=""></div>
          <input v-model="repassword" placeholder="请输确认新密码" type="password">
        </div>
        <div style="margin-top: 10vw">
          <mt-button @click="sub()" style="width:100%;height: 10vw; font-size: 4.2vw" type="primary">完成</mt-button>
        </div>
      </div>
    </div>
</template>

<script>
  import {Toast} from "mint-ui";

  export default {
    name: "changePwd",
    data(){
      return{
        oldpassword: '',
        password: '',
        repassword: ''
      }
    },
    methods:{
      sub(){
        if(!this.isnull(this.oldpassword)&&!this.isnull(this.password)&&!this.isnull(this.repassword)){

        }else{
          Toast('必填项不得为空!')
        }
        let data = new FormData();
        data.append('oldPassword',this.oldpassword)
        data.append('newPassword',this.repassword)
        let config = {
          headers: {
            'Authorization': this.$store.state.token
          }
        }
        this.$axios.post('/api/agency/editPassword.lxkj',data,config)
          .then(res=>{
            if(res.data.code=='200'){
              Toast('修改密码成功!')
            }else{
              Toast(res.data.msg)
            }
            console.log(res)
          }).catch(err=>{
            Toast('请检查网络设置!')
        })
      }
    },
    watch:{
      repassword: function(val,oldVal){

      }
    }
  }
</script>

<style scoped>
  .changePwd-container{
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: url("../assets/login-bg.png");
    background-size: 100vw 100vh;
  }
  .input_group{
    display: flex;
    align-items: center;
    font-size: 3.7vw;
    height: 9vw;
    border-bottom: 1px solid rgba(255,255,255,0.6);
    position: relative;
  }
  .input_group .icon{
    width: 10vw;
    text-align: center;
    border-right: 1px solid rgba(255,255,255,0.3);
    margin-right: 2vw;
  }
  .input_group .icon img{
    width: 4.8vw;
    height: 4.8vw;
  }
  .input_group input{
    background: transparent;
    color: white;
    border: 0;
    outline:none;
    font-size: 3.2vw;
    transition: background-color 50000s ease-in-out 0s;
  }
  .changePwd-content{
    padding-top: 18vw;
    color: white;
    padding-left: 8.3vw;
    padding-right: 8.3vw;
  }
</style>
