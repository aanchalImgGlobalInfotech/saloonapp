import React, { useEffect, useState } from "react";
import Footer from "../../common/layout/footer/footer";
import Footer2 from "../../common/layout/footer/Footer2 ";
import HeaderHome from "../../common/layout/header/HeaderHome";
import { getData } from "../../components/apiinstance/Api";
const AboutUs = () => {
  const [data, setData] = useState([]);
  const getDataForAboutUs = async () => {
    const res = await getData("About-us");
    setData(res.data[0]);
  };
  useEffect(() => {
    getDataForAboutUs();
  }, []);
  return (
    <div className="overflow-hideen ">
      <HeaderHome />
      <div className="aboutMain bg-dark">
        <div className="row mx-0">
          <div className="col-12 px-0">
            <div className="container">
              <div className="pageHeading text-white">Who We Are ?</div>
            </div>
          </div>
          <div className="col-12 px-0 py-md-5 py-4">
            <div className="container">
              <div className="row align-items-center gap-3 gap-md-0">
                <div className="col-lg-6 col-md-5">
                  <div className="imgOuter rounded-3 overflow-hidden">
                    <img
                      className="w-100 h-100"
                      src="assets/img/about/img-1.webp"
                      alt="image"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-7">
                  <div className="detail">
                    <div className="title text-theme1">The Problem</div>
                    <div className="txt mt-2 text-white text-opacity-75">
                      Despite having a remarkable market size of approx 25
                      Billion USD, the hair, beauty and personal grooming
                      industry in India is largely unorganised with 90% of the
                      service providers still relying on traditional ways for
                      doing business.
                      <br />
                      <br />
                      On the other hand, for the consumers, finding the right
                      salon and spa in their area is one big challenge. Long
                      queues and waiting times at the venues is another major
                      problem that an average consumer needs to deal with when
                      looking for such services.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 px-0 py-md-5 py-4 bg-black">
            <div className="container">
              <div className="row align-items-center gap-3 gap-md-0">
                <div className="col-lg-6 col-md-5 order-md-2">
                  <div className="imgOuter rounded-3 overflow-hidden">
                    <img
                      className="w-100 h-100"
                      src="assets/img/about/img-2.png"
                      alt="image"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-7 order-md-1">
                  <div className="detail">
                    <div className="title text-theme1">An Overview</div>
                    <div className="txt mt-2 text-white text-opacity-75">
                      Saloon is India's 1st Appointment Booking Platform that
                      allows you to find and book appointments online for
                      Salons, Spas, and Parlours as well as Home-based Hair and
                      Beauty Services. Based out of Noida, Uttar Pradesh, Saloon
                      was founded in the year 2020, and today, it has a strong
                      foothold in 30+ Cities with around 2000 partner salons,
                      spas and parlours in its growing network along with 250+
                      independent hair and beauty artists to deliver home-based
                      services in Delhi NCR Region.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 px-0 py-md-5 py-4">
            <div className="container">
              <div className="row align-items-center gap-3 gap-md-0">
                <div className="col-lg-6 col-md-5">
                  <div className="imgOuter rounded-3 overflow-hidden">
                    <img
                      className="w-100 h-100"
                      src="assets/img/about/img-3.webp"
                      alt="image"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-7">
                  <div className="detail">
                    <div className="title text-theme1">The Solution</div>
                    <div className="txt mt-2 text-white text-opacity-75">
                      Saloon identified the challenges of both service providers
                      and customers and came up with an impeccable tech-based
                      solution to bring them on one unified platform for ease
                      and convenience. Saloon partners can enlist their service
                      menus, prices, discounts and other essential business
                      details on the platform whereas those looking for hair,
                      makeup and beauty services can easily find, compare and
                      book their desired services and enjoy ZERO WAITING Time
                      sessions.
                      <br />
                      <br />
                      Whether you are looking for a refreshing Facial, Keratin,
                      Smoothening, Waxing or Spa Services or want a quick
                      massage or haircut at home, you can find everything at
                      your fingertips on the Saloon App.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 px-0 py-md-5 py-4 bg-black">
            <div className="container">
              <div className="row align-items-center gap-3 gap-md-0">
                <div className="col-lg-6 col-md-5 order-md-2">
                  <div className="imgOuter rounded-3 overflow-hidden">
                    <img
                      className="w-100 h-100"
                      src="assets/img/about/img-4.webp"
                      alt="image"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-7 order-md-1">
                  <div className="detail">
                    <div className="title text-theme1">
                      Saloon's Mission and Vision
                    </div>
                    <div className="txt mt-2 text-white text-opacity-75">
                      Saloon aims to connect those who are passionate about
                      looks and beauty with the best of holistic looks, beauty,
                      and makeup artists with utmost ease and high customer
                      delight.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutCounter py-5">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <div className="counterOuter">
                <div className="row g-4">
                  <div className="col-md text-center px-md-0">
                    <div className="counting text-theme1 fs-1 fw-bold">
                      <span className="counter">{data?.Totelsaloon}</span>+
                    </div>
                    <div className="text-white fs-12 text-opacity-75">
                      Salons &amp; Spa
                    </div>
                  </div>
                  <div className="col-md text-center px-md-0">
                    <div className="counting text-theme1 fs-1 fw-bold">
                      <span className="counter">{data?.citys}</span>+
                    </div>
                    <div className="text-white fs-12 text-opacity-75">
                      Cities
                    </div>
                  </div>
                  <div className="col-md text-center px-md-0">
                    <div className="counting text-theme1 fs-1 fw-bold">
                      <span className="counter">{data?.Toteluser}</span>+
                    </div>
                    <div className="text-white fs-12 text-opacity-75">
                      User's
                    </div>
                  </div>
                  <div className="col-md text-center px-md-0">
                    <div className="counting text-theme1 fs-1 fw-bold">
                      <span className="counter">{data?.Totelartist}</span>+
                    </div>
                    <div className="text-white fs-12 text-opacity-75">
                      {" "}
                      Artists
                    </div>
                  </div>
                  <div className="col-md text-center px-md-0">
                    <div className="counting text-theme1 fs-1 fw-bold">
                      <span className="counter">{data?.Totelorder}</span>+
                    </div>
                    <div className="text-white fs-12 text-opacity-75">
                      Appointments
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
      <Footer />
    </div>
  );
};
export default AboutUs;
