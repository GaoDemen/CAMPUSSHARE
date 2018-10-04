import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

/**  异步处理路由 **/
const index = () => import ('@/page/index');
const me = () => import ('@/page/me/me');
const near = () => import ('@/page/near/near');
const resources = () => import ('@/page/resources/resources');

const router = new Router({
  // mode:"history",
  canReuse: false,
  routes: [
    // 二级路由
    {
      path: "/index",
      component: index,
      children: [
        { path: "/resources", component: resources },         //  ----资源----
        { path: "/near", component: near },                   //  ----附近----
        { path: "/me", component: me },                       //  ----我的----
      ]
    },
    // 路由重定向
    {
      path: "/",
      redirect: "/resources",
      component: resources
    }
  ]


});

router.afterEach((to, from, next) => {

})
export default router;


