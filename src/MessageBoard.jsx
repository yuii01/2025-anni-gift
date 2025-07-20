import './MessageCard.css';
import MessageCard from './MessageCard';

export default function MessageBoard( {messages} ) {
    return (
        <section id="messages" className="message-board">

        <div className="message-grid">

            {messages.map((msg, index) => (
            <MessageCard key={index} message={msg} />
            ))}

        </div>

        </section>
    )
}