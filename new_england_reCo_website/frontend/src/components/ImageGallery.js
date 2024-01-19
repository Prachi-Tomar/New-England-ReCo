import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import droneShot from './images/droneShot.jpeg';
import house from './images/house.jpg';
import IMG_0128 from './images/IMG_0128.jpeg';
import IMG_0408 from './images/IMG_0408.jpg';
import kettle from './images/kettle.jpeg';
import MainStRockport1 from './images/MainStRockport1.jpg';
import MainStRockport2 from './images/MainStRockport2.jpg';
import MedomakTerrace1 from './images/MedomakTerrace1.jpg';
import MedomakTerrace2 from './images/MedomakTerrace2.jpg';
import MedomakTerrace3 from './images/MedomakTerrace3.jpg';
import MedomakTerrace4 from './images/MedomakTerrace4.jpg';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const StyledImage = styled.img`
  width: 75%;
  height: 50%;
  object-fit: cover;
  border-radius: 10px;
  animation: ${props => props.fadeIn ? fadeIn : fadeOut} 2s linear;
  display: ${props => props.show ? 'block' : 'none'};
`;

function ImageGallery() {
  const images = [droneShot, house, IMG_0128, IMG_0408, kettle, MainStRockport1, MainStRockport2, 
    MedomakTerrace1, MedomakTerrace2, 
    MedomakTerrace3, MedomakTerrace4]; // Array of imported images
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fadeIn, setFadeIn] = useState(true);
  
    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setFadeIn(false);
        setTimeout(() => {
          setCurrentIndex((currentIndex + 1) % images.length);
          setFadeIn(true);
        }, 2000);
      }, 4000);
  
      return () => clearTimeout(timeoutId);
    }, [currentIndex, images.length]);
  
    return (
      <div>
        {images.map((img, index) => (
          <StyledImage
            key={index}
            src={img}
            alt={`Image ${index + 1}`}
            show={index === currentIndex}
            fadeIn={fadeIn}
          />
        ))}
      </div>
    );
  }
  
  export default ImageGallery;