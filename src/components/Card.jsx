import React from 'react';
import { Link } from 'react-router-dom';

function Card({ image_src, title, services, link_to }) {
    return (
        <div className='relative group overflow-hidden w-full min-[430px]:w-96 sm:w-full h-96 flex flex-col gap-3 justify-center items-center rounded-md bg-gray-900'>
            <img src={image_src} alt="income tax" className='w-28 h-28 shadow-xl p-3 rounded-md bg-gray-200' />
            <div className='absolute flex flex-col justify-evenly items-center inset-0 translate-y-[100%] group-hover:translate-y-0 bg-inherit duration-700 py-2'>
                <div className='w-full my-8 text-center'>
                    <h3 className='text-3xl text-white font-medium'>{title}</h3>
                </div>
                <div className='w-full px-16'>
                    <ul className='list-disc pl-5 text-white'>
                        {services.map((service, index) => (
                            <li key={index}>{service}</li>
                        ))}
                    </ul>
                </div>
                <div className='w-full flex justify-center mt-8'>
                    <Link to={`/services${link_to}`} className='flex items-center font-medium cursor-pointer text-white hover:text-blue-500 hover:scale-110 hover:duration-200'>
                        <span className='mb-1'>Know More</span>
                        <i className='bx bx-right-arrow-alt text-2xl' ></i>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Card