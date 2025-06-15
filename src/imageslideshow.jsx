import imageSlide1 from './assets/imageslide.png'
import imageSlide2 from './assets/slide2.jpg'
import imageSlide3 from './assets/slide3.jpg'
import imageSlide4 from './assets/slide4.jpg'

import { useState,useEffect } from 'react';
import './imageslideshow.css'

export default function ImageSlider(){


    const images=[
      imageSlide1,
      imageSlide2,
      imageSlide3,
      imageSlide4
    ]


  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); 

    return () => clearInterval(interval); // cleanup on unmount
  }, []);


    return(
        <>
             <div className='slide'>
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        
      />
    </div>

        </>
    )
}