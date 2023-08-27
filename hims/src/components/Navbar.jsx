import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div id="navig">
      <nav id="navbar">
        <div id="logoimg">
          <img src="logodark.png" alt="" id="logo" />

        </div>
        <div id="navlist">
          <li><Link className="text-decoration-none text-light" to="/">Home</Link></li>
          <li><Link className="text-decoration-none text-light" to="/BookPatient">Register Patient</Link></li>
          <li><Link className="text-decoration-none text-light" to="/Login">Login</Link></li>
          <li><Link className="text-decoration-none text-light" to="/Registration">Register Doctor</Link>

          </li>

        </div>


      </nav>
      {/* <nav id="navbarback"></nav> */}
    </div>
  );
}
