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
  faFirefoxBrowser,
  faInstagramSquare,
  faTwitterSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div
      className="  pt-5 pb-4"
      style={{
        backgroundColor: "#0c4c91",
        color: "#ced4da",
        marginTop: "100px",
      }}
    >
      <div className="container text-center text-md-start">
        <div className="row text-center text-md-start">
          <div className="col-md-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold text-white">
              second life general hospital
            </h5>
            <p>
              Hospitals may be compared and classified in various ways: by
              ownership and control, by type of service rendered, by length of
              stay, by size, or by facilities and administration provided.
              Examples include the general hospital, the specialized hospital,
              the short-stay hospital, and the long-term-care facility.
            </p>
          </div>

          <div className="col-md-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold text-white">services</h5>
            <p>
              {" "}
              <Link to="#" style={{ color: "#ced4da" }}>
                Nephrologist Care
              </Link>{" "}
            </p>
            <p>
              {" "}
              <Link to="#" style={{ color: "#ced4da" }}>
                Eye Care
              </Link>{" "}
            </p>
            <p>
              {" "}
              <Link to="#" style={{ color: "#ced4da" }}>
                Pediatrician Clinic
              </Link>{" "}
            </p>
            <p>
              {" "}
              <Link to="#" style={{ color: "#ced4da" }}>
                Prenatal Care
              </Link>{" "}
            </p>
            <p>
              {" "}
              <Link to="#" style={{ color: "#ced4da" }}>
                Medical Counseling"
              </Link>{" "}
            </p>
            <p>
              {" "}
              <Link to="#" style={{ color: "#ced4da" }}>
                Rehabilitation Center
              </Link>{" "}
            </p>
          </div>

          <div className="col-md-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold text-white">
              useful links
            </h5>
            <p>
              {" "}
              <Link to="#" style={{ color: "#ced4da" }}>
                Sign Up
              </Link>{" "}
            </p>
            <p>
              {" "}
              <Link to="#" style={{ color: "#ced4da" }}>
                Login
              </Link>{" "}
            </p>
            <p>
              {" "}
              <Link to="#" style={{ color: "#ced4da" }}>
                Privacy Policy
              </Link>{" "}
            </p>
            <p>
              {" "}
              <Link to="#" style={{ color: "#ced4da" }}>
                Terms & Conditions
              </Link>{" "}
            </p>
            <p>
              {" "}
              <Link to="#" style={{ color: "#ced4da" }}>
                Blogs
              </Link>{" "}
            </p>
            <p>
              {" "}
              <Link to="#" style={{ color: "#ced4da" }}>
                Developer
              </Link>{" "}
            </p>
          </div>

          <div className="col-md-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold text-white">
              contact information
            </h5>
            <p>
              <FontAwesomeIcon className="text-white" icon={faLocationArrow} />{" "}
              Kolatoli, Cox's Bazar, Bangladesh
            </p>
            <p>
              <FontAwesomeIcon className="text-white" icon={faPhone} /> 088 +880
              1580541540
            </p>
            <p>
              <FontAwesomeIcon className="text-white" icon={faEnvelope} />{" "}
              contact@secondlifehospital.com
            </p>
            <p>
              <FontAwesomeIcon className="text-white" icon={faFirefoxBrowser} />{" "}
              www.com
            </p>
          </div>
        </div>
        <hr className="mb-4" />
        <div className="row align-items-center">
          <div className=" col-md-7 ">
            <p>
              {" "}
              <span className="text-white">Mizba Uddin Tareq</span> © 2021 All
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
