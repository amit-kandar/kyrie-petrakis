import React from 'react';
import { WHYUS_BG } from '../config/constant';

function WhyUs() {
    return (
        <section className='bg-gray-600 w-full flex flex-col items-center px-5 py-10'>
            <div className='w-full flex flex-col items-center justify-center'>
                <div className='w-full flex flex-col items-center justify-center gap-2 mb-5'>
                    <h1 className='text-2xl text-white font-semibold'>Why choose us?</h1>
                    <span className='text-sm text-gray-300 opacity-70 text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, eos!</span>
                </div>
                <div className='w-full flex flex-col gap-5 lg:flex-row'>
                    <div className='w-full h-64 sm:h-72 md:h-80 xl:h-96 mb-5'>
                        <img src={WHYUS_BG} alt="why us background" className='w-full h-full bg-cover bg-center' />
                    </div>
                    <div className='w-full flex flex-col gap-5 md:flex-row lg:flex-col lg:justify-start lg:gap-6 xl:gap-[72px]'>
                        <div className='w-full flex flex-row gap-5'>
                            <div className='h-full flex justify-start items-start'>
                                <div className='w-20 h-20 rounded-ss-3xl rounded-ee-3xl flex justify-center items-center bg-gray-900'>
                                    <span className='text-xl font-semibold text-white'>1</span>
                                </div>
                            </div>
                            <div className='w-full flex flex-col justify-center-center gap-3'>
                                <h1 className='text-xl text-white font-bold'>Comprehensive Services</h1>
                                <p className='text-sm text-gray-200 font-medium opacity-60 tracking-wide'>
                                    Access a wide range of legal
                                    services, from contract reviews
                                    to trademark filings.
                                </p>
                            </div>
                        </div>
                        <div className='w-full flex flex-row gap-5'>
                            <div className='h-full flex justify-start items-start'>
                                <div className='w-20 h-20 rounded-ss-3xl rounded-ee-3xl flex justify-center items-center bg-gray-900'>
                                    <span className='text-xl font-semibold text-white'>2</span>
                                </div>
                            </div>
                            <div className='w-full flex flex-col justify-center-center gap-3'>
                                <h1 className='text-xl text-white font-bold'>Cost-Effective Solutions</h1>
                                <p className='text-sm text-gray-200 font-medium opacity-60 tracking-wide'>
                                    Save money with transparent
                                    pricing and subscription plans
                                    tailored to your needs.
                                </p>
                            </div>
                        </div>
                        <div className='w-full flex flex-row gap-5'>
                            <div className='h-full flex justify-start items-start'>
                                <div className='w-20 h-20 rounded-ss-3xl rounded-ee-3xl flex justify-center items-center bg-gray-900'>
                                    <span className='text-xl font-semibold text-white'>3</span>
                                </div>
                            </div>
                            <div className='w-full flex flex-col justify-center-center gap-3'>
                                <h1 className='text-xl text-white font-bold'>Expert Guidance</h1>
                                <p className='text-sm text-gray-200 font-medium opacity-60 tracking-wide'>
                                    Receive professional advice
                                    from legal experts with
                                    extensive experience in various
                                    domains.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyUs