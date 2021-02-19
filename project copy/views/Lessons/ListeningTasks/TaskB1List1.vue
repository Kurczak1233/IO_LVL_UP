<template>
    <body>
    <b-container v-if="formalConsent === false" class="col-10 mt-5 col-md-8 col-xl-8 mr-auto ml-auto background-bluish" fluid>
        <b-row>
            <b-col class="text-center p-3"><p>You are in tasks section, please remember that you are constantly <b>LEARNING</b> so, do not forget to make notes, and if necessary - repeat quizes!</p>
                <p>You won't be scoring any points here, so do not panic if you chose a wrong answear, just pick a new one.</p>
                <p>Finishing all quizes will allow you to make an attempt in solving the exam!</p>
                <b-col class="mt-3"><b-button class="btn btn-warning" type="button" v-on:click="GiveConsent">Confirm</b-button></b-col>
            </b-col>
        </b-row>
    </b-container>
     <b-container v-if="formalConsent === true" class="col-12 col-sm-10 mt-5 col-md-8 col-xl-8 mr-auto ml-auto background-bluish p-3" fluid>
        <b><h3><i>Listening 4</i></h3></b>
            <table class="table table-striped">
                <tr>
                <th scope="row">1</th>
                <th>How did the female speaker feel about the event?</th>
                <td v-on:click="inputClickedFalse">Apologetic.</td>
                <td v-on:click="inputClickedRight">Encouraged.</td>
                <td v-on:click="inputClickedFalse">Disappointed.</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <th>What is the speaker's objective?</th>
                <td v-on:click="inputClickedFalse">To explain something.</td>
                <td v-on:click="inputClickedFalse">To convince people.</td>
                <td v-on:click="inputClickedRight">To persuade people.</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <th>What benefit does she get from doing this activity?</th>
                <td v-on:click="inputClickedRight">It improves her relationships with people.</td>
                <td v-on:click="inputClickedFalse">It makes her more flexible.</td>
                <td v-on:click="inputClickedFalse">It makes her fitter.</td>
                </tr>
                <tr>
                <th scope="row">4</th>
                <th>What is her objective?</th>
                <td v-on:click="inputClickedFalse">To explain how good her staff are.</td>
                <td v-on:click="inputClickedRight">To explain how they use technology.</td>
                <td v-on:click="inputClickedFalse">To explain how well they understand the market.
</td>
                </tr>
                <tr>
                <th scope="row">5</th>
                <th>Why is she doing that?</th>
                <td v-on:click="inputClickedFalse">To explain the good and bad sides to being a pilot.</td>
                <td v-on:click="inputClickedFalse">To convince other people to become pilots.</td>
                <td v-on:click="inputClickedRight">To explain why she chose her job.</td>
                </tr>
                <tr>
                <th scope="row">6</th>
                <th>What is her main message?</th>
                <td v-on:click="inputClickedRight">She would prefer less interference. </td>
                <td v-on:click="inputClickedFalse">Her job is too difficult. </td>
                <td v-on:click="inputClickedFalse">Her students are difficult to handle.</td>
                </tr>
                <tr>
                <th scope="row">7</th>
                <th>What is the speaker doing?</th>
                <td v-on:click="inputClickedFalse">Speaking to lots of people. </td>
                <td v-on:click="inputClickedFalse">Speaking to her boss.</td>
                <td v-on:click="inputClickedRight">Speaking to a friend.</td>
                </tr>
                <tr>
                <th scope="row">8</th>
                <th>How does the caller feel?</th>
                <td v-on:click="inputClickedFalse">He is against the development. </td>
                <td v-on:click="inputClickedRight">He is in two minds about how he feels.</td>
                <td v-on:click="inputClickedFalse">He strongly supports the development.</td>
                </tr>
            </table>
            <b-row class="mt-4 mb-3">
            <b-col class="text-center"><audio src="https://github.com/Kurczak1233/IO_LVL_UP/blob/main/project%20copy/src/assets/List%20Task%204.mp3?raw=true" controls ></audio>

            </b-col>
            </b-row>
            <b-row>  
                <b-col class="mt-3 mb-3 text-center"><router-link :to="{name: 'listen', params: {solvedB1List1: true}}" ><b-button class="btn btn-warning" type="button" v-on:click="AddSolvedToUserDb">Solved!</b-button></router-link></b-col>
            </b-row>   
     </b-container>
    </body>
</template>

<script>
import { firebase } from '@firebase/app'
//import '@firebase/auth'
export default {
    name: 'Listening',
        data: function()
    {
      return {
          formalConsent: false,
          email: firebase.auth().currentUser.email,
          solvedB1List1: false
      }
    },
    methods:
    {
        GiveConsent: function()
        {
            this.formalConsent = true;
        },
        inputClickedRight: function(event)
  {
      //this.$el.setAttribute("style", "background: green;");
    event.target.setAttribute("style", "background: rgb(128, 255, 0); "); 
  },
  inputClickedFalse: function(event)
  {
    event.target.setAttribute("style", "background: rgb(255, 64, 0)");
  },
  AddSolvedToUserDb: function()
  {
      this.solvedB1List1 = true;
      var db = firebase.firestore();
      db.collection(this.email).doc(this.email).set({solvedB1List1: this.solvedB1List1} ,{merge:true})
  }
    }
}
</script>

<style scoped>
table td:hover{
  background-color: #ffc107;
}
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
.font-bigger
{
    font-size: 1.4rem;
}
.font-medium{
    font-size: 1.1rem;
}
@media (max-width: 500px)
 { 
tr {
font-size: 0.7rem;
 }; 
 }
</style>