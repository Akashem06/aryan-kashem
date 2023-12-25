// ScrollArrow.js
import React, { useState, useEffect } from 'react';

const ScrollArrow = () => {
    const [isVisible, setIsVisible] = useState(true);
  
    useEffect(() => {
      const handleScroll = () => {
        setIsVisible(window.scrollY === 0);
      };
  
  
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const scrollToBottom = () => {
        if (isVisible) {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }
      };

    return (
      <div
        className={`fixed bottom-[1rem] z-50 bg-gray-800 text-white p-[1rem] rounded-full cursor-pointer hover:bg-sky-500 ${isVisible ? 
          'opacity-100 animate-bounce' : 'opacity-0 pointer-events-none'
          } transition-opacity duration-1000`}
        onClick={scrollToBottom}
      >
        <span className="text-lg">&#x2193;</span>
      </div>
    );
  };

export default ScrollArrow;
