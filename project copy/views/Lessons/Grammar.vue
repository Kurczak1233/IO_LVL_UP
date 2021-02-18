<template>
<body>
   <UserNavigation :IsInGrammar="IsInGrammar"></UserNavigation>
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
            <router-link to="/TheoryB1PPS">Present perfect simple</router-link>
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
            <b-col class="mt-1 mb-1"><router-link to="/TaskB1PPS1" class="text-success" v-if="solvedB1PPS1 === true" id="TaskB1PPS1">FCE preparation task 1</router-link><router-link to="/TaskB1PPS1" class="text-danger" v-else id="TaskB1PPS1">FCE preparation task 1</router-link></b-col>
            <b-col class="mt-1 mb-1"><router-link to="/TaskB1PPS2" class="text-success" v-if="solvedB1PPS2 === true" id="TaskB1PPS2">Present perfect simple task 2</router-link><router-link to="/TaskB1PPS2" class="text-danger" v-else id="TaskB1PPS2">Present perfect simple task 2</router-link></b-col>
            <b-col class="mt-1 mb-1"><router-link to="/TaskB1PPS3" class="text-success" v-if="solvedB1PPS3 === true" id="TaskB1PPS3">Present perfect simple task 3</router-link><router-link to="/TaskB1PPS3" class="text-danger" v-else id="TaskB1PPS3">Present perfect simple task 3</router-link></b-col>
          </b-col>
          <b-col class="col-12 col-md-4 text-center">
            <p>Exam</p>
            <div v-if="solvedB1PPS1 === true && solvedB1PPS2 === true && solvedB1PPS3 === true">
            <router-link :to="{name: 'examB1PPS', params: {QuizesCount: QuizesCount}}"><b-button  variant="success" disabled class="btn-lg btn" v-if="ExamB1PPSPassed===true" type="button" aria-describedby="take the exam button">Passed!</b-button><b-button  variant="warning" class="btn-lg btn" v-else type="button" aria-describedby="take the exam button">Exam</b-button></router-link>
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
            <router-link to="/TheoryB1PPC">Present perfect continous</router-link>
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
            <b-col class="mt-1 mb-1"><router-link to="/TaskB1PPC1" class="text-success" v-if="solvedB1PPC1 === true" id="TaskB1PPC1">FCE preparation task 1</router-link><router-link to="/TaskB1PPC1" class="text-danger" v-else id="TaskB1PPC1">FCE preparation task 1</router-link></b-col>
            <b-col class="mt-1 mb-1"><router-link to="/TaskB1PPC2" class="text-success" v-if="solvedB1PPC2 === true" id="TaskB1PPC2">Present perfect continous task 2</router-link><router-link to="/TaskB1PPC2" class="text-danger" v-else id="TaskB1PPC2">Present perfect continous task 2</router-link></b-col>
            <b-col class="mt-1 mb-1"><router-link to="/TaskB1PPC3" class="text-success" v-if="solvedB1PPC3 === true" id="TaskB1PPC3">Present perfect continous task 3</router-link><router-link to="/TaskB1PPC3" class="text-danger" v-else id="TaskB1PPC3">Present perfect continous task 3</router-link></b-col>
          </b-col>
          <b-col class="col-12 col-md-4 text-center">
            <p>Exam</p>
            <div v-if="solvedB1PPC1 === true && solvedB1PPC2 === true && solvedB1PPC3 === true">
            <router-link :to="{name: 'examB1PPC', params: {QuizesCount: QuizesCount}}"><b-button  variant="success" disabled class="btn-lg btn" v-if="ExamB1PPCPassed===true" type="button" aria-describedby="take the exam button">Passed!</b-button><b-button  variant="warning" class="btn-lg btn" v-else type="button" aria-describedby="take the exam button">Exam</b-button></router-link>
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
import UserNavigation from '../../src/components/UserNavigation.vue'
import LessonsHeader from '../../src/components/LessonsHeader.vue'
import { firebase } from '@firebase/app'
import '@firebase/auth'
export default {
components: 
{
  UserNavigation,
  LessonsHeader
},
name: 'Grammar',
data: function()
    {
        return {
            loggedIn: false,
            email: firebase.auth().currentUser.email,
            name: firebase.auth().currentUser.displayName,
            solvedB1PPS1: false,
            solvedB1PPS2: false,
            solvedB1PPS3: false,
            solvedB1PPC1: false,
            solvedB1PPC2: false,
            solvedB1PPC3: false,
            ExamB1PPSPassed: false,
            ExamB1PPCPassed: false,
            IsInGrammar: true,
            level: '',
            QuizesCount: 2//Temporary 2! (only 2 quizes)
        }
    },
    // created: function()
    // {
    //   this.solvedB1PPS1 = this.$route.params.solvedB1PPS1;
    //   this.solvedB1PPS2 = this.$route.params.solvedB1PPS2;
    //   this.solvedB1PPS3 = this.$route.params.solvedB1PPS3;
    //   this.ExamB1PPSPassed = this.$route.params.ExamB1PPSPassed;

    // },
    mounted: function() //Initialize site
    {
      console.log(this.QuizesCount);
       var db = firebase.firestore();
      db.collection(this.email).get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => { 
        this.level = doc.data().level;
        this.solvedB1PPS1 = doc.data().solvedB1PPS1;
        this.solvedB1PPS2 = doc.data().solvedB1PPS2;
        this.solvedB1PPS3 = doc.data().solvedB1PPS3;
        this.solvedB1PPC1 = doc.data().solvedB1PPC1;
        this.solvedB1PPC2 = doc.data().solvedB1PPC2;
        this.solvedB1PPC3 = doc.data().solvedB1PPC3;
        this.ExamB1PPSPassed = doc.data().ExamB1PPSPassed;
        this.ExamB1PPCPassed = doc.data().ExamB1PPCPassed;
        });
    });
    },
        beforeUpdate: function() //Before refreshing!
    {
       var db = firebase.firestore();
      db.collection(this.email).get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
       this.level = doc.data().level;
        this.solvedB1PPS1 = doc.data().solvedB1PPS1;
        this.solvedB1PPS2 = doc.data().solvedB1PPS2;
        this.solvedB1PPS3 = doc.data().solvedB1PPS3;
        this.solvedB1PPC1 = doc.data().solvedB1PPC1;
        this.solvedB1PPC2 = doc.data().solvedB1PPC2;
        this.solvedB1PPC3 = doc.data().solvedB1PPC3;
        this.ExamB1PPSPassed = doc.data().ExamB1PPSPassed;
        this.ExamB1PPCPassed = doc.data().ExamB1PPCPassed;
    });
});
    }
}
</script>

<style scoped>
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
table td:hover{
  background-color: #ffc107;
}
.text-medium
{
  font-size: 1.4rem;
}
.font-size-small
{
  font-size: 0.6rem;
}
</style>