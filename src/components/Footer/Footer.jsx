import React from 'react'
import './style.css'
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h1>Company</h1>
          <p>Registered Address: 1-N-12T-781/1 Sri Krishna Vilasa, Urvastores, Ashoknagar(MR), Mangalore, Dakshina Kannada- 575006, Karnataka, India</p>
          <p>Legal Business Name: Kindkarma E-Retail Private Limited</p>
          <p>CIN: U47912KA2023PTC182592</p>
          <p>Telephone: +91 9980490777</p>
        </div>
        <div className="footer-section quick-links">
          <h1>Links</h1>
          <ul>
            <li>About Us</li>
            <li>Sell on Ecoyaan</li>
            <li>Terms of use</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="footer-section subscribe">
          <h1>Subscribe</h1>
          <p>Subscribe to receive updates on blogs, future launches and more!</p>
          <form>
            <input type="email" placeholder="Your Email Address" />
            <button type="submit">Subscribe</button>
          </form>
          <p>By subscribing, you agree to receive notifications. <a href="/privacy-policy">Privacy Policy</a></p>
        </div>
      </div>
    </footer>
  )
}

