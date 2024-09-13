import React, { useRef, useState } from 'react';
import arrow from '../assets/arrow.png';
import youtubw from '../assets/youtubw.png';
import lazarev from '../assets/lazarev.png';
import img2 from '../assets/recipe.png';
import img3 from '../assets/notes.png';
import currency from '../assets/currency.png';
import yt1 from '../assets/yt1.png';
import yt2 from '../assets/yt2.png';
import yt3 from '../assets/yt3.png';
import recipe1 from '../assets/recipe4.png';
import recipe2 from '../assets/recipe2.png';
import recipe3 from '../assets/recipe3.png';
import note1 from '../assets/notes1.png';
import note2 from '../assets/notes2.png';
import note3 from '../assets/notes.png';

const Project = () => {
  const bgRef = useRef(null);
  const movingBoxRefs = useRef([
    { ref: useRef(null), intervalId: null, images: [yt1, yt2, yt3] },
    { ref: useRef(null), intervalId: null, images: [lazarev] },
    { ref: useRef(null), intervalId: null, images: [recipe1, recipe2, recipe3] },
    { ref: useRef(null), intervalId: null, images: [note1, note2, note3] }, 
    { ref: useRef(null), intervalId: null, images: [currency] }
  ]);
  const [imageIndexes, setImageIndexes] = useState([0, 0, 0, 0, 0]);

  const startImageChangeInterval = (index) => {
    if (!movingBoxRefs.current[index].intervalId) {
      movingBoxRefs.current[index].intervalId = setInterval(() => {
        setImageIndexes((prevIndexes) => {
          const newIndexes = [...prevIndexes];
          newIndexes[index] = (newIndexes[index] + 1) % movingBoxRefs.current[index].images.length;
          return newIndexes;
        });
      }, 1000);
    }
  };

  const stopImageChangeInterval = (index) => {
    if (movingBoxRefs.current[index].intervalId) {
      clearInterval(movingBoxRefs.current[index].intervalId);
      movingBoxRefs.current[index].intervalId = null;
    }
  };

  const handleMouse = (e, projectIndex) => {
    if (bgRef.current) {
      const colors = ["#9d0000", "#006e00", "#3d3d00", "#141414", "#00152b"];
      bgRef.current.style.backgroundColor = colors[projectIndex];
    }

    const containerRef = projectRefs[projectIndex].current;
    const movingBoxRef = movingBoxRefs.current[projectIndex].ref.current;
    if (!containerRef || !movingBoxRef) return;

    const containerRect = containerRef.getBoundingClientRect();
    const x = e.clientX - containerRect.left - movingBoxRef.offsetWidth / 2;
    const y = e.clientY - containerRect.top - movingBoxRef.offsetHeight / 2;

    // Clamping the values to keep the moving box within the container
    const clampedX = Math.max(0, Math.min(x, containerRect.width - movingBoxRef.offsetWidth));
    const clampedY = Math.max(0, Math.min(y, containerRect.height - movingBoxRef.offsetHeight));

    movingBoxRef.style.display = "initial";
    movingBoxRef.style.transform = `translate3d(${clampedX}px, ${clampedY}px, 0)`;

    startImageChangeInterval(projectIndex);
  };

  const handleMouseLeave = (projectIndex) => {
    if (bgRef.current) {
      bgRef.current.style.backgroundColor = "initial";
    }
    if (movingBoxRefs.current[projectIndex].ref.current) {
      movingBoxRefs.current[projectIndex].ref.current.style.display = "none";
    }
    stopImageChangeInterval(projectIndex);
  };

  const handleClick = (url) => {
    window.location.href = url;
  };

  const projectRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  return (
    <div ref={bgRef} className='w-full min-h-screen mainbg transition-all ease-linear bgmainm'>
      <div className=" pl-12 pt-12 pb-12">
        <h1 className='text-[6vw] font-semibold text-white'><u>My <i>Works</i> </u></h1>
      </div>
      
      <div className="responsivesec flex items-center justify-start" ref={projectRefs[0]}>
        <div className="pl-10">
          <h1 className='text-white textresponsive text-start font-[600] text-[4vw] pb-5'><i>01. YoutubeClone</i></h1>
          <div
            className="w-[63vw] h-[90vh] bg-white rounded-xl relative project"
            onMouseEnter={(e) => handleMouse(e, 0)}
            onMouseMove={(e) => handleMouse(e, 0)}
            onMouseLeave={() => handleMouseLeave(0)}
            onClick={() => handleClick("https://verdant-elf-8cd53a.netlify.app/")}
          >
            <img src={youtubw} className='w-full rounded-xl border border-zinc-700 h-full bg-cover' alt="" />
            <div className="absolute bottom-5 w-fit h-fit left-5 text-[3vw] pr-4 pl-4 pt-2 pb-2 rounded-full bg-white text-[#272727] italic font-[500]">React JS + API</div>
            <div className="absolute bottom-5 w-fit h-fit right-5 text-[3vw] pr-4 pl-4 pt-2 pb-2 rounded-full bg-white flex items-center justify-center">
              <img src={arrow}  className='myarr invert -rotate-90' alt="" />
            </div>
            <div ref={movingBoxRefs.current[0].ref} className="absolute movingBox w-[43vw] top-0 h-[80vh] bg-white rounded-xl transition-transform duration-300 ease-out">
              <img src={movingBoxRefs.current[0].images[imageIndexes[0]]} className='w-full h-full bg-cover rounded-xl' alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Project 2 */}
      <div className="responsivesec flex items-center justify-end" ref={projectRefs[1]}>
        <div className="pr-10 pt-10">
          <h1 className='text-white textresponsive text-end font-[600] text-[4vw] pt-4 pb-5'><i>02. Lazarev Remake</i></h1>
          <div
            className="w-[63vw] h-[90vh] bg-white rounded-xl relative project"
            onMouseEnter={(e) => handleMouse(e, 1)}
            onMouseMove={(e) => handleMouse(e, 1)}
            onMouseLeave={() => handleMouseLeave(1)}
            onClick={() => handleClick("https://lazarev34.netlify.app/")}
          >
            <img src={lazarev} className='w-full rounded-xl border border-zinc-700 h-full bg-cover' alt="" />
            <div className="absolute bottom-5 w-fit h-fit left-5 text-[3vw] pr-4 pl-4 pt-2 pb-2 rounded-full bg-white text-[#272727] italic font-[500]">JS + GSAP</div>
            <div className="absolute bottom-5 w-fit h-fit right-5 text-[3vw] pr-4 pl-4 pt-2 pb-2 rounded-full bg-white flex items-center justify-center">
              <img src={arrow}  className='myarr invert -rotate-90' alt="" />
            </div>
            <div ref={movingBoxRefs.current[1].ref} className="absolute movingBox w-[43vw] top-0 h-[80vh] bg-white rounded-xl transition-transform duration-300 ease-out">
              <img src={movingBoxRefs.current[1].images[imageIndexes[1]]} className='w-full h-full bg-cover rounded-xl' alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Project 3 */}
      <div className="responsivesec flex items-center justify-start" ref={projectRefs[2]}>
        <div className="pl-10 pt-10">
          <h1 className='text-white textresponsive text-start font-[600] text-[4vw] pt-4 pb-5'><i>03. Recipe Hub</i></h1>
          <div
            className="w-[63vw] h-[90vh] bg-white rounded-xl relative project"
            onMouseEnter={(e) => handleMouse(e, 2)}
            onMouseMove={(e) => handleMouse(e, 2)}
            onMouseLeave={() => handleMouseLeave(2)}
            onClick={() => handleClick("https://recipe-hub-react.netlify.app/")}
          >
            <img src={img2} className='w-full rounded-xl border border-zinc-700 h-full bg-cover' alt="" />
            <div className="absolute bottom-5 w-fit h-fit left-5 text-[3vw] pr-4 pl-4 pt-2 pb-2 rounded-full bg-white text-[#272727] italic font-[500]">React + API</div>
            <div className="absolute bottom-5 w-fit h-fit right-5 text-[3vw] pr-4 pl-4 pt-2 pb-2 rounded-full bg-white flex items-center justify-center">
              <img src={arrow}  className='myarr invert -rotate-90' alt="" />
            </div>
            <div ref={movingBoxRefs.current[2].ref} className="absolute movingBox w-[43vw] top-0 h-[80vh] bg-white rounded-xl transition-transform duration-300 ease-out">
              <img src={movingBoxRefs.current[2].images[imageIndexes[2]]} className='w-full h-full bg-cover rounded-xl' alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Project 4 */}
      <div className="responsivesec flex items-center justify-end" ref={projectRefs[3]}>
        <div className="pr-10 pt-10">
          <h1 className='text-white textresponsive text-end font-[600] text-[4vw] pt-4 pb-5'><i>04. Notes App</i></h1>
          <div
            className="w-[63vw] h-[90vh] bg-white rounded-xl relative project"
            onMouseEnter={(e) => handleMouse(e, 3)}
            onMouseMove={(e) => handleMouse(e, 3)}
            onMouseLeave={() => handleMouseLeave(3)}
            onClick={() => handleClick("https://notes-app-react.netlify.app/")}
          >
            <img src={img3} className='w-full rounded-xl border border-zinc-700 h-full bg-cover' alt="" />
            <div className="absolute bottom-5 w-fit h-fit left-5 text-[3vw] pr-4 pl-4 pt-2 pb-2 rounded-full bg-white text-[#272727] italic font-[500]">React + Local Storage</div>
            <div className="absolute bottom-5 w-fit h-fit right-5 text-[3vw] pr-4 pl-4 pt-2 pb-2 rounded-full bg-white flex items-center justify-center">
              <img src={arrow}  className='myarr invert -rotate-90' alt="" />
            </div>
            <div ref={movingBoxRefs.current[3].ref} className="absolute movingBox w-[43vw] top-0 h-[80vh] bg-white rounded-xl transition-transform duration-300 ease-out">
              <img src={movingBoxRefs.current[3].images[imageIndexes[3]]} className='w-full h-full bg-cover rounded-xl' alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Project 5 */}
      <div className="responsivesec flex items-center justify-start" ref={projectRefs[4]}>
        <div className="pl-10 pt-10">
          <h1 className='text-white textresponsive text-start font-[600] text-[4vw] pt-4 pb-5'><i>05. Currency Converter</i></h1>
          <div
            className="w-[63vw] h-[90vh] bg-white rounded-xl relative project"
            onMouseEnter={(e) => handleMouse(e, 4)}
            onMouseMove={(e) => handleMouse(e, 4)}
            onMouseLeave={() => handleMouseLeave(4)}
            onClick={() => handleClick("https://currency-converter-react.netlify.app/")}
          >
            <img src={currency} className='w-full rounded-xl border border-zinc-700 h-full bg-cover' alt="" />
            <div className="absolute bottom-5 w-fit h-fit left-5 text-[3vw] pr-4 pl-4 pt-2 pb-2 rounded-full bg-white text-[#272727] italic font-[500]">React + API</div>
            <div className="absolute bottom-5 w-fit h-fit right-5 text-[3vw] pr-4 pl-4 pt-2 pb-2 rounded-full bg-white flex items-center justify-center">
              <img src={arrow}  className='myarr invert -rotate-90' alt="" />
            </div>
            <div ref={movingBoxRefs.current[4].ref} className="absolute movingBox w-[43vw] top-0 h-[80vh] bg-white rounded-xl transition-transform duration-300 ease-out">
              <img src={movingBoxRefs.current[4].images[imageIndexes[4]]} className='w-full h-full bg-cover rounded-xl' alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
