import React from 'react'
import "./Content.css"

const Content = () => {
  return (
    <div>
         <div className="home-image">

 
<span className="get-ready">Get Ready to <br />Travel The World</span>
<div className="the-world">
<span className="description1">A journey of a 1000 miles starts with a single step. Import the full<br />
demo content with 1 click and create a head-turning website for <br />
your travel agency</span>
<div className="travel-world-div"></div>
<div className="ticket-section-div">
  <input type="text" placeholder="Where To?" className="where-to-text"/>
  <input type="text" placeholder="When?" className="when-box"/>
  <input type="text" placeholder="Travel Type" className="travel-type"/>
  <div className="find-now-btn">
    <span className="find-now-txt">Find Now</span>
  </div>
</div>
</div>
</div>
<div className="about-div">
   <span className="about-us">About us</span>
  <span className="plan">Plan Your Trip with Us</span>
  <span>Far far away, behind the word mountains, far from the countries Vokalia and<br />
     Consonantia, there live the blind texts. Separated they live in<br />
      Bookmarksgrove right at the coast of the Semantics, a large language ocean. <br />
      A small river named Duden flows by their place and supplies it with the<br />
       necessary regelialia. It is a paradisematic country, in which roasted parts of<br />
        sentences fly into your mouth. Even the all-powerful Pointing has no control<br />
         about the blind texts it is an almost unorthographic. Italic Mountains, she<br />
          had a last view back on the skyline</span>
  <div className="read-more-btn">
    <span>READ MORE</span>
  </div>
</div>
    </div>
  )
}

export default Content
