import React, { useState } from 'react'
import HeroSection from './components/hero-section'
import LoginPage from './components/LoginPage'
import AboutPage from './components/AboutPage'
import PricingPage from './components/PricingPage'
import ServicesPage from './components/ServicesPage'
import BookingPage from './components/BookingPage'

export default function App() {
    const [currentPage, setCurrentPage] = useState('Home')

    const renderPage = () => {
        switch (currentPage) {
            case 'Home': return <HeroSection setCurrentPage={setCurrentPage} />
            case 'About': return <AboutPage setCurrentPage={setCurrentPage} />
            case 'Pricing': return <PricingPage setCurrentPage={setCurrentPage} />
            case 'Services': return <ServicesPage setCurrentPage={setCurrentPage} />
            case 'Booking': return <BookingPage setCurrentPage={setCurrentPage} />
            case 'Login': return <LoginPage setCurrentPage={setCurrentPage} />
            default: return <HeroSection setCurrentPage={setCurrentPage} />
        }
    }

    return (
      <>
      {renderPage()}
      </>
    )
}