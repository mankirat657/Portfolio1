import gsap from 'gsap';
import React, { useEffect } from 'react';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    useEffect(() => {
        const allH1 = document.querySelectorAll('.mydiv h1');
        allH1.forEach((elem) => {
            let clutter = "";
            const h1Text = elem.textContent;
            const splittedText = h1Text.split("");
            splittedText.forEach((e) => {
                clutter += `<span>${e}</span>`;
            });
            elem.innerHTML = clutter;
        });

        gsap.utils.toArray('.mydiv h1').forEach((line, index) => {
            gsap.fromTo(
                line.querySelectorAll('span'),
                { color: '#000' },
                {
                    color: '#fff',
                    stagger: 0.05,
                    scrollTrigger: {
                        trigger: line,
                        scroller: 'body',
                        start: 'top 75%',
                        end: 'top 50%',
                        scrub: 2,
                    }
                }
            );
        });
    }, []);

    return (
        <div className='w-full text-6xl  font-[500] min-h-screen text-white py-24 text-center flex justify-center'>
            <div className="mydiv textersttingh aboutresp text-zinc-600">
                <h1>I am Mankirat Singh, currently</h1>
                <h1>in the 5th semester of my BCA</h1>
                <h1>program at Guru Gobind Singh</h1>
                <h1>Indraprastha University. I am</h1>
                <h1>currently learning backend</h1>
                <h1>development and excel in</h1>
                <h1>frontend technologies such as</h1>
                <h1>React.js, HTML, CSS, and</h1>
                <h1>Tailwind CSS. I have completed</h1>
                <h1>numerous projects and actively</h1>
                <h1>participate in network building</h1>
                <h1>and collaborative efforts. I have</h1>
                <h1>also collaborated on two major</h1>
                <h1>projects and am the overall</h1>
                <h1>topper of my college.</h1>
            </div>
        </div>
    );
};

export default About;
