import React from "react";
import About from "../About/About";
import Services from "../Services/Services";

import Slider from "../Slider/Slider";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Slider></Slider>
      <About></About>
      <Services></Services>
      <Testimonial></Testimonial>
    </>
  );
};

export default Home;
