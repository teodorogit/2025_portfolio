'use client';
import React, { useState } from 'react';

export default function Home() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await fetch('https://send.api.mailtrap.io/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        });

        if (response.ok) {
            setStatus('Email enviado com sucesso!');
            setName('');
            setEmail('');
            setMessage('');
        } else {
            setStatus('Erro ao enviar email.');
        }
    };

    return (
        <form className="p-6 rounded-lg shadow-md md:w-1/2 w-auto sm:mt-24" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
            <label className="block mb-2">
                Name:
                <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </label>
            <label className="block mb-2">
                E-mail:
                <input
                    type="email"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </label>
            <label className="block mb-2">
                Message:
                <textarea
                    className="w-full px-3 py-2 border h rounded-md focus:outline-none min-h-20 max-h-48"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
            </label>
            <button
                type="submit"
                className="w-1/2 bg-green-100 shadow-sm text-black px-4 py-2 rounded-md hover:bg-green-300"
            >
                Save
            </button>
            {status && <p className="mt-4 text-center">{status}</p>}
        </form>
    );
}
