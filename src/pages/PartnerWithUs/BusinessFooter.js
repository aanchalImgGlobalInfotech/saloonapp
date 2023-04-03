import React from 'react'

const BusinessFooter = () => {
  return (
<div>
  <footer className="container-fluid footer bg-dark px-0">
    <div className="container">
      <div className="row py-5">
        <div className="col-sm-6 col-md-6 col-lg-3 columnfirst">
          <div className="linkTitle fs-6 mb-3">COMPANY</div>
          <ul className="list-unstyled list1 d-flex align-items-cente justify-content-center gap-3 flex-column">
            <li><a className="text-decoration-none text-white" href="aboutus.html">About Us</a></li>
          </ul>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-3 columnfirst">
          <div className="linkTitle fs-6 mb-3">CONTACT</div>
          <ul className="list-unstyled list1 d-flex align-items-cente justify-content-center gap-3 flex-column">
            <li><a className="text-decoration-none text-white" href="contactus.html">Contact Us</a></li>
            <li><a className="text-decoration-none text-white" href="partnerwithUs.html">Partner With Us</a></li>
            <li><a className="text-decoration-none text-white" href="artist-registration.html">Artist Signup</a></li>
          </ul>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-3 columnfirst">
          <div className="linkTitle fs-6 mb-3">LEGAL</div>
          <ul className="list-unstyled list1  d-flex align-items-cente justify-content-center gap-3 flex-column">
            <li><a className="text-decoration-none text-white" href="terms-and-conditions.html">Terms and Conditions</a></li>
            <li><a className="text-decoration-none text-white" href="cancellation-and-refund.html">Cancellation and Refund</a></li>
            <li><a className="text-decoration-none text-white" href="privacy-policy.html">Privacy Policy</a></li>
            <li><a className="text-decoration-none text-white" href="cookie-policy.html">Cookie Policy</a></li>
          </ul>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-3 columnfirst">
          <div className="d-flex appiconsection">
            <ul className="list-unstyled gap-3 d-flex flex-column">
              <li><a href><img className="w-100 h-100" src="assets/img/footer/gplayLight.png" alt /></a></li>
              <li><a href><img className="w-100 h-100" src="assets/img/footer/AppstoreLight.png" alt /></a></li>
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