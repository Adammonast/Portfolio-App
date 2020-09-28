import React from "react";
import Me from "../images/Me.jpg";
import "../css/AboutMe.css";

function AboutMe() {
  return (
    <section className="about-container">
      <div className="about-card">
        <img src={Me} alt="Adam Monast  " />
        <div className="about-card-body">
          <h1>About Me</h1>
          <div className="about-card-content">
            <p>
              My name is Adam Monast and I am a full stack web developer
              currently seeking job opportunities for JavaScript development. I
              am currently enrolled in a code academy called Lambda School and
              have 1 year of experience with popular frameworks and libraries
              including: HTML, CSS, JavaScript, Python, LESS/SASS, Bootstrap,
              React, Redux, React-Router, Node, Express, PostgreSQL, SQLite3,
              and Heroku. Throughout my time within Lambda School, I had to
              overcome many obstacles and step out of my comfort zone to find
              innovative ways for creative problem solving.
            </p>
            <button
              type="button"
              className="fab fa-github"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "https://github.com/Adammonast";
              }}
            >
              {" "}
            </button>
            <button
              type="button"
              className="fab fa-linkedin"
              onClick={(e) => {
                e.preventDefault();
                window.location.href =
                  "https://www.linkedin.com/in/adam-monast-5635571a4/";
              }}
            >
              {" "}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
