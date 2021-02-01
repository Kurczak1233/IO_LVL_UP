<template>
<b-container class="background-color pb-5" fluid>
    <b-row class="fluid">
    <b-col cols="12" class="pb-1">
        <img id="banner" class="img-fluid text-center pt-5 pb-5" src="https://github.com/Kurczak1233/IO_LVL_UP/blob/Kurczak1233/project%20copy/src/assets/pngfind.com-world-png-592818%20(1).png?raw=true" alt="Logo projektu"> 
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
.background-color
{
  background: rgba(252, 233, 233, 0.74);
}
.big-font
{
    font-size: 7rem;
}
.medium-font
{
    font-size: 1.2rem;
}
</style>
