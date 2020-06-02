import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
//import './plugins/element.js'
//完整引入
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import router from "@/router";
//import 'vue-awesome/icons/flag';
import "vue-awesome/icons/beer";
import "vue-awesome/icons/camera";
import "vue-awesome/icons/sun";
import Icon from "vue-awesome/components/Icon";

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.component("v-icon", Icon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

console.log(VueRouter);
//console.log(Icon);
