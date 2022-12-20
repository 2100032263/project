import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import UserCards from '../components/user/userCards'
import Header from '../components/user/header'

function users() {
  return (
    <div>
            <Navbar />
            <HeroImage heading='Our Users'/>
            <Header />
            <UserCards />
            <Footer />
    </div>
  )
}

export default users