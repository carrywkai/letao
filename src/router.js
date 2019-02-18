import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home/Home'
import Category from './pages/category/Category'
import Search from './pages/search/Search'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import User from './pages/user/User'
import Shopcart from './pages/shopcart/Shopcart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/shopcart',
      name: 'Shopcart',
      component: Shopcart
    }
  ],
  mode: 'history'
})
