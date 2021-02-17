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
<b><h3><i>Present perfect continous - filling blank spaces</i></h3></b>
<b-row class="">
  <b-col class="">1. I _______ for five hours. </b-col>
</b-row>
<b-row class="">
  <b-col class="">2. She _______ for me for two months.</b-col>
</b-row>
<b-row class="">
  <b-col class="">3. What _______ doing all day?  </b-col>
</b-row>
<b-row class="">
  <b-col class="">4.  I _______ all day, but finish line is still ahead of me.  </b-col>
</b-row>
<b-row class="">
  <b-col class="">5. I _______ here all my life.  </b-col>
</b-row>
<b-row class="">
  <b-col class="">6. I _______ anything special today.  </b-col>
</b-row>
<b-row class="">
  <b-col class="">7. _______ running? </b-col>
</b-row>
<b-row class="">
  <b-col class="">8. How _______ waiting here? </b-col>
</b-row>
<b-row class="">
  <b-col class="">9. We _______ in line for about an hour. </b-col>
</b-row>
<b-row class="">
  <b-col class="">10. I _______ trouble breathing recently! </b-col>
</b-row>

<table class="table table-striped mt-1">
  <thead>
    <tr>
      <th scope="row">1</th>
        <td v-on:click="inputClickedFalse">has not been working</td>
        <td v-on:click.once="inputClickedRight">have not been working</td>
        <td v-on:click="inputClickedFalse">have been worked</td>
        <td v-on:click="inputClickedFalse">have was working</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">2</th>
      <td v-on:click="inputClickedRight">have been cooking</td>
      <td v-on:click="inputClickedFalse">has been cooked</td>
        <td v-on:click="inputClickedFalse">have not cooked</td>
      <td v-on:click="inputClickedFalse">haven't cooked</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td v-on:click="inputClickedFalse">have you done</td>
      <td v-on:click="inputClickedFalse">have you did</td>
      <td v-on:click="inputClickedRight">have you been doing</td>
      <td v-on:click="inputClickedFalse">have you been done</td>
    </tr>
    <tr>
      <th scope="row">4</th>
        <td v-on:click="inputClickedFalse">have be runner</td>
        <td v-on:click="inputClickedRight">have been running</td>
        <td v-on:click="inputClickedFalse">have run</td>
        <td v-on:click="inputClickedFalse">had run</td>
    </tr>
    <tr>
      <th scope="row">5</th>
        <td v-on:click="inputClickedRight">have been living</td>
        <td v-on:click="inputClickedFalse">have been lived</td>
        <td v-on:click="inputClickedFalse">have lived be</td>
        <td v-on:click="inputClickedFalse">has lived</td>
    </tr>
    <tr>
      <th scope="row">6</th>
        <td v-on:click="inputClickedFalse">have done</td>
        <td v-on:click="inputClickedRight">have not been doing</td>
        <td v-on:click="inputClickedFalse">have been done</td>
        <td v-on:click="inputClickedFalse">have did</td>
    </tr>
    <tr>
      <th scope="row">7</th>
        <td v-on:click="inputClickedFalse">did she were</td>
        <td v-on:click="inputClickedRight">has she been</td>
        <td v-on:click="inputClickedFalse">have she be</td>
        <td v-on:click="inputClickedFalse">has she was</td>
    </tr>
    <tr>
      <th scope="row">8</th>
        <td  v-on:click="inputClickedFalse">has you been</td>
        <td  v-on:click="inputClickedFalse">had you been</td>
        <td v-on:click="inputClickedRight">have you been</td>
        <td  v-on:click="inputClickedFalse">did you</td>
    </tr>
    <tr>
      <th scope="row">9</th>
                <td  v-on:click="inputClickedFalse">has been waiting</td>
        <td v-on:click="inputClickedRight">have been waiting</td>
        <td  v-on:click="inputClickedFalse">did wait</td>
        <td  v-on:click="inputClickedFalse">were waiting</td>
    </tr>
    <tr>
      <th scope="row">10</th>
        <td  v-on:click="inputClickedFalse">I has been having</td>
        <td  v-on:click="inputClickedFalse">I have</td>
        <td v-on:click="inputClickedRight">I have been having</td>
        <td  v-on:click="inputClickedFalse">I have being having</td>
    </tr>
      </tbody>
</table>
        <b-row>  
            <b-col class="mt-3 mb-3 text-center"><router-link :to="{name: 'gram', params: {solvedB1PPC2: true}}" ><b-button class="btn btn-warning" type="button" v-on:click="AddSolvedToUserDb">Solved!</b-button></router-link></b-col>
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
          solvedB1PPC2: false
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
      this.solvedB1PPC2 = true;
      var db = firebase.firestore();
      db.collection(this.email).doc(this.email).set({solvedB1PPC2: this.solvedB1PPC2} ,{merge:true})
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