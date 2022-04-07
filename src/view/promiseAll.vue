<template>
    <div></div>
</template>

<script>

export default {
    data() {
        return {
            listArr: [{ id: 'a' }, { id: 'b' }, { id: 'c' }, { id: 'd' }, { id: 'e' }],
        };
    },
    created() {
      
    },
    methods: {
        getMore(id) {
            //用定时器和随机数 模拟接口调用
            return new Promise((resolve) => {
                setTimeout(function () {
                    resolve(id)
                }, Math.random() * 1000)
            })
        },
    },
    mounted() {
        let vm = this
        let promises = this.listArr.map(function (item) {
            return vm.getMore('/post/' + item.id + '.json')
        })
        try {
            Promise.all(promises).then(res => {
                //虽然接口耗时不同 但promise.all 顺序依然是链式调用
                window.console.log(res)
            }).catch(err => {
                window.console.log(err)
            })
        } catch (error) {
            window.console.log(error)
        }

    }
};
</script>

<style lang="less">
</style>
