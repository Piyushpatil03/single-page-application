import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Information from "./components/Information/Information";

function App() {
  return (
    <div>
      <div className="top_heading">
        <h3>Top Heading</h3>
      </div>
      <div className="container">
        <Sidebar />
        <Information />
      </div>
    </div>
  );
}

export default App;
