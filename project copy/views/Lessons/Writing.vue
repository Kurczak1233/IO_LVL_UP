<template>
  <body>
    <UserNavigation :IsInWriting="IsInWriting"></UserNavigation>
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
      <b-col class="col-md-4 p-3 border-right text-center border-success">
        <b-row>
          <b-col class="text-center text-size-big border-bottom border-success pb-3">
            <span>Theory</span>
          </b-col>
        </b-row>
        <b-row class="p-3 text-medium">
          <b-col class="text-center">
            <router-link to="/TheoryB1WritingTips1">How to improve your writing - tips</router-link>
          </b-col>
        </b-row>
      </b-col>
      <b-col class="col-md-8 p-3">
        <b-row> 
          <b-col class="text-center text-size-big  border-bottom border-success pb-3">
            <span>Exercises</span>
          </b-col>
        </b-row>
        <b-row id="grammar-title-content">
          <b-col class="col-12 col-md-8 text-center">
            <p>Training exercises</p>
            <b-col class="mt-1 mb-1"><router-link to="/WritingB1Task1" class="text-success" v-if="solvedB1Writing1 === true" id="WritingB1Task1">FCE preparation task 1</router-link><router-link to="/WritingB1Task1" class="text-danger" v-else id="WritingB1Task1">FCE preparation task 1</router-link></b-col>
            <b-col class="mt-1 mb-1"><router-link to="/WritingB1Task2" class="text-success" v-if="solvedB1Writing1 === true" id="WritingB1Task2">Writing task 2</router-link><router-link to="/WritingB1Task2" class="text-danger" v-else id="WritingB1Task2">Writing task 2</router-link></b-col>
          </b-col>
          <b-col class="col-12 col-md-4 text-center">
            <p>Exam</p>
            <div v-if="solvedB1Writing1 === true && solvedB1Writing2 === true">
            <router-link :to="{name: 'WritingB1Exam1', params: {QuizesCount: QuizesCount}}"><b-button  variant="success" disabled class="btn-lg btn" v-if="ExamB1Writing1Passed===true" type="button" aria-describedby="take the exam button">Passed!</b-button><b-button  variant="warning" class="btn-lg btn" v-else type="button" aria-describedby="take the exam button">Exam</b-button></router-link>
            </div>
            <div v-else>
            <b-button variant="warning" disabled class="btn-lg">Exam</b-button>
            <p class="font-size-small text-danger">Complete your tasks first to attempt the exam!</p>
            </div>
          </b-col>
        </b-row>
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
    IsInWriting: true,
    solvedB1Writing1: false,        
    solvedB1Writing2: false,
    solvedB1Writing3: false,
    ExamB1Writing1Passed: false,
    level: '',
    QuizesCount: 1
  }
},
    mounted: function() //Initialize site
    {
       var db = firebase.firestore();
      db.collection(this.email).get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => { 
        this.level = doc.data().level;
        this.solvedB1Writing1 = doc.data().solvedB1Writing1;
        this.solvedB1Writing2 = doc.data().solvedB1Writing2;
        this.solvedB1Writing3 = doc.data().solvedB1Writing3;
        this.ExamB1Writing1Passed = doc.data().ExamB1Writing1Passed;

        });
    });
    },
        created: function()
    {
      this.solvedB1Writing1 = this.$route.params.solvedB1Writing1;
      this.solvedB1Writing2 = this.$route.params.solvedB1Writing2;
      this.solvedB1Writing3 = this.$route.params.solvedB1Writing3;
      this.ExamB1Writing1Passed = this.$route.params.ExamB1Writing1Passed;


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
<style >
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
.font-size-small
{
  font-size: 0.6rem;
}
</style>
