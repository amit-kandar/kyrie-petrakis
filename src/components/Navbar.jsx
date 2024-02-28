import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { LOGO1 } from '../config/constant';

export default function Navbar() {
    const location = useLocation();

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const offset = 100;
            setIsScrolled(scrollPosition > offset);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Disclosure as="nav" className={`fixed top-0 z-50 w-full ${isScrolled ? 'bg-gray-800/10 backdrop-blur-3xl' : 'bg-gray-800'}`}>
            {({ open }) => (
                <>
                    <div className="w-full px-4 sm:px-6 lg:px-8">
                        <div className="relative flex h-20 items-center justify-between">
                            <div className="w-full flex items-center justify-bet
                             sm:items-stretch sm:justify-between ">
                                <Link to='/' className="flex flex-shrink-0 items-center">
                                    <img
                                        className="h-10 w-10 rounded-full"
                                        src={LOGO1}
                                        alt="company logo"
                                    />
                                </Link>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex items-center space-x-4">
                                        <Link
                                            to="/"
                                            className={`flex items-center rounded-md px-3 py-2 text-sm font-medium ${location.pathname === '/' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                                        >
                                            Home
                                        </Link>
                                        <Link
                                            to="/about-us"
                                            className={`flex items-center rounded-md px-3 py-2 text-sm font-medium ${location.pathname === '/about-us' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                                        >
                                            About Us
                                        </Link>
                                        <div
                                            className={`relative curpo group flex items-center rounded-md px-3 py-1 text-sm font-medium ${location.pathname === '/services' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                                        >
                                            <Link to="/services">Services</Link>
                                            <i className='bx bx-chevron-down text-2xl pl-1 group-hover:hidden block'></i>
                                            <i className='bx bx-chevron-up text-2xl pl-1 hidden group-hover:block'></i>

                                            <ul className="hidden group-hover:block absolute z-50 bg-gray-600 inset-0 translate-y-10 rounded w-36 h-48 py-4 px-3 shadow-2xl">

                                                <li className='w-full text-base duration-200 hover:bg-gray-500 text-gray-200 hover:text-gray-100 px-3 py-1 rounded'>
                                                    <Link
                                                        to="/services/income-tax"
                                                        aria-current={location.pathname === '/services/income-tax' ? 'page' : undefined}
                                                    >
                                                        Income Tax
                                                    </Link>
                                                </li>
                                                <li className='w-full text-base duration-200 hover:bg-gray-500 text-gray-200 hover:text-gray-100 px-3 py-1 rounded'>
                                                    <Link
                                                        to="/services/gst"
                                                        aria-current={location.pathname === '/services/gst' ? 'page' : undefined}
                                                    >
                                                        GST
                                                    </Link>
                                                </li>
                                                <li className='w-full text-base duration-200 hover:bg-gray-500 text-gray-200 hover:text-gray-100 px-3 py-1 rounded'>
                                                    <Link
                                                        to="/services/criminal-law"
                                                        aria-current={location.pathname === '/services/criminal-law' ? 'page' : undefined}
                                                    >
                                                        Criminal Law
                                                    </Link>
                                                </li>
                                                <li className='w-full text-base duration-200 hover:bg-gray-500 text-gray-200 hover:text-gray-100 px-3 py-1 rounded'>
                                                    <Link
                                                        to="/services/civil-law"
                                                        aria-current={location.pathname === '/services/civil-law' ? 'page' : undefined}
                                                    >
                                                        Civil Law
                                                    </Link>
                                                </li>
                                                <li className='w-full text-base duration-200 hover:bg-gray-500 text-gray-200 hover:text-gray-100 px-3 py-1 rounded'>
                                                    <Link
                                                        to="/services/others-legal-services"
                                                        aria-current={location.pathname === '/services/others-legal-services' ? 'page' : undefined}
                                                    >
                                                        Others
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='bg-green-900 rounded-full w-fit py-3 cursor-pointer duration-200 hover:scale-110 px-5'>
                                            <Link to="/contact-us" className='text-white' >Get started</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="inset-y-0 left-0 flex items-center sm:hidden">
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            <Disclosure.Button
                                as="a"
                                href="/"
                                className={`flex items-center rounded-md px-3 py-2 text-sm font-medium ${location.pathname === '/' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                            >
                                Home
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                href="/about-us"
                                className={`flex items-center rounded-md px-3 py-2 text-sm font-medium ${location.pathname === '/about-us' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                            >
                                About Us
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                href="/services"
                                className={`flex items-center rounded-md px-3 py-2 text-sm font-medium ${location.pathname === '/services' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                            >
                                Services
                            </Disclosure.Button>
                            <Disclosure.Button style={{ marginTop: "10px" }}>
                                <div className='bg-green-900 rounded-full w-fit py-3 cursor-pointer duration-200 hover:scale-110 px-5'>
                                    <Link to="/contact-us" className='text-white' >Get started</Link>
                                </div>
                            </Disclosure.Button>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}