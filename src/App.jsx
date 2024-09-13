import React, { useState, useEffect } from 'react';
import './App.css';
import LocomotiveScroll from 'locomotive-scroll';
import Banner from './component/Banner';
import Header from './component/Header';
import '../src/loco.css';
import Hero from './component/Hero';
import About from './component/About';
import Skills from './component/Skills';
import Project from './component/Project';
import Footer from './component/Footer';
import Preloader from './component/Preloader'; // Import Preloader component

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set up a timeout to simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // 5 seconds for demo; adjust to 4-5 seconds if needed

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const bodyt = document.querySelector('body');
    bodyt.addEventListener('mousemove', (e) => {
      let mousefollower = document.getElementById('mousefollower');
      mousefollower.style.left = e.clientX + 'px';
      mousefollower.style.top = e.clientY + 'px';
    });

    return () => bodyt.removeEventListener('mousemove', () => {});
  }, []);

  return (
    <>
      {loading ? (
        <Preloader onLoad={() => setLoading(false)} />
      ) : (
        <div className='scroll-smooth min-h-screen w-screen bg-[#070707]'>
          <Header />
          <Hero />
          <Banner />
          <About />
          <Skills />
          <Project />
          <Footer />
          <div
            id='mousefollower'
            className='w-7 h-7 bg-white mix-blend-difference rounded-full fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
          ></div>
        </div>
      )}
    </>
  );
}

export default App;
