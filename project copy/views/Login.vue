<template>
  <body>
    <b-container class="col-10 col-md-8 col-xl-5 mr-auto ml-auto margin10 background-bluish" fluid>
      <b-row class="">
         <b-col class="col-12 text-center pt-4"><img id="project-logo" class="img-fluid" src="https://github.com/Kurczak1233/IO_LVL_UP/blob/Asia/project%20copy/src/assets/logov2.png?raw=true" alt="Logo strony"></b-col>
         <b-col class="col-12 text-size-big text-center pt-2">LOGGING PANEL</b-col>
         <b-col class="col-12"><hr></b-col>
      </b-row>
      <b-form @submit.prevent="pressed" class="needs-validation" novalidate>
      <b-row class="mt-3">
           <b-col class="col-2 offset-1 pt-1" >
              <label for="Login">Login:</label>
           </b-col>
           <b-col class="col-8" >
              <b-form-input required type="email" v-model="email" class="form-control" aria-describedby="Login" placeholder="Insert your email" id="login"></b-form-input>
            </b-col>
      </b-row>
      <b-row class="mt-3">
            <b-col class="col-2 offset-1 pt-1" >
              <label for="password">Password:</label>
           </b-col>
           <b-col class="col-8">
              <b-form-input required type="password" v-model="password" class="form-control" aria-describedby="Password" placeholder="Insert your password" id="password"></b-form-input>
            </b-col>
      </b-row>
      <b-row><b-col><p class="error text-center"  v-if="ShowErrorMessage === true">Something went wrong! The password or the login is incorrect!</p></b-col></b-row>
        <b-row>
          <b-col  v-if="ShowErrorMessage === false" class="col-4 offset-4 pt-1 mt-3 pb-5">
            <b-button type="submit" class="form-control btn btn-control btn-success">Log in</b-button>
          </b-col>
            <b-col  v-if="ShowErrorMessage === true" class="col-4 offset-4 pb-5">
            <b-button type="submit" class="form-control btn btn-control btn-success">Log in</b-button>
          </b-col>
        </b-row>
      </b-form>
    </b-container>
  </body>
</template>




<script>
import { firebase } from '@firebase/app'
import '@firebase/auth'
export default {
    name: 'Login',
    data()
    {
      
        return{
            email: '',
            password: '',
            error: '',
            ShowErrorMessage: false,
        }
    },
    methods:
    {
        async pressed(){
            try{ 
            const val = await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            console.log(val);
            this.$router.replace({name: "userpage"})
            }catch(err)
            {
                console.log(err)
                this.ShowErrorMessage = true;
            }
        },
        checkEmailValidation: function()
        {
        for(let i = 0; i < this.email.length; i++)
        {  
          if(this.email[i] === '@' && this.email[0] !== '@' && this.email[i] !== this.email[i].toUpperCase())
          {
              return true;
          }
        }
        },
        checkPasswordValidation: function()
        {
            if(this.password === null)
            {
              return this.error = "Password is required!";
            }
        }
    },
    computed: {
      emailLengthValidation() {
        return this.email.length > 4 && this.email.length < 21
      },
      emailValidation() {
        return this.checkEmailValidation() === true
      },
      passwordValidation() {
          return this.checkPasswordValidation();
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
.error
{
  font-size: 0.8rem;
  color: rgb(189, 44, 44);
}
</style>
