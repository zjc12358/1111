<template>
  <div>
    <!--Advertising-->
    <el-tree
      accordion
      :props="props1"
      :load="loadNode1"
      lazy
      show-checkbox>
    </el-tree>
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
      },

      data(){
        return {
          selected: "GroupList",
          tabs: this.$store.state.tabs,
          props1: [
            {
              label: 'name',
              children: 'zones',
              isLeaf: 'leaf'
            },
            {
              label: 'name2',
              children: 'zones2',
              isLeaf: 'leaf2'
            },
          ],
        }
      },

      created () {
        console.log()
      },

      mounted() {

      },

      methods: {
        loadNode1(node, resolve) {
          console.log(node)
          console.log(resolve)
          if (node.level === 0) {
            return resolve([{ name: 'region' }]);
          }
          if (node.level > 1) return resolve([]);

          setTimeout(() => {
            const data = [{
              name: 'leaf',
              leaf: true
            }, {
              name: 'zone'
            }];

            resolve(data);
          }, 500);
        }

      }

    }
</script>

<style scoped>

</style>
