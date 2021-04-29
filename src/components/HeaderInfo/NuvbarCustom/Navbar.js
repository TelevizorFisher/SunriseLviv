import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../../../img-main/logoSun.png";
import { Link } from "react-router-dom";
import "../../../scss/NavbarCustom.scss";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <nav>
      <div className="navbar-center">
        <div className="navbar-header">
          <Link to="/">
            <img src={logo} className="logo" alt="logo" />
          </Link>
          <button className="navbar-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className="navlinks-container" ref={linksContainerRef}>
          <ul className="navlinks" ref={linksRef}>
            <li>
              <a>
                <Link to="/">Головна</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="/about">Про нас</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="/work">Наші проекти</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="/order">Замовлення</Link>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
