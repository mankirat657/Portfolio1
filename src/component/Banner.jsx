import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import flower from '../assets/m.svg'
const Banner = () => {
    const bannerRef = useRef(null);

    useEffect(() => {
        const banner = bannerRef.current;
        const bannerWidth = banner.offsetWidth;

        gsap.to(banner, {
            x: `-${bannerWidth}px`,
            duration: 90,
            ease: 'none',
            repeat: -1,
            onRepeat: () => {
                gsap.set(banner, { x: 0 });
            }
        });
    }, []);

    return (
        <div  className='w-screen rounded-tr-3xl rounded-tl-3xl overflow-hidden bg-white text-black flex'>
            <div className="banner flex whitespace-nowrap" ref={bannerRef}>
                <div className="banner-item px-5 flex items-center justify-center">
                    <h1 className='text-[20vw] mr-36 gap-5 tracking-tighter font-extrabold flex items-center'>BEST DEVELOPER <img src={flower} className=' animeimg invert w-[18vw]'  alt="" /></h1>
                </div>
                <div className="banner-item px-5 flex items-center justify-center">
                    <h1 className='text-[20vw] mr-36 gap-5 tracking-tighter font-extrabold flex items-center'>BEST DESIGNER <img src={flower} className=' animeimg invert w-[18vw]'  alt="" /></h1>
                </div>
                <div className="banner-item px-5 flex items-center justify-center">
                    <h1 className='text-[20vw] mr-36 gap-5 tracking-tighter font-extrabold flex items-center'>BEST DEVELOPER <img src={flower} className=' animeimg invert w-[18vw]'  alt="" /></h1>
                </div>
                <div className="banner-item px-5 flex items-center justify-center">
                    <h1 className='text-[20vw] mr-36 gap-5 tracking-tighter font-extrabold flex items-center'>BEST CREATIVE MINDS <img src={flower} className=' animeimg invert w-[18vw]'  alt="" /></h1>
                </div>
                <div className="banner-item px-5 flex items-center justify-center">
                    <h1 className='text-[20vw] mr-36 gap-5 tracking-tighter font-extrabold flex items-center'>BEST LOGIC MINDS <img src={flower} className=' animeimg invert w-[18vw]'  alt="" /></h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;
