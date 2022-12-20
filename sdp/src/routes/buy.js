import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Buy from '../components/buy'

const Pricing = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='Enter Card Details' text='Fill the card details' />
            <Buy />
            <Footer />
        </div>
    )
}

export default Pricing
