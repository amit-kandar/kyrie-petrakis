import React from 'react';
import { Link } from 'react-router-dom';
import { LOGO1, COMPANY_NAME } from '../config/constant';

function Footer() {
    return (
        <footer className='w-full py-10 px-5 bg-slate-800'>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5'>
                <div className='w-full'>
                    <div className='w-20 h-20 rounded-full mb-3'>
                        <img src={LOGO1} alt="logo" className='w-full h-full rounded-full' />
                    </div>
                    <h2 className='text-xl text-white font-bold tracking-widest mb-2' >{COMPANY_NAME}</h2>
                    <span className='text-base tracking-wider text-neutral-100 opacity-75'>Navigating the Complexities of Law</span>
                </div>
                <div className='w-full'>
                    <h1 className='text-2xl text-white font-bold tracking-wider mb-3' >Services</h1>
                    <div className='w-full flex flex-col gap-2'>
                        <Link to="/" className='text-base tracking-normal text-neutral-100 opacity-75'>Income Tax</Link>
                        <Link to="/" className='text-base tracking-normal text-neutral-100 opacity-75'>GST</Link>
                        <Link to="/" className='text-base tracking-normal text-neutral-100 opacity-75'>Criminal</Link>
                        <Link to="/" className='text-base tracking-normal text-neutral-100 opacity-75'>Civil</Link>
                        <Link to="/" className='text-base tracking-normal text-neutral-100 opacity-75'>Others</Link>
                    </div>
                </div>
                <div className='w-full'>
                    <h1 className='text-2xl text-white font-bold tracking-wider mb-3' >Page</h1>
                    <div className='w-full flex flex-col gap-2'>
                        <Link to="/about-us" className='text-base tracking-normal text-neutral-100 opacity-75'>About Us</Link>
                        <Link to="/services" className='text-base tracking-normal text-neutral-100 opacity-75'>Services</Link>
                        <Link to="/testimonials" className='text-base tracking-normal text-neutral-100 opacity-75'>Testimonials</Link>
                        <Link to="/contact-us" className='text-base tracking-normal text-neutral-100 opacity-75'>Contact Us</Link>
                    </div>
                </div>
                <div className='w-full'>
                    <h1 className='text-2xl text-white font-bold tracking-wider mb-3' >Contact Us</h1>
                    <div className='w-full flex flex-col gap-2'>
                        <span className='flex flex-row gap-3 justify-start items-center text-base tracking-normal text-neutral-100 opacity-75'>
                            <i className='bx bx-phone-call text-xl text-white'></i>
                            <span>(123) 456-7890</span>
                        </span>
                        <span className='flex flex-row gap-3 justify-start items-center text-base tracking-normal text-neutral-100 opacity-75'>
                            <i className='bx bx-map text-xl text-white'></i>
                            <span>123 Main St, Cityville, 12345, Fictionland.</span>
                        </span>
                        <span className='flex flex-row gap-3 justify-start items-center text-base tracking-normal text-neutral-100 opacity-75'>
                            <i className='bx bx-envelope text-xl text-white'></i>
                            <span>info@domain.com</span>
                        </span>
                    </div>
                </div>
                <div className='w-full'>
                    <h1 className='text-2xl text-white font-bold tracking-wider mb-3' >Social Media</h1>
                    <div className='w-full flex flex-col gap-2'>
                        <span className='flex flex-row gap-3 justify-start items-center text-base tracking-normal text-neutral-100 opacity-75'>
                            <i className='bx bxl-instagram text-xl text-white'></i>
                            <span>{COMPANY_NAME}</span>
                        </span>
                        <span className='flex flex-row gap-3 justify-start items-center text-base tracking-normal text-neutral-100 opacity-75'>
                            <i className='bx bxl-facebook-circle text-xl text-white' ></i>
                            <span>{COMPANY_NAME}</span>
                        </span>
                        <span className='flex flex-row gap-3 justify-start items-center text-base tracking-normal text-neutral-100 opacity-75'>
                            <i className='bx bxl-twitter text-xl text-white' ></i>
                            <span>{COMPANY_NAME}</span>
                        </span>
                        <span className='flex flex-row gap-3 justify-start items-center text-base tracking-normal text-neutral-100 opacity-75'>
                            <i className='bx bxl-linkedin text-xl text-white' ></i>
                            <span>{COMPANY_NAME}</span>
                        </span>
                    </div>
                </div>
            </div>
            <hr className='w-full h-[1px] bg-white my-5 lg:my-16' />
            <div className='flex flex-col gap-2 lg:flex-row lg:justify-between'>
                <span className='text-white text-lg'>&#169;copyright 2023 @{COMPANY_NAME} all right reserved</span>
                <div className='flex flex-row gap-5 text-white' >
                    <Link to="/" className='cursor-pointer'>Privacy Policy</Link>
                    <Link to="/" className='cursor-pointer'>Terms of use</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer