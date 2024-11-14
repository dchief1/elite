import React, { useState } from 'react';
import WaitlistModal from "./WaitlistModal";
import { Menu, X, } from 'lucide-react';
import logo from "../assets/images/elitelogo.png";

const Navbar =() =>{
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
    return(
    <div>
        {/* Navbar Container */}
          {/* Navbar */}
          <nav className="flex justify-between items-center px-4 py-3 sm:px-6 max-w-7xl mx-auto">
            {/* Logo */}
            <a href='/' className="flex items-center space-x-3">
                <img src={logo} alt="Elite Logo" className="h-16 sm:h-12" />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#pricing" className="hover:text-orange-800 font-medium text-xl">Pricing</a>
              <a href="/about" className="hover:text-purple-800 font-medium text-xl">About Us</a>
              <a href="#contact" className="hover:text-purple-500 font-medium text-xl">Contact Us</a>
              <a href="#faq" className="hover:text-orange-800 font-medium text-xl">FAQ</a>
            </div>

            {/* Desktop Join Waitlist Button */}
            <button onClick={() => setIsModalOpen(true)} className="hidden md:block border-2 font-medium border-white hover:border-purple-800 px-5 py-2 rounded-2xl transition text-xl">
              Join Waitlist
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="lg:hidden z-10 p-2 text-white"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="w-6" />
              )}
            </button>

            <div className={`fixed inset-0 bg-black bg-opacity-95 lg:hidden transition-transform duration-300 ease-in-out
              ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
            `}>
              <div className="flex flex-col items-center justify-center h-full space-y-8 text-white">
                <a href="#pricing">Pricing</a>
                <a href="/about">About Us</a>
                <a href="#contact">Contact Us</a>
                <a href="#faq">FAQ</a>
                <button onClick={() => setIsModalOpen(true)} className="border-2 font-medium border-white hover:border-purple-500 hover:text-purple-500 px-5 py-2 rounded-2xl transition duration-200 text-xl">
                  Join Waitlist
                </button>
              </div>
            </div>
                  {/* Modal */}
            {isModalOpen && <WaitlistModal onClose={() => setIsModalOpen(false)} />}

            {/* Internal CSS for Animated Gradient Border */}
            <style>
              {`
                .headerBorder {
                  background: linear-gradient(-45deg, #f0440e, #781e02, #3b03ab, #5a05f7, #FFA500);
                  background-size: 400% 400%;
                  animation: gradient 10s ease infinite;
                }
                @keyframes gradient {
                  0% { background-position: 0% 50%; }
                  50% { background-position: 100% 50%; }
                  100% { background-position: 0% 50%; }
                }
              `}
            </style>
          </nav>
          <div className="headerBorder h-1"></div>
    </div>
  )
}

export default Navbar;