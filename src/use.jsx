import React, { useState, useEffect } from "react";

const ImageSlider = () => {
  const images = [
    "https://via.placeholder.com/300x200?text=Image+1",
    "https://via.placeholder.com/300x200?text=Image+2",
    "https://via.placeholder.com/300x200?text=Image+3",
    "https://via.placeholder.com/300x200?text=Image+4"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // 2 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div style={{ width: "300px", height: "200px", overflow: "hidden" }}>
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
};

export default ImageSlider;
