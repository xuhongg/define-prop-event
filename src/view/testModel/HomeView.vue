<template>
  <div class="homeView">
    <BaseBox v-model="name" value="some value"></BaseBox>
    <van-button class="btn" v-if="name == 1" type="primary" >父组件样式1</van-button>
    <van-button class="btn" v-if="name == 2" type="info" >父组件样式2</van-button>
    <van-button class="btn" v-if="name == 3" type="warning" >父组件样式3</van-button>
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
      name: '1'
    }
  },
  created() {
    this.$nextTick(() => {

    })
  },
  methods: {

  }

}
</script>

<style scoped>
.homeView {
  width: 80%;
  height: auto;
  margin: auto;
}
.btn{
  margin-top: 10%;
}
</style>

