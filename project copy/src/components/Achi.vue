<template>
<b-container class="background-color" fluid>
    <b-row class="fluid">
    <b-col cols="12">
        <img id="banner" class="img-fluid text-center pt-5 pb-5" src="https://github.com/Kurczak1233/IO_LVL_UP/blob/Kurczak1233/project%20copy/src/assets/PlanetImg.png?raw=true" alt="Logo projektu"> 
    </b-col>
        <b-col class="text-center d-none d-md-block" cols="4"><i class="fas fa-users"></i>Mamy ponad 30000 'zarejestrowanych użytkowników (pod)'</b-col>
        <b-col class="text-center d-none d-md-block" cols="4">Posiadamy największa bazę materiałów do nauki!</b-col>
        <b-col class="text-center d-none d-md-block" cols="4">Uzyskaliśmy 4.9/5.0 gwiazdek z opinii użytkowników</b-col>
    </b-row><font-awesome-icon icon="user-secret" /><font-awesome-icon :icon="['fas', 'user-friends']" />
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
</style>
