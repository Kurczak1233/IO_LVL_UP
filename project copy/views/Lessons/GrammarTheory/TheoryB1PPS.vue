<template>
<body>
<UserNavigation :IsInGrammar="IsInGrammar"></UserNavigation>
<b-container class="container text-center mb-3">
<b-container class="col-12 mr-auto m-3 mb-4 p-2 ml-auto margin5 background-bluish" fluid>
  <b-row>
      <b-col class="text-center text-size-big"> Present perfect simple </b-col>
  </b-row>
</b-container>
<b-container class="col-12 mr-auto ml-auto background-bluish p-3" fluid>
  <b-row>
      <b-col class="text-left margin4"><p>We use present perfect simple when we have to describe:</p><p><b class="text-danger">1. Unfinished Actions</b></p>
<p><b>Unfinished actions or states or habits</b> that started in the past and continue to the present. Usually we use it to say 'how long' and we need 'since' or 'for'. We often use stative verbs.
<ul>
  <li>I've known Karen since 1994.</li>
<li>She's lived in London for three years.</li>
<li>I've worked here for six months.</li>
</ul></p>

<p><b>'Since' and 'For'</b>
We use 'since' with a fixed time in the past (2004, April 23rd, last year). The fixed time can be another action, which is in the past simple (since I was at school, since I arrived).
<ul>
<li>I've known Sam since 1992.</li>
<li>I've liked chocolate since I was a child.</li>
<li>She's been here since 2pm.</li>
</ul></p>

<p><b>We use 'for' with a period of time</b> (2 hours, three years, six months).
<ul>
<li>I've known Julie for ten years.</li>
<li>I've been hungry for hours.</li>
<li>She's had a cold for a week.</li>
</ul></p>

<p><b class="text-danger">2. Finished Actions</b></p>
<p><b>Life experiences</b> These are actions or events that happened sometime during a person's life and have visable consequences on a person now. We don't say when the experience happened, and the person needs to be alive now. We often use the words 'ever' and 'never' here.
<ul>
<li>I have been to Tokyo.</li>
<li>They have visited Paris three times.</li>
<li>We have never seen that film.</li>
</ul>
<p><b class="text-danger">3: With an unfinished time word</b> (this month, this week, today).</p>
<p><b>The period of time is still continuing.</b>
<ul>
<li>I haven't seen her this month.</li>
<li>She's drunk three cups of coffee today.</li>
<li>I've already moved house twice this year!</li>
</ul>
<p>We CAN'T use the present perfect with a finished time word.</p>
<p class="text-danger">NOT: <del>I've seen him yesterday.</del></p>
<p><b class="text-danger">4. A finished action with a result in the present</b> (focus on result).</p>
<p> We often use the present perfect to talk about something that happened in the recent past, but that is <b>still true or important now.</b> Sometimes we can use the past simple here, especially in US English.
<ul>
<li>I've lost my keys (so I can't get into my house).</li>
<li>She's hurt her leg (so she can't play tennis today).</li>
<li>They've missed the bus (so they will be late).</li>
</ul>
<p><b class="text-danger">5: We can also use the present perfect to talk about something that happened recently</b>, even if there isn't a clear result in the present.</p>
 <p>This is common when we want to introduce news and we often use the words 'just / yet / already / recently'. However, the past simple is also correct in these cases, especially in US English.
<ul>
<li>The Queen has given a speech.</li>
<li>I've just seen Lucy.</li>
<li>The Mayor has announced a new plan for the railways.</li>
</ul></p>
<b>Been and Gone</b>
In this tense, we use both 'been' and 'gone' as the past participle of 'go', but in slightly different circumstances. We use 'been' (often when we talk about life experience) to mean that the person we're talking about visited the place and came back.
I've been to Paris (in my life, but now I'm in London, where I live).
She has been to school today (but now she's back at home).
They have never been to California.
We use 'gone' (often when we are talking about an action with a result in the present) to mean that the person went to the place and is at the place now.
Where's John? He's gone to the shops (he's at the shops now).
Julie has gone to Mexico (now she's in Mexico).
They've gone to Japan for three weeks (now they're in Japan).
</b-col>
</b-row>
<b-row>
  <b-col class="text-center mt-3">
      <p class="text-size-big"><router-link to="/Grammar" class="text-primary">Return to grammar</router-link></p>
  </b-col>
</b-row>
    </b-container>
</b-container>
</body>
</template>

<script>
import UserNavigation from '../../../src/components/UserNavigation.vue'
export default {
name: 'TheoryB1PPC',
components: 
{
  UserNavigation,
},
data: function()
{
  return{
    IsInGrammar: true,
  }
},
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a
{
  color: black;
}
</style>