import React from "react";
import Footer from "../../common/layout/footer/footer";
// import Footer2 from "../../common/layout/footer/Footer2 ";
import HeaderHome from "./../../common/layout/header/HeaderHome";
import BusinessFooter from "./BusinessFooter";
import {Link} from 'react-router-dom'
import BusinessHeader from "./BusinessHeader";

const PartnerLogin = () => {
  return (
    < div className="overflow-hideen vh-100 innerFooter">
   
    <BusinessHeader/>

      <div className="partnerWithUsmain">
        <div className="container">
          <div className="mainInner">
            <div className="row">
              <div className="col-lg-8">
                <div className="decriptionOuter">
                  <div className="row gap-3">
                    <div className="col-12">
                      <div className="pageHeading text-white text-center">
                        Become <span className="text-theme1">Saloon</span>{" "}
                        Partner
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="txt text-white">
                        We are glad to see you visit this page and we thank you
                        for showing interest in partnering with Zoylee.
                        <br />
                        <br />
                        You can now make the most of your business; be it your
                        salon, your parlor, and/or your spa business, Zoylee
                        helps you increase your brand’s visibility to newer
                        audiences, opens up new sales avenues, and thereby adds
                        better revenue opportunities, and when we say it, we
                        mean it by all means!
                        <br />
                        <br />
                        <ul className="d-flex flex-column gap-2">
                          <li>
                            If you own or run a salon, parlor and/or spa
                            business anywhere in this Country.
                          </li>
                          <li>
                            If you already have witnessed the growth of online
                            food ordering businesses.
                          </li>
                          <li>
                            And, if you have come to know that your friend’s
                            restaurant sales have skyrocketed through such
                            aggregator-based online food ordering businesses.
                          </li>
                        </ul>
                        <br />
                        <br />
                        Then, come and be a part of Zoylee - the first of its
                        kind salon, parlor and spa booking platform in the
                        Country.
                        <br />
                        <br />
                        By partnering with us, you get the freedom to create
                        your business’ profile, add the names of your services
                        on our enterprise-level platforms - Zoylee Website
                        (www.zoylee.com) and Zoylee App (both Android and iOS
                        App) with specific details such as; pricing, duration,
                        top artists, offers and discounts, etc. As soon as you
                        are listed on our platform, you are visible and
                        searchable to an end number of online audiences in your
                        neighborhood, your regular and new customers can now
                        search and find you online, scroll through your business
                        profile, check out the details like services, pricing,
                        and availability, etc., and book their service
                        appointments.
                        <br />
                        <br />
                        We truly understand your business is already doing great
                        and you probably don’t see a requirement of partnering
                        with us at all. Nonetheless, we still think about your
                        valued customers as to how Zoylee can bring in more
                        comfort and ease for your customers, who visit your
                        studios every day.
                        <br />
                        <br />
                        Give your business a touch of more comfort and
                        convenience for your customers by partnering with us,
                        and we promise the following advantages (all at zero
                        cost) for you;
                      </div>
                    </div>
                    <div className="col-12 text-white bottomList">
                      <div className="row gap-2 gap-sm-0">
                        <div className="col-sm-6">
                          <ul className="d-flex flex-column gap-2 list-unstyled m-0">
                            <li className="d-flex gap-2 align-items-center">
                              Partnership Registration
                            </li>
                            <li className="d-flex gap-2 align-items-center">
                              Increased Brand Visibility
                            </li>
                            <li className="d-flex gap-2 align-items-center">
                              New Sales
                            </li>
                            <li className="d-flex gap-2 align-items-center">
                              More Revenue
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm-6">
                          <ul className="d-flex flex-column gap-2 list-unstyled m-0">
                            <li className="d-flex gap-2 align-items-center">
                              Hyperlocal Search
                            </li>
                            <li className="d-flex gap-2 align-items-center">
                              CRM &amp; Inventory Organiser
                            </li>
                            <li className="d-flex gap-2 align-items-center">
                              Our Customer Care for Your Customers
                            </li>
                            <li className="d-flex gap-2 align-items-center">
                              High Customer Retention
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 d-none d-lg-block">
                <div className="formOuter position-sticky">
                  <div className="row gap-3">
                    <div className="col-12">
                      <div className="loginOuter rounded-4 overflow-hidden border border-theme1">
                        <div className="loginHeader bg-theme1 text-white p-3 text-center">
                          Login to Manage Your Business
                        </div>
                        <form
                     
                          className="form p-3 d-flex flex-column gap-3"
                        >
                          <div className="input-group d-block">
                            <label
                              htmlFor="loginMail"
                              className="form-label text-white"
                            >
                              Email
                            </label>
                            <input
                              type="email"
                              className="form-control w-100 rounded-1 border-0 py-2 ps-3 shadow-none"
                              id="loginMail"
                              placeholder="Enter Your Email*"
                            />
                          </div>
                          <div className="input-group d-block">
                            <label
                              htmlFor="loginPassword"
                              className="form-label text-white"
                            >
                              Password
                            </label>
                            <input
                              type="password"
                              className="form-control w-100 rounded-1 border-0 py-2 ps-3 shadow-none"
                              id="loginPassword"
                              placeholder="Enter Your Password*"
                            />
                          </div>
                          <div className="btns text-end">
                            <button
                              type="submit"
                              className="btn btn-theme1 loginBtn text-white px-4 py-2"
                            >
                              Login
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="btns">
                        <Link
                          to="/signup-partner"
                          className="btn btn-theme1 loginBtn text-white px-4 py-sm-2 w-100 text-decoration-none"
                        >
                          New Partner Registration
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BusinessFooter/>
    </div>


  );
};

export default PartnerLogin;
