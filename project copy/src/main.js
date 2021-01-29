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
import MainPage from './components/MainPage.vue'
import tlogin from './components/tlogin.vue'
import tregister from './components/tregister.vue'
import tsecret from './components/tsecret.vue'
import Login from './components/Login.vue'
import axios from 'axios'
import firebase from 'firebase/app'
// import { firebase } from '@firebase/app'
// import '@firebase/auth'
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyASQaSEYaG-8Vgv82gss3Jwgr4H9lCbwA8",
    authDomain: "project-d22a2.firebaseapp.com",
    projectId: "project-d22a2",
    storageBucket: "project-d22a2.appspot.com",
    messagingSenderId: "203113554810",
    appId: "1:203113554810:web:9e5e54f97670a7ec2decc3",
    measurementId: "G-98LMQPQ6CF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

Vue.prototype.$axios = axios; /*  */



const routes = [
    {path: '/', name: 'home', component: MainPage},
   { path: '/register', name: 'reg', component: Register},
   { path: '/testlog', name: 'test1', component: tlogin},
   { path: '/testreg', name: 'test2', component: tregister},
   { path: '/testsec', name: 'test3', component: tsecret, meta: {requiresAuth: true}},
   { path: '/reg', redirect: '/register'}, /*Dla testu*/
   { path: '/login', name:"log", component: Login} 
 ]
 
 Vue.use(VueRouter)
 

const router = new VueRouter({
  routes // short for `routes: routes`
})
router.beforeEach((to, from, next)=>{
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  if(requiresAuth && !isAuthenticated)
  {
    next("/login");
  }
  else {
    next();
  }
})


library.add(faUserSecret, faUserFriends, faBook, faStar)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
 router: router
}).$mount('#app')

