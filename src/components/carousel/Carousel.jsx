import React, { useState } from "react";
import { BiLeftArrowCircle, BiRightArrowCircle } from "react-icons/bi";

const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);
  const IncreaseIndex = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };
  const DecreaseSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className="flex relative h-[800px] w-auto mt-20 justify-center self-center">
      <BiLeftArrowCircle
        className="carousel-arrow left-4"
        onClick={DecreaseSlide}
      />
      {data.map((item, index) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={index}
            className={slide === index ? "slide" : "slide-hidden"}
          />
        );
      })}
      <BiRightArrowCircle
        className="carousel-arrow right-4"
        onClick={IncreaseIndex}
      />
      <span className="bottom-4 absolute ">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};

export default Carousel;
