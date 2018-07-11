import Vue from 'vue';
import App from './App';
import router from './router';

/**
 * 根据项目,选择ui组件
 * pc       element-ui
 * web-app  mint-ui
 */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


/**
 * 挂全局方法
 */
import * as g from './assets/jslib/global';
Vue.prototype.$g = g;
setWindowAttribute('g', g);

/**
 * 挂工具类方法
 */
import * as utils from 'hjai-utils/dist/utils.min.js';
Vue.prototype.$utils = utils;
setWindowAttribute('utils', utils);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

/**
 * 挂载window(本地开发,方便测试数据)
 */
function setWindowAttribute($attr, $value)
{
  if (typeof $attr !== 'string' || typeof $value !== 'object')
  {
    throw new Error('参数类型不对!');
  }

  if (process.env.NODE_ENV === 'development')
  {
    window[$attr] = $value;
  }
}

