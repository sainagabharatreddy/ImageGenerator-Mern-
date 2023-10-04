

import React from 'react';


const img1="https://img.freepik.com/premium-vector/line-minimalist-interior-furniture-small-cupboard-logo-symbol-icon-vector-graphic-design_15473-9411.jpg?size=626&ext=jpg&ga=GA1.1.65624105.1690470804&semt=ais";
const img2="https://img.freepik.com/free-vector/illustration-creative-designer-stamp-banner_53876-6839.jpg?size=626&ext=jpg&ga=GA1.1.65624105.1690470804&semt=ais";
const img3="https://img.freepik.com/free-vector/elgant-furniture-logo_23-2148479017.jpg?size=626&ext=jpg&ga=GA1.2.65624105.1690470804&semt=ais";
const img4="https://img.freepik.com/free-vector/minimalist-furniture-logo-template-theme_23-2148467617.jpg?size=626&ext=jpg&ga=GA1.2.65624105.1690470804&semt=ais";
const img5="https://img.freepik.com/free-vector/flat-design-passport-stamp-set_23-2150511686.jpg?size=626&ext=jpg&ga=GA1.2.65624105.1690470804&semt=ais";
const img6="https://img.freepik.com/free-vector/elegant-furniture-logo_23-2148458526.jpg?size=626&ext=jpg&ga=GA1.2.65624105.1690470804&semt=ais";
const img7="https://img.freepik.com/free-vector/variety-vintage-badges_23-2147508297.jpg?size=626&ext=jpg&ga=GA1.2.65624105.1690470804&semt=ais";

const BrandedExperience = () => {
  return (
    <>
    <h2>Brands that Support us</h2>
    <div className="branded-experience" style={{ 'display': 'flex' , 'justify-content' : 'space-around',  'align-items': 'center', 'padding': '20px'}}>

      <div className="interior">
        <img src={img2} alt="Interior" />
        <p>Experience the luxurious interior of our brand.</p>
        <img className="brand-stamp" src={img5} alt="Brand 1 Stamp"   />
      </div>
      <div className="exterior">
        <img src={img3} alt="Exterior" />
        <p>Explore the sleek and stylish exterior design.</p>
        <img className="brand-stamp" src={img1} alt="Brand 2 Stamp" />
      </div>
      <div className="product">
        <img src={img4} alt="Product" />
        <p>Discover our signature product in action.</p>
        <img className="brand-stamp" src={img7} alt="Brand 3 Stamp" />
      </div>
      <div className="experience-logo">
        <img src={img6} alt="5 Years Experienced Logo" />
      </div>
    </div>
    </>
  );
};

export default BrandedExperience;
