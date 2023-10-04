import React from 'react';
import './services.css';
import { Link } from "react-router-dom";

const servicesData = [
  {
    category: 'Interior Design',
    services: [
      {
        title: 'Living Room Design',
        description: 'Create a stunning living room tailored to your style.',
   
        title1: 'Kitchen Design',
        description1: 'Design a modern and functional kitchen space.',
     
        title2: 'Bedroom Design',
        description2: 'Transform your bedroom into a cozy retreat.',
      },
    ],
  },
  {
    category: 'Exterior Design',
    services: [
      {
        title: 'Garden Design',
        description: 'Enhance your outdoor space with beautiful landscaping.',
        title1: 'Patio Design',
        description1: 'Design a relaxing patio area for outdoor enjoyment.',
        title2: 'Swimming Pool Design',
        description2: 'Create a luxurious swimming pool for your home.',
      },
    ],
  },
  {
    category: 'Construction Materials',
    services: [
      {
        title: 'Flooring Materials',
        description: 'High-quality flooring materials for your projects.',
        title1: 'Cabinetry Materials',
        description1: 'Custom cabinets and cabinetry materials.',
        title2: 'Countertop Materials',
        description2: 'Durable and stylish countertop materials.',
      },
      
    ],
  },
];

const Services = () => {
  return (
    <div className="services">
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
      <h2>Our Services</h2>
      {servicesData.map((category, index) => (
        <div className="service-category" key={index}>
          <h3>{category.category}</h3>
          <div className="service-items">
            {category.services.map((service, serviceIndex) => (
              <div className="service-item" key={serviceIndex}>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
                <h4>{service.title1}</h4>
                <p>{service.description1}</p>
                <h4>{service.title2}</h4>
                <p>{service.description2}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
