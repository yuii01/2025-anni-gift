import "./IntroSection.css";
import {motion} from 'framer-motion';

export default function IntroSection( {onScrollDown} ) {
    return (
        <motion.div className="intro-section" intial="0" animation="1" exit="0">
            <div className="centered-text">
                <h1>Welcome to the message board!</h1>
                <h2>Click the down arrow to view ❤️</h2>
                <div className="down-arrow" onClick={onScrollDown}>
                ↓
                </div>
            </div>

        </motion.div>
    )
}