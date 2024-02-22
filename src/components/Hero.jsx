import React from 'react';
import { HERO_BG_IMG } from '../config/constant'

function Hero() {
    return (
        <section className='relative min-h-screen flex px-5 md:px-10'>
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${HERO_BG_IMG})` }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className='h-full z-10 flex flex-col justify-center items-center px-5 mt-36'>
                <div className='w-full text-white text-left' >
                    <h2 className='text-4xl font-semibold md:text-4xl lg:text-6xl'>
                        Your LegalBuddy
                    </h2>
                </div>
                <p className='text-left text-lg leading-7 text-zinc-300 mt-4'>
                    Your LegalBuddy is a comprehensive legal services platform designed to make
                    legal assistance easily accessible. Whether you need help with contracts,
                    intellectual property, or any other legal matters, we're here to provide expert
                    guidance.
                </p>
                <div className='w-full self-start mt-10 bg-transparent cursor-pointer '>
                    <button className='px-10 py-3 rounded-full lg:text-xl text-white border-2 border-stone-200 hover:scale-125 duration-200 hover:bg-slate-900'>Consult Now</button>
                </div>
            </div>

        </section>
    )
}

export default Hero