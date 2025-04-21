"use client";
import { use, useEffect, useState } from "react";
import { useMotionValue, animate, useMotionTemplate, motion } from "framer-motion";
import Image from "next/image";
import Profile from "../../app/assets/profile.jpg";

const colors_top = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C" ]

export const Hero = () => {
    const color = useMotionValue(colors_top[0]);

    useEffect(() => {
        animate(color, colors_top, {
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
        });
    }, []);  
    
    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`
    const border = useMotionTemplate`1px solid ${color}`
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`
    
    return (
        <motion.section
        style={{ backgroundImage}}
        className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-gray-200">
            <div className="flex flex-col items-center">
                <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm" >
                    Open for Internship.
                </span>
                <h1 className="mt-4 text-5xl font-bold leading-tight text-center max-sm:text-3xl text-white/90">
                    Hi, I’m 
                </h1>
                <h1 className="mt-4 text-5xl font-bold leading-tight text-center max-sm:text-3xl">
                    Emamul Arefin Islam 
                </h1>
                <Image
                        src={Profile}
                        alt="profile"
                        width={300}
                        className="rounded-full object-center mt-8 border-2 border-white/20 shadow-lg shadow-gray-900/50"
                         
                    />

            </div>

            <div className="bg-cicle-container">

                <div className="bg-circle-background"></div>
                <div className="bg-circle"></div>
            </div>
            
        </motion.section>
    );
}