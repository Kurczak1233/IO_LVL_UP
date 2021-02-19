<template>
    <body>
    <b-container v-if="formalConsent === false" class="col-10 mt-5 col-md-8 col-xl-8 mr-auto ml-auto background-bluish" fluid>
        <b-row>
             <b-col class="text-center text-danger pt-2 text-size-big">
                You are attempting an exam.
            </b-col>    
        </b-row>
        <b-row>
         <b-col class="col-12 text-center">
             You will have to pass this exam if you want to gain access to end test. You can repeat this test if you do not pass.
         </b-col>
          <b-col class="pt-2 pb-3 text-center"><b>GOOD LUCK!</b></b-col>
          
        </b-row>
                <b-row>
            <b-col class="col-12 text-center mt-3 mb-3">
                    <button class="btn btn-warning" v-on:click.once="GiveConsent">Start the test!</button>
            </b-col>
        </b-row>
    </b-container>
     <b-container v-if="formalConsent === true && PassedOrNot === false" class="col-12 col-sm-10 mt-5 col-md-8 col-xl-8 mr-auto ml-auto background-bluish p-5" fluid>
<b>Extract</b>

<p>Six months ago I made a rash promise. The leader of the youth club in our village rang me in March saying, ''We're thinking of running a children's playscheme for a day in October half-term. Would you be prepared to help?'' My response was ''Sure, why not?'' In truth I was a little flattered to be asked, even though working as a care assistant with old people hardly qualified me for the role. Still, I duly put the date in my diary and of course I forgot all about it. I don't know if you've noticed this but time has a habit of speeding along faster than a police car chasing a robber and, before I knew it, the day was dawning.</p>

<p>I arrived at the youth centre that morning feeling full of trepidation. There was a gang of 12 helpers including me and each pair had been allocated a particular age group. Mine was the 10 to 11 year olds. Even with the planning meeting I had attended the week before, I worried about whether I was up to the task. Why hadn't I read through the copious lesson plans we were given beforehand? And wasn't the average 10-year-old more interested in the latest Play Station game than making things with paper and glue?</p>

<p>All too quickly the children began arriving. The look of relief on parents' faces as they handed their offspring over to us was quite comical. A handful of the children were already members of the club but the other forty five or so were from the local primary schools. Again I asked myself why I had elected to spend a day with all these 'little monsters' especially when I have two all of my own to contend with! I needn't have worried of course as it turned out to be a marvellous day. We watched entertaining dvd clips, learned 'action' songs, made clay pyramids, decorated biscuits, played memory games and spent some time in quiet reflection. I say 'we' because I rediscovered my inner child and joined in all the activities.</p>

<p>The particular highlight for me was the final rendition of ''He's got the whole world in his hands'' in the closing part of the day. The children knew the words and actions off by heart and sang so loudly it was almost enough to bring the roof down. It's difficult to explain those moments; only that the body tingles with the pleasure of having witnessed something so magical.</p>

<p>Of course there were also moments of great poignancy. I found it difficult to stop thinking of one little girl, who mentioned oh-so-casually that her mum was in hospital and would be there for a long time. It's easy for us adults to idealise childhood and forget that some children have their own burden of anxieties and concerns. When I got home utterly exhausted, still with modelling clay under my fingernails, I reflected on what a privilege it had been.</p>

<p>There was one disappointment for the children and that was that the playscheme was only running for a day, and not the whole week. As I said farewell to my group, one of the children turned and said ''Can we do it again in the next holiday, Miss?'' My response was, ''Sure, why not?''  </p>

     <b-container>
         <b-row class="mt-3 mb-3">
             <b-col class="col-12 mr-auto ml-auto mb-2 ">
                 <b-col><b>1. When the first day of the job arrived the writer was surprised</b></b-col>
                    <b-form-radio v-model="answear1" name="answear1" value="A">that the day had come round so quickly.</b-form-radio>
                    <b-form-radio v-model="answear1" name="answear1" value="B">because she'd forgotten to write down the date.</b-form-radio>
                    <b-form-radio v-model="answear1" name="answear1" value="C">because she witnessed a car chase on the way.</b-form-radio>
                    <b-form-radio v-model="answear1" name="answear1" value="D">that she woke up at dawn.</b-form-radio>
                </b-col>
            </b-row>
         <hr>
            <b-row class="mt-3 mb-3">
             <b-col class="col-12 mr-auto ml-auto mb-2 ">
                 <b-col><b>2. When the writer arrived to start her job she</b></b-col>
                    <b-form-radio v-model="answear2" name="answear2" value="A">put the children into pairs.</b-form-radio>
                    <b-form-radio v-model="answear2" name="answear2" value="B">realised she should have done more preparation.</b-form-radio>
                    <b-form-radio v-model="answear2" name="answear2" value="C">felt confident she could deal with 10 and 11 year</b-form-radio>
                    <b-form-radio v-model="answear2" name="answear2" value="D">saw the children had brought their own electronic games to play with.</b-form-radio>
                </b-col>
            </b-row>
         <hr>
            <b-row class="mt-3 mb-3">
             <b-col class="col-12 mr-auto ml-auto mb-2 ">
                 <b-col><b>3. According to the writer, the parents were</b></b-col>
                    <b-form-radio v-model="answear3" name="answear3" value="A"> happy to stay with their children all day.</b-form-radio>
                    <b-form-radio v-model="answear3" name="answear3" value="B">worried about children from the other schools.</b-form-radio>
                    <b-form-radio v-model="answear3" name="answear3" value="C">nervous that their children might not behave themselves.</b-form-radio>
                    <b-form-radio v-model="answear3" name="answear3" value="D">glad to leave their children.</b-form-radio>
                </b-col>
            </b-row>
         <hr>
            <b-row class="mt-3 mb-3">
             <b-col class="col-12 mr-auto ml-auto mb-2 ">
                 <b-col><b>4. The writer's best moment</b></b-col>
                    <b-form-radio v-model="answear4" name="answear4" value="A">occurred in the middle of the day.</b-form-radio>
                    <b-form-radio v-model="answear4" name="answear4" value="B">took her by surprise.</b-form-radio>
                    <b-form-radio v-model="answear4" name="answear4" value="C">was hard to put into words.</b-form-radio>
                    <b-form-radio v-model="answear4" name="answear4" value="D">was when the day was over.</b-form-radio>
                </b-col>
            </b-row>
         <hr>
            <b-row class="mt-3 mb-3">
             <b-col class="col-12 mr-auto ml-auto mb-2 ">
                 <b-col><b>5. According to the writer, adults</b></b-col>
                    <b-form-radio v-model="answear5" name="answear5" value="A">think that being a child is a privilege.</b-form-radio>
                    <b-form-radio v-model="answear5" name="answear5" value="B">sometimes forget that children have worries too.</b-form-radio>
                    <b-form-radio v-model="answear5" name="answear5" value="C">are usually exhausted by bringing up their children.</b-form-radio>
                    <b-form-radio v-model="answear5" name="answear5" value="D">don't have a stressful life.</b-form-radio>
                </b-col>
            </b-row>
         <hr>
            <b-row class="mt-3 mb-3">
             <b-col class="col-12 mr-auto ml-auto mb-2 ">
                 <b-col><b>6. What is the writer's attitude by the end of the day?</b></b-col>
                    <b-form-radio v-model="answear6" name="answear6" value="A">She could imagine doing the job again next time.</b-form-radio>
                    <b-form-radio v-model="answear6" name="answear6" value="B">She was sad to say good bye to the chidlren.</b-form-radio>
                    <b-form-radio v-model="answear6" name="answear6" value="C">She was disappointed with the experience.</b-form-radio>
                    <b-form-radio v-model="answear6" name="answear6" value="D">He hopes the playscheme will be longer in future.</b-form-radio>
                </b-col>
            </b-row>
         <hr>
     </b-container>
            <b-row>  
                <b-col class="mt-3 mb-3 text-center"><router-link :to="{name: 'read', params: {solvedB1Read1: true}}" ><b-button class="btn btn-warning" type="button" v-on:click="AddSolvedToUserDb">Solved!</b-button></router-link></b-col>
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
          solvedB1Read1: false,
          PassedOrNot: false,
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
@media (max-width: 500px)
 { 
body {
font-size: 0.7rem;
 }; 
 }

</style>