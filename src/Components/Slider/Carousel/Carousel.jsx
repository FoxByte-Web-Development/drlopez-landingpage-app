import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevIndex = (currentIndex - 1);
  const nextIndex = (currentIndex + 1);

  return (
      <div>
          <div className=' flex items-start'>
            <div>
                <img src={images[prevIndex]} alt="hola" />
            </div>
            <div>
                <img src={images[currentIndex]} alt="hola" />
            </div>
            <div>
                <img src={images[nextIndex]} alt="hola" />
            </div>
          </div>

          <button className=' ml-4' onClick={() => setCurrentIndex(nextIndex)}>Next</button>
          <button className=' ml-4' onClick={() => setCurrentIndex(prevIndex)}>Previous</button>
    </div>
  );
};

export default Carousel;
