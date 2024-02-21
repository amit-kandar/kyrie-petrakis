import React from 'react';

function ContactUs() {
    return (
        <section className="w-full py-10 px-5 md:py-24 lg:py-32">
            <div className='flex flex-col justify-around gap-5 md:flex-row'>
                <div className='w-full flex-1'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5209.974580116529!2d88.40267528884736!3d22.578790820802357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027677c1c8a03b%3A0xe1bc02832a8f64a4!2sMani%20Square!5e0!3m2!1sen!2sin!4v1708165745892!5m2!1sen!2sin" className='w-full h-[500px] border-0' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='map'></iframe>
                </div>
                <div className='w-ful flex flex-1 flex-col justify-start'>
                    <div className='w-full mt-3'>
                        <h1 className='text-3xl font-bold capitalize md:text-4xl'>Send Us a message</h1>
                    </div>
                    <div className='w-full max-w-[400px] flex flex-col justify-between gap-3 md:flex-row mt-10'>
                        <div className='p-3'>
                            <p className='text-base font-medium'>Main Office<br />123 Anywhere St.<br />Any City ST 12345</p>
                        </div>
                        <div className='p-3'>
                            <div className='flex flex-row items-center gap-3'>
                                <i class='bx bx-phone-call'></i>
                                <span className='text-lg'>(123) 456-7890</span>
                            </div>
                            <div className='flex flex-row items-center gap-3'>
                                <i className='bx bx-envelope text-lg'></i>
                                <span className='text-lg'>info@example.com</span>
                            </div>
                        </div>

                    </div>
                    <div className='w-full flex flex-col items-center gap-3'>
                        <form action=""></form>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ContactUs