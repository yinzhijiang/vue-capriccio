// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'Vuex'
import App from './App'
import router from './router'
import ELEMENT from 'element-ui'
// import 'font-awesome/css/font-awesome.css'
import 'element-ui/lib/theme-chalk/index.css'
import './style/common.less'
import axios from 'axios'
import echarts from 'echarts'
import store from './store'

Vue.config.productionTip = false
Vue.use(ELEMENT)
Vue.use(Vuex)
window.axios = axios
window.echarts = echarts
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
