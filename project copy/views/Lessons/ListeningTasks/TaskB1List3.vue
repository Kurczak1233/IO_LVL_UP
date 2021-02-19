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
                <th>When asked how strong she is, Andrea explains</th>
                <td v-on:click="inputClickedRight">that she could lift a big animal.</td>
                <td v-on:click="inputClickedFalse">that she could lift a vehicle.</td>
                <td v-on:click="inputClickedFalse">that she could pull a hippo.</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <th>How does Andrea describe her feeling towards sport as a kid?</th>
                <td v-on:click="inputClickedFalse">She had no interest in sport at that time.</td>
                <td v-on:click="inputClickedRight">She enjoyed some events, but was not really convinced.</td>
                <td v-on:click="inputClickedFalse">She was always passionate about sport.</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <th>Andrea says her initial reason for getting involved in weight lifting was</th>
                <td v-on:click="inputClickedFalse">to motivate her younger sister.</td>
                <td v-on:click="inputClickedFalse">to compete with her older sister.</td>
                <td v-on:click="inputClickedRight">to support her sister's attempt to lose weight.</td>
                </tr>
                <tr>
                <th scope="row">4</th>
                <th>How did Andrea feel when some men refused to train with her?</th>
                <td v-on:click="inputClickedRight">She didn't care because she was enjoying herself.</td>
                <td v-on:click="inputClickedFalse">She felt humiliated.</td>
                <td v-on:click="inputClickedFalse">She felt she had something to prove.</td>
                </tr>
                <tr>
                <th scope="row">5</th>
                <th>Andrea explains that when she entered the strong woman competition in 2015,</th>
                <td v-on:click="inputClickedFalse">she was well informed because she had done her research.</td>
                <td v-on:click="inputClickedFalse">she had a lot of experience.</td>
                <td v-on:click="inputClickedRight">she knew next to nothing about the details.</td>
                </tr>
                <tr>
                <th scope="row">6</th>
                <th>How did the coach she approached react to her request for help?</th>
                <td v-on:click="inputClickedRight">With disbelief. </td>
                <td v-on:click="inputClickedFalse">With admiration. </td>
                <td v-on:click="inputClickedFalse">With irritation.</td>
                </tr>
                <tr>
                <th scope="row">7</th>
                <th>What drives her to push herself as much as she does?</th>
                <td v-on:click="inputClickedFalse">The pressure from her family. </td>
                <td v-on:click="inputClickedRight">The pleasure of being the best.</td>
                <td v-on:click="inputClickedFalse">The pride that her kids can see her win.</td>
                </tr>
            </table>
            <b-row class="mt-4 mb-3">
            <b-col class="text-center"><audio src="https://github.com/Kurczak1233/IO_LVL_UP/blob/main/project%20copy/src/assets/List%20Task%204.mp3?raw=true" controls ></audio>

            </b-col>
            </b-row>
            <b-row>  
                <b-col class="mt-3 mb-3 text-center"><router-link :to="{name: 'listen', params: {solvedB1List3: true}}" ><b-button class="btn btn-warning" type="button" v-on:click="AddSolvedToUserDb">Solved!</b-button></router-link></b-col>
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
          solvedB1List3: false
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
      this.solvedB1List3 = true;
      var db = firebase.firestore();
      db.collection(this.email).doc(this.email).set({solvedB1List3: this.solvedB1List3} ,{merge:true})
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