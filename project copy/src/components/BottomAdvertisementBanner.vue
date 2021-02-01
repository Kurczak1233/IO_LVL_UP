
<template>

<b-container fluid class="color-bluish">
    <b-row> 
        <b-col cols="12" class="pt-5 medium-font text-primary">Give yourself a unique chance to...</b-col>
        <b-col cols="12" class="pb-3"><b-link href="#foo" class="big-font text-danger"><router-link to="/register">JOIN US TODAY!!!</router-link></b-link></b-col>
    </b-row>
</b-container>
</template>

<script>
export default {
  name: 'AdvBannerBottom',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.background-color
{
    background-color: rgb(198, 201, 202);
}
.big-font
{
    font-size: 5rem;
}
.medium-font
{
    font-size: 1rem;
}
.color-bluish
{
  background-color: rgb(198, 201, 202);
}
</style>
