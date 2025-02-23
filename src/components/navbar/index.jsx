'use client';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from '@heroui/react';
import { useEffect, useState } from 'react';
import { FiMoon } from 'react-icons/fi';
import { FaMoon } from 'react-icons/fa';

export default function App() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    return (
        <div className="">
            <Navbar className="grid grid-flow-col md:flex md:flex-col shadow-sm">
                <NavbarBrand>
                    <p className="font-bold text-inherit">MATHEUS TEODORO</p>
                </NavbarBrand>

                <NavbarContent className="hidden sm:flex gap-4 md:flex-row sm:flex-col" justify="center">
                    <NavbarItem>
                        <Link className=" dark:text-white" href="#">
                            Projects
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <Link className=" dark:text-white" aria-current="page" href="#">
                            Experience
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className=" dark:text-white" color="foreground" href="#">
                            Social Medias
                        </Link>
                    </NavbarItem>
                </NavbarContent>

                <NavbarContent justify="end">
                    <NavbarItem className="hidden lg:flex">
                        <Link className=" dark:text-white" href="#"></Link>
                    </NavbarItem>
                    <NavbarItem className=" w-3/4 flex justify-between items-center gap-2 md:gap-0">
                        <Button
                            className=" dark:text-white dark:bg-transparent border-1.5"
                            as={Link}
                            color="primary"
                            href="#"
                            variant="flat"
                        >
                            Contact Me
                        </Button>

                        {theme === 'dark' ? (
                            <FaMoon onClick={toggleTheme} className="bg-white-700 text-2xl hover:cursor-pointer" />
                        ) : (
                            <FiMoon onClick={toggleTheme} className="s text-2xl hover:cursor-pointer" />
                        )}
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </div>
    );
}
