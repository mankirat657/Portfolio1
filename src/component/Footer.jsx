import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Footer = () => {
  const footerRef = useRef(null);
  const nameRef = useRef(null);
  const textRef = useRef(null);
  const copyrightRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1 } });

    tl.fromTo(
      footerRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, ease: 'power3.out' }
    )
    .fromTo(
      nameRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, ease: 'back.out(1.7)', duration: 1.5 }
    )
    .fromTo(
      textRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, ease: 'back.out(1.7)', duration: 1.5 },
      '-=1'
    )
    .fromTo(
      copyrightRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, ease: 'power2.out', delay: 1 }
    );
  }, []);

  return (
    <footer ref={footerRef} className='bg-[#121212] mt-24 text-white h-[60vh] flex flex-col items-center justify-center relative overflow-hidden'>
      <div className='absolute inset-0'>
        <div className='w-full h-full bg-gradient-to-br from-[#1a1a1a] via-[#121212] to-[#1a1a1a] opacity-60'></div>
      </div>
      <div className='relative z-10 text-center'>
        <h1 ref={nameRef} className='text-[6vw] font-bold mb-6 text-gray-300 animate-pulse'>
          mankiratsingh
        </h1>
        <h2 ref={textRef} className='text-[4vw] font-extrabold mb-6 text-gray-300'>
          #TOP1
        </h2>
        <p className='text-xl mb-6 text-gray-400'>
          Best Dominating developer
        </p>
        <div className='flex justify-center space-x-8 mb-6'>
          <a href='#' className='text-blue-500 hover:underline transition-transform transform hover:scale-105'>
            About
          </a>
          <a href='#' className='text-blue-500 hover:underline transition-transform transform hover:scale-105'>
            Services
          </a>
          <a href='#' className='text-blue-500 hover:underline transition-transform transform hover:scale-105'>
            Contact
          </a>
        </div>
        <div ref={copyrightRef} className='text-gray-500 text-sm'>
          <p>© {new Date().getFullYear()} mankiratsingh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
