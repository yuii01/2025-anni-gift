import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Messages from './Messages';
import Gallery from './Gallery';
import Home from './Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;