<template>
    <div class="category-content">
      <ul class="left">
          <li 
            v-for="(item, index) in categoryList" 
            :key="index"
            :data-id='item.id'
            :class="{active:index == num}"
            @click='toggleTab(index);getDataId($event)' 
          >
            {{item.categoryName}}
        </li>
      </ul>

      <ul class="right">
          <li 
            v-for="(item, index) in categoryContent" 
            :key="index" 
            v-show="index == num"
          >
            <!-- <img :src="imgUrl" alt="">  -->
            <img :src="baseUrl+item.brandLogo" alt="">
            <span>{{item.brandName}}</span>
          </li>
      </ul>
    </div>
</template>

<script>
export default {
    name: 'categoryContent',
    data () {
        return {
            categoryList: [],
            categoryContent: [],
            num: 0,
            id: 1,
            baseUrl: 'http://localhost:3000',
            imgUrl: ''
        }
    },
    methods: {
        toggleTab (index) {
            this.num = index;
            this.$axios.get('/category/querySecondCategory?id='+this.id).then(response => {
               this.categoryContent = response.data.rows;
            })
        },
        getDataId (event) { // 通过自定属性获取id
            this.id = event.target.dataset.id;
        }
    },
    created () {

        // 请求一级菜单: 将一级菜单的id当做参数传递到二级菜单
        this.$axios.get('/category/queryTopCategory').then(response => {
            //  console.log(response)
             this.categoryList = response.data.rows;
            //  id = response.data.rows[0].id;
            //  console.log(id);
         })

        // 请求二级菜单
        this.$axios.get('/category/querySecondCategory?id='+this.id).then(response => {
            //  console.log(response);
            //  console.log(response.data.rows[1].brandLogo);
            this.categoryContent = response.data.rows;
            this.imgUrl = 'http://localhost:3000' + this.categoryContent[this.id].brandLogo;
            // console.log(this.categoryContent)
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
            display: flex;
            flex-wrap: wrap;
            > li {
                width: calc(100% / 3);
                > img {
                    width: 100%;
                    display: block;
                }
                > span {
                    display: inline-block;
                    width: 100%;
                    text-align: center;
                }
            }
        }
    }
</style>


