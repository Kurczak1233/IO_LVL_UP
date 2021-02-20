<template>
  <body>
    <UserNavigation :IsInSpeaking="IsInSpeaking"></UserNavigation>
    <LessonsHeader :level="level"></LessonsHeader>

   <!--DLA B2-->
  <b-container v-if="level==='B2'" class="container  p-3 mb-3 mt-1 mr-auto ml-auto margin5 background-bluish" fluid>
    <b-row>
      <b-col>
        <span>Tutaj będą dostępne lekcje na B2</span>
      </b-col>
    </b-row>
  </b-container>

<!--DLA B1-->
  <b-container v-if="level==='B1'" id="B1Quiz" class="container  p-3 mb-3 mt-1 mr-auto ml-auto margin5 background-bluish" fluid>
    <b-row>
          <b-col class="col-12 text-center">
            <p class="text-size-big">Training exercises</p>
            <b-col class="mt-1 mb-1"><router-link to="/SpeakingB1Task1" class="text-success" v-if="solvedB1Speaking1 === true" id="SpeakingB1Task1">Speaking task 1</router-link><router-link to="/SpeakingB1Task1" class="text-danger" v-else id="SpeakingB1Task1">Speaking task 1</router-link></b-col>
            <b-col class="mt-1 mb-1"><router-link to="/SpeakingB1Task2" class="text-success" v-if="solvedB1Speaking2 === true" id="SpeakingB1Task2">Speaking task 2</router-link><router-link to="/SpeakingB1Task2" class="text-danger" v-else id="SpeakingB1Task2">Speaking task 2</router-link></b-col>
            <b-col class="mt-1 mb-1"><router-link to="/SpeakingB1Task3" class="text-success" v-if="solvedB1Speaking3 === true" id="SpeakingB1Task3">Speaking task 3</router-link><router-link to="/SpeakingB1Task3" class="text-danger" v-else id="SpeakingB1Task3">Speaking task 3</router-link></b-col>
          </b-col>
        </b-row>
  </b-container>
  
<!--DLA A2-->

<b-container v-if="level==='A2'" class="container  p-3 mb-3 mt-1 mr-auto ml-auto margin5 background-bluish" fluid>
    <b-row>
      <b-col>
        <span>Tutaj będą dostępne lekcje na A2</span>
      </b-col>
    </b-row>
  </b-container>
  </body>
</template>

<script>
import UserNavigation from '../../src//components/UserNavigation.vue'
import LessonsHeader from '../../src/components/LessonsHeader.vue'
import { firebase } from '@firebase/app'
import '@firebase/auth'
export default {
name: 'Listening',
components: 
{
  UserNavigation,
  LessonsHeader
},
data: function()
{
  return{
    email: firebase.auth().currentUser.email,
    name: firebase.auth().currentUser.displayName,
    IsInSpeaking: true,
    solvedB1Speaking1: false,        
    solvedB1Speaking2: false,        
    solvedB1Speaking3: false,        
    level: '',
  }
},
    mounted: function() //Initialize site
    {
       var db = firebase.firestore();
      db.collection(this.email).get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => { 
        this.level = doc.data().level;
        this.solvedB1Speaking1 = doc.data().solvedB1Speaking1;
        this.solvedB1Speaking2 = doc.data().solvedB1Speaking2;
        this.solvedB1Speaking3 = doc.data().solvedB1Speaking3;

        });
    });
    },
        created: function()
    {
      this.solvedB1Speaking1 = this.$route.params.solvedB1Speaking1;
      this.solvedB1Speaking2 = this.$route.params.solvedB1Speaking2;
      this.solvedB1Speaking3 = this.$route.params.solvedB1Speaking3;



    },
//     beforeUpdate: function() //Before refreshing!
//     {
//        var db = firebase.firestore();
//       db.collection(this.email).get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//        this.level = doc.data().level;
//         this.solvedB1List1 = doc.data().solvedB1List1;
//         this.solvedB1List2 = doc.data().solvedB1List2;
//         this.solvedB1List3 = doc.data().solvedB1List3;
//         this.solvedB1List4 = doc.data().solvedB1List4;
//         this.solvedB1List5 = doc.data().solvedB1List5;
//         this.ExamB1List1Passed = doc.data().ExamB1List1Passed;
//         this.ExamB1List2Passed = doc.data().ExamB1List2Passed;
//         this.ExamB1List3Passed = doc.data().ExamB1List3Passed;
//     });
// });
// }
}
</script>
<style scoped>
body
{
  background-color: rgb(217,218,211);
  width: 100%;
  height:100%;
}
.background-bluish
{
  background-color: rgb(105, 208, 245);
  border-radius: 20px;
}
.margin10
{
  margin-top: 10%;
}
.text-size-big
{
  font-size: 2rem;
}
#project-logo{
  height: 80px;
}
#banner{
  border-radius: 50px;
}
</style>
