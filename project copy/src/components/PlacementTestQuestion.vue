<template>
  <body>
    <b-container class="col-10 mt-5 col-md-8 col-xl-8 mr-auto ml-auto background-bluish" fluid>
        <b-row>
            <b-col class="text-center text-info pt-2 text-size-big">
                Question {{name}}
            </b-col>    
        </b-row>
        <b-row>
          <b-col class="col-12 pt-3 text-center">Today, Antarctica is mostly devoid of its ancient life. It has no trees or bushes and (1) ... is limited to moss and algae.</b-col>
            <div>
                <b-form-radio-group v-model="selected" :options="options" class="mb-3" value-field="item" text-field="name" disabled-field="notEnabled"></b-form-radio-group>
                <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
            </div>
        </b-row>
    </b-container>
  </body>
</template>

<script>
//KONCEPCJA NA STWORZENIE QUIZU, liczenie pkt zadań i wskazywanie v-if/v-else? Jeśli 1 pkt pokaż tą podstronę itd?

//Tworzenie zadania o imieniu, opisie i parametrze ukończenia.
function Task(id, pkt, description, answear1, answear2, answear3, answear4){
    this.id = id;
    this.pkt = pkt;
    this.description = description;
    this.answear1 = answear1
    this.answear2 = answear2
    this.answear3 = answear3
    this.answear4 = answear4
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
        build: function () {
            return new Task(this.id, this.pkt, this.description,this.answear1,this.answear2,this.answear3,this.answear4);
        }
    }
}
// Dyrektor rozkazujący utworzenie zadania
let task = (new TaskBuilder()).setName("1") .setPkt("1")
        .setDescription("Today, Antarctica is mostly devoid of its ancient life. It has no trees or bushes and (1) ... is limited to moss and algae.").setAnswear1("vegetables").setAnswear2("vegetations")
        .setAnswear3("vegetation").setAnswear4("vegetating").build();
export default {
    name: 'Speaking',
        data: function()
    {
      return { //Zwracamy pola z naszego taska
        id: task.id,
        pkt: task.pkt,
        description: task.description,
        selected: 'A',
        options: [
          { item: 'A', name: 'Option A' },
          { item: 'B', name: 'Option B' },
          { item: 'D', name: 'Option C', notEnabled: true },
          { item: { d: 1 }, name: 'Option D' }
        ]
      }
    },
    methods:
    {
        CreateNewQuestion: function()
        {
            function Task(name, pkt, description){
    this.name = name;
    this.pkt = pkt;
    this.description = description;
}
//Builder taska (pojedyncze funkcje nadają wartości typom prostym)
function TaskBuilder() {

    return {
        setName: function(name) {
            this.name = name;
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
        build: function () {
            return new Task(this.name, this.pkt, this.description);
        }
    }
}
        // Dyrektor rozkazujący utworzenie zadania
       return (new TaskBuilder()).setName("1") .setPkt("3")
        .setDescription("Jakie są wady/zalety bycia singlem?").setLevel("B1").build();
        },
        StartTest: function()
        {
            return this.questionNumber++;
        }
    },
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
.margin10
{
  margin-top: 10%;
}
.text-size-big
{
  font-size: 2rem;
}
#project-logo{
  height: 80px;
}
#banner{
  border-radius: 50px;
}
</style>
