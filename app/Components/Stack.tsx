import { color } from 'framer-motion';
import React from 'react';
import { FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiNestjs, SiPostgresql  } from 'react-icons/si';

const stackIcons = [
    { id: 1,  name: 'React', icon: FaReact , color: '#61DBFB' },
    { id: 2,  name: 'Next.js', icon: SiNextdotjs , color: '#000000' },
    { id: 3,  name: 'Tailwind CSS', icon: SiTailwindcss , color: '#06B6D4' },
    { id: 4,  name: 'TypeScript', icon: SiTypescript , color: '#007ACC' },
    { id: 5,  name: 'Nest.js', icon: SiNestjs , color: '#E0234E' },
    { id: 6,  name: 'PostgreSQL', icon: SiPostgresql , color: '#336791' },
]
export const Stack = () => {
    return (
        <div className='bg-black/90 w-full'>
        <section className='py-16 glass'>
            <div className='max-w-[1200px] mx-auto px-4 text-center'>
                <h2 className='text-5xl font-bold text-gray-200 mb-4'>My Stack</h2>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2'>
                    {stackIcons.map((icon) => (
                        <div key={icon.id} className='flex flex-col items-center justify-center rounded-xl p-4'>
                            <div className='mb-4 bg-white/10 p-6 rounded-2xl'>
                                {React.createElement(icon.icon , {
                                    className: 'w-32 h-32',
                                    style : { color: icon.color },

                                })}
                            </div>
                            <p className=' font-semibold text-gray-200'>{icon.name}</p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
        </div>
    );
}