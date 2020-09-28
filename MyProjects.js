import React from "react";
import WeightDash from "./images/WeightDash.png";
import VacationDash from "./images/VacationDash.png";
import PlantsDash from "./images/PlantsDash.png";
import "./MyProjects.css";

function MyProjects() {
  return (
    <section className="myproject-card-container">
      <div className="myproject-cards">
        <img src={WeightDash} alt="Weight lifting journal dashboard" />
        <div className="myproject-card-body">
          <h2>Weight Lifting Journal</h2>
          <div className="myproject-card-content">
            <p>
              Web application for keeping track of a user's workout routine. The
              tech stack used include React, Redux, React Router, and CSS. This
              project was a collaborative effort between a team of 5
              cross-functional developers in 1 week. Personally responsible for
              implementing sign-up/login functionality and styling the entire
              project. All styling was done with CSS and icons from Font
              Awesome.
            </p>
            <button
              type="button"
              className="fab fa-github"
              onClick={(e) => {
                e.preventDefault();
                window.location.href =
                  "https://github.com/Weight-Lifting-Journal-bw-7/front-end";
              }}
            />{" "}
          </div>
        </div>
      </div>
      <div className="myproject-cards">
        <img src={VacationDash} alt="Vacation Planner dashboard" />
        <div className="myproject-card-body">
          <h2>Vacation Planner</h2>
          <div className="myproject-card-content">
            <p>
              Social media application to plan, invite, and communicate about a
              user's upcoming vacations. Tech stacks used include React, Redux,
              React Router, and React-Redux. This project was a collaborative
              effort between a team of 6 cross-functional developers in 1 week.
              Personally responsible for state management, and implementing CRUD
              operation's on the app's frontend.
            </p>
            <button
              type="button"
              className="fab fa-github"
              onClick={(e) => {
                e.preventDefault();
                window.location.href =
                  "https://github.com/Vacation-Planner-Build-Week/Front-end";
              }}
            />{" "}
          </div>
        </div>
      </div>

      <div className="myproject-cards">
        <img src={PlantsDash} alt="Water my plants dashboard" />
        <div className="myproject-card-body">
          <h2>Water My Plants</h2>
          <div className="myproject-card-content">
            <p>
              Web application for keeping track of a user's plant watering
              cycle. Tech stacks used include JavaScript, Node, Express, Axios,
              Jest, and React Testing Library. This project was a collaboration
              between a team of 5 cross-functional developers in 1 week. I was
              peronsally responsible for implementing various routes and
              features on the backend, and performing tests on each function.
            </p>
            <button
              type="button"
              className="fab fa-github"
              onClick={(e) => {
                e.preventDefault();
                window.location.href =
                  "https://github.com/Build-Week-Water-My-Plants-4/Node";
              }}
            />{" "}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyProjects;
