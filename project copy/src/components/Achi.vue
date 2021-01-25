<template>
<b-container class="background-color" fluid>
    <b-row class="fluid">
    <b-col cols="12" class="pb-1">
        <img id="banner" class="img-fluid text-center pt-5 pb-5" src="https://github.com/Kurczak1233/IO_LVL_UP/blob/Kurczak1233/project%20copy/src/assets/pngfind.com-world-png-592818%20(1).png?raw=true" alt="Logo projektu"> 
    </b-col>
        <b-col class="text-center d-none d-md-block" cols="4"><b-col cols="12" class="big-font"><font-awesome-icon :icon="['fas', 'user-friends']" /></b-col><b-col cols="12" class="medium-font">Mamy ponad 30000 zarejestrowanych użytkowników</b-col></b-col>
        <b-col class="text-center d-none d-md-block" cols="4"><b-col cols="12" class="big-font"><font-awesome-icon :icon="['fas', 'book']" /></b-col><b-col cols="12"  class="medium-font">Posiadamy największa bazę materiałów do nauki!</b-col></b-col>
        <b-col class="text-center d-none d-md-block" cols="4"><b-col cols="12" class="big-font"><font-awesome-icon :icon="['fas', 'star']" /></b-col><b-col cols="12" class="medium-font">Uzyskaliśmy 4.9/5.0 gwiazdek z opinii użytkowników</b-col></b-col>
    </b-row>
</b-container>
</template>

<script>
export default {
  name: 'Achi',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.background-color
{
    background-color: rgb(217,218,211);
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
