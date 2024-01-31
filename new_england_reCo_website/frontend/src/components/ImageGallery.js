import React, { useState, useEffect, useRef } from 'react';
import droneShot from './images/droneShot.jpeg';
import house from './images/house.jpg';
import IMG_0128 from './images/IMG_0128.jpeg';
import kettle from './images/kettle.jpeg';
import MainStRockport1 from './images/MainStRockport1.jpg';
import MainStRockport2 from './images/MainStRockport2.jpg';
import MedomakTerrace1 from './images/MedomakTerrace1.jpg';
import MedomakTerrace2 from './images/MedomakTerrace2.jpg';
import MedomakTerrace3 from './images/MedomakTerrace3.jpg';
import MedomakTerrace4 from './images/MedomakTerrace4.jpg';

const images = [droneShot, house, IMG_0128, kettle, MainStRockport1, MainStRockport2, 
  MedomakTerrace1, MedomakTerrace2, 
  MedomakTerrace3, MedomakTerrace4]; // Array of imported images

const extendedImages = [images[images.length - 1], ...images, images[0]];

const galleryStyles = {
  container: {
      position: 'relative',
      maxWidth: '500px',
      overflow: 'hidden',
      margin: 'auto'
  },
  imageWrapper: {
      display: 'flex',
      transition: 'transform 0.5s ease', // Smooth transition for sliding effect
  },
  image: {
      minWidth: '100%', // Each image takes full width of the container
      height: 'auto',
      objectFit: 'contain'
  },
  button: {
    position: 'absolute',
    top: '50%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    padding: '10px 15px',
    zIndex: 2,
    transform: 'translateY(-50%)',
    transition: 'background-color 0.3s',
},
prevButton: {
    left: '10px',
    borderRadius: '50%',
},
nextButton: {
    right: '10px',
    borderRadius: '50%',
},
disabledButton: {
    opacity: '0.5',
    cursor: 'default',
}
};

const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const imageWrapperRef = useRef(null);

  const goToPrevious = () => {
      setCurrentIndex(currentIndex - 1);
  };

  const goToNext = () => {
      setCurrentIndex(currentIndex + 1);
  };

  const updateIndex = () => {
      if (currentIndex === 0) {
          setCurrentIndex(images.length);
      } else if (currentIndex === extendedImages.length - 1) {
          setCurrentIndex(1);
      }
  };

  useEffect(() => {
      const imageWrapper = imageWrapperRef.current;
      imageWrapper.addEventListener('transitionend', updateIndex);

      return () => {
          imageWrapper.removeEventListener('transitionend', updateIndex);
      };
  }, [currentIndex]);

  useEffect(() => {
      const timer = setInterval(goToNext, 3000); // Change image every 3 seconds
      return () => clearInterval(timer);
  }, [currentIndex]);

  const getWrapperStyles = () => {
      return {
          ...galleryStyles.imageWrapper,
          transform: `translateX(-${currentIndex * 100}%)`
      };
  };

  return (
    <div style={{backgroundColor: '#005030'}}>
      <div style={galleryStyles.container}>
          <div ref={imageWrapperRef} style={getWrapperStyles()}>
              {extendedImages.map((image, index) => (
                  <img key={index} src={image} alt={`Slide ${index}`} style={galleryStyles.image} />
              ))}
          </div>
          <button 
                onClick={goToPrevious} 
                style={{ 
                    ...galleryStyles.button, 
                    ...galleryStyles.prevButton, 
                    ...(currentIndex === 0 ? galleryStyles.disabledButton : {}) 
                }}
                aria-label="Previous image"
                disabled={currentIndex === 0}
            >
                &lt;
            </button>
            <button 
                onClick={goToNext} 
                style={{ 
                    ...galleryStyles.button, 
                    ...galleryStyles.nextButton, 
                    ...(currentIndex === images.length - 1 ? galleryStyles.disabledButton : {}) 
                }}
                aria-label="Next image"
                disabled={currentIndex === images.length - 1}
            >
                &gt;
            </button>
      </div>
    </div>
  );
};
  
  export default ImageGallery;