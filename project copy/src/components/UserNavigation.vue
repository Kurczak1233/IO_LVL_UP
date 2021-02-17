<template>  
    <b-nav> 
        <b-container fluid class="mb-4 pt-auto pb-auto color-bluish">
            <b-row class="pt-3 pb-3">
                <b-col class="col-3 text-size-big ml-auto mr-auto text-success d-none d-xl-block"><router-link to="/UserPage"><img id="project-logo" class="img-fluid" src="https://github.com/Kurczak1233/IO_LVL_UP/blob/Asia/project%20copy/src/assets/logov2.png?raw=true" alt="Logo strony">IO_LVL_UP</router-link></b-col>
                <b-col class="col-4 text-success mb-auto mt-auto ml-auto mr-auto d-none d-xl-block">
                    <b-list-group horizontal v-if="level !== 'Unknown'">
                        <b-list-group-item class="rounded-edges-left btn btn-success" variant="success" href="#">Lessons</b-list-group-item>
                        <b-list-group-item variant="warning btn btn-warning" href="#">Quizes</b-list-group-item>
                        <b-list-group-item class="rounded-edges-right btn btn-danger" variant="danger" href="#">Progress</b-list-group-item>
                        </b-list-group>
                </b-col>
                <b-col class="col-3 d-xl-none">  
                    <b-dropdown size="lg"  variant="link" toggle-class="text-decoration-none" no-caret>   
                        <template #button-content>
                            <b-icon icon="list" font-scale="3"></b-icon>
                        </template>
                        <b-dropdown-item href="#">An ittem</b-dropdown-item>
                        <b-dropdown-item href="#">Another item</b-dropdown-item>
                    </b-dropdown>
                </b-col>
            <b-col class="col-xl-2 col-8 text-success text-center mt-auto mb-auto mr-4"><LoggedInButton></LoggedInButton></b-col>
            </b-row>
        </b-container>
    </b-nav>
</template>

<script>
import LoggedInButton from './LoggedInButton.vue'
export default {
    name: "UserNavigation",
     components: {
    LoggedInButton
  },
  props: ["level"]
}
</script>

<style scoped>
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
.font-large
{
  font-size: 1.5rem;
}
.font-medium
{
  font-size: 1.2rem;
}
.font-small
{
  font-size:1rem;
}
</style>