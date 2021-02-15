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
    <b-container v-if="questionNumber<MaxQuestionsCount && GiveConsent === true" class="col-10 mt-5 col-md-8 col-xl-8 mr-auto ml-auto background-bluish" fluid>
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
     <b-container v-if="GiveConsent === true && questionNumber >= MaxQuestionsCount" class="col-10 mt-5 col-md-8 col-xl-8 mr-auto ml-auto background-bluish" fluid>
        <b-row>
            <b-col class="text-center text-black pt-2 text-size-big">
                You scored <span class="text-danger">{{pkt}}</span> points which signs your English knowledge as:
                <p v-if="pkt <= 1" class="text-size-big text-center text-danger">A2</p> 
                <p v-else-if="pkt === 2" class="text-size-big text-center text-danger">B1</p> 
                <p v-else-if="pkt > 2" class="text-size-big text-center text-danger">B2</p> 
                <b-col class="text-center mb-3" >
                    <router-link to="/UserPage"><button class="btn btn-warning" type="button">Confirm</button></router-link>
                </b-col>
            </b-col>    
        </b-row>
    </b-container> -->
  </body>
</template>

<script>
import { firebase } from '@firebase/app'
import '@firebase/auth'
//Tworzenie zadania o imieniu, opisie i parametrze ukończenia.
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
//Builder taska (pojedyncze funkcje nadają wartości typom prostym)
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
        .setDescription("Question desc").setAnswear1("vegetables").setAnswear2("vegetations").setAnswear3("vegetation").setAnswear4("vegetating").correctAnswear("vegetation").build();
let task2 = (new TaskBuilder()).setId("2")
       .setDescription("Question desc.").setAnswear1("widespread").setAnswear2("worldwide").setAnswear3("wide").setAnswear4("widespreading").correctAnswear("widespread").build();
let task3 = (new TaskBuilder()).setId("3")
      .setDescription("Question desc.").setAnswear1("countless").setAnswear2("unless").setAnswear3("many").setAnswear4("limitless").correctAnswear("countless").build();
let task4 = (new TaskBuilder()).setId("4")
      .setDescription("Question desc.").setAnswear1("countless").setAnswear2("unless").setAnswear3("many").setAnswear4("limitless").correctAnswear("countless").build();
let task5 = (new TaskBuilder()).setId("5")
      .setDescription("Question desc.").setAnswear1("countless").setAnswear2("unless").setAnswear3("many").setAnswear4("limitless").correctAnswear("countless").build();
let taskList = [task, task2, task3, task4, task5];
let points = 0;
let i = 0;
export default {
    name: 'Speaking',
        data: function()
    {
      return { //Zwracamy pola z naszego taska
         id: task.id,
         questionNumber: task.questionNumber,
         pkt: task.pkt,  //Not necessary but whatsoever...
         description: task.description,
         answear1: task.answear1,
         answear2: task.answear2,
         answear3: task.answear3,
         answear4: task.answear4,
         GiveConsent: false,
         MaxQuestionsCount: taskList.length,
         correctAnswear: task.correctAnswear,
         email: firebase.auth().currentUser.email,
        selected: null,
        options: [
          { item: task.answear1 , name: task.answear1 },
          { item: task.answear2, name: task.answear2 },
          { item: task.answear3, name: task.answear3 },
          { item: task.answear4, name: task.answear4 }
        ]
      
      }
    },
    mounted: function()
    {
        console.log(this.MaxQuestionsCount);
        console.log(this.GiveConsent)
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
            // var db = firebase.firestore();
//             if(this.pkt <= 1)
//             {
//   db.collection(this.email).get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//          db.collection(this.email).doc(doc.id).update({level: "A2"});
//     });
// });
//             }
//             else if(this.pkt ===2)
//             { 
//   db.collection(this.email).get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//          db.collection(this.email).doc(doc.id).update({level: "B1"});
//     });
// });
//             }
//             else
//             {
//   db.collection(this.email).get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//          db.collection(this.email).doc(doc.id).update({level: "B2"});
//     });
// });
            // }

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
             if(task.questionNumber < 3)
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
