<script type="text/javascript" src="//code.jquery.com/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="//ciasteczka.eu/cookiesEU-latest.min.js"></script>
<script type="text/javascript">

jQuery(document).ready(function(){
	jQuery.fn.cookiesEU({
		position:	'top'
	});
});
</script>

<template>
  <body>
     <b-nav> 
      <b-container fluid class="mb-4 pt-auto pb-auto color-bluish">
        <b-row class="pt-3 pb-3">
          <b-col class="col-3 text-size-big text-success d-none d-xl-block"><router-link to="/"><img id="project-logo" class="img-fluid" src="https://github.com/Kurczak1233/IO_LVL_UP/blob/Asia/project%20copy/src/assets/logov2.png?raw=true" alt="Logo strony">IO_LVL_UP</router-link></b-col>
          <b-col class="col-4 text-success mb-auto mt-auto ml-auto mr-auto d-none d-xl-block">
            <b-list-group horizontal>
  <b-list-group-item class="rounded-edges-left" variant="primary" router-link to="/Offer">Offer</b-list-group-item>
  <b-list-group-item class="" variant="primary" router-link to="/Contacts">Contact</b-list-group-item>
  <b-list-group-item class="rounded-edges-right" variant="primary" router-link to="/aboutus">About us</b-list-group-item>
            </b-list-group>
</b-col>
          <b-col class="col-3 d-xl-none">  <b-dropdown size="lg"  variant="link" toggle-class="text-decoration-none" no-caret>   
    <template #button-content>
       <b-icon icon="list" font-scale="3"></b-icon>
    </template>
    <b-dropdown-item router-link to="/NIE MA!">Home</b-dropdown-item>
    <b-dropdown-item router-link to="/NIE MA!">Contact</b-dropdown-item>
    <b-dropdown-item router-link to="/aboutus">About us</b-dropdown-item>
  </b-dropdown></b-col>
          <b-col class="col-4 col-xl-2  mt-auto mb-auto text-success"><router-link to="/register"><b-button class="form-control btn btn-warning">Register <b-icon class="d-none d-sm-inline" icon="person-plus-fill" font-scale="1"></b-icon></b-button></router-link></b-col>
          <b-col class="col-4 col-xl-2 text-success mt-auto mb-auto mr-4"><router-link to="/login"><b-button class="form-control btn btn-success">Login <b-icon class="d-none d-sm-inline" icon="person-check-fill" font-scale="1"></b-icon></b-button></router-link></b-col>
        </b-row>
      </b-container>
      </b-nav>
      <HeaderBanner></HeaderBanner> 
      <BegginerOrAdvancedSection></BegginerOrAdvancedSection>
      <WebsiteOfferSection></WebsiteOfferSection>
      <GlobalAchievementsSection></GlobalAchievementsSection>
      <BottomAdvertisementBanner></BottomAdvertisementBanner>
      <Footer></Footer>
      
  </body>
</template>

<script>
import HeaderBanner from '../src/components/HeaderBanner.vue'
import BegginerOrAdvancedSection from '../src/components/BegginerOrAdvancedSection.vue'
import WebsiteOfferSection from '../src/components/WebsiteOfferSection.vue'
import GlobalAchievementsSection from '../src/components/GlobalAchievementsSection.vue'
import BottomAdvertisementBanner from '../src/components/BottomAdvertisementBanner.vue'
import Footer from '../src/components/Footer.vue'

export default {
  name: 'MainPage',
  components: {
    HeaderBanner,
    BegginerOrAdvancedSection,
    WebsiteOfferSection,
    GlobalAchievementsSection,
    BottomAdvertisementBanner,
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
  background-color: rgb(105, 208, 245);
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
