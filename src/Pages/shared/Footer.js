import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationArrow,
  faMailBulk,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faInstagramSquare,
  faLinkedinIn,
  faTwitterSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div
      className=" text-white pt-5 pb-4"
      style={{ backgroundColor: "#0c4c91", marginTop: "100px" }}
    >
      <div className="container text-center text-md-start">
        <div className="row text-center text-md-start">
          <div className="col-md-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold text-warning">
              company name
            </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis doloribus, impedit sapiente, culpa possimus soluta
              similique voluptas asperiores repudiandae consequatur quos nostrum
              vel consectetur assumenda dicta praesentium eius! Eveniet est
              facilis error doloremque aliquid deserunt laudantium ducimus hic
              molestiae ipsam? Deleniti nisi neque numquam quasi temporibus
              repellat asperiores cupiditate harum!
            </p>
          </div>

          <div className="col-md-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold text-warning">
              services
            </h5>
            <p>
              {" "}
              <Link className="text-white">The Prividers</Link>{" "}
            </p>
            <p>
              {" "}
              <Link className="text-white">The Prividers</Link>{" "}
            </p>
            <p>
              {" "}
              <Link className="text-white">The Prividers</Link>{" "}
            </p>
            <p>
              {" "}
              <Link className="text-white">The Prividers</Link>{" "}
            </p>
            <p>
              {" "}
              <Link className="text-white">The Prividers</Link>{" "}
            </p>
            <p>
              {" "}
              <Link className="text-white">The Prividers</Link>{" "}
            </p>
          </div>

          <div className="col-md-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold text-warning">
              useful links
            </h5>
            <p>
              {" "}
              <Link className="text-white">The Prividers</Link>{" "}
            </p>
            <p>
              {" "}
              <Link className="text-white">The Prividers</Link>{" "}
            </p>
            <p>
              {" "}
              <Link className="text-white">The Prividers</Link>{" "}
            </p>
            <p>
              {" "}
              <Link className="text-white">The Prividers</Link>{" "}
            </p>
            <p>
              {" "}
              <Link className="text-white">The Prividers</Link>{" "}
            </p>
            <p>
              {" "}
              <Link className="text-white">The Prividers</Link>{" "}
            </p>
          </div>

          <div className="col-md-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold text-warning">
              contact information
            </h5>
            <p>
              <FontAwesomeIcon className="text-white" icon={faLocationArrow} />{" "}
              cox'sbazar
            </p>
            <p>
              <FontAwesomeIcon className="text-white" icon={faPhone} /> 088
              17553838
            </p>
            <p>
              <FontAwesomeIcon className="text-white" icon={faEnvelope} />{" "}
              mail@gail.com
            </p>
          </div>
        </div>
        <hr className="mb-4" />
        <div className="row align-items-center">
          <div className=" col-md-7 ">
            <p>
              {" "}
              <span className="text-warning">Mizba Uddin Tareq</span> © 2019 All
              Right Reserved
            </p>
          </div>

          <div className="col-md-5">
            <div className="text-center text-md-end">
              <ul className="list-unstyled list-inline">
                <Link to="/">
                  <FontAwesomeIcon
                    className="text-white me-2"
                    icon={faFacebookSquare}
                    size="2x"
                  />
                </Link>
                <Link to="/">
                  <FontAwesomeIcon
                    className="text-white me-2"
                    icon={faTwitterSquare}
                    size="2x"
                  />
                </Link>
                <Link to="/">
                  <FontAwesomeIcon
                    className="text-white me-2"
                    icon={faYoutubeSquare}
                    size="2x"
                  />
                </Link>
                <Link to="/">
                  <FontAwesomeIcon
                    className="text-white"
                    icon={faInstagramSquare}
                    size="2x"
                  />
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
