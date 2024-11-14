import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'
import LandingPage from './components/landingPage'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutPage from './components/About';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.voiceflow.com/widget/bundle.mjs';
    script.onload = () => {
      window.voiceflow.chat.load({
        verify: { projectID: '6730a0877b920f7bb747cb08' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production',
        assistant: { stylesheet: "styles.css" }
      }).then(() => {
        const chatButton = document.getElementById('openChat');
        if (chatButton) {
          chatButton.addEventListener('click', () => {
            window.voiceflow.chat.open();
          });
        }
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <Router>
      <div className="bg-gradient-to-b from-black to-gray-900 min-h-screen text-white font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/About" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
