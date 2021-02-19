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
  </select>



In the same way, all those years of classes add up to a fit-for-purpose dancing machine. This level of physical fluency doesn't hurt; it feels good.

  <label class="my-1 mr-2" for="Answear6">6)</label>
  <select v-model="answear6" class="custom-select my-1 mr-sm-2" id="Answear6">
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
    <option value="D">D</option>
    <option value="E">E</option>
    <option value="F">F</option>
  </select>


But they should not be misled: there is a difference between hard work and hardship. Dancers have an everyday familiarity with the first. Hardship it isn't.

  <button type="button" v-on:click="checkForm" class="btn btn-primary my-1">Check answears</button>
</form>
<b-container>
         <b-row class="mt-3 mb-3">
             <b-col class="col-5 mr-auto ml-auto mb-2 ">
                 <b-col><b>1. In the first paragraph, what is Caitlin's main point about the island?</b></b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">a) It can be dangerous to try to cross from the mainland.</b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">b) It is much smaller than it looks from the mainland. </b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedRight">c) It is only completely cut off at certain times.</b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">d) It can be a difficult place for people to live in.</b-col>
            </b-col>
            <b-col class="col-5 mr-auto ml-auto mb-2">
                <b-col><b>2. What does Caitlin suggest about her father?</b></b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">a) His writing prevents him from doing things he wants to do with his family.</b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">b) His initial reaction to his son's request is different from usual. </b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">c) His true feelings are easily hidden from his daughter. </b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedRight">d) His son's arrival is one event he will take time off for. </b-col>
            </b-col>
         </b-row>
         <hr>
            <b-row class="mt-3 mb-3">
             <b-col class="col-5 mr-auto ml-auto mb-2 ">
                 <b-col><b>3. Caitlin emphasises her feelings of discomfort because she</b></b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">a) is embarrassed that she doesn't understand what her brother is talking about.</b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">b) feels confused about why she can't relate to her brother any more. </b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedRight">c) is upset by the unexpected change in her brother's behaviour.</b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">d) feels foolish that her brother's attention is so important to her.</b-col>
            </b-col>
            <b-col class="col-5 mr-auto ml-auto mb-2">
                <b-col><b>4. In the fourth paragraph, what is Caitlin's purpose in describing the island?</b></b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedRight">a) to express her positive feelings about it. </b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">b) to explain how the road was built. </b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">c) to illustrate what kind of weather was usual. </b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">d) to describe her journey home.</b-col>
            </b-col>
         </b-row>
         <hr>
           <b-row class="mt-3 mb-3">
             <b-col class="col-5 mr-auto ml-auto mb-2 ">
                 <b-col><b>5. In 'because of that' in the forth paragraph, 'that' refers to the fact that</b></b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">a) locals think it is odd to walk anywhere.</b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">b) it is easier for people to take the bus than walk. </b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">c) people have everything they need on the island.</b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedRight">d) there is nowhere in particular to walk to from the island.</b-col>
            </b-col>
            <b-col class="col-5 mr-auto ml-auto mb-2">
                <b-col><b>6. What do we learn about Caitlin's reactions to the boy?</b></b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">a) She felt his air of confidence contrasted with his physical appearance. </b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">b) She was able to come up with a reason for him being there. </b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedRight">c) She realised her first impression of him was inaccurate. </b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">d) She thought she had seen him somewhere before.</b-col>
            </b-col>
         </b-row>
         <hr>
     </b-container>
            <b-row>  
                <b-col class="mt-3 mb-3 text-center"><router-link :to="{name: 'read', params: {solvedB1Read3: true}}" ><b-button class="btn btn-warning" type="button" v-on:click="AddSolvedToUserDb">Solved!</b-button></router-link></b-col>
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
          solvedB1Read3: false,
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
            console.log(this.answear1)
            console.log(this.answear2)
            console.log(this.answear3)
            console.log(this.answear4)
            console.log(this.answear5)
            console.log(this.answear6)
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
      this.solvedB1Read3 = true;
      var db = firebase.firestore();
      db.collection(this.email).doc(this.email).set({solvedB1Read3: this.solvedB1Read3} ,{merge:true})
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