import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import apis from '../src/http/apis'

Vue.config.productionTip = false
Vue.prototype.$apis = apis
// router.beforeEach((to, from, next) => {
//     console.log(localStorage.getItem("token"));
//     if (!localStorage.getItem("token")) {
//         if (to.path != '/login') {
//             return next('/login')
//         }
    
//     }
//     else{
//        return next()
//     }
// })

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')