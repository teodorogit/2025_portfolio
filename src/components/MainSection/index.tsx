import React from 'react';
import Fundo_Process from '../../app/../../public/image_process.svg';
import Image from 'next/image';

const index = () => {
    return (
        <div className="md:flex md:px-12 mt-8 gap-12 sm:grid sm:grid-cols-1">
            <div className="flex items-center justify-center">
                <Image src={Fundo_Process} alt="man with ideias" className="w-72 md:w-1/2"></Image>
            </div>
            <div className=" sm:items-center sm:justify-center px-6 md:px-0 md:w-2/4 flex flex-col items-center gap-8">
                <h2>Welcome! Here's a Little About Me</h2>
                <p className=" font-nunito text-slate-800 text-xl dark:text-neutral-200">
                    Hi there! I'm a <span className="text-green-700">Front-End Developer</span>, 22 years old, with a
                    year of hands-on experience in creating dynamic, responsive websites and applications. From an early
                    age, I’ve been fascinated by the intersection of design and technology, and that’s what led me to
                    pursue a career in front-end development. I’ve spent the last year diving deep into technologies
                    like React, Tailwind, HeroUI and NextJS,
                </p>
                <p className=" font-nunito text-slate-800 text-xl dark:text-neutral-200">
                    I'm driven by the idea of <span className="text-green-700">making the web a more beautiful</span>{' '}
                    and intuitive place, and I love solving problems to create seamless user experiences. I believe in
                    continuous learning and always staying curious, which keeps me motivated to explore new tools and
                    techniques.
                </p>
            </div>
        </div>
    );
};

export default index;
