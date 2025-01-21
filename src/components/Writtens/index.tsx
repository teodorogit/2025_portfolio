import React from 'react';

interface PropsType {
    title: string;
    background: string;
}

const Index: React.FC<PropsType> = ({ title, background }) => {
    return (
        <div className="flex flex-col shadow-sm shadow-stone-200 gap-4 text-center items-center justify-around py-6 px-6">
            <h4 className="">{title}</h4>
            <div className="flex items-center">
                <button
                    className={`${background} px-3 w-40 rounded-sm text-stone-100 transition hover:bg-white hover:text-black hover:border-black hover:shadow-sm`}
                >
                    Read
                </button>
            </div>
        </div>
    );
};

export default Index;
