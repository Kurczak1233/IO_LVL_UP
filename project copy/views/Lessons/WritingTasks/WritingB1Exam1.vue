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
     <b-container v-if="formalConsent === true && PassedOrNot !== true" class="col-12 col-sm-10 mt-5 col-md-8 col-xl-10 mr-auto ml-auto background-bluish p-5" fluid>
        <b><h3><i>Tricky words section</i></h3></b>
<b-row>
  
  <form class="form-inline">
    
    <b-col class="col-12 mb-2">
      <b-button-toolbar>
      <label class="my-1 mr-2 d-inline" for="answear1">1) Adjective; something is that when it is might be helpful (Wskazane)</label>
      <b-input-group  size="sm" class="mr-1">
        <b-form-input type="text" v-model="answear1" id="answear1"></b-form-input>
        </b-input-group>

      </b-button-toolbar>
    </b-col>
    <b-col class="col-12 mb-2">
        <b-button-toolbar>
          <label class="my-1 mr-2 d-inline" for="answear2">2) Noun: your friend. (Kolega)</label>
          <b-input-group  size="sm" class="mr-1">
          <b-form-input type="text" v-model="answear2"  id="answear2"></b-form-input>
          </b-input-group>

      </b-button-toolbar>
    </b-col>
    <b-col class="col-12 mb-2">
      <b-button-toolbar>
        <label class="my-1 mr-2 d-inline" for="answear3">3) Noun: the way in which two or more things which you are comparing are not the same. (Różnica)</label>
      <b-input-group  size="sm" class="mr-1">
        <b-form-input type="text" v-model="answear3"  id="answear3"></b-form-input>
        </b-input-group>

      </b-button-toolbar>
      </b-col>
    <b-col class="col-12 mb-2">  
        <b-button-toolbar>
        <label class="my-1 mr-2 d-inline" for="answear4">4) Noun: Place where politics work (Parlament)</label>
      <b-input-group  size="sm" class="mr-1">
        <b-form-input type="text" v-model="answear4"  id="answear4"></b-form-input>
        </b-input-group>

      </b-button-toolbar>
        </b-col>
        <b-col class="col-12 mb-2">
          <b-button-toolbar>
        <label class="my-1 mr-2 d-inline" for="answear5">5) Noun: the way we say something (Wymowa)</label>
      <b-input-group  size="sm" class="mr-1">
        <b-form-input type="text" v-model="answear5"  id="answear5"></b-form-input>
        </b-input-group>

      </b-button-toolbar>
        </b-col>
        <b-col class="col-12 mb-2">
          <b-button-toolbar>
        <label class="my-1 mr-2 d-inline" for="answear1">6) Verb: to describe someone an item which was useful to you. (Polecać)</label>
      <b-input-group  size="sm" class="mr-1">
        <b-form-input type="text" v-model="answear6"  id="answear6"></b-form-input>
        </b-input-group>

      </b-button-toolbar>
        </b-col>
        <b-col class="col-12 mb-2">
          <b-button-toolbar>
        <label class="my-1 mr-2 d-inline" for="answear1">7) Adjective: To be ... means you achieved your goals. (Sukces)</label>
      <b-input-group  size="sm" class="mr-1">
        <b-form-input type="text" v-model="answear7"  id="answear7"></b-form-input>
        </b-input-group>

      </b-button-toolbar>
        </b-col>
        <b-col class="col-12 mb-2">
          <b-button-toolbar>
        <label class="my-1 mr-2 d-inline" for="answear1">8) Verb: to make an unexpected impression on someone (Niespodzianka)</label>
      <b-input-group  size="sm" class="mr-1">
        <b-form-input type="text" v-model="answear8"  id="answear8"></b-form-input>
        </b-input-group>

      </b-button-toolbar>
     </b-col>
     </form>
    <b-col class="text-center col-12 mb-2">
        <button type="button" v-on:click="checkForm" aria-describedby="Check answears button" class="btn btn-primary my-1">Check answears</button>
    </b-col>
  </b-row>  
     </b-container>
      <b-container v-if="PassedOrNot === true" class="col-10 mt-5 col-md-8 col-xl-8 mr-auto ml-auto background-bluish" fluid>
        <b-row>
            <b-col class="text-center text-black pt-2 text-size-big">
                <p v-if="points < 4" class="text-size-big text-center p-3">You <span class="text-danger">FAILED</span> the test! Learn some more and try again</p> 
                <p v-else-if="points >= 4" class="text-size-big text-center">You <span class="text-success">PASSED</span> the test!</p> 
                <b-col class="text-center mb-3" >
                    <router-link :to="{name: 'read', params: {ExamB1Writing1Passed: this.ExamB1Writing1Passed}}"><button class="btn btn-warning" type="button">Confirm</button></router-link>
                </b-col>
            </b-col>    
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
          ExamB1Writing1Passed: false,
          answear1: '',
          answear2: '',
          answear3: '',
          answear4: '',
          answear5: '',
          answear6: '',
          answear7: '',
          answear8: '',
          button1Clicked: 0,
          button2Clicked: 0,
          button3Clicked: 0,
          button4Clicked: 0,
          button5Clicked: 0,
          button6Clicked: 0,
          button7Clicked: 0,
          button8Clicked: 0,
          points: 0,
          PassedOrNot: false,
          QuizesCount: 1,
          writing: 0
      }
    },
    mounted: function()
    {
        var db = firebase.firestore();
        db.collection(this.email).doc(this.email).get().then((doc) => {
    if (doc.exists) {
        this.writing = doc.data().writing;

    } else {
        console.log("No such document!");
    }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    },
    methods:
    {
        checkForm: function() {
                this.PassedOrNot = true;
                let correctAnswears = ['advisable', "colleague", "difference", "parliament", "pronunciation", "recommend","successful","surprise"];
                let answears = [document.getElementById("answear1").value,document.getElementById("answear2").value,document.getElementById("answear3").value,document.getElementById("answear4").value,document.getElementById("answear5").value,document.getElementById("answear6").value, document.getElementById("answear7").value, document.getElementById("answear8").value];
                for(let i = 0; i<correctAnswears.length;i++)
                {
                    if(correctAnswears[i] === answears[i])
                    {
                        this.points++;
                    }
                } 
                if(this.points >= 4)
                {
                    this.AddSolvedToUserDb();
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
      this.ExamB1Writing1Passed = true;
      var db = firebase.firestore();
      db.collection(this.email).doc(this.email).set({ExamB1Writing1Passed: this.ExamB1Writing1Passed} ,{merge:true});
      db.collection(this.email).doc(this.email).update({writing: this.writing+(1/this.QuizesCount)*100});
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