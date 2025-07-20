import { useState } from 'react';
import "./MessageCard.css";

export default function MessageCard( {text, author, image} ) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div 
            className={`message-card ${flipped ? 'flipped' : ''}`}
            onClick={() => setFlipped(!flipped)}
        >
            <div className="card-inner">
                {/* front side */}
                <div className="card-front">
                    <p className="text-message">"{text}"</p>
                    <p className="message-author">— {author}</p>
                </div>

                {/* back side */}
                <div className="card-back">
                    <img src={image} alt={author} className="message-image" />
                </div>
                
            </div>

        </div>
    )
}