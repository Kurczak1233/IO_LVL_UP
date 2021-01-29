<template>
    <div>
        login
        <form @submit.prevent="pressed">
            <div class="login">
                <input type="email" v-model="email" placeholder="login">
            </div>
            <div class="password">
            <input type="password" v-model="password" placeholder="password">
        </div>
        <button type="submit">Login</button>
        </form>
        <div class="error" v-if="error">{{error.message}}</div>
        <span>Need an account? Click here to <router-link to="/testreg">register</router-link></span>
    </div>
</template>

<script>
import { firebase } from '@firebase/app'
import '@firebase/auth'
export default {
    data()
    {
        return{
            email: '',
            password: '',
            error: '',
        }
    },
    methods:
    {
        async pressed(){
            try{

            
            const val = await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            console.log(val);
            this.$router.replace({name: "home"})
            }catch(err)
            {
                console.log(err)
            }
        }
    }
}
</script>

<style scoped>
.error
{
    color: red;
    font-size: 18px;
}
input {
width: 400px;
padding: 30px;
margin: 20px;
font-size: 21px;
}
button{
    width: 400px;
    height: 75px;
    font-size: 100%;
}
</style>