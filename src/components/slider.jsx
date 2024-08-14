import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import '../App.css'

const Slider = ({ info = []}) => {
  return (
    <Carousel>
      {info.map((data, index) => (
        <Carousel.Item key={index} className="sliderContainer">
          <img className="d-block w-100 custom-slider-img" src={data.src} alt={data.alt} />
          <Carousel.Caption>
            <h3>{data.captionTitle}</h3>
            <p>{data.captionText}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slider;
