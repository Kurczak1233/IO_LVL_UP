import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import { BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBook, faStar, faUserFriends, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueRouter from 'vue-router'
import Register from './components/Register.vue'
 Vue.use(VueRouter)
 
 const routes = [
  { path: '/register', name: 'reg', component: Register},
  { path: '/reg', redirect: '/register'}
]

const router = new VueRouter({
  routes // short for `routes: routes`
})
library.add(faUserSecret, faUserFriends, faBook, faStar)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
 router
}).$mount('#app')

