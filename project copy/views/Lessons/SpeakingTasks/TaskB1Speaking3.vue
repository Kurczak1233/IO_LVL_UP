<template>
  <body>
    <b-container class="p-5 col-12 col-sm-10 mt-5 col-md-8 col-xl-8 mr-auto ml-auto background-bluish p-3" fluid>
<b-row>
    <b-col class="text-center col-12">
    <b><h3><i class="text-center">TASK 1</i></h3></b>
    <p>Answer the questions in part 1 – 4 below.</p>
    <p>You will have about 1 min on this part</p>
    </b-col>
</b-row>
    <hr>
<b-row>
    <b-col class="col-12 mt-3 text-center">
<p>Do you use the internet to learn new things?</p>
<p>Do you prefer working on your own or with other people?</p>
<p>What do you think would be the most interesting job to do?</p>
<p>Do you find it easy to study where you live?</p>
<p>What were the most important things you learned at primary school?</p>
<p>Would you prefer to work for a big or small company?</p>
<p>What kind of work would you really like to do in the future?</p>
<p>Are you happier doing mental or physical work?</p>
<p>Can you remember your first English lessons?</p>
    </b-col>
</b-row>
<hr>
<b-row>
    <b-col class="text-center">
        <b><h3><i class="text-center">TASK 2</i></h3></b>
        <p>In this part of the test I’m going to give you two photographs. I would like you to talk about your photographs on your own for about a minute.</p>
        <p><i>Tip: While talking focus on differences between those pictures not on the content. Time is short!</i></p>
        <p>You will have about 1 min on this part</p>
    </b-col>
</b-row>
<hr>
<b-row>
    <b-col class="col-6 mt-3 text-center">
<b-img v-bind="Images" fluid src="https://github.com/Kurczak1233/IO_LVL_UP/blob/main/project%20copy/src/assets/SpeakingB1Task1.png?raw=true"></b-img>
    </b-col>
    <b-col class="col-6 mt-3 text-center">
<b-img v-bind="Images" fluid src="https://github.com/Kurczak1233/IO_LVL_UP/blob/main/project%20copy/src/assets/SpeakingB1Task3(2).jpg?raw=true"></b-img>
    </b-col>
</b-row>
<hr>
<b-row>
    <b-col class="text-center col-12">
    <b><h3><i class="text-center">TASK 3</i></h3></b>
    <p>In this part noramlly you will be discussing with your partner. You have to discuss all of the propsed solutions of the shown problem</p>
    <p>You will have about 1.5 min on this part</p>
    </b-col>
</b-row>
<hr>
<b-row>
    <b-col class="col-12 mt-3 text-center">
        <b-img v-bind="CollaborativeTask" fluid src="https://github.com/Kurczak1233/IO_LVL_UP/blob/main/project%20copy/src/assets/SpeakingB1Task1Colab.png?raw=true"></b-img>
    </b-col>
</b-row>
<hr>
<b-row>
    <b-col class="text-center col-12">
    <b><h3><i class="text-center">TASK 4</i></h3></b>
    <p>In this part you will hear a more peculiar questions about some issues. You have to answear them</p>
    <p>You will have about 1 min on this part</p>
    </b-col>
</b-row>
<hr>
<b-row>
    <b-col class="col-12 mt-3 text-center">
<p><b>Do you think you have to spend a lot of money to have a good holiday?</b></p>
<p><b>Some people say we travel too much these days and shouldn't go on so many holidays. What do you think?</b></p>
<p><b>Why do you think people like to go away on holiday?</b></p>
    </b-col>
</b-row>
<hr>
        <b-row>  
            <b-col class="mt-3 mb-3 text-center"><router-link :to="{name: 'speak', params: {solvedB1Speaking1: true}}" ><b-button class="btn btn-warning" type="button" v-on:click="AddSolvedToUserDb">Solved!</b-button></router-link></b-col>
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
              height: 200,
          },
          CollaborativeTask:
          {
              height:200,
          },
          email: firebase.auth().currentUser.email,
          solvedB1Speaking1: false
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
      this.solvedB1Speaking1 = true;
      var db = firebase.firestore();
      db.collection(this.email).doc(this.email).set({solvedB1Speaking1: this.solvedB1Speaking1} ,{merge:true})
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