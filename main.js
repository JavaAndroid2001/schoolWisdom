import App from './App'
// #ifndef VUE3
import Vue from 'vue'
import {netWork} from 'api/network.js'
Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$api = netWork
Vue.prototype.URL = 'http://124.93.196.45:10001'

const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif