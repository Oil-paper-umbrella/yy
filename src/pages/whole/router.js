import Vue from 'vue';
import VueRouter from "vue-router";

import store from "../../store/store.js";
import * as types from "../../store/types.js";

let FourModules =()=>import('../../components/echarts/pie/FourModules.vue');
let OneModule =()=>import('../../components/echarts/pie/oneModule.vue');
let Line =()=>import('../../components/echarts/line/Line.vue');
// import Map from '../../components/echarts/map/Map.vue'
let Show =()=>import("../../pages/whole/Show.vue");
let Provice =()=>import('../../components/echarts/map/Provice.vue');
let Tests =()=>import('../../components/echarts/map/test.vue');



Vue.use(VueRouter);//全局注册路由

let routes = [
  {
    path: "/whole",
    name: 'whole',
    component: Show
  },
  {
    path: "/show",
    name: 'show',
    component: Show,
  },
  {
    path: '/whole/proviceInfo',
    name: '饼图',
    component: FourModules
  },
  /* {
    path: '/whole/subPie/:time/:module',
    name: '饼图',
    component: OneModule
  }, */
  {
    path: '/whole/subPie',
    name: '饼图',
    component: OneModule
  },
  {
    path: '/whole/line',
    name: '折线图',
    component: Line
  },
  {
    // path: '/whole/provice/:cityName',
    path: "/whole/provice",
    name: '城市地图',
    component: Provice
  },
  {
    // path: '/whole/provice/:cityName',
    path: "/whole/ab",
    name: '城市地图',
    component: Tests
  },
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