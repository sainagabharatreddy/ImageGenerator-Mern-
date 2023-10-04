import React from "react";
import "./main.css"; 

import starsImg from "./media/Star.png";
import logosImg from "./media/logos.png";
import heroImg from "./media/hero_illustration.png"
import buyIcon from "./media/buy_icon.png";
import sellIcon from "./media/sell_icon.png";
import rentIcon from "./media/rent_icon.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import imagee from "./media/WhatsApp Image 2023-09-27 at 20.54.20.jpg"
import kong from "./media/kong.jpg"
import houseCard from "./media/houseCard.png";
import fbIcon from "./media/fbicon.png";
import twitterIcon from "./media/twittericon.png";
import linkedinIcon from "./media/linkedinicon.png";
import homeIllustration from "./media/illustration.png";
import { Link } from "react-router-dom";
import Video from "./video"
import logoimg from './logoimp.jpg'
import Logoimp from './logoimp.jpg'
import def from "./dream_home-removebg.png"



const img1="https://homedesigns.ai/web/images/topworkfor1.png"
const img2="https://homedesigns.ai/web/images/topworkfor2.png"

const img3="https://storage.googleapis.com/generativeartbucket/UserGenerations/cristian/input-l231175-20230727-103903140903.png";
const img4="https://storage.googleapis.com/generativeartbucket/UserGenerations/cristian/l231175-20230727-103903140903-0.png";
const img5="https://storage.googleapis.com/generativeartbucket/UserGenerations/cristian/input-l229636-20230726-171350439670.png";
const img6="https://storage.googleapis.com/generativeartbucket/UserGenerations/cristian/l229636-20230726-171350439670-0.png";
const img7="https://storage.googleapis.com/generativeartbucket/UserGenerations/cristian/input-l225118-20230726-095136941866.png";
const img8="https://storage.googleapis.com/generativeartbucket/UserGenerations/cristian/l225118-20230726-095136941866-3.png";


function Home() {


 

  return (
    <>
    <div className="img">
     <div className="navbar-container">
      <div className="navbar-content">
        <div className="navbar-left">
          </div>
          <h1 className="navbar-logo"  >Dream HOME</h1>
        </div>

        <div className="navbar-links">
          <span className="nav-link"><Link to='/home' className="lin">Home</Link></span>
          <span className="nav-link"><Link to='/about' className="lin">About</Link></span>
          <span className="nav-link"><Link  to='/services'className="lin">Services</Link></span>
          <span className="nav-link"><Link to='/' className="lin" >Premium</Link></span>
          <span className="nav-link"><Link to='/' className="lin" >Logout</Link></span>
        </div>
      </div>

    <div className="hero-container">
  <div className="hero-content">
    <div className="hero-box">
      <div className="hero-text">
        <p className="welcome-text">Welcome to Dream Home</p>
        <h1 className="hero-title animated-text">
          Discover a Best design for your Home and Interior.
        </h1>
        <p className="hero-description">
          Be the first to get the best real estate deals before they hit the
          mass market! Hot foreclosure deals with one simple search!
        </p>
       <Link className="link" to="/main">Get started with Us</Link>
      </div>
      <div className="hero-image">
        <img
          src={heroImg}
          alt="heroImg"
          className="hero-img"
        />
      </div>
    </div>
  </div>
</div>

<div className="vid">
<Video/>
</div>
             
            
              <div className="companies-container">
      <div className="companies-content">
        <div className="companies-box">
          <img src={def} alt="logo" className="logo-img" height={100} />
          <p className="company-text">More than 45,000 trust Besnik</p>
        </div>

        <div className="companies-box">
          <img src={starsImg} alt="stars" className="stars-img" />
          <p className="company-text">5-Star Rating (2k+ Reviews)</p>
        </div>
      </div>

      <div className="logos-container">
        <img src={logosImg} alt="logos" className="logos-img" />
      </div>
    </div>
    <div className="guide-container">
      <div className="guide-content">
        <div className="divider"></div>

        <h3 className="guide-title">How it works?</h3>

        <div className="custom-box">
          <p className="custom-text">
            Everything you need to know when you want to buy, rent, or sell -
            All in one place
          </p>
        </div>

        <div className="guides-box">
          <div className="guide-box">
            <img src={buyIcon} alt="buyIcon" className="guide-icon" />
            <h2 className="guide-heading">Desigining Guides</h2>
            <div className="guide-link">
              <p className="guide-link-text">How to Design</p>
              <ArrowRightAltIcon className="guide-link-icon" />
            </div>
          </div>

          <div className="guide-box">
            <img src={rentIcon} alt="rentIcon" className="guide-icon" />
            <h2 className="guide-heading">Interior Guides</h2>
            <div className="guide-link">
              <p className="guide-link-text">How to Decorate Articles</p>
              <ArrowRightAltIcon className="guide-link-icon" />
            </div>
          </div>

          <div className="guide-box">
            <img src={sellIcon} alt="sellIcon" className="guide-icon" />
            <h2 className="guide-heading">Exterior  Guides</h2>
            <div className="guide-link">
              <p className="guide-link-text">How to Create  Dream Home </p>
              <ArrowRightAltIcon className="guide-link-icon" />
            </div>
          </div>
        </div>

        <button className="guide-button">See Full Guides</button>
      </div>
    </div>

  
    <div className="image-gallery">
      <div className="image-box">
        <img src={img3} alt="kmage 1" className="gallery-image" />
        <div className="image-description">Image 1 with basic design</div>
      </div>
      <div className="arrow">➤</div>
      <div className="image-box">
        <img src={img4} alt="kmage 2" className="gallery-image" />
        <div className="image-description">Image after using Our Dream Home</div>
      </div>
    </div>
    <div className="image-gallery">
      <div className="image-box">
        <img src={img5} alt="kmage 1" className="gallery-image" />
        <div className="image-description">Image with basic design</div>
      </div>
      <div className="arrow">➤</div>
      <div className="image-box">
        <img src={img6} alt="kmage 2" className="gallery-image" />
        <div className="image-description">Image after using Our Dream Home</div>
      </div>
    </div>
    <div className="image-gallery">
      <div className="image-box">
        <img src={img7} alt="kmage 1" className="gallery-image" />
        <div className="image-description">Image with basic design</div>
      </div>
      <div className="arrow">🔜</div>
      <div className="image-box">
        <img src={img8} alt="kmage 2" className="gallery-image" />
        <div className="image-description">Image after using Our Dream Home</div>
      </div>
    </div>
   


        <div className="tech">
          <h1>Easy & Fast to Use  Technology</h1>
            <img src={img1}  className="tech" alt="gone"/> <img src={img2}className="tech" alt="gone"/>
        </div>

           <div className="des">
             <img src={imagee} alt="not loaded"/>
           </div>

           <div className="des1">
            <h2>Design Interiors & Exterior  with  In 4 Different Modes</h2>
             <img src={kong} alt="not loaded"/>
           </div>


        <div className="details">
        <div className="details-container">
      <div className="custom-box">
        <div className="img-container">
          <img src={houseCard} alt="house" className="house-img" />
        </div>

        <div className="divider"></div>

        <h1 className="large-text">
          You’ve found a neighborhood you love.
        </h1>

        <p className="small-text">
          When you own a home, you commit to living in one location for a period
          of time. We are here to ensure that this will be a memorable
          experience for you.
        </p>
      </div>

      <div className="text-flexbox">
        <div className="info-box">
          <h2 className="large-text">2500+</h2>
          <p className="small-text">Homes For Sale</p>
        </div>

        <div className="info-box">
          <h2 className="large-text">3000+</h2>
          <p className="small-text">Properties Rented</p>
        </div>

        <div className="info-box">
          <h2 className="large-text">3500+</h2>
          <p className="small-text">Homes Sold</p>
        </div>
      </div>
    </div>
            </div>
            <div className="get-started-container">
      <div className="custom-container">
        <div className="text-box">
          <h1 className="header">Featured Properties</h1>
          <p className="subheader">Everything you need to know about houses!</p>

        
        </div>

        <img
          src={homeIllustration}
          alt="illustration"
          className="illustration"
        />
      </div>
    </div>

  <div className="footer-container">
      <div className="footer-column">
        <h3 className="footer-heading">Products</h3>
        <p className="footer-link">Listing</p>
        <p className="footer-link">Properties</p>
        <p className="footer-link">Agents</p>
        <p className="footer-link">Blog</p>
      </div>

      <div className="footer-column">
        <h3 className="footer-heading">Resources</h3>
        <p className="footer-link">Our Homes</p>
        <p className="footer-link">Stories</p>
        <p className="footer-link">Video</p>
        <p className="footer-link">Free Trial</p>
      </div>

      <div className="footer-column">
        <h3 className="footer-heading">Company</h3>
        <p className="footer-link">Partnerships</p>
        <p className="footer-link">Terms of use</p>
        <p className="footer-link">Privacy</p>
        <p className="footer-link">Sitemap</p>
      </div>

      <div className="footer-column">
        <h3 className="footer-heading">Get in touch</h3>
        <p className="footer-text">
          You’ll find your next home, in any style you prefer.
        </p>

        <div className="icon-box">
          <img src={fbIcon} alt="fbIcon" className="icon" />
          <img src={twitterIcon} alt="twitterIcon" className="icon" />
          <img src={linkedinIcon} alt="linkedinIcon" className="icon" />
        </div>
      </div>
    </div>

    </div>
    </>
  );
}

export default Home;
