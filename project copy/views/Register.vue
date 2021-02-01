<template>
  <body>
    <b-container class="col-10 col-md-8 col-xl-5 mr-auto ml-auto margin10 background-bluish" fluid>
      <b-row class="">
         <b-col class="col-12 text-center pt-4"><img id="project-logo" class="img-fluid" src="https://github.com/Kurczak1233/IO_LVL_UP/blob/Asia/project%20copy/src/assets/logov2.png?raw=true" alt="Logo strony"></b-col>
         <b-col class="col-12 text-size-big text-center pt-2">CREATE ACCOUNT</b-col>
         <b-col class="col-12"><hr></b-col>
      </b-row>
      <b-form @submit.prevent="pressed">
      <b-row class="mt-3">
           <b-col class="col-2 offset-1 pt-1" >
              <label for="Login">Login:</label>
           </b-col>
           <b-col class="col-8">
              <b-form-input required type="email" v-model="email"  class="form-control" aria-describedby="Login" placeholder="Insert your email" id="login"></b-form-input>
            </b-col>
      </b-row>
      <b-row class="mt-3">
            <b-col class="col-2 offset-1 pt-1" >
              <label for="password">Password:</label>
           </b-col>
           <b-col class="col-8">
              <b-form-input required type="password" v-model="password" class="form-control" aria-describedby="password" placeholder="Insert your password" id="login"></b-form-input>
            </b-col>
      </b-row>
      <!-- <b-row class="mt-3">      
           <b-col class="col-2 offset-1 pt-1" >
              <label for="Login">Email:</label>
           </b-col>
           <b-col class="col-8">
              <b-form-input required type="email" class="form-control" aria-describedby="Login" placeholder="Insert your email" id="login"></b-form-input>
            </b-col>
      </b-row> -->
        <b-row>
          <b-col class="col-12 text-center">
        <b-link href="/terms.pdf">Terms of use</b-link>
          </b-col>
        </b-row>
        <b-row class="pb-5 mt-3">
        <b-col class="col-4"></b-col>
        <b-col class="col-4">
        <b-button type="submit" class="btn btn-control btn-success form-control">Register</b-button>
        </b-col>
        <b-col class="col-4"></b-col>
        </b-row>
        </b-form>
    </b-container>
  </body>
      <!-- <div>
        <div class="error" v-if='error'>{{error.message}}</div>
        <form @submit.prevent="pressed" >
        Register
        <div class="email">
            <input type="email" v-model="email" placeholder="email">
        </div>
        <div class="password">
            <input type="password" v-model="password" placeholder="password">
        </div>
        <button type="submit">Register</button>
        </form>
    </div> -->
</template>

<script>
import { firebase } from '@firebase/app'
import '@firebase/auth'
export default {
    name: 'Register',
    methods: {
      async pressed(){
           try{
                const user = firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                console.log(user)
                this.$router.replace({name: "userpage"});
           }catch(err)
           {
               console.log(err)
           }
      }   
    },
    data() {
        return {
            email: "",
            password: '',
            error: ''
        }
    }
}
</script>
<style scoped>
body
{
  background-color: rgb(217,218,211);
  width: 100%;
  height:100%;
}
.background-bluish
{
  background: rgb(239,233,233);
background: linear-gradient(180deg, rgb(177, 174, 174) 0%, rgb(133, 123, 123) 100%);
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
