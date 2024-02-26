import React, { useState } from 'react';

function ContactUs() {
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
        // Add your form submission logic here
        console.log('Form submitted:', formData);
        // You may want to send the data to a server or perform other actions
    };
    return (
        <section className="w-full py-10 px-5">
            <div className='flex flex-col justify-around gap-5 md:gap-x-16 md:flex-row'>
                <div className='flex flex-col flex-1'>
                    <div className='w-ful flex flex-col justify-start'>
                        <div className='w-full'>
                            <h1 className='text-3xl font-bold capitalize md:text-4xl'>Send Us a message</h1>
                        </div>
                        <div className='w-full max-w-[400px] flex flex-col justify-between gap-2 cus-md:flex-row'>
                            <div className='p-3'>
                                <p className='text-base font-medium'>Main Office<br />123 Anywhere St.<br />Any City ST 12345</p>
                            </div>
                            <div className='p-3'>
                                <div className='flex flex-row items-center gap-3'>
                                    <i className='bx bx-phone-call'></i>
                                    <span className='text-lg'>(123) 456-7890</span>
                                </div>
                                <div className='flex flex-row items-center gap-3'>
                                    <i className='bx bx-envelope text-lg'></i>
                                    <span className='text-lg'>info@example.com</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='w-full mt-10'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5209.974580116529!2d88.40267528884736!3d22.578790820802357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027677c1c8a03b%3A0xe1bc02832a8f64a4!2sMani%20Square!5e0!3m2!1sen!2sin!4v1708165745892!5m2!1sen!2sin" className='w-full h-[300px] md:h-[400px] border-0' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='map'></iframe>
                    </div>
                </div>
                <div className="w-full max-w-[600px] flex-1 mx-auto mt-8 p-6 bg-white rounded-md shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-1 p-2 w-full border rounded-md"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-1 p-2 w-full border rounded-md"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="mt-1 p-2 w-full border rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-600">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="mt-1 p-2 w-full border rounded-md"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-600">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="mt-1 p-2 w-full border rounded-md"
                                rows="4"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-8 rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default ContactUs