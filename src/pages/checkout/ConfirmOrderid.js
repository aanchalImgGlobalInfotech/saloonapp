import React from "react";
import HeaderHome from "../../common/layout/header/HeaderHome";
import Footer2 from "../../common/layout/footer/Footer2 ";
import Footer from "../../common/layout/footer/footer";
import { NavLink } from "react-router-dom";

function ConfirmOrderid() {
  return (
    <div>
      <HeaderHome />
      <section className="container-fluid orderId py-5 ">
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card shadow border-0 text-center">
                <div className="cardBody p-4 text-center">
                  <div className="row gap-md-4 gap-3">
                    <div className="col-12">
                      <div className="orderStatus py-2">
                        <div className="imgOuter mx-auto rounded-circle overflow-hidden">
                          <img
                            className="w-100"
                            src="assets/img/CheckCircleFill.svg"
                            alt
                          />
                        </div>
                        <div className="title h3 fw-bold m-0 mt-3">
                          Order Confirmed
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="orderDec px-md-5 mx-md-5 mx-lg-0 mx-xl-5">
                        <div className="text fs-14">
                          Thank you for booking with Saloon. Your appointment
                          has been confirmed at <b>24-03-2023</b> and{" "}
                          <b>09:15 AM.</b>
                        </div>
                        <div className="text fs-14 mt-3">
                          Please check your registered email for booking
                          details.
                        </div>
                      </div>
                    </div>
                    <div className="col-12 px-0">
                      <div className="row mx-0 justify-content-between px-sm-5">
                        <div className="col-auto px-0">
                            <NavLink to='/Dashboard'>
                          <button
                            type="button"
                            className="btn btn-theme1 text-white fs-14 px-sm-3 p-sm-2"
                          >
                            Go To Home
                          </button>
                          </NavLink>
                        </div>
                        <div className="col-auto px-0">
                            <NavLink to='/checkout'>
                          <button
                            type="button"
                            className="btn btn-theme1 text-white fs-14 px-sm-3 p-sm-2"
                          >
                            Booking Details
                          </button>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer2 />
      <Footer />
    </div>
  );
}

export default ConfirmOrderid;
