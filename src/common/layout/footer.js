import React from "react";
import { NavLink ,Link} from "react-router-dom";

function Footer() {
  return (
    <>
      <footer class="container-fluid footer py-5 bg-dark">
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-md-6 col-lg-3 columnfirst">
              <ul class="list-unstyled list1 d-flex align-items-cente justify-content-center gap-3 flex-column">
                <li>
                  <a
                    class="text-decoration-none text-white"
                    href="aboutus.html"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    class="text-decoration-none text-white"
                    href="contactus.html"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <Link to='/blog' className="text-decoration-none text-white" >
                    Blog
                  </Link>
                </li>
                <li>
                  <a
                    class="text-decoration-none text-white"
                    href="saloonSafety.html"
                  >
                    Saloon Safety Program
                  </a>
                </li>
                <li>
                  <Link
                    class="text-decoration-none text-white"
                    to='/artist-registration'
                  >
                    Artist Signup
                  </Link>
                </li>
                <li>
                  <Link
                    class="text-decoration-none text-white"
                    to='/partnerlogin'
                  >
                    Partner With Us
                  </Link>
                </li>
              </ul>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-3 columnfirst">
              <ul class="list-unstyled list1 d-flex align-items-cente justify-content-center gap-3 flex-column">
                <li>
                  <a
                    class="text-decoration-none text-white"
                    href="termsandConditions.html"
                  >
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a
                    class="text-decoration-none text-white"
                    href="cancellationRefund.html"
                  >
                    Cancellation and Refund
                  </a>
                </li>
                <li>
                  <a
                    class="text-decoration-none text-white"
                    href="privacyPolicy.html"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    class="text-decoration-none text-white"
                    href="cookiePolicy.html"
                  >
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a class="text-decoration-none text-white" href="faqs.html">
                    FAQs
                  </a>
                </li>
              </ul>
              <ul class="list-unstyled d-flex iconlist">
                <li>
                  <a class="imagefb" href="">
                    <img src="/assets/img/footer/FB.png" alt="Facebook" />
                  </a>
                </li>
                <li>
                  <a class="imageinsta" href="">
                    <img src="/assets/img/footer/insta.png" alt="instagram" />
                  </a>
                </li>
                <li>
                  <a class="imagetwit" href="">
                    <img src="/assets/img/footer/Twtr.png" alt="twitter" />
                  </a>
                </li>
                <li>
                  <a class="imageyt" href="">
                    <img src="/assets/img/footer/YT.png" alt="youtube" />
                  </a>
                </li>
                <li>
                  <a class="imagelink" href="">
                    <img src="/assets/img/footer/linkedin.png" alt="linkedin" />
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-3 columnfirst">
              <p class="text-white mb-0">Newsletter</p>
              <form action="" class="emailform">
                <div class="d-flex align-items-cente">
                  <input
                    class="inputemail"
                    type="text"
                    required=""
                    placeholder="Enter Your Email ID"
                    name="email"
                  />
                  <button class="inputbtn" type="submit">
                    Subscribe
                  </button>
                </div>
              </form>
              <div class="d-flex appiconsection mt-3">
                <ul class="list-unstyled d-flex flex-column gap-3">
                  <li>
                    <a href="">
                      <img
                        class="w-100 h-100"
                        src="/assets/img/footer/gplay.svg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        class="w-100 h-100"
                        src="/assets/img/footer/Appstore.svg"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
