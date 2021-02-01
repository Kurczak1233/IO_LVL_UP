<template>
  <body>
    <b-container class="container text-center">
    <b-col class="mb-3" cols="12"> <img id="banner" class="img-fluid" src="https://github.com/Kurczak1233/IO_LVL_UP/blob/Daniel/project%20copy/src/assets/Baner_speaking.png?raw=true" alt="Logo speaking"></b-col>
    </b-container>
    <b-container class="col-10 col-md-8 col-xl-5 mr-auto ml-auto margin10 background-bluish" fluid>
        <b-row>
          <b-col class="col-12"><b>Temat:</b> {{name}} <br> <b> Liczba punktów do uzyskania: </b> {{pkt}} <br> <b> Treść: </b> {{description}} <br> <b> Stopień trudności: </b> {{level}}<br><center>
        <a href="https://github.com/Kurczak1233/IO_LVL_UP/blob/Daniel/project%20copy/src/assets/example/example1-1.jpg?raw=true">Przykładowe rozwiązanie</a>
        </center></b-col>
        </b-row>
    </b-container>
          <b-container class="col-10 mt-3 col-md-8 col-xl-5 mr-auto ml-auto background-bluish" fluid>
        <b-row>
          <b-col class="col-12 text-center">Proszę załączyć swoje rozwiązanie</b-col>
          <b-col class="col-12 text-center"><form action="..." enctype="multipart/form-data">
            <input type="file" name="nazwa">
            </form>
          </b-col>
        </b-row>
    </b-container>
  </body>
</template>

<script>
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
let task = (new TaskBuilder()).setName("Mówienie: ") .setPkt("10")
        .setDescription("Jakie są wady/zalety bycia singlem?").setLevel("B1").build();
export default {
    name: 'Writing',
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
