import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/Global.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// Placeholder for Navbar.js
export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>Services</li>
        <li>Reviews</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

// Placeholder for Footer.js
export default function Footer() {
  return <footer>© 2025 Your Landscaping Company</footer>;
}

// Placeholder for Home.js
export default function Home() {
  return (
    <main>
      <h1>Welcome to Your Landscaping Company</h1>
      <p>We offer the best landscaping services in your area!</p>
    </main>
  );
}
