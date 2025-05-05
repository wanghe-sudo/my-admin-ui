import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import request from "@/api/api";
import storage from "@/utils/storage";
import "./assets/css/global.css"


Vue.prototype.$request = request;
Vue.prototype.$storage = storage;
Vue.prototype.$store = store;


Vue.config.productionTip = false
// 使用 ElementUI 组件库 (注意：需要在 main.js 中引入 ElementUI 组件库)
Vue.use(ElementUI)
// console.log("环境变量:" + process.env.NODE_ENV)
// console.log("环境变量:" + process.env.VUE_APP_BASE_API)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
