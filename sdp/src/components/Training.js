import React from 'react'
import './TrainingStyles.css'

import {Link} from 'react-router-dom'

import Pod from '../assets/pod.jpg'
import Moon from '../assets/moon.jpg'

const Training = () => {
    return (
        <div className='training'>
            <div className='left'>
                <h1>Training</h1>
                <p>Thorough training is a necessity when you are finding a job. We offer all inclusive training for prejob and injob  scenarios.</p>
                <Link to='/contact'><button className='btn'>Contact</button></Link>
            </div>
            
            <div className='right'>
                <div className='imgcontainer'>
                    <div className='imagestack top'>
                        <img src={Moon} className='img' alt='' />
                    </div>
                    <div className='imagestack bottom'>
                        <img src={Pod} className='img' alt='' />
                    </div>
                </div>
            </div>
            <div className='pricing'>
            <div className='cardcontainer'>
                <div className='card'>
                    <h3> Neuro Linguistic Programming (NLP) Mind Power Mastery </h3>
                    <p className='btc'>₹1999</p>
                    <p>- 30 days -</p>
                    <p>- 01 Course -</p>
                    <p>-Live Q&A support -</p>
                    <p>- HireEasy certificate -</p>
                    <p>- 70k+ Students Enrolled -</p>
                    <Link to='/purchase' className='btn'>Book</Link>
                </div>
                <div className='card'>
                    <h3> Advanced NLP Practitioner & NLP Mastery Course </h3>
                    <p className='btc'>₹2999</p>
                    <p>- 45 Days -</p>
                    <p>- 08 Courses --</p>
                    <p>- Live Q&A support -</p>
                    <p>- HireEasy certificate -</p>
                    <p>- 70k+ Students Enrolled -</p>
                    <Link to='/purchase' className='btn'>Book</Link>
                </div>
                <div className='card'>
                    <h3> Digital Marketing </h3>
                    <p className='btc'>₹4999</p>
                    <p>- 90 Days -</p>
                    <p>- 17 Courses -</p>
                    <p>- Live Q&A support -</p>
                    <p>- HireEasy certificate -</p>
                    <p>- 10k+ Students Enrolled -</p>
                    <Link to='/purchase' className='btn'>Book</Link>
                </div>
            </div>
        </div>
        <div className='pricing'>
        <div className='right'>
                <h1></h1>
                <Link to='/purchase'><button className='btn'>GET YOUR RESUME</button></Link>
            </div>
        </div>
        </div>
    )
}

export default Training