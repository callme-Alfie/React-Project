import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="first-section-div">
          <div className="logo-div"></div>
          <div className="holiday-discription"></div>
          <div className="email-section"></div>
          <div className="payment-method-section"></div>
        </div>
        <div className="middle-section-div">
          <span>Navigation</span>
          <div className="straight-line-div"></div>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Destination</li>
            <li>Tour</li>
            <li>Blog</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="last-section-div">
          <div className="straight-line-div"></div>

          <div className="call-us-line"></div>
          <span>Call Us</span>
          <span>+1234567890</span>

          <div className="email-for-us-line"></div>
          <span>Email for Us</span>
          <span>holidayplanners@gmail.com</span>

          <div className="location-line"></div>
          <span>Location</span>
          <span>Main Street, Victoria 8007.</span>

          <div className="follow-us-line"></div>
          <span>Follow us</span>

        </div>

      </div>
      <div className="straight-line"></div>
        <span>Copyright 2020 Alfie Code Lab. All Rightd Reserved.</span>
        <span>Privacy | Terms of Use | Cookie Policy</span>
    </div>
  )
}

export default Footer
