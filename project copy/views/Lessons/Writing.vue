<template>
  <body>
    <b-container class="col-10 col-md-8 col-xl-5 mr-auto ml-auto margin10 background-bluish" fluid>
            <!-- <router-link to="/Builder">Nie będziemy testować writingu.</router-link> -->
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
//     let name, description, isDone;

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

// let task = (new TaskBuilder()).setName("Zadanie 1")
//         .setDescription("opis").setDone(true).build();
// console.log(task);
// // {name: "Zadanie 1", description: "opis", isDone: true}

export default {
    name: 'Grammar'}
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
