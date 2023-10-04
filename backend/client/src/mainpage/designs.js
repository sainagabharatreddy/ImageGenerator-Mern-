// src/mainpage/designs.js
import React from 'react';
import './design.css';

const img="https://storage.googleapis.com/generativeartbucket/UserGenerations/cristian/l1CspL7nuvmcaX70qDHgX2CZUL3u2-20230915-074149948147-0.png";
const img2="https://storage.googleapis.com/generativeartbucket/UserGenerations/cristian/l1CspL7nuvmcaX70qDHgX2CZUL3u2-20230914-183211554425-0.png";
const img3="https://storage.googleapis.com/generativeartbucket/UserGenerations/cristian/l353887-20230914-175124700797-0.png";
const img4="https://storage.googleapis.com/generativeartbucket/UserGenerations/cristian/l352667-20230914-020217609173-0.png";
const img5="https://storage.googleapis.com/generativeartbucket/UserGenerations/cristian/l352426-20230913-235355930482-0.png";
const img6="https://storage.googleapis.com/generativeartbucket/UserGenerations/cristian/l351264-20230913-145124805647-0.png";
const img7="https://storage.googleapis.com/generativeartbucket/UserGenerations/cristian/l158856-20230913-112651464702-2.png";
const img8="https://storage.googleapis.com/generativeartbucket/UserGenerations/cristian/l176652-20230727-174831041137-0.png";
const img9="https://storage.googleapis.com/generativeartbucket/UserGenerations/cristian/l231175-20230727-113617926358-0.png";

const Designs = () => {
 

  return (
   <>
   <h1 className='text'>Our Best Designs </h1>
    <div class="grid-container">

     
    <div class="grid-item">
      <img src={img} alt="mage 1"/>
    </div>
    <div class="grid-item">
      <img src={img2} alt="mage 2"/>
    </div>
    <div class="grid-item">
      <img src={img3} alt="mage 1"/>
    </div>
    <div class="grid-item">
      <img src={img4} alt="mage 2"/>
    </div>
    <div class="grid-item">
      <img src={img5} alt="mage 1"/>
    </div>
    <div class="grid-item">
      <img src={img6} alt="mage 2"/>
    </div>
    <div class="grid-item">
      <img src={img7} alt="mage 1"/>
    </div>
    <div class="grid-item">
      <img src={img8} alt="mage 2"/>
    </div>
    <div class="grid-item">
      <img src={img9} alt="mage 2"/>
    </div>
    
  </div>
   </>
  )
};

export default Designs;
