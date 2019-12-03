import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import lego from 'xlink-lego' // 全量引入
// import 'path/to/your/stylus-file.styl'
import './stylus1/lego1.styl'

Vue.config.productionTip = false


var axios1 = axios.create({
    baseURL: 'https://api2.xlink.cn',
    timeout: 1000,
    headers: {'Content-Type': 'application/json; charset=UTF-8'}
});

Vue.use(lego)
Vue.prototype.$axios = axios1;


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
