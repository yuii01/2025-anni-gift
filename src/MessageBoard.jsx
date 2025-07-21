import './MessageCard.css';
import MessageCard from './MessageCard';

export default function MessageBoard( {messages} ) {
    return (
        <div className="message-grid">

            {messages.map((msg, index) => (
            <MessageCard key={index} message={msg} />
            ))}

        </div>
    )
}