import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from "./routes/Home";
import AboutUs from './routes/AboutUs';
import ContactUs from './routes/ContactUs';
import Services from './routes/Service';
import Footer from "./components/Footer";
import Service from './components/Service';

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const offset = 100;
      setShowButton(scrollPosition > offset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        <Route path='/services/:serviceName' element={<Service />} />
      </Routes>
      <Footer />
      <div
        className={`fixed hidden lg:flex bottom-4 z-50 right-4 w-14 h-14 rounded-md bg-blue-500 text-white items-center justify-center cursor-pointer ${showButton ? 'visible' : 'invisible'}`}
        onClick={scrollToTop}
      >
        <i className='bx bx-up-arrow-alt text-4xl'></i>
      </div>
    </Router>
  );
}

export default App;
