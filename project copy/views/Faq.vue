<template>
<b-container class="container text-center">
  <b-row class="">
    <b-col class="mb-2" cols="12"> <img id="banner" class="img-fluid" src="https://github.com/Kurczak1233/IO_LVL_UP/blob/Daniel/project%20copy/src/assets/Baner_JS.png?raw=true" alt="Logo listening"></b-col>
  </b-row>
<b-container class="col-12 mr-auto mb-3 ml-auto margin5 background-bluish" fluid>
  <b-row>
      <b-col class="text-center"> FAQ </b-col>
  </b-row>
</b-container>
<b-container class="col-12 mr-auto ml-auto background-bluish" fluid>
      <b-col class="text-left margin4"><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu nulla at neque rhoncus eleifend. Aenean ac arcu sem? </p>
        <p class="text-md-left text-center"><router-link to="/MainPage"> « « « Back to Main Page</router-link></p>
      </b-col>
    </b-container>
</b-container>
</template>

<script>
export default {
name: 'contatcs',
  el: '#example-1',
  data() {
    return {counter: 0,
    posts: [
      { id: 1, title: 'My journey with Vue' },
      { id: 2, title: 'Blogging with Vue' },
      { id: 3, title: 'Why Vue is so fun' }
    ]}
  },
  methods: {
    checkAnswear: function(id)
    {
      this.id = id;
        document.getElementById("button").style.color = "red";
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a
{
  color: black;
}
</style>