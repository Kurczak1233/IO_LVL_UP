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
     <b-container v-if="formalConsent === true" class="col-12 col-sm-10 mt-5 col-md-8 col-xl-10 mr-auto ml-auto background-bluish p-5" fluid>
        <b><h3><i>Tricky words section</i></h3></b>
<b-row>
  
  <form class="form-inline">
    
    <b-col class="col-12 mb-2">
      <b-button-toolbar>
      <label class="my-1 mr-2 d-inline" for="answear1">1) Noun: a list of questions; survey (Kwestionariusz)</label>
      <b-input-group  size="sm" class="mr-1">
        <b-form-input type="text" v-model="answear1" id="answear1"></b-form-input>
        </b-input-group>
        <b-button-group>
        <b-button v-on:click="Hint('answear1', 0, 'questionnaire')" id="hint1" size="sm" class="btn btn-primary">Hint</b-button>
        </b-button-group>
      </b-button-toolbar>
    </b-col>
    <b-col class="col-12 mb-2">
        <b-button-toolbar>
          <label class="my-1 mr-2 d-inline" for="answear2">2) Adjective: not conscious; without awareness (Nieprzytomny)</label>
          <b-input-group  size="sm" class="mr-1">
          <b-form-input type="text" v-model="answear2"  id="answear2"></b-form-input>
          </b-input-group>
          <b-button-group>
            <b-button v-on:click="Hint('answear2', 0, 'unconscious')" id="hint2" size="sm" class="btn btn-primary">Hint</b-button>
          </b-button-group>
      </b-button-toolbar>
    </b-col>
    <b-col class="col-12 mb-2">
      <b-button-toolbar>
        <label class="my-1 mr-2 d-inline" for="answear3">3) Adjective: unusually mature, especially in mental development (Przedwczesny)</label>
      <b-input-group  size="sm" class="mr-1">
        <b-form-input type="text" v-model="answear3"  id="answear3"></b-form-input>
        </b-input-group>
        <b-button-group>
          <b-button v-on:click="Hint('answear3', 0, 'precocious')" id="hint3" size="sm" class="btn btn-primary">Hint</b-button>
        </b-button-group>
      </b-button-toolbar>
      </b-col>
    <b-col class="col-12 mb-2">  
        <b-button-toolbar>
        <label class="my-1 mr-2 d-inline" for="answear4">4) Noun: noun: a person who maintains a connection between people or groups (Łącznik (osoba))</label>
      <b-input-group  size="sm" class="mr-1">
        <b-form-input type="text" v-model="answear4"  id="answear4"></b-form-input>
        </b-input-group>
        <b-button-group>
          <b-button v-on:click="Hint('answear4', 0, 'liaison')" id="hint4" size="sm" class="btn btn-primary">Hint</b-button>
        </b-button-group>
      </b-button-toolbar>
        </b-col>
        <b-col class="col-12 mb-2">
          <b-button-toolbar>
        <label class="my-1 mr-2 d-inline" for="answear5">5) Noun: continuous observation of a person, place, or activity in order to gather information (Inwigilacja)</label>
      <b-input-group  size="sm" class="mr-1">
        <b-form-input type="text" v-model="answear5"  id="answear5"></b-form-input>
        </b-input-group>
        <b-button-group>
          <b-button v-on:click="Hint('answear5', 0, 'surveillance')" id="hint5" size="sm" class="btn btn-primary">Hint</b-button>
        </b-button-group>
      </b-button-toolbar>
        </b-col>
        <b-col class="col-12 mb-2">
          <b-button-toolbar>
        <label class="my-1 mr-2 d-inline" for="answear1">6) Noun: a widely cultivated plant with brightly-colored showy flower heads (Chryzantema)</label>
      <b-input-group  size="sm" class="mr-1">
        <b-form-input type="text" v-model="answear6"  id="answear6"></b-form-input>
        </b-input-group>
        <b-button-group>
          <b-button v-on:click="Hint('answear6', 0, 'chrysanthemum')" id="hint6" size="sm" class="btn btn-primary">Hint</b-button>
        </b-button-group>
      </b-button-toolbar>
        </b-col>
        <b-col class="col-12 mb-2">
          <b-button-toolbar>
        <label class="my-1 mr-2 d-inline" for="answear1">7) Noun: a tendency, habit or mannerism that is peculiar to an individual; a quirk (Idiosynkcacja)</label>
      <b-input-group  size="sm" class="mr-1">
        <b-form-input type="text" v-model="answear7"  id="answear7"></b-form-input>
        </b-input-group>
        <b-button-group>
          <b-button v-on:click="Hint('answear7', 0, 'idiosyncrasy')" id="hint7" size="sm" class="btn btn-primary">Hint</b-button>
        </b-button-group>
      </b-button-toolbar>
        </b-col>
        <b-col class="col-12 mb-2">
          <b-button-toolbar>
        <label class="my-1 mr-2 d-inline" for="answear1">8) Noun: a person hired to drive a private automobile or limousine (Szofer)</label>
      <b-input-group  size="sm" class="mr-1">
        <b-form-input type="text" v-model="answear8"  id="answear8"></b-form-input>
        </b-input-group>
        <b-button-group>
          <b-button v-on:click="Hint('answear8', 0, 'chauffeur')" id="hint8" size="sm" class="btn btn-primary">Hint</b-button>
        </b-button-group>
      </b-button-toolbar>
     </b-col>
     </form>
    <b-col class="text-center col-12 mb-2">
        <button type="button" v-on:click="checkForm" aria-describedby="Check answears button" class="btn btn-primary my-1">Check answears</button>
    </b-col>
  </b-row>
            <b-row>  
                <b-col class="mt-3 mb-3 text-center"><router-link :to="{name: 'write', params: {solvedB1Writing1: true}}" ><b-button class="btn btn-warning" type="button" v-on:click="AddSolvedToUserDb">Solved!</b-button></router-link></b-col>
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
          solvedB1Writing1: false,
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
      }
    },
    methods:
    {
        Hint: function(id, buttonClicked, answear)
        {
          this.buttonClicked = buttonClicked;
          this.id = id;
          this.answear = answear;
          buttonClicked++;
          let newString = "";
          for(let i = 0; i < answear.length; i++)
          {
            if(document.getElementById(id).value[i] !== answear[i])
            {
              newString += answear[i];
              document.getElementById(id).value = newString
              break;
            }
            else{
              newString += answear[i];
            }
          }
        },
        checkForm: function() {
                let correctAnswears = ['questionnaire', "unconscious", "precocious", "liaison", "surveillance", "chrysanthemum","idiosyncrasy","chauffeur"];
                let answearsIds =["answear1", "answear2", "answear3", "answear4", "answear5", "answear6", "answear7", "answear8"];
                let answears = [document.getElementById("answear1").value,document.getElementById("answear2").value,document.getElementById("answear3").value,document.getElementById("answear4").value,document.getElementById("answear5").value,document.getElementById("answear6").value, document.getElementById("answear7").value, document.getElementById("answear8").value];
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
      this.solvedB1Writing1 = true;
      var db = firebase.firestore();
      db.collection(this.email).doc(this.email).set({solvedB1Writing1: this.solvedB1Writing1} ,{merge:true})
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