<template>
  <div class="homeView">
    <BaseBox v-model="name" value="some value" ></BaseBox>
    父组件name:{{name}}
  </div>
</template>

<script>
//引入子组件
import BaseBox from './BaseBox'

export default {
  name: "HomeView",
  //注册子组件
  components: {
    BaseBox,
  },
  data() {
    return {
      //定义v-model属性初值
      name: '父组件定义初始值'
    }
  },
  created() {
    this.$nextTick(() => {
    
    })
  },
  methods:{
  
  }

}
</script>

<style scoped>
.homeView {
  width: 80%;
  height: auto;
  margin: auto;
}
</style>

