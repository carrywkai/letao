import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home/Home'
import Category from './pages/category/Category'
import Search from './pages/search/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Category',
      component: Category
    }
  ],
  mode: 'history'
})
