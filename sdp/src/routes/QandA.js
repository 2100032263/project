import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import Questions from '../components/questions'

function QandA() {
  return (
    <div>

        <Navbar />
        <HeroImage heading='Get Registered for Exam.' text='enter details and register yourself for examination' />
        <Questions />        
        <Footer/>

    </div>
  )
}

export default QandA