<template>
    <ul class="home-footer">
        <li>
            <router-link to='/' class="router-link">
                <i class="icon iconfont icon-shouye"></i>
                <span>首页</span>
            </router-link>
        </li>
        <li>
            <router-link to='/category' class="router-link">
                <i class="icon iconfont icon-fenlei1"></i>
                <span>分类</span>
            </router-link>
        </li>
        <li>
            <router-link to='/shopcart' class="router-link">
                <i class="icon iconfont icon-daohanggouwuche"></i>
                <span>购物车</span>
            </router-link>
        </li>
        <li>
            <router-link to='/login' class="router-link">
                <i class="icon iconfont icon-huiyuanzhongxin1"></i>
                <span>会员中心</span>
            </router-link>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'homeFooter'
}
</script>

<style scoped lang='less'>
    .home-footer {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1rem;
        background: #006699;
        display: flex;
        > li {
            width: 25%;
            .router-link {
                display: flex;
                flex-direction: column;
                text-align: center;
                color: #fff;
                padding: .1rem 0;
                > i {
                    font-size: .4rem;
                }
                > span {
                    margin-top: .1rem;
                    display: block;
                }
            }
        }
    }
</style>


