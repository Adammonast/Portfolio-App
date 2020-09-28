import React from "react";
import "./css/App.css";
import NavTabs from "./components/Nav";
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
