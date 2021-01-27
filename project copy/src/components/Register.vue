<template>
  <body>
    <b-container class="col-4 mr-auto ml-auto margin10 background-bluish" fluid>
      <b-row class="">
         <b-col class="col-12 text-center pt-4"><img id="project-logo" class="img-fluid" src="https://github.com/Kurczak1233/Projekt_IO/blob/main/project/src/assets/Logo.png?raw=true" alt="Logo strony"></b-col>
         <b-col class="col-12 text-size-big text-center pt-2">CREATE ACCOUNT</b-col>
         <b-col class="col-12"><hr></b-col>
      </b-row>
      <b-row class="mt-3">
           <b-col class="col-2 offset-1 pt-1" >
              <label for="Login">Login:</label>
           </b-col>
           <b-col class="col-8">
              <b-form-input required type="text" class="form-control" aria-describedby="Login" placeholder="Insert your login" id="login"></b-form-input>
            </b-col>
      </b-row>
      <b-row class="mt-3">
            <b-col class="col-2 offset-1 pt-1" >
              <label for="Login">Password:</label>
           </b-col>
           <b-col class="col-8">
              <b-form-input required type="password" class="form-control" aria-describedby="Login" placeholder="Insert your password" id="login"></b-form-input>
            </b-col>
      </b-row>
      <b-row class="mt-3">      
           <b-col class="col-2 offset-1 pt-1" >
              <label for="Login">Email:</label>
           </b-col>
           <b-col class="col-8">
              <b-form-input required type="email" class="form-control" aria-describedby="Login" placeholder="Insert your email" id="login"></b-form-input>
            </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col class="col-11 offset-1 pt-1">
        <b-form-checkbox type="checkbox" required>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque suscipit dolore impedit minima maiores at?</b-form-checkbox>
        </b-col>
        </b-row>
        <b-row class="pb-5 mt-3">
        <b-col class="col-3 offset-5 pt-1">
        <b-button type="submit" class="btn btn-control btn-success">Register</b-button>
        </b-col>
        </b-row>
    </b-container>
  </body>
</template>

<script>
export default {
  name: 'Register',
    data() {
      return {
        types: [
          'text',
          'number',
          'email',
          'password',
        ]
        }
    }
    
}
</script>

<style >
body
{
  background-color: rgb(217,218,211);
  width: 100%;
  height:100%;
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
