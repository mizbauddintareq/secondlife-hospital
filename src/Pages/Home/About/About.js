import React from "react";
import "./About.css";
import about1 from "../../../images/about-1.jpg";
import about2 from "../../../images/about-2.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="we-are-block" id="about">
      <div id="about-us-section">
        <div className="about-us-image">
          <img src={about1} alt="Lobby Image" />
        </div>

        <div className="about-us-info">
          <h2>Welcome To Second Life General Hospital</h2>

          <p>
            Digital Upgrade, located in Evansville, IN, makes it easy for
            businesses to create and manage their digital presence and
            logistics, meaning we can make your business more efficient and
            profitable! We believe in our community and want to help our local
            business economy grow and expand. We believe in our clients, and
            want to assist in their digital success. The D-UP team grades
            ourselves on outcomes, not on sales.
          </p>

          <Link to="#" title="About Us Button">
            ABOUT US
          </Link>
        </div>
      </div>

      <div id="history-section">
        <div className="history-image">
          <img src={about2} alt="Building Pic" />
        </div>

        <div className="history-info">
          <h2>Preserving Local History</h2>

          <p>
            In 2018, technology companies, Desktop Doctors & Digital Upgrade
            found a new place to call home, at 816 N. 9th Ave. Since the
            takeover of the 118-year-old building (formally Stippler Tool &
            Supply and Crown Chair Company), there have been many renovations
            completed to preserve this local piece of Evansville, IN history.
          </p>

          <Link to="#" title="History Button">
            HISTORY
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
