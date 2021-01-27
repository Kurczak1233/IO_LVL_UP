<template>
  <body>
      <b-container fluid>
        <b-row class="pb-4">
          <b-col class="col-4 text-size-big text-success background-dark"><router-link to="/register">IO_LVL_UP</router-link></b-col>
          <b-col class="col-4 text-size-big text-success background-dark"><router-link to="/register">Register</router-link></b-col>
          <b-col class="col-4 text-size-big text-success background-dark"><router-link to="/register">Login</router-link></b-col>
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
import HeaderBanner from './HeaderBanner.vue'
import Navigation from './Navigation.vue'
import Advertisement from './Advertisement.vue'
import Begginer from './Begginer.vue'
import Achi from './Achi.vue'
import AdvBannerBottom from './AdvBannerBottom.vue'
import Footer from './Footer.vue'

export default {
  name: 'MainPage',
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
    font-size: 2rem;
}
.background-dark{
  background-color: darkslategrey;
}
</style>
