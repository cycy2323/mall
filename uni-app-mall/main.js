import Vue from 'vue'
import App from './App'
import https from './utils/https.js'
import status from './components/status.vue'

Vue.config.productionTip = false
Vue.prototype.request = https

//全局注册组件
Vue.component('page-status', status)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
