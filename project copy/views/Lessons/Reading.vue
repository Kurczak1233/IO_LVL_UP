<template>
  <body>
    <UserNavigation :IsInReading="IsInReading"></UserNavigation>
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
            <router-link to="/TheoryB1ReadingTips1">How to improve your reading - pracitcal tips</router-link>
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
            <b-col class="mt-1 mb-1"><router-link to="/ReadingB1Task1" class="text-success" v-if="solvedB1Read1 === true" id="ReadingB1Task1">FCE preparation task 1</router-link><router-link to="/ReadingB1Task1" class="text-danger" v-else id="ReadingB1Task1">FCE preparation task 1</router-link></b-col>
            <b-col class="mt-1 mb-1"><router-link to="/ReadingB1Task2" class="text-success" v-if="solvedB1Read2 === true" id="ReadingB1Task2">Reading task 2</router-link><router-link to="/ReadingB1Task2" class="text-danger" v-else id="ReadingB1Task2">Reading task 2</router-link></b-col>
            <b-col class="mt-1 mb-1"><router-link to="/ReadingB1Task3" class="text-success" v-if="solvedB1Read3 === true" id="ReadingB1Task3">Reading task 3</router-link><router-link to="/ReadingB1Task3" class="text-danger" v-else id="ReadingB1Task3">Reading task 3</router-link></b-col>
          </b-col>
          <b-col class="col-12 col-md-4 text-center">
            <p>Exam</p>
            <div v-if="solvedB1Read1 === true && solvedB1Read2 === true && solvedB1Read3 === true">
            <router-link :to="{name: 'ExamB1Reading1', params: {QuizesCount: QuizesCount}}"><b-button  variant="success" disabled class="btn-lg btn" v-if="ExamB1Read1Passed===true" type="button" aria-describedby="take the exam button">Passed!</b-button><b-button  variant="warning" class="btn-lg btn" v-else type="button" aria-describedby="take the exam button">Exam</b-button></router-link>
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
            <router-link to="/TheoryB1ReadingTips2">How to improve your test results - pracitcal tips</router-link>
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
            <b-col class="mt-1 mb-1"><router-link to="/ReadingB1Task4" class="text-success" v-if="solvedB1Read4 === true" id="ReadingB1Task4">FCE preparation task 1</router-link><router-link to="/ReadingB1Task4" class="text-danger" v-else id="ReadingB1Task4">FCE preparation task 1</router-link></b-col>
            <b-col class="mt-1 mb-1"><router-link to="/ReadingB1Task5" class="text-success" v-if="solvedB1Read5 === true" id="ReadingB1Task5">Reading task 2</router-link><router-link to="/ReadingB1Task5" class="text-danger" v-else id="ReadingB1Task5">Reading task 2</router-link></b-col>
          </b-col>
          <b-col class="col-12 col-md-4 text-center">
            <p>Exam</p>
            <div v-if="solvedB1Read4 === true && solvedB1Read5 === true">
            <router-link :to="{name: 'ExamB1Reading2', params: {QuizesCount: QuizesCount}}"><b-button  variant="success" disabled class="btn-lg btn" v-if="ExamB1Read2Passed===true" type="button" aria-describedby="take the exam button">Passed!</b-button><b-button  variant="warning" class="btn-lg btn" v-else type="button" aria-describedby="take the exam button">Exam</b-button></router-link>
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
    IsInReading: true,
    solvedB1Read1: false,        
    solvedB1Read2: false,
    solvedB1Read3: false,
    solvedB1Read4: false,
    solvedB1Read5: false,
    ExamB1Read1Passed: false,
    ExamB1Read2Passed: false,
    level: '',
    QuizesCount: 2
  }
},
    mounted: function() //Initialize site
    {
       var db = firebase.firestore();
      db.collection(this.email).get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => { 
        this.level = doc.data().level;
        console.log(this.level);
        this.solvedB1Read1 = doc.data().solvedB1Read1;
        this.solvedB1Read2 = doc.data().solvedB1Read2;
        this.solvedB1Read3 = doc.data().solvedB1Read3;
        this.solvedB1Read4 = doc.data().solvedB1Read4;
        this.solvedB1Read5 = doc.data().solvedB1Read5;
        this.ExamB1Read1Passed = doc.data().ExamB1Read1Passed;
        this.ExamB1Read2Passed = doc.data().ExamB1Read2Passed;
        });
    });
    },
        created: function()
    {
      this.solvedB1Read1 = this.$route.params.solvedB1Read1;
      this.solvedB1Read2 = this.$route.params.solvedB1Read2;
      this.solvedB1Read3 = this.$route.params.solvedB1Read3;
      this.solvedB1Read4 = this.$route.params.solvedB1Read4;
      this.solvedB1Read5 = this.$route.params.solvedB1Read5;
      this.ExamB1Read1Passed = this.$route.params.ExamB1Read1Passed;
      this.ExamB1Read2Passed = this.$route.params.ExamB1Read2Passed;

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
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#banner{
  border-radius: 50px;
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
.font-size-small
{
  font-size: 0.6rem;
}
</style>