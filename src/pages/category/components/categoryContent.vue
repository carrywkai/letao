<template>
    <div class="category-content">
      <ul class="left">
          <li 
            v-for="(item, index) in categoryList" 
            :key="index"
            :class="{active:index == num}"
            @click='toggleTab(index)'
          >
            {{item.categoryName}}
        </li>
      </ul>
      <ul class="right">
          <div 
            v-for="(item, index) in categoryContent" 
            :key="index"
            v-show="index == num"
          >
            {{item}}
          </div>
      </ul>
    </div>
</template>

<script>
export default {
    name: 'categoryContent',
    data () {
        return {
            categoryList: [],
            categoryContent: ['运动馆','女士馆','男士馆','帆布馆','户外馆'],
            num: 0
        }
    },
    methods: {
        toggleTab (index) {
            this.num = index;
        }
    },
    created () {
        this.$axios.get('/category/queryTopCategory').then(response => {
             console.log(response)
             this.categoryList = response.data.rows;
         })

        this.$axios.get('/category/querySecondCategory',{id:1}).then(response => {
             console.log(response);
        })
    }
}
</script>

<style lang="less" scoped>
    .category-content {
        margin-top: 1rem;
        display: flex;
        > ul:first-of-type {
            width: 1.6rem;
            > li {
                width: 1.6rem;
                height: 1rem;
                line-height: 1rem;
                text-align: center;
                border-right: 1px solid #ccc;
                border-bottom: 1px solid #ccc;
                &.active {
                    background-color: #ccc;
                }
            }
        }
        > ul:last-of-type {
            flex: 1;
            padding: .1rem;
        }
    }
</style>


