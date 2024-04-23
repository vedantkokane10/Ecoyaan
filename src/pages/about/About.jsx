import React from 'react'
import './style.css'    
import { TeamCard } from './TeamCard'
export const About = () => {
  return (
    <div className='about-page'>
        <div className='about-section'>
          <h2>About Ecoyaan</h2>
          <div className='about-sub-section'>
            <div className='about-sub-section-info'>
                <p>At Ecoyaan, we are more than just a platform. Our goal is to build a community of eco-conscious people who share a common vision and passion for a more sustainable world.</p>
                <p>We recognize that sustainability is a journey (as the Sanskrit word “yaan” suggests). To keep you motivated on this journey, on our platform and our social media pages, you can find:</p>
                <ul>
                  <li>Tips and tricks to adopt a more eco-friendly and low-waste lifestyle</li>
                  <li>Videos, posts, and quizzes on climate change and sustainability</li>
                  <li>Events and pledges that invite you to adopt a more sustainable lifestyle</li>
                </ul>
              </div>
              <div className='about-sub-section-img'>
                  <img src="https://ecoyaan.com/images/about-us-sustainable-lifestyle-partner.png" alt="" />
              </div>
          </div>
        </div>

        <div className='values-section'>
          <h2>Our Values</h2>
          <div className='value-flex'>
            <div className='value-sub-section'>
                <div className='value-sub-section-img'>
                    <img src="https://ecoyaan.com/images/Trust.png" alt="" />
                </div>
                <div className='values-sub-section-info'> 
                    <h4>Trust</h4>
                    <p>We value the trust of our community. We strive to be transparent and honest in everything we do, from the content we share today to sourcing our products in the future.</p>
                </div>
            </div>
            <div className='value-sub-section'>
                  <div className='value-sub-section-img'>
                      <img src="https://ecoyaan.com/images/Authenticity.png" alt="" />
                  </div>
                  <div className='values-sub-section-info'> 
                      <h4>Authenticity</h4>
                      <p>We are genuine in our mission to promote sustainability and environmental awareness. An authentic community of eco-conscious people can inspire each other on the journey towards sustainability.</p>
                  </div>
            </div>
            <div className='value-sub-section'>
                <div className='value-sub-section-img'>
                    <img src="https://ecoyaan.com/images/Impact.png" alt="" />
                </div>
                <div className='values-sub-section-info'> 
                    <h4>Impact</h4>
                    <p>We measure our success by our impact on the planet and our community. We aim to empower our sellers and customers to make responsible choices that benefit their well-being and the well-being of others.</p>
                </div>
            </div>
            <div className='value-sub-section'>
                  <div className='value-sub-section-img'>
                      <img src="https://ecoyaan.com/images/FunAndEngaging.png" alt="" />
                  </div>
                  <div className='values-sub-section-info'> 
                      <h4>Fun & Engaging</h4>
                      <p>Moving towards a sustainable lifestyle and the constant news around climate change can be stressful. We aim to inject fun and creativity into everything we do, from designing our products to providing services.</p>
                  </div>
            </div>
          </div>
          
        </div>


        <div className='our-story'>
          <h2>Our Story</h2>
          <div className='our-story-section'>
            <div className='story-images'>
                  <img src="https://ecoyaan.com/images/about-us-founding-team-01.png" alt="" />
                  <img src="https://ecoyaan.com/images/about-us-founding-team-02.png" alt="" /> 
            </div>
            <div className='story-info'>
                  <p>We started Ecoyaan after watching an episode of “Our Planet II”, where we saw the devastating impact of plastic pollution and climate change on the albatross birds. That moment ignited our mission.</p>
                  <p>Our research suggests that many Indians understand global warming, yet access to sustainable practices and products remains limited. We also noticed that there is a lack of support for eco-friendly businesses.</p>
                  <p>We created Ecoyaan to connect consumers, businesses, and sustainability experts. We want to make it easy and convenient for people to access eco-friendly products and services, learn and share best practices, and support sustainability initiatives.</p>
                  <p>As founders, we are not perfect, but we are passionate. We believe that every small step matters. Join us and be a part of the Ecoyaan community — together, we’ll make a difference.</p>

            </div>
          </div>
        </div>

        <div className='team-section'>
          <h2>Meet the Team</h2>
          <div className='meet-team'>
          
          <TeamCard img="https://ecoyaan.com/images/favicon.png" name="XYZ" role="ENGINEER" info="This spot awaits you. Check out our open positions"/>
          <TeamCard img="https://ecoyaan.com/images/favicon.png" name="ABC" role="DESIGNER" info="Join us in creating a sustainable future!"/>
          <TeamCard img="https://ecoyaan.com/images/favicon.png" name="PQR" role="MARKETING" info="Help us spread the word about sustainability!"/>
          <TeamCard img="https://ecoyaan.com/images/favicon.png" name="LMN" role="RESEARCHER" info="Contribute to our efforts in eco-friendly research!"/>
          <TeamCard img="https://ecoyaan.com/images/favicon.png" name="JKL" role="DEVELOPER" info="Work with us to build innovative solutions!"/>
          <TeamCard img="https://ecoyaan.com/images/favicon.png" name="RST" role="ANALYST" info="Analyze data to drive sustainability initiatives!"/>
        </div>
        
        </div>
        


    </div>
  )
}
