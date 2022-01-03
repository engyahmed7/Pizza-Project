import React from "react";
import "../styles/About.css";
import bkImg from "../assets/multiplePizzas.jpeg";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${bkImg})` }}
      ></div>

      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          {" "}
          <h3>
            Pizza may have originated in Italy, but it’s found its spiritual
            home in the USA! And one of the best known of American innovations
            is the New York style pizza.
          </h3>{" "}
        </p>
      </div>
    </div>
  );
}
export default About;
