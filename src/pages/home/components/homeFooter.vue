<template>
    <ul class="home-footer">
        <li>
            <a href="javascript:;">
                <i class="icon iconfont icon-shouye"></i>
                <span>首页</span>
            </a>
        </li>
        <li>
            <a href="javascript:;">
                <i class="icon iconfont icon-fenlei1"></i>
                <span>分类</span>
            </a>
        </li>
        <li>
            <a href="javascript:;">
                <i class="icon iconfont icon-daohanggouwuche"></i>
                <span>购物车</span>
            </a>
        </li>
        <li>
            <a href="javascript:;">
                <i class="icon iconfont icon-huiyuanzhongxin1"></i>
                <span>会员中心</span>
            </a>
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
            > a {
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


