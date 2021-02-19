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
                <th>Kendall spends a load of time in her house. </th>
                <td v-on:click="inputClickedFalse">True</td>
                <td v-on:click="inputClickedRight">False</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">2</th>
                <th>She used to walk dogs for a living.</th>
                <td v-on:click="inputClickedRight">True</td>
                <td v-on:click="inputClickedFalse">False</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <th>Cancelled flights piss her off</th>
                <td v-on:click="inputClickedFalse">True</td>
                <td v-on:click="inputClickedRight">False</td>
                </tr>
                <tr>
                <th scope="row">5</th>
                <th>She spent a fortune on a vehicle.</th>
                <td v-on:click="inputClickedRight">True</td>
                <td v-on:click="inputClickedFalse">False</td>
                </tr>
                <tr>
                <th scope="row">6</th>
                <th>Chloe is her least favourite sister.</th>
                <td v-on:click="inputClickedFalse">True</td>
                <td v-on:click="inputClickedRight">False</td>
                </tr>
                <tr>
                <th scope="row">7</th>
                <th>She wishes she could become more independent.</th>
                <td v-on:click="inputClickedFalse">True </td>
                <td v-on:click="inputClickedRight">False</td>
                </tr>
                </tbody>
            </table>
            <b-row class="mt-4 mb-3">
            <b-col class="text-center"><audio src="https://github.com/Kurczak1233/IO_LVL_UP/blob/main/project%20copy/src/assets/List%20Task%201.mp3?raw=true" controls ></audio>

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