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