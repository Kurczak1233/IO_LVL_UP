<template>
    <body>
        <UserNavigation :IsInReading="IsInReading"></UserNavigation>
        <b-container class="container text-center mb-3">
        <b-container class="col-12 mr-auto m-3 mb-4 p-2 ml-auto margin5 background-bluish" fluid>
        <b-row>
            <b-col class="text-center text-size-big"> How to improve your reading? </b-col>
        </b-row>
        </b-container>
        <b-container class="col-12 mr-auto ml-auto background-bluish p-3" fluid>
        <b-row>
            <b-col class="text-left margin4">
        In the last post we began our discussion about improving your listening skills to help prepare for the IELTS examination. In this segment, we’ll continue our discussion of another key area you need to prepare for before taking your exam – Reading.

        Reading English can seem difficult because you might know the spelling of different words, but not necessarily their meanings. Reading comprehension is a fundamental skill everyone learns, regardless of their native language.

        You probably started learning this skill at a young age when you first started reading in your own language. You can use the same learning processes that were taught to you then, and apply these to help improve your ability to read and comprehend English!
<hr>

        <b>Step 1: Gather Reading Materials</b>
        There is a wide range of materials you can choose from including newspapers, magazines, and books. Finding reading materials on topics that interest you and are at your current English reading level are the keys to success.

        It’s a great idea to go to your local library where you can find children’s books, comic books, or other suitable level materials. Another great source of beginner and intermediate level reading materials are books written for teenagers.
<br>
        <b>Step 2: Find a Quiet Place to Read</b>

        Reading requires concentration and background noise, people speaking, and other distractions will prevent you from focusing on your reading comprehension.
<br>
        <b>Step 3: Schedule Reading Time Daily</b>

        Set aside part of your day and devote it to reading. Some people find reading for a few hours in the evening before going to bed is beneficial and they tend to remember more than if they had read earlier in the day. Reading is a nice way to wind down after a busy day.
<br>
        <b>Step 4: Keep a Notepad and Pencil Nearby</b>

        As you start reading, it is not uncommon for you to find words that you do not recognize or are not able to sound out. You will also encounter words that you do not know their meanings. Write these words down on your notepad and make a point of finding out how they are pronounced and what they mean.
<br>
        <b>Step 5: Take Your Time</b>

        Don’t rush through your reading. If you’re only able to get through a few pages, it’s okay. The main thing to remember is you’re not only working on improving your reading skills, but also your comprehension skills.
<br>
        <b>Step 6: Reread the Same Material a Second Time</b>

        After reading through the material and reviewing your notepad and discovering the meanings and pronunciations of unknown words, read through the same material again.
<br>
        <b>Step 7: Ask Questions While You Read</b>

        Asking questions helps reinforce the material you are reading and improves comprehension. You could ask questions like, “What’s happening now?” or “Who’s speaking?” or “Why did they do that?” to help keep you focused on the material and gain a deeper appreciation of the content.
        </b-col>
        </b-row>
        <b-row>
        <b-col class="text-center mt-3">
            <p class="text-size-big"><router-link to="/Reading" class="text-primary">Return to grammar</router-link></p>
        </b-col>
        </b-row>
            </b-container>
        </b-container>
    </body>
</template>

<script>
import UserNavigation from '../../../src/components/UserNavigation.vue'
export default {
name: 'TheoryB1ReadingTips',
components: 
{
  UserNavigation,
},
data: function()
{
  return{
    IsInReading: true,
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