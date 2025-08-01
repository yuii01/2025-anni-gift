import './messages.css';
import IntroSection from './IntroSection';
import MessageBoard from './MessageBoard';
// import Header from './Header';

function scrollToMessages() {
  const messagesSection = document.getElementById('messages-section').scrollIntoView({behavior: 'smooth'});
  
}

function Messages() {
  const messages = [

    {
      text: "Hi Austyn, it's Phoebe! You're doing awesome and I hope you're loving life right now. Thanks for being there always even though we go to different schools now. I miss seeing you and having a brother around all the time. You're gonna keep doing great things and I can't wait to see how far you'll get with golf, MUN, and everything else. I hope your hair is surviving the hell you put it through, and wishing you the best next three years in the whole wide world!!!!!!!!!!!!!",
      author: "Phoebe Shi",
      image: "/images/phoebe1.png",
      color: "#E5E7E9"
    },

    {
      text: "I hope you know you are doing great so far and that everyone around you is so proud of you, including me. What stands out about you to me is that even when it’s hard and you’re tired, you keep going. It’s good to push yourself but also make sure you get lots of rest when you can. Whatever you do and wherever you go, I’ll be cheering for you! (P.S. I have no pics of you so here’s a pixel Austyn instead 🥳)",
      author: "Sophia Liu",
      image: "/images/sophia1.png",
      color: "#ebf5fb"
    },

    {
      text: "You are the oldest looking rising sophomore I have ever had the pleasure of meeting. I appreciate you immensely for all of the time we’ve had together and I wish to never lose touch. Keep working through golf, school, and life. Stay strong and never lose focus, even when you just want to give in to procrastination. Be better than yesterday. Be stronger than last year. I have complete faith in you. Keep me in your thoughts!",
      author: "Theo Andronescu",
      image: "/images/theo1.png",
      color: "#fbf3f8"
    },

    {
      text: "Dear Austyn, I can’t believe we became such good friends in just one year. I’m so glad you were on my bus, and you made MUN actually fun this year so thank you! You’re so talented and funny, and I wish you the very best birthday. P.S. still can’t believe you remember me from my twoset hoodie- chalant much?? 😝",
      author: "Minati",
      image: "/images/minati1.png",
      color: "#fef9e7"
    },

    {
      text: "Wazup, waawazs, gg, hago, golf go pew pew, volleyball tourney was fun we gotta run it back",
      author: "Jonathan choi",
      image: "/images/jonathan1.png",
      color: "#E5E7E9"
    },

    {
      text: "Hi Austyn, You’ve been a great friend since 7th grade. I had a lot of fun with you in Carson and TJ. I miss being stand partners with you in orchestra and playing on the 5ft nets during volleyball.  I wish  we can play more volleyball in the future even if golf gets in the way and hopefully we have classes together this year. Have a great one!",
      author: "Belgutei Naran-Erdene",
      image: "/images/belgutei1.jpg",
      color: "#ebf5fb"
    },

    {
      text: "Hi Austyn, Bro you gotta teach me how to topspin. Anyway your a pretty cool dude and im glad we met this year, we better have classes together next year. Also, you should do vb, its sm better than golf.",
      author: "Calvin Lieu",
      image: "/images/calvin1.jpg",
      color: "#fbf3f8"
    },

    {
      text: "Annyeonghaseyo austyn kim thanks for being a chill guy in latin bro You are the goat for real I dont get how you are so cracked at everything Im looking forward towards next year have a great one man",
      author: "Eliot Lee",
      image: "/images/eliot1.png",
      color: "#fef9e7"
    },

    {
      text: "Hey Austin, Your super chill and hella athletic. It was great getting to know you this year. Since your kcc officer now, we’ll prob see each other a lot next year and I’m looking forward to it.",
      author: "Jayden Yang",
      image: "/images/jayden1.png",
      color: "#E5E7E9"
    },
    
    {
      text: "Austyn u da besh bro [enter] But fr, U like the goat at golf and goated at pretty much everything u do. Keep being you and have a great sophomore year and every year after that, even when I’m gone. [pause] GYATTTT(sorry i literally have no pics of u :( )",
      author: "TB Mai",
      image: "/images/tb1.png",
      color: "#ebf5fb"
    },

    {
      text: "Hi Austyn, Thanks for being a chill guy for MUN and just on the bus. Glad I got to know you this year! Stay goated lmao.",
      author: "Christine Qiao",
      image: "/images/christine1.png",
      color: "#fbf3f8"
    },

    {
      text: "CS was peak for lack of a better adjective. You also helped me clutch my grade from a B+ to the A- I deserved 😤😤 I could care less abt the grade tho, an I hope Im in another class w u next year. (🥺) See u sophomore year.",
      author: "Noah",
      image: "/images/noah1.png",
      color: "#fef9e7"
    }

  ];


  return (
    <div className="app">
      <IntroSection onScrollDown={scrollToMessages} />

      <div id="messages-section">
        <MessageBoard messages={messages} /> {/* Scroll to here */}
      </div>      
        
    </div>
  );
}

export default Messages;
