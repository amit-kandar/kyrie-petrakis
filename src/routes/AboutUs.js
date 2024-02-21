import React from 'react'

function AboutUs() {
    return (
        <section className='bg-gray-100 w-full flex justify-center flex-col items-center px-10 py-8'>
            <div className='w-fit'>
                <div className='w-full mb-10'>
                    <h1 className='text-2xl text-black font-semibold font-serif text-center md:text-3xl lg:text-5xl'>Our team of legal experts</h1>
                </div>
                <div className='mt-10 flex flex-col justify-between items-center gap-5 md:flex-row md:items-center mb-10'>
                    <div className='bg-gray-500 flex-1 px-5 py-3 rounded-xl max-w-96 min-h-36'>
                        <h2 className='text-xl text-white '>Experienced Attorneys</h2>
                        <p className='text-base text-gray-300'>
                            Meet our team of knowledgeable attorneys with
                            expertise in diverse legal areas.
                        </p>
                    </div>
                    <div className='bg-gray-500 flex-1 px-5 py-3 rounded-xl max-w-96 min-h-36'>
                        <h2 className='text-xl text-white '>Specialized Proficiency</h2>
                        <p className='text-base text-gray-300'>
                            Get to know our legal experts who specialize in
                            areas such as corporate law, immigration, and
                            intellectual property.
                        </p>
                    </div>
                </div>
                <div className='w-full'>
                    <button className='px-8 py-3 text-black text-lg bg-transparent border-2 border-black rounded-full'>Book Now</button>
                </div>
            </div>
        </section>
    )
}

export default AboutUs