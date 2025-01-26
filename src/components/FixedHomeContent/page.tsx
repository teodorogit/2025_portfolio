'use client';

import React, { useState } from 'react';
import Navbar from '../navbar';
import Phrase from '../Phrase';
import { ThemeProvider } from '../../context/themeContext';
import Writtens from '../Writtens';
import Image from 'next/image';
import img_matheus from '../../../public/matheus.png';
import { Button, ButtonGroup } from '@heroui/button';
import { Card, CardHeader, CardBody, CardFooter } from '@heroui/card';
import { Input } from '@heroui/input';
import { IoSearchOutline } from 'react-icons/io5';

interface Project {
    id: number;
    name: string;
    description: string;
}

const projects: Project[] = [
    { id: 1, name: 'Python Automation', description: 'Automate tasks using Python.' },
    { id: 2, name: 'React Dashboard', description: 'Build a dashboard with React.' },
    { id: 3, name: 'Tailwind CSS Website', description: 'Create a responsive website.' },
];

const page = () => {
    const [search, setSearch] = useState<string>('');

    const filteredProjects = projects.filter((project) => project.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <ThemeProvider>
            <main>
                <Navbar />
                <Phrase />
                <section className="grid grid-cols-1 md:flex justify-around gap-8 mb-16 md:mb-28">
                    <div className="flex items-center justify-end text-center ">
                        <h2 className="font-montserrat text-2xl md:text-4xl">
                            I am a <span className="text-amber-400">Python developer</span> with 1 year of experience
                        </h2>
                    </div>
                    <div className="flex justify-center">
                        <Image src={img_matheus} alt="image of myself" className="w-96 rounded-full" />
                    </div>
                </section>{' '}
                <section className="flex flex-col mb-32 justify-center gap-20">
                    <div className="grid grid-cols-1 md:flex items-center">
                        <h1 className="w-screen text-center text-3xl ">This section is about PROJECTS</h1>
                        <div className="flex w-screen flex-wrap md:flex-nowrap gap-4 relative">
                            <Input
                                label="Project Name"
                                placeholder="Ex: projects with python"
                                type="email"
                                className="md:w-1/2"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <IoSearchOutline className="absolute right-2 md:right-1/2 mx-3 my-6" />
                        </div>
                    </div>
                    <div className="flex  lg:grid-cols-3 gap-4 w-screen items-center justify-center">
                        {filteredProjects.length > 0 && search != '' ? (
                            filteredProjects.map((project) => (
                                <div
                                    key={project.id}
                                    className="p-4 border border-gray-300 rounded-lg shadow hover:shadow-lg transition"
                                >
                                    <h3 className="font-bold text-lg">{project.name}</h3>
                                    <p className="text-gray-600">{project.description}</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500 text-center">
                                If the project exist, it will appear here when you type something.
                            </p>
                        )}
                    </div>
                </section>{' '}
                <div className="flex  items-cente rounded-sm  gap-3 py-3 px-3 justify-evenly">
                    <div className="flex flex-col md:grid grid-cols-2 gap-8 md:flex-row justify-center items-center">
                        <div className="flex flex-col items-center">
                            <Card>
                                <CardBody>
                                    <Writtens
                                        title="This is my wrritens about tecnologies themes
                                        Please feel free to click and read!"
                                        background="bg-amber-400 text-black"
                                    />
                                </CardBody>
                            </Card>
                        </div>{' '}
                        <Card>
                            <CardBody>
                                <Writtens
                                    title="Exaustão mental e suicídio na aréa da tecnologia"
                                    isActive
                                    background="bg-amber-400 text-black"
                                />{' '}
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                <Writtens
                                    title="React 19 - Descrição das mudanças na nova versao do react"
                                    isActive
                                    background="bg-green-700 text-white-300"
                                />
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                <Writtens
                                    title="H.O.C Metódo avançado de reutilização de componentes em React JS"
                                    isActive
                                    background="bg-teal-800 text-white-500"
                                />{' '}
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </main>
        </ThemeProvider>
    );
};

export default page;
