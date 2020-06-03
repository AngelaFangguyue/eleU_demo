import VueRouter from "vue-router";
import menus from "@/config/menu-config";

var routes = [];
menus.forEach((item) => {
  item.sub.forEach((sub) => {
    routes.push({
      path: `/${sub.componentName}`,
      name: sub.componentName,
      component: () => import(/* webpackChunkName:"global" */ `@/components/${sub.componentName}`),
    });
  });
});
routes.push(
  {
    path: "/",
    name: "index11",
    component: () => import(/* webpackChunkName:"global" */ `@/components/BasicContainer.vue`),
  },
  {
    path: "*",
    name: "index11",
    component: () => import(/* webpackChunkName:"global" */ `@/components/NotFound.vue`),
  }
);

const router = new VueRouter({
  routes, 
});

export default router;
