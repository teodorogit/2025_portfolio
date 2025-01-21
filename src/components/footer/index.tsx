'use client';
import React from 'react';
import emailjs from '@emailjs/browser';

const index = () => {
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        emailjs.sendForm('your_service_id', 'your_template_id', e.currentTarget, 'your_user_id').then(
            (result) => console.log(result.text),
            (error) => console.log(error.text)
        );
    };

    return (
        <div className="flex  items-center justify-center overflow-hidden">
            <form onSubmit={sendEmail} className="w-full max-w-md p-6 bg-white rounded-lg shadow-md space-y-4 mx-4">
                <h2 className="text-2xl font-semibold text-center text-gray-800">Contact Me</h2>

                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400"
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400"
                    required
                />

                <textarea
                    name="message"
                    placeholder="Your Message"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 resize-none"
                    rows={5}
                    required
                ></textarea>

                <button
                    type="submit"
                    className="w-full py-3 text-black bg-lime-200 rounded-lg hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-400"
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default index;
