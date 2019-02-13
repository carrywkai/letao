<template>
    <div class="search-content">
        <input type="search" placeholder="搜索你喜欢的商品">
        <el-button type="primary">主要按钮</el-button>
        <div class="search-title">
            <h3>搜索历史</h3>
            <i class="icon iconfont icon-shanchu"></i>
            <span>清空历史</span>
        </div>
        <hr>
    </div>
</template>

<script>
export default {
    name: 'searchContent'
}
</script>

<style lang="less" scoped>
   .search-content {
       margin-top: 1rem;
       padding: .2rem;
       > input {
           width: 5.8rem;
           height: .8rem;
           border: 1px solid #ccc;
           padding-left: .2rem;
           margin-right: .1rem;
           border-radius: .1rem;
       }
       .search-title {
           display: flex;
           
       }
   }
</style>


