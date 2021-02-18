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
     </b-container>
    </body>
</template>

<script>
import { firebase } from '@firebase/app'
//import '@firebase/auth'
export default {
    name: 'Listening task5',
        data: function()
    {
      return {
          formalConsent: false,
          email: firebase.auth().currentUser.email,
          solvedB1List5: false
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
      this.solvedB1List5 = true;
      var db = firebase.firestore();
      db.collection(this.email).doc(this.email).set({solvedB1List5: this.solvedB1List5} ,{merge:true})
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