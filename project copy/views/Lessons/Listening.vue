<template>
<body>
  <UserNavigation :IsInListening="IsInListening"></UserNavigation>
  <LessonsHeader :level="level"></LessonsHeader>

 <b-container v-if="level==='B2'" class="container  p-3 mb-3 mt-1 mr-auto ml-auto margin5 background-bluish" fluid>
    <b-row>
      <b-col>
        <span>Tutaj będą dostępne lekcje na B2</span>
      </b-col>
    </b-row>
  </b-container>


 <b-container v-if="level==='B1'" id="B1Quiz" class="container  p-3 mb-3 mt-1 mr-auto ml-auto margin5 background-bluish" fluid>
    <b-row>
      <b-col class="col-md-12 p-3">
        <b-row> 
          <b-col class="text-center text-size-big  border-bottom border-success pb-3">
            <span>Exercises</span>
          </b-col>
        </b-row>
        <b-row id="grammar-title-content">
          <b-col class="col-12 col-md-8 text-center">
            <p>Training exercises</p>
            <b-col class="mt-1 mb-1"><router-link to="/TaskB1List1" class="text-success" v-if="solvedB1List3 === true" id="TaskB1List1">Listening 3 practise</router-link><router-link to="/TaskB1List1" class="text-danger" v-else id="TaskB1List3">Listening 1 practise</router-link></b-col> 
            <b-col class="mt-1 mb-1"><router-link to="/TaskB1List2" class="text-success" v-if="solvedB1List4 === true" id="TaskB1List2">Listening 4 practise</router-link><router-link to="/TaskB1List2" class="text-danger" v-else id="TaskB1List4">Listening 2 practise</router-link></b-col> 
          </b-col>
          <b-col class="col-12 col-md-4 mt-3 mt-md-0 text-center">
            <p>Exam</p>
            <div v-if="solvedB1List1 === true && solvedB1List2 === true">
            <router-link :to="{name: 'ExamB1List1', params: {QuizesCount: QuizesCount}}"><b-button  variant="success" disabled class="btn-lg btn" v-if="ExamB1List2===true" type="button" aria-describedby="take the exam button">Passed!</b-button><b-button  variant="warning" class="btn-lg btn" v-else type="button" aria-describedby="take the exam button">Exam</b-button></router-link>
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
      <b-col class="col-md-12 p-3">
        <b-row> 
          <b-col class="text-center text-size-big  border-bottom border-success pb-3">
            <span>Exercises</span>
          </b-col>
        </b-row>
        <b-row id="grammar-title-content">
          <b-col class="col-12 col-md-8 text-center">
            <p>Training exercises</p>
            <b-col class="mt-1 mb-1"><router-link to="/TaskB1List3" class="text-success" v-if="solvedB1List3 === true" id="TaskB1List3">Listening 3 practise</router-link><router-link to="/TaskB1List3" class="text-danger" v-else id="TaskB1List3">Listening 3 practise</router-link></b-col> 
            <b-col class="mt-1 mb-1"><router-link to="/TaskB1List4" class="text-success" v-if="solvedB1List4 === true" id="TaskB1List4">Listening 4 practise</router-link><router-link to="/TaskB1List4" class="text-danger" v-else id="TaskB1List4">Listening 4 practise</router-link></b-col> 
          </b-col>
          <b-col class="col-12 col-md-4 mt-3 mt-md-0 text-center">
            <p>Exam</p>
            <div v-if="solvedB1List3 === true && solvedB1List4 === true">
            <router-link :to="{name: 'ExamB1List2', params: {QuizesCount: QuizesCount}}"><b-button  variant="success" disabled class="btn-lg btn" v-if="ExamB1List2===true" type="button" aria-describedby="take the exam button">Passed!</b-button><b-button  variant="warning" class="btn-lg btn" v-else type="button" aria-describedby="take the exam button">Exam</b-button></router-link>
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
      <b-col class="col-md-12 p-3">
        <b-row> 
          <b-col class="text-center text-size-big  border-bottom border-success pb-3">
            <span>Exercises</span>
          </b-col>
        </b-row>
        <b-row id="grammar-title-content">
          <b-col class="col-12 col-md-8 text-center">
            <p>Training exercises</p>
            <b-col class="mt-1 mb-1"><router-link to="/TaskB1List5" class="text-success" v-if="solvedB1List5 === true" id="TaskB1List5">FCE preparation task 1</router-link><router-link to="/TaskB1PPC1" class="text-danger" v-else id="TaskB1PPC1">FCE preparation task 1</router-link></b-col> 
          </b-col>
          <b-col class="col-12 col-md-4 mt-3 mt-md-0 text-center">
            <p>Exam</p>
            <div v-if="solvedB1List5 === true">
            <router-link :to="{name: 'ExamB1List3', params: {QuizesCount: QuizesCount}}"><b-button  variant="success" disabled class="btn-lg btn" v-if="ExamB1List3===true" type="button" aria-describedby="take the exam button">Passed!</b-button><b-button  variant="warning" class="btn-lg btn" v-else type="button" aria-describedby="take the exam button">Exam</b-button></router-link>
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

   <b-container v-if="level==='A2'" class="container  p-3 mb-3 mt-1 mr-auto ml-auto margin5 background-bluish" fluid>
    <b-row>
      <b-col>
        <span>Tutaj będą dostępne lekcje na B2</span>
      </b-col>
    </b-row>
  </b-container>
<b><h3><i>Kendall Jenner</i></h3></b>
<table class="table table-striped">
  <thead>
    <tr>
      <th scope="row">1</th>
      <td>Kendall spends a load of time in her house. </td>
      <td>True</td>
      <td>False x</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">2</th>
      <td>She used to walk dogs for a living.</td>
      <td>True x</td>
      <td>False</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Cancelled flights piss her off</td>
      <td>True</td>
      <td>False x</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>She spent a fortune on a vehicle.</td>
      <td>True x</td>
      <td>False</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>Chloe is her least favourite sister.</td>
      <td>True</td>
      <td>False x</td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td>She wishes she could become more independent.</td>
      <td>True </td>
      <td>False x</td>
    </tr>
      </tbody>
</table>
<b-row class="mt-2 mb-2">
  <b-col class="text-center"><audio src="https://github.com/Kurczak1233/IO_LVL_UP/blob/Daniel/project%20copy/src/assets/listening.mp3?raw=true" controls ></audio>

  </b-col>
</b-row>   
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
    IsInListening: true,
    solvedB1List1: false,        
    solvedB1List2: false,
    solvedB1List3: false,
    solvedB1List4: false,
    solvedB1List5: false,
    ExamB1List1: false,
    ExamB1List2: false,
    ExamB1List3: false,
    level: '',
    QuizesCount: 3
  }
},
    mounted: function() //Initialize site
    {
       var db = firebase.firestore();
      db.collection(this.email).get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => { 
        this.level = doc.data().level;
        console.log(this.level);
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