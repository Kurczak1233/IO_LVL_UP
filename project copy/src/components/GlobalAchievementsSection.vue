<template>
<b-container class="background-color pb-5" fluid>
    <b-row class="fluid">
    <b-col cols="12" class="pb-1">
        <img id="banner" class="img-fluid text-center pt-5 pb-5" src="https://cdn.pixabay.com/photo/2013/06/06/15/36/world-117174_960_720.png" alt="Logo projektu"> 
    </b-col>
        <b-col class="text-center d-block col-12 col-md-4"><b-col cols="12" class="big-font"><font-awesome-icon :icon="['fas', 'user-friends']" /></b-col><b-col cols="12" class="medium-font">Over 30000 registered users!</b-col></b-col>
        <b-col class="text-center d-block col-12 col-md-4"><b-col cols="12" class="big-font"><font-awesome-icon :icon="['fas', 'book']" /></b-col><b-col cols="12"  class="medium-font">The greatest amount of educational resources</b-col></b-col>
        <b-col class="text-center d-block col-12 col-md-4" ><b-col cols="12" class="big-font"><font-awesome-icon :icon="['fas', 'star']" /></b-col><b-col cols="12" class="medium-font">We achieved 4.9 of 5.0 stars on "Best English Sites"!</b-col></b-col>
    </b-row>
</b-container>
</template>

<script>
export default {
  name: 'GlobalAchievementsSection',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.color-bluish
{
  background-color: rgb(198, 201, 202);
}
.big-font
{
    font-size: 5rem;
}
.medium-font
{
    font-size: 1.2rem;
}
</style>
