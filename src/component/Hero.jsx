import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import circle from '../assets/m.svg';
import img1 from '../assets/pinterset.png';
import img2 from '../assets/recipe.png';
import img3 from '../assets/notes.png';
import img4 from '../assets/fitfinds.png';

const images = [img1, img2, img3, img4]; 

const Hero = () => {
    const [boxPosition, setBoxPosition] = useState({ x: 0, y: 0 });
    const [boxVisible, setBoxVisible] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const boxRef = useRef(null);

    useEffect(() => {
        gsap.from('.animtext', {
            y: 100,
            duration: 2.5,
            ease: 'power4.inOut'
        });
        gsap.to('.animtext', {
            y: 0,
            duration: 2.5,
            ease: 'power4.inOut'
        });
        gsap.from('.teabutton', {
            y: 100,
            duration: 2.5,
            ease: 'power4.inOut'
        });
        gsap.to('.teabutton', {
            y: 0,
            duration: 2.5,
            ease: 'power4.inOut'
        });
    }, []);

    useEffect(() => {
        if (boxVisible) {
            const interval = setInterval(() => {
                setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [boxVisible]);

    function handleMouseMove(e) {
        const rect = e.currentTarget.getBoundingClientRect();
        setBoxPosition({
            x: e.clientX - rect.left, 
            y: e.clientY - rect.top 
        });
        setBoxVisible(true); 

        if (boxRef.current) {
            boxRef.current.style.left = `${e.clientX - 50}px`; 
            boxRef.current.style.top = `${e.clientY - 50}px`; 
        }
    }

    function handleMouseLeave() {
        setBoxVisible(false); 
    }

    return (
        <div className='w-full h-screen resheight relative'>
            <div className="text">
                <div className="maintext w-full pt-16">
                    <div className="overflow-y-hidden h-fit relative">
                        <h1 className='text-zinc-400 animtext text-[8vw] tracking-tighter capitalize text-center font-[500] normal'>
                            Building <u
                                className='text-white relative'
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                                style={{
                                    display: 'inline-block'
                                }}
                            >
                                <i>experiences</i>
                            </u>
                        </h1>
                    </div>
                    <div className="overflow-y-hidden h-fit">
                        <h1 className='text-zinc-400 animtext text-[8vw] tracking-tighter capitalize text-center font-[500] normal'>
                            with passion blending
                        </h1>
                    </div>
                    <div className="overflow-y-hidden h-fit">
                        <h1 className='animtext text-[8vw] flex items-center justify-center tracking-tighter italic text-white capitalize text-center font-[500] normal'>
                            <img className='animeimg w-[5.5vw]' src={circle} alt="" />creativity.
                        </h1>
                    </div>
                    <div className="buttons btnner text-white justify-center pt-9 flex items-center overflow-y-hidden">
                        <button
                            type="submit"
                            className="flex teabutton justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-zinc-950 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group text-black"
                        >
                            Explore Projects
                            <svg
                                className="w-8 h-8 svgres justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                                viewBox="0 0 16 19"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                                    className="fill-gray-800 group-hover:fill-gray-800"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {boxVisible && (
                <div
                    ref={boxRef}
                    className="box absolute w-[23vw] h-[50vh] bg-white rounded-lg"
                    style={{
                        zIndex: 1000,
                        pointerEvents: 'none',
                        transition: 'left 0.3s linear, top 0.3s linear',
                        backgroundImage: `url(${images[currentImageIndex]})`, 
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                ></div>
            )}
        </div>
    );
}

export default Hero;
