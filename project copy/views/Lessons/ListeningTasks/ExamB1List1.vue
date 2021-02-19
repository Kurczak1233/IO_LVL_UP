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
            <b-col class="text-center text-info pt-2 text-size-big">
                Question {{taskList[5].id}}
            </b-col>    
        </b-row>
        <b-row>
          <b-col class="col-10 offset-1 pt-3 text-center font-bigger">{{taskList[5].description}}</b-col>
            <b-col class="d-flex align-items-center mt-3" >
                <b-form-radio-group stacked v-model="taskList[5].userChoice" :options="taskList[5].options" class="text-center font-medium col-12" value-field="item" text-field="name"></b-form-radio-group>
            </b-col>
        </b-row>
        <b-row>
            <b-col class="text-center text-info pt-2 text-size-big">
                Question {{taskList[6].id}}
            </b-col>    
        </b-row>
        <b-row>
          <b-col class="col-10 offset-1 pt-3 text-center font-bigger">{{taskList[6].description}}</b-col>
            <b-col class="d-flex align-items-center mt-3" >
                <b-form-radio-group stacked v-model="taskList[6].userChoice" :options="taskList[6].options" class="text-center font-medium col-12" value-field="item" text-field="name"></b-form-radio-group>
            </b-col>
        </b-row>
                 <b-row>
            <b-col class="text-center text-info pt-2 text-size-big">
                Question {{taskList[7].id}}
            </b-col>    
        </b-row>
        <b-row>
          <b-col class="col-10 offset-1 pt-3 text-center font-bigger">{{taskList[7].description}}</b-col>
            <b-col class="d-flex align-items-center mt-3" >
                <b-form-radio-group stacked v-model="taskList[7].userChoice" :options="taskList[7].options" class="text-center font-medium col-12" value-field="item" text-field="name"></b-form-radio-group>
            </b-col>
        </b-row>                         
        <b-row>
            <b-col class="text-center mb-3 mt-3" >
                <b-form>
                    <button class="btn btn-warning" v-on:click.once="SubmitForm" v-if="taskList[7].userChoice!==null && taskList[6].userChoice!==null && taskList[5].userChoice!==null && taskList[4].userChoice!==null && taskList[3].userChoice!==null && taskList[2].userChoice!==null && taskList[1].userChoice!==null && taskList[0].userChoice!==null" type="button">End test</button>
                     <button class="btn btn-warning" v-else disabled type="button">End test</button>
                </b-form>
            </b-col>
        </b-row>
            <b-row class="mt-4 mb-3">
               <b-col class="text-center">
                   <audio src="https://github.com/Kurczak1233/IO_LVL_UP/blob/main/project%20copy/src/assets/List%20b1%20exam%202.mp3?raw=true" controls ></audio>
                </b-col>
            </b-row>
    </b-container>

     <b-container v-if="PassedOrNot === true" class="col-10 mt-5 col-md-8 col-xl-8 mr-auto ml-auto background-bluish" fluid>
        <b-row>
            <b-col class="text-center text-black pt-2 text-size-big">
                <p v-if="points < 5" class="text-size-big text-center p-3">You <span class="text-danger">FAILED</span> the test! Learn some more and try again</p> 
                <p v-else-if="points >= 5" class="text-size-big text-center">You <span class="text-success">PASSED</span> the test!</p> 
                <b-col class="text-center mb-3" >
                    <router-link :to="{name: 'listen', params: {ExamB1List1Passed: this.ExamB1List1Passed}}"><button class="btn btn-warning" type="button">Confirm</button></router-link>
                </b-col>
            </b-col>    
        </b-row>
    </b-container>
  </body>
</template>

<script>
import { firebase } from '@firebase/app'
import '@firebase/auth'
function Task(id, description, answear1, answear2, answear3, correctAnswear, userChoice){
    this.id = id;
    this.description = description;
    this.answear1 = answear1
    this.answear2 = answear2
    this.answear3 = answear3
    this.correctAnswear = correctAnswear
    this.userChoice = userChoice
    this.options = [answear1, answear2, answear3]
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
            return new Task(this.id, this.description, this.answear1, this.answear2,this.answear3, this.correctAnswear, this.userChoice, this.options);
        }
    }
}
let task = (new TaskBuilder()).setId("1").userChoice(null)
        .setDescription("You hear someone talking about camping. What advice does she give?").setAnswear1("Avoid using shower gels.").setAnswear2("Avoid bathing in the water.").setAnswear3("Avoid pitching a tent near water.").correctAnswear("Avoid using shower gels.").build();
let task2 = (new TaskBuilder()).setId("2").userChoice(null)
       .setDescription("You hear someone having a conversation. What is the woman doing?").setAnswear1(" Accusing someone of causing a problem.").setAnswear2("Suggesting doing an activity.").setAnswear3("Apologising for a situation.").correctAnswear("Suggesting doing an activity.").build();
let task3 = (new TaskBuilder()).setId("3").userChoice(null)
      .setDescription("You hear someone talking on the telephone. What does the speaker want the listener to do?").setAnswear1("Meet someone.").setAnswear2("Give someone a lift.").setAnswear3("Call someone.").correctAnswear("Call someone.").build();
let task4 = (new TaskBuilder()).setId("4").userChoice(null)
      .setDescription("You hear someone talking about arguments. What is the speaker doing?").setAnswear1("Explaining a personal opinion.").setAnswear2("Expressing regret.").setAnswear3("Giving advice.").correctAnswear("Explaining a personal opinion.").build();
let task5 = (new TaskBuilder()).setId("5").userChoice(null)
      .setDescription("You hear part of a conversation. What are the speaker's intentions?").setAnswear1("To explain how she was able to win something.").setAnswear2("To extend an invitation.").setAnswear3("To advertise her good fortune.").correctAnswear("To extend an invitation.").build();
let task6 = (new TaskBuilder()).setId("6").userChoice(null)
      .setDescription("You hear someone talking about a magazine. What is the speaker doing?").setAnswear1("Describing the attributes of the magazine.").setAnswear2("Persuading people to buy the magazine.").setAnswear3("Explaining why it doesn't sell very well.").correctAnswear("Describing the attributes of the magazine.").build();
let task7 = (new TaskBuilder()).setId("7").userChoice(null)
      .setDescription("You hear someone speaking about their job. What is their job?").setAnswear1("Estate agent.").setAnswear2("Customer relations.").setAnswear3("Travel agent.").correctAnswear("Customer relations.").build();
let task8 = (new TaskBuilder()).setId("8").userChoice(null)
      .setDescription("You hear someone talking about music. What are they doing?").setAnswear1("Describing why music is important for children.").setAnswear2("Advertising a forthcoming event.").setAnswear3("Explaining why they like a piece of music.").correctAnswear("Advertising a forthcoming event.").build();
let taskList = [task, task2, task3, task4, task5, task6, task7, task8];

export default {
    name: 'Speaking',
        data: function()
    {
      return { 
         GiveConsent: false,
         ExamB1List1Passed: false,
         email: firebase.auth().currentUser.email,
         taskList: taskList,
         PassedOrNot: false,
         QuizesCount: 3,
         points: 0,
        selected: null,
         options: [
          { item: task.answear1, name: task.answear1 },
          { item: task.answear2, name: task.answear2 },
          { item: task.answear3, name: task.answear3 }
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
        this.QuizesCount = this.$route.params.QuizesCount; //Another way of passing attributes between components
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
            console.log(this.points);
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
                this.ExamB1List1Passed = true;
                db.collection(this.email).doc(this.email).update({listening: this.listening+(1/this.QuizesCount)*100});
                db.collection(this.email).doc(this.email).update({ExamB1List1Passed: this.ExamB1List1Passed});
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
