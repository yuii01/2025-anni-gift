import './app.css';
import IntroSection from './IntroSection';
import MessageBoard from './MessageBoard';

function scrollToMessages() {
  const messagesSection = document.getElementById('messages-section').scrollIntoView({behavior: 'smooth'});
  
}

function App() {
  const messages = [

    {
      text: "Hi Austyn, it's Phoebe! You're doing awesome and I hope you're loving life right now. Thanks for being there always even though we go to different schools now. I miss seeing you and having a brother around all the time. You're gonna keep doing great things and I can't wait to see how far you'll get with golf, MUN, and everything else. I hope your hair is surviving the hell you put it through, and wishing you the best next three years in the whole wide world!!!!!!!!!!!!!",
      author: "Phoebe Shi",
      image: "/images/phoebe1.png"
    },

    {
      text: "I hope you know you are doing great so far and that everyone around you is so proud of you, including me. What stands out about you to me is that even when it’s hard and you’re tired, you keep going. It’s good to push yourself but also make sure you get lots of rest when you can. Whatever you do and wherever you go, I’ll be cheering for you! (P.S. I have no pics of you so here’s a pixel Austyn instead 🥳)",
      author: "Sophia Liu",
      image: "/images/sophia1.png"
    },

    {
      text: "You are the oldest looking rising sophomore I have ever had the pleasure of meeting. I appreciate you immensely for all of the time we’ve had together and I wish to never lose touch. Keep working through golf, school, and life. Stay strong and never lose focus, even when you just want to give in to procrastination. Be better than yesterday. Be stronger than last year. I have complete faith in you. Keep me in your thoughts!",
      author: "Theo Andronescu",
      image: "/images/theo1.png"
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

export default App;
