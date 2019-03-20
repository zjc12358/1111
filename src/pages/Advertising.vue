<template>
  <div>
    <!--Advertising-->
    {{ selected }}
    <div @click="fn">1212121</div>
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
          tabs: this.$store.state.tabs
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
          console.log('我是fn')
        }
      }
    }
</script>

<style scoped>

</style>
