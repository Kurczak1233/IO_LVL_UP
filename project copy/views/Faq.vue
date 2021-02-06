<template>
<b-container class="container text-center">
  <b-row class="">
    <b-col class="mb-2" cols="12"> <img id="banner" class="img-fluid" src="https://github.com/Kurczak1233/IO_LVL_UP/blob/Daniel/project%20copy/src/assets/Baner_JS.png?raw=true" alt="Logo listening"></b-col>
  </b-row>
<b-container class="col-12 mr-auto ml-auto margin5 background-bluish" fluid>
  <b-row>
      <b-col class="text-center margin5"> FAQ </b-col>
    </b-row>
</b-container>
   <b-col> <p> </p> </b-col>
<b-container class="col-12 mr-auto ml-auto background-bluish" fluid>
<table class="table table-striped">
  <thead>
    <tr>
       <b-col class="text-left margin4"> <p> </p> <p> ? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu nulla at neque rhoncus eleifend. Aenean ac arcu sem? </p> <p>  Praesent mattis, neque eu molestie mollis, leo elit pellentesque lorem, eu sagittis lacus augue vitae orci. Donec mauris massa, dictum luctus pellentesque mollis, eleifend tristique nisl. Cras aliquam laoreet lacus eget hendrerit. Maecenas ultrices massa augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </p> <p> ? Praesent hendrerit odio eget velit aliquet, eget porttitor nisl congue. </p> <p> Vestibulum et volutpat arcu, sed iaculis felis. Praesent tortor metus, imperdiet quis maximus ut, egestas vel nibh. Proin laoreet, turpis nec scelerisque fringilla, libero turpis tristique dui, at volutpat lorem massa ac dui. Duis sit amet commodo lectus. </p> <p> ? Donec eleifend metus et diam bibendum accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris finibus, purus a fringilla semper, diam arcu tristique sem, id tempus enim urna ut nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec mauris massa, dictum luctus pellentesque mollis, eleifend tristique nisl. Cras aliquam laoreet lacus eget hendrerit. Maecenas ultrices massa augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent hendrerit odio eget velit aliquet, eget porttitor nisl congue. Vestibulum et volutpat arcu, sed iaculis felis. Praesent tortor metus, imperdiet quis maximus ut, egestas vel nibh. Proin laoreet, turpis nec scelerisque fringilla, libero turpis tristique dui, at volutpat lorem massa ac dui. Duis sit amet commodo lectus. Donec eleifend metus et diam bibendum accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris finibus, purus a fringilla semper, diam arcu tristique sem, id tempus enim urna ut nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam erat volutpat. Aliquam erat volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p> <p> ? Morbi vehicula malesuada ligula. Nam at laoreet massa, et consequat erat. Proin a sapien eget lorem scelerisque faucibus quis eleifend nulla. </p> <p> Pellentesque nec turpis sodales, sollicitudin turpis a, faucibus est. Maecenas accumsan convallis nisi a luctus. Vestibulum sollicitudin massa at arcu iaculis, eu pellentesque velit porttitor. Proin vel nisl porttitor lectus rhoncus scelerisque. Praesent blandit, quam sit amet condimentum luctus, nunc nulla laoreet odio, sit amet vehicula ex purus quis neque. Vivamus rhoncus leo elit, vel venenatis elit condimentum nec. Sed dapibus metus felis, a porta lorem iaculis sagittis. Nunc tempus ultrices purus id tristique. Nulla quis pulvinar lectus. Suspendisse elementum hendrerit ex, vitae ullamcorper tellus congue nec. Maecenas feugiat tempus mollis. </p> <p> ?  Nulla dapibus lacinia malesuada. Nam non rutrum massa. Sed a finibus ante. </p> <p> Phasellus nec hendrerit metus, sit amet pulvinar diam. Donec tristique tincidunt leo, non venenatis turpis congue ut. Praesent ac mi vel arcu sollicitudin feugiat. Aenean vitae semper odio. </p> <p> ? Pellentesque id velit sit amet turpis commodo hendrerit vitae in urna. Nulla eget velit ac turpis blandit maximus a id nulla. </p> <p> Curabitur pellentesque neque et justo dignissim, dignissim tempor urna auctor. Donec pellentesque, justo eu cursus molestie, ligula lacus consequat metus, a maximus ligula diam vel ipsum. Integer sed diam vel mauris iaculis venenatis. Fusce eget porta nibh. Vivamus sit amet ex vitae justo volutpat faucibus. Integer volutpat sodales urna vitae dictum. Sed vitae dui libero. </p>
        <p class="text-md-left text-center"><router-link to="/MainPage"> « « « Back to Main Page</router-link></p>
 </b-col>
    </tr>
  </thead>
  </table>
    </b-container>
<b-container>
  <!-- Plac zabaw Michoła -->
<div id="example-1">
  <button v-on:click="counter += 1">Add 1</button>
  <p>The button above has been clicked {{ counter }} times.</p>
</div>
</b-container>
</b-container>
</template>

<script>
export default {
name: 'contatcs',
  el: '#example-1',
  data() {
           return {
             counter: 0
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