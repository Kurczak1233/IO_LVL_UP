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
                <th>When asked why she rowed across the Pacific, Ros explained that</th>
                <td v-on:click="inputClickedFalse">she feels it was a mistake.</td>
                <td v-on:click="inputClickedFalse">she had very strong reasons.</td>
                <td v-on:click="inputClickedRight">she wasn't sure.</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <th>Why did Ros choose to row rather than do another activity?</th>
                <td v-on:click="inputClickedRight">She felt it suited her personality.</td>
                <td v-on:click="inputClickedFalse">She couldn't explain it.</td>
                <td v-on:click="inputClickedFalse">She had some experience of rowing.</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <th>The time Ros spent at university prepared her for a career as</th>
                <td v-on:click="inputClickedFalse">an adviser.</td>
                <td v-on:click="inputClickedRight">a legal analyst.</td>
                <td v-on:click="inputClickedFalse">an entrepreneur.</td>
                </tr>
                <tr>
                <th scope="row">4</th>
                <th>How does Ros describe her life in London before undertaking her adventure?</th>
                <td v-on:click="inputClickedFalse">Satisfying.</td>
                <td v-on:click="inputClickedFalse">Unfulfilled.</td>
                <td v-on:click="inputClickedRight">Challenging.</td>
                </tr>
                <tr>
                <th scope="row">5</th>
                <th>When speaking about social media, what point does Ros make about the timing of her row?</th>
                <td v-on:click="inputClickedRight">She was fortunate to do it at the right time.</td>
                <td v-on:click="inputClickedFalse">She should have waited.</td>
                <td v-on:click="inputClickedFalse">She should have done it earlier.</td>
                </tr>
                <tr>
                <th scope="row">6</th>
                <th>Ros describes the incident when she was rescued by the US coast guard</th>
                <td v-on:click="inputClickedFalse">with indifference. </td>
                <td v-on:click="inputClickedRight">with gratitude.</td>
                <td v-on:click="inputClickedFalse">with regret.</td>
                </tr>
                <tr>
                <th scope="row">7</th>
                <th>How does Ros describe the experience of being airlifted into a helicopter?</th>
                <td v-on:click="inputClickedFalse">It was very unpleasant. </td>
                <td v-on:click="inputClickedFalse">It was nothing out of the ordinary.</td>
                <td v-on:click="inputClickedRight">It was part of the adventure she was having.</td>
                </tr>
            </table>
            <b-row class="mt-4 mb-3">
            <b-col class="text-center"><audio src="https://github.com/Kurczak1233/IO_LVL_UP/blob/main/project%20copy/src/assets/List%20Task%204.mp3?raw=true" controls ></audio>

            </b-col>
            </b-row>
            <b-row>  
                <b-col class="mt-3 mb-3 text-center"><router-link :to="{name: 'listen', params: {solvedB1List4: true}}" ><b-button class="btn btn-warning" type="button" v-on:click="AddSolvedToUserDb">Solved!</b-button></router-link></b-col>
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
          solvedB1List4: false
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
      this.solvedB1List4 = true;
      var db = firebase.firestore();
      db.collection(this.email).doc(this.email).set({solvedB1List4: this.solvedB1List4} ,{merge:true})
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