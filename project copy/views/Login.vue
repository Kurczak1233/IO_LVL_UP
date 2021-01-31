<template>
  <body>
    <b-container class="col-10 col-md-8 col-xl-5 mr-auto ml-auto margin10 background-bluish" fluid>
      <b-row class="">
         <b-col class="col-12 text-center pt-4"><img id="project-logo" class="img-fluid" src="https://github.com/Kurczak1233/IO_LVL_UP/blob/Karolina/project%20copy/src/assets/loogv2.png?raw=true" alt="Logo strony"></b-col>
         <b-col class="col-12 text-size-big text-center pt-2">LOG IN</b-col>
         <b-col class="col-12"><hr></b-col>
      </b-row>
      <b-form @submit.prevent="pressed">
      <b-row class="mt-3">
           <b-col class="col-2 offset-1 pt-1" >
              <label for="Login">Login:</label>
           </b-col>
           <b-col class="col-8" >
              <b-form-input required type="email" v-model="email" :state="validation" class="form-control" aria-describedby="Login" placeholder="Insert your email" id="login"></b-form-input>
            </b-col>
      </b-row>
      <b-row class="mt-3">
            <b-col class="col-2 offset-1 pt-1" >
              <label for="Login">Password:</label>
           </b-col>
           <b-col class="col-8">
              <b-form-input required type="password" v-model="password" :state="validation" class="form-control" aria-describedby="Login" placeholder="Insert your password" id="login"></b-form-input>
            </b-col>
      </b-row>

        <b-row class="mt-3">
        <b-col class="col-11 offset-1 pt-1">
        <b-form-checkbox type="checkbox" required>Zapamiętaj adres email</b-form-checkbox>
        </b-col>
        </b-row>
        <b-row class="pb-5 mt-3">
        <b-col class="col-4 offset-4 pt-1">
        <b-button type="submit" class="form-control btn btn-control btn-success">Log in</b-button>
        <!-- <b-row class="error" v-if="error">{{error.message}}</b-row> -->
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
            error: 'Login or password are incorrect. Please try again.',
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
            }
        }
    }
}
</script>

<style >
body
{
  background-color: rgb(242, 243, 237);
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
