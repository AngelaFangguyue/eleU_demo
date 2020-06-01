import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
//import './plugins/element.js'
//完整引入
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from '@/router';

Vue.use(ElementUI);
Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

console.log(VueRouter);