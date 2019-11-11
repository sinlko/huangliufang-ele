import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import store from './store'
// 也可以在全局挂axios,但是这样会污染全局
// window.axios=axios;
// 最好用原型链

// 全局的路由
import router from './routers'



Vue.prototype.$axios = axios;


Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')