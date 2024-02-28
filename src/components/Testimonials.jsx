import React from 'react';
import Carousel from "nuka-carousel";
import { useMediaQuery } from 'react-responsive';
import { TESTIMONIALS_BG_IMG } from '../config/constant'
import TestimonialCard from './TestimonialCard';
import { testimonials } from '../utils/testimonials';

function Testimonials() {
    const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
    const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

    let slidesToScroll = 1;

    if (isTablet) {
        slidesToScroll = 2;
    }
    if (isDesktop) {
        slidesToScroll = 3;
    }

    return (
        <section className='relative w-full bg-gray-500 min-h-[500px] lg:min-h-[600px] xl:min-h-[700px]'>
            <div className='w-full absolute top-36'>
                <img src={TESTIMONIALS_BG_IMG} alt="testimonials background" className='w-full' />
            </div>
            <div className='absolute top-10 w-full'>
                <div className='text-center px-3 w-full'>
                    <h1 className='text-center text-2xl md:text-3xl lg:text-4xl text-white font-semibold'>We serve our clients <br /> <span className='text-custom-green'>with the best of our capacity</span></h1>
                </div>
            </div>
            <div className='absolute top-44 w-full'>
                <Carousel autoplay autoplayInterval={2000} wrapAround={true} slidesToShow={slidesToScroll} withoutControls >
                    {
                        testimonials.map((item, index) => {
                            return (
                                <TestimonialCard name={item.name} img_url={item.img_url} rating={item.rating} address={item.address} message={item.message} key={index} />
                            )
                        })
                    }
                </Carousel>
            </div>
        </section>
    )
}

export default Testimonials