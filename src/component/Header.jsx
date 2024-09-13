import gsap from 'gsap';
import React, { useEffect } from 'react';

const Header = () => {

    useEffect(() => {
        const links = document.querySelectorAll('.nav-item');
        links.forEach(link => {
            const target = link.querySelector('.original-text');
            const newText = link.querySelector('.newtextcpy');

            const tl = gsap.timeline({ paused: true });
            
            tl.to(target, {
                y: -100,
                duration: 0.8,
                ease: 'power2.out'
            })
            .fromTo(newText, 
                { bottom: '-2vw', opacity: 0 },
                { bottom: '0%', opacity: 1, duration: 0.8, ease: 'power2.out' },
                "-=0.8"
            );

            link.timeline = tl;
        });
    }, []);

    const handleMouseEnter = (e) => {
        const link = e.currentTarget;
        if (link.timeline) {
            link.timeline.timeScale(1).play(); 
        }
    };

    const handleMouseLeave = (e) => {
        const link = e.currentTarget;
        if (link.timeline) {
            link.timeline.timeScale(1.5).reverse(); 
        }
    };
    useEffect(()=>{
        gsap.from('.anitext',{
            y: 100,
            duration: 2,
            ease: 'power4.inOut'
        })
        gsap.from('.pointer',{
            y: 100,
            duration: 2,
            ease: 'power4.inOut'
        })
        gsap.to('.pointer',{
            y: 0,
            duration: 2,
            ease: 'power4.inOut'
        })
        gsap.from('.line',{
            x: 100,
            duration: 2,
            ease: 'power4.inOut'
        })
        gsap.to('.line',{
            x: 0,
            duration: 2,
            ease: 'power4.inOut'
        })
        gsap.from('.myfont',{
            y: 100,
            duration: 2,
            ease: 'power4.inOut'
        })
        gsap.to('.myfont',{
            y: 0,
            duration: 2,
            ease: 'power4.inOut'
        })
        gsap.to('.anitext',{
            y: 0,
            duration: 2,
            ease: 'power4.inOut'
        })
    },[])
    return (
        <div className='w-full text-white sticky top-0 bg-[#07070746] backdrop-blur-[5px] flex items-center justify-between pr-4 pl-4 pt-2 h-[10vh] z-[90000]' >
            <div className="logo flex items-center gap-2 overflow-y-hidden">
                <div className="w-[5vh] h-[5vh] rounded-3xl bg-zinc-300 mycircle pointer"></div>
                <h1 className='myFontHeading anitext font-[500] text-zinc-400'>Mankirat Singh</h1>
            </div>
            <div className="navlinks flex items-center gap-5 ">
                {['Skills', 'Project'].map((item, idx) => (
                    <div className="overflow-hidden relative nav-item" key={idx}
                         onMouseEnter={handleMouseEnter}
                         onMouseLeave={handleMouseLeave}>
                        <h1 className='text-zinc-400 queritext myfont cursor-pointer original-text'>
                            {item}
                        </h1>
                        <h1 className='text-zinc-400 queritext newtextcpy cursor-pointer absolute bottom-[-2vw]'>
                            {item}
                        </h1>
                    </div>
                ))}
            <div className="menu">
                <div className="flex gap-1 flex-col line">
                    <div className="w-[2vw] h-[.2vh] bg-white"></div>
                    <div className="w-[2vw] h-[.2vh] bg-white"></div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Header;
