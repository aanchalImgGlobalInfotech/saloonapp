import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function Header() {
  return (
    <>
      <nav
        className="navbar navbar-expand-md navbar-dark bg-theme2 navbarhed position-fixed w-100"
        aria-label="Fourth navbar example"
      >
        <div className="container">
          <NavLink className="navbar-brand logonav" to="index.html">
            <img src="assets/img/index/logo.svg" alt="logo" />
          </NavLink>
          <button
            className="navbar-toggler togglrbtn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample04"
            aria-controls="navbarsExample04"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse navcolapse"
            id="navbarsExample04"
          >
            <ul className="navbar-nav mx-auto mb-2 mb-md-0 navullist">
              <li className="nav-item navitem">
                {/* <NavLink
                  className="nav-link navlink active"
                  aria-current="page"
                  to="index.html"
                >
                  Home
                </NavLink> */}
              </li>
              <li className="nav-item navitem">
                <a className="nav-link navlink" to="blog.html">
                  Blog
                </a>
              </li>
              <li className="nav-item navitem dropdown">
                <NavLink
                  className="nav-link navlink dropdown-toggle droptoglee"
                  to="#"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-bs-auto-close="outside"
                >
                  Cart
                </NavLink>
                <ul className="dropdown-menu mt-2 dropDown dropdown2 mt-3 z-2">
                  <ul
                    className="nav nav-pills mb-3 navPill "
                    id="pills-tab"
                    role="tablist"
                  >
                    <li
                      className="nav-item naviteminner px-1"
                      role="presentation"
                    >
                      <button
                        className="nav-link active navlinkinner"
                        id="pills-zoylee-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-zoylee"
                        type="button"
                        role="tab"
                        aria-controls="pills-zoylee"
                        aria-selected="true"
                      >
                        Saloon
                      </button>
                    </li>
                    <li
                      className="nav-item naviteminner px-1"
                      role="presentation"
                    >
                      <button
                        className="nav-link navlinkinner"
                        id="pills-zoyleeHome-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-zoyleeHome"
                        type="button"
                        role="tab"
                        aria-controls="pills-zoyleeHome"
                        aria-selected="false"
                      >
                        Saloon At Home
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content tabContent" id="pills-tabContent">
                    <div
                      className="tab-pane tabpane fade show active"
                      id="pills-zoylee"
                      role="tabpanel"
                      aria-labelledby="pills-zoylee-tab"
                      tabIndex={0}
                    >
                      No Items
                    </div>
                    <div
                      className="tab-pane tabpane fade"
                      id="pills-zoyleeHome"
                      role="tabpanel"
                      aria-labelledby="pills-zoyleeHome-tab"
                      tabIndex={0}
                    >
                      No Items
                    </div>
                  </div>
                </ul>
              </li>
              <li className="nav-item navitem">
                <NavLink className="nav-link navlink" to="/login"></NavLink>
              </li>
            </ul>
            <form
              role="search"
              className="d-flex align-items-center searchsection"
            >
              <input
                className="form-control searchinput"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="loginIcon ">
                <NavLink className="btn btnlogin" to="/login">
                  <img src="assets/img/header/person-fill.svg" alt="icon" />
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
