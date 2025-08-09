import React, { useEffect, useState } from 'react';
import { assets } from '../../../assets/assets';
const Banner = () => {
   
    const sliderData = [
    {
      id: 1,
      imgSrc: assets.slider1,
    },
    {
      id: 2,
      imgSrc: assets.slider2,
    },
    {
      id: 3,
      imgSrc: assets.slider3,
    },
    {
      id: 4,
      imgSrc: assets.slider4,
    },
    {
      id: 5,
      imgSrc: assets.slider5,
    },
    {
      id: 6,
      imgSrc: assets.slider6,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sliderData.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="overflow-hidden relative w-full">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {sliderData.map((slide, index) => (
          <div
            key={slide.id}
            className="flex flex-col-reverse md:flex-row items-center justify-between  min-w-full"
          >
            <div className="flex items-center flex-1">
              <img
                className="w-full"
                src={slide.imgSrc}
                alt={`Slide ${index + 1}`}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mt-8">
        {sliderData.map((_, index) => (
          <div
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              currentSlide === index ? "bg-orange-600" : "bg-gray-500/30"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Banner;