import React from 'react';
import { INCOME_TAX_ICO, GST_ICO, CRIMINAL_ICO, CIVIL_ICO, OTHHERS_ICO } from '../config/constant';
import Card from '../components/Card';

function Service() {
    return (
        <section className='w-full py-12 px-6 bg-gray-700'>
            <div className='container'>
                <div className='w-full flex flex-col items-center gap-3 lg:gap-6'>
                    <h1 className='text-3xl font-medium tracking-wider text-white md:text-4xl lg:text-6xl'>Services</h1>
                    <p className='text-sm text-gray-300 tracking-wide opacity-50 text-center'>
                        Efficient and reliable services tailored to your needs. Expert solutions, seamless communication, and superior results. Choose excellence for success.
                    </p>
                </div>
                <div className='w-full grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-8'>
                    <Card
                        title="Income Tax"
                        image_src={INCOME_TAX_ICO}
                        services={[
                            "E-Filing",
                            "Cases",
                            "Accounting",
                            "Financial Statements"
                        ]}
                        link_to="/income-tax"
                    />
                    <Card
                        title="GST"
                        image_src={GST_ICO}
                        services={[
                            "Monthly or Quarterly Return",
                            "Reconciliation",
                            "Accounting",
                            "Cases"
                        ]}
                        link_to="/gst"
                    />
                    <Card
                        title="Criminal"
                        image_src={CRIMINAL_ICO}
                        services={[
                            "Bail Petition",
                            "NI Act Cases",
                            "Others",
                        ]}
                        link_to="/criminal"
                    />
                    <Card
                        title="Civil"
                        image_src={CIVIL_ICO}
                        services={[
                            "Property Registration",
                            "Property Related Cases",
                            "Accounting",
                            "Financial Statements"
                        ]}
                        link_to="/civil"
                    />
                    <Card
                        title="Others"
                        image_src={OTHHERS_ICO}
                        services={[
                            "Patent and Trade Mark",
                            "Incorporation of Private Limited",
                            "Deeds and Agreements",
                            "Power of Attorney",
                            "etc"
                        ]}
                        link_to="/others"
                    />

                </div>
            </div>
        </section>
    )
}

export default Service