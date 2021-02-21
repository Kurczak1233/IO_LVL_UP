<template>
    <body>
    <b-container v-if="formalConsent === false" class="col-10 mt-5 col-md-8 col-xl-8 mr-auto ml-auto background-bluish" fluid>
        <b-row>
             <b-col class="text-center text-danger pt-2 text-size-big">
                You are attempting an FCE exam.
            </b-col>    
        </b-row>
        <b-row>
         <b-col class="col-12 text-center">
             Passing this test may determin if you are well prepared for the real exam. Provided you are knowledgable enough, you can enroll on the exam in the nearest exam center.
         </b-col>
          <b-col class="pt-2 pb-3 text-center"><b>GOOD LUCK!</b></b-col>
          
        </b-row>
                <b-row>
            <b-col class="col-12 text-center mt-3 mb-3">
                    <button class="btn btn-warning" v-on:click.once="GiveConsent">Start the test!</button>
            </b-col>
        </b-row>
    </b-container>
     <b-container v-if="formalConsent === true && CheckedReading === false" class="col-12 col-sm-10 mt-5 col-md-8 col-xl-8 mr-auto ml-auto background-bluish p-5" fluid>
         <b-col class="text-center mb-5"><h2><b>READING</b></h2></b-col>
<h3><b>A varied career</b></h3>

<p>Chloe Kelling, a successful model and singer-songwriter, now has a new venture</p>

<p>I arrive for my interview with Chloe Kelling and I’m asked to wait in the garden. I hardly have time to start looking round at the carefully tended flowerbeds when Chloe appears. Every bit as tall and striking as I’d expected, Chloe emerges from the house wearing an oversized man’s jacket, a delicately patterned top and jeans. Chloe is known for her slightly quirky sense of fashion and, of course, she looks great as she makes her way towards me through the flowerbeds.</p>

<p>‘Let’s talk in my office,’ she says, leading the way not back to the house, but instead to an ancient caravan parked up next to it. As we climb inside the compact little van, the smell of fresh baking greets us. A tiny table is piled high with cupcakes, each iced in a different colour. Chloe’s been busy, and there’s a real sense of playing tea parties in a secret den! But what else should I have expected from a woman with such a varied and interesting career?</p>

<p>Chloe originally trained as a make-up artist, having left her home in the country at nineteen to try and make her name as a model in London, and soon got work in adverts and the fashion business. ‘I went to Japan to work for a short period, but felt very homesick at first,’ she recalls. ‘It was very demanding work and, though I met loads of nice people, it was too much to take in at nineteen. If I’d stayed longer, I might have settled in better.’</p>

<p>Alongside the modelling, Chloe was also beginning to make contacts in the music business. ‘I’d been the typical kid, singing with a hairbrush in front of the mirror, dreaming of being a star one day,’ she laughs. She joined a girl band which ‘broke up before we got anywhere’, before becoming the lead singer with the band Whoosh, which features on a best-selling clubbing album. Unusually though, Chloe also sings with two other bands, one based in Sweden and another in London, and each of these has a distinct style.</p>

<p>It was her work with Whoosh that originally led to Chloe’s link with Sweden. She was offered a song-writing job there with a team that was responsible for songs for some major stars, but gradually became more involved in writing music for her own band.</p>

<p>Although she now divides her time between London and Sweden, her first stay there turned out to be much longer than she’d bargained for. ‘The rooms are very tall over there and so people have these rather high beds that you climb up to,’ she explains. ‘I fell as I climbed up the ladder and cracked three ribs. Although the people at the hospital were very kind, I was stuck there for a while, which was very frustrating. Sneezing and laughing were so painful at first, let alone singing!’</p>

<p>It was while recovering from her injuries that Chloe hit upon the idea of staging what she calls vintage fairs. ‘It was snowing in Sweden and I wanted something nice to look forward to.’ Chloe had always loved vintage clothes, particularly from the 1950s, and decided to stage an event for others who shared her passion. The first fair was held in her home village and featured stalls selling all sorts of clothes and crafts dating back to the 1950s. It was a huge hit, with 300 people turning up.</p>

<p>‘When I had the idea of the first fair, it was only meant to be a one-off, but we had so manycompliments, I decided to go ahead with more,’ says Chloe. ‘There’s something for all ages and people find old things have more character than stuff you buy in modern shops. It also fits perfectly with the idea of recycling.’ Looking round Chloe’s caravan, I can see what she means.</p>
     <b-container>
         <b-row class="mt-3 mb-3">
             <b-col class="col-12 mr-auto ml-auto mb-2 ">
                 <b-col><b>1. In the first paragraph, the writer suggests that Chloe</b></b-col>
                    <b-form-radio v-model="answear1" name="answear1" value="A">usually keeps people waiting.</b-form-radio>
                    <b-form-radio v-model="answear1" name="answear1" value="B">is much taller than he expected.</b-form-radio>
                    <b-form-radio v-model="answear1" name="answear1" value="C">lives up to her stylish reputation.</b-form-radio>
                    <b-form-radio v-model="answear1" name="answear1" value="D">is surprisingly interested in flowers.</b-form-radio>
                </b-col>
            </b-row>
         <hr>
            <b-row class="mt-3 mb-3">
             <b-col class="col-12 mr-auto ml-auto mb-2 ">
                 <b-col><b>2. What do we learn about Chloe in the second paragraph?</b></b-col>
                    <b-form-radio v-model="answear2" name="answear2" value="A">She’s cooked something for her guest.</b-form-radio>
                    <b-form-radio v-model="answear2" name="answear2" value="B">She’s expecting some other visitors today.</b-form-radio>
                    <b-form-radio v-model="answear2" name="answear2" value="C">She has no room in her house for an office.</b-form-radio>
                    <b-form-radio v-model="answear2" name="answear2" value="D">She invites very few people into her caravan.</b-form-radio>
                </b-col>
            </b-row>
         <hr>
            <b-row class="mt-3 mb-3">
             <b-col class="col-12 mr-auto ml-auto mb-2 ">
                 <b-col><b>3. What does Chloe say about her trip to Japan?</b></b-col>
                    <b-form-radio v-model="answear3" name="answear3" value="A">She soon got used to her life there.</b-form-radio>
                    <b-form-radio v-model="answear3" name="answear3" value="B">She felt lonely most of the time there.</b-form-radio>
                    <b-form-radio v-model="answear3" name="answear3" value="C">She wishes she’d done the work better.</b-form-radio>
                    <b-form-radio v-model="answear3" name="answear3" value="D">She wasn’t old enough to appreciate it fully.</b-form-radio>
                </b-col>
            </b-row>
         <hr>
            <b-row class="mt-3 mb-3">
             <b-col class="col-12 mr-auto ml-auto mb-2 ">
                 <b-col><b>4. In the fourth paragraph, we find out that Chloe</b></b-col>
                    <b-form-radio v-model="answear4" name="answear4" value="A">gave up modelling to become a singer.</b-form-radio>
                    <b-form-radio v-model="answear4" name="answear4" value="B">had always had ambitions to be a singer.</b-form-radio>
                    <b-form-radio v-model="answear4" name="answear4" value="C">has now left the first successful band she joined.</b-form-radio>
                    <b-form-radio v-model="answear4" name="answear4" value="D">sings in three bands that have a very similar sound.</b-form-radio>
                </b-col>
            </b-row>
         <hr>
            <b-row class="mt-3 mb-3">
             <b-col class="col-12 mr-auto ml-auto mb-2 ">
                 <b-col><b>5. Chloe ended up in hospital in Sweden after</b></b-col>
                    <b-form-radio v-model="answear5" name="answear5" value="A">breaking a rib whilst trying to move her bed.</b-form-radio>
                    <b-form-radio v-model="answear5" name="answear5" value="B">hurting her leg in a fall from her bed.</b-form-radio>
                    <b-form-radio v-model="answear5" name="answear5" value="C">falling off a ladder in her bedroom.</b-form-radio>
                    <b-form-radio v-model="answear5" name="answear5" value="D">tripping over in her room at night.</b-form-radio>
                </b-col>
            </b-row>
         <hr>
            <b-row class="mt-3 mb-3">
             <b-col class="col-12 mr-auto ml-auto mb-2 ">
                 <b-col><b>6. What does Chloe say about her ‘vintage fairs’?</b></b-col>
                    <b-form-radio v-model="answear6" name="answear6" value="A">Her main aim is to raise awareness of environmental issues.</b-form-radio>
                    <b-form-radio v-model="answear6" name="answear6" value="B">She has responded to positive feedback from customers.</b-form-radio>
                    <b-form-radio v-model="answear6" name="answear6" value="C">Certain shops are now showing interest in the idea.</b-form-radio>
                    <b-form-radio v-model="answear6" name="answear6" value="D">They are mostly popular with older people.</b-form-radio>
                </b-col>
            </b-row>
         <hr>
            <b-col class="text-center col-12">
                <button type="button" v-on:click.once="checkFormReading" aria-describedby="Check answears button" class="btn btn-warning my-1">Next part!</button>
            </b-col>
     </b-container>
    </b-container>

<!--Grammar-->
    <b-container v-if="formalConsent === true && CheckedGrammar === true && CheckedWriting === false" class="col-12 col-sm-10 mt-5 col-md-8 col-xl-8 mr-auto ml-auto background-bluish p-5" fluid>
     <b-container>
         <b-col class="text-center mb-5"><h2><b>GRAMMAR</b></h2></b-col>
         <b-row class="mt-3 mb-3">
             <b-col class="col-12 mr-auto ml-auto mb-2 ">
                 <b-col><b>1. ________, he didn't do as well as expected in the exam. The teachers wondered why.</b></b-col>
                    <b-form-radio v-model="GrammarAnswear1" name="GrammarAnswear1" value="A">Definitely</b-form-radio>
                    <b-form-radio v-model="GrammarAnswear1" name="GrammarAnswear1" value="B">Interestingly.</b-form-radio>
                    <b-form-radio v-model="GrammarAnswear1" name="GrammarAnswear1" value="C">Surprisingly.</b-form-radio>
                    <b-form-radio v-model="GrammarAnswear1" name="GrammarAnswear1" value="D">Absolutely.</b-form-radio>
                </b-col>
            </b-row>
         <hr>
            <b-row class="mt-3 mb-3">
             <b-col class="col-12 mr-auto ml-auto mb-2 ">
                 <b-col><b>2. I'm looking forward to my holiday! I _____ to spend the whole week on a boat!</b></b-col>
                    <b-form-radio v-model="GrammarAnswear2" name="GrammarAnswear2" value="A">will</b-form-radio>
                    <b-form-radio v-model="GrammarAnswear2" name="GrammarAnswear2" value="B">'m going</b-form-radio>
                    <b-form-radio v-model="GrammarAnswear2" name="GrammarAnswear2" value="C">'ll go</b-form-radio>
                    <b-form-radio v-model="GrammarAnswear2" name="GrammarAnswear2" value="D">would</b-form-radio>
                </b-col>
            </b-row>
         <hr>
            <b-row class="mt-3 mb-3">
             <b-col class="col-12 mr-auto ml-auto mb-2 ">
                 <b-col><b>3. She ________ me Steve had lost his job.</b></b-col>
                    <b-form-radio v-model="GrammarAnswear3" name="GrammarAnswear3" value="A">said</b-form-radio>
                    <b-form-radio v-model="GrammarAnswear3" name="GrammarAnswear3" value="B">say to</b-form-radio>
                    <b-form-radio v-model="GrammarAnswear3" name="GrammarAnswear3" value="C">tell me</b-form-radio>
                    <b-form-radio v-model="GrammarAnswear3" name="GrammarAnswear3" value="D">told</b-form-radio>
                </b-col>
            </b-row>
         <hr>
            <b-row class="mt-3 mb-3">
             <b-col class="col-12 mr-auto ml-auto mb-2 ">
                 <b-col><b>4. You don't have to apply for a student visa _____ you're from outside the EU.</b></b-col>
                    <b-form-radio v-model="GrammarAnswear4" name="GrammarAnswear4" value="A">if</b-form-radio>
                    <b-form-radio v-model="GrammarAnswear4" name="GrammarAnswear4" value="B">unless</b-form-radio>
                    <b-form-radio v-model="GrammarAnswear4" name="GrammarAnswear4" value="C">if not</b-form-radio>
                    <b-form-radio v-model="GrammarAnswear4" name="GrammarAnswear4" value="D">or else</b-form-radio>
                </b-col>
            </b-row>
         <hr>
            <b-row class="mt-3 mb-3">
             <b-col class="col-12 mr-auto ml-auto mb-2 ">
                 <b-col><b>5. You have taken the rubbish out, _______ you?</b></b-col>
                    <b-form-radio v-model="GrammarAnswear5" name="GrammarAnswear5" value="A">haven't</b-form-radio>
                    <b-form-radio v-model="GrammarAnswear5" name="GrammarAnswear5" value="B">have</b-form-radio>
                    <b-form-radio v-model="GrammarAnswear5" name="GrammarAnswear5" value="C">didn't</b-form-radio>
                    <b-form-radio v-model="GrammarAnswear5" name="GrammarAnswear5" value="D">do</b-form-radio>
                </b-col>
            </b-row>
         <hr>
            <b-row class="mt-3 mb-3">
             <b-col class="col-12 mr-auto ml-auto mb-2 ">
                 <b-col><b>6. I had a friend at college who was very gifted with languages. She ________ speak four or five!</b></b-col>
                    <b-form-radio v-model="GrammarAnswear6" name="GrammarAnswear6" value="A">was able to</b-form-radio>
                    <b-form-radio v-model="GrammarAnswear6" name="GrammarAnswear6" value="B">was too able</b-form-radio>
                    <b-form-radio v-model="GrammarAnswear6" name="GrammarAnswear6" value="C">was able</b-form-radio>
                    <b-form-radio v-model="GrammarAnswear6" name="GrammarAnswear6" value="D">was been able to</b-form-radio>
                </b-col>
            </b-row>
         <hr>
            <b-col class="text-center col-12">
                <button type="button" v-on:click.once="checkFormGrammar" aria-describedby="Check answears button" class="btn btn-warning my-1">Next part!</button>
            </b-col>
     </b-container>
    </b-container>

<!--Writing-->
    <b-container v-if="formalConsent === true && CheckedWriting === true && CheckedListeing === false" class="col-12 col-sm-10 mt-5 col-md-8 col-xl-10 mr-auto ml-auto background-bluish p-5" fluid>
        <b><h3><i>Tricky words section</i></h3></b>
<b-row>
  
  <form class="form-inline" autocomplete="off">
    <b-col class="col-12 mb-2">
      <b-button-toolbar>
      <label class="my-1 mr-2 d-inline" for="answear1">1) Adjective; When something is good enough to work with (Akceptowalne)</label>
      <b-input-group  size="sm" class="mr-1">
        <b-form-input type="text" v-model="WritingAnswear1" id="answear1"></b-form-input>
        </b-input-group>

      </b-button-toolbar>
    </b-col>
    <b-col class="col-12 mb-2">
        <b-button-toolbar>
          <label class="my-1 mr-2 d-inline" for="answear2">2) Noun: You use it when you want to send a package. (Adres)</label>
          <b-input-group  size="sm" class="mr-1">
          <b-form-input type="text" v-model="WritingAnswear2"  id="answear2"></b-form-input>
          </b-input-group>

      </b-button-toolbar>
    </b-col>
    <b-col class="col-12 mb-2">
      <b-button-toolbar>
        <label class="my-1 mr-2 d-inline" for="answear3">3) Adjective: Is is a synonym of prettiness. (Piękny/a)</label>
      <b-input-group  size="sm" class="mr-1">
        <b-form-input type="text" v-model="WritingAnswear3"  id="answear3"></b-form-input>
        </b-input-group>

      </b-button-toolbar>
      </b-col>
    <b-col class="col-12 mb-2">  
        <b-button-toolbar>
        <label class="my-1 mr-2 d-inline" for="answear4">4) Adverb: Able to transform (Zdolny do zmian)</label>
      <b-input-group  size="sm" class="mr-1">
        <b-form-input type="text" v-model="WritingAnswear4"  id="answear4"></b-form-input>
        </b-input-group>

      </b-button-toolbar>
        </b-col>
        <b-col class="col-12 mb-2">
          <b-button-toolbar>
        <label class="my-1 mr-2 d-inline" for="answear5">5) Noun: When you make a mistake in a word (Błędna pisownia)</label>
      <b-input-group  size="sm" class="mr-1">
        <b-form-input type="text" v-model="WritingAnswear5"  id="answear5"></b-form-input>
        </b-input-group>

      </b-button-toolbar>
        </b-col>
        <b-col class="col-12 mb-2">
          <b-button-toolbar>
        <label class="my-1 mr-2 d-inline" for="answear1">6) Noun: Crew of a restaurant (Personel)</label>
      <b-input-group  size="sm" class="mr-1">
        <b-form-input type="text" v-model="WritingAnswear6"  id="answear6"></b-form-input>
        </b-input-group>

      </b-button-toolbar>
        </b-col>
        <b-col class="col-12 mb-2">
          <b-button-toolbar>
        <label class="my-1 mr-2 d-inline" for="answear1">7) Noun: A declaration (Obietnica)</label>
      <b-input-group  size="sm" class="mr-1">
        <b-form-input type="text" v-model="WritingAnswear7"  id="answear7"></b-form-input>
        </b-input-group>

      </b-button-toolbar>
        </b-col>
        <b-col class="col-12 mb-2">
          <b-button-toolbar>
        <label class="my-1 mr-2 d-inline" for="answear1">8) Verb: To appear (Pojawić się)</label>
      <b-input-group  size="sm" class="mr-1">
        <b-form-input type="text" v-model="WritingAnswear8"  id="answear8"></b-form-input>
        </b-input-group>

      </b-button-toolbar>
     </b-col>
     </form>
    <b-col class="text-center col-12 mb-2">
        <button type="button" v-on:click="checkFormWriting" aria-describedby="Check answears button" class="btn btn-warning my-1">Next part!</button>
    </b-col>
  </b-row>  
     </b-container>



<!--Listening-->
 <b-container v-if="formalConsent === true && CheckedGrammar === true && CheckedListeing === true && FCCCompleted === false" class="col-12 col-sm-10 mt-5 col-md-8 col-xl-8 mr-auto ml-auto background-bluish p-5" fluid>
     <b-container>
         <b-col class="text-center mb-5"><h2><b>LISTENING</b></h2></b-col>
         <b-row class="mt-3 mb-3">
             <b-col class="col-12 mr-auto ml-auto mb-2 ">
                 <b-col><b>1. You hear a customer talking to a shop assistant about a coat she bought. What does she want?</b></b-col>
                    <b-form-radio v-model="ListeningAnswear1" name="ListeningAnswear1" value="A">a different kind of item</b-form-radio>
                    <b-form-radio v-model="ListeningAnswear1" name="ListeningAnswear1" value="B">the same item but in a different size.</b-form-radio>
                    <b-form-radio v-model="ListeningAnswear1" name="ListeningAnswear1" value="C">her money back.</b-form-radio>
                    <b-form-radio v-model="ListeningAnswear1" name="ListeningAnswear1" value="D">to ask about something.</b-form-radio>
                </b-col>
            </b-row>
         <hr>
            <b-row class="mt-3 mb-3">
             <b-col class="col-12 mr-auto ml-auto mb-2 ">
                 <b-col><b>2. You hear a weather forecast on the radio. Tomorrow, the weather in the east of the country will be</b></b-col>
                    <b-form-radio v-model="ListeningAnswear2" name="ListeningAnswear2" value="A">stormy in the morning.</b-form-radio>
                    <b-form-radio v-model="ListeningAnswear2" name="ListeningAnswear2" value="B">sunny in the afternoon.</b-form-radio>
                    <b-form-radio v-model="ListeningAnswear2" name="ListeningAnswear2" value="C">foggy in the evening.</b-form-radio>
                    <b-form-radio v-model="ListeningAnswear2" name="ListeningAnswear2" value="D">raining at night</b-form-radio>
                </b-col>
            </b-row>
         <hr>
            <b-row class="mt-3 mb-3">
             <b-col class="col-12 mr-auto ml-auto mb-2 ">
                 <b-col><b>3. You hear an office worker talking about cycling to work. What does she enjoy most about it?</b></b-col>
                    <b-form-radio v-model="ListeningAnswear3" name="ListeningAnswear3" value="A">getting some exercise each morning</b-form-radio>
                    <b-form-radio v-model="ListeningAnswear3" name="ListeningAnswear3" value="B">avoiding the traffic into town</b-form-radio>
                    <b-form-radio v-model="ListeningAnswear3" name="ListeningAnswear3" value="C">thinking about the day ahead</b-form-radio>
                    <b-form-radio v-model="ListeningAnswear3" name="ListeningAnswear3" value="D">riding her bike</b-form-radio>
                </b-col>
            </b-row>
         <hr>
            <b-row class="mt-3 mb-3">
             <b-col class="col-12 mr-auto ml-auto mb-2 ">
                 <b-col><b>4. You hear a radio announcer talking about a competition for writers of short stories. The man says that one of the rules is that</b></b-col>
                    <b-form-radio v-model="ListeningAnswear4" name="ListeningAnswear4" value="A">you have to be over sixteen to enter.</b-form-radio>
                    <b-form-radio v-model="ListeningAnswear4" name="ListeningAnswear4" value="B">you can submit more than one entry.</b-form-radio>
                    <b-form-radio v-model="ListeningAnswear4" name="ListeningAnswear4" value="C">your entry must be emailed.</b-form-radio>
                    <b-form-radio v-model="ListeningAnswear4" name="ListeningAnswear4" value="D">your entry must be delivered before friday</b-form-radio>
                </b-col>
            </b-row>
         <hr>
            <b-row class="mt-3 mb-3">
             <b-col class="col-12 mr-auto ml-auto mb-2 ">
                 <b-col><b>5. You hear a conversation about reading. The man enjoys reading books which</b></b-col>
                    <b-form-radio v-model="ListeningAnswear5" name="ListeningAnswear5" value="A">have characters that remind him of people he knows.</b-form-radio>
                    <b-form-radio v-model="ListeningAnswear5" name="ListeningAnswear5" value="B">describe situations that he finds highly amusing.</b-form-radio>
                    <b-form-radio v-model="ListeningAnswear5" name="ListeningAnswear5" value="C">are set in places that he is unlikely ever to visit.</b-form-radio>
                    <b-form-radio v-model="ListeningAnswear5" name="ListeningAnswear5" value="D">are highly realistic</b-form-radio>
                </b-col>
            </b-row>
         <hr>
            <b-row class="mt-3 mb-3">
             <b-col class="col-12 mr-auto ml-auto mb-2 ">
                 <b-col><b>6. You hear two people talking about watching films on the Internet. What do they agree about?</b></b-col>
                    <b-form-radio v-model="ListeningAnswear6" name="ListeningAnswear6" value="A">the advantages of buying films online</b-form-radio>
                    <b-form-radio v-model="ListeningAnswear6" name="ListeningAnswear6" value="B">the usefulness of reading film reviews</b-form-radio>
                    <b-form-radio v-model="ListeningAnswear6" name="ListeningAnswear6" value="C">the pleasure of watching films at home</b-form-radio>
                    <b-form-radio v-model="ListeningAnswear6" name="ListeningAnswear6" value="D">the willingness of doing things togeather</b-form-radio>
                </b-col>
            </b-row>
         <hr>
                     <b-row class="mt-3 mb-3">
             <b-col class="col-12 mr-auto ml-auto mb-2 ">
                 <b-col><b>7. You hear a woman at an airport talking on the phone. Why did she miss her flight?</b></b-col>
                    <b-form-radio v-model="ListeningAnswear7" name="ListeningAnswear7" value="A">She was held up by traffic.</b-form-radio>
                    <b-form-radio v-model="ListeningAnswear7" name="ListeningAnswear7" value="B">There was a long queue at check-in.</b-form-radio>
                    <b-form-radio v-model="ListeningAnswear7" name="ListeningAnswear7" value="C">She went to the wrong terminal.</b-form-radio>
                    <b-form-radio v-model="ListeningAnswear7" name="ListeningAnswear7" value="D">She was not late</b-form-radio>
                </b-col>
            </b-row>
         <hr>
                     <b-row class="mt-3 mb-3">
             <b-col class="col-12 mr-auto ml-auto mb-2 ">
                 <b-col><b>8. You hear a man talking about his new job. What attracted him to this job?</b></b-col>
                    <b-form-radio v-model="ListeningAnswear8" name="ListeningAnswear8" value="A">the type of work</b-form-radio>
                    <b-form-radio v-model="ListeningAnswear8" name="ListeningAnswear8" value="B">the opportunities for promotion</b-form-radio>
                    <b-form-radio v-model="ListeningAnswear8" name="ListeningAnswear8" value="C">the salary offered</b-form-radio>
                    <b-form-radio v-model="ListeningAnswear8" name="ListeningAnswear8" value="D">the management</b-form-radio>
                </b-col>
            </b-row>
         <hr>
            <b-row class="mt-4 mb-3">
               <b-col class="text-center">
                   <audio src="https://github.com/Kurczak1233/IO_LVL_UP/blob/main/project%20copy/src/assets/FCE%20Listening%20Practice%20Test%201,%20Part%201.mp3?raw=true" controls ></audio>
                </b-col>
            </b-row>
        <hr>
            <b-col class="text-center col-12">
                <button type="button" v-on:click.once="checkFormListening" aria-describedby="Check answears button" class="btn btn-warning my-1">End test!</button>
            </b-col>
     </b-container>
    </b-container>
 

    <b-container v-if="FCCCompleted === true" class="col-10 mt-5 col-md-8 col-xl-8 mr-auto ml-auto background-bluish" fluid>
        <b-row>
            <b-col class="text-center text-black pt-2 text-size-big">
                <p v-if="pointsReading < 4" class="text-size-big text-center p-3">You <span class="text-danger">FAILED</span> reading! Learn some more and try this part again</p> 
                <p v-else-if="pointsReading >= 4" class="text-size-big text-center">You <span class="text-success">PASSED</span> reading!</p> 
                <p v-if="pointsGrammar < 4" class="text-size-big text-center p-3">You <span class="text-danger">FAILED</span> grammar! Learn some more and try this part again</p> 
                <p v-else-if="pointsGrammar >= 4" class="text-size-big text-center">You <span class="text-success">PASSED</span> grammar!</p>
                <p v-if="pointsWriting < 5" class="text-size-big text-center p-3">You <span class="text-danger">FAILED</span> writing! Learn some more and try this part again</p> 
                <p v-else-if="pointsWriting >= 5" class="text-size-big text-center">You <span class="text-success">PASSED</span> writing!</p>
                <p v-if="pointsListening < 5" class="text-size-big text-center p-3">You <span class="text-danger">FAILED</span> listening! Learn some more and try this part again</p> 
                <p v-else-if="pointsListening >= 5" class="text-size-big text-center">You <span class="text-success">PASSED</span> listening!</p>    
                <b-col class="text-center mb-3" >
                    <router-link :to="{name: 'userpage', params: {FCCCompleted: this.FCCCompleted, PassedReading: this.PassedReading, PassedGrammar: this.PassedGrammar, PassedWriting: this.PassedWriting, PassedListening: this.PassedListening }}"><button class="btn btn-warning" type="button">Confirm</button></router-link>
                </b-col>
            </b-col>    
        </b-row>
    </b-container>
    </body>
</template>

<script>
import { firebase } from '@firebase/app'
import '@firebase/auth'
export default {
    name: 'ReadingExam1',
        data: function()
    {
      return {
          formalConsent: false,
          email: firebase.auth().currentUser.email,
          ExamB1FCEPassed: false,
          answear1: '',
          answear2: '',
          answear3: '',
          answear4: '',
          answear5: '',
          answear6: '',
          GrammarAnswear1: '',
          GrammarAnswear2: '',
          GrammarAnswear3: '',
          GrammarAnswear4: '',
          GrammarAnswear5: '',
          GrammarAnswear6: '',
          WritingAnswear1: '',
          WritingAnswear2: '',
          WritingAnswear3: '',
          WritingAnswear4: '',
          WritingAnswear5: '',
          WritingAnswear6: '',
          WritingAnswear7: '',
          WritingAnswear8: '',
          ListeningAnswear1: '',
          ListeningAnswear2: '',
          ListeningAnswear3: '',
          ListeningAnswear4: '',
          ListeningAnswear5: '',
          ListeningAnswear6: '',
          ListeningAnswear7: '',
          ListeningAnswear8: '',
          pointsGrammar: 0,
          pointsReading: 0,
          pointsWriting: 0,
          pointsListening: 0,
          PassedGrammar: false,
          PassedReading: false,
          PassedWriting: false,
          PassedListening: false,
          QuizesCount: 2,
          reading: 0,
          CheckedReading: false,
          CheckedWriting: false,
          CheckedGrammar: false,
          CheckedListeing: false,
          FCCCompleted: false
      }
    },
    mounted: function()
    {
        var db = firebase.firestore();
        db.collection(this.email).doc(this.email).get().then((doc) => {
    if (doc.exists) {
        this.reading = doc.data().reading;

    } else {
        console.log("No such document!");
    }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    },
    methods:
    {
        checkFormReading: function() {
                let correctAnswears = ["C", "A", "D", "B", "C", "B"];
                let answears = [this.answear1,this.answear2,this.answear3,this.answear4,this.answear5,this.answear6];
                this.CheckedReading = true;
                this.CheckedGrammar = true;
                for(let i = 0; i<correctAnswears.length;i++)
                {
                    if(correctAnswears[i] === answears[i])
                    {
                        this.pointsReading++;
                    }
                }
                if(this.pointsReading >= 4)
                {
                    this.PassedReading = true;
                }
        },
         checkFormGrammar: function() {
                let correctAnswears = ["C", "B", "D", "B", "A", "A"];
                let answears = [this.GrammarAnswear1,this.GrammarAnswear2,this.GrammarAnswear3,this.GrammarAnswear4,this.GrammarAnswear5,this.GrammarAnswear6];
                this.CheckedWriting = true;
                for(let i = 0; i<correctAnswears.length;i++)
                {
                    if(correctAnswears[i] === answears[i])
                    {
                        this.pointsGrammar++;
                    }
                }
                if(this.pointsGrammar >= 4)
                {
                    this.PassedGrammar = true;
                }
        },
        checkFormWriting: function() {
                this.CheckedListeing = true;
                let correctAnswears = ['acceptable', "address", "beautiful", "changeable", "misspell", "personnel","promise","occurred"];
                let answears = [document.getElementById("answear1").value,document.getElementById("answear2").value,document.getElementById("answear3").value,document.getElementById("answear4").value,document.getElementById("answear5").value,document.getElementById("answear6").value, document.getElementById("answear7").value, document.getElementById("answear8").value];
                this.CheckedListening = true;
                for(let i = 0; i<correctAnswears.length;i++)
                {
                    if(correctAnswears[i] === answears[i])
                    {
                        this.pointsWriting++;
                    }
                }
                if(this.pointsWriting >= 5)
                {
                    this.PassedWriting = true;
                } 
        },
        checkFormListening: function() {
                this.FCCCompleted = true;
                let correctAnswears = ["B", "B", "A", "B", "C", "A", "B", "A"];
                let answears = [this.ListeningAnswear1,this.ListeningAnswear2,this.ListeningAnswear3,this.ListeningAnswear4,this.ListeningAnswear5,this.ListeningAnswear6,this.ListeningAnswear7,this.ListeningAnswear8];
                this.CheckedListening = true;
                for(let i = 0; i<correctAnswears.length;i++)
                {
                    if(correctAnswears[i] === answears[i])
                    {
                        this.pointsListening++;
                    }
                } 
                if(this.pointsListening >= 5)
                {
                    this.PassedListening = true;
                } 
        },
        GiveConsent: function()
        {
            this.formalConsent = true;
        },
        AddSolvedToUserDb: function()
        {
            this.ExamB1FCEPassed = true;
            var db = firebase.firestore();
            db.collection(this.email).doc(this.email).set({ExamB1FCEPassed: this.ExamB1FCEPassed} ,{merge:true})
            db.collection(this.email).doc(this.email).update({reading: this.reading+(1/this.QuizesCount)*100});
        }
    }
}
</script>

<style scoped>
table td:hover{
  background-color: #ffc107;
}
body
{
  background-color: rgb(217,218,211);
  width: 100%;
  height:100%;
}
.background-bluish
{
  background-color: rgb(105, 208, 245);
  border-radius: 20px;
}
.font-bigger
{
    font-size: 1.4rem;
}
.font-medium{
    font-size: 1.1rem;
}
#answear:hover
{
    background-color: #ffc107;
}
@media (max-width: 500px)
 { 
body {
font-size: 0.7rem;
 }; 
 }

</style>