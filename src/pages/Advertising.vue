<template>
  <div>
    <!--Advertising-->
    <changeInformation></changeInformation>
    <tabbar :selected="selected" :tabs='tabs'></tabbar>
  </div>
</template>

<script>
    import tabbar from "../components/tabbar";
    import userRegistrationAgreement from "./userRegistrationAgreement";

    export default {
      name: "Advertising",

      components: {
        tabbar,
        userRegistrationAgreement,
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

      },

      methods: {


      }

    }
</script>

<style scoped>

</style>
