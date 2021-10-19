import React from "react";
import {
  faEnvelope,
  faLocationArrow,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactUs = () => {
  return (
    <div>
      <section className="container-fluid  mt-5">
        <div className="row">
          {/* contact text center */}
          <div className="col-sm-12 text-center mb-4">
            <h1
              style={{
                color: "#0077B6",
              }}
            >
              Contact Us
            </h1>
            <hr className="w-25 mx-auto text-info" />
            <p
              style={{
                color: "#0077B6",
              }}
            >
              If you have got any question about any of our programmes let us
              know
            </p>
          </div>

          {/* contact form */}
          <div className="col-sm-12 mb-4 col-md-6">
            <div className="card border-info rounded-0">
              <div className="card-header p-0">
                <div
                  className=" text-white text-center py-2"
                  style={{
                    backgroundColor: "#0077B6",
                  }}
                >
                  <h3>
                    <FontAwesomeIcon icon={faEnvelope} /> Write to us:
                  </h3>
                  <p className="m-0">We will response as soon as possible</p>
                </div>
              </div>
              <div className="card-body p-3">
                <div className="form-group">
                  <label className="text-dark"> Your name </label>
                  <div className="input-group">
                    <input
                      value=""
                      type="text"
                      name="data[name]"
                      className="form-control"
                      id="inlineFormInputGroupUsername"
                      placeholder="Your name"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="text-dark">Your email</label>
                  <div className="input-group mb-2 mb-sm-0">
                    <input
                      type="email"
                      value=""
                      name="data[email]"
                      className="form-control"
                      id="inlineFormInputGroupUsername"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="text-dark">Subject</label>
                  <div className="input-group mb-2 mb-sm-0">
                    <input
                      type="text"
                      name="data[subject]"
                      className="form-control"
                      id="inlineFormInputGroupUsername"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="text-dark">Message</label>
                  <div className="input-group mb-2 mb-sm-0">
                    <input
                      type="text"
                      className="form-control"
                      name="mesg"
                      placeholder="Write Your Message"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <input
                    type="submit"
                    name="submit"
                    value="submit"
                    className="btn text-white btn-block rounded-0 py-2"
                    style={{
                      backgroundColor: "#0077B6",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* map and others */}
          <div className="col-sm-12 col-md-6">
            <div className="mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118830.37497981735!2d91.93286141082926!3d21.450883578620683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adc7ea2ab928c3%3A0x3b539e0a68970810!2sCox&#39;s%20Bazar!5e0!3m2!1sen!2sbd!4v1633330678318!5m2!1sen!2sbd"
                width="100%"
                height="300"
                frameborder="0"
                style={{ border: "0" }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>

            <div className="row text-center">
              <div className="col-md-4">
                <a
                  className=" px-3 text-white rounded mb-2 d-inline-block"
                  style={{
                    backgroundColor: "#0077B6",
                  }}
                >
                  <FontAwesomeIcon icon={faLocationArrow} size="3x" />
                </a>
                <p>Kolatoli, Cox's Bazar, Bangladesh</p>
              </div>
              <div className="col-md-4">
                <a
                  className=" px-3 text-white rounded mb-2 d-inline-block"
                  style={{
                    backgroundColor: "#0077B6",
                  }}
                >
                  <FontAwesomeIcon icon={faPhone} size="3x" />
                </a>
                <p>+88 01580541540</p>
              </div>
              <div className="col-md-4">
                <a
                  className=" px-3 text-white rounded mb-2 d-inline-block"
                  style={{
                    backgroundColor: "#0077B6",
                  }}
                >
                  <FontAwesomeIcon icon={faEnvelope} size="3x" />
                </a>
                <p>contact@secondlife.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
