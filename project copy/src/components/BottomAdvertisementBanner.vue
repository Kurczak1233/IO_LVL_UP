
<template>
<b-container fluid class="color-blu">
    <b-row> 
        <b-col cols="12" class="pt-5 medium-font text-primary">Give yourself a unasdasdsaique chance to...</b-col>
        <b-col cols="12" class="pb-3"><b-link href="#foo" class="big-font text-danger"><router-link to="/register">JOIN US TODAY!</router-link></b-link></b-col>
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
.big-font
{
    font-size: 7rem;
}
.medium-font
{
    font-size: 1.2rem;
}
.color-blu
{
    background-color: rgb(105, 208, 245);
}
</style>
