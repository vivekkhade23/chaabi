import React, { useState } from "react";
import "./Navbar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">Chaabi Assignment</div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">Touch Typing</li>
            <li className="nav-item">Easy Level</li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;