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
import AboutUs from '../views/AboutUs.vue'
import Begginer from '../views/Begginer.vue'
import Advanced from '../views/Advanced.vue'
import PlacementTest from '../views/PlacementTest.vue'
import TheoryB1PPS from '../views/Lessons/GrammarTheory/TheoryB1PPS.vue'
import TheoryB1PPC from '../views/Lessons/GrammarTheory/TheoryB1PPC.vue'
import TaskB1PPS1 from '../views/Lessons/GrammarTasks/TaskB1PPS1.vue'
import TaskB1PPS2 from '../views/Lessons/GrammarTasks/TaskB1PPS2.vue'
import TaskB1PPS3 from '../views/Lessons/GrammarTasks/TaskB1PPS3.vue'
import ExamB1PPS from '../views/Lessons/GrammarTasks/ExamB1PPS.vue'
//Footer 1
import TermsOFUse from '../views/TermsOFUse.vue'
import PrivacyPolicy from '../views/PrivacyPolicy'
import Trademarks from '../views/Trademarks'
import SIteMap from '../views/SIteMap'

//Footer 2
import AboutUsF from '../views/AboutUsF'
import Leadership from '../views/Leadership'
import Careers from '../views/Careers'
import Faq from '../views/Faq'
import Contact from '../views/Contacts'
import Offer from '../views/Offer.vue'


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
  // var db = firebase.firestore();
  // firebase = require("firebase");
  // Required for side-effects
  require("firebase/firestore");
Vue.prototype.$axios = axios; /*  */



const routes = [
    {path: '/', name: 'home', component: MainPage},
   { path: '/register', name: 'reg', component: Register},
   { path: '/Begginer', name: 'reg', component: Begginer},
   { path: '/Advanced', name: 'reg', component: Advanced},
   { path: '/Contact', name: 'con', component: Contact},
   { path: '/Careers', name: 'careers', component: Careers},
   { path: '/Trademarks', name: 'marks', component: Trademarks},
   { path: '/SIteMap', name: 'map', component: SIteMap},
   { path: '/AboutUsF', name: 'aboutus', component: AboutUsF},
   { path: '/Leadership', name: 'leadership', component: Leadership},
   { path: '/Faq', name: 'faq', component: Faq},
   { path: '/Offer', name: 'con', component: Offer},
   { path: '/UserPage', name: 'userpage', component: UserPage, meta: {requiresAuth: true}},
   { path: '/Speaking', name: 'speak', component: Speaking, meta: {requiresAuth: true}},
   { path: '/Writing', name: 'write', component: Writing, meta: {requiresAuth: true}},
   { path: '/Reading', name: 'read', component: Reading, meta: {requiresAuth: true}},
   { path: '/Grammar', name: 'gram', component: Grammar, meta: {requiresAuth: true}},
   { path: '/Listening', name: 'listen', component: Listening, meta: {requiresAuth: true}},
   { path: '/File', name: 'file', component: File, meta: {requiresAuth: true}},
   { path: '/PlacementTest', name: 'placementTest', component: PlacementTest, meta: {requiresAuth: true}},
   { path: '/TheoryB1PPS', name: 'theoryB1PPS', component: TheoryB1PPS, meta: {requiresAuth: true}},
   { path: '/TheoryB1PPC', name: 'theoryB1PPC', component: TheoryB1PPC, meta: {requiresAuth: true}},
   { path: '/TaskB1PPS1', name: 'taskB1PPS1', component: TaskB1PPS1, meta: {requiresAuth: true}},
   { path: '/TaskB1PPS2', name: 'taskB1PPS2', component: TaskB1PPS2, meta: {requiresAuth: true}},
   { path: '/TaskB1PPS3', name: 'taskB1PPS3', component: TaskB1PPS3, meta: {requiresAuth: true}},
   { path: '/ExamB1PPS', name: 'examB1PPS', component: ExamB1PPS, meta: {requiresAuth: true}},
   { path: '/AboutUs', name: 'aboutus', component: AboutUs},
   { path: '/TermsOFUse', name: 'termsofuse', component: TermsOFUse},
   { path: '/PrivacyPolicy', name: 'pp', component: PrivacyPolicy},
   { path: '/login', name:"log", component: Login} 

 ]
 
 Vue.use(VueRouter)
 // FIRESTORE
 var db = firebase.firestore();
 db.collection("usersTest").add({
  grammar: 0,
  speaking: 0,
  writing: 0,
  reading: 0,
  listening: 0,
  level: "Unknown"
})
.then((docRef) => {
  console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
  console.error("Error adding document: ", error);
});

db.collection("Users").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
  });
});
 //
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

window.onunload = async function () {
      try{
           await firebase.auth().signOut();
      }catch(err)
      {
          console.log(err)
      }
  }

