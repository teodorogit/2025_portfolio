import React from 'react';
import Image from 'next/image';
import Computer from '../../../public/projects.svg';
import twlio_python from '../../../public/python_twlio.png';

const page = () => {
    return (
        <div className="flex justify-center">
            <Image src={Computer} alt="computer" className="w-96" />
            <div>
                <h2>Projects with Python</h2>
                <Image src={twlio_python} alt="image from whatsapp conversation" />
            </div>
        </div>
    );
};

export default page;
