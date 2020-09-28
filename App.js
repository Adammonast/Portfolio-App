import React from "react";
import "./App.css";
import NavTabs from "./Nav";
// import Grey from "./images/grey.JPG";
// import Banner from "./images/Banner.JPG";
import Banner2 from "./images/Banner2.JPG";

function App() {
  return (
    <div className="App">
      <header className="header-image">
        <img src={Banner2} alt="Portfolio Banner" />
      </header>
      <NavTabs />
    </div>
  );
}

export default App;
