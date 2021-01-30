<template>
    <div class="container">
      <div class="row">
        <div id="logo-container" class="col-3"><img id="project-logo" class="img-fluid" src="https://github.com/Kurczak1233/IO_LVL_UP/blob/Karolina/project%20copy/src/assets/loogv2.png?raw=true" alt="Logo strony"></div>
        <div id="login" class="col-6 my-auto d-block">
  <!-- <b-form inline>
    <b-input-group prepend="Login:" class="mb-2 mr-sm-2 mb-sm-0">
    <b-form-input id="inline-form-input-name" class="mb-2 mr-sm-2 mb-sm-0" required></b-form-input>
    </b-input-group>
    <b-input-group prepend="Password:" class="mb-2 mr-sm-2 mb-sm-0">
    <b-form-input id="inline-form-input-username"></b-form-input>
    </b-input-group> -->
    <b-form id="loginbar" class="mx-auto d-block" @submit.stop.prevent>
      <b-form-input type="text" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Login" v-model="userId" :state="loginValidation" required></b-form-input>
      <b-form-input type="password" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Password" v-model="userPassword" :state="passwordValidation" required></b-form-input>
       <b-button variant="primary" v-on:click="login()">Log in</b-button>
      <b-form-invalid-feedback :state="validation">
         Your user ID must be 5-15 characters long.
      </b-form-invalid-feedback>
      <b-form-valid-feedback :state="validation">
      </b-form-valid-feedback>
     </b-form>
     </div>
        <div class="col-3 my-auto text-center"><div>Zarejestruj się!</div><div><b-icon icon="person-plus-fill" font-scale="2.5"></b-icon></div></div>
      </div>
    </div>
    
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        userId: '',
        userPassword: ''
      }
    },
    computed: {
      loginValidation() {
        return this.userId.length < 16
      }
      //Miejsce na przyszłe walidacje i routing!
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
background: rgb(239,233,233);
background: linear-gradient(180deg, rgba(239,233,233,1) 0%, rgba(231,228,226,1) 100%);
  height:100px;
  border-radius: 40px;
  margin-top:20px;
}
#logo-container{
  padding:10px;
  height:100%;
}
#project-logo{
  height: 80px;
  padding-left:20px;
}
input[type=text], input[type=password] {
  width: 35%;
  padding-left:15px;
  margin: 5px;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
  background-color:#d4d3d2;
  border-radius: 20px;
}
</style>
