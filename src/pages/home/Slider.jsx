import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import './style.css'
const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
};

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    backgroundSize: 'cover', // Changed from 'contain' to 'cover'
    width: '100%', // Adjusted width to fit the screen
    height: '75vh', // Set height to 100vh for full screen
};

const slideImages = [
    {
        url: 'https://ecoyaan.com/images/carousel-1.png',
        buttonText: 'About us',
        tag: "Buy Less, Buy Better!",
        info: "Authentic source of truth for your sustainability needs."
    },
    {
        url: 'https://ecoyaan.com/images/carousel-2.png',
        buttonText: 'Follow us',
        tag: "Follow us on Instagram",
        info: "For climate news, lifestyle tips, & updates"
    },
    {
        url: 'https://ecoyaan.com/images/carousel-3.png',
        buttonText: 'Get in touch',
        tag: "Are you a business that truly cares about sustainability?",
        info: "We would love to work with you"
    },
];


export const Slider = () => {
    return (
        <div className="slide-container">
            <Slide>
                {slideImages.map((slideImage, index) => (
                    <div key={index}>
                        <div style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}>
                            <div className='slider-info'>
                                <h2>{slideImage.tag}</h2>
                                <p>{slideImage.info}</p>
                            
                            <button className='sliderButtonStyle'> 
                                {slideImage.buttonText}
                            </button>
                            </div>
                            {/* <button>About</button> */}
                        </div>
                    </div>
                ))} 
            </Slide>
        </div>
    );
};