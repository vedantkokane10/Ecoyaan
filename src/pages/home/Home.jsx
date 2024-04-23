import React from 'react'
import 'react-slideshow-image/dist/styles.css';
import { Slider } from './Slider';
import { InfoCard } from './InfoCard';
import './style.css'    
export const Home = () => {
  return (
    <div className='home'>
        <Slider />
        <div className='content'>
        <InfoCard />    
        </div>
        <button className='contact-us'>
            Contact Us
        </button>
    </div>
  )
}

