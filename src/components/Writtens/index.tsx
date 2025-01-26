import React from 'react';

interface PropsType {
    title: string;
    background: string;
    isActive: boolean;
}

const Index: React.FC<PropsType> = ({ title, background, isActive }) => {
    return (
        <div className="flex flex-col gap-4 text-center items-center justify-around py-6 px-6 md:h-24">
            <h4 className="font-montserrat">{title}</h4>
            <div className="flex items-center">
                {isActive && (
                    <button
                        className={`${background} px-3 w-40 rounded-sm text-stone-100 transition hover:bg-white hover:text-black hover:border-black hover:shadow-sm`}
                    >
                        Read
                    </button>
                )}
            </div>
        </div>
    );
};

export default Index;
