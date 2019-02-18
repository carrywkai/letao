<template>
    <div class="category-header">
        <i class="icon iconfont icon-2fanhui" @click="goBack"></i>
        购物车
        <i class="icon iconfont icon-shuaxin"></i>
    </div>
</template>

<script>
export default {
    name: 'homeHeader',
    methods: {
        goBack () {
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped lang='less'>
    .category-header {
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        font-size: .36rem;
        background: #006699;
        text-align: center;
        color: #fff;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;
        .icon-2fanhui {
            position: absolute;
            top: 0;
            left: .2rem;
            font-size: .5rem;
        }
        .icon-shuaxin {
            position: absolute;
            top: 0;
            right: .2rem;
            font-size: .5rem;
        }
    }
</style>



