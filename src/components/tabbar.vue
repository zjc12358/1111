<template>

  <mt-tabbar v-model="message" fixed>

    <mt-tab-item id="MainPage">

      <img slot="icon" :src="message==this.atabs[0].id ? this.atabs[0].src[1] : this.atabs[0].src[0]">

      首页

    </mt-tab-item>

    <!--<mt-tab-item id="ShoppingList">-->

      <!--<img slot="icon" v-bind:src="message==this.atabs[1].id ? this.atabs[1].src[1] : this.atabs[1].src[0]">-->

      <!--统计-->

    <!--</mt-tab-item>-->

    <!--<mt-tab-item id="GroupList">-->

      <!--<img slot="icon" v-bind:src="message==this.atabs[2].id ? this.atabs[2].src[1] : this.atabs[2].src[0]">-->

      <!--广告-->

    <!--</mt-tab-item>-->
    <mt-tab-item id="GroupList">

    <img slot="icon" v-bind:src="message==this.atabs[2].id ? this.atabs[2].src[1] : this.atabs[2].src[0]">

    设备

    </mt-tab-item>

    <mt-tab-item id="UserCenter">

      <img slot="icon" v-bind:src="message==this.atabs[3].id ? this.atabs[3].src[1] : this.atabs[3].src[0]">

      我的

    </mt-tab-item>

  </mt-tabbar>

</template>

<script>
  export default {

    data(){

      return{

        //选中的tabbar值message为外面页面传入的值selected

        message:this.selected,

        //这里使用的icon图标为图片，所以需要加图片改变的传入，若使用阿里图标，则不用加

        atabs:this.tabs,

      }

    },

    props:{

      selected: String,

      tabs:Array
    },

    watch: {

      message: function (val, oldVal) {

        // 这里就可以通过 val 的值变更来确定去向

        switch(val){

          case 'MainPage':

            this.$router.push('/');

            break;

          case 'ShoppingList':

            this.$router.push('/statistics');

            break;

          case 'GroupList':

            this.$router.push('/advertising');

            break;

          case 'UserCenter':

            this.$router.push('/my');

            break;
  

        }

      }

    },

  }
</script>
