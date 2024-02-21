import React from 'react'

function WhyUs() {
    return (
        <section className='bg-slate-500 w-full flex flex-col items-center px-5 py-10'>
            <div className='w-fit '>
                <div>
                    <h1 className='text-5xl font-semibold text-white'>Why work with us</h1>
                </div>
                <div className='mt-10'>
                    <div className='w-full mb-5'>
                        <h3 className='text-2xl text-stone-300 font-medium'><span className='pr-2'>1.</span>Features and benefits of our legal body</h3>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-5 md:flex-row'>
                        <div className='w-full md:max-w-96 p-5 rounded-md bg-slate-700'>
                            <div className='mb-3'>
                                <h4 className='text-xl text-white'>Comprehensive Services</h4>
                            </div>
                            <p className='text-gray-400 text-sm'>
                                Access a wide range of legal
                                services, from contract reviews
                                to trademark filings.

                            </p>
                        </div>
                        <div className='w-full md:max-w-96 p-5 rounded-md bg-slate-700'>
                            <div className='mb-3'>
                                <h4 className='text-xl text-white'>Cost-Effective Solutions</h4>
                            </div>
                            <p className='text-gray-400 text-sm'>
                                Save money with transparent
                                pricing and subscription plans
                                tailored to your needs.
                            </p>
                        </div>
                        <div className='w-full md:max-w-96 p-5 rounded-md bg-slate-700'>
                            <div className='mb-3'>
                                <h4 className='text-xl text-white'>Expert Guidance</h4>
                            </div>
                            <p className='text-gray-400 text-sm'>
                                Receive professional advice
                                from legal experts with
                                extensive experience in various
                                domains.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='mt-10'>
                    <div className='w-full mb-5'>
                        <h3 className='text-2xl text-stone-300 font-medium'><span className='pr-2'>2.</span>How our legal body works</h3>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-5 md:flex-row'>
                        <div className='w-full md:max-w-96 p-5 border-2 border-white rounded-lg'>
                            <div className='mb-3'>
                                <h4 className='text-xl text-white'><span className='pr-3'>1.</span>Legal Consultation</h4>
                            </div>
                            <p className='text-gray-300 text-sm'>
                                Connect with experienced
                                lawyers for expert advice
                                and guidance regarding
                                your legal needs.
                            </p>
                        </div>
                        <div className='w-full md:max-w-96 p-5 border-2 border-white rounded-lg'>
                            <div className='mb-3'>
                                <h4 className='text-xl text-white'><span className='pr-3'>2.</span>Document Preparation</h4>
                            </div>
                            <p className='text-gray-300 text-sm'>
                                Efficiently draft and
                                customize legal
                                documents with the
                                assistance of our
                                knowledgeable team.
                            </p>
                        </div>
                        <div className='w-full md:max-w-96 p-5 border-2 border-white rounded-lg'>
                            <div className='mb-3'>
                                <h4 className='text-xl text-white'><span className='pr-3'>3.</span>Case Management</h4>
                            </div>
                            <p className='text-gray-300 text-sm'>
                                Keep track of your cases,
                                appointments, and
                                important documents
                                within our secure platform.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyUs