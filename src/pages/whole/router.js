import Vue from 'vue';
import VueRouter from "vue-router";

import store from "../../store/store.js";
import * as types from "../../store/types.js";

let Show =()=>import("../../pages/whole/Show.vue");
let DetailInfo =()=>import ('../../components/echarts/table/DetailInfo.vue');
let TempPersonInfo =()=>import ('../../components/echarts/table/TempPersonInfo.vue');

Vue.use(VueRouter);//全局注册路由

let routes = [
  {
    path: "/whole",
    name: 'whole',
    component: Show
  },
  {
    path: '/whole/tempPersonInfo/:time',
    name: 'tempPersonInfo',
    component: TempPersonInfo
  },
  {
    path: '/whole/detailInfo/:personId',
    name: 'detailInfo',
    component: DetailInfo
  }
];

// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
  store.commit(types.LOGIN, window.localStorage.getItem('token'))
}


let router = new VueRouter({
  mode: 'history',
  routes: routes
});


router.beforeEach((to, from, next) => {
  if (to.matched.some((r) => r.meta.requireAuth)) {
    // eslint-disable-next-line no-undef
    if (localStorage.token) {   //判断是否已经登录
      next();
    } else {
      next({
        path: '/login',
        // query: { redirect: to.fullPath }
      });
    }
  } else {
    next();
  }
});
export default router;