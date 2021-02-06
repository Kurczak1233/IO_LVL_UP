<template>
<b-container class="container text-center">
  <b-row class="">
    <b-col class="mb-3" cols="12"> <img id="banner" class="img-fluid" src="https://github.com/Kurczak1233/IO_LVL_UP/blob/Daniel/project%20copy/src/assets/Baner_listening.png?raw=true" alt="Logo listening"></b-col>
  </b-row>
<b-container class="col-240 col-md-120 col-xl-100 mr-auto ml-auto margin5 background-bluish" fluid>
<b>Kendall Jenner</b>

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
</b-container>
</template>

<script>
export default {
name: 'Listening',
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