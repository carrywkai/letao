<template>
    <div class="search-content">
        <input type="search" placeholder="搜索你喜欢的商品" v-model="inputValue">
        <el-button type="primary" @click="search">主要按钮</el-button>
        <h2>搜索结果</h2>
        <ul>
             <li v-for="(item, index) in searchList" :key="index">{{item}}</li>
        </ul>
        <div class="search-title">
            <h3>搜索历史</h3>
            <i class="icon iconfont icon-shanchu"></i>
            <span @click="clearHistory">清空历史</span>
        </div>
        <hr>
        <ul>
            <li v-for="(item, index) in historyList" :key="index">{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'searchContent',
    data () {
        return {
            historyList: ['iPhone XS', 'Air Jordon 1', '小米电脑', '春装'],
            searchList: [],
            inputValue: ''
        }
    },
    methods: {
        clearHistory () {
            this.historyList = [];
        },
        search () {
            // 显示搜索结果
            this.searchList = this.historyList.filter(item => item.indexOf(this.inputValue) != -1)
            // 追加搜索列表
            var flag = false;
            flag = this.historyList.some(item => item != this.inputValue)
            if (flag) {
                this.historyList.push(this.inputValue);
            }

            console.log(this.historyList);
        },
        clearHistory () {
            this.historyList = [];
        }
    }
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
           color: #cececc;
           padding-left: .2rem;
           margin-right: .1rem;
           border-radius: .1rem;
       }
       > h2 {
           height: 1rem;
           width: 100%;
           line-height: 1rem;
           display: inline-block;
           text-align: center;
           color: cyan;
           font-size: .5rem;
       }
       .search-title {
           margin-top: .2rem;
           height: .6rem;
           line-height: .6rem;
           display: flex;
           color: #ccc;
           > i {
               margin-left: 5rem;
           }
       }
       > ul {
           width: 100%;
           > li {
               width: 100%;
               height: .6rem;
               line-height: .6rem;
               text-align: center;
               border-bottom: 1px solid #ccc;
           }
       }
   }
</style>


