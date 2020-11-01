import React from "react";
import { Link } from "react-router-dom";
import img from "../../../Images/me.png";

const NavBarBlack = () => {
  return (
    <nav className=" navbar navbar-expand-md   fixed-top">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#collapse_target"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-flex justify-content-between "
          id="collapse_target"
        >
          
            <h4 style={{ color: "black" }}>
              Riduanul<span style={{ color: "red" }}>Haque</span>{" "}
            </h4>{" "}
          
         
            <ul className="navbar-nav " >
              <li className="nav-item ">
                <Link to="/"> Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/projects"> Projects</Link>
              </li>
              <li className="nav-item">
                <Link to="/blog"> Blog</Link>
              </li>
              <li className="nav-item">
                <Link to="/about"> About</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact"> Contact</Link>
              </li>
            </ul>{" "}
          
        </div>
      </div>
    </nav>
  );
};

export default NavBarBlack;
