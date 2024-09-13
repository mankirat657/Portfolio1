// src/component/Preloader.js
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Preloader = ({ onLoad }) => {
  useEffect(() => {
    // Define the GSAP animation for the loader
    const tl = gsap.timeline({ onComplete: onLoad });

    // Show loader for 4 seconds and then fade out over 1 second
    tl.to('.loader', { opacity: 1, duration: 0 }) // Make sure loader is visible initially
      .to('.loader', { opacity: 1, duration: 4 }) // Display loader for 4 seconds
      .to('.loader', { opacity: 0, duration: 1 }) // Fade out over 1 second
      .set('.loader', { display: 'none' }); // Hide loader after animation

  }, [onLoad]);

  return (
    <div className="h-screen w-full bg-black flex items-center justify-center">
      <div className="loader ">
        <div className="react-star">
          <div className="nucleus"></div>
          <div className="electron electron1"></div>
          <div className="electron electron2"></div>
          <div className="electron electron3"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
