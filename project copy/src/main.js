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
import Register from '../views/Register.vue'
import MainPage from '../views/MainPage.vue'
import UserPage from '../views/MainUserPage.vue'
import Login from '../views/Login.vue'
import axios from 'axios'
import firebase from 'firebase/app'
//Lessons part//
import Listening from '../views/Lessons/Listening.vue'
import Speaking from '../views/Lessons/Speaking.vue'
import Reading from '../views/Lessons/Reading.vue'
import Writing from '../views/Lessons/Writing.vue'
import Grammar from '../views/Lessons/Grammar.vue'
import File from '../views/Lessons/File.vue'
import Contacts from '../views/Contacts.vue'

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

Vue.prototype.$axios = axios; /*  */



const routes = [
    {path: '/', name: 'home', component: MainPage},
   { path: '/register', name: 'reg', component: Register},
   { path: '/Contacts', name: 'con', component: Contacts},
   { path: '/UserPage', name: 'userpage', component: UserPage, meta: {requiresAuth: true}},
   { path: '/Speaking', name: 'speak', component: Speaking, meta: {requiresAuth: true}},
   { path: '/Writing', name: 'write', component: Writing, meta: {requiresAuth: true}},
   { path: '/Reading', name: 'read', component: Reading, meta: {requiresAuth: true}},
   { path: '/Grammar', name: 'gram', component: Grammar, meta: {requiresAuth: true}},
   { path: '/Listening', name: 'listen', component: Listening, meta: {requiresAuth: true}},
   { path: '/File', name: 'file', component: File, meta: {requiresAuth: true}},
  //  { path: '/reg', redirect: '/register'}, /*Dla testu*/
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

let app;

firebase.auth().onAuthStateChanged(user=> {
  console.log(user);
  if(!app) {
    app = new Vue({
      render: h => h(App),
     router: router
    }).$mount('#app')
    
  }
})
