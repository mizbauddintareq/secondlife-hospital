import React from "react";
import { Carousel, Container, Image } from "react-bootstrap";
import "./Testimonial.css";
const Testimonial = () => {
  return (
    <div>
      <h1>What Our Client Says</h1>
      <div
        className="py-5"
        style={{
          backgroundColor: "#0077B6",
          color: "white",
          marginTop: "100px",
        }}
      >
        <Container>
          <Carousel>
            <Carousel.Item>
              <div className="row d-flex align-items-center justify-content-center">
                <div className="col-md-4 text-center">
                  <Image
                    src="https://i.ibb.co/CmXpKY2/pexels-justin-shaifer-1222271.jpg"
                    roundedCircle
                  />
                </div>
                <div className="col-md-8 text-center">
                  <h3>This is My name</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                    temporibus necessitatibus deleniti magnam voluptatibus
                    libero.
                  </p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="row d-flex align-items-center">
                <div className="col-md-4 text-center">
                  <Image
                    src="https://i.ibb.co/F0YjK9F/pexels-christina-morillo-1181690.jpg"
                    roundedCircle
                  />
                </div>
                <div className="col-md-8 text-center">
                  <h3>This is My name</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                    temporibus necessitatibus deleniti magnam voluptatibus
                    libero.
                  </p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="row d-flex align-items-center">
                <div className="col-md-4 text-center">
                  <Image
                    src="https://i.ibb.co/QnhbkcM/pexels-brett-sayles-1073097.jpg"
                    roundedCircle
                  />
                </div>
                <div className="col-md-8 text-center">
                  <h3>This is My name</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                    temporibus necessitatibus deleniti magnam voluptatibus
                    libero.
                  </p>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>
    </div>
  );
};

export default Testimonial;
