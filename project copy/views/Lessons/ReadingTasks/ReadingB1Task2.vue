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
        <b><h3><i>A book fragment</i></h3></b>

<p>
        She knew the street backwards, of course. How many times had she been dragged up it as a child by the wrist, whining and snivelling, always wishing she were somewhere else?  Now she had no desire to be anywhere but here.  This bustling traffic, these fuming buses, these chipped paving stones and boarded-up shop fronts, they were hers.  Here, she would grow from defiant teenager to independent woman.  When she was an old woman, she would gaze out over the lawns and say ‘Ah, Knox Road, that’s where I really came into my own’.
        Number 126 was only a short walk from the bus stop, and she heaved her multiple bags onto her shoulders and trudged off, trying to maintain the elation as the straps dug into the flesh of her neck and fingers.  Number 126 was set back slightly from the main road, with a concrete path and weed-patch at the front.  The window frames were rotten and the paint chipped.  Holly tried not to mind.  It was what was inside that counted, after all.  The coming-together of six individuals from diverse backgrounds. discussing politics, culture and art late into the night, sharing ideas, recipes, milk, shower gel and lovers – that would be what she’d look back on of course, not the paintwork.  In the absence of either a bell or knocker, she rapped firmly on the door.
        There was no reply. Holly peered through gap in curtains in the downstairs window, but there was nothing but gloom within.  She could hear a faint thudding of a bass beat, but was not sure which house it belonged to.  She rapped more firmly, and was searching for a pebble to throw to the upstairs window when the door opened. A shirtless, overweight twenty-something, with bleary eyes and greasy hair stood in the doorway wearing boxer shorts and mismatched socks.
        “I’ve come for the upstairs room, I’m the new tenant,” said Holly brightly.
</p>
   <p> The man grunted slightly and moved aside. He gestured up the dim, uncarpeted stairway and began to shuffle along the dark hallway to the rear of the house.</p>
<p>    “Top floor, is that right?  I guess I just follow my nose!” Holly gave a high laugh, and received another grunt in reply. Then the man was gone.</p>
   <p>
        Not to worry, he must be the quiet moody type, thought Holly, too caught up in his own profound thoughts for inane chit-chat.  One day she would penetrate his hard outer shell and release the free spirit inside.  Anyway, now for the stairs.
        The four flights of stairs would be worth it, she’d decided when she picked out the flat, even if it did mean her going downstairs to get to the bathroom, because the room faced the front, and she could watch the world scurry by as she sipped her morning coffee.  Kicking one bag in front and dragging the others behind, she finally made it up the four flights and flung open the door to her new room, her new haven, her new adult life. 
        Peeling beige wallpaper, a lumpy mattress on a chipboard bedframe, a bare light bulb, a flat-pack wardrobe inexpertly put together.  All this, Holly could just about put up with, but when she saw the view from her window – a dull patch of grey sky, invariable whatever the angle, she finally had to admit to herself that her adult life was not getting off to a great start.   
   </p>
<b-container>
         <b-row class="mt-3 mb-3">
             <b-col class="col-12 mr-auto ml-auto mb-2 ">
                 <b-col><b>1. What can be inferred from the text?</b></b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedRight">a) This is Holly’s first time living away from home.</b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">b) Holly visited the house before deciding to move in. </b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">c) Holly is new to this part of the town.</b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">d) Holly already knows someone who lives in this house.</b-col>
            </b-col>
         </b-row>
         <hr>
            <b-row class="mt-3 mb-3">
             <b-col class="col-12 mr-auto ml-auto mb-2 ">
                  <b-col><b>2. Where is Knox Road?</b></b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedRight">a) in a town centre.</b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">b) in a suburb. </b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">c) in a village.</b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">d) on a housing estate.</b-col>
            </b-col>
         </b-row>
         <hr>
            <b-row class="mt-3 mb-3">
             <b-col class="col-12 mr-auto ml-auto mb-2 ">
                <b-col><b>3. Which word best describes 126 Knox Road?</b></b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">a) austere.</b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedRight">b) run-down. </b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">c) quaint.</b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">d) pristine.</b-col>
            </b-col>
         </b-row>
         <hr>
            <b-row class="mt-3 mb-3">
             <b-col class="col-12 mr-auto ml-auto mb-2 ">
                <b-col><b>4. What can be inferred about the character of Holly?</b></b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedRight">a) She is a daydreamer.  </b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">b) She is ambitious. </b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">c) She is prejudiced. </b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">d) She is reckless.</b-col>
            </b-col>
         </b-row>
         <hr>
            <b-row class="mt-3 mb-3">
             <b-col class="col-12 mr-auto ml-auto mb-2 ">
                <b-col><b>5.  Which one is NOT true of 126 Knox Road?</b></b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedRight">a) There isn’t a front garden.</b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">b) The window frames need painting. </b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">c) There isn’t a doorbell or a door knocker.</b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">d) The downstairs curtains are drawn.</b-col>
            </b-col>
         </b-row>
         <hr>
            <b-row class="mt-3 mb-3">
             <b-col class="col-12 mr-auto ml-auto mb-2 ">
                <b-col><b>6. What can be inferred about the man who opened the door?</b></b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">a) He owns the property. </b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">b) He had not expected Holly. </b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">c) He lives in the front, ground floor room. </b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedRight">d) He had been asleep.</b-col>
            </b-col>
         </b-row>
         <hr>
            <b-row class="mt-3 mb-3">
             <b-col class="col-12 mr-auto ml-auto mb-2 ">
                <b-col><b>7. Which one is NOT true of Holly’s room?</b></b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">a) It is on the fourth floor.</b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">b) It is furnished.</b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedRight">c) It has an en suite bathroom.</b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">d) It is at the front of the house.</b-col>
            </b-col>
         </b-row>
         <hr>
            <b-row class="mt-3 mb-3">
             <b-col class="col-12 mr-auto ml-auto mb-2 ">
                <b-col><b>8. Which best describes the change in Holly’s emotions?</b></b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">a) nervous → optimistic.</b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedRight">b) optimistic → disillusioned. </b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">c) disappointed → resigned.</b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">d) eager → nervous.</b-col>
            </b-col>
         </b-row>
         <hr>
     </b-container>
            <b-row>  
                <b-col class="mt-3 mb-3 text-center"><router-link :to="{name: 'read', params: {solvedB1Read2: true}}" ><b-button class="btn btn-warning" type="button" v-on:click="AddSolvedToUserDb">Solved!</b-button></router-link></b-col>
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
          solvedB1Read2: false
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
      this.solvedB1Read2 = true;
      var db = firebase.firestore();
      db.collection(this.email).doc(this.email).set({solvedB1Read2: this.solvedB1Read2} ,{merge:true})
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