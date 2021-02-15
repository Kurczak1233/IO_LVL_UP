<template>
<body>
  <b-container class="container text-center p-3 mb-3 mt-5 mr-auto ml-auto margin5 background-bluish" fluid>
      <b-row class="p-4">
        <b-col class="mb-3 text-size-big mt-auto mb-auto"  cols="12"> Grammar lessons available on <span class="text-danger">{{level}}</span> level </b-col>
      </b-row>
  </b-container>

  <!--DLA B2-->

  <b-container v-if="level==='B2'" class="container  p-3 mb-3 mt-1 mr-auto ml-auto margin5 background-bluish" fluid>
    <b-row>
      <b-col>
        <span>Tutaj będą dostępne lekcje na B2</span>
      </b-col>
    </b-row>
  </b-container>

<!--DLA B1-->

  <b-container v-if="level==='B1'" class="container  p-3 mb-3 mt-1 mr-auto ml-auto margin5 background-bluish" fluid>
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
          <b-col class="col-8 text-center ">
            Training exercises
            <b-col><router-link to="/TaskB1PPS1" id="TaskB1PPS1">Present perfect simple task 1</router-link></b-col>
            <b-col><router-link to="/TaskB1PPS2" id="TaskB1PPS2">Present perfect simple task 2</router-link></b-col>
            <b-col><router-link to="/TaskB1PPS3" id="TaskB1PPS3">Present perfect simple task 3</router-link></b-col>
            <b-col><router-link to="/TaskB1PPS4" id="TaskB1PPS4">Present perfect simple task 4</router-link></b-col>
          </b-col>
          <b-col class="col-4 text-center">
            <p>Exam</p>
            <b-button variant="warning" disabled class="btn-lg">Button</b-button>
            <p class="font-size-small text-danger">Complete your tasks first!</p>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row>
      
    </b-row>
  </b-container>
  <b-container v-if="level==='B1'" class="container  p-3 mb-3 mt-1 mr-auto ml-auto margin5 background-bluish" fluid>
    <b-row>
      <b-col class="col-md-4 p-3 border-right text-center border-success">
        <b-row>
          <b-col class="text-center text-size-big border-bottom border-success pb-3">
            <span>Theory</span>
          </b-col>
        </b-row >
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
      </b-col>
    </b-row>
    <b-row>
      
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
<!--DLA B1-->

</body>
</template>

<script>
import { firebase } from '@firebase/app'
import '@firebase/auth'
export default {
name: 'Grammar',
data: function()
    {
        return {
            loggedIn: false,
            email: firebase.auth().currentUser.email,
            name: firebase.auth().currentUser.displayName,
            level: '',
            sth: false
        }
    },
    created: function()
    {
      this.sth = this.$route.params.sth;
    },
    mounted: function()
    {
       var db = firebase.firestore();
      db.collection(this.email).get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.data().speaking);
        this.level = doc.data().level;
        
        });
    });
    },
    methods: 
    {
      TaskSolved: function()
      {
        console.log(this.sth);
      }
    },
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