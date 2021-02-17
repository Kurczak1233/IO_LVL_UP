<template>
    <body>
      <UserNavigation :level="level"></UserNavigation>
        <b-container fluid v-if="level !== 'Unknown'">
          <b-row>
          <b-col class="col-4 pt-3 text-center color-bluish border-right border-bottom-4 border-success" fluid id="aside">
              <b-row>
                <b-col class="col-12 mb-3 text-center font-large">Your level: {{level}}</b-col>
              </b-row>
              <b-row>
                <b-col class="col-5 mt-auto mb-auto text-center font-large"><p class="d-none d-md-block">Available classes:</p></b-col>
                <b-list-group class="col-11 pr-1 ml-auto mr-auto ml-md-0 mr-md-0 col-md-6">
  <b-list-group-item class="" variant="info" href="#" to="/Speaking"><b-button class="btn form-control d-md-block d-none" variant="primary">Speaking</b-button><span class="d-md-none text-primary">Speaking</span></b-list-group-item>
  <b-list-group-item class="" variant="info" href="#" to="/Writing"><b-button class="btn form-control d-md-block d-none" variant="success">Writing</b-button><span class="d-md-none text-success">Writing</span></b-list-group-item>
  <b-list-group-item class="" variant="info" href="#" to="/Grammar"><b-button class="form-control btn d-md-block d-none" variant="info">Grammar</b-button><span class="d-md-none text-info">Grammar</span></b-list-group-item>
  <b-list-group-item class="" variant="info" href="#" to="/Reading"><b-button class="form-control btn d-md-block d-none" variant="danger">Reading</b-button><span class="d-md-none text-danger">Reading</span></b-list-group-item>
  <b-list-group-item class="" variant="info" href="#" to="/Listening"><b-button class="form-control btn d-md-block d-none" variant="warning">Listening</b-button><span class="d-md-none">Listening</span></b-list-group-item>
  <b-list-group-item class="mt-5" variant="info" href="#" to="/File" ><b-button class="form-control btn d-md-block d-none" variant="secondary">Download</b-button><span class="d-md-none text-secondary">Download</span></b-list-group-item>
            </b-list-group>
              </b-row>
              <b-row>
                <b-col class="col-12 mt-4 mb-3"><i>Available lessons left: (35 hours)</i></b-col>
              </b-row>
          </b-col>
          <b-col class="col-8 text-center color-bluish font-large" fluid id="main">
                Hello: <p class="text-danger">{{name}}!</p><!-- Lepiej by było imię!-->

                                <b-row>
                    <b-col class="col-12"> Your actual progress: 
                    <b-row>
                      <b-col class="col-10 ml-auto mr-auto">
                      <div class="progress">
                      <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" :style="SpeakingWidth" :aria-valuenow="SpeakingWidth" aria-valuemin="0" aria-valuemax="100">Speaking</div>
                    </div>
                    <p>
                    </p>
                    <div class="progress">
                      <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" :style="WritingWidth" :aria-valuenow="WritingWidth" aria-valuemin="0" aria-valuemax="100">Writing</div>
                    </div>
                    <p>
                    </p>
                    <div class="progress">
                      <div class="progress-bar progress-bar-striped progress-bar-animated  bg-info" role="progressbar" :style="GrammarWidth" :aria-valuenow="GrammarWidth" aria-valuemin="0" aria-valuemax="100">Grammar</div>
                    </div>
                    <p>
                    </p>
                    <div class="progress">
                      <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" :style="ReadingWidth" :aria-valuenow="ReadingWidth" aria-valuemin="0" aria-valuemax="100">Reading</div>
                    </div>
                    <p>
                    </p>
                    <div class="progress">
                      <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" :style="ListeningWidth" :aria-valuenow="ListeningWidth" aria-valuemin="0" aria-valuemax="100">Listening</div>
                    </div>
                    </b-col>
                    </b-row>
                    <b-row class="mt-5">
                      <b-col class="text center text-danger font-small">
                        You are not allowed to attempt an FCE/CAE exam yet! Finish your lessons first!
                      </b-col>
                    </b-row>
                  </b-col>
                </b-row>
                </b-col>
                
          </b-row>
        </b-container>
      <b-container fluid v-if="level === 'Unknown'">
        <b-row>
          <b-col class="col-12 pt-3 text-center color-bluish border-right border-bottom-4 border-success" fluid id="aside">
              <b-row>
                <b-col class="col-12 mb-3 text-center font-large">Your level: <span class="text-danger">{{level}}</span></b-col>
              </b-row>
              <b-row class="row text-center pb-1"><b-col>In order to have access to our resources, you have to </b-col></b-row>
              <b-row class="pb-3">
                <b-col class="text-center"><router-link to="/PlacementTest"><button class="btn btn-warning">Take placement test!</button></router-link></b-col>
              </b-row>
          </b-col>
        </b-row>
      </b-container>
    </body>
</template>

<script>
import UserNavigation from '../src/components/UserNavigation.vue'

import { firebase } from '@firebase/app'
import '@firebase/auth'

export default {
     components: {
    UserNavigation
  },
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
    beforeUpdate: function() //Przed załadowaniem strony załaduj dane.
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
    },
    computed: {
      SpeakingWidth()
      {
        return{
          width: `${this.speaking}%`
        }
      },
      ReadingWidth()
      {
        return{
          width: `${this.reading}%`
        }
      },
      ListeningWidth()
      {
        return{
          width: `${this.listening}%`
        }
      },
      WritingWidth()
      {
        return{
          width: `${this.writing}%`
        }
      },
       GrammarWidth()
      {
        return{
          width: `${this.grammar}%`
        }
      }
    }
// function assignValues(prop)
// {
//       this.grammar = doc.data().grammar;
//       this.speaking= doc.data().speaking;
//       this.writing= doc.data().writing;
//       this.reading= doc.data().reading;
//       this.listening= doc.data().listening;
//       this.level = doc.data().level;
// }
        
    
}                  
</script>

<style scoped>
.color-bluish
{
  background-color: rgb(105, 208, 245);
}
.rounded-edges-left
{
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
}
.rounded-edges-right
{
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
}
.font-large
{
  font-size: 1.5rem;
}
.font-medium
{
  font-size: 1.2rem;
}
.font-small
{
  font-size:1rem;
}
</style>