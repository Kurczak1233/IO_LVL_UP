<template>
  <body>
      <b-container fluid>
        <b-row>
          <b-col class="col-3 text-size-big text-success background-dark">Tutaj będzie nawbarek! ;)</b-col>
          <b-col class="col-3 text-size-big text-success background-dark">Tutaj będzie nawbarek! ;)</b-col>
          <b-col class="col-3 text-size-big text-success background-dark">Tutaj będzie nawbarek! ;)</b-col>
          <b-col class="col-3 text-size-big text-success background-dark">Tutaj będzie nawbarek! ;)</b-col>
        </b-row>
      </b-container>
      <HeaderBanner></HeaderBanner> 
      <nav><Navigation></Navigation></nav>
      <Advertisement></Advertisement>
      <Begginer></Begginer>
      <Achi></Achi>
      <AdvBannerBottom></AdvBannerBottom>
      <Footer></Footer>
  </body>
</template>

<script>
import HeaderBanner from './components/HeaderBanner.vue'
import Navigation from './components/Navigation.vue'
import Advertisement from './components/Advertisement.vue'
import Begginer from './components/Begginer.vue'
import Achi from './components/Achi.vue'
import AdvBannerBottom from './components/AdvBannerBottom.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    HeaderBanner,
    Navigation,
    Advertisement,
    Begginer,
    Achi,
    AdvBannerBottom,
    Footer
  }
}
</script>

<style>
:root{
    box-sizing:border-box;
    
}
body {
font-family: 'Fraunces', serif;
font-family: 'Nunito', sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: rgb(217,218,211);
  background: linear-gradient(180deg, rgba(217,218,211,1) 0%, rgba(184,179,178,1) 100%);
  background:cover;
}
header{
  padding-top: 20px;
}
.text-size-big
{
    font-size: 4rem;
}
.background-dark{
  background-color: darkslategrey;
}
</style>
