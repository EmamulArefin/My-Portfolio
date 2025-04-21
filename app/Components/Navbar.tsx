"use client";
import React , { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const navLinks = [
    {title: "About", path: "#about"},
    {title: "Portfolio", path: "#portfolio"},
    {title: "Stack", path: "#stack"},
    {title: "Contact", path: "#Contact"}
]

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleClose = () => {
        setIsOpen(false);
    };
    return (
        <div className="z-50 fixed  flex justify-center w-full bg-white font-bold">
            <div className="border border-white/20 mt-8 backdrop-blur-3xl rounded-3xl
                hidden md:flex items-center justify-center p-2 max-w-400 mx-auto">
                <ul className="flex flex-row p-2 space-x-8">
                    {navLinks.map((link, index) => (
                        <li key={index} className="text-gray-800 hover:text-gray-600 transition duration-300">
                            <Link href={link.path} className="transform hover:text-white/50 transition-all duration-300 ease-in-out">
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div onClick={handleToggle} className="md:hidden absolute right-14 top-5 border rounded  text-white/70 border-white/70 p-2 z-50">
                {isOpen ? <AiOutlineClose size={50} /> : <AiOutlineMenu size={50} />}
            </div>
            <div className={`fixed top-0 right-0 w-1/4 h-full bg-black/90 backdrop-blur-lg p-4 transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}>
                <ul className="flex flex-col items-center justify-center h-full space-y-8">
                    {navLinks.map((link, index) => (
                        <li key={index} className="text-gray-800 hover:text-gray-600 transition duration-300">
                            <Link href={link.path} onClick={handleClose} className="transform hover:text-white/50 transition-all duration-300 ease-in-out">
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}