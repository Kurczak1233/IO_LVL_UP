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
     <b-container v-if="formalConsent === true" class="col-12 col-sm-10 mt-5 col-md-8 col-xl-8 mr-auto ml-auto background-bluish p-5" fluid>
        <b><h3><i>Tricky words section</i></h3></b>
<b-row>
  <form class="form-inline">
    
    <b-col>
      <label class="my-1 mr-2" for="answear1">1) ... - noun: a list of questions; survey (Kwestionariusz)</label>
        <input type="text" v-model="answear1" value="" id="answear1">
    </b-col>
        
        <label class="my-1 mr-2" for="answear1">2) ... - adjective: not conscious; without awareness (Nieprzytomny)</label>
      <input type="text" v-model="answear2" value="" id="answear2">
        
        <label class="my-1 mr-2" for="answear1">3) ... - noun: adjective: unusually mature, especially in mental development (Przedwczesny)</label>
      <input type="text" v-model="answear3" value="" id="answear3">
        
        <label class="my-1 mr-2" for="answear1">4) ... - noun: noun: a person who maintains a connection between people or groups (Łącznik (osoba))</label>
      <input type="text" v-model="answear4" value="" id="answear4">
        
        <label class="my-1 mr-2" for="answear1">5) ... - noun: continuous observation of a person, place, or activity in order to gather information (Inwigilacja)</label>
      <input type="text" v-model="answear5" value="" id="answear5">
        
        <label class="my-1 mr-2" for="answear1">6) ... - noun: a widely cultivated plant with brightly-colored showy flower heads (Chryzantema)</label>
      <input type="text" v-model="answear6" value="" id="answear6">
        
        <label class="my-1 mr-2" for="answear1">7) ... - noun: a tendency, habit or mannerism that is peculiar to an individual; a quirk (Idiosynkcacja)</label>
      <input type="text" v-model="answear7" value="" id="answear7">
        
        <label class="my-1 mr-2" for="answear1">8) ... - noun: a person hired to drive a private automobile or limousine (Szofer)</label>
      <input type="text" v-model="answear8" value="" id="answear8">
     
     </form>
  </b-row>
            <b-row>  
                <b-col class="mt-3 mb-3 text-center"><router-link :to="{name: 'read', params: {solvedB1Read4: true}}" ><b-button class="btn btn-warning" type="button" v-on:click="AddSolvedToUserDb">Solved!</b-button></router-link></b-col>
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
          solvedB1Read4: false,
          answear1: '',
          answear2: '',
          answear3: '',
          answear4: '',
          answear5: '',
          answear6: '',
      }
    },
    methods:
    {
        checkForm: function() {
                let correctAnswears = ["D", "G", "F", "A", "E", "C"];
                let answearsIds =["Answear1", "Answear2", "Answear3", "Answear4", "Answear5", "Answear6"];
                let answears = [this.answear1,this.answear2,this.answear3,this.answear4,this.answear5,this.answear6];
                console.log(correctAnswears[0]);
                for(let i = 0; i<correctAnswears.length;i++)
                {
                    if(correctAnswears[i] === answears[i])
                    {
                        document.getElementById(answearsIds[i]).setAttribute("style", "background-color: rgb(128, 255, 0);")
                    }
                    else{
                        document.getElementById(answearsIds[i]).setAttribute("style", "background-color: rgb(255, 64, 0)")
                    }
                } 
                
        },
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
      this.solvedB1Read4 = true;
      var db = firebase.firestore();
      db.collection(this.email).doc(this.email).set({solvedB1Read4: this.solvedB1Read4} ,{merge:true})
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
@media (max-width: 500px)
 { 
body {
font-size: 0.7rem;
 }; 
 }

</style>