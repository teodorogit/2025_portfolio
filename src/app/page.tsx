import './globals.css';
import Image from 'next/image';
import Fundo from '../../public/bg-professor.png';
import Formulario from '../components/Formulario';
import Footer from '../components/footer';
import Writtens from '../components/Writtens';

export default function Home() {
    return (
        <>
            <div className="flex flex-col items-center justify-evenly py-16 gap-9 bg-yellow-200 rounded-xl md:flex-row md:bg-transparent  over">
                <div className="md:flex flex-col justify-center items-center">
                    <div className="flex w-auto px-6 md:px-0 md:w-96 ">
                        <Image src={Fundo} alt="Computar with a main side by side" />
                    </div>
                    <div
                        className="flex flex-col items-center gap-6 justify-center w-auto   
                 px-8 py-16 "
                    >
                        <h2 className="text-lime-800 md:text-3xl">
                            Working with Python, but also experient with React JS
                        </h2>
                        <p className="md:text-2xl">
                            As a Python developer, my experiences include training in Azure AI, working with OCR,
                            Pandas, and data management.
                        </p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
