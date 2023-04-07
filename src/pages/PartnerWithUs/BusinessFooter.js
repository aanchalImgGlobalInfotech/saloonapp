import React from 'react';
import { Link } from 'react-router-dom'

const BusinessFooter = () => {
  return(
<div>
  <footer className="container-fluid footer bg-dark px-0">
    <div className="container">
      <div className="row py-5">
        <div className="col-sm-6 col-md-6 col-lg-3 columnfirst">
          <div className="linkTitle fs-6 mb-3">COMPANY</div>
          <ul className="list-unstyled list1 d-flex align-items-cente justify-content-center gap-3 flex-column">
            <li><Link className="text-decoration-none text-white" to='/aboutus'>About Us</Link></li>
          </ul>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-3 columnfirst">
          <div className="linkTitle fs-6 mb-3">CONTACT</div>
          <ul className="list-unstyled list1 d-flex align-items-cente justify-content-center gap-3 flex-column">
            <li><Link className="text-decoration-none text-white" to='/contact' >Contact Us</Link></li>
            <li><Link className="text-decoration-none text-white" to='/partnerlogin'>Partner With Us</Link></li>
            <li><Link className="text-decoration-none text-white" to='/artist-registration'>Artist Signup</Link></li>
          </ul>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-3 columnfirst">
          <div className="linkTitle fs-6 mb-3">LEGAL</div>
          <ul className="list-unstyled list1  d-flex align-items-cente justify-content-center gap-3 flex-column">
            <li><Link className="text-decoration-none text-white" to='/termsandconditions'>Terms and Conditions</Link></li>
            <li><Link className="text-decoration-none text-white" to='/cancellationandrefund'>Cancellation and Refund</Link></li>
            <li><Link className="text-decoration-none text-white" to='/privacyandpolicy'>Privacy Policy</Link></li>
            <li><Link className="text-decoration-none text-white" to='/cookieandpolicy'>Cookie Policy</Link></li>
          </ul>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-3 columnfirst">
          <div className="d-flex appiconsection">
            <ul className="list-unstyled gap-3 d-flex flex-column">
              <li><Link to=''><img className="w-100 h-100" src="assets/img/footer/gplayLight.png" alt /></Link></li>
              <li><Link to=''><img className="w-100 h-100" src="assets/img/footer/AppstoreLight.png" alt /></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="copyRightSection py-3 bg-secondary text-muted text-center">
      <div className="text">Copyright © 2023 Saloon All Rights Reserved.</div>
    </div>
  </footer>
</div>


  
  )
}

export default BusinessFooter