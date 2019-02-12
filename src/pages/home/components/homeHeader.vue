<template>
    <div class="home-header">
        乐淘云购
        <i class="icon iconfont icon-sousuokuang"></i>
    </div>
</template>

<script>
export default {
    name: 'homeHeader'
}
</script>

<style scoped lang='less'>
    .home-header {
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
        .icon-sousuokuang {
            position: absolute;
            top: 0;
            right: .2rem;
            font-size: .5rem;
        }
    }
</style>


