import React from "react";
import AboutDark from "../images/image-about-dark.jpg";
import AboutLight from "../images/image-about-light.jpg";

function About() {
  return (
    <div className="about-wrapper">
      <div className="about-dark-wrapper">
        <img src={AboutDark} alt="Dark furniture" />
      </div>

      <div className="about-des">
        <h2>About our furniture</h2>
        <p>
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>

      <div className="about-light-wrapper">
        <img src={AboutLight} alt="Dark furniture" />
      </div>
    </div>
  );
}

export default About;
