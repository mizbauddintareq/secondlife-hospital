import React from "react";
import { Carousel } from "react-bootstrap";
import slider1 from "../../../images/slider-1.jpg";
import slider2 from "../../../images/slider-2.jpg";
import slider3 from "../../../images/slider-3.jpg";

const Slider = () => {
  return (
    // slider component
    <div className="pt-5">
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={slider1} alt="First slide" />
          <Carousel.Caption>
            <h3>Reliable Test Result</h3>
            <p>
              We provide test results most reliably to improve your diagnostic
              care.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Emergency Team</h3>
            <p>
              11 Emergency Medical Officers and 21 nursing are always ready.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Neonatal Intensive Care</h3>
            <p>It is an intensive care unit specializing in the care of ill.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
