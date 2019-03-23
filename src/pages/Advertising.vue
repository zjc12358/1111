<template>
  <div>
    <!--Advertising-->
    <!--{{ selected }}-->
    <div class="page-picker-wrapper">
      <mt-picker ref="picker" :slots="slots" value-key="name" @change="onValuesChange"></mt-picker>
      <div @click="getData">djafkdsalf</div>
    </div>
    <!--<p class="page-picker-desc">地址: {{ addressProvince }} {{ addressCity }}</p>-->
    <tabbar :selected="selected" :tabs='tabs'></tabbar>
  </div>
</template>

<script>
    import tabbar from "../components/tabbar";

    const address = require('../../city');

    export default {
      name: "Advertising",

      components: {
        tabbar
      },

      data(){
        return {
          selected: "GroupList",
          tabs: this.$store.state.tabs,
          myAdress:null,
          slots: [
            {
              flex: 1,
              values: address,
              defaultIndex:10,
              className: 'slot1',
              textAlign: 'center'
            }, {
              divider: true,
              content: '-',
              className: 'slot2'
            }, {
              flex: 1,
              values: address[0].childs,
              defaultIndex:0,
              className: 'slot3',
              textAlign: 'center'
            }, {
              divider: true,
              content: '-',
              className: 'slot4'
            }, {
              flex: 1,
              values: address[0].childs[0].childs,
              defaultIndex:0,
              className: 'slot5',
              textAlign: 'center'
            }
          ]
        }
      },

      created () {
        console.log()
      },

      mounted() {
        // this.$nextTick(() => {
        //   let step = 0;
        //   setInterval(() => {
        //     this.numberSlot[0].defaultIndex = step++;
        //     if (step > this.numberSlot[0].values.length - 1) {
        //       step = 0;
        //     }
        //   }, 1000);
        // });
      },

      methods: {
        onValuesChange(picker, values) {
          if(!values[0]){
            this.$nextTick(()=>{
              if(this.myAdress){
                // 赋默认值
              }else{
                picker.setValues([address[0],address[0].childs[0],address[0].childs[0].childs[0]])
              }
            });
          }else{
            picker.setSlotValues(1, values[0].childs);
            let town = [];
            if(values[1]){
              town = values[1].childs;
            }
            picker.setSlotValues(2,town);
          }
        },

        getData(){
          console.log(this.$refs.picker.getValues())
        }

      }

    }
</script>

<style scoped>

</style>
