import React from 'react'
import './InfoCardStyles.css'
export const InfoCard = () => {
  return (
    <div className='InfoCard'>
        <div className='card'>
            <div className='info'>
                <div className='title'>
                    <h2>Join our community in creating a more sustainable future for everyone</h2>
                </div>

                <div className='paragraph-1'>
                    At Ecoyaan, we are more than just a platform. Our vision is to build an eco-conscious community for people and products.
                </div>

                <div className='paragraph-2'>
                Consider us your partner for all things sustainable. To keep you motivated on the journey, we will provide you with engaging information about climate change, the latest updates on climate policies and lifestyle tips that you can adopt to reduce your impact on the environment.
                </div>
            </div>

            <div className='image'>
                <img src="https://ecoyaan.com/images/Impact.png" alt="" className='image' />
            </div>
        </div>
        

        <div className='card'>
            <div className='info'>
                <div className='title'>
                    <h2>Carefully curated Eco-friendly products</h2>
                </div>

                <div className='paragraph-1'>
                    We believe that every purchase you make can have a positive impact on the planet and the future.
                </div>

                <div className='paragraph-2'>
                Soon, we will be connecting you with eco-friendly and sustainable products that are carefully selected based on their environmental and social benefits.
                </div>
            </div>

            <div className='image'>
                <img src="https://ecoyaan.com/images/Impact.png" alt="" className='image' />
            </div>
        </div>


        <div className='card'>
            <div className='info'>
                <div className='title'>
                    <h2>For businesses that care deeply about sustainability</h2>
                </div>

                <div className='paragraph-1'>
                    At Ecoyaan, we are more than just a platform. Our vision is to build an eco-conscious community for people and products.
                </div>

                <div className='paragraph-2'>
                Consider us your partner for all things sustainable. To keep you motivated on the journey, we will provide you with engaging information about climate change, the latest updates on climate policies and lifestyle tips that you can adopt to reduce your impact on the environment.
                </div>
            </div>

            <div className='image'>
                <img src="https://ecoyaan.com/images/OurStory4.png" alt="" className='image' />
            </div>
        </div>
       
    </div>
  )
}
