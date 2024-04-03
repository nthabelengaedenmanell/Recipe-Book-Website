// import React from 'react';
import StarRating from './StarRating';
import React, { useState } from 'react';
import './App.css';
import bigImage from './images/IMG_7183.jpg';




const FatCakeDetails = () => {

    const [isHeartRed, setHeartRed] = useState(false);

    const toggleHeartColor = () => {
      setHeartRed(!isHeartRed);
    };

  return (
    <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />

      <div className="navbar">
        <div className="navbar-logo">
          <a href="#logo">Logo</a>
        </div>
        <div className="navbar-links">
          <a href="#home">Home</a>
          <a href="#story">Our Story</a>
          <a href="#testimony">Testimonials</a>
          <a href="#contact">Contact Us</a>
          <input type="text" placeholder="Search" className="navbar-search"/>
        </div>
      </div>

            <div className="product-title">Recipe Title</div>   
            
            <div className='stars'>
                <StarRating rating={4} />
                <p>(99 reviews)</p>
                </div>   
                       
    <div className='icons'>
        <i className="fas fa-share-alt"> Share</i>
        <i className={`fas fa-heart ${isHeartRed ? 'red' : ''}`} 
          onClick={toggleHeartColor}
        > Save</i>
      </div>

      <div className='image-grid'>
                <img src={bigImage} alt='big' className='big-image' />
            <img src={bigImage} alt='small-1' className='small-image' />
            <img src={bigImage} alt='small-2' className='small-image' />
            <img src={bigImage} alt='small-3' className='small-image' />
            <img src={bigImage} alt='small-4' className='small-image' />
            </div>

            <div className='descriptionstitle'>
            Recipe Description
            <p>Bite through the crispy exterior of a freshly baked vetkoek into the soft goodness inside. <br></br>This is something every South African can identify with. This easy vetkoek recipe is simple to prepare and delicious.</p>
            </div>

            <ul class="ingredients-list">
            <li><i class="fas fa-check-double"></i> Ingredient 1</li>
            <li><i class="fas fa-check-double"></i> Ingredient 2</li>
            <li><i class="fas fa-check-double"></i> Ingredient 3</li>
            </ul>
            

 </div>
  );
}

export default FatCakeDetails;