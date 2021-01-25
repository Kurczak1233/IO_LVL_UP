<template>
  <body>
      <header><HeaderBanner></HeaderBanner></header> 
      <nav><Navigation></Navigation></nav>
      <Advertisement></Advertisement>
      <Begginer></Begginer>
      <Achi></Achi>
  </body>
</template>

<script>
import HeaderBanner from './components/HeaderBanner.vue'
import Navigation from './components/Navigation.vue'
import Advertisement from './components/Advertisement.vue'
import Begginer from './components/Begginer.vue'
import Achi from './components/Achi.vue'

export default {
  name: 'App',
  components: {
    HeaderBanner,
    Navigation,
    Advertisement,
    Begginer,
    Achi
  }
}
</script>

<style>
:root{
    box-sizing:border-box;
    
}
body {
  font-family: 'Cookie', cursive;
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

</style>
