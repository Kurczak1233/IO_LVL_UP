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
        <b><h3><i>Island Life</i></h3></b>
<p>
    We live on the island of Hale. It's about four kilometres long and two kilometres wide at its broadest point, and it's joined to the mainland by a causeway called the Stand - a narrow road built across the mouth of the river which separates us from the rest of the country. Most of the time you wouldn't know we're on an island because the river mouth between us and the mainland is just a vast stretch of tall grasses and brown mud. But when there's a high tide and the water rises a half a metre or so above the road and nothing can pass until the tide goes out again a few hours later, then you know it's an island.
</p>    
<p>
    We were on our way back from the mainland. My older brother, Dominic, had just finished his first year at university in a town 150 km away. Dominic's train was due in at five and he'd asked for a lift back from the station. Now, Dad normally hates being disturbed when he's writing (which is just about all the time), and he also hates having to go anywhere, but despite the typical sighs and moans - why can't he get a taxi? what's wrong with the bus? - I could tell by the sparkle in his eyes that he was really looking forward to seeing Dominic.
</p>    
<p>
    So, anyway, Dad and I had driven to the mainland and picked up Dominic from the station. He had been talking non-stop from the moment he'd slung his rucksack in the boot and got in the car. University this, university that, writers, books, parties, people, money, gigsâ€¦. And when I say talking, I don't mean talking as in having a conversation, I mean talking as in jabbering like a mad thing. I didn't like it ... the way he spoke and waved his hands around as if he was some kind of intellectual or something. It was embarrassing. It made me feel uncomfortable - that kind of discomfort you feel when someone you like, someone close to you, suddenly starts acting like a complete idiot. And I didn't like the way he was ignoring me, either. For all the attention I was getting I might as well not have been there. I felt a stranger in my own car.
</p>    
<p>
    As we approached the island on that Friday afternoon, the tide was low and the Stand welcomed us home, stretched out before us, clear and dry, beautifully hazy in the heat - a raised strip of grey concrete bound by white railings and a low footpath on either side, with rough cobbled banks leading down to the water. Beyond the railings, the water was glinting with that wonderful silver light we sometimes get here in the late afternoon which lazes through to the early evening.
</p>    
<p>
    We were about halfway across when I saw the boy. My first thought was how odd it was to see someone walking on the Stand. You don't often see people walking around here. Between Hale and Moulton (the nearest town about thirty kilometres away on the mainland), there's nothing but small cottages, farmland, heathland and a couple of hills. So islanders don't walk because of that. If they're going to Moulton they tend to take the bus. So the only pedestrians you're likely to see around here are walkers or bird-watchers. But even from a distance I could tell that the figure ahead didn't fit into either of these categories. I wasn't sure how I knew, I just did.
</p>    
<p>
    As we drew closer, he became clearer. He was actually a young man rather than a boy. Although he was on the small side, he wasn't as slight as I'd first thought. He wasn't exactly muscular, but he wasn't weedy-looking either. It's hard to explain. There was a sense of strength about him, a graceful strength that showed in his balance, the way he held himself, the way he walked.
</p>    
<b-container>
         <b-row class="mt-3 mb-3">
             <b-col class="col-12 mr-auto ml-auto mb-2 ">
                 <b-col><b>1. In the first paragraph, what is Caitlin's main point about the island?</b></b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">a) It can be dangerous to try to cross from the mainland.</b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">b) It is much smaller than it looks from the mainland. </b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedRight">c) It is only completely cut off at certain times.</b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">d) It can be a difficult place for people to live in.</b-col>
            </b-col>
         </b-row>
         <hr>
            <b-row class="mt-3 mb-3">
             <b-col class="col-12 mr-auto ml-auto mb-2 ">
                <b-col><b>2. What does Caitlin suggest about her father?</b></b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">a) His writing prevents him from doing things he wants to do with his family.</b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">b) His initial reaction to his son's request is different from usual. </b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">c) His true feelings are easily hidden from his daughter. </b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedRight">d) His son's arrival is one event he will take time off for. </b-col>
            </b-col>
         </b-row>
         <hr>
            <b-row class="mt-3 mb-3">
             <b-col class="col-12 mr-auto ml-auto mb-2 ">
                 <b-col><b>3. Caitlin emphasises her feelings of discomfort because she</b></b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">a) is embarrassed that she doesn't understand what her brother is talking about.</b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">b) feels confused about why she can't relate to her brother any more. </b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedRight">c) is upset by the unexpected change in her brother's behaviour.</b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">d) feels foolish that her brother's attention is so important to her.</b-col>
            </b-col>
         </b-row>
         <hr>
            <b-row class="mt-3 mb-3">
             <b-col class="col-12 mr-auto ml-auto mb-2 ">
                <b-col><b>4. In the fourth paragraph, what is Caitlin's purpose in describing the island?</b></b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedRight">a) to express her positive feelings about it. </b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">b) to explain how the road was built. </b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">c) to illustrate what kind of weather was usual. </b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">d) to describe her journey home.</b-col>
            </b-col>
         </b-row>
         <hr>
            <b-row class="mt-3 mb-3">
             <b-col class="col-12 mr-auto ml-auto mb-2 ">
                 <b-col><b>5. In 'because of that' in the forth paragraph, 'that' refers to the fact that</b></b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">a) locals think it is odd to walk anywhere.</b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">b) it is easier for people to take the bus than walk. </b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">c) people have everything they need on the island.</b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedRight">d) there is nowhere in particular to walk to from the island.</b-col>
            </b-col>
         </b-row>
         <hr>
            <b-row class="mt-3 mb-3">
             <b-col class="col-12 mr-auto ml-auto mb-2 ">
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
          solvedB1Read3: false
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