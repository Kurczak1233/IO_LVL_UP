<template>
<body>
  <UserNavigation :IsInListening="IsInListening"></UserNavigation>
  <LessonsHeader :level="level"></LessonsHeader>

<b-container class= fluid>
<b><h3><i>Kendall Jenner</i></h3></b>

<b-row class="mt-2 mb-2">
  <b-col class="text-center"><audio src="https://github.com/Kurczak1233/IO_LVL_UP/blob/Daniel/project%20copy/src/assets/listening.mp3?raw=true" controls ></audio>

  </b-col>
</b-row>   
<table class="table table-striped">
  <thead>
    <tr>
      <th scope="row">1</th>
      <td>Kendall spends a load of time in her house. </td>
      <td><f>True</f></td>
      <td><c>False</c></td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">2</th>
      <td>She used to walk dogs for a living.</td>
      <td><c>True</c></td>
      <td><f>False</f></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Cancelled flights piss her off</td>
      <td><f>True</f></td>
      <td><c>False</c></td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>She spent a fortune on a vehicle.</td>
      <td><c>True</c></td>
      <td><f>False</f></td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>Chloe is her least favourite sister.</td>
      <td><f>True</f></td>
      <td><c>False</c></td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td>She wishes she could become more independent.</td>
      <td><f>True</f></td>
      <td><c>False</c></td>
    </tr>
      </tbody>
</table>
    </b-container>  
</body>
</template>

<script>
import UserNavigation from '../../src//components/UserNavigation.vue'
import LessonsHeader from '../../src/components/LessonsHeader.vue'
import { firebase } from '@firebase/app'
import '@firebase/auth'
export default {
name: 'Listening',
components: 
{
  UserNavigation,
  LessonsHeader
},
data: function()
{
  return{
    IsInListening: true,
    solvedB1List1: false,        
    solvedB1List2: false,
    solvedB1List3: false,
    solvedB1List4: false,
    solvedB1List5: false,
    ExamB1List1: false,
    ExamB1List2: false,
    ExamB1List3: false,
    level: '',
    QuizesCount: 3
  }
},
    mounted: function() //Initialize site
    {
       var db = firebase.firestore();
      db.collection(this.email).get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => { 
        this.level = doc.data().level;
        });
    });
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
l {text-align: left}
c {color: black}
c:active {background-color: green}
f {color: black}
f:active {background-color: red}
#banner{
  border-radius: 50px;
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