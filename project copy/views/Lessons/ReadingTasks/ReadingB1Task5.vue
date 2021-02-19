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
        <b><h3><i>John Prince, famous dancer and choreographer, gives advice on how to succeed in a career in the arts.</i></h3></b>
I asked John how he got started and what requirements there are. "Well, to be a professional dancer it's useful to have had acting lessons or some background in drama. If you want to succeed in musical theatre you have to have a good singing voice as well. When you approach an agent you should take a portfolio with your CV, your statistics sheet and some good photos and reviews of past performances. You'll need dance clothes, ballet shoes, tap shoes, and even roller skates depending on what kind of show you are going to go for."
<form class="form-inline">
  <label class="my-1 mr-2" for="Answear1">1)</label>
  <select v-model="answear1" class="custom-select my-1 mr-sm-2" id="Answear1">
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
    <option value="D">D</option>
    <option value="E">E</option>
    <option value="F">F</option>
  </select>
"Of course, you need to be extremely fit if you want to be a professional dancer. I dance or move about for about six hours a day. There are great health benefits to being a dancer. I can eat a lot of pasta without gaining weight because dancing increases your metabolism so much."
  <label class="my-1 mr-2" for="Answear2">2)</label>
  <select v-model="answear2" class="custom-select my-1 mr-sm-2" id="Answear2">
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
    <option value="D">D</option>
    <option value="E">E</option>
    <option value="F">F</option>
  </select>
John has a very busy schedule in the next few months. He took time out to speak to me today from the making of a pop video to promote N-ergy's latest record. "I choreographed the dance routine for the boys and they only had 2 days in which to learn it! I am going to be working on a video for another well known band - but that's top secret. Next month I'll be touring Spain in a production of a musical that was written by a friend of mine, Michaela Evans.
  <label class="my-1 mr-2" for="Answear3">3)</label>
  <select v-model="answear3" class="custom-select my-1 mr-sm-2" id="Answear3">
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
    <option value="D">D</option>
    <option value="E">E</option>
    <option value="F">F</option>
  </select>
As for the future, I've come to realise that I would never be content to be just a chorus dancer - I'm too much of an individual for that. Like all artists I'd love to become a household name by writing and choreographing my own musicals." John was born in Jamaica to a Jamaican father and a Scottish mother but the family emigrated to England 20 years ago. "I have a little sister I adore, who is also training to be a dancer." How does it feel to have someone else following in your footsteps?
  <label class="my-1 mr-2" for="Answear4">4)</label>
  <select v-model="answear4" class="custom-select my-1 mr-sm-2" id="Answear4">
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
    <option value="D">D</option>
    <option value="E">E</option>
    <option value="F">F</option>
  </select>
Has he much more to learn, I wondered. "I've spent an incredible amount of my life training to get where I am. I went to college for two years in England, I trained for six months in Paris and about eight months in America. But you never really stop training or learning your art."

  <label class="my-1 mr-2" for="Answear5">5)</label>
  <select v-model="answear5" class="custom-select my-1 mr-sm-2" id="Answear5">
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
    <option value="D">D</option>
    <option value="E">E</option>
    <option value="F">F</option>
  </select>
So, would you say it's been plain sailing? "I feel I've been lucky to a degree; many people hit problems breaking into the arts. It can be a vicious circle really. You can't become a member of Equity, which is the actors' and dancers' union, without good contracts. and you can't get good contracts without being a member of Equity. My advice to people who want to get into the arts would be to go out into the world, and try everything else first.
  <label class="my-1 mr-2" for="Answear6">6)</label>
  <select v-model="answear6" class="custom-select my-1 mr-sm-2" id="Answear6">
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
    <option value="D">D</option>
    <option value="E">E</option>
    <option value="F">F</option>
  </select>
What has a dance career done for you as a person? "Thanks to dancing, I've visited and performed in 23 countries so far. This has opened my eyes to the world, and I've been able to understand issues like racism and inequality from a wider perspective. Hopefully this has enabled me to become a better and more tolerant person as a result. "So all in all I'm really happy to be a dancer!"
  <button type="button" v-on:click="checkForm" class="btn btn-primary my-1" aria-describedby="Check answears button">Check answears</button>
</form>
            <b-row>  
                <b-col class="mt-3 mb-3 text-center"><router-link :to="{name: 'read', params: {solvedB1Read5: true}}" ><b-button class="btn btn-warning" type="button" v-on:click="AddSolvedToUserDb">Solved!</b-button></router-link></b-col>
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
          solvedB1Read5: false,
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
                let correctAnswears = ["G", "E", "D", "A", "F", "B"];
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
      this.solvedB1Read5 = true;
      var db = firebase.firestore();
      db.collection(this.email).doc(this.email).set({solvedB1Read5: this.solvedB1Read5} ,{merge:true})
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