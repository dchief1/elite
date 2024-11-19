// components/LandingPage.jsx
import React, { useState , useRef } from 'react';
import WaitlistModal from "./WaitlistModal";  
import { Play } from 'lucide-react';
import Explore from './Explore';
import video from '../assets/videos/Elitejobs.tech Ai 2 1video.mp4'

const NavLink = ({ href, children }) => (
  <a 
    href={href} 
    className="hover:text-purple-500 font-medium text-xl transition-colors duration-200"
  >
    {children}
  </a>
);

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const videoRef = useRef(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.muted = false; // Unmute the video
      videoRef.current.play(); // Play the video
    }
  };

  return (
    <div>
        {/* Hero Banner */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left Text Section */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-tight">
                A fast track to career success powered with AI features for both{' '}
                <span className="font-bold text-purple-700">companies</span> & <span className="font-bold text-orange-700">professionals</span>
              </h1>
              <div className="border-4 w-80 -mt-5 border-purple-500/20"></div>
              
              <p className="text-gray-300 text-base sm:text-lg">
                With the use of AI and a unique algorithm to make perfect matches between 
                talented professionals and exciting opportunities across the globe.
              </p>

              <div className="flex justify-start">
                <button 
                  onClick={() => setIsModalOpen(true)} 
                  className="group inline-flex items-center gap-4 bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-300 transition-all duration-300"
                >
                  <span className="text-lg font-bold">Join Waitlist</span>
                  <span className="text-2xl transform transition-transform duration-300 group-hover:translate-x-2 font-bold">
                    ⟶
                  </span>
                </button>
              </div>
            </div>

            {/* Right Video Section */}
            <div className="w-full lg:w-1/2">
      <div className="relative aspect-video bg-gray-700 rounded-xl overflow-hidden">
        {/* Video Element */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src={video}  // Replace with the path to your video
          loop
          playsInline
          muted // Default muted until the play button is clicked
        ></video>

        {/* Play Button */}
        <button
          className="absolute inset-0 w-full h-full flex items-center justify-center group transition-all duration-300"
          onClick={handlePlayVideo}
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
            <Play className="w-8 h-8 text-black ml-1" />
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </button>
      </div>
    </div>

          </div>
          
          {/* Modal */}
          {isModalOpen && <WaitlistModal onClose={() => setIsModalOpen(false)} />} 

        </div>
      <Explore />
    </div>
  );
};

export default LandingPage;
