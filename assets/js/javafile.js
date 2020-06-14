
/*Score table JS*/
const $tableID = $('#table');
 const $BTN = $('#export-btn');
 const $EXPORT = $('#export');

 const newTr = `
<tr class="hide">
  <td class="pt-3-half" contenteditable="true">Example</td>
  <td class="pt-3-half" contenteditable="true">Example</td>
  <td class="pt-3-half" contenteditable="true">Example</td>
  <td class="pt-3-half" contenteditable="true">Example</td>
  <td class="pt-3-half" contenteditable="true">Example</td>
  <td class="pt-3-half"></td>
</tr>`;

 $('.table-add').on('click', 'i', () => {

   const $clone = $tableID.find('tbody tr').last().clone(true).removeClass('hide table-line');

   if ($tableID.find('tbody tr').length === 0) {

     $('tbody').append(newTr);
   }

   $tableID.find('table').append($clone);
 });


/*Dice Rolling JS*/
var face0=new Image()
face0.src="assets/img/d1.png"
var face1=new Image()
face1.src="assets/img/d2.png"
var face2=new Image()
face2.src="assets/img/d3.png"
var face3=new Image()
face3.src="assets/img/d4.png"
var face4=new Image()
face4.src="assets/img/d5.png"
var face5=new Image()
face5.src="assets/img/d6.png"
var face6=new Image()
face6.src="assets/img/d7.png"
var face7=new Image()
face7.src="assets/img/d8.png"
var face8=new Image()
face8.src="assets/img/d9.png"
var face9=new Image()
face9.src="assets/img/d10.png"
var face10=new Image()
face10.src="assets/img/d11.png"
var face11=new Image()
face11.src="assets/img/d12.png"
var face12=new Image()
face12.src="assets/img/d13.png"
var face13=new Image()
face13.src="assets/img/d14.png"
var face14=new Image()
face14.src="assets/img/d15.png"
var face15=new Image()
face15.src="assets/img/d16.png"

function throwdice(){
//create a random integer between 0 and 5
var randomdice=Math.round(Math.random()*15)
document.images["mydice"].src=eval("face"+randomdice+".src")
}


/*Charades*/
var charades_topics = ['Anchorman', 'There’s Something About Mary', 'Titanic', 'The Shining', 'Inception', 'The Fugitive', 'Oldboy', 'Rudolph, the Red-Nosed Reindeer', 'The Santa Clause', 'Charlotte’s Web', 'March of the Penguins', 'Superbad', 'Wedding Crashers', 'The Shawshank Redemption', 'Paranormal Activity', 'The Departed', 'The Others', 'The Sixth Sense', 'Christmas Vacation', 'How the Grinch Stole Christmas!', 'Moby Dick', 'Rise of the Planet of the Apes', 'The Other Guys', 'About Time', 'Forrest Gump', 'Scream', 'Heat', 'Kill Bill: Vol. 2', 'Apocalypto', 'Miracle on 34th Street', 'It Happened on Fifth Avenue', 'The Big Bang Theory', 'Kung Fu Panda', 'Step Brothers', '10 Things I Hate About You', 'American Beauty', 'The Conjuring', 'The Dark Knight Rises', 'Ghost Dog: The Way of the Samurai', 'V for Vendetta', 'Edward Scissorhands', 'Where the Wild Things Are', 'Baywatch', 'Cool Runnings', 'Liar Liar', 'Pretty Woman', 'Goodfellas', 'The Cabin in the Woods', 'Léon: The Professional', 'Mulholland Dr.', 'Twelve Monkeys', 'Home Alone', 'The Lord of the Rings', 'The Walking Dead', 'Drop Dead Gorgeous', 'Knocked Up', '50 First Dates', 'Taxi Driver', 'The Exorcist', 'The Bourne Ultimatum', 'Insomnia', '127 Hours', 'Bad Santa', 'Romeo and Juliet – performing a piece on that famous balcony scene could ensure your career as an actor!', 'Spongebob Squarepants', 'A Bug’s Life', 'Zoolander', 'Love Actually', 'Saving Private Ryan', 'The Human Centipede', 'Black Swan', 'Chinatown', 'Eyes Wide Shut', 'Trading Places', 'Pride and Prejudice', 'The Vampire Diaries', 'Superbad', 'Tropic Thunder', 'Notting Hill', 'The Godfather', 'The Blair Witch Project', 'No Country for Old Men', '21 Grams', 'Straw Dogs', 'Scrooged', 'The Sound and the Fury', 'Winnie The Pooh', 'Airplane!', 'Dodgeball', 'Bridget Jones’s Diary', 'Rocky', 'Jaws', 'Run Lola Run', 'Mystic River', 'Munich', 'Joyeux Noël', 'Alice’s Adventures in Wonderland', 'South Park', 'Anchorman: The Legend of Ron Burgundy', 'Old School', 'The Notebook', 'There Will Be Blood', 'Dawn of the Dead', 'Se7en', 'The Prestige', 'The Next Three Days', 'Elf', 'The Twits', 'The IT Crowd', 'King Kong', 'The 40-Year Old Virgin', 'When Harry Met Sally', 'A Beautiful Mind', 'Halloween', 'Sin City', 'The Usual Suspects', '', 'The Nightmare Before Christmas', 'Gulliver’s Travels', 'Game of Thrones', 'I Love you, man', 'Ghostbusters', 'Clueless', '12 Years a Slave', 'Ring', 'The Silence of the Lambs', 'Prisoners', "It's a Wonderful Life", 'The Shop Around the Corner', 'The Hobbit – if you’re tall, this one could be tough', 'The Office', 'Zoolander', 'The Big Lebowski', 'Bridesmaids', 'The Green Mile', '28 Days Later', 'Minority Report', 'Collateral', 'Die Hard', 'Silent Night', 'Firefly', 'How I Met Your Mother', 'Iron Man', 'Dumb and Dumber', 'You’ve Got Mail', 'Boyhood', 'The Texas Chain Saw Massacre', 'The Game', 'Jaws', 'A Christmas Story', 'A Charlie Brown Christmas', 'Frankenstein', 'It’s Always Sunny in Philadelphia', 'Batman', 'Meet the Fockers', 'Forgetting Sarah Marshall', 'Cast Away', 'The Silence of the Lambs', 'Shutter Island', 'Lucky Number Slevin', 'Scrooge', 'Love Actually', 'The Scarlet Letter', 'Spiderman', 'Buffy The Vampire Slayer'];
var charades_btn = document.getElementById("charades-btn");
var charades_topic_btn = document.getElementById("charades_topic_btn");
var charades = document.getElementById("charades");
var charades_intro = document.getElementById("charades-intro");
var charades_topic = document.getElementById("charades-topic");

charades_btn.addEventListener("click", function(){
  if (charades.style.display === "none"){
    charades.style.display = "block";
    charades_intro.style.display="block";
    charades_topic.style.display="none";

    //Hide all others
    hum.style.display="none";
    cam.style.display = "none";
    act.style.display="none";
    pc.style.display = "none";
    skulpture.style.display = "none";
    mindmeld.style.display = "none";
    zelpuz.style.display = "none";
    spelling.style.display = "none";
    quiz.style.display = "none";
    gen.style.display = "none";
    free.style.display = "none";
  }
  else{
    charades.style.display = "none";
  }
});

charades_topic_btn.addEventListener("click", function(){
    charades_intro.style.display = "none";
    charades_topic.style.display = "block";
    var randomnum=Math.round(Math.random()*164)
    charades_topic.innerHTML ="<p>"+charades_topics[randomnum]+"</p>";
  });


/*Hum that tune*/

var hum_topics = ['Spice Girls - Wannabe', 'Smells Like Teen Spirit - Nirvana', 'Over The Rainbow - Judy Garland', "What'd I Say - Ray Charles", 'Carly Rae Jepsen – Call Me Maybe', 'Lou Bega - Mambo No 5', 'Imagine - John Lennon', "What's Goin' On - Marvin Gaye", 'Sultans Of Swing - Dire Straits', 'Coldplay – Paradise', 'Survivor - Eye of the Tiger', 'One - U2', 'Born To Run - Bruce Springsteen', 'God Only Knows - The Beach Boys', 'Maroon 5 – Payphone (feat. Wiz Khalifa)', 'Lady Gaga - Just Dance', 'Billie Jean - Michael Jackson', 'Be My Baby - The Ronettes', "You've Lost That Lovin' Feeling - The Righteous Brothers", 'Kings of Leon – Use Somebody', 'ABBA - SOS', 'Bohemian Rhapsody - Queen', 'Creep - Radiohead', 'My Generation - The Who', "Kelly Clarkson – Stronger (What Doesn't Kill You)", 'Roy Orbison - Pretty Woman', 'Hey Jude - The Beatles', 'Bridge Over Troubled Water - Simon & Garfunkel', 'Dancing In The Street - Martha Reeves and the Vandellas', 'Rihanna – Only Girl (In the World)', 'Michael Jackson - Beat It', 'Like A Rolling Stone - Bob Dylan', 'Respect - Aretha Franklin', 'When Doves Cry - Prince', 'Walk the Moon – Shut Up and Dance', 'Whitney Houston - I Will Always Love You', "I Can't Get No Satisfaction - Rolling Stones", 'Family Affair - Sly And The Family Stone', 'A Change Is Gonna Come - Sam Cooke', 'Plan B – She Said', "The Human League - Don't You Want Me", 'God Save The Queen - Sex Pistols', 'Dancing Queen - ABBA', 'River Deep Mountain High - Ike and Tina Turner', 'James Bay – Hold Back the River', "Aerosmith - I Don't Want to Miss a Thing", "Sweet Child O'Mine - Guns N' Roses", 'Good Vibrations - The Beach Boys', 'Best Of My Love - The Emotions', 'Fun – We Are Young (feat. Janelle Monae)', 'Lady Gaga - Poker Face', 'London Calling - The Clash', 'Purple Haze - Jimi Hendrix', 'Gotye – Somebody That I Used to Know (feat. Kimbra)', 'Justin Timberlake – Mirrors', 'Hanson - MMMbop', 'Waterloo Sunset - The Kinks', 'Yesterday - The Beatles', 'Bruno Mars – Locked Out of Heaven', 'Katy Perry – Firework', "Elvis Presley - It's Now Or Never", 'Hotel California - The Eagles', 'Jonny B Good - Chuck Berry', 'Jason Derulo – Want To Want Me', 'Adele – Someone Like You', "Bachman-Turner Overdrive - You Ain't Seen Nothin' Yet", 'Your Song - Elton John', 'No Woman No Cry - Bob Marley', 'Adele – Set Fire to the Rain', 'Lady Gaga – Bad Romance', 'Michael Jackson - Billie Jean', 'Stairway To Heaven - Led Zeppelin', 'Hallelujah - Jeff Buckley', 'Jessie J – Domino', 'Train – Drive By', 'Culture Club - Karma Chameleon', 'The Twist - Chubby Checker', 'Every Breath You Take - The Police', 'Bruno Mars – Just the Way You Are', 'Ella Henderson – Ghost', 'Britney Spears - Baby One More Time', 'Live Forever - Oasis', 'A Day In The Life - The Beatles', 'Snow Patrol – Chasing Cars', 'Emeli Sandé – Next To Me', 'Elvis Presley - Devil in Disguise', 'I Will Always Love You - Whitney Houston', 'Stand By Me - Ben E King', 'Clean Bandit – Rather Be (feat. Jess Glynne)', 'Ed Sheeran – Shape of You', 'Boney M - Rivers of Babylon', 'Life On Mars? - David Bowie', "Papa's Got A Brand New Bag - James Brown", 'Katy Perry – Roar', "Rag'N'Bone Man – Human", 'Elton John - Candle in the Wind', 'Heartbreak Hotel - Elvis Presley', 'Gimme Shelter - The Rolling Stones', 'Avicii – Wake Me Up', 'Natalie Imbruglia – Torn'];
var hum_btn = document.getElementById("hum-btn");
var hum_topic_btn = document.getElementById("hum_topic_btn");
var hum = document.getElementById("hum");
var hum_intro = document.getElementById("hum-intro");
var hum_topic = document.getElementById("hum-topic");

hum_btn.addEventListener("click", function(){
  if (hum.style.display === "none"){
    hum.style.display = "block";
    hum_intro.style.display="block";
    hum_topic.style.display="none";
//Hide all others
    charades.style.display="none";
    act.style.display="none";
    cam.style.display = "none";
    pc.style.display = "none";
    skulpture.style.display = "none";
    spelling.style.display = "none";
    mindmeld.style.display = "none";
    zelpuz.style.display = "none";
    quiz.style.display = "none";
    gen.style.display = "none";
    free.style.display = "none";
  }
  else{
    hum.style.display = "none";
  }
});

hum_topic_btn.addEventListener("click", function(){
    hum_intro.style.display = "none";
    hum_topic.style.display = "block";
    var randomnum=Math.round(Math.random()*99)
    hum_topic.innerHTML ="<p>"+hum_topics[randomnum]+"</p>";
  });


  /*Act it out*/
var act_topics = ['Anchorman', 'There’s Something About Mary', 'Titanic', 'The Shining', 'Inception', 'The Fugitive', 'Oldboy', 'Rudolph, the Red-Nosed Reindeer', 'The Santa Clause', 'Charlotte’s Web', 'March of the Penguins', 'Superbad', 'Wedding Crashers', 'The Shawshank Redemption', 'Paranormal Activity', 'The Departed', 'The Others', 'The Sixth Sense', 'Christmas Vacation', 'How the Grinch Stole Christmas!', 'Moby Dick', 'Rise of the Planet of the Apes', 'The Other Guys', 'About Time', 'Forrest Gump', 'Scream', 'Heat', 'Kill Bill: Vol. 2', 'Apocalypto', 'Miracle on 34th Street', 'It Happened on Fifth Avenue', 'The Big Bang Theory', 'Kung Fu Panda', 'Step Brothers', '10 Things I Hate About You', 'American Beauty', 'The Conjuring', 'The Dark Knight Rises', 'Ghost Dog: The Way of the Samurai', 'V for Vendetta', 'Edward Scissorhands', 'Where the Wild Things Are', 'Baywatch', 'Cool Runnings', 'Liar Liar', 'Pretty Woman', 'Goodfellas', 'The Cabin in the Woods', 'Léon: The Professional', 'Mulholland Dr.', 'Twelve Monkeys', 'Home Alone', 'The Lord of the Rings', 'The Walking Dead', 'Drop Dead Gorgeous', 'Knocked Up', '50 First Dates', 'Taxi Driver', 'The Exorcist', 'The Bourne Ultimatum', 'Insomnia', '127 Hours', 'Bad Santa', 'Romeo and Juliet – performing a piece on that famous balcony scene could ensure your career as an actor!', 'Spongebob Squarepants', 'A Bug’s Life', 'Zoolander', 'Love Actually', 'Saving Private Ryan', 'The Human Centipede', 'Black Swan', 'Chinatown', 'Eyes Wide Shut', 'Trading Places', 'Pride and Prejudice', 'The Vampire Diaries', 'Superbad', 'Tropic Thunder', 'Notting Hill', 'The Godfather', 'The Blair Witch Project', 'No Country for Old Men', '21 Grams', 'Straw Dogs', 'Scrooged', 'The Sound and the Fury', 'Winnie The Pooh', 'Airplane!', 'Dodgeball', 'Bridget Jones’s Diary', 'Rocky', 'Jaws', 'Run Lola Run', 'Mystic River', 'Munich', 'Joyeux Noël', 'Alice’s Adventures in Wonderland', 'South Park', 'Anchorman: The Legend of Ron Burgundy', 'Old School', 'The Notebook', 'There Will Be Blood', 'Dawn of the Dead', 'Se7en', 'The Prestige', 'The Next Three Days', 'Elf', 'The Twits', 'The IT Crowd', 'King Kong', 'The 40-Year Old Virgin', 'When Harry Met Sally', 'A Beautiful Mind', 'Halloween', 'Sin City', 'The Usual Suspects', '', 'The Nightmare Before Christmas', 'Gulliver’s Travels', 'Game of Thrones', 'I Love you, man', 'Ghostbusters', 'Clueless', '12 Years a Slave', 'Ring', 'The Silence of the Lambs', 'Prisoners', "It's a Wonderful Life", 'The Shop Around the Corner', 'The Hobbit – if you’re tall, this one could be tough', 'The Office', 'Zoolander', 'The Big Lebowski', 'Bridesmaids', 'The Green Mile', '28 Days Later', 'Minority Report', 'Collateral', 'Die Hard', 'Silent Night', 'Firefly', 'How I Met Your Mother', 'Iron Man', 'Dumb and Dumber', 'You’ve Got Mail', 'Boyhood', 'The Texas Chain Saw Massacre', 'The Game', 'Jaws', 'A Christmas Story', 'A Charlie Brown Christmas', 'Frankenstein', 'It’s Always Sunny in Philadelphia', 'Batman', 'Meet the Fockers', 'Forgetting Sarah Marshall', 'Cast Away', 'The Silence of the Lambs', 'Shutter Island', 'Lucky Number Slevin', 'Scrooge', 'Love Actually', 'The Scarlet Letter', 'Spiderman', 'Buffy The Vampire Slayer'];
var act_btn = document.getElementById("act-btn");
var act_topic_btn = document.getElementById("act_topic_btn");
var act = document.getElementById("act");
var act_intro = document.getElementById("act-intro");
var act_topic = document.getElementById("act-topic");

act_btn.addEventListener("click", function(){
  if (act.style.display === "none"){
    act.style.display = "block";
    act_intro.style.display="block";
    act_topic.style.display="none";

    //Hide all others
    hum.style.display="none";
    charades.style.display="none";
    cam.style.display = "none";
    pc.style.display = "none";
    skulpture.style.display = "none";
    zelpuz.style.display = "none";
    mindmeld.style.display = "none";
    spelling.style.display = "none";
    quiz.style.display = "none";
    gen.style.display = "none";
    free.style.display = "none";
  }
  else{
    act.style.display = "none";
  }
});

act_topic_btn.addEventListener("click", function(){
  act_intro.style.display = "none";
  act_topic.style.display = "block";
  var randomnum=Math.round(Math.random()*164)
  act_topic.innerHTML ="<p>"+act_topics[randomnum]+"</p>";
});

/*Cam Sketch*/
var cam_topics = ['Angel', 'Eyeball', 'Pizza', 'Abraham Lincoln', 'Kiss', 'Pigtails', 'Attic', 'Glue', 'Pocket watch', 'Angry', 'Fireworks', 'Pumpkin', 'Brain', 'Kitten', 'Playground', 'Back seat', 'Highchair', 'Rock band', 'Baby', 'Flower', 'Rainbow', 'Bubble bath', 'Kiwi', 'Pumpkin pie', 'Birthday', 'Hockey', 'Sasquatch', 'Beard', 'Flying saucer', 'Recycle', 'Buckle', 'Lipstick', 'Raindrop', 'Black hole', 'Hotel', 'Scrambled eggs', 'Bible', 'Giraffe', 'Sand castle', 'Bus', 'Lobster', 'Robot', 'Blizzard', 'Jump rope', 'Seat belt', 'Bikini', 'Glasses', 'Snowflake', 'Car accident', 'Lollipop', 'Sand castle', 'Burrito', 'Koala', 'Skip', 'Book', 'High heel', 'Stairs', 'Castle', 'Magnet', 'Slipper', 'Captain', 'Leprechaun', 'Solar eclipse', 'Bucket', 'Ice cream cone', 'Starfish', 'Chain saw', 'Megaphone', 'Snowball', 'Chandelier', 'Light', 'Space', 'Bumble bee', 'Igloo', 'Strawberry', 'Circus tent', 'Mermaid', 'Sprinkler', 'Crib', 'Mask', 'Stethoscope', 'Butterfly', 'Lady bug', 'Sun', 'Computer', 'Minivan', 'Statue of Liberty', 'Cruise ship', 'Mechanic', 'Stork', 'Camera', 'Lamp', 'Tire', 'Crib', 'Mount Rushmore', 'Tadpole', 'Dance', 'Mom', 'Sunburn', 'Cat', 'Lion', 'Toast', 'Dragon', 'Music', 'Teepee', 'Deodorant', 'Mr Potato Head', 'Thread', 'Church', 'Mailbox', 'Toothbrush', 'Dumbbell', 'North pole', 'Telescope', 'Facebook', 'Pantyhose', 'Tourist', 'Crayon', 'Night', 'Toothpaste', 'Eel', 'Nurse', 'Train', 'Flat', 'Paper plate', 'United States', 'Dolphin', 'Nose', 'Truck', 'Ferris wheel', 'Owl', 'Tricycle', 'Frame', 'Photo', 'WiFi', 'Egg', 'Olympics', 'Volleyball', 'Flag', 'Pacifier', 'Tutu', 'Full moon', 'Pilgram', 'Zombie', 'Eiffel Tower', 'Peanut', 'Hammer', 'Junk mail', 'Piano', 'Guitar', 'Game', 'Pirate', 'Oven'];
var cam_btn = document.getElementById("cam-btn");
var cam_topic_btn = document.getElementById("cam_topic_btn");
var cam = document.getElementById("cam");
var cam_intro = document.getElementById("cam-intro");
var cam_topic = document.getElementById("cam-topic");

cam_btn.addEventListener("click", function(){
  if (cam.style.display === "none"){
    cam.style.display = "block";
    cam_intro.style.display="block";
    cam_topic.style.display="none";

    //Hide all others
    act.style.display="none";
    hum.style.display="none";
    charades.style.display="none";
    pc.style.display = "none";
    skulpture.style.display = "none";
    spelling.style.display = "none";
    gen.style.display = "none";
    zelpuz.style.display = "none";
    mindmeld.style.display = "none";
    quiz.style.display = "none";
    free.style.display = "none";
  }
  else{
    cam.style.display = "none";
  }
});

cam_topic_btn.addEventListener("click", function(){
  cam_intro.style.display = "none";
  cam_topic.style.display = "block";
  var randomnum=Math.round(Math.random()*153)
  cam_topic.innerHTML ="<p>"+cam_topics[randomnum]+"</p>";
});


/*PC Sketch*/
var pc_topics = ['Angel', 'Eyeball', 'Pizza', 'Abraham Lincoln', 'Kiss', 'Pigtails', 'Attic', 'Glue', 'Pocket watch', 'Angry', 'Fireworks', 'Pumpkin', 'Brain', 'Kitten', 'Playground', 'Back seat', 'Highchair', 'Rock band', 'Baby', 'Flower', 'Rainbow', 'Bubble bath', 'Kiwi', 'Pumpkin pie', 'Birthday', 'Hockey', 'Sasquatch', 'Beard', 'Flying saucer', 'Recycle', 'Buckle', 'Lipstick', 'Raindrop', 'Black hole', 'Hotel', 'Scrambled eggs', 'Bible', 'Giraffe', 'Sand castle', 'Bus', 'Lobster', 'Robot', 'Blizzard', 'Jump rope', 'Seat belt', 'Bikini', 'Glasses', 'Snowflake', 'Car accident', 'Lollipop', 'Sand castle', 'Burrito', 'Koala', 'Skip', 'Book', 'High heel', 'Stairs', 'Castle', 'Magnet', 'Slipper', 'Captain', 'Leprechaun', 'Solar eclipse', 'Bucket', 'Ice cream cone', 'Starfish', 'Chain saw', 'Megaphone', 'Snowball', 'Chandelier', 'Light', 'Space', 'Bumble bee', 'Igloo', 'Strawberry', 'Circus tent', 'Mermaid', 'Sprinkler', 'Crib', 'Mask', 'Stethoscope', 'Butterfly', 'Lady bug', 'Sun', 'Computer', 'Minivan', 'Statue of Liberty', 'Cruise ship', 'Mechanic', 'Stork', 'Camera', 'Lamp', 'Tire', 'Crib', 'Mount Rushmore', 'Tadpole', 'Dance', 'Mom', 'Sunburn', 'Cat', 'Lion', 'Toast', 'Dragon', 'Music', 'Teepee', 'Deodorant', 'Mr Potato Head', 'Thread', 'Church', 'Mailbox', 'Toothbrush', 'Dumbbell', 'North pole', 'Telescope', 'Facebook', 'Pantyhose', 'Tourist', 'Crayon', 'Night', 'Toothpaste', 'Eel', 'Nurse', 'Train', 'Flat', 'Paper plate', 'United States', 'Dolphin', 'Nose', 'Truck', 'Ferris wheel', 'Owl', 'Tricycle', 'Frame', 'Photo', 'WiFi', 'Egg', 'Olympics', 'Volleyball', 'Flag', 'Pacifier', 'Tutu', 'Full moon', 'Pilgram', 'Zombie', 'Eiffel Tower', 'Peanut', 'Hammer', 'Junk mail', 'Piano', 'Guitar', 'Game', 'Pirate', 'Oven'];
var pc_btn = document.getElementById("pc-btn");
var pc_topic_btn = document.getElementById("pc_topic_btn");
var pc = document.getElementById("pc");
var pc_intro = document.getElementById("pc-intro");
var pc_topic = document.getElementById("pc-topic");


pc_btn.addEventListener("click", function(){
  if (pc.style.display === "none"){
    pc.style.display = "block";
    pc_intro.style.display="block";
    pc_topic.style.display="none";

    //Hide all others
    act.style.display="none";
    hum.style.display="none";
    charades.style.display="none";
    skulpture.style.display = "none";
    cam.style.display = "none";
    mindmeld.style.display = "none";
    spelling.style.display = "none";
    zelpuz.style.display = "none";
    gen.style.display = "none";
    quiz.style.display = "none";
    free.style.display = "none";
  }
  else{
    pc.style.display = "none";
  }
});

pc_topic_btn.addEventListener("click", function(){
  pc_intro.style.display = "none";
  pc_topic.style.display = "block";
  var randomnum=Math.round(Math.random()*153)
  pc_topic.innerHTML ="<p>"+pc_topics[randomnum]+"</p>";
});



/*Skulpture*/
var skulpture_topics = ['Angel', 'Eyeball', 'Pizza', 'Abraham Lincoln', 'Kiss', 'Pigtails', 'Attic', 'Glue', 'Pocket watch', 'Angry', 'Fireworks', 'Pumpkin', 'Brain', 'Kitten', 'Playground', 'Back seat', 'Highchair', 'Rock band', 'Baby', 'Flower', 'Rainbow', 'Bubble bath', 'Kiwi', 'Pumpkin pie', 'Birthday', 'Hockey', 'Sasquatch', 'Beard', 'Flying saucer', 'Recycle', 'Buckle', 'Lipstick', 'Raindrop', 'Black hole', 'Hotel', 'Scrambled eggs', 'Bible', 'Giraffe', 'Sand castle', 'Bus', 'Lobster', 'Robot', 'Blizzard', 'Jump rope', 'Seat belt', 'Bikini', 'Glasses', 'Snowflake', 'Car accident', 'Lollipop', 'Sand castle', 'Burrito', 'Koala', 'Skip', 'Book', 'High heel', 'Stairs', 'Castle', 'Magnet', 'Slipper', 'Captain', 'Leprechaun', 'Solar eclipse', 'Bucket', 'Ice cream cone', 'Starfish', 'Chain saw', 'Megaphone', 'Snowball', 'Chandelier', 'Light', 'Space', 'Bumble bee', 'Igloo', 'Strawberry', 'Circus tent', 'Mermaid', 'Sprinkler', 'Crib', 'Mask', 'Stethoscope', 'Butterfly', 'Lady bug', 'Sun', 'Computer', 'Minivan', 'Statue of Liberty', 'Cruise ship', 'Mechanic', 'Stork', 'Camera', 'Lamp', 'Tire', 'Crib', 'Mount Rushmore', 'Tadpole', 'Dance', 'Mom', 'Sunburn', 'Cat', 'Lion', 'Toast', 'Dragon', 'Music', 'Teepee', 'Deodorant', 'Mr Potato Head', 'Thread', 'Church', 'Mailbox', 'Toothbrush', 'Dumbbell', 'North pole', 'Telescope', 'Facebook', 'Pantyhose', 'Tourist', 'Crayon', 'Night', 'Toothpaste', 'Eel', 'Nurse', 'Train', 'Flat', 'Paper plate', 'United States', 'Dolphin', 'Nose', 'Truck', 'Ferris wheel', 'Owl', 'Tricycle', 'Frame', 'Photo', 'WiFi', 'Egg', 'Olympics', 'Volleyball', 'Flag', 'Pacifier', 'Tutu', 'Full moon', 'Pilgram', 'Zombie', 'Eiffel Tower', 'Peanut', 'Hammer', 'Junk mail', 'Piano', 'Guitar', 'Game', 'Pirate', 'Oven'];
var skulpture_btn = document.getElementById("skulpture-btn");
var skulpture_topic_btn = document.getElementById("skulpture_topic_btn");
var skulpture = document.getElementById("skulpture");
var skulpture_intro = document.getElementById("skulpture-intro");
var skulpture_topic = document.getElementById("skulpture-topic");


skulpture_btn.addEventListener("click", function(){
  if (skulpture.style.display === "none"){
    skulpture.style.display = "block";
    skulpture_intro.style.display="block";
    skulpture_topic.style.display="none";

    //Hide all others
    pc.style.display="none";
    act.style.display="none";
    hum.style.display="none";
    charades.style.display="none";
    mindmeld.style.display = "none";
    spelling.style.display = "none";
    zelpuz.style.display = "none";
    cam.style.display = "none";
    quiz.style.display = "none";
    gen.style.display = "none";
    free.style.display = "none";
  }
  else{
    skulpture.style.display = "none";
  }
});

skulpture_topic_btn.addEventListener("click", function(){
  skulpture_intro.style.display = "none";
  skulpture_topic.style.display = "block";
  var randomnum=Math.round(Math.random()*153)
  skulpture_topic.innerHTML ="<p>"+skulpture_topics[randomnum]+"</p>";
});

/*mindmeld*/
var mindmeld_topics = ['Angel', 'Eyeball', 'Pizza', 'Abraham Lincoln', 'Kiss', 'Pigtails', 'Attic', 'Glue', 'Pocket watch', 'Angry', 'Fireworks', 'Pumpkin', 'Brain', 'Kitten', 'Playground', 'Back seat', 'Highchair', 'Rock band', 'Baby', 'Flower', 'Rainbow', 'Bubble bath', 'Kiwi', 'Pumpkin pie', 'Birthday', 'Hockey', 'Sasquatch', 'Beard', 'Flying saucer', 'Recycle', 'Buckle', 'Lipstick', 'Raindrop', 'Black hole', 'Hotel', 'Scrambled eggs', 'Bible', 'Giraffe', 'Sand castle', 'Bus', 'Lobster', 'Robot', 'Blizzard', 'Jump rope', 'Seat belt', 'Bikini', 'Glasses', 'Snowflake', 'Car accident', 'Lollipop', 'Sand castle', 'Burrito', 'Koala', 'Skip', 'Book', 'High heel', 'Stairs', 'Castle', 'Magnet', 'Slipper', 'Captain', 'Leprechaun', 'Solar eclipse', 'Bucket', 'Ice cream cone', 'Starfish', 'Chain saw', 'Megaphone', 'Snowball', 'Chandelier', 'Light', 'Space', 'Bumble bee', 'Igloo', 'Strawberry', 'Circus tent', 'Mermaid', 'Sprinkler', 'Crib', 'Mask', 'Stethoscope', 'Butterfly', 'Lady bug', 'Sun', 'Computer', 'Minivan', 'Statue of Liberty', 'Cruise ship', 'Mechanic', 'Stork', 'Camera', 'Lamp', 'Tire', 'Crib', 'Mount Rushmore', 'Tadpole', 'Dance', 'Mom', 'Sunburn', 'Cat', 'Lion', 'Toast', 'Dragon', 'Music', 'Teepee', 'Deodorant', 'Mr Potato Head', 'Thread', 'Church', 'Mailbox', 'Toothbrush', 'Dumbbell', 'North pole', 'Telescope', 'Facebook', 'Pantyhose', 'Tourist', 'Crayon', 'Night', 'Toothpaste', 'Eel', 'Nurse', 'Train', 'Flat', 'Paper plate', 'United States', 'Dolphin', 'Nose', 'Truck', 'Ferris wheel', 'Owl', 'Tricycle', 'Frame', 'Photo', 'WiFi', 'Egg', 'Olympics', 'Volleyball', 'Flag', 'Pacifier', 'Tutu', 'Full moon', 'Pilgram', 'Zombie', 'Eiffel Tower', 'Peanut', 'Hammer', 'Junk mail', 'Piano', 'Guitar', 'Game', 'Pirate', 'Oven'];
var mindmeld_btn = document.getElementById("mindmeld-btn");
var mindmeld_topic_btn = document.getElementById("mindmeld_topic_btn");
var mindmeld = document.getElementById("mindmeld");
var mindmeld_intro = document.getElementById("mindmeld-intro");
var mindmeld_topic = document.getElementById("mindmeld-topic");


mindmeld_btn.addEventListener("click", function(){
  if (mindmeld.style.display === "none"){
    mindmeld.style.display = "block";
    mindmeld_intro.style.display="block";
    mindmeld_topic.style.display="none";

    //Hide all others
    pc.style.display="none";
    act.style.display="none";
    hum.style.display="none";
    charades.style.display="none";
    free.style.display = "none";
    skulpture.style.display = "none";
    spelling.style.display = "none";
    zelpuz.style.display = "none";
    cam.style.display = "none";
    gen.style.display = "none";
    quiz.style.display = "none";
  }
  else{
    mindmeld.style.display = "none";
  }
});

mindmeld_topic_btn.addEventListener("click", function(){
  mindmeld_intro.style.display = "none";
  mindmeld_topic.style.display = "block";
  var randomnum=Math.round(Math.random()*153)
  mindmeld_topic.innerHTML ="<p>"+mindmeld_topics[randomnum]+"</p>";
});

/*Spelling*/
var spelling_topics = ['Angel', 'Eyeball', 'Pizza', 'Abraham Lincoln', 'Kiss', 'Pigtails', 'Attic', 'Glue', 'Pocket watch', 'Angry', 'Fireworks', 'Pumpkin', 'Brain', 'Kitten', 'Playground', 'Back seat', 'Highchair', 'Rock band', 'Baby', 'Flower', 'Rainbow', 'Bubble bath', 'Kiwi', 'Pumpkin pie', 'Birthday', 'Hockey', 'Sasquatch', 'Beard', 'Flying saucer', 'Recycle', 'Buckle', 'Lipstick', 'Raindrop', 'Black hole', 'Hotel', 'Scrambled eggs', 'Bible', 'Giraffe', 'Sand castle', 'Bus', 'Lobster', 'Robot', 'Blizzard', 'Jump rope', 'Seat belt', 'Bikini', 'Glasses', 'Snowflake', 'Car accident', 'Lollipop', 'Sand castle', 'Burrito', 'Koala', 'Skip', 'Book', 'High heel', 'Stairs', 'Castle', 'Magnet', 'Slipper', 'Captain', 'Leprechaun', 'Solar eclipse', 'Bucket', 'Ice cream cone', 'Starfish', 'Chain saw', 'Megaphone', 'Snowball', 'Chandelier', 'Light', 'Space', 'Bumble bee', 'Igloo', 'Strawberry', 'Circus tent', 'Mermaid', 'Sprinkler', 'Crib', 'Mask', 'Stethoscope', 'Butterfly', 'Lady bug', 'Sun', 'Computer', 'Minivan', 'Statue of Liberty', 'Cruise ship', 'Mechanic', 'Stork', 'Camera', 'Lamp', 'Tire', 'Crib', 'Mount Rushmore', 'Tadpole', 'Dance', 'Mom', 'Sunburn', 'Cat', 'Lion', 'Toast', 'Dragon', 'Music', 'Teepee', 'Deodorant', 'Mr Potato Head', 'Thread', 'Church', 'Mailbox', 'Toothbrush', 'Dumbbell', 'North pole', 'Telescope', 'Facebook', 'Pantyhose', 'Tourist', 'Crayon', 'Night', 'Toothpaste', 'Eel', 'Nurse', 'Train', 'Flat', 'Paper plate', 'United States', 'Dolphin', 'Nose', 'Truck', 'Ferris wheel', 'Owl', 'Tricycle', 'Frame', 'Photo', 'WiFi', 'Egg', 'Olympics', 'Volleyball', 'Flag', 'Pacifier', 'Tutu', 'Full moon', 'Pilgram', 'Zombie', 'Eiffel Tower', 'Peanut', 'Hammer', 'Junk mail', 'Piano', 'Guitar', 'Game', 'Pirate', 'Oven'];
var spelling_btn = document.getElementById("spelling-btn");
var spelling_topic_btn = document.getElementById("spelling_topic_btn");
var spelling = document.getElementById("spelling");
var spelling_intro = document.getElementById("spelling-intro");
var spelling_topic = document.getElementById("spelling-topic");


spelling_btn.addEventListener("click", function(){
  if (spelling.style.display === "none"){
    spelling.style.display = "block";
    spelling_intro.style.display="block";
    spelling_topic.style.display="none";

    //Hide all others
    pc.style.display="none";
    act.style.display="none";
    hum.style.display="none";
    charades.style.display="none";
    skulpture.style.display = "none";
    mindmeld.style.display = "none";
    zelpuz.style.display = "none";
    cam.style.display = "none";
    quiz.style.display = "none";
    gen.style.display = "none";
    free.style.display = "none";
  }
  else{
    spelling.style.display = "none";
  }
});

spelling_topic_btn.addEventListener("click", function(){
  spelling_intro.style.display = "none";
  spelling_topic.style.display = "block";
  var randomnum=Math.round(Math.random()*153)
  spelling_topic.innerHTML ="<p>"+spelling_topics[randomnum]+"</p>";
});


/*zelpuz*/
var zelpuz_btn = document.getElementById("zelpuz-btn");
var zelpuz = document.getElementById("zelpuz");
var zelpuz_intro = document.getElementById("zelpuz-intro");


zelpuz_btn.addEventListener("click", function(){
  if (zelpuz.style.display === "none"){
    zelpuz.style.display = "block";
    zelpuz_intro.style.display="block";

    //Hide all others
    pc.style.display="none";
    act.style.display="none";
    hum.style.display="none";
    charades.style.display="none";
    skulpture.style.display = "none";
    mindmeld.style.display = "none";
    spelling.style.display = "none";
    cam.style.display = "none";
    quiz.style.display = "none";
    free.style.display = "none";
    gen.style.display = "none";
  }
  else{
    zelpuz.style.display = "none";
  }
});


/*quiz time*/
var quiz_btn = document.getElementById("quiz-btn");
var quiz = document.getElementById("quiz");
var quiz_intro = document.getElementById("quiz-intro");


quiz_btn.addEventListener("click", function(){
  if (quiz.style.display === "none"){
    quiz.style.display = "block";
    quiz_intro.style.display="block";

    //Hide all others
    pc.style.display="none";
    act.style.display="none";
    hum.style.display="none";
    charades.style.display="none";
    skulpture.style.display = "none";
    mindmeld.style.display = "none";
    spelling.style.display = "none";
    cam.style.display = "none";
    free.style.display = "none";
    gen.style.display = "none";
    zelpuz.style.display = "none";
  }
  else{
    quiz.style.display = "none";
  }
});

/*General Knowledge*/
var gen_btn = document.getElementById("gen-btn");
var gen = document.getElementById("gen");
var gen_intro = document.getElementById("gen-intro");


gen_btn.addEventListener("click", function(){
  if (gen.style.display === "none"){
    gen.style.display = "block";
    gen_intro.style.display="block";

    //Hide all others
    pc.style.display="none";
    act.style.display="none";
    hum.style.display="none";
    charades.style.display="none";
    skulpture.style.display = "none";
    mindmeld.style.display = "none";
    spelling.style.display = "none";
    cam.style.display = "none";
    zelpuz.style.display = "none";
    quiz.style.display = "none";
    free.style.display = "none";
  }
  else{
    gen.style.display = "none";
  }
});


/*Free Choice*/
var free_btn = document.getElementById("free-btn");
var free = document.getElementById("free");
var free_intro = document.getElementById("free-intro");


free_btn.addEventListener("click", function(){
  if (free.style.display === "none"){
    free.style.display = "block";
    free_intro.style.display="block";

    //Hide all others
    pc.style.display="none";
    act.style.display="none";
    hum.style.display="none";
    charades.style.display="none";
    skulpture.style.display = "none";
    mindmeld.style.display = "none";
    spelling.style.display = "none";
    cam.style.display = "none";
    zelpuz.style.display = "none";
    quiz.style.display = "none";
    gen.style.display = "none";
  }
  else{
    free.style.display = "none";
  }
});






