import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import FixedHomeContent from '../components/FixedHomeContent/page';
import { ReactNode } from 'react';
// import '@fontsource/inter/variable.css';

interface LayoutProps {
    children: ReactNode;
}
const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Portfolio Matheus',
    description: 'Self portfolio ',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <FixedHomeContent />
                {children}
            </body>
        </html>
    );
}
