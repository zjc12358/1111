<template>
  <div style="font-size: 3.7vw">
    <!--Advertis写ing-->
    <mt-datetime-picker
      ref="picker"
      type="time"
      v-model="pickerValue">
    </mt-datetime-picker>

    <mt-datetime-picker
      ref="picker2"
      type="time"
      v-model="pickerValue2">
    </mt-datetime-picker>
    <div @click="openPicker">点我</div>
    <div @click="openPicker2">点我</div>
    <div>{{ pickerValue }}</div>
    <div>{{ pickerValue2 }}</div>
    <div></div>

    <!--<tabbar :selected="selected" :tabs='tabs'></tabbar>-->
  </div>
</template>

<script>
    import tabbar from "../components/tabbar";

    export default {
      name: "Advertising",

      components: {
        tabbar,
      },

      data(){
        return {
          selected: "GroupList",
          tabs: this.$store.state.tabs,
          pickerValue: '',
          pickerValue2: ''
        }
      },

      created () {
        console.log()
      },

      mounted() {

      },

      methods: {
        openPicker() {
          this.$refs.picker.open();
        },
        openPicker2() {
          this.$refs.picker2.open();
        }

      }

    }
</script>

<style scoped>

</style>
