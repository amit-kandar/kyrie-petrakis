import React from 'react';
import { Link } from 'react-router-dom';
import { INCOME_TAX, GST, CRIMINAL, CIVIL, OTHHERS } from '../config/constant';

function Services() {
    return (
        <section className="relative h-full overflow-hidden my-2 p-5 bg-gray-100">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0 h-60 lg:h-80"
                style={{
                    backgroundImage: "url(https://images.unsplash.com/photo-1587089879249-87bf7d2972df?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                }}
            ></div>

            {/* Card Container */}
            {/* <div className="relative z-10 flex items-center justify-center h-full"> */}
            {/* Example Card */}
            <div className='relative z-10 top-20 lg:top-40 h-full w-full grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-5 mb-24 lg:mb-44'>
                <div className='w-72 sm:w-full h-full border-2 rounded-md p-8 bg-white shadow-lg cursor-pointer duration-200 hover:scale-110'>
                    <div className="w-full flex justify-center mb-3">
                        <img src={INCOME_TAX} alt="income tax" className='w-20 shadow-xl p-3 rounded-md' />
                    </div>
                    <div className='w-full mb-3 text-center'>
                        <h3 className='text-2xl text-black font-medium'>Income Tax</h3>
                    </div>
                    <div className='w-ful px-8'>
                        <ul className='list-disc pl-5 text-black'>
                            <li>E-Filling</li>
                            <li>Cases</li>
                            <li>Accounting</li>
                            <li>Financial Statements</li>
                        </ul>
                    </div>
                    <div className='w-full flex justify-center mt-8'>
                        <Link to="/" className='flex items-center font-medium cursor-pointer text-black duration-200 hover:text-blue-500 hover:scale-110'>
                            <span className='mb-1'>Know More</span>
                            <i className='bx bx-right-arrow-alt text-2xl' ></i>
                        </Link>
                    </div>
                </div>
                <div className='w-72 sm:w-full h-full border-2 rounded-md p-8 bg-white shadow-lg cursor-pointer duration-200 hover:scale-110'>
                    <div className="w-full flex justify-center mb-3">
                        <img src={GST} alt="income tax" className='w-20 shadow-xl p-3 rounded-md' />
                    </div>
                    <div className='w-full mb-3 text-center'>
                        <h3 className='text-2xl text-black font-medium'>GST</h3>
                    </div>
                    <div className='w-ful px-8'>
                        <ul className='list-disc pl-5 text-black'>
                            <li>Monthly or Quarterly Return</li>
                            <li>Reconciliation</li>
                            <li>Accounting</li>
                            <li>Cases</li>
                        </ul>
                    </div>
                    <div className='w-full flex justify-center mt-8'>
                        <Link to="/" className='flex items-center font-medium cursor-pointer text-black duration-200 hover:text-blue-500 hover:scale-110'>
                            <span className='mb-1'>Know More</span>
                            <i className='bx bx-right-arrow-alt text-2xl' ></i>
                        </Link>
                    </div>
                </div>
                <div className='w-72 sm:w-full h-full border-2 rounded-md p-8 bg-white shadow-lg cursor-pointer duration-200 hover:scale-110'>
                    <div className="w-full flex justify-center mb-3">
                        <img src={CRIMINAL} alt="income tax" className='w-20 shadow-xl p-3 rounded-md' />
                    </div>
                    <div className='w-full mb-3 text-center'>
                        <h3 className='text-2xl text-black font-medium'>Criminal</h3>
                    </div>
                    <div className='w-ful px-8'>
                        <ul className='list-disc pl-5 text-black'>
                            <li>Bail Petition</li>
                            <li>NI Act Cases</li>
                            <li>Others</li>
                        </ul>
                    </div>
                    <div className='w-full flex justify-center mt-8'>
                        <Link to="/" className='flex items-center font-medium cursor-pointer text-black duration-200 hover:text-blue-500 hover:scale-110'>
                            <span className='mb-1'>Know More</span>
                            <i className='bx bx-right-arrow-alt text-2xl' ></i>
                        </Link>
                    </div>
                </div>
                <div className='w-72 sm:w-full h-full border-2 rounded-md p-8 bg-white shadow-lg cursor-pointer duration-200 hover:scale-110'>
                    <div className="w-full flex justify-center mb-3">
                        <img src={CIVIL} alt="income tax" className='w-20 shadow-xl p-3 rounded-md' />
                    </div>
                    <div className='w-full mb-3 text-center'>
                        <h3 className='text-2xl text-black font-medium'>Civil</h3>
                    </div>
                    <div className='w-ful px-8'>
                        <ul className='list-disc pl-5 text-black'>
                            <li>Property Registration</li>
                            <li>Property Related Cases</li>
                        </ul>
                    </div>
                    <div className='w-full flex justify-center mt-8'>
                        <Link to="/" className='flex items-center font-medium cursor-pointer text-black duration-200 hover:text-blue-500 hover:scale-110'>
                            <span className='mb-1'>Know More</span>
                            <i className='bx bx-right-arrow-alt text-2xl' ></i>
                        </Link>
                    </div>
                </div>
                <div className='w-72 sm:w-full h-full border-2 rounded-md p-8 bg-white shadow-lg cursor-pointer duration-200 hover:scale-110'>
                    <div className="w-full flex justify-center mb-3">
                        <img src={OTHHERS} alt="income tax" className='w-20 shadow-xl p-3 rounded-md' />
                    </div>
                    <div className='w-full mb-3 text-center'>
                        <h3 className='text-2xl text-black font-medium'>Others</h3>
                    </div>
                    <div className='w-ful px-8'>
                        <ul className='list-disc pl-5 text-black'>
                            <li>Patent and Trade Mark</li>
                            <li>Incorporation of Private Limited</li>
                            <li>Deeds and Agreements</li>
                            <li>Power of Attorney</li>
                            <li>etc</li>
                        </ul>
                    </div>
                    <div className='w-full flex justify-center mt-8'>
                        <Link to="/" className='flex items-center font-medium cursor-pointer text-black duration-200 hover:text-blue-500 hover:scale-110'>
                            <span className='mb-1'>Know More</span>
                            <i className='bx bx-right-arrow-alt text-2xl' ></i>
                        </Link>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </section>
    )
}

export default Services