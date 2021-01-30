<template>
    <body>
             <b-nav>  <!--fixed="top" class="headerr" fluid -->
      <b-container fluid class="mb-4 pt-auto pb-auto color-bluish">
        <b-row class="pt-3 pb-3">
          <b-col class="col-3 text-size-big ml-auto mr-auto text-success d-none d-xl-block"><router-link to="/UserPage"><img id="project-logo" class="img-fluid" src="https://github.com/Kurczak1233/Projekt_IO/blob/main/project/src/assets/Logo.png?raw=true" alt="Logo strony">IO_LVL_UP</router-link></b-col>
          <b-col class="col-4 text-success mb-auto mt-auto ml-auto mr-auto d-none d-xl-block">
            <b-list-group horizontal>
  <b-list-group-item class="rounded-edges-left btn btn-success" variant="primary" href="#">Lessons</b-list-group-item>
  <b-list-group-item variant="primary btn btn-warning" href="#">Quizes</b-list-group-item>
  <b-list-group-item class="rounded-edges-right btn btn-danger" variant="primary" href="#">Progress</b-list-group-item>
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
        <b-container>
          <b-col class="col-5" fluid id="aside"></b-col>

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
</style>