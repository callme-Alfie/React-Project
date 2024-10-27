import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import './NavBar.css'; 
import { IoSearchCircleOutline } from "react-icons/io5";
import { VscThreeBars } from "react-icons/vsc";
import { FaInstagram } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";


const NavBar = () => {
  return (
    <div>
        <div className="nav-bar1">

        <MdMailOutline className="mail-icon" /><span className="holiday-email">Holiday planners@gmail.com</span>
        <FaPhoneAlt className="phone-icon" /><span className="holiday-contact">+123 456 7890</span>
        <FaFacebookF className='facebook-icon'/>
        <FaInstagram className='instagram-icon'/>
        <FaTwitter className='twitter-icon'/>

        </div>
        <div className="navbar-main">
            <span className="reserve-txt">Reserve</span>
            <div className="reserve-btn"></div>
            {/* <IoSearchCircleOutline className="search-icon" /> */}
            <div className="three-bar">
            <IoSearch className="search-icon" />
            <VscThreeBars className="three-bar-icon" />
            <div className="search-icon-shape"></div>
            <div className="logo"></div>
            </div>

        </div>
       {/* <nav className="nav-section">
        <div className="nav-links">
      <span>Home</span>
      <span>About</span>
      <span>Tour</span>
      <span>Blog</span>
      <span>Contact us</span>
      </div>
      
    </nav>  */}

    
    </div>
  )
}

export default NavBar
