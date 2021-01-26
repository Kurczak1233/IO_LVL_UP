<template>
<b-container fluid class="begginer-banner">
  <b-row class="pt-5 pb-5">
    <b-col class="img fluid-md d-none d-md-block my-auto" cols="12" md="6"><b-img class="First-part img-fluid" src="https://github.com/Kurczak1233/Projekt_IO/blob/main/project/src/assets/B2+.png?raw=true" alt="CERF Levels from B1+"></b-img></b-col>
    <b-col class="img fluid-md d-xsm-block d-md-none mt-3 my-auto" cols="12" md="6"><b-img class="First-part img-fluid" src="https://github.com/Kurczak1233/Projekt_IO/blob/main/project/src/assets/Small%20CERF%20lvls.png?raw=true" alt="CERF Levels from B1+"></b-img></b-col>
<b-col class="text-center d-block d-md-none mt-2 mb-5" md=12>Clear education career!</b-col>
    <b-col class="Second-part my-auto" cols="12" md="3"><b-img class="img-fluid" src="https://github.com/Kurczak1233/Projekt_IO/blob/main/project/src/assets/English-book.png?raw=true" alt="English book"></b-img></b-col>
<b-col class="text-center d-block d-md-none mt-2 mb-5" md=12>Unique materials!</b-col>
    <b-col class="Third-part my-auto" cols="12" md="3"><b-img class="img-fluid" src="https://github.com/Kurczak1233/Projekt_IO/blob/main/project/src/assets/Test.png?raw=true" alt="English book"></b-img></b-col>
<b-col class="text-center d-block d-md-none mt-2 mb-5" md=12>Cambridge English Exams!</b-col>
    <b-col class="text-center d-none d-md-block mt-4 text-size-big" md=6>Clear education career!</b-col>
    <b-col class="text-center d-none d-md-block" md=3><a href="\skan.pdf" download="skan.pdf">Przystępne materiały</a></b-col>
    <b-col class="text-center d-none d-md-block  mt-4 text-size-big"   md=3>Unique materials!</b-col>
    <b-col class="text-center d-none d-md-block  mt-4 text-size-big" md=3>Cambridge English Exams!</b-col>
  </b-row>
</b-container>
</template>

<script>
export default {
  name: 'Begginer',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .begginer-slider{
    height:250px;
} */
.text-size-big
{
    font-size: 1.2rem;
}
.begginer-banner{
    background: rgba(252, 233, 233, 0.74);
}
.First-part img{
    padding:5px;
}
.Second-part img{
    height:150px;
}
.Third-part img{
    height:150px;
}
</style>
