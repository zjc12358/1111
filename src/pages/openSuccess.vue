<template>
  <div class="openSuccess-container">
    <mt-header fixed style="color: black;background: white;height: 10.6vw;font-size: 3.7vw" title="开设账户">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div>提交完成</div>
    <div>资料将在2个工作日内审核完成</div>
  </div>
</template>

<script>
    export default {
        name: "openSuccess"
    }
</script>

<style scoped>
  .openSuccess-container{
    width: 100vw;
    height: 100vh;
    overflow: auto;
  }
</style>
