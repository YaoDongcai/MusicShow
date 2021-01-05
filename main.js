import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false
wx.cloud.init({  
  env:'chulian-production-aqm89' //点击开发者工具上的 云开发->设置 就看到了  
})
// 将db 挂载在Vue 上面
Vue.prototype.DB = wx.cloud.database()
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
