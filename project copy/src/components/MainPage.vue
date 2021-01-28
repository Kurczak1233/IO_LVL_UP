<template>
  <body>
      <b-container fluid class="mb-4 pt-auto pb-auto color-bluish">
        <b-row class="pt-3 pb-3">
          <b-col class="col-2 text-size-big text-success"><router-link to="/">IO_LVL_UP</router-link></b-col>
          <b-col class="col-7 text-success ml-auto mr-auto">
            <b-list-group horizontal>
  <b-list-group-item class="rounded-edges-left" variant="primary" href="#some-link">Home</b-list-group-item>
  <b-list-group-item variant="primary" href="#">Contact</b-list-group-item>
  <b-list-group-item class="rounded-edges-right" variant="primary" href="#">About us</b-list-group-item>
            </b-list-group>
</b-col>
          <b-col class="col-1 mt-auto mb-auto text-success"><router-link to="/register"><b-button class="form-control btn btn-warning">Register <b-icon icon="person-plus-fill" font-scale="1"></b-icon></b-button></router-link></b-col>
          <b-col class="col-1  text-success mt-auto mb-auto mr-4"><router-link to="/register"><b-button class="form-control btn btn-success">Login <b-icon icon="person-check-fill" font-scale="1"></b-icon></b-button></router-link></b-col>
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

<style scoped>
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
  background-repeat: no-repeat;
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
.color-bluish
{
  background-color: rgb(105, 208, 245)
}
.rounded-edges-left
{
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
}
.rounded-edges-right
{
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
}
</style>
