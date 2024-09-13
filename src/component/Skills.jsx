import React, { useRef, useState, useEffect } from 'react';
import reat from '../assets/reat.png';
import tail from '../assets/tail.png';
import gsap from '../assets/gsap.svg';
import trigger from '../assets/trigger.png';
import html from '../assets/html.png';
const SkillItem = ({ skillName, imageSrc }) => {
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const containerRef = useRef(null);
  const mousePosRef = useRef({ x: 0, y: 0 });
  const requestRef = useRef(null);

  function handleMouseMove(e) {
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    mousePosRef.current = { x: mouseX - 50, y: mouseY - 50 };
    setIsMoving(true);
  }

  function handleMouseLeave() {
    setIsMoving(false);
  }

  useEffect(() => {
    const smoothMove = () => {
      setImagePosition(prevPos => ({
        x: prevPos.x + (mousePosRef.current.x - prevPos.x) * 0.05,
        y: prevPos.y + (mousePosRef.current.y - prevPos.y) * 0.05,
      }));

      requestRef.current = requestAnimationFrame(smoothMove);
    };

    if (isMoving) {
      requestRef.current = requestAnimationFrame(smoothMove);
    } else {
      cancelAnimationFrame(requestRef.current);
    }

    return () => cancelAnimationFrame(requestRef.current);
  }, [isMoving]);

  return (
    <div
      className="text-black relative "
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ position: 'relative' }}
    >
      <h1 className='text-[500] text-[9vw] font-[600]'>{skillName}</h1>
      <img
        src={imageSrc}
        width={150}
        className='absolute'
        style={{
          left: `${imagePosition.x}px`,
          top: `${imagePosition.y}px`,
          display: isMoving ? 'block' : 'none',
        }}
        alt={skillName}
      />
    </div>
  );
};

const Skills = () => {
  return (
    <div className='min-h-screen p-12 w-full bg-white rounded-tr-3xl rounded-tl-3xl'>
      <h1 className='text-black font-[600] gap-4 text-[4vw] flex items-center'>
        <div className="w-10 h-10 rounded-full bg-black"></div>My Skills
      </h1>
      <div className="flex flex-col py-6">
        <SkillItem skillName="01.React Js + Js" imageSrc={reat} />
        <SkillItem skillName="02.Tailwind CSS" imageSrc={tail} />
        <SkillItem skillName="03.GSAP" imageSrc={gsap} /> 
        <SkillItem skillName="04.ScrollTrigger" imageSrc={trigger} /> 
        <SkillItem skillName="05.HTML5 + CSS3" imageSrc={html} /> 
      </div>
    </div>
  );
};

export default Skills;
