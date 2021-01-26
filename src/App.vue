<template>
<NaviBar></NaviBar>
<main>
  <HelloWorld msg="Welcome to The Milestone!"/>
  <HelloWorld msg2="The place where you will prepare yourself for Cambridge English Exams!"/>
</main>
   <Alert></Alert>
   <Test></Test>
   <Test></Test>
   <Test></Test>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Alert from './components/Alert.vue'
import Test from './components/Testowy.vue'
import NaviBar from './components/NaviBar.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Alert,
    Test,
    NaviBar
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}

body {
  font-family: 'monserrat', sans-serif;
}


#app {
  background-image: url('./assets/LoginBackground.jpg');
  max-width: 100%;
  background-image: contain;
  background-size: 100% 100%;
  background-repeat: none;

  }
main{
  min-height: 100vh;
  padding: 25px;

  background-image: linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.9));
}

</style>
