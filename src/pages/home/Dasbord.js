import React from 'react'
import { NavLink } from 'react-router-dom';
import Footer from '../../common/layout/footer'
import Footer2 from '../../common/layout/header/Footer2';
import Header from '../../common/layout/header/header'
import HeaderHome from '../../common/layout/header/HeaderHome'

function Dasbord() {
    let token = localStorage.getItem("token");
  return (
    
        <div>
      {/* {token ? <HeaderHome /> : <Header />} */}
      <Header />
      
      <div>
        <section className="container-fluid heroSection position-relative px-0 bg-dark">
          <div className="bannervideo position-relative">
            <video
              className="standard w-100"
              autoPlay
              muted
              loop
              src="https://www.zoylee.com/assets/video/home-video/banner-video.mp4"
              type="video/mp4"
            >
              Your browser does not support the video tag.
            </video>
            {/* <video class="phone" autoplay="" muted="" loop=""
          src="https://www.zoylee.com/assets/banner-video-mobile/banner-video-mobile.mp4" type="video/mp4">
          Your browser does not support the video tag.
      </video> */}
          </div>
          <div className="container  h-100 position-absolute  z-1 maincontainerleft">
            <div className="row h-100">
              <div className="col-lg-12 col-xl-6 col-md-12 col-12 d-flex  justify-content-center flex-column leftSidecontent pt-5 pt-lg-0 order-2 order-lg-1">
                <div className="row mx-0 cardsectionhero g-3">
                  <div className="col-12 col-sm-12 col-lg-6 col-xl-12">
                    <div className="card  px-0 rounded-3 incard border-0 h-100 ">
                      <div className="row g-0">
                        <div className="col-sm-8 order-2 order-lg-1 h-100">
                          <div className="card-body bodycard h-100 justify-content-md-center d-flex flex-column">
                            <h5 className="card-title headingcard">
                              Home-Based Hair and Beauty Appointment
                            </h5>
                            <p className="card-text textperograph">
                              Choose from a wide range of service for both male
                              and female that you can get at your comfort zone
                            </p>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="cardimageH h-100">
                            <img
                              className="w-100 h-100 rounded-2"
                              src="assets/img/index/home-based.webp"
                              alt="..."
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-lg-6 col-xl-12">
                    <div className="card  px-0 rounded-3 incard border-0 h-100 ">
                      <div className="row g-0">
                        <div className="col-sm-8 order-2 order-lg-1 h-100">
                          <div className="card-body bodycard h-100 justify-content-md-center d-flex flex-column">
                            <h5 className="card-title headingcard">
                              Find top-rated salons, Spas, and Parlours Around
                              You
                            </h5>
                            <p className="card-text textperograph">
                              Choose from a wide range of service for both male
                              and female that you can get at your comfort zone
                            </p>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="cardimageH h-100 ">
                            <img
                              className="w-100 h-100 rounded-2"
                              src="assets/img/index/salon.webp"
                              alt="..."
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-xl-6 col-12 d-flex  text-end justify-content-center flex-column leftSidecontent leftSidecontent2 pt-5 pt-lg-0 order-lg-2 order-1">
                <div className="heading mb-2">Get Appointment for</div>
                <div className="heading heading2 mb-2">
                  {" "}
                  Nearby Beauty Services
                </div>
                <p className="perograph">
                  Looking for the best beauty and spa services in town? Our team
                  of experienced beauticians offers all the beauty services
                  you’ve been waiting for.
                </p>
                <div className="text-end mt-3 contactbtn px-0">
                  <NavLink className="btn  buttoncontact py-2" to="/contact">
                    Contact US
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Hero Section End */}
        {/* cardSection */}
        <section className="container-fluid cardSection py-4 bg-dark">
          <div className="container">
            <div className="row g-4">
              <div className="col-12">
                <div className="heading text-end pb-lg-5 pb-3">
                  Curated Offers
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="card h-100 cardmain rounded-3 border-0">
                  <div className="card-image">
                    <img
                      className="rounded-3 w-100"
                      src="assets/img/index/image1card.jpg"
                      alt
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="card h-100 cardmain rounded-3 border-0">
                  <div className="card-image">
                    <img
                      className="rounded-3 w-100"
                      src="assets/img/index/image2card.jpeg"
                      alt
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="card h-100 cardmain rounded-3 border-0">
                  <div className="card-image">
                    <img
                      className="rounded-3 w-100"
                      src="assets/img/index/image3card.jpg"
                      alt
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="card h-100 cardmain rounded-3 border-0">
                  <div className="card-image">
                    <img
                      className=" rounded-3 w-100"
                      src="assets/img/index/image4card.jpg"
                      alt
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* cardSectionEnd */}
        {/* BUSINESS Section Start */}
        <section className="container-fluid businesscard py-4 bg-dark">
          <div className="container bg-dark rounded-3">
            <div className="row">
              <div className="col-12">
                <div className="tabsection">
                  <ul
                    className="nav nav-pills mb-3 d-flex align-items-center justify-content-between navPill"
                    id="pills-tab"
                    role="tablist"
                  >
                    <div className="d-flex align-items-center navitem">
                      <li className="nav-item innernav" role="presentation">
                        <button
                          className="nav-link active navlink"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-home"
                          type="button"
                          role="tab"
                          aria-controls="pills-home"
                          aria-selected="true"
                        >
                          For Salons
                        </button>
                      </li>
                      <li className="nav-item innernav" role="presentation">
                        <button
                          className="nav-link navlink"
                          id="pills-profile-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-profile"
                          type="button"
                          role="tab"
                          aria-controls="pills-profile"
                          aria-selected="false"
                        >
                          For Artists
                        </button>
                      </li>
                    </div>
                    <div className="headingsection">
                      <div className="heading mb-3 text-end">SALOON</div>
                      <div className="subHeading text-end">BUSINESS</div>
                    </div>
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                      tabIndex={0}
                    >
                      <div className="card mb-3 maincard border-0 rounded-3">
                        <div className="row g-0">
                          <div className="col-lg-6 col-md-6 col-12 col-sm-12 imagecolleft">
                            <img
                              className="w-100 h-100 rounded-3"
                              src="assets/img/index/bussine1.png"
                              alt="..."
                            />
                          </div>
                          <div className="col-lg-6 col-md-6 col-12 col-sm-12 d-flex align-items-center colRight">
                            <div className="card-body">
                              <h5 className="card-title mb-3">
                                Get Registered with Sallon
                              </h5>
                              <p className="card-text mb-3">
                                Begin using Sallon to improve the way you
                                operate your business. All-in-one application
                                for you and your clients. Kindly click on.
                              </p>
                              <a className="btn buttoncustom px-4" href>
                                Boost My Bussines
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                      tabIndex={0}
                    >
                      <div className="card mb-3 maincard border-0 rounded-3">
                        <div className="row g-0">
                          <div className="col-lg-7 col-md-6 col-sm-12 col-12 imagecolleft">
                            <img
                              className="w-100 h-100 rounded-3"
                              src="assets/img/index/bussine2.png"
                              alt="..."
                            />
                          </div>
                          <div className="col-lg-5 col-md-6 col-sm-12 col-12 d-flex align-items-cente colRight">
                            <div className="card-body flex-column d-flex align-items-start justify-content-center">
                              <div className="headingcard">
                                Sign up with Sallon
                              </div>
                              <p className="card-perograph">
                                Begin using Sallon to improve the way you
                                operate your business. All-in-one application
                                for you and your clients. Kindly click on
                              </p>
                              <form action>
                                <div className="row mx-0 formsection">
                                  <div className="col-12 mb-3 px-0">
                                    <input
                                      type="text"
                                      className="form-control border-0 border-bottom rounded-0 shadow-none forminput"
                                      id="exampleFormControlname"
                                      name="name"
                                      placeholder="Name"
                                      required
                                    />
                                  </div>
                                  <div className="col-12 mb-3 px-0">
                                    <input
                                      type="tel"
                                      className="form-control border-0 border-bottom rounded-0 shadow-none forminput"
                                      name="phone"
                                      id="exampleFormControlnumber"
                                      placeholder="Mobile(+91)"
                                      required
                                    />
                                  </div>
                                  <div className="col-12 mb-3 px-0">
                                    <input
                                      type="email"
                                      className="form-control border-0 border-bottom rounded-0 shadow-none forminput"
                                      name="email"
                                      id="exampleFormControlemail"
                                      placeholder="Email (optional)"
                                      required
                                    />
                                  </div>
                                  <div className="col-12 mb-3 px-0">
                                    <input
                                      type="text"
                                      className="form-control border-0 border-bottom rounded-0 shadow-none forminput"
                                      name="address"
                                      id="exampleFormControlloection"
                                      placeholder="Your Location"
                                      required
                                    />
                                  </div>
                                </div>
                                <a className="btn buttoncustom px-5" href>
                                  Submit
                                </a>
                              </form>
                            </div>
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
        {/* BUSINESS Section End */}
        {/* Why Choose Saloon Start ? */}
        <section className="container-fluid whyChooseSection py-4 px-0 bg-dark">
          <div className="container">
            <div className="row g-3">
              <div className="col-12">
                <div className="heading pb-lg-4 mt-lg-3 text-end">
                  Why Choose Saloon ?
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12 col-12">
                <div className="card maincardchosse h-100 border-theme1">
                  <div className="card-body">
                    <div className="imagecard">
                      <img src="assets/img/index/icon1.svg" alt="icon1" />
                    </div>
                    <div className="card-title">Find Salons and Spas</div>
                    <div className="card-text">
                      Discover the widest selection of salons, parlours and spas
                      in and around your area
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12 col-12">
                <div className="card maincardchosse h-100 border-theme1">
                  <div className="card-body">
                    <div className="imagecard">
                      <img src="assets/img/index/icon2.svg" alt="icon2" />
                    </div>
                    <div className="card-title">Online Appointments</div>
                    <div className="card-text">
                      Select your preferred time slot and book appointments
                      online with just a tap or two.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12 col-12">
                <div className="card maincardchosse h-100 border-theme1">
                  <div className="card-body">
                    <div className="imagecard">
                      <img src="assets/img/index/icon3.svg" alt="icon3" />
                    </div>
                    <div className="card-title">Compare Prices</div>
                    <div className="card-text">
                      Evaluate different outlets, their services and prices and
                      pick the one that fits your needs.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12 col-12">
                <div className="card maincardchosse h-100 border-theme1">
                  <div className="card-body">
                    <div className="imagecard">
                      <img src="assets/img/index/icon4.svg" alt="icon4" />
                    </div>
                    <div className="card-title">Zero Waiting Time</div>
                    <div className="card-text">
                      No more waiting in the queues. Turn up to the venue at
                      your selected time and enjoy.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container-fluid sectionreating py-4 bg-dark">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="leftSideimage h-100 ">
                  <img
                    className="w-100 h-100 rounded-3"
                    src="assets/img/index/reatigimage.png"
                    alt="imagereating"
                  />
                </div>
              </div>
              <div className="col-lg-5 rightside">
                <div className="h-100">
                  <div className="headingreating mb-lg-4 py-lg-0 py-3">
                    Hair, Beauty and Grooming Services at Your Convenience
                  </div>
                  <div className="perograph mb-4">
                    Say hello to Zoylee, India's first online salon booking app
                    that has been designed to help you find salons, spas, and
                    parlours near you as well as home-based hair and beauty
                    services, book appointments instantly, and enjoy ZERO
                    WAITING TIME. Whether you are looking for a stylish new
                    haircut, hair spa, facial, waxing and hair removal, Bridal
                    makeup, or last-minute nails or want to treat yourself to a
                    soothing body spa, Zoylee happens to be your go-to online
                    salon booking platform.
                  </div>
                  <div className="card mb-3 maincard border-0">
                    <div className="row g-0">
                      <div className="col-md-4 leftside d-flex align-items-center justify-content-center">
                        <div className="rettingHeadingsection d-flex">
                          <div className="reating">4.6</div>
                          <span className="outufreating">out of 27</span>
                        </div>
                      </div>
                      <div className="col-md-8 rightSide">
                        <div className="card-body">
                          <div className="d-flex align-items-center mb-2">
                            <div className="ratetext">5</div>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                aria-label="Basic example"
                                style={{ width: "25%" }}
                                aria-valuenow={80}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                          <div className="d-flex align-items-center mb-2">
                            <div className="ratetext">4</div>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                aria-label="Basic example"
                                aria-valuenow={0}
                                style={{ width: "60%" }}
                                aria-valuemin={60}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                          <div className="d-flex align-items-center mb-2">
                            <div className="ratetext">3</div>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                aria-label="Basic example"
                                aria-valuenow={0}
                                style={{ width: "40%" }}
                                aria-valuemin={40}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                          <div className="d-flex align-items-center mb-2">
                            <div className="ratetext">2</div>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                aria-label="Basic example"
                                aria-valuenow={0}
                                style={{ width: "25%" }}
                                aria-valuemin={25}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                          <div className="d-flex align-items-center mb-2">
                            <div className="ratetext">1</div>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                aria-label="Basic example"
                                aria-valuenow={0}
                                style={{ width: "10%" }}
                                aria-valuemin={10}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="buttonreating py-3 px-3">
                        <a href className="btn buttoncustom px-3">
                          View All Reviews
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Why Choose Saloon End ? */}
        <section className="container-fluid py-lg-5 bg-dark swipperSection">
          <div className="container">
            <div className="row">
              <div className="col-12 py-5">
                <div className="swiper mySwiper swipperslide">
                  <div className="swiper-wrapper text-white innerswipper">
                    <div className="swiper-slide">
                      <div className="swipperimage">
                        <img
                          className="image w-100 h-100"
                          src="assets/img/index/cws.png"
                          alt
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="swipperimage">
                        <img
                          className="image w-100 h-100"
                          src="assets/img/index/fewds.png"
                          alt
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="swipperimage">
                        <img
                          className="image w-100 h-100"
                          src="assets/img/index/wasx.png"
                          alt
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="swipperimage">
                        <img
                          className="image w-100 h-100"
                          src="assets/img/index/wfred.png"
                          alt
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="swipperimage">
                        <img
                          className="image w-100 h-100"
                          src="assets/img/index/xwas.png"
                          alt
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="swipperimage">
                        <img
                          className="image w-100 h-100"
                          src="assets/img/index/cws.png"
                          alt
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* herewe we Section start */}
     <Footer2 />
      </div>

      <Footer />
    </div>
    
  )
}

export default Dasbord