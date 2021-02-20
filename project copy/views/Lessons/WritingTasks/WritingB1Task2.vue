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
        <b><h3><i>A former classical ballet dancer explains what ballet training actually involves</i></h3></b>
As a former dancer in the Royal Ballet Company here in Britain, I would beg to question this.
<form class="form-inline">
  <label class="my-1 mr-2" for="Answear1">1)</label>
  <select v-model="answear1" class="custom-select my-1 mr-sm-2" id="Answear1">
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
    <option value="D">D</option>
    <option value="E">E</option>
    <option value="F">F</option>
    <option value="G">G</option>
  </select>

With expert teaching and daily practice, its various demands are easily within the capacity of the healthy human body. Contrary to popular belief, there is no need to break bones or tear muscles to achieve ballet positions. It is simply a question of sufficient conditioning of the muscular system.

Over the course of my dancing life I worked my way through at least 10,000 ballet classes. I took my first at a school of dance at the age of seven and my last 36 years later at the Royal Opera House in London. In the years between, ballet class was the first thing I did every day. It starts at an early age, this daily ritual, because it has to.


  <label class="my-1 mr-2" for="Answear2">2)</label>
  <select v-model="answear2" class="custom-select my-1 mr-sm-2" id="Answear2">
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
    <option value="D">D</option>
    <option value="E">E</option>
    <option value="F">F</option>
    <option value="G">G</option>
  </select>



But for a ballet dancer in particular, this lengthy period has to come before the effects of adolescence set in, while maximum flexibility can still be achieved.

Those first classes I took were remarkably similar to the last. In fact, taking into account the occasional new idea, ballet classes have changed little since 1820, when the details of ballet technique were first written down, and are easily recognised in any country. Starting with the left hand on the barre, the routine unrolls over some 75 minutes.


  <label class="my-1 mr-2" for="Answear3">3)</label>
  <select v-model="answear3" class="custom-select my-1 mr-sm-2" id="Answear3">
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
    <option value="D">D</option>
    <option value="E">E</option>
    <option value="F">F</option>
    <option value="G">G</option>
  </select>



Even the leading dancers have to do it.

These classes serve two distinct purposes: they are the way we warm our bodies and the mechanism by which we improve basic technique. In class after class, we prove the old saying that 'practice makes perfect'.

  <label class="my-1 mr-2" for="Answear4">4)</label>
  <select v-model="answear4" class="custom-select my-1 mr-sm-2" id="Answear4">
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
    <option value="D">D</option>
    <option value="E">E</option>
    <option value="F">F</option>
    <option value="G">G</option>
  </select>


And it is also this daily repetition which enables us to strengthen the muscles required in jumping, spinning or lifting our legs to angles impossible to the average person.

The human body is designed to adapt to the demands we make of it, provided we make them carefully and over time.


  <label class="my-1 mr-2" for="Answear5">5)</label>
  <select v-model="answear5" class="custom-select my-1 mr-sm-2" id="Answear5">
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
    <option value="D">D</option>
    <option value="E">E</option>
    <option value="F">F</option>
    <option value="G">G</option>
  </select>



<p>In the same way, all those years of classes add up to a fit-for-purpose dancing machine. This level of physical fluency doesn't hurt; it feels good.</p>

  <label class="my-1 mr-2" for="Answear6">6)</label>
  <select v-model="answear6" class="custom-select my-1 mr-sm-2" id="Answear6">
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
    <option value="D">D</option>
    <option value="E">E</option>
    <option value="F">F</option>
    <option value="G">G</option>
  </select>


But they should not be misled: there is a difference between hard work and hardship. Dancers have an everyday familiarity with the first. Hardship it isn't.

    <b-col class="text-center col-12">
<button type="button" v-on:click="checkForm" aria-describedby="Check answears button" class="btn btn-primary my-1">Check answears</button>
    </b-col>
<b-row>
    <b-col>
        <b>Sentences</b>
<p><b>A</b>. Through endless tries at the usual exercises and frequent failures, ballet dancers develop the natural pathways in the brain necessary to control accurate, fast and smooth movement.</p>

<p><b>B</b>. The ballet shoe offers some support, but the real strength is in the muscles, built up through training.</p>

<p><b>C</b>. As technology takes away activity from the lives of many, perhaps the ballet dancer's physicality is ever more difficult for most people to imagine.</p>

<p><b>D</b>. Ballet technique is certainly extreme but it is not, in itself, dangerous.</p>

<p><b>E</b>. The principle is identical in the gym - pushing yourself to the limit, but not beyond, will eventually bring the desired result.</p>

<p><b>F</b>. No one avoids this: it is ballet's great democratiser, the well established members of the company working alongside the newest recruits.</p>

<p><b>G</b>. It takes at least a decade of high-quality, regular practice to become an expert in any physical discipline.</p>
    </b-col>
</b-row>
</form>
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