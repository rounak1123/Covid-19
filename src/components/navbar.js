import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <div className="logo1">
                <span class="heade1">COVID XIX</span>
              </div>
            </li>
            <li className="nav-item">
              <Link
                to={window.location.pathname == "/" ? "home1" : "homex1"}
                spy={true}
                smooth={true}
                duration={300}
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Scroll to top
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={""}
                spy={true}
                smooth={true}
                duration={300}
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                section1
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to=""
                spy={true}
                smooth={true}
                duration={300}
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                section2
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" spy={true} smooth={true} duration={300}>
                section3
              </Link>
            </li>{" "}
            <li className="nav-item">
              <Link to="" spy={true} smooth={true} duration={300}>
                Scroll to bottom
              </Link>
            </li>{" "}
            <li className="inputField">
              <input
                type="text"
                className="inp"
                placeholder="  Type to search"
              />
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}></div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
