<template>
  <body>
    <b-container class="col-10 col-md-8 col-xl-5 mr-auto ml-auto margin-top background-bluish" fluid>
        <b-row>
          <b-col class="col-12">{{name}}{{description}} stopień trudności:{{level}}</b-col>
        </b-row>
    </b-container>
  </body>
</template>




<script>
//Tworzenie zadania o imieniu, opisie i parametrze ukończenia.
function Task(name, description, Islevel){
    this.name = name;
    this.description = description;
    this.level = Islevel;
}
//Builder taska (pojedyncze funkcje nadają wartości typom prostym)
function TaskBuilder() {

    return {
        setName: function(name) {
            this.name = name;
            return this;
        },
        setDescription: function(description) {
            this.description = description;
            return this;
        },
        setLevel: function(level) {
            this.level = level;
            return this;
        },
        build: function () {
            return new Task(this.name, this.description, this.level);
        }
    }
}
// Dyrektor rozkazujący utworzenie zadania
let task = (new TaskBuilder()).setName("Zadanie 1 ")
        .setDescription(" Przykładowe zadanie z writingu").setLevel(" C1").build();

export default {
    name: 'Grammar',
        data: function()
    {
      return { //Zwracamy pola z naszego taska
        name: task.name,
        description: task.description,
        level: task.level
      }
    }
}
</script>

<style >
body
{
  background-color:  rgba(237, 228, 228);
  width: 100%;
  height:100%;
}
.background-bluish
{
  background-image: linear-gradient(180deg, rgb(128, 188, 223) 0%, rgb(91, 146, 218) 100%);
  border-radius: 20px;
}
.margin-top
{
  margin-top: 2.5%;
}
.text-size-big
{
  font-size: 2rem;
}
#project-logo{
  height: 20px;
}
</style>
