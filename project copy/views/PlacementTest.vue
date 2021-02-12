<template>
  <body>

    <b-container class="col-10 mt-5 col-md-8 col-xl-5 mr-auto ml-auto background-bluish" fluid>
        <b-row>
            <b-col class="text-center text-danger pt-2 text-size-big">
                You are attempting a placement test.
            </b-col>    
        </b-row>
        <b-row>
          <b-col class="col-12 pt-3"><b> Available points: </b> 3</b-col>
          <b-col class="col-12">Points will determine the level you are currently being on.</b-col>
          <b-col class="pt-2 pb-3 text-center"><b>GOOD LUCK!</b></b-col>
        </b-row>
    </b-container>
    <b-container class="col-10 mt-3 col-md-8 col-xl-5 mr-auto ml-auto background-bluish" fluid>
        <b-row>
            <b-col class="col-12 text-center mt-3 mb-3">
                    <button class="btn btn-warning">Start the test!</button>
            </b-col>
        </b-row>
        </b-container>
  </body>
</template>

<script>
//KONCEPCJA NA STWORZENIE QUIZU, liczenie pkt zadań i wskazywanie v-if/v-else? Jeśli 1 pkt pokaż tą podstronę itd?

//Tworzenie zadania o imieniu, opisie i parametrze ukończenia.
function Task(name, pkt, description, Islevel){
    this.name = name;
    this.pkt = pkt;
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
        setPkt: function(pkt) {
            this.pkt = pkt;
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
            return new Task(this.name, this.pkt, this.description, this.level);
        }
    }
}
// Dyrektor rozkazujący utworzenie zadania
let task = (new TaskBuilder()).setName("Mówienie: ") .setPkt("3")
        .setDescription("Jakie są wady/zalety bycia singlem?").setLevel("B1").build();
export default {
    name: 'Speaking',
        data: function()
    {
      return { //Zwracamy pola z naszego taska
        name: task.name,
        pkt: task.pkt,
        description: task.description,
        level: task.level
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
