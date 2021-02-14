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
          Lesson 1. <router-link>Present perfect simple</router-link>
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
  <b-container v-if="level==='B1'" class="container  p-3 mb-3 mt-1 mr-auto ml-auto margin5 background-bluish" fluid>
    <b-row>
      <b-col class="col-md-4 p-3 border-right text-center border-success">
        <b-row>
          <b-col class="text-center text-size-big border-bottom border-success pb-3">
            <span>Theory</span>
          </b-col>
        </b-row>
        <b-row class="p-3 text-medium">
          Lesson 2. Present perfect countinous
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
            grammar: 0,
            speaking: 0,
            writing: 0,
            reading: 0,
            listening: 0,
            level: '',
        }
    },
    mounted: function() //Pierwszorazowo załaduj dane
    {
       var db = firebase.firestore();
      db.collection(this.email).get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.data().speaking);
        this.grammar = doc.data().grammar;
        this.reading = doc.data().reading;
        this.speaking = doc.data().speaking;
        this.writing = doc.data().writing;
        this.listening = doc.data().listening;
        this.level = doc.data().level;
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
</style>