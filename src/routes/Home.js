import React from 'react'
import Hero from '../components/Hero'
import AboutUs from './AboutUs'
import Services from './Services'
import Testimonials from './Testimonials'
import ContactUs from './ContactUs'
import WhyUs from '../components/WhyUs'

function Home() {
    return (
        <>
            <Hero />
            <Services />
            <AboutUs />
            <WhyUs />
            <Testimonials />
            <ContactUs />
        </>
    )
}

export default Home