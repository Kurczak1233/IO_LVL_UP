

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
    <b-container v-if="formalConsent === true" class="col-12 col-sm-10 mt-5 col-md-8 col-xl-8 mr-auto ml-auto background-bluish p-3" fluid>
<b><h3><i>Present perfect simple - filling blank spaces</i></h3></b>
<b-row class="">
  <b-col class="">1. I (not / work) _______ today.</b-col>
</b-row>
<b-row class="">
  <b-col class="">2. We (buy) _______ a new lamp. </b-col>
</b-row>
<b-row class="">
  <b-col class="">3. We (not / plan) _______ our holiday yet. </b-col>
</b-row>
<b-row class="">
  <b-col class="">4. Where (be / you) _______ ?   </b-col>
</b-row>
<b-row class="">
  <b-col class="">5. He (write) _______ five letters.  </b-col>
</b-row>
<b-row class="">
  <b-col class="">6.  She (not / see) _______ him for a long time.  </b-col>
</b-row>
<b-row class="">
  <b-col class="">7. (be / you) _______ at school? </b-col>
</b-row>
<b-row class="">
  <b-col class="">8. School (not / start) _______ yet. </b-col>
</b-row>
<b-row class="">
  <b-col class="">9.(speak / he) _______ to his boss? </b-col>
</b-row>
<b-row class="">
  <b-col class="">10. No, he (have / not) _______ the time yet. </b-col>
</b-row>

<table class="table table-striped mt-1">
  <thead>
    <tr>
      <th scope="row">1</th>
        <td v-on:click="inputClickedFalse">hasn't been working</td>
        <td v-on:click="inputClickedFalse">has not work</td>
        <td v-on:click="inputClickedRight">have not worked</td>
        <td v-on:click="inputClickedFalse">have not work</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">2</th>
      <td v-on:click="inputClickedRight">have bought</td>
      <td v-on:click="inputClickedFalse">has bought</td>
        <td v-on:click="inputClickedFalse">have buy</td>
      <td v-on:click="inputClickedFalse">has buy</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td v-on:click="inputClickedFalse">has no plan</td>
      <td v-on:click="inputClickedFalse">have no plan</td>
      <td v-on:click="inputClickedFalse">has not planned</td>
      <td v-on:click="inputClickedRight">have not planned</td>
    </tr>
    <tr>
      <th scope="row">4</th>
        <td v-on:click="inputClickedRight">have you been</td>
        <td v-on:click="inputClickedFalse">has you been</td>
        <td v-on:click="inputClickedFalse">have you be</td>
        <td v-on:click="inputClickedFalse">has you been</td>
    </tr>
    <tr>
      <th scope="row">5</th>
        <td v-on:click="inputClickedRight">has written</td>
        <td v-on:click="inputClickedFalse">have written</td>
        <td v-on:click="inputClickedFalse">have wrote</td>
        <td v-on:click="inputClickedFalse">has been written</td>
    </tr>
    <tr>
      <th scope="row">6</th>
        <td v-on:click="inputClickedFalse">haven't been seen</td>
        <td v-on:click="inputClickedFalse">had not seen</td>
        <td v-on:click="inputClickedFalse">have not seen</td>
        <td v-on:click="inputClickedRight">has not seen</td>
    </tr>
    <tr>
      <th scope="row">7</th>
        <td v-on:click="inputClickedFalse">have you be</td>
        <td v-on:click="inputClickedFalse"> has you be</td>
        <td v-on:click="inputClickedFalse">hasn't you be</td>
        <td v-on:click="inputClickedRight">have you been</td>
    </tr>
    <tr>
      <th scope="row">8</th>
        <td  v-on:click="inputClickedFalse">has been starting</td>
        <td v-on:click="inputClickedRight">has't started</td>
        <td  v-on:click="inputClickedFalse">hadn't started</td>
        <td  v-on:click="inputClickedFalse">haven't started</td>
    </tr>
    <tr>
      <th scope="row">9</th>
                <td  v-on:click="inputClickedRight">has he spoken</td>
        <td v-on:click="inputClickedFalse">have he spoken</td>
        <td  v-on:click="inputClickedFalse">has he speaked</td>
        <td  v-on:click="inputClickedFalse">has't he speaked</td>
    </tr>
    <tr>
      <th scope="row">10</th>
        <td  v-on:click="inputClickedFalse">hasn't have</td>
        <td  v-on:click="inputClickedFalse">haven't has</td>
        <td v-on:click="inputClickedFalse">haven't had</td>
        <td  v-on:click="inputClickedRight">hasn't had</td>
    </tr>
      </tbody>
</table>
        <b-row>  
            <b-col class="mt-3 mb-3 text-center"><router-link :to="{name: 'gram', params: {solvedB1PPS3: true}}" ><b-button class="btn btn-warning" type="button" v-on:click="AddSolvedToUserDb">Solved!</b-button></router-link></b-col>
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
          solvedB1PPS3: false
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
      this.solvedB1PPS3 = true;
      var db = firebase.firestore();
      db.collection(this.email).doc(this.email).set({solvedB1PPS3: this.solvedB1PPS3} ,{merge:true})
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