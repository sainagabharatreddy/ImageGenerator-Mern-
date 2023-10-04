import React from 'react';
import './about.css';
import { Link } from "react-router-dom";
import fbIcon from "./media/fbicon.png";
import twitterIcon from "./media/twittericon.png";
import linkedinIcon from "./media/linkedinicon.png";

const interiorDesigns = [
  {
    title: 'Living Room',
    image: 'https://img.freepik.com/free-photo/modern-hotel-room-with-illuminated-pictures_1203-1485.jpg?size=626&ext=jpg&ga=GA1.2.65624105.1690470804&semt=ais',
  },
  {
    title: 'Kitchen',
    image: 'https://img.freepik.com/free-photo/luxury-domestic-kitchen-with-elegant-wooden-design-generated-by-ai_188544-15357.jpg?size=626&ext=jpg&ga=GA1.1.65624105.1690470804&semt=ais',
  },
  {
    title: 'Bedroom',
    image: 'https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?size=626&ext=jpg&ga=GA1.2.65624105.1690470804&semt=ais',
  },
  {
    title: 'hall',
    image: 'https://img.freepik.com/premium-photo/bright-cozy-modern-minimalist-living-room-interior-with-sofa-rattan-furniture-wallpaper_343960-1802.jpg'
  },
  {
    title: 'table',
    image: 'https://img.freepik.com/free-photo/modern-styled-entryway_23-2150695839.jpg?t=st=1696054148~exp=1696057748~hmac=96aa63405877e4077981d14b7039766abdaa4138fb7507e8a9b395127ff79af6&w=996'
  },
  {
    title: 'gut',
    image: 'https://img.freepik.com/free-photo/room-house-decorated-with-brazilian-folklore-design_23-2150794199.jpg'
  },
];

const exteriorDesigns = [
  {
    title: 'Garden',
    image: 'https://img.freepik.com/free-photo/covered-lifestyle-garden-with-indoor-outdoor-living_1127-3427.jpg?size=626&ext=jpg&ga=GA1.2.65624105.1690470804&semt=ais',
  },
  {
    title: 'Patio',
    image: 'https://img.freepik.com/free-photo/rustic-patio-furniture-house-deck-with-vegetation_23-2150698288.jpg?size=626&ext=jpg&ga=GA1.2.65624105.1690470804&semt=ais',
  },
  {
    title: 'Swimming Pool',
    image: 'https://img.freepik.com/free-photo/view-hotel-pool_23-2150683433.jpg',
  },
  {
    title: 'Home',
    image: 'https://img.freepik.com/free-photo/house-with-balcony-sky-background_1340-32174.jpg',
  },
  {
    title: 'Home1',
    image: 'https://img.freepik.com/premium-photo/photo-modern-twostory-house-with-large-windows_822108-7342.jpg',
  },
  {
    title: 'House',
    image: 'https://img.freepik.com/premium-photo/beautiful-modern-house-exterior-with-carport-modern-residential-district-minimalist-building_326694-9258.jpg',
  },
];

function DesignCard({ title, image }) {
  return (
    <div className="design-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <h3>Best Designs</h3>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <div className="navbar-containers">
        <div className="navbar-content">
          <div className="navbar-left">
          </div>
          <h1 className="navbar-logo">DREAM HOME</h1>
        </div>
        <div className="navbar-links">
          <span className="nav-link"><Link to='/home' className="lin">Home</Link></span>
          <span className="nav-link"><Link to='/about' className="lin">About</Link></span>
          <span className="nav-link"><Link to='/services' className="lin">Services</Link></span>
          <span className="nav-link"><Link to='/' className="lin">Premium</Link></span>
          <span className="nav-link"><Link to='/' className="lin">Logout</Link></span>
        </div>
      </div>
      <h1>About Page</h1>
      <h1>Interior & Exterior Designs</h1>
      <section className="designs">
        <h2>Interior Designs</h2>
        <div className="design-cards">
          {interiorDesigns.map((design, index) => (
            <DesignCard key={index} title={design.title} image={design.image} />
          ))}
        </div>
      </section>
      <section className="designs">
        <h2>Exterior Designs</h2>
        <div className="design-cards">
          {exteriorDesigns.map((design, index) => (
            <DesignCard key={index} title={design.title} image={design.image} />
          ))}
        </div>
      </section>
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
  );
}

export default App;
