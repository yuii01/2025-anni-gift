import './app.css';
import IntroSection from './IntroSection';
import MessageBoard from './MessageBoard';

function scrollToMessages() {
  const messagesSection = document.getElementById('messages-section').scrollIntoView({behavior: 'smooth'});
  
}

function App() {
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
