<template>
  <body>
    <b-container v-if="GiveConsent===false" class="col-10 mt-5 col-md-8 col-xl-5 mr-auto ml-auto background-bluish" fluid>
        <b-row>
            <b-col class="text-center text-danger pt-2 text-size-big">
                You are attempting a placement test.
            </b-col>    
        </b-row>
        <b-row>
          <b-col class="col-12 pt-3"><b> Available points: </b> </b-col>
          <b-col class="col-12">Points will determine the level you are currently being on.</b-col>
          <b-col class="pt-2 pb-3 text-center"><b>GOOD LUCK!</b></b-col>
        </b-row>
        <b-row>
            <b-col class="col-12 text-center mt-3 mb-3">
                    <button class="btn btn-warning" v-on:click.once="StartTest">Start the test!</button>
            </b-col>
        </b-row>
    </b-container>
    <b-container v-if="questionNumber<MaxQuestionsCount-1 && GiveConsent === true" class="col-10 mt-5 col-md-8 col-xl-8 mr-auto ml-auto background-bluish" fluid>
        <b-row>
            <b-col class="text-center text-info pt-2 text-size-big">
                Question {{id}}
            </b-col>    
        </b-row>
        <b-row>
          <b-col class="col-10 offset-1 pt-3 text-center font-bigger">{{description}}</b-col>
            <b-col class="d-flex align-items-center mt-3" >
                <b-form-radio-group v-model="selected" :options="options" class="text-center font-medium col-12" value-field="item" text-field="name"></b-form-radio-group>
            </b-col>
        </b-row>
        <b-row>
            <b-col class="text-center mb-3 mt-3" >
                <b-form>
                    <button class="btn btn-warning" v-on:click="CheckAndNextQuestion" v-if="selected === null" disabled type="button">Next question</button>
                    <button class="btn btn-warning" v-on:click.once="SetUsersLevel" v-else-if="questionNumber===(MaxQuestionsCount-2) && selected!==null" type="button">End test</button>
                    <button class="btn btn-warning" v-on:click="CheckAndNextQuestion" v-else type="button">Next question</button>
                </b-form>
            </b-col>
            
        </b-row>
    </b-container>
     <b-container v-if="GiveConsent === true && questionNumber >= MaxQuestionsCount-1" class="col-10 mt-5 col-md-8 col-xl-8 mr-auto ml-auto background-bluish" fluid>
        <b-row>
            <b-col class="text-center text-black pt-2 text-size-big">
                <p v-if="pkt < 3" class="text-size-big text-center p-3">You <span class="text-danger">FAILED</span> the test! Learn some more and try again</p> 
                <p v-else-if="pkt >= 3" class="text-size-big text-center">You <span class="text-success">PASSED</span> the test!</p> 
                <b-col class="text-center mb-3" >
                    <router-link :to="{name: 'gram', params: {ExamB1PPSPassed: this.ExamB1PPSPassed}}"><button class="btn btn-warning" type="button">Confirm</button></router-link>
                </b-col>
            </b-col>    
        </b-row>
    </b-container>
  </body>
</template>

<script>
import { firebase } from '@firebase/app'
import '@firebase/auth'
function Task(id, pkt, description, answear1, answear2, answear3, answear4, correctAnswear, questionNumber){
    this.id = id;
    this.pkt = pkt;
    this.description = description;
    this.answear1 = answear1
    this.answear2 = answear2
    this.answear3 = answear3
    this.answear4 = answear4
    this.correctAnswear = correctAnswear
    this.questionNumber = questionNumber
}

function TaskBuilder() {

    return {
        setId: function(id) {
            this.id = id;
            return this;
        },
        setPkt: function(pkt) {
            this.pkt = pkt;
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
        setQuestionNumber: function(questionNumber) {
            this.questionNumber = questionNumber;
            return this;
        },
        build: function () {
            return new Task(this.id, this.pkt, this.description, this.answear1, this.answear2,this.answear3,this.answear4, this.correctAnswear, this.questionNumber);
        }
    }
}
let task = (new TaskBuilder()).setId("1").setPkt("0").setQuestionNumber("0")
        .setDescription("He _________ here for 20 years and now he do not anymore.").setAnswear1("have been").setAnswear2("has stolen").setAnswear3("has worked").setAnswear4("hasn't worked").correctAnswear("has worked").build();
let task2 = (new TaskBuilder()).setId("2")
       .setDescription("You can ask questions when we _________ all the items from the agenda..").setAnswear1("had discussed").setAnswear2("has discussed").setAnswear3("have discussed").setAnswear4("has discussion").correctAnswear("have discussed").build();
let task3 = (new TaskBuilder()).setId("3")
      .setDescription("It's the first time I _________ a horse..").setAnswear1("had had").setAnswear2("have ridden").setAnswear3("had ridden").setAnswear4("has ridden").correctAnswear("have ridden").build();
let task4 = (new TaskBuilder()).setId("4")
      .setDescription("What _________ yet?").setAnswear1("have he done").setAnswear2("has she done").setAnswear3("have he do").setAnswear4("have they do").correctAnswear("have he done").build();
let task5 = (new TaskBuilder()).setId("5")
      .setDescription("I _________ her before..").setAnswear1("have not seen").setAnswear2("have see").setAnswear3("has seen").setAnswear4("have been seen").correctAnswear("have not seen").build();
let taskList = [task, task2, task3, task4, task5];
let points = 0;
let i = 0;
export default {
    name: 'Speaking',
        data: function()
    {
      return { 
         id: task.id,
         questionNumber: task.questionNumber,
         pkt: task.pkt, 
         description: task.description,
         answear1: task.answear1,
         answear2: task.answear2,
         answear3: task.answear3,
         answear4: task.answear4,
         GiveConsent: false,
         QuizesCount: 0,
         ExamB1PPSPassed: false,
         MaxQuestionsCount: taskList.length,
         correctAnswear: task.correctAnswear,
         email: firebase.auth().currentUser.email,
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
        this.grammar = doc.data().grammar;

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
        SetUsersLevel: function()
        {
            if(this.correctAnswear === this.selected)
            {
                points++;
            }
            this.pkt = points;
            this.questionNumber = task.questionNumber++;
             var db = firebase.firestore();
            if(this.pkt < 3)
            {
                //EXAM FAILED!
            }
            else if(this.pkt >= 3)
            { 
                this.ExamB1PPSPassed = true;
                db.collection(this.email).doc(this.email).update({grammar: this.grammar+(1/this.QuizesCount)*100});
            }
        },
        CheckAndNextQuestion: function()
        {   
            if(this.correctAnswear === this.selected)
            {
                points++;
            }
            i++
            this.pkt = points;
            this.questionNumber = task.questionNumber++;
             if(task.questionNumber < this.MaxQuestionsCount)
             {
                this.description = taskList[i].description
                this.answear1 = taskList[i].answear1
                this.answear2 = taskList[i].answear2
                this.answear3 = taskList[i].answear3
                this.answear4 = taskList[i].answear4
                this.options = [
            { item: this.answear1, name: this.answear1 },
            { item: this.answear2, name: this.answear2 },
            { item: this.answear3, name: this.answear3 },
            { item: this.answear4, name: this.answear4 }
            ]
                this.correctAnswear = taskList[i].correctAnswear
                this.id = taskList[i].id
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
