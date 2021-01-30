<template>
    <div>
        Logged in
        <span v-if="loggedIn">Yes, logged as: {{email}}</span> <!-- NIE DZIAŁA ! -->
        <span v-else>No</span>
        <div>
            <button @click="signOut"> Sign out </button>
        </div>
    </div>

</template>

<script>
import { firebase } from '@firebase/app'
import '@firebase/auth'

export default {
    
    created()
    {
        
        firebase.auth().onAuthStateChanged(user=>{
            this.loggedIn = !!user;
            
            // if(user){
            //     this.loggedIn = true;
            // } else {
            //     this.loggedIn = false;
            // }
        })
    },
    data()
    {
        return {
            loggedIn: false,
            email: this.$root.email
        }
    },
    methods: {
        async signOut(){
            try{
                 const data = await firebase.auth().signOut();
                console.log(data);
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

</style>