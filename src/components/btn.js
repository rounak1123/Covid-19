import React, { useRef } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./btn.css";
function Buttons() {
  return (
    <div className="btns">
      <Link to="/news">
        <button className="btn1">News</button>
      </Link>
      <Link to="/covidTracker">
        <button className="btn1">Covid Tracker</button>
      </Link>
      <Link to="/health">
        <button className="btn1">Health and Beds</button>
      </Link>
      <Link to="/guidelines">
        <button className="btn1">GuideLines</button>
      </Link>
    </div>
  );
}

export default Buttons;
