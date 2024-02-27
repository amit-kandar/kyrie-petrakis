import React, { useState } from 'react';
import LOCATION from '../assets/marker.svg';
import USER from '../assets/user.svg';
import { TESTIMONIALS_BG_IMG } from '../config/constant'

function ContactUs() {
    // const [selectedService, setSelectedService] = useState('');
    // const [isOpen, setIsOpen] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    // const services = [
    //     'Income Tax',
    //     'GST',
    //     'Civil Law',
    //     'Criminal Law',
    //     'Other Legal Services'
    // ];

    // const handleServiceChange = (event) => {
    //     setSelectedService(event.target.value);
    // };

    // const handleDropdown = () => {
    //     setIsOpen(prev => !prev);
    // }



    return (
        <section className="w-full py-10 px-5 lg:px-12 xl:px-16 bg-gray-700">
            <div className='flex flex-col justify-around gap-5 md:gap-x-8 md:flex-row'>
                <div className="w-full max-w-[600px] flex-1 mx-auto mt-8 p-6 bg-gray-800 rounded-md shadow-lg">
                    <div className='w-full flex justify-center md:justify-start'>
                        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white">Send us a message</h2>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="max-w-3xl mx-auto flex flex-wrap items-start gap-4 my-2">
                            <div className="grid gap-1.5 w-full">
                                <label className="block text-sm font-medium text-gray-100" htmlFor="name">
                                    Name
                                </label>
                                <input id="name" placeholder="Enter your name" className="bg-transparent border-2 border-zinc-500 rounded-md py-3 pl-5 outline-none text-gray-100 focus:border-zinc-200 duration-200" onCanPlay={handleChange} />
                            </div>
                            <div className="grid gap-1.5 w-full">
                                <label className="block text-sm font-medium text-gray-100" htmlFor="email">
                                    Email
                                </label>
                                <input id="email" placeholder="Enter your email" type="email" className="bg-transparent border-2 border-zinc-500 rounded-md py-3 pl-5 outline-none text-gray-100 focus:border-zinc-200 duration-200" onCanPlay={handleChange} />
                            </div>
                            {/* <div className="relative grid gap-1.5 w-full" onClick={handleDropdown}>
                                <label className="block text-sm font-medium text-gray-100" htmlFor="service">Service:</label>
                                <div className="bg-transparent border-2 border-zinc-500 rounded-md py-2 px-5 outline-none text-gray-300 focus:border-zinc-200 duration-200">
                                    <div className='flex justify-between items-center'>
                                        <span>Select Service</span>
                                        {
                                            isOpen ? <i className='bx bx-chevron-up text-3xl'></i> : <i className='bx bx-chevron-down text-3xl'></i>
                                        }
                                    </div>
                                    <div className={` ${isOpen ? "block" : "hidden"} absolute w-full h-20 bg-current inset-0 translate-y-[84px] rounded-md`}>

                                    </div>
                                </div>
                            </div> */}
                            <div className="grid gap-1.5 w-full">
                                <label className="block text-sm font-medium text-gray-100" htmlFor="subject">
                                    Subject
                                </label>
                                <input id="subject" placeholder="Enter your subject" className="bg-transparent border-2 border-zinc-500 rounded-md py-3 pl-5 outline-none text-gray-100 focus:border-zinc-200 duration-200" onCanPlay={handleChange} />
                            </div>
                            <div className="grid gap-1.5 w-full">
                                <label className="block text-sm font-medium text-gray-100" htmlFor="message">
                                    Message
                                </label>
                                <textarea className="min-h-[150px] resize-y bg-transparent border-2 border-zinc-500 rounded-md outline-none text-gray-100 focus:border-zinc-200 duration-200 pl-5 py-3" id="message" placeholder="Enter your message" />
                            </div>
                            <div className="w-full flex justify-center items-center md:justify-start lg:justify-center">
                                <button className="w-full md:w-36 py-3 text-lg text-white font-medium rounded-md bg-blue-400 duration-200 hover:bg-blue-500" >Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='flex flex-col flex-1 gap-6'>
                    <div className='w-full mt-10'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5209.974580116529!2d88.40267528884736!3d22.578790820802357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027677c1c8a03b%3A0xe1bc02832a8f64a4!2sMani%20Square!5e0!3m2!1sen!2sin!4v1708165745892!5m2!1sen!2sin" className='w-full h-[300px] sm:h-90 md:h-96 rounded-md' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='map' color='dark' ></iframe>
                    </div>
                    <div className='w-full flex flex-wrap justify-around gap-2'>
                        <div className='p-3 flex items-center flex-col gap-4'>
                            <div className='w-16 h-16 flex justify-center items-center rounded-full border-2 border-gray-100'>
                                <img src={LOCATION} alt="location" className='w-6 h-6' />
                            </div>
                            <p className='text-sm text-center font-medium text-white opacity-70'>Main Office<br />123 Anywhere St.<br />Any City ST 12345</p>
                        </div>
                        <div className='p-3 flex items-center flex-col gap-4'>
                            <div className='w-16 h-16 flex justify-center items-center rounded-full border-2 border-gray-100'>
                                <img src={USER} alt="user" className='w-6 h-6' />
                            </div>
                            <div>
                                <div className='flex flex-row items-center gap-3 text-white opacity-70'>
                                    <i className='bx bx-phone-call'></i>
                                    <span className='text-sm'>(123) 456-7890</span>
                                </div>
                                <div className='flex flex-row items-center gap-3 text-white opacity-70'>
                                    <i className='bx bx-envelope text-lg'></i>
                                    <span className='text-sm'>info@example.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ContactUs