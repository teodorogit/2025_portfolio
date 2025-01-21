import React from 'react';
import IconTheme from '../iconTheme';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa6';
import { CiLinkedin } from 'react-icons/ci';
import { FaTiktok } from 'react-icons/fa';
import { LuHouse } from 'react-icons/lu';

const index = () => {
    return (
        <nav className=" mb-2 py-2 shadow-md flex   md:flex-row items-center justify-between  md:gap-3 px-2 md:px-10  md:shadow-none">
            <p className="text-transparent fixed md:text-black md:relative">Matheus Teodoro</p>
            <div
                className=" justify-evenly  w-screen relative  md:bg-gradient-to-t from-green-400 to-blue-300 h-auto flex   md:w-24
             md:flex-col  md:fixed  md:bottom-1/3 left-0  md:gap-24  md:items-center  md:justify-center  md:py-28   md:rounded-tr-full  md:rounded-br-full"
            >
                <Link href="/">
                    <LuHouse className="text-2xl transition hover:text-yellow-700 md:hover:text-white  " />
                </Link>
                <Link href="projects">
                    <FaTiktok className="text-2xl transition hover:text-yellow-700 md:hover:text-white" />
                </Link>

                <Link href="https://www.linkedin.com/in/matheus-teodoro-a901211ba/" target="_blank">
                    <CiLinkedin className="text-3xl transition hover:text-yellow-700 md:hover:text-white" />
                </Link>
                <Link href="https://github.com/teodorogit?tab=repositories" target="_blank">
                    <FaGithub className="text-2xl transition hover:text-yellow-700 md:hover:text-white" />
                </Link>
            </div>
            <IconTheme />
        </nav>
    );
};

export default index;
