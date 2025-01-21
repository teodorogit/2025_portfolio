import React from 'react';
import Navbar from '../navbar';
import Phrase from '../Phrase';
import { ThemeProvider } from '../../context/themeContext';
import Writtens from '../Writtens';

const page = () => {
    return (
        <ThemeProvider>
            <main>
                <Navbar />
                <Phrase />
                <div className="flex flex-col md:grid-cols-4 rounded-sm  gap-3 py-3 px-3 justify-evenly">
                    <div className=" flex flex-col gap-8 md:flex-row justify-center items-center">
                        <div className="flex flex-col items-center">
                            <h2>This is my wrritens about tecnologies themes</h2>

                            <p>Please feel free to click and read!</p>
                        </div>

                        <Writtens
                            title="Exaustão mental e suicídio na aréa da tecnologia"
                            background="bg-amber-400 text-black"
                        />
                        <Writtens
                            title="React 19 - Descrição das mudanças na nova versao do react"
                            background="bg-green-700 text-white-300"
                        />
                        <Writtens
                            title="H.O.C Metódo avançado de reutilização de componentes em React JS"
                            background="bg-teal-800 text-white-500"
                        />
                    </div>
                </div>
            </main>
        </ThemeProvider>
    );
};

export default page;
