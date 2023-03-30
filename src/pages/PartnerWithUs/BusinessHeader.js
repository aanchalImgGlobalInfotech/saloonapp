import React from 'react'
import {Link} from 'react-router-dom'

const BusinessHeader = () => {
  return (
    <div>

<nav class="navbar navbar-expand-md navbar-dark bg-theme2 navbarhed position-fixed w-100" aria-label="Fourth navbar example">
        <div class="container">
            <Link class="navbar-brand logonav" to="/Dashboard"><img src="assets/img/header/logo.svg" alt="logo"/></Link>
            <button type="submit" class="btn btn-theme1 loginBtn text-white px-3 px-sm-4 py-sm-2 d-block d-lg-none" data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>
        </div>
    </nav>
    </div>
  )
}

export default BusinessHeader