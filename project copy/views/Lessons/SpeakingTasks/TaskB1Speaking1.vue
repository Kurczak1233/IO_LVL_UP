<template>
  <body>
    <b-container class="p-5 col-12 col-sm-10 mt-5 col-md-8 col-xl-8 mr-auto ml-auto background-bluish p-3" fluid>
<b-row>
    <b-col class="text-center col-12">
    <b><h3><i class="text-center">TASK 1</i></h3></b>
    <p>Answer the questions in part 1 – 4 below.</p>
    </b-col>
</b-row>
    <hr>
<b-row>
    <b-col class="col-12 mt-3 text-center">
<p>Where are you from?</p>
<p>What do you most like about the place where you live?</p>
<p>What do you think is the best time of the year? Why?</p>
<p>What do you usually do at the weekend?</p>
<p>How often do you listen to music?</p>
<p>Tell us about a musical artist you quite like.</p>
    </b-col>
</b-row>
<hr>
<b-row>
    <b-col class="text-center">
        <b><h3><i class="text-center">TASK 2</i></h3></b>
        <p>In this part of the test I’m going to give each of you two photographs. I would like you to talk about your photographs on your own for about a minute and also answer a question about your partner’s photographs.</p>
        <p><i>Tip: While talking focus on differences between those pictures not on the content. Time is short!</i></p>
    </b-col>
</b-row>
<hr>
<b-row>
    <b-col class="col-6 mt-3 text-center">
<b-img v-bind="Images" fluid src="https://github.com/Kurczak1233/IO_LVL_UP/blob/main/project%20copy/src/assets/SpeakingB1Task1.jpg?raw=true"></b-img>
    </b-col>
    <b-col class="col-6 mt-3 text-center">
<b-img v-bind="Images" fluid src="https://github.com/Kurczak1233/IO_LVL_UP/blob/main/project%20copy/src/assets/SpeakingB1Task2.jpg?raw=true"></b-img>
    </b-col>
</b-row>
<hr>




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
    name: 'Listening',
        data: function()
    {
      return {
          Images:
          {
              width: 300,
              height: 200,
          },
          email: firebase.auth().currentUser.email,
          solvedB1Read1: false
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
    event.target.setAttribute("style", "background-color: rgb(128, 255, 0); "); 
  },
  inputClickedFalse: function(event)
  {
    event.target.setAttribute("style", "background-color: rgb(255, 64, 0)");
  },
  AddSolvedToUserDb: function()
  {
      this.solvedB1Read1 = true;
      var db = firebase.firestore();
      db.collection(this.email).doc(this.email).set({solvedB1Read1: this.solvedB1Read1} ,{merge:true})
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
#answear:hover
{
    background-color: #ffc107;
}
.background-darkblue{
    background-color: rgba(105, 208, 245, 0.76);
}
@media (max-width: 500px)
 { 
body {
font-size: 0.7rem;
 }; 
 }

</style>