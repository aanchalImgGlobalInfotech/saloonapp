import React from 'react'
import { Link } from 'react-router-dom'
const Header2 = () => {
  return (
  <div classname="overflow-hideen ">
    <nav className="navbar navbar-expand-md navbar-dark bg-theme2 navbarhed position-fixed w-100" aria-label="Fourth navbar example">
    <div className="container">
      <Link className="navbar-brand logonav d-block" to="/Dashboard"><img src="assets/img/header/logo.svg" alt="logo" /></Link>
      <div className="searchOuter d-flex align-items-center bg-white rounded-1">
        <input type="button" className="bg-transparent border-0 shadow-none fs-12 pe-sm-2 text-muted" defaultValue="Search your favourite salon, haircut or beauty services" data-bs-toggle="offcanvas" data-bs-target="#favroutsaloon" aria-controls="favroutsaloon" />
        <span className="cityName ps-2 b border-start  d-none d-sm-block"><a href="javascript:;" className="text-decoration-none text-dark fs-12">Jaipur</a></span>
        <span className="currentLocation ps-3 d-none d-sm-block"><a href="javascript:;" className="text-decoration-none rounded-circle d-block position-relative" /></span>
      </div>
      <button className="navbar-toggler togglrbtn shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse navcolapse flex-grow-0" id="navbarsExample04">
        <ul className="navbar-nav ms-auto buttons gap-3 mt-3 mt-md-0">
          <li className="nav-item navitem">
            <Link to='/blog' className="btn btn-light loginBtn px-sm-4 py-sm-2" download>Blog</Link>
          </li>
          <li className="nav-item navitem">
            <Link to="/login" className="btn btn-theme1 loginBtn text-white px-sm-4 py-sm-2">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div className="offcanvas offcanvas-top bg-dark favoruteSaloon" tabIndex={-1} id="favroutsaloon" aria-labelledby="favroutsaloonLabel">
  <div className="offcanvas-header border-bottom">
    <div className="offcanvas-title text-white" id="favroutsaloonLabel">Search here...</div>
    <button type="button" className="btn-close shadow-none" data-bs-dismiss="offcanvas" aria-label="Close" />
  </div>
  <div className="offcanvas-body overflow-visible">
    <form action className="form">
      <div className="row justify-content-center gap-3 gap-sm-0">
        <div className="col-lg-4 col-sm-6">
          <div className="input-group">
            <input type="text" className="form-control shadow-none fs-13 py-2" id placeholder="Enter Your City Name" />
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 position-relative">
          <div className="input-group">
            <input type="text" className="form-control shadow-none fs-13 py-2" id placeholder="Search Salon, Style or Brand..." />
          </div>
          <div className="searchResult position-absolute bg-light p-3 py-2 rounded-4 ">
            <ul className="p-0 m-0 list-unstyled">
              <li className="searchItem py-1">
                <a className="searchLink fs-14 text-decoration-none text-dark" href="javascript:;"><span className="text-dark fw-bold">Hair</span> Wash</a>
              </li>
              <li className="searchItem py-1">
                <a className="searchLink fs-14 text-decoration-none text-dark" href="javascript:;"><span className="text-dark fw-bold">Hair</span> Wash</a>
              </li>
              <li className="searchItem py-1">
                <a className="searchLink fs-14 text-decoration-none text-dark" href="javascript:;"><span className="text-dark fw-bold">Hair</span> Wash</a>
              </li>
              <li className="searchItem py-1">
                <a className="searchLink fs-14 text-decoration-none text-dark" href="javascript:;"><span className="text-dark fw-bold">Hair Sage Luxury Salon</span> in Sector 104, Noida</a>
              </li>
              <li className="searchItem py-1">
                <a className="searchLink fs-14 text-decoration-none text-dark" href="javascript:;"><span className="text-dark fw-bold">Hair Sage Luxury Salon</span> in Sector 104, Noida</a>
              </li>
              <li className="searchItem py-1">
                <a className="searchLink fs-14 text-decoration-none text-dark" href="javascript:;"><span className="text-dark fw-bold">Hair Sage Luxury Salon</span> in Sector 104, Noida</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>
  </div>
  )
}
export default Header2







