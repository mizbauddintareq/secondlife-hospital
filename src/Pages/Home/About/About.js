import React from "react";
import "./About.css";
import about1 from "../../../images/about-1.jpg";
import about2 from "../../../images/about-2.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div style={{ marginTop: "80px" }}>
      <div className="my-5 text-center" style={{ color: "#0c4c91" }}>
        <h1 className="text-uppercase fw-bold">
          Know About Second Life General Hospital
        </h1>
      </div>
      <div className="we-are-block" id="about">
        <div id="about-us-section">
          <div className="about-us-image">
            <img src={about1} alt="Lobby Image" />
          </div>

          <div className="about-us-info">
            <h2>Welcome To Our Hospital</h2>

            <p>
              Hospital may be compared by the number of beds they contain.
              Modern hospitals tend to rarely exceed 800 beds, and though some
              integrated health facilities may have more beds, they often
              comprise multiple geographic locations, each with several hundred
              beds. In the early 21st century, it was thought that a facility of
              800 beds was the largest unit that could be governed
              satisfactorily from a single administrative unit while maintaining
              a corporate unity.
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
              When was the hospital invented Hospices, initially built to
              shelter pilgrims and messengers between various bishops, were
              under Christian control developed into hospitals in the modern
              sense of the word. In Rome itself, the first hospital was built in
              the 4th century AD by a wealthy penitent widow, Fabiola.
            </p>

            <Link to="#" title="History Button">
              HISTORY
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
