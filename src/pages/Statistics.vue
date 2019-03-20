<template>
  <div>
    Statistics
    <tabbar :selected="selected" :tabs='tabs'></tabbar>
  </div>
</template>

<script>
    import tabbar from "../components/tabbar";

    export default {
      name: "Statistics",
      components: {
        tabbar
      },
      data(){
        return {
          selected: "ShoppingList",
          tabs: this.$store.state.tabs
        }
      }
    }
</script>

<style scoped>

</style>
