// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//vant UI插件
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant)

//状态管理
import vuex from 'vuex'
Vue.use(vuex);

//axios
import axios from '../node_modules/axios'
Vue.prototype.$axios = axios;

//mock

//rem
import 'lib-flexible/flexible'
Vue.config.productionTip = false

//icon
import './assets/my-icon/iconfont.css';
import './assets/style.css'
/* eslint-disable no-new */

window.onresize = setHtmlFontSize;
function setHtmlFontSize(){
  const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
  const htmlDom = document.getElementsByTagName('html')[0];
  htmlDom.style.fontSize = htmlWidth / 10 + 'px';
};
setHtmlFontSize();



import store from './store/index'
new Vue({
  el: '#app',
  router,
  store,
  axios,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
