import React, { useState } from "react";

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { url: "/images/Biryani.JPG", title: "Biryani" },
    { url: "/images/ob2.jpg", title: "Chicken Pokora" },
    { url: "/images/khanaset2.jpg", title: "KhanaSet" },
    { url: "/images/momoMain.jpg", title: "Momomain" },
    { url: "/images/Tmix.JPG", title: "Tandoori mix" },
    { url: "images/vp.jpg", title: "Vegsamosa" },
  ];

  const changeBodyBackgroundColor = () => {
    document.body.style.backgroundColor = "#ff3333";
  };

  const containerStyles = {
    position: "relative",
    width: "100%",
    height: "100%",
  };

  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const arrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
  };
  const dotStyles = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "20px",
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div style={containerStyles}>
      <div style={slideStyles}></div>
      <div style={{ ...arrowStyles, right: "10px" }} onClick={goToNext}>
        {/* Add your right arrow component or icon here */}
        ➡️
      </div>
      <div style={{ ...arrowStyles, left: "10px" }} onClick={goToPrevious}>
        {/* Add your left arrow component or icon here */}
        ⬅️
      </div>

      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            styles={dotStyles}
            onClick={() => goToSlide(slideIndex)}
          >
            ⚫️
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
