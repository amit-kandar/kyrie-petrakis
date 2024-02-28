import React from 'react';
import { ABOUT_BG } from '../config/constant';
import { Link } from 'react-router-dom';

function AboutUs() {
    return (
        <section className='w-full px-5 py-16 bg-gray-800'>
            <div className='w-full flex flex-col items-center justify-center gap-10'>
                <div className="container">
                    <div className='w-full flex flex-col justify-center items-center md:items-start gap-5 lg:gap-12 md:flex-row'>
                        <div className='w-full h-60 sm:w-[600px] sm:h-72 md:min-w-[400px] lg:min-w-[600px] lg:min-h-72 xl:min-w-[700px] xl:min-h-96'>
                            <img src={ABOUT_BG} alt="about us" className='w-full h-full bg-cover bg-center mix-blend-lighten' />
                        </div>
                        <div className='w-full flex flex-col justify-center items-center md:items-start'>
                            <div className='mb-1 text-white'>
                                <h1 className='text-3xl font-semibold'>About Us</h1>
                            </div>
                            <div className='mb-3 text-gray-100 opacity-60'>
                                <span className='text-sm'>Sample Sub-Headline</span>
                            </div>
                            <div className='text-center mb-8 md:text-left lg:max-w-[500px]'>
                                <p className='text-white text-base font-light'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aliquid, dicta officiis ex repudiandae nulla a id voluptatem! Rerum repellendus sed asperiores optio illo. Ad a ab maxime distinctio obcaecati assumenda veritatis ipsa quam doloremque, quasi praesentium facilis consectetur ratione earum laboriosam asperiores nihil eum mollitia? Amet, aliquam obcaecati. Repellat?
                                </p>
                            </div>
                            <div className='w-full flex justify-center md:justify-start'>
                                <Link to="/about-us" className='px-8 py-3 text-white border border-gray-200 rounded-md cursor-pointer duration-200 hover:bg-gray-500 hover:scale-110'>Learn More</Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex justify-center items-center gap-5 flex-wrap'>
                        <div className='w-full mb-10 flex justify-center items-center md:justify-center text-white'>
                            <h1 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>How we Work?</h1>
                        </div>
                        <div className='w-full h-40 flex-1 min-w-[240px] max-w-96 p-5 rounded-md bg-slate-700'>
                            <div className='mb-3'>
                                <h4 className='text-xl text-white'>1. Legal Consultation</h4>
                            </div>
                            <p className='text-gray-400 text-sm'>
                                Connect with experienced
                                lawyers for expert advice
                                and guidance regarding
                                your legal needs.

                            </p>
                        </div>
                        <div className='w-full h-40 flex-1 min-w-[240px] max-w-96 p-5 rounded-md bg-slate-700'>
                            <div className='mb-3'>
                                <h4 className='text-xl text-white'>2. Document Preparation</h4>
                            </div>
                            <p className='text-gray-400 text-sm'>
                                Efficiently draft and
                                customize legal
                                documents with the
                                assistance of our
                                knowledgeable team.
                            </p>
                        </div>
                        <div className='w-full h-40 flex-1 min-w-[240px] max-w-96 p-5 rounded-md bg-slate-700'>
                            <div className='mb-3'>
                                <h4 className='text-xl text-white'>3. Case Management</h4>
                            </div>
                            <p className='text-gray-400 text-sm'>
                                Keep track of your cases,
                                appointments, and
                                important documents
                                within our secure platform.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs