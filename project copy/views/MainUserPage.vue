<template>
    <body>
             <b-nav>  <!--fixed="top" class="headerr" fluid -->
      <b-container fluid class="mb-4 pt-auto pb-auto color-bluish">
        <b-row class="pt-3 pb-3">
          <b-col class="col-3 text-size-big ml-auto mr-auto text-success d-none d-xl-block"><router-link to="/UserPage"><img id="project-logo" class="img-fluid" src="https://github.com/Kurczak1233/Projekt_IO/blob/main/project/src/assets/Logo.png?raw=true" alt="Logo strony">IO_LVL_UP</router-link></b-col>
          <b-col class="col-4 text-success mb-auto mt-auto ml-auto mr-auto d-none d-xl-block">
            <b-list-group horizontal>
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
    <b-dropdown-item href="#">An item</b-dropdown-item>
    <b-dropdown-item href="#">Another item</b-dropdown-item>
            </b-dropdown>
        </b-col>
          <b-col class="col-xl-2 col-8 text-success text-center mt-auto mb-auto mr-4"><LoggedInButton></LoggedInButton></b-col>
        </b-row>
      </b-container>
      </b-nav>
      <!---->
        <b-container fluid>
          <b-row>
          <b-col class="col-4 pt-3 text-center color-bluish" fluid id="aside">
              <b-row>
                <b-col class="col-12 mb-3 text-center font-large">Your level: (player-level)</b-col>
              </b-row>
              <b-row>
                <b-col class="col-6 text-center font-medium">Available classes:</b-col>
                <b-list-group>
  <b-list-group-item class="" variant="" href="#">Speaking</b-list-group-item>
  <b-list-group-item class="" variant="" href="#">Writing</b-list-group-item>
  <b-list-group-item class="" variant="" href="#">Grammar</b-list-group-item>
  <b-list-group-item class="" variant="" href="#">Vocabulary</b-list-group-item>
  <b-list-group-item class="" variant="" href="#">Listening</b-list-group-item>
            </b-list-group>
              </b-row>
          </b-col>
          <b-col class="col-8 text-center color-bluish" fluid id="main">
            
            tekst</b-col>
          </b-row>

              <!-- <b-button v-b-toggle.sidebar-variant>Toggle Sidebar</b-button>  ZAJEBISTY SIDEBAR!
    <b-sidebar id="sidebar-variant" title="Sidebar" bg-variant="dark" text-variant="light" shadow>
      <div class="px-3 py-2">
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
      </div>
    </b-sidebar> -->
        </b-container>
    </body>
</template>

<script>
import LoggedInButton from '../src/components/LoggedInButton.vue'

export default {
     components: {
    LoggedInButton
  }
}
</script>

<style scoped>
.color-bluish
{
  background-color: rgb(105, 208, 245)
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
</style>