<template>
  <div id="app">
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {

    }
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  a{
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  .mint-indicator-mask,.mint-indicator-wrapper{
    z-index: 999;
  }
</style>
