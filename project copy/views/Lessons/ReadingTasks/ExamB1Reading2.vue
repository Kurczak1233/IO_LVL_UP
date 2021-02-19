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
     <b-container v-if="formalConsent === true" class="col-12 col-sm-10 mt-5 col-md-8 col-xl-8 mr-auto ml-auto background-bluish p-5" fluid>
        <b><h3><i>Never mind the tongue twister - here's the tongue trickster. Frank Parsons reports on the craze for a strange type of fruit.</i></h3></b>
Imagine drinking a glass of pure, freshly-squeezed lemon juice with nothing added. It's enough to turn your stomach.
<form class="form-inline">
  <label class="my-1 mr-2" for="Answear1">1)</label>
  <select v-model="answear1" class="custom-select my-1 mr-sm-2" id="Answear1">
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
    <option value="D">D</option>
    <option value="E">E</option>
    <option value="F">F</option>
    <option value="G">G</option>
  </select>
I watch as one-by-one they down the drink, tentative at first, and then smiling broadly as they declare, ''It tastes just like grandma's lemonade.''
  
Fifty or so people crowd around a table on the rooftop terrace of Larry's small but swish apartment. I edge my way forward and arrive at the table that positively groans with the array of food piled high.
 <label class="my-1 mr-2" for="Answear2">2)</label>
  <select v-model="answear2" class="custom-select my-1 mr-sm-2" id="Answear2">
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
    <option value="D">D</option>
    <option value="E">E</option>
    <option value="F">F</option>
    <option value="G">G</option>
  </select>

    My host appears at my shoulder, and says, ''Here, have this.'' This turns out to be a small red berry about the size of a blueberry, but slightly elongated, the shape of a coffee bean.

    He looks at the expression on my face. ''It's known as the miracle fruit. Just put it in your mouth,'' he instructs, ''and chew it slightly to separate the pulp from its seed.''  
 
<label class="my-1 mr-2" for="Answear3">3)</label>    
<select v-model="answear3" class="custom-select my-1 mr-sm-2" id="Answear3">
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
    <option value="D">D</option>
    <option value="E">E</option>
    <option value="F">F</option>
    <option value="G">G</option>
  </select>

        I obey his command and then discreetly spit the remains into my handkerchief while his glance is averted.

    ''Done?'' he asks, turning back to me. I nod. He grabs a glass of the lemon juice from a passing waiter and offers it to me. ''Now drink.'' I take a small sip, and close my eyes. The guests are right.
   
<label class="my-1 mr-2" for="Answear4">4)</label>
  <select v-model="answear4" class="custom-select my-1 mr-sm-2" id="Answear4">
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
    <option value="D">D</option>
    <option value="E">E</option>
    <option value="F">F</option>
    <option value="G">G</option>
  </select>

My host states knowingly I have experienced first-hand the phenomenon of the Synsepalum Dulcificum, or the Miracle Fruit. This small berry has the amazing effect of causing bitter or sour foods to taste as sweet as sugar candy.

  <label class="my-1 mr-2" for="Answear5">5)</label>
  <select v-model="answear5" class="custom-select my-1 mr-sm-2" id="Answear5">
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
    <option value="D">D</option>
    <option value="E">E</option>
    <option value="F">F</option>
    <option value="G">G</option>
  </select>


    When it comes into contact with acidic foods, like vinegar, it starts to behave like a sweetener.   
A native fruit of West Africa, the fruit was discovered by western explorers around 1725.
 <label class="my-1 mr-2" for="Answear6">6)</label>
  <select v-model="answear6" class="custom-select my-1 mr-sm-2" id="Answear6">
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
    <option value="D">D</option>
    <option value="E">E</option>
    <option value="F">F</option>
    <option value="G">G</option>
  </select>
     Left uncultivated, the miracle fruit grows in bushes reaching six metres in height. It produces crops twice yearly, usually after the rainy season, and has attractive white flowers.
    Despite being around for centuries it is only in recent years that the miracle fruit has been cultivated as a potential sweetener. There has been some albeit limited interest from the diet food industy. Not only that - the fruit can aid patients receiving medical treatment that may leave an unpleasant taste in the mouth.
     <b-col class="text-center col-12">
<button type="button" v-on:click.once="checkForm" aria-describedby="Check answears button" class="btn btn-primary my-1">Check answears</button>
    </b-col>
<b-row>
    <b-col>
        <b>Sentences</b>
<p><b>A</b>. These range from wedges of fruit, strong cheeses and pickles to plates of Brussel sprouts.</p>

<p><b>B</b>. It's like I've been transported back to childhood, sitting on the porch with Grandma and her delicious homemade pop.</p>

<p><b>C</b>. According to scientists the result happens because of a protein called miraculin.</p>

<p><b>D</b>. Then push it around your mouth like you'd do with a piece of gum for about sixty seconds.</p>

<p><b>E</b>. Yet that is what the guests of host, Larry Walters, are given on their arrival at one of his tasting parties in an upmarket district of New York.</p>

<p><b>F</b>. Not everyone is a fan of the berry's strange effect, however.</p>

<p><b>G</b>. They first noticed its distinctive property when they saw local people chewing the berry before a meal.</p>
    </b-col>
</b-row>
</form>
            <b-row>  
                <b-col class="mt-3 mb-3 text-center"><router-link :to="{name: 'read', params: {ExamB1Read1Passed: true}}" ><b-button class="btn btn-warning" type="button" v-on:click="AddSolvedToUserDb">End test!</b-button></router-link></b-col>
            </b-row>   
     </b-container>
    </body>
</template>

<script>
import { firebase } from '@firebase/app'
import '@firebase/auth'
export default {
    name: 'Listening',
        data: function()
    {
      return {
          formalConsent: false,
          email: firebase.auth().currentUser.email,
          ExamB1Read1Passed: false,
          answear1: '',
          answear2: '',
          answear3: '',
          answear4: '',
          answear5: '',
          answear6: '',
          points: 0,
      }
    },
    methods:
    {
        checkForm: function() {
                let correctAnswears = ["E", "A", "D", "B", "C", "G"];
                let answearsIds =["Answear1", "Answear2", "Answear3", "Answear4", "Answear5", "Answear6"];
                let answears = [this.answear1,this.answear2,this.answear3,this.answear4,this.answear5,this.answear6];
                console.log(correctAnswears[0]);
                for(let i = 0; i<correctAnswears.length;i++)
                {
                    if(correctAnswears[i] === answears[i])
                    {
                        this.points++;
                        document.getElementById(answearsIds[i]).setAttribute("style", "background-color: rgb(128, 255, 0);")
                    }
                    else{
                        document.getElementById(answearsIds[i]).setAttribute("style", "background-color: rgb(255, 64, 0)")
                    }
                }
                if(this.points>=4)
                {
                    this.AddSolvedToUserDb();
                }
                
        },
        GiveConsent: function()
        {
            this.formalConsent = true;
        },
        AddSolvedToUserDb: function()
        {
            this.ExamB1Read1Passed = true;
            var db = firebase.firestore();
            db.collection(this.email).doc(this.email).set({ExamB1Read1Passed: this.ExamB1Read1Passed} ,{merge:true})
            db.collection(this.email).doc(this.email).update({reading: this.reading+(1/this.QuizesCount)*100});
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
#answear:hover
{
    background-color: #ffc107;
}
@media (max-width: 500px)
 { 
body {
font-size: 0.7rem;
 }; 
 }

</style>