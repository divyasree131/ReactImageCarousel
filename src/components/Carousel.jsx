import "./Carousel.css";
import { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ slides }) => {
  const [slide, setSlide] = useState(0);
  const prevSlide = () => {
    setSlide(slide === 0 ? slides.length - 1 : slide - 1);
  };
  const nextSlide = () => {
    setSlide(slide === slides.length - 1 ? 0 : slide + 1);
  };
  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(autoSlide); // Cleanup interval on unmount
  }, [slide]);
  return (
    <div className="carousel-container">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide} />
      {slides.map((item, idx) => (
        <img
          key={idx}
          src={item.src}
          alt={item.alt}
          className={slide === idx ? "slide" : "slide slide-hidden"}
        />
      ))}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={nextSlide}
      />
      <span className="indicators">
        {slides.map((_, idx) => {
          return (
            <button
              key={idx}
              onClick={() => setSlide(idx)}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
            ></button>
          );
        })}
      </span>
    </div>
  );
};
