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
  <b-col class="">1. I'm bored. It _______ (rain) for hours so I can't go out. </b-col>
</b-row>
<b-row class="">
  <b-col class="">2. My neighbour's children _______ (argue) all morning</b-col>
</b-row>
<b-row class="">
  <b-col class="">3. he kitchen's a mess because we _______ (make) a birthday cake for Dad.'  </b-col>
</b-row>
<b-row class="">
  <b-col class="">4.  You _______ (not study) for the maths exam today </b-col>
</b-row>
<b-row class="">
  <b-col class="">5. Mary _______ (live) in Germany since 1992.  </b-col>
</b-row>
<b-row class="">
  <b-col class="">6. How long _______ (learn / you) English?  </b-col>
</b-row>
<b-row class="">
  <b-col class="">7. I _______ (live) without electricity for two weeks. </b-col>
</b-row>
<b-row class="">
  <b-col class="">8. The film _______ (run / not) for ten minutes yet, but there's a commercial break already. </b-col>
</b-row>
<b-row class="">
  <b-col class="">9. She _______ (not / be) in the garden for more than an hour. </b-col>
</b-row>
<b-row class="">
  <b-col class="">10. I _______ (wait) for you since two o'clock.</b-col>
</b-row>

<table class="table table-striped mt-1">
  <thead>
    <tr>
      <th scope="row">1</th>
        <td v-on:click="inputClickedFalse">has been rained</td>
        <td v-on:click="inputClickedFalse">have been raining</td>
        <td v-on:click="inputClickedFalse">have rained</td>
        <td v-on:click.once="inputClickedRight">has been raining</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">2</th>
      <td v-on:click="inputClickedFalse">have been argued</td>
      <td v-on:click="inputClickedFalse">had argued</td>
        <td v-on:click="inputClickedFalse">has been arguing</td>
      <td v-on:click="inputClickedRight">have been arguing </td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td v-on:click="inputClickedFalse">has been made</td>
      <td v-on:click="inputClickedFalse">have been made</td>
      <td v-on:click="inputClickedRight">have been making</td>
      <td v-on:click="inputClickedFalse">has made</td>
    </tr>
    <tr>
      <th scope="row">4</th>
        <td v-on:click="inputClickedFalse">have studied</td>
        <td v-on:click="inputClickedRight">have been studying</td>
        <td v-on:click="inputClickedFalse">has studying</td>
        <td v-on:click="inputClickedFalse">had been studying</td>
    </tr>
    <tr>
      <th scope="row">5</th>
        <td v-on:click="inputClickedFalse">have been living</td>
        <td v-on:click="inputClickedFalse">have been lived</td>
        <td v-on:click="inputClickedFalse">have lived be</td>
        <td v-on:click="inputClickedRight">has been living</td>
    </tr>
    <tr>
      <th scope="row">6</th>
        <td v-on:click="inputClickedFalse">have you learned</td>
        <td v-on:click="inputClickedRight">have you been learning</td>
        <td v-on:click="inputClickedFalse">have you been learned</td>
        <td v-on:click="inputClickedFalse">has you learned</td>
    </tr>
    <tr>
      <th scope="row">7</th>
        <td v-on:click="inputClickedRight">have been living</td>
        <td v-on:click="inputClickedFalse">has been living</td>
        <td v-on:click="inputClickedFalse">have lived</td>
        <td v-on:click="inputClickedFalse">has been living</td>
    </tr>
    <tr>
      <th scope="row">8</th>
        <td  v-on:click="inputClickedRight">has not run</td>
        <td  v-on:click="inputClickedFalse">had not run</td>
        <td v-on:click="inputClickedFalse">have not run</td>
        <td  v-on:click="inputClickedFalse">have run</td>
    </tr>
    <tr>
      <th scope="row">9</th>
                <td  v-on:click="inputClickedFalse">has not be</td>
        <td v-on:click="inputClickedRight">has not been</td>
        <td  v-on:click="inputClickedFalse">have not been</td>
        <td  v-on:click="inputClickedFalse">had not been</td>
    </tr>
    <tr>
      <th scope="row">10</th>
        <td  v-on:click="inputClickedFalse">I has been waited</td>
        <td  v-on:click="inputClickedFalse">I have been</td>
        <td v-on:click="inputClickedRight">I have been waiting</td>
        <td  v-on:click="inputClickedFalse">I have being waited</td>
    </tr>
      </tbody>
</table>
        <b-row>  
            <b-col class="mt-3 mb-3 text-center"><router-link :to="{name: 'gram', params: {solvedB1PPC3: true}}" ><b-button class="btn btn-warning" type="button" v-on:click="AddSolvedToUserDb">Solved!</b-button></router-link></b-col>
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
          solvedB1PPC3: false
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
      this.solvedB1PPC3 = true;
      var db = firebase.firestore();
      db.collection(this.email).doc(this.email).set({solvedB1PPC3: this.solvedB1PPC3} ,{merge:true})
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