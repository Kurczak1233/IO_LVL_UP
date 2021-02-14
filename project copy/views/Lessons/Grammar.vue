<template>
<b-container class="container text-center p-3 mb-3 mt-5 mr-auto ml-auto margin5 background-bluish" fluid>
    <b-row class="p-4">
      <b-col class="mb-3 text-size-big mt-auto mb-auto"  cols="12"> Grammar lessons available on <span class="text-danger">{{level}}</span> level </b-col>
    </b-row>
</b-container>  
</template>

<script>
import { firebase } from '@firebase/app'
import '@firebase/auth'
export default {
name: 'Grammar',
data: function()
    {
        return {
            loggedIn: false,
            email: firebase.auth().currentUser.email,
            name: firebase.auth().currentUser.displayName,
            grammar: 0,
            speaking: 0,
            writing: 0,
            reading: 0,
            listening: 0,
            level: '',
        }
    },
    mounted: function() //Pierwszorazowo załaduj dane
    {
       var db = firebase.firestore();
      db.collection(this.email).get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.data().speaking);
        this.grammar = doc.data().grammar;
        this.reading = doc.data().reading;
        this.speaking = doc.data().speaking;
        this.writing = doc.data().writing;
        this.listening = doc.data().listening;
        this.level = doc.data().level;
    });
});
    }
}
</script>

<style scoped>
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
table td:hover{
  background-color: #ffc107;
}
</style>