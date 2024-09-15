import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg shadow-lg p-3 mb-5 rounded-9 m-4"
        style={{ backgroundColor: "#C1B7A2", color: "#4E342E" }}
      >
        <div className="container p-2">
          <a
            style={{
              fontFamily: "Poppins",
              fontSize: "40px",
              color: "#4E342E",
            }}
            className="navbar-brand"
            href="#"
          >
            <span style={{ fontFamily: "cursive" }}>SS </span>
            furniture
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collaps navbar-collaps">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="text-decoration-none" to="/">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    style={{ color: "#4E342E" }}
                  >
                    Home
                  </a>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="text-decoration-none" to="/about">
                  <a className="nav-link" style={{ color: "#4E342E" }}>
                    About
                  </a>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="text-decoration-none" to="/shop">
                  <a className="nav-link" style={{ color: "#4E342E" }}>
                    Shop
                  </a>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="text-decoration-none" to="/contact">
                  <a className="nav-link" style={{ color: "#4E342E" }}>
                    Contact
                  </a>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
