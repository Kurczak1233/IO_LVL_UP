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
                <th>Why does she like the activity?</th>
                <td v-on:click="inputClickedFalse">Because it's very demanding.</td>
                <td v-on:click="inputClickedFalse">Because young people do it..</td>
                <td v-on:click="inputClickedRight">Because age is not a restriction.</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <th>What problem does she describe?</th>
                <td v-on:click="inputClickedRight">Getting blocked on an idea.</td>
                <td v-on:click="inputClickedFalse">Getting new ideas.</td>
                <td v-on:click="inputClickedFalse">Applying the ideas she has.</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <th>What is she doing?</th>
                <td v-on:click="inputClickedFalse">Explaining why a problem exists.</td>
                <td v-on:click="inputClickedRight">Describing a situation.</td>
                <td v-on:click="inputClickedFalse">Trying to persuade someone to do something.</td>
                </tr>
                <tr>
                <th scope="row">4</th>
                <th>What is the speaker saying?</th>
                <td v-on:click="inputClickedFalse">She will never go back.</td>
                <td v-on:click="inputClickedFalse">She will tell her friends about it.</td>
                <td v-on:click="inputClickedRight">She is going to be nice to someone.</td>
                </tr>
                <tr>
                <th scope="row">5</th>
                <th>How does the woman feel?</th>
                <td v-on:click="inputClickedRight">Irritated.</td>
                <td v-on:click="inputClickedFalse">Worried.</td>
                <td v-on:click="inputClickedFalse">Excited.</td>
                </tr>
                <tr>
                <th scope="row">6</th>
                <th>What is important to her?</th>
                <td v-on:click="inputClickedFalse">Knowing what she has to cook. </td>
                <td v-on:click="inputClickedRight">Knowing where things are.</td>
                <td v-on:click="inputClickedFalse">Knowing the quality of the ingredients.</td>
                </tr>
                <tr>
                <th scope="row">7</th>
                <th>What problem is she describing?</th>
                <td v-on:click="inputClickedFalse">Getting the right price. </td>
                <td v-on:click="inputClickedFalse">Getting the right location.</td>
                <td v-on:click="inputClickedRight">Getting a good location at the right price.</td>
                </tr>
                <tr>
                <th scope="row">8</th>
                <th>What is she describing?</th>
                <td v-on:click="inputClickedRight">Why she took up the activity. </td>
                <td v-on:click="inputClickedFalse">Why she enjoys it.</td>
                <td v-on:click="inputClickedFalse">Why other people would enjoy it.</td>
                </tr>
            </table>
            <b-row class="mt-4 mb-3">
            <b-col class="text-center"><audio src="https://github.com/Kurczak1233/IO_LVL_UP/blob/main/project%20copy/src/assets/List%20Task%204.mp3?raw=true" controls ></audio>

            </b-col>
            </b-row>
            <b-row>  
                <b-col class="mt-3 mb-3 text-center"><router-link :to="{name: 'listen', params: {solvedB1List2: true}}" ><b-button class="btn btn-warning" type="button" v-on:click="AddSolvedToUserDb">Solved!</b-button></router-link></b-col>
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
          solvedB1List2: false
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
      this.solvedB1List2 = true;
      var db = firebase.firestore();
      db.collection(this.email).doc(this.email).set({solvedB1List2: this.solvedB1List2} ,{merge:true})
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