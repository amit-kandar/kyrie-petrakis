import React from 'react';
import { COMPANY_NAME, HERO_BG_IMG, HERO_BG_IMG1, HERO_BG_IMG2, HERO_BG_IMG3, HERO_BG_IMG4 } from '../config/constant'
import { Link } from 'react-router-dom';
import Carousel from 'nuka-carousel';

function Hero() {
    const bg_img = [
        HERO_BG_IMG,
        HERO_BG_IMG1,
        HERO_BG_IMG2,
        HERO_BG_IMG3,
        HERO_BG_IMG4
    ]
    return (
        <section className='relative min-h-screen flex p-5 md:p-10'>
            <div className="absolute inset-0 w-full h-full">
                <Carousel autoplay autoplayInterval={3000} slidesToScroll={1} wrapAround={true} withoutControls>
                    {
                        bg_img.map((item, index) => {
                            return (
                                <img src={item} key={index} alt="hero background" className='w-full min-h-screen bg-cover bg-center object-cover bg-no-repeat' />
                            )
                        })
                    }
                </Carousel>
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className='max-w-7xl h-full z-10 flex flex-col justify-center items-center px-3 sm:px-5 mt-16 md:mt-36'>
                <div className='w-full text-white text-left' >
                    <h2 className='text-4xl font-semibold md:text-4xl lg:text-6xl'>
                        {COMPANY_NAME}
                    </h2>
                </div>
                <p className='text-left text-lg leading-7 text-zinc-300 mt-4'>
                    Kyrie Petrakis is a comprehensive legal services platform designed to make
                    legal assistance easily accessible. Whether you need help with contracts,
                    intellectual property, or any other legal matters, we're here to provide expert
                    guidance.
                </p>
                <Link to="/contact-us" className='w-full self-start mt-10 bg-transparent cursor-pointer '>
                    <button className='px-10 py-3 rounded-full lg:text-xl text-white border-2 border-stone-200 hover:scale-110 duration-200 hover:bg-slate-900'>Consult Now</button>
                </Link>
            </div>

        </section>
    )
}

export default Hero