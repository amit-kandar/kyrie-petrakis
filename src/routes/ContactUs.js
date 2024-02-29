import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import LOCATION from '../assets/marker.svg';
import MAIL from '../assets/envelope.svg';
import PHONE from '../assets/phone-call.svg';
import { TESTIMONIALS_BG_IMG } from '../config/constant';
import { useFormik } from 'formik';
import contactSchema from '../schema/contactSchema';
import Error from '../components/Error';
import axios from 'axios';

const backgroundStyle = {
    backgroundImage: `url(${TESTIMONIALS_BG_IMG})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: 'center bottom  ',
};

function ContactUs() {
    const location = useLocation();
    const { pathname } = location;
    if (pathname === '/contact-us')
        document.title = "Contact Us - Kyrie Petrakis"

    const initial_values = {
        name: '',
        email: '',
        phone_number: '',
        subject: '',
        message: '',
    };

    const {
        values,
        handleBlur,
        handleChange,
        errors,
        handleSubmit,
        touched
    } = useFormik({
        initialValues: initial_values,
        validateOnBlur: true,
        validationSchema: contactSchema,
        validateOnChange: true,
        onSubmit: async (values, { resetForm }) => {
            const host = "http://localhost:8080/api/v1/contacts/"
            try {
                const response = await axios.post(host, values);
                console.log(response);
                resetForm();
            } catch (error) {
                console.log(error);
            }
        }
    })
    return (
        <section className="w-full flex justify-center py-10 px-5 lg:px-12 xl:px-16 bg-gray-700" style={backgroundStyle}>
            <div className='container'>
                <div className='flex flex-col justify-around gap-5 md:gap-x-8 md:flex-row'>
                    <div className="w-full max-w-[600px] flex-1 mx-auto mt-8 p-6 bg-gray-800 rounded-md shadow-lg">
                        <div className='w-full flex justify-center md:justify-start'>
                            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white">Send us a message</h2>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="max-w-3xl mx-auto flex flex-wrap items-start gap-4 my-2">
                                <div className="grid gap-1.5 w-full">
                                    <label className="block text-sm font-medium text-gray-100" htmlFor="name">
                                        Name<sup className='text-red-500 text-sm'>*</sup>
                                    </label>
                                    <input
                                        id="name"
                                        type='text'
                                        placeholder="Enter your name"
                                        className={`bg-gray-800 border-2 rounded-md py-3 pl-5 outline-none text-gray-100 ${errors.name && touched.name ? "border-red-500 focus:outline-[3px] focus:-outline-offset-[3px] focus:outline-red-500" : "border-zink-500 focus:outline-[3px] focus:-outline-offset-[3px] focus:outline-white"}`}
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.name && touched.name ? <Error msg={errors.name} /> : null}
                                </div>
                                <div className="grid gap-1.5 w-full">
                                    <label className="block text-sm font-medium text-gray-100" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        placeholder="Enter your email"
                                        type="email"
                                        className={`bg-gray-800 border-2 rounded-md py-3 pl-5 outline-none text-gray-100 ${errors.email && touched.email ? "border-red-500 focus:outline-[3px] focus:-outline-offset-[3px] focus:outline-red-500" : "border-zink-500 focus:outline-[3px] focus:-outline-offset-[3px] focus:outline-white"}`}
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.email && touched.email ? <Error msg={errors.email} /> : null}
                                </div>
                                <div className="grid gap-1.5 w-full">
                                    <label className="block text-sm font-medium text-gray-100" htmlFor="phone_number">
                                        Phone Number<sup className='text-red-500 text-sm mt-10'>*</sup>
                                    </label>
                                    <input
                                        id="phone_number"
                                        placeholder="Enter your phone"
                                        type="tel"
                                        className={`bg-gray-800 border-2 rounded-md py-3 pl-5 outline-none text-gray-100 ${errors.phone_number && touched.phone_number ? "border-red-500 focus:outline-[3px] focus:-outline-offset-[3px] focus:outline-red-500" : "border-zink-500 focus:outline-[3px] focus:-outline-offset-[3px] focus:outline-white"}`}
                                        value={values.phone_number}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.phone_number && touched.phone_number ? <Error msg={errors.phone_number} /> : null}
                                </div>
                                <div className="grid gap-1.5 w-full">
                                    <label className="block text-sm font-medium text-gray-100" htmlFor="subject">
                                        Subject<sup className='text-red-500 text-sm'>*</sup>
                                    </label>
                                    <input
                                        id="subject"
                                        placeholder="Enter your subject"
                                        className={`bg-gray-800 border-2 rounded-md py-3 pl-5 outline-none text-gray-100 ${errors.subject && touched.subject ? "border-red-500 focus:outline-[3px] focus:-outline-offset-[3px] focus:outline-red-500" : "border-zink-500 focus:outline-[3px] focus:-outline-offset-[3px] focus:outline-white"}`}
                                        value={values.subject}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.subject && touched.subject ? <Error msg={errors.subject} /> : null}
                                </div>
                                <div className="grid gap-1.5 w-full">
                                    <label className="block text-sm font-medium text-gray-100" htmlFor="message">
                                        Message<sup className='text-red-500 text-sm'>*</sup>
                                    </label>
                                    <textarea
                                        id="message"
                                        className={`min-h-[150px] resize-y bg-gray-800 border-2 rounded-md outline-none text-gray-100 pl-5 py-3 ${errors.message && touched.message ? "border-red-500 focus:outline-[3px] focus:-outline-offset-[3px] focus:outline-red-500" : "border-zink-500 focus:outline-[3px] focus:-outline-offset-[3px] focus:outline-white"}`}
                                        placeholder="Enter your message"
                                        value={values.message}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.message && touched.message ? <Error msg={errors.message} /> : null}
                                </div>
                                <div className="w-full flex justify-center items-center md:justify-start lg:justify-center">
                                    <button type='submit' className="w-full md:w-36 py-3 text-lg text-white font-medium rounded-md bg-blue-400 duration-200 hover:bg-blue-500" >Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='flex flex-col flex-1 gap-6'>
                        <div className='w-full mt-10'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5209.974580116529!2d88.40267528884736!3d22.578790820802357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027677c1c8a03b%3A0xe1bc02832a8f64a4!2sMani%20Square!5e0!3m2!1sen!2sin!4v1708165745892!5m2!1sen!2sin" className='w-full h-[300px] sm:h-90 md:h-96 rounded-md' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='map' color='dark' ></iframe>
                        </div>
                        <div className='w-full flex flex-wrap justify-around gap-2 md:mt-20'>
                            <div className='p-3 flex items-center flex-col gap-4'>
                                <Link to="https://www.google.com/maps?ll=22.577688,88.401059&z=16&t=m&hl=en&gl=IN&mapclient=embed&cid=16265878716533400740" target='_blank' className='w-16 h-16 flex justify-center items-center rounded-full border-2 border-gray-100'>
                                    <img src={LOCATION} alt="location" className='w-6 h-6' />
                                </Link>
                                <p className='text-sm text-center font-medium text-white opacity-70'>Main Office<br />123 Anywhere St.<br />Any City ST 12345</p>
                            </div>
                            <div className='p-3 flex items-center flex-col gap-4'>
                                <div
                                    className='w-16 h-16 flex justify-center items-center rounded-full border-2 border-gray-100 cursor-pointer'
                                    onClick={() => { window.location = 'mailto:info@domain.com' }}
                                >
                                    <img src={MAIL} alt="location" className='w-6 h-6' />
                                </div>
                                <div className='flex flex-row items-center gap-3 text-white opacity-70'>
                                    <i className='bx bx-envelope text-lg'></i>
                                    <span className='text-sm'>info@example.com</span>
                                </div>
                            </div>
                            <div className='p-3 flex items-center flex-col gap-4'>
                                <Link to="tel:+916296080621" className='w-16 h-16 flex justify-center items-center rounded-full border-2 border-gray-100'>
                                    <img src={PHONE} alt="user" className='w-6 h-6' />
                                </Link>
                                <div className='flex flex-row items-center gap-3 text-white opacity-70'>
                                    <i className='bx bx-phone-call'></i>
                                    <span className='text-sm'>(123) 456-7890</span>
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