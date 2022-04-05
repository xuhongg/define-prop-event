
<template>
    <div>
        <input type="text" :value="childName" @input="updateVal($event.target.value)" />
    </div>
</template>


<script>
export default {
    name: "BaseBox",
    model: {
        prop: 'childName',//父组件v-model去绑定的变量 
        event: 'changeX'  // 随便命名事件，对应下面$emit即可。demo是在输入框输入值后，触发emit去通知父组件更新 
    },
    props: {
        uname: {
            type: String,
            default: '子组件定义初始值'//会被父组件的绑定值给覆盖掉
        }
    },
    methods: {
        //val就是更新后的值 通知父组件更新
        updateVal(val) {
            this.$emit('changeX', val)
        }
    }
}
</script>

<style scoped>
</style>

