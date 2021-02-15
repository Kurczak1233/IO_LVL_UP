<template>
  <body>
    <b-container v-if="formalConsent === false" class="col-10 mt-5 col-md-8 col-xl-8 mr-auto ml-auto background-bluish" fluid>
        <b-row>
            <b-col class="text-center p-3"><p>You are in tasks section, please remember that you are constantly <b>LEARNING</b> so, do not forget to make notes, and if necessary - repeat quizes!</p>
                <p>You won't be scoring any points here, so do not panic if you chose a wrong answear, just pick a new one.</p>
                <p>Finishing all quizes will allow you to make an attempt in solving the exam!</p>
                <b-col class="mt-3"><b-button class="btn btn-warning" type="button" v-on:click="GiveConsent">Confirm</b-button></b-col>
            </b-col>
        </b-row>
    </b-container>
    <b-container v-if="formalConsent === true" class="col-12 col-sm-10 mt-5 col-md-8 col-xl-8 mr-auto ml-auto background-bluish" fluid>
        <b><h3><i>THE MICROSCOPE</i></h3></b>
<b-row class="">
  <b-col class="">An important invention in the development of science and medicine was the microscope. It was (1) ... the principle that light could be (2) ... or bent, by a glass lens. It was soon discovered that tiny objects could be magnified (3) ... size when viewed through a glass lens that had been ground and polished in a specific (4)... . Although the principle was known to the Chinese as early as 1000 A.D, it was not until the 13th and 14th centuries in Europe (5) ... it was put to practical use in the form of eyeglasses.
  </b-col>
</b-row>
<b-row class="">
  <b-col class="">In Europe the first microscope was invented by brothers Zacharias and Hans Janssen, two Dutch eyeglass-makers, around 1590. They built a “compound” microscope, so called because of its two lenses. The most significant development and use of the microscope during this period, however, belongs to another Dutch optician, Antonie van Leeuwenhoek (1632-1723). Born in Delft, Holland, he became skilled at (6) ... very sharp and accurate magnifying lenses. Some of his single-lens microscopes were able to
  </b-col>
</b-row>   
<b-row class="">
  <b-col class="">magnify up the three hundred times (7) ... size, and around 1660 he began serious study using these instruments. He was the first to discover bacteria and other microscopic organisms, calling these tiny creatures “animalcules”. (8) ... to this discovery, very small creatures such as fleas and maggots were thought to “spontaneously generate” from a single source, such as rotting meat in the case of maggots.
  </b-col>
</b-row>   
<b><h3><i>Czasowniki modalne - Modal Verbs</i></h3></b>
<b-row class="">
  <b-col class="">1. I _______  just cooked the dinner for you. </b-col>
</b-row>
<b-row class="">
  <b-col class="">2. I _______ your car yet!  </b-col>
</b-row>
<b-row class="">
  <b-col class="">3. The killer _______ already.  </b-col>
</b-row>
<b-row class="">
  <b-col class="">4. You missed her, because she _______ home!   </b-col>
</b-row>
<b-row class="">
  <b-col class="">5. Someone _______ my bag!  </b-col>
</b-row>
<b-row class="">
  <b-col class="">6.  They _______ their plans..  </b-col>
</b-row>
<b-row class="">
  <b-col class="">7. She _______ to accomplish her task before she lost consciousness.  </b-col>
</b-row>
<b-row class="">
  <b-col class="">8. What _______ do about it? </b-col>
</b-row>
<b-row class="">
  <b-col class="">9. You will _______ earn a lot to afford such car. </b-col>
</b-row>
<b-row class="">
  <b-col class="">10. You _______ go out more. </b-col>
</b-row>

<table class="table table-striped">
  <thead>
    <tr>
      <th scope="row">1</th>
        <td v-on:click="inputClickedFalse">has</td>
        <td v-on:click.once="inputClickedRight">have</td>
        <td v-on:click="inputClickedFalse">have to</td>
        <td v-on:click="inputClickedFalse">had</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">2</th>
      <td v-on:click="inputClickedFalse">have repaired</td>
      <td v-on:click="inputClickedRight">haven't repaired</td>
        <td v-on:click="inputClickedFalse">has repaired</td>
      <td v-on:click="inputClickedFalse">hasn't repaired</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td v-on:click="inputClickedFalse">has't executed</td>
      <td v-on:click="inputClickedFalse">haven't been executed</td>
      <td v-on:click="inputClickedRight">has been executed</td>
      <td v-on:click="inputClickedFalse">have been executed</td>
    </tr>
    <tr>
      <th scope="row">4</th>
        <td v-on:click="inputClickedFalse">must have just been gone</td>
        <td v-on:click="inputClickedRight">has just gone</td>
        <td v-on:click="inputClickedFalse">haven't gone</td>
        <td v-on:click="inputClickedFalse">has gone just</td>
    </tr>
    <tr>
      <th scope="row">5</th>
        <td v-on:click="inputClickedRight">has taken</td>
        <td v-on:click="inputClickedFalse">have stolen</td>
        <td v-on:click="inputClickedFalse">have taken</td>
        <td v-on:click="inputClickedFalse">has been stolen</td>
    </tr>
    <tr>
      <th scope="row">6</th>
        <td v-on:click="inputClickedFalse">had changed</td>
        <td v-on:click="inputClickedFalse">has changed</td>
        <td v-on:click="inputClickedFalse">hasn't changed</td>
        <td v-on:click="inputClickedRight">have changed</td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td><f>could</f></td>
           <td><c>was able</c></td>
      <td><f>have</f></td>
      <td><f>can</f></td>
    </tr>
    <tr>
      <th scope="row">8</th>
      <td><f>has to</f></td>
      <td><f>were you </f></td>
      <td><f>are</f></td>
         <td><c>are you going to</c></td>
    </tr>
    <tr>
      <th scope="row">9</th>
              <td><c>have to</c></td>
      <td><f>must not</f></td>
      <td><f>has to</f></td>
      <td><f>are</f></td>
    </tr>
    <tr>
      <th scope="row">10</th>
      <td><f>are</f></td>
              <td><c>should</c></td>
      <td><f>has</f></td>
      <td><f>has to</f></td>
    </tr>
      </tbody>
</table>
        <b-row>  
            <b-col class="mt-3 mb-3 text-center"><router-link :to="{name: 'gram', params: {solvedB1PSS1: true}}" ><b-button class="btn btn-warning" type="button" v-on:click="AddSolvedToUserDb">Solved!</b-button></router-link></b-col>
        </b-row>
</b-container>
  </body>
</template>

<script>
import { firebase } from '@firebase/app'
//import '@firebase/auth'
export default {
    name: 'Speaking',
        data: function()
    {
      return {
          formalConsent: false,
          email: firebase.auth().currentUser.email,
          solvedB1PSS2: false
      }
    },
    model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    sth: Boolean
  },
    methods:
    {
        GiveConsent: function()
        {
            this.formalConsent = true;
        },
        SendingInfoBack: function()
        {
            this.$emit('sth',true);
        },
        inputClickedRight: function(event)
  {
      //this.$el.setAttribute("style", "background: green;");
    event.target.setAttribute("style", "background: rgb(128, 255, 0); "); 
  },
  inputClickedFalse: function(event)
  {
    event.target.setAttribute("style", "background: rgb(255, 64, 0)");
  },
  AddSolvedToUserDb: function()
  {
      this.solvedB1PSS1 = true;
      var db = firebase.firestore();
      db.collection(this.email).doc(this.email).set({solvedB1PSS2: this.solvedB1PSS2} ,{merge:true})
  }
    }
}
</script>

<style scoped>
table td:hover{
  background-color: #ffc107;
}
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
@media (max-width: 500px)
 { 
tr {
font-size: 0.7rem;
 }; 
 }
</style>