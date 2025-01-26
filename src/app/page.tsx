import './globals.css';
import Image from 'next/image';
import Fundo from '../../public/bg-professor.png';
import Formulario from '../components/Formulario';
import Footer from '../components/footer';
import Writtens from '../components/Writtens';
import img_linkedin from '../../public/linkedin.png';
import { Accordion, AccordionItem } from '@heroui/react';
import { Popover, PopoverTrigger, PopoverContent, Button } from '@heroui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@heroui/card';

export default function Home() {
    return (
        <>
            <div className="flex flex-col items-center justify-evenly py-16 gap-9  rounded-xl md:flex-row md:bg-transparent  over">
                <div className="md:flex flex-col justify-center items-center">
                    <div className="flex flex-col md:grid grid-cols-2 items-center justify-between  ">
                        <div className="flex flex-col md:justify-center md:items-center gap-12">
                            <Image src={img_linkedin} alt="qr_code image" className="w-screen md:w-1/4" />
                            <Popover placement="right">
                                <PopoverTrigger>
                                    <Button className="bg-blue-300 w-60">Details</Button>
                                </PopoverTrigger>
                                <PopoverContent>
                                    <div className="px-1 py-2">
                                        <div className="text-small font-bold">My LinkedIn</div>
                                        <div className="text-tiny">This QR Code takes you to my LinkedIn profile</div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div className="px-4 py-6 md:px-0 flex flex-col md:gap-6">
                            <h2 className="text-lime-800 md:text-3xl">
                                Working with Python, but also experient with React JS
                            </h2>
                            <p className="md:text-2xl md:w-1/2">
                                As a Python developer, my experiences include training in Azure AI, working with OCR,
                                Pandas, and data management.
                            </p>
                        </div>
                    </div>
                </div>
                {/* <Footer /> */}
            </div>
        </>
    );
}
