import './MessageBoard.css';
import MessageCard from './MessageCard';

export default function MessageBoard({ messages }) {
    return (
        <div className="message-board-container">
            <div className="message-board-grid">
                {messages.map((msg, index) => (
                    <MessageCard key={index} text={msg.text} author={msg.author} image={msg.image} />
                ))}
            </div>
        </div>
    )
}