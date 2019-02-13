import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入重置样式
import './assets/styles/reset.css'
// 解决移动端的1像素边框
import './assets/styles/border.css'
// 解决移动端300秒延迟问题
import fastClick from 'fastclick'
// 引入第三方图标库
import './assets/styles/iconfont.css'
// 引入 vueAwesomeSwiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// 引入element-UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入axios来发送ajax请求
import axios from 'axios'


Vue.config.productionTip = false
// 调用fastclick方法
fastClick.attach(document.body)
// 全局使用 VueAwesomeSwiper
Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI);
// 将axios挂载到Vue的实例上面去，来实现全局使用
Vue.prototype.$axios = axios
// 设置基础路径
axios.defaults.baseURL = "http://localhost:3000/"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
