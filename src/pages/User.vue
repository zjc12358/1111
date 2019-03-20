<template>
  <div>
    大花洒解放后的萨科技返回的数据卡
    <div v-for="tab in data">
      {{ tab }}
    </div>
  </div>
</template>

<script>
  export default {
    name: "User",
    data () {
      return {
        data: []
      }
    },
    created() {
      this.$axios.get('/api/data').then(res => {
        this.data = res.data.data;
        console.log(res.data.data)
      })

    }
  }
</script>

<style scoped>

</style>
