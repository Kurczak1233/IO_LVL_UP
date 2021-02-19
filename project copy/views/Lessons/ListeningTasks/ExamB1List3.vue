<template>
  <body>
    <b-container v-if="GiveConsent===false" class="col-10 mt-5 col-md-8 col-xl-5 mr-auto ml-auto background-bluish" fluid>
        <b-row>
             <b-col class="text-center text-danger pt-2 text-size-big">
                You are attempting an exam.
            </b-col>    
        </b-row>
        <b-row>
         <b-col class="col-12">You will have to pass this exam if you want to gain access to end test. You can repeat this test if you do not pass.</b-col>
          <b-col class="pt-2 pb-3 text-center"><b>GOOD LUCK!</b></b-col>
        </b-row>
        <b-row>
            <b-col class="col-12 text-center mt-3 mb-3">
                    <button class="btn btn-warning" v-on:click.once="StartTest">Start the test!</button>
            </b-col>
        </b-row>
    </b-container>
    <b-container v-if="GiveConsent === true && PassedOrNot === false" class="col-10 mt-5 col-md-8 col-xl-8 mr-auto ml-auto background-bluish" fluid>
        <b-row>
            <b-col class="text-secondary text-center mt-3 mb-3 font-bigger">
                Read the question part first. Then start the audio file and solve the questions.
            </b-col>
        </b-row>
        <b-row>
            <b-col class="text-center text-info pt-2 text-size-big">
                Question {{taskList[0].id}}
            </b-col>    
        </b-row>
        <b-row>
          <b-col class="col-10 offset-1 pt-3 text-center font-bigger">{{taskList[0].description}}</b-col>
            <b-col class="d-flex align-items-center mt-3" >
                <b-form-radio-group  stacked v-model="taskList[0].userChoice" :options="taskList[0].options" class="text-center font-medium col-12" value-field="item" text-field="name"></b-form-radio-group>
            </b-col>
        </b-row>
        <b-row>
            <b-col class="text-center text-info pt-2 text-size-big">
                Question {{taskList[1].id}}
            </b-col>    
        </b-row>
        <b-row>
          <b-col class="col-10 offset-1 pt-3 text-center font-bigger">{{taskList[1].description}}</b-col>
            <b-col class="d-flex align-items-center mt-3" >
                <b-form-radio-group stacked v-model="taskList[1].userChoice" :options="taskList[1].options" class="text-center font-medium col-12" value-field="item" text-field="name"></b-form-radio-group>
            </b-col>
        </b-row> 
        <b-row>
            <b-col class="text-center text-info pt-2 text-size-big">
                Question {{taskList[2].id}}
            </b-col>    
        </b-row>
        <b-row>
          <b-col class="col-10 offset-1 pt-3 text-center font-bigger">{{taskList[2].description}}</b-col>
            <b-col class="d-flex align-items-center mt-3" >
                <b-form-radio-group stacked v-model="taskList[2].userChoice" :options="taskList[2].options" class="text-center font-medium col-12" value-field="item" text-field="name"></b-form-radio-group>
            </b-col>
        </b-row> 
        <b-row>
            <b-col class="text-center text-info pt-2 text-size-big">
                Question {{taskList[3].id}}
            </b-col>    
        </b-row>
        <b-row>
          <b-col class="col-10 offset-1 pt-3 text-center font-bigger">{{taskList[3].description}}</b-col>
            <b-col class="d-flex align-items-center mt-3" >
                <b-form-radio-group stacked v-model="taskList[3].userChoice" :options="taskList[3].options" class="text-center font-medium col-12" value-field="item" text-field="name"></b-form-radio-group>
            </b-col>
        </b-row>
         <b-row>
            <b-col class="text-center text-info pt-2 text-size-big">
                Question {{taskList[4].id}}
            </b-col>    
        </b-row>
        <b-row>
          <b-col class="col-10 offset-1 pt-3 text-center font-bigger">{{taskList[4].description}}</b-col>
            <b-col class="d-flex align-items-center mt-3" >
                <b-form-radio-group stacked v-model="taskList[4].userChoice" :options="taskList[4].options" class="text-center font-medium col-12" value-field="item" text-field="name"></b-form-radio-group>
            </b-col>
        </b-row>          
        <b-row>
            <b-col class="text-center mb-3 mt-3" >
                <b-form>
                   
                    <button class="btn btn-warning" v-on:click.once="SubmitForm" v-if="taskList[4].userChoice!==null && taskList[3].userChoice!==null && taskList[2].userChoice!==null && taskList[1].userChoice!==null && taskList[0].userChoice!==null" type="button">End test</button>
                     <button class="btn btn-warning" v-else disabled type="button">End test</button>
                </b-form>
            </b-col>
        </b-row>
            <b-row class="mt-4 mb-3">
               <b-col class="text-center">
                   <audio src="https://raw.githubusercontent.com/Kurczak1233/IO_LVL_UP/main/project%20copy/src/assets/Exam%203%20Listening.mp3" controls ></audio>
                </b-col>
            </b-row>
    </b-container>

     <b-container v-if="PassedOrNot === true" class="col-10 mt-5 col-md-8 col-xl-8 mr-auto ml-auto background-bluish" fluid>
        <b-row>
            <b-col class="text-center text-black pt-2 text-size-big">
                <p v-if="points < 3" class="text-size-big text-center p-3">You <span class="text-danger">FAILED</span> the test! Learn some more and try again</p> 
                <p v-else-if="points >= 3" class="text-size-big text-center">You <span class="text-success">PASSED</span> the test!</p> 
                <b-col class="text-center mb-3" >
                    <router-link :to="{name: 'listen', params: {ExamB1List3Passed: this.ExamB1List3Passed}}"><button class="btn btn-warning" type="button">Confirm</button></router-link>
                </b-col>
            </b-col>    
        </b-row>
    </b-container>
  </body>
</template>

<script>
import { firebase } from '@firebase/app'
import '@firebase/auth'
function Task(id, description, answear1, answear2, answear3, answear4, correctAnswear, userChoice){
    this.id = id;
    this.description = description;
    this.answear1 = answear1
    this.answear2 = answear2
    this.answear3 = answear3
    this.answear4 = answear4
    this.correctAnswear = correctAnswear
    this.userChoice = userChoice
    this.options = [answear1, answear2, answear3, answear4]
}

function TaskBuilder() {

    return {
        setId: function(id) {
            this.id = id;
            return this;
        },
        setDescription: function(description) {
            this.description = description;
            return this;
        },
        setAnswear1: function(answear1) {
            this.answear1 = answear1;
            return this;
        },
        setAnswear2: function(answear2) {
            this.answear2 = answear2;
            return this;
        },
        setAnswear3: function(answear3) {
            this.answear3 = answear3;
            return this;
        },
        setAnswear4: function(answear4) {
            this.answear4 = answear4;
            return this;
        },
        correctAnswear: function(correctAnswear) {
            this.correctAnswear = correctAnswear;
            return this;
        },
        userChoice: function(userChoice) {
            this.userChoice = userChoice;
            return this;
        },
        options: function(options) {
            this.options = options;
            return this;
        },
        build: function () {
            return new Task(this.id, this.description, this.answear1, this.answear2,this.answear3,this.answear4, this.correctAnswear, this.userChoice, this.options);
        }
    }
}
let task = (new TaskBuilder()).setId("1").userChoice(null)
        .setDescription("Speaker 1 speaks about:").setAnswear1("Computer games prevent children learning other languages").setAnswear2("Computer games do not prevent children learning other languages").setAnswear3("Computer games are in general very beneficial").setAnswear4("Children are overwhelmed by computer games").correctAnswear("Computer games prevent children learning other languages").build();
let task2 = (new TaskBuilder()).setId("2").userChoice(null)
       .setDescription("Speaker 2 speaks about:").setAnswear1("The nature of computer games could improve society").setAnswear2("Restrictions are discouraging gamers from buying games legally").setAnswear3("Computer games are encouraging gamers from buying games legally").setAnswear4("People are unnecessarily worried about the harmful effects of gaming").correctAnswear("Restrictions are discouraging gamers from buying games legally").build();
let task3 = (new TaskBuilder()).setId("3").userChoice(null)
      .setDescription("Speaker 3 speaks about:").setAnswear1("Computer games do not prevent children learning other languages").setAnswear2("Game regulators need to take several things into account").setAnswear3("Game regulators can be careless while taking things into account").setAnswear4("Games are very addictive").correctAnswear("Game regulators need to take several things into account").build();
let task4 = (new TaskBuilder()).setId("4").userChoice(null)
      .setDescription("Speaker 4 speaks about:").setAnswear1("We should be aware of negative consequences of gaming").setAnswear2("Too many children are addicted to computer games").setAnswear3("Games are worthless and we should not rely on them in any way").setAnswear4("The nature of computer games could improve society").correctAnswear("The nature of computer games could improve society").build();
let task5 = (new TaskBuilder()).setId("5").userChoice(null)
      .setDescription("Speaker 5 speaks about:").setAnswear1("Restrictions are discouraging gamers from buying games legally").setAnswear2("The nature of computer games could improve society").setAnswear3("People are unnecessarily worried about the harmful effects of gaming").setAnswear4("The nature of gaming remains undiscovered").correctAnswear("People are unnecessarily worried about the harmful effects of gaming").build();
let taskList = [task, task2, task3, task4, task5];

export default {
    name: 'Speaking',
        data: function()
    {
      return { 
         GiveConsent: false,
         ExamB1List3Passed: false,
         email: firebase.auth().currentUser.email,
         taskList: taskList,
         PassedOrNot: false,
         QuizesCount: 3,
         points: 0,
        selected: null,
         options: [
          { item: task.answear1, name: task.answear1 },
          { item: task.answear2, name: task.answear2 },
          { item: task.answear3, name: task.answear3 },
          { item: task.answear4, name: task.answear4 }
        ]
      }
    },
    mounted: function()
    {
        var db = firebase.firestore();
        db.collection(this.email).doc(this.email).get().then((doc) => {
    if (doc.exists) {
        this.listening = doc.data().listening;

    } else {
        console.log("No such document!");
    }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    },
    created: function()
    {
        this.QuizesCount = this.$route.params.QuizesCount;
    },
    methods:
    {
        StartTest: function()
        {
            this.GiveConsent = true;
        },
        SubmitForm: function()
        {  
            for(let i = 0; i < this.taskList.length; i++)
            {
                
                if(this.taskList[i].correctAnswear === this.taskList[i].userChoice)
                {
                    this.points++; 
                }
            }
            this.PassedOrNot = true;
             var db = firebase.firestore();
            if(this.points < 3)
            {
                for(let i = 0; i < this.taskList.length; i++)
                {   
                    this.taskList[i].userChoice = null;
                }
            }
            else if(this.points >= 3)
            { 
                for(let i = 0; i < this.taskList.length; i++)
                {   
                    this.taskList[i].userChoice = null;
                }
                this.ExamB1List3Passed = true;
                db.collection(this.email).doc(this.email).update({listening: this.listening+(1/this.QuizesCount)*100});
                db.collection(this.email).doc(this.email).update({ExamB1List3Passed: this.ExamB1List3Passed});
            }
        }
    }
}
</script>

<style scoped>
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
</style>
