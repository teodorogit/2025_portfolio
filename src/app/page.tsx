import React from 'react';
import Projects from '../components/Projects/index';
import Formulario from '../components/Formulario';

const page = () => {
    return (
        <div className="flex flex-col  md:flex-row px-12 mt-24 ">
            <Projects />
            <Formulario />
        </div>
    );
};

export default page;
