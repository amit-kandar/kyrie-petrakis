import React from 'react'

function Services() {
    return (
        <section className='w-full p-10 bg-gray-100'>
            <div className='w-full'>
                <div>
                    <h1 className='text-3xl text-black font-semibold font-serif'>Our Services</h1>
                </div>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5'>
                    <div className='w-full md:w-80 border-2 border-gray-500 rounded-md p-5'>
                        <div className='w-full mb-3'>
                            <h3 className='text-2xl font-medium'>Income Tax</h3>
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex gap-3 items-center'>
                                <div className='w-4 h-4 rounded-md border-2 border-black'></div>
                                <span>E-Filling</span>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <div className='w-4 h-4 rounded-md border-2 border-black'></div>
                                <span>Cases</span>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <div className='w-4 h-4 rounded-md border-2 border-black'></div>
                                <span>Accounting</span>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <div className='w-4 h-4 rounded-md border-2 border-black'></div>
                                <span>Financial Statements</span>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-80 border-2 border-gray-500 rounded-md p-5'>
                        <div className='w-full mb-3'>
                            <h3 className='text-2xl font-medium'>GST</h3>
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex gap-3 items-center'>
                                <div className='w-4 h-4 rounded-md border-2 border-black'></div>
                                <span>Monthly or Quarterly Return</span>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <div className='w-4 h-4 rounded-md border-2 border-black'></div>
                                <span>Reconciliation</span>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <div className='w-4 h-4 rounded-md border-2 border-black'></div>
                                <span>Accounting</span>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <div className='w-4 h-4 rounded-md border-2 border-black'></div>
                                <span>Cases</span>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-80 border-2 border-gray-500 rounded-md p-5'>
                        <div className='w-full mb-3'>
                            <h3 className='text-2xl font-medium'>Criminal</h3>
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex gap-3 items-center'>
                                <div className='w-4 h-4 rounded-md border-2 border-black'></div>
                                <span>Bail Petition</span>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <div className='w-4 h-4 rounded-md border-2 border-black'></div>
                                <span>NI Act Cases</span>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <div className='w-4 h-4 rounded-md border-2 border-black'></div>
                                <span>Others</span>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-80 border-2 border-gray-500 rounded-md p-5'>
                        <div className='w-full mb-3'>
                            <h3 className='text-2xl font-medium'>Civil</h3>
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex gap-3 items-center'>
                                <div className='w-4 h-4 rounded-md border-2 border-black'></div>
                                <span>Property Registration</span>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <div className='w-4 h-4 rounded-md border-2 border-black'></div>
                                <span>Property Related Cases</span>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-80 border-2 border-gray-500 rounded-md p-5'>
                        <div className='w-full mb-3'>
                            <h3 className='text-2xl font-medium'>Others</h3>
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex gap-3 items-center'>
                                <div className='w-4 h-4 rounded-md border-2 border-black'></div>
                                <span>Patent and Trade Mark</span>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <div className='w-4 h-4 rounded-md border-2 border-black'></div>
                                <span>Incorporation of Private Limited</span>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <div className='w-4 h-4 rounded-md border-2 border-black'></div>
                                <span>Deeds and Agreements</span>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <div className='w-4 h-4 rounded-md border-2 border-black'></div>
                                <span>Power of Attorney</span>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <div className='w-4 h-4 rounded-md border-2 border-black'></div>
                                <span>etc</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services