<template>
  <div>
    Advertising
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
      }
    }
</script>

<style scoped>

</style>
