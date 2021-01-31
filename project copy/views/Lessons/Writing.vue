<template>
  <body>
    <b-container class="col-10 col-md-8 col-xl-5 mr-auto ml-auto margin10 background-bluish" fluid>
        <b-row>
          <b-col class="col-12">Tekst: {{task}}</b-col>
        </b-row>
    </b-container>
  </body>
</template>




<script>

// // przykład konstruktor Task oraz TaskBuilder

// function Task(name, description, isDone){
//     this.name = name;
//     this.description = description;
//     this.isDone = isDone;
// }

// function TaskBuilder() {

//     return {
//         setName: function(name) {
//             this.name = name;
//             return this;
//         },
//         setDescription: function(description) {
//             this.description = description;
//             return this;
//         },
//         setDone: function(done) {
//             this.isDone = done;
//             return this;
//         },
//         build: function () {
//             return new Task(this.name, this.description, this.isDone);
//         }
//     }
// }
// // Dyrektor
// let task = (new TaskBuilder()).setName("Zadanie 1")
//         .setDescription("opis").setDone(true).build();
// // {name: "Zadanie 1", description: "opis", isDone: true}

export default {
    name: 'Grammar',
        data: function()
    {
      return {task}
    },
    methods:
    {
    Task(name, description, isDone){
    this.name = name;
    this.description = description;
    this.isDone = isDone;
},
      TaskBuilder() {

    return {
        setName: function(name) {
            this.name = name;
            return this;
        },
        setDescription: function(description) {
            this.description = description;
            return this;
        },
        setDone: function(done) {
            this.isDone = done;
            return this;
        },
        build: function () {
            return new Task(this.name, this.description, this.isDone);
        }
    }
},
BuildTask()
{
let task = (new TaskBuilder()).setName("Zadanie 1")
        .setDescription("opis").setDone(true).build();
        return task;
}
}
    }
</script>

<style >
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
</style>
