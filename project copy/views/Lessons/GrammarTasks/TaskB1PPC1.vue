<template>
  <body>
    <b-container v-if="formalConsent === false" class="col-10 mt-5 col-md-8 col-xl-8 mr-auto ml-auto background-bluish" fluid>
        <b-row>
            <b-col class="text-center p-3"><p>You are in tasks section, please remember that you are constantly <b>LEARNING</b> so, do not forget to make notes, and if necessary - repeat quizes!</p>
                <p>You won't be scoring any points there, so do not panic if you chose a wrong answear, just pick a new one.</p>
                <p>Finishing all quizes will allow you to make an attempt in solving the exam!</p>
                <b-col class="mt-3"><b-button class="btn btn-warning" type="button" v-on:click="GiveConsent">Confirm</b-button></b-col>
            </b-col>
        </b-row>
    </b-container>
    <b-container v-if="formalConsent === true" class="col-12 col-sm-10 mt-5 col-md-8 col-xl-8 mr-auto ml-auto background-bluish p-3" fluid>
        <b><h3><i>WOLFGANG AMADEUS MOZART</i></h3></b>
<b-row class="">
  <b-col class="">Wolfgang Amadeus Mozart was an Austrian composer – one of the greatest in music history. Even  ... (1)  he died before his 36th birthday, Mozart  ... (2)  more than 600 works. He was born on January 27, 1756 in Salzburg. His father, Leopold was a composer , violin teacher and the leader of a local orchestra. Young Wolfgang started playing the harpsichord at the age of three.
  </b-col>
</b-row>
<b-row class="">
  <b-col class="">He composed his own piano  ... (3)  at five, his first symphonies when he reached nine and whole operas at the age of 12. Wolfgang never went to school. His father taught him languages , geography and history, maths and, of  ... (4) , music. Mozart came  ... (5)  a loving family. He loved to play duets with his older sister and he was very  ... (6)  to his mother. His father  ... (7)  him through all stages in his life, taught him how to deal  ... (8)  money and people, and how to behave in society.
  </b-col>
</b-row>   
<table class="table table-striped mt-2">
  <thead>
    <tr>
      <th scope="row"><b>1.</b></th>
      <td v-on:click.once="inputClickedRight">though</td>
      <td v-on:click="inputClickedFalse">until</td>
      <td v-on:click="inputClickedFalse">as</td>
      <td v-on:click="inputClickedFalse">if</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><b>2.</b></th>
      <td v-on:click="inputClickedFalse">caused</td>
      <td v-on:click.once="inputClickedRight">created</td>
      <td v-on:click="inputClickedFalse">designed</td>
      <td v-on:click="inputClickedFalse">invented</td>
    </tr>
    <tr>
      <th scope="row">3.</th>
      <td v-on:click="inputClickedRight">pieces</td>
      <td v-on:click="inputClickedFalse">chunks</td>
      <td v-on:click="inputClickedFalse">parts</td>
      <td v-on:click="inputClickedFalse">slices</td>
    </tr>
    <tr>
      <th scope="row">4.</th>
      <td v-on:click="inputClickedRight">course</td>
      <td v-on:click="inputClickedFalse">accord</td>
      <td v-on:click="inputClickedFalse">which</td>
      <td v-on:click="inputClickedFalse">trance</td>
    </tr>
    <tr> 
      <th scope="row">5.</th>
      <td v-on:click="inputClickedFalse">on</td>
      <td v-on:click="inputClickedFalse">down</td>
      <td v-on:click="inputClickedFalse">off</td>
      <td v-on:click="inputClickedRight">from</td>
    </tr>
    <tr>
      <th scope="row">6.</th>
      <td v-on:click="inputClickedFalse">nearby</td>
      <td v-on:click="inputClickedFalse">next</td>
      <td v-on:click="inputClickedFalse">beside</td>
      <td v-on:click="inputClickedRight">close</td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td v-on:click="inputClickedFalse">piloted</td>
      <td v-on:click="inputClickedFalse">escorted</td>
      <td v-on:click="inputClickedFalse">ruled</td>
      <td v-on:click="inputClickedRight">guided</td>
    </tr>
    <tr>
      <th scope="row">8.</th>
      <td v-on:click="inputClickedFalse">to</td>
      <td v-on:click="inputClickedFalse">of</td>
      <td v-on:click="inputClickedRight">with</td>
      <td v-on:click="inputClickedFalse">on</td>
    </tr>
      </tbody>
    </table> 
        <b-row>  
            <b-col class="mt-3 mb-3 text-center"><router-link :to="{name: 'gram', params: {solvedB1PPC1: true}}" ><b-button class="btn btn-warning" type="button" v-on:click="AddSolvedToUserDb">Solved!</b-button></router-link></b-col>
        </b-row>
</b-container>
  </body>
</template>

<script>
import { firebase } from '@firebase/app'
//import '@firebase/auth'
export default {
    name: 'Speaking',
        data: function()
    {
      return {
          formalConsent: false,
          email: firebase.auth().currentUser.email,
          solvedB1PPC1: false
      }
    },
    methods:
    {
        GiveConsent: function()
        {
            this.formalConsent = true;
        },
        SendingInfoBack: function()
        {
            this.$emit('sth',true);
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
      this.solvedB1PPC1 = true;
      var db = firebase.firestore();
      db.collection(this.email).doc(this.email).set({solvedB1PPC1: this.solvedB1PPC1} ,{merge:true})
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
