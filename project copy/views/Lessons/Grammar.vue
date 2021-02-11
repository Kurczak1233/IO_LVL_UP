<template>
<b-container class="container text-center">
  <b-row class="">
    <b-col class="mb-3" cols="12"> <img id="banner" class="img-fluid" src="https://github.com/Kurczak1233/IO_LVL_UP/blob/Daniel/project%20copy/src/assets/Baner_grammar.png?raw=true" alt="Logo grammar"></b-col>
  </b-row>
<b-container class="p-3 mb-3 mr-auto ml-auto margin5 background-bluish" fluid>
<b><h3><i>THE MICROSCOPE</i></h3></b>
<b-row class="">
  <b-col class=""><l>An important invention in the development of science and medicine was the microscope. It was (1) ... the principle that light could be (2) ... or bent, by a glass lens. It was soon discovered that tiny objects could be magnified (3) ... size when viewed through a glass lens that had been ground and polished in a specific (4)... . Although the principle was known to the Chinese as early as 1000 A.D, it was not until the 13th and 14th centuries in Europe (5) ... it was put to practical use in the form of eyeglasses.</l>
  </b-col>
</b-row>
<b-row class="">
  <b-col class=""><l>In Europe the first microscope was invented by brothers Zacharias and Hans Janssen, two Dutch eyeglass-makers, around 1590. They built a “compound” microscope, so called because of its two lenses. The most significant development and use of the microscope during this period, however, belongs to another Dutch optician, Antonie van Leeuwenhoek (1632-1723). Born in Delft, Holland, he became skilled at (6) ... very sharp and accurate magnifying lenses. Some of his single-lens microscopes were able to</l>
  </b-col>
</b-row>   
<b-row class="">
  <b-col class=""><l>magnify up the three hundred times (7) ... size, and around 1660 he began serious study using these instruments. He was the first to discover bacteria and other microscopic organisms, calling these tiny creatures “animalcules”. (8) ... to this discovery, very small creatures such as fleas and maggots were thought to “spontaneously generate” from a single source, such as rotting meat in the case of maggots.</l>
  </b-col>
</b-row>   
<table class="table table-striped">
  <thead>
    <tr v-on:click.once="solved">
      <th scope="row"><b>1.</b></th>
      <td v-on:click.once="inputClickedRight">based upon</td>
      <td v-on:click="inputClickedFalse">based at</td>
      <td v-on:click="inputClickedFalse">based by</td>
      <td v-on:click="inputClickedFalse">based in</td>
    </tr>
  </thead>
  <tbody>
    <tr v-on:click.once="solved">
      <th scope="row"><b>2.</b></th>
      <td v-on:click="inputClickedFalse">retraced</td>
      <td v-on:click.once="inputClickedRight">retracted</td>
      <td v-on:click="inputClickedFalse">refracted</td>
      <td v-on:click="inputClickedFalse">retorted</td>
    </tr>
    <tr v-on:click.once="solved">
      <th scope="row">3.</th>
      <td  v-on:click="inputClickedFalse">on</td>
      <td v-on:click="inputClickedRight">in</td>
      <td  v-on:click="inputClickedFalse">by</td>
      <td  v-on:click="inputClickedFalse">with</td>
    </tr>
    <tr v-on:click.once="solved">
      <th scope="row">4.</th>
      <td v-on:click="inputClickedRight">manner</td>
      <td v-on:click="inputClickedFalse">fashion</td>
      <td v-on:click="inputClickedFalse">character</td>
      <td v-on:click="inputClickedFalse">procedure</td>
    </tr>
    <tr v-on:click.once="solved"> 
      <th scope="row">5.</th>
      <td v-on:click="inputClickedRight">that</td>
      <td v-on:click="inputClickedFalse">than</td>
      <td v-on:click="inputClickedFalse">when</td>
      <td v-on:click="inputClickedFalse">then</td>
    </tr>
    <tr v-on:click.once="solved">
      <th scope="row">6.</th>
      <td v-on:click="inputClickedFalse">rubbing</td>
      <td v-on:click="inputClickedFalse">granting</td>
      <td v-on:click="inputClickedRight">grinding</td>
      <td v-on:click="inputClickedFalse">scraping</td>
    </tr>
    <tr v-on:click.once="solved">
      <th scope="row">7</th>
      <td v-on:click="inputClickedFalse">current</td>
      <td v-on:click="inputClickedRight">actual</td>
      <td v-on:click="inputClickedFalse">substantial</td>
      <td v-on:click="inputClickedFalse">present</td>
    </tr>
    <tr v-on:click.once="solved">
      <th scope="row">8.</th>
      <td v-on:click="inputClickedFalse">Due</td>
      <td v-on:click="inputClickedFalse">According</td>
      <td v-on:click="inputClickedFalse">Owing</td>
      <td v-on:click="inputClickedRight">Prior</td>
    </tr>
      </tbody>
</table>
  <!-- <div class="text-center" v-if="QuestionSolved === 8">You scored: {{Pointscounter}} and <p v-if="Pointscounter >= 5" class="text-success">PASSED</p><p v-else class="text-size-big text-danger">FAILED</p> the quiz!</div> -->
    </b-container>  

    <b-container class="col-240 col-md-120 col-xl-100 mr-auto ml-auto margin5 background-bluish" fluid>
<b><h3><i>Czasowniki modalne - Modal Verbs</i></h3></b>
<b-row class="">
  <b-col class="">1. I _______ swim when I was a boy. </b-col>
</b-row>
<b-row class="">
  <b-col class="">2. How _______ you!  </b-col>
</b-row>
<b-row class="">
  <b-col class="">3. The killers _______ to be executed tomorrow.  </b-col>
</b-row>
<b-row class="">
  <b-col class="">4. She _______ go home!  </b-col>
</b-row>
<b-row class="">
  <b-col class="">5. You _______ go there alone!  </b-col>
</b-row>
<b-row class="">
  <b-col class="">6. You _______ worry about this anymore.  </b-col>
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
          <td><c>could</c></td>
      <td><f>was</f></td>
      <td><f>have to</f></td>
      <td><f>must</f></td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">2</th>
      <td><f>have</f></td>
      <td><f>must</f></td>
         <td><c>dare</c></td>
      <td><f>used</f></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td><f>was</f></td>
           <td><c>are</c></td>
      <td><f>was able</f></td>
      <td><f>has to</f></td>
    </tr>
    <tr>
      <th scope="row">4</th>
           <td><c>has to</c></td>
      <td><f>have to</f></td>
      <td><f>are going to</f></td>
      <td><f>used</f></td>
    </tr>
    <tr>
      <th scope="row">5</th>
           <td><c>must not</c></td>
      <td><f>has to </f></td>
      <td><f>must not </f></td>
      <td><f>was not</f></td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td><f>had better</f></td>
             <td><c>need not</c></td>
      <td><f>are </f></td>
      <td><f>was</f></td>
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

</b-container>

<b-container class="col-240 col-md-120 col-xl-100 mr-auto ml-auto margin5 background-bluish" fluid>
<b>  <b-col class=""><h3><i> Czas Past Continuous - Past Continuous Tense </i></h3> </b-col>
</b>
<b-row class="">
  <b-col class=""> 1. He came while we ____________ </b-col>
</b-row>
<b-row class="">
  <b-col class=""> 2. The professor ____________ when the telephone rang </b-col>
</b-row>
<b-row class="">
  <b-col class=""> 3. When Mrs Jones came in her son ____________ </b-col>
</b-row>
<b-row class="">
  <b-col class="">4. Frank ____________ fast, but I couldn't reach him. </b-col>
</b-row>
<b-row class="">
  <b-col class=""> 5. We were at home ____________ TV when the accident happened. </b-col>
</b-row>
<b-row class="">
  <b-col class=""> 6. Although the baby ____________ loudly, my neighbour came to see what was happening. </b-col>
</b-row>
<b-row class="">
  <b-col class=""> 7. What was Isabelle's husband ____________ there? </b-col>
</b-row>
<b-row class="">
  <b-col class=""> 8. Paul broke his leg when he ____________ a horse. </b-col>
</b-row>
<b-row class="">
  <b-col class=""> 9. Where ____________ when you found this coin? </b-col>
</b-row>
<b-row class="">
  <b-col class=""> 10. She ____________ in a bank when I last saw her. </b-col>
</b-row>


<table class="table table-striped">
  <thead>
    <tr>
      <th scope="row">1</th>
          <td><c> were sleeping </c></td>
      <td><f>slept </f></td>
      <td><f> was sleeping </f></td>
      <td><f>are sleeping </f></td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">2 </th>
      <td><f>read</f></td>
      <td><f>reads</f></td>
      <td><f>were reading</f></td>
      <td><c> was reading </c></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td><f>were not sleeping </f></td>
      <td><f> didn't sleep </f></td>
      <td><c>  was not sleeping </c></td>
      <td><f> doesn't sleep </f></td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td><c> wasn't running </c></td>
      <td><f> weren't running </f></td>
      <td><f> didn't run </f></td>
      <td><f> doesn't run </f></td>
    </tr>
    <tr>
      <th scope="row">5</th>
           <td><c> watching </c></td>
      <td><f> watches </f></td>
      <td><f> watch </f></td>
      <td><f> watched </f></td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td><f> weren't crying </f></td>
             <td><c>wasn't crying </c></td>
      <td><f> not cry  </f></td>
      <td><f>don't cry </f></td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td><f> does </f></td>
           <td><f> did </f></td>
      <td><f> do </f></td>
      <td><c> doing </c></td>
    </tr>
    <tr>
      <th scope="row">8</th>
      <td><f> were riding </f></td>
      <td><c> was riding </c></td>
      <td><f> rode  </f></td>
         <td><f> ridden </f></td>
    </tr>
    <tr>
      <th scope="row">9</th>
      <td><f> did you dig   </f></td>
      <td><c> were you digging  </c></td>
      <td><f> do you dig  </f></td>
      <td><f> you are digging </f></td>
    </tr>
    <tr>
      <th scope="row">10</th>
      <td><f> were working  </f></td>
      <td><f> works </f></td>
      <td><f> work </f></td>
      <td><c> was working </c></td>
    </tr>
      </tbody>
</table>


</b-container>




</b-container>
</template>

<script>
export default {
name: 'Grammar',
data: function(){
return{
  Pointscounter:0,
  QuestionSolved:0,
  AbleToGrantPoints: true,
}
},
methods: {
  score: function() 
  {
      return this.Pointscounter++;
  },
  inputClickedRight: function(event)
  {
      //this.$el.setAttribute("style", "background: green;");
      console.log("PRZED PRZYUZNANIEM PUNKTA " + this.AbleToGrantPoints) //FALSE!
      event.target.setAttribute("style", "background: rgb(128, 255, 0); ");
      if(this.AbleToGrantPoints === true)
      {
      this.score();
      event.target.setAttribute("disabled", true);
      }
      console.log("PO PRZYZNANIEU PUNKTA " + this.AbleToGrantPoints+ "Punkty" + this.Pointscounter)
  },
  inputClickedFalse: function(event)
  {
    event.target.setAttribute("style", "background: rgb(255, 64, 0)");
    console.log("FALSE!" + "Ilośc pkt" + this.Pointscounter)
    this.AbleToGrantPoints = false;
  },
  solved: function()
  {   console.log("SOLVED")
      this.QuestionSolved++;
  }
}
}
</script>

<style scoped>
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
table td:hover{
  background-color: #ffc107;
}
</style>