import React from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import AboutUs from './AboutUs'
import Services from './Service'
import Testimonials from '../components/Testimonials'
import ContactUs from './ContactUs'
import WhyUs from '../components/WhyUs'

function Home() {
    const location = useLocation()
    const { pathname } = location;

    if (pathname === '/')
        document.title = "Kyrie Petrakis"

    return (
        <div className='mt-20'>
            <Hero />
            <Services />
            <AboutUs />
            <WhyUs />
            <Testimonials />
            <ContactUs />
        </div>
    )
}

export default Home