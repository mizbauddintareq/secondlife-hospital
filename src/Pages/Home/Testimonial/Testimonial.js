import React from "react";
import { Carousel, Container, Image } from "react-bootstrap";
import "./Testimonial.css";
const Testimonial = () => {
  return (
    <div id="review">
      <div
        style={{ color: "#0c4c91", marginTop: "80px", marginBottom: "40px" }}
      >
        <h1 className="text-uppercase fw-bold text-center">
          What our client say's
        </h1>
      </div>
      <div
        className="py-5"
        style={{
          backgroundColor: "#0077B6",
          color: "white",
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
                  <h3>Jose K Thomas</h3>
                  <p>
                    I came in this Second Life General Hospital because I had
                    problems with both my knees, it was so bad that I hardly
                    walk, so the doctor said that they have to change my knees,
                    which I do accept. By the grace of God the surgery was very
                    successful. So with what I have experience they really know
                    how to do it for that I can recommend those who had the same
                    problem. The services are very good and they are caring,
                    especially doctor Sandeep Wasnik, Mr. Rajesh, Madam Swapna
                    Thakur. Thanks for all you done for me. God bless you all.
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
                  <h3>Annonciatta Mukabaranga</h3>
                  <p>
                    I was looking for a dependable Joint Replacement Surgeon and
                    met Dr. Sandeep Wasnik a specialist of joint replacement and
                    Trauma Surgeon. With my first visit with x-rays, this young
                    doctor in his mid thirties with articulate words have
                    convinced me that I have come to the correct doctor at the
                    correct time. When I learned that he is an MS from
                    prestigious King Edward Memorial Medical College of Mumbai
                    with specialization in knee replacement surgery with a
                    fellowship from Germany, I decided to go under his care.
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
                  <h3>Jess Almeida</h3>
                  <p>
                    I am so relieved and thankful that my insurance company
                    shifted me under your care instead. You are a very competent
                    and compassionate doctor and I feel privileged to have been
                    a patient of yours. Hundreds of people back in the U.K. have
                    been praying for my recovery. They are all very grateful to
                    you for taking good care of me. The NHS will be grateful to
                    you for saving one of its GPs (We are in very short
                    supply!).
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
