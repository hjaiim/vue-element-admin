/**
 * Created by haojun on 2018/5/31.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import * as utils from 'hjai-utils/dist/utils.min.js';
Vue.use(VueRouter)

import Index from '../components/index/index.vue';
import Login from '../components/login/login.vue';

let router = new VueRouter({
  routes: [
    {
      path: '/',
      name: "首页",
      component: Index,
      meta: {requireLogin: true}
    },
    {
      path: '/login',
      name: "登录页",
      component: Login,
      meta: {requireLogin: false}
    }
  ]
})

// 全局钩子函数,在跳转之前执行
router.beforeEach((to, from, next) =>
{
  if (to.meta.requireLogin)
  {
    if (utils.data.getData('isLogin'))
    { // 登录状态
      next();
    }
    else
    { // 未登录,跳登录页,再回调当前页
      next({
        path: '/login',
        query: getQuery(to.fullPath)
      })
    }
  }
  else
  {
    if (to.path === '/login')
    {
      if (utils.data.getData('isLogin'))
      { // 防止手动输入login,默认跳首页
        next('/');
      }
      else
      {
        next();
      }
    }
    else
    {
      next();
    }
  }
})

export default router

/**
 * 1.去掉路由带的'/'
 * 2.如果是默认页面,则不需要'redirect'
 * @param path
 */
function getQuery(path)
{
  let queryObj = {};
  if (path != '/')
  {
    queryObj['redirect'] = path.replace('/', '');
  }
  return queryObj;
}
