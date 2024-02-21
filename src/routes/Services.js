import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
    return (
        <section className='w-full p-10 bg-sky-950'>
            <div className='w-full'>
                <div>
                    <h1 className='text-3xl underline text-white font-semibold font-serif'>Our Services</h1>
                </div>
                <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-5'>
                    <div className='w-full md:w-80 border-2 border-gray-500 rounded-md p-8'>
                        <div className='w-full mb-3'>
                            <h3 className='text-2xl text-white font-medium'>Income Tax</h3>
                        </div>
                        <div>
                            <ul className='list-disc pl-5 text-white'>
                                <li>E-Filling</li>
                                <li>Cases</li>
                                <li>Accounting</li>
                                <li>Financial Statements</li>
                            </ul>
                        </div>
                        <div className='mt-8'>
                            <Link to="/" className='px-10 py-3 border-2 border-gray-400 rounded-md cursor-pointer text-white'>Know More</Link>
                        </div>
                    </div>
                    <div className='w-full md:w-80 border-2 border-gray-500 rounded-md p-8'>
                        <div className='w-full mb-3'>
                            <h3 className='text-2xl text-white font-medium'>GST</h3>
                        </div>
                        <div>
                            <ul className='list-disc pl-5 text-white'>
                                <li>Monthly or Quarterly Return</li>
                                <li>Reconciliation</li>
                                <li>Accounting</li>
                                <li>Cases</li>
                            </ul>
                        </div>
                        <div className='mt-8'>
                            <Link to="/" className='px-10 py-3 border-2 border-gray-400 rounded-md cursor-pointer text-white'>Know More</Link>
                        </div>
                    </div>
                    <div className='w-full md:w-80 border-2 border-gray-500 rounded-md p-8'>
                        <div className='w-full mb-3'>
                            <h3 className='text-2xl text-white font-medium'>Criminal</h3>
                        </div>
                        <div>
                            <ul className='list-disc pl-5 text-white'>
                                <li>Bail Petition</li>
                                <li>NI Act Cases</li>
                                <li>Others</li>
                            </ul>
                        </div>
                        <div className='mt-8'>
                            <Link to="/" className='px-10 py-3 border-2 border-gray-400 rounded-md cursor-pointer text-white'>Know More</Link>
                        </div>
                    </div>
                    <div className='w-full md:w-80 border-2 border-gray-500 rounded-md p-8'>
                        <div className='w-full mb-3'>
                            <h3 className='text-2xl text-white font-medium'>Civil</h3>
                        </div>
                        <div>
                            <ul className='list-disc pl-5 text-white'>
                                <li>Property Registration</li>
                                <li>Property Related Cases</li>
                            </ul>
                        </div>
                        <div className='mt-8'>
                            <Link to="/" className='px-10 py-3 border-2 border-gray-400 rounded-md cursor-pointer text-white'>Know More</Link>
                        </div>
                    </div>
                    <div className='w-full md:w-80 border-2 border-gray-500 rounded-md p-8'>
                        <div className='w-full mb-3'>
                            <h3 className='text-2xl text-white font-medium'>Others</h3>
                        </div>
                        <div>
                            <ul className='list-disc pl-5 text-white'>
                                <li>Patent and Trade Mark</li>
                                <li>Incorporation of Private Limited</li>
                                <li>Deeds and Agreements</li>
                                <li>Power of Attorney</li>
                                <li>etc</li>
                            </ul>
                        </div>
                        <div className='mt-8'>
                            <Link to="/" className='px-10 py-3 border-2 border-gray-400 rounded-md cursor-pointer text-white'>Know More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services