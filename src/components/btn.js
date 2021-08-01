import React, { useRef } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./btn.css";
function Buttons() {
  const navbar = useRef(null);
  // const hero = document.querySelector(".hero");
  const offt = navbar.offsetTop;

  window.addEventListener("scroll", () => {
    if (window.scrollY >= offt) {
      navbar.classList.add("aft");
      document.body.style.paddingTop = navbar.offsetHeight + "px";
    }
    if (window.scrollY < offt) {
      navbar.classList.remove("aft");
      document.body.style.paddingTop = 0;
    }
  });

  return (
    <div ref={navbar} className="btns">
      <Link to="/news">
        <button className="btn1">News</button>
      </Link>
      <Link to="/">
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
