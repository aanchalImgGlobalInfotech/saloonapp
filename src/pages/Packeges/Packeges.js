import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../common/layout/footer/footer";
import Footer2 from "../../common/layout/footer/Footer2 ";
import HeaderHome from "../../common/layout/header/HeaderHome";
import { getData } from "../../components/apiinstance/Api";

const Packeges = () => {
  const location = useLocation();
  const [PackagesId, setPackagesId] = useState(location.state.id);
  const [PackagesTab, setPackagesTab] = useState([]);
  const [packages, setPackage] = useState([]);
  const getPackageTab = async () => {
    const res = await getData("getCategoryListing?type=pakeges");
    setPackagesTab(res.data);
  };

  const getPackages = async () => {
    const res = await getData(`get-service-Package?categoryId=${PackagesId}`);
    setPackage(res.data);
  };
  useEffect(() => {
    getPackages();
  }, [PackagesId]);
  useEffect(() => {
    getPackageTab();
  }, []);

  console.log(packages);
  return (
    <>
      <HeaderHome />
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
                    src="/assets/img/index/image1card.jpg"
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
                    src="/assets/img/index/image2card.jpeg"
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
                    src="/assets/img/index/image3card.jpg"
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
                    src="/assets/img/index/image4card.jpg"
                    alt
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* cardSectionEnd */}
      {/* Filter & Package Page Start */}
      <div className="parlourMainOuter bg-dark py-lg-5 py-4">
        <div className="container">
          <div className="row gap-4 gap-lg-0">
            <div className="col-lg-8">
              <div className="cardMainOuter">
                <div className="cardsOuter">
                  <div className="row gap-4">
                    <div className="col-12 position-relative py-2 sectionHeader ">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <button
                            className="btn bg-transparent border-0 shadow-none p-0"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasFilter"
                            aria-controls="offcanvasFilter"
                          >
                            <img src="assets/img/icon/filter.svg" alt />
                          </button>
                        </div>
                        <div className="col-10 col-sm">
                          <ul
                            className="nav nav-tabs customTabs border-0 bg-black d-flex flex-nowarp flex-sm-wrap"
                            id="myTab"
                            role="tablist"
                          >
                            {PackagesTab?.map((item) => {
                              return (
                                <li
                                  className="nav-item border-end border-theme1 m-0"
                                  role="presentation"
                                >
                                  <button
                                    className={`nav-link border-0  px-sm-0 px-4 text-white rounded-0 text-center fs-14 w-100 bg-black ${
                                      PackagesId == item._id ? "active" : ""
                                    }`}
                                    id="bridal-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#bridal-tab-pane"
                                    type="button"
                                    role="tab"
                                    aria-controls="bridal-tab-pane"
                                    aria-selected="true"
                                    onClick={() => setPackagesId(item._id)}
                                  >
                                    {item?.Name}
                                  </button>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div
                        className="tab-content customTabContent"
                        id="myTabContent"
                      >
                        <div
                          className="tab-pane fade show active"
                          id="bridal-tab-pane"
                          role="tabpanel"
                          aria-labelledby="bridal-tab"
                          tabIndex={0}
                        >
                          <div className="row allSaloon gap-3">
                            {packages?.map((item) => {
                              return (
                                <div className="col-12">
                                  <div className="saloonDetail">
                                    <div className="row gap-3">
                                      <div className="col-12">
                                        <div className="saloonProfile row">
                                          <div className="col-auto">
                                            <div className="imgOuter">
                                              <img
                                                className="w-100"
                                                src={
                                                  item.saloon
                                                    ? item.saloon[0]?.image
                                                      ? item.saloon[0]?.image[0]
                                                      : ""
                                                    : ""
                                                }
                                                alt
                                              />
                                            </div>
                                          </div>
                                          <div className="col">
                                            <div className="saloonName fs-16 text-white ">
                                              {item?.saloon[0]?.storeName}
                                            </div>
                                            <div className="address fs-14 mt-2">
                                              {item?.saloon[0]?.location?.aria},
                                              {item?.saloon[0]?.location?.city}
                                            </div>
                                            <div className="distance d-flex align-items-center gap-2 fs-14 mt-2">
                                              <span className="icon d-flex align-items-center justify-content-center">
                                                <img
                                                  className="w-100"
                                                  src="assets/img/icon/distanceIcon.svg"
                                                  alt
                                                />
                                              </span>
                                              <span>458 m</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-12">
                                        <div className="packages px-3 bg-black rounded-4">
                                          <div className="row mx-0">
                                            {item?.ServicesDitail.map(
                                              (innerItem) => {
                                                return (
                                                  <div className="col-12 package py-sm-3 py-2 px-0">
                                                    <div className="row gap-2 gap-sm-0 align-items-center">
                                                      <div className="col-sm-5 packageDetail">
                                                        <div className="packageTitle fs-14 text-white">
                                                          {
                                                            innerItem?.PackageName
                                                          }
                                                        </div>
                                                        <div className="packageDec">
                                                          {innerItem?.Services?.map(
                                                            (services) => {
                                                              return (
                                                                <span>
                                                                  {
                                                                    services?.ServiceName
                                                                  }
                                                                </span>
                                                              );
                                                            }
                                                          )}
                                                        </div>
                                                      </div>
                                                      <div className="col-sm">
                                                        <div className="row align-items-center">
                                                          <div className="col-sm mb-1 mb-sm-0">
                                                            <div className="timing d-flex align-items-center gap-2 fs-14">
                                                              <div className="icon d-flex align-items-center">
                                                                <img
                                                                  className="w-100"
                                                                  src="assets/img/icon/clockBorderd.svg"
                                                                  alt
                                                                />
                                                              </div>
                                                              <span>
                                                                120 min
                                                              </span>
                                                            </div>
                                                          </div>
                                                          <div className="col d-flex justify-content-sm-center">
                                                            <div className="price text-end d-flex align-items-center gap-1 d-sm-block">
                                                              <div className="oldPrice fs-12 text-white">
                                                                ₹{" "}
                                                                {
                                                                  innerItem?.Amount
                                                                }
                                                              </div>
                                                              <div className="newPrice fs-16 text-white">
                                                                ₹{" "}
                                                                {
                                                                  innerItem?.finalPrice
                                                                }
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div className="col-auto">
                                                            <div className="addCart inc-dec-item bg-theme1 rounded-1 overflow-hidden d-flex flex-sm-column align-items-center justify-content-center">
                                                              <button className="btn btn-theme1 rounded-0 p-0 removeToCartBtn text-white border-0 d-none">
                                                                -
                                                              </button>
                                                              <input
                                                                type="text"
                                                                className="form-control border-theme1 rounded-0 fs-12 p-0 text-center py-1 d-none itemValue"
                                                                defaultValue={1}
                                                              />
                                                              <button className="btn btn-theme1 rounded-0 p-0 addToCartBtn text-white border-0">
                                                                +
                                                              </button>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                );
                                              }
                                            )}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="groom-tab-pane"
                          role="tabpanel"
                          aria-labelledby="groom-tab"
                          tabIndex={0}
                        >
                          <span className="text-white">2</span>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="traditional-tab-pane"
                          role="tabpanel"
                          aria-labelledby="traditional-tab"
                          tabIndex={0}
                        >
                          <span className="text-white">3</span>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="formal-tab-pane"
                          role="tabpanel"
                          aria-labelledby="formal-tab"
                          tabIndex={0}
                        >
                          <span className="text-white">4</span>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="trending-tab-pane"
                          role="tabpanel"
                          aria-labelledby="trending-tab"
                          tabIndex={0}
                        >
                          <span className="text-white">5</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 cartOuter">
              <div className="row innerrighttab mx-0 bg-light rounded-4 overflow-hidden">
                <div className="col-12 px-0">
                  <ul
                    className="nav nav-pills justify-content-around navpill border-bottom rounded-0 "
                    id="pills-tab"
                    role="tablist"
                  >
                    <li
                      className="nav-item navItem"
                      id="pills-checkout-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-checkout"
                      type="button"
                      role="tab"
                      aria-controls="pills-checkout"
                      aria-selected="false"
                      tabIndex={-1}
                    >
                      <button
                        className="nav-link navLink"
                        aria-selected="false"
                        tabIndex={-1}
                        role="tab"
                        disabled
                      >
                        Checkout
                      </button>
                    </li>
                    <li
                      className="nav-item navItem"
                      id="pills-schedule-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-schedule"
                      type="button"
                      role="tab"
                      aria-controls="pills-schedule"
                      aria-selected="false"
                      tabIndex={-1}
                    >
                      <button
                        className="nav-link navLink"
                        aria-selected="false"
                        tabIndex={-1}
                        role="tab"
                      >
                        Schedule
                      </button>
                    </li>
                    <li
                      className="nav-item navItem active"
                      id="pills-cart-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-cart"
                      type="button"
                      role="tab"
                      aria-controls="pills-cart"
                      aria-selected="true"
                    >
                      <button
                        className="nav-link navLink"
                        aria-selected="false"
                        tabIndex={-1}
                        role="tab"
                      >
                        Cart
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content pt-3" id="pills-tabContent">
                    <div
                      className="tab-pane fade cartside show active"
                      id="pills-cart"
                      role="tabpanel"
                      aria-labelledby="pills-cart-tab"
                      tabIndex={0}
                    >
                      <div className="addContentt px-2 mb-3">
                        <div className="row mx-0 px-0 bg-dark py-2 rounded-3 text-white mb-3">
                          <div className="col-6 leftSideContent">
                            <div className="carditemHeading">
                              Full Body Bleach
                            </div>
                            <div className="imagetimegender ">
                              <span className="image">
                                <img
                                  className="w-100 h-100"
                                  src="assets/img/vandorProfile/clock.svg"
                                  alt
                                />
                              </span>
                              <span className="time">30 min </span> |
                              <span className="gender">Female</span>
                            </div>
                          </div>
                          <div className="col-6 rightSideContent">
                            <div className="d-flex align-items-center justify-content-around">
                              <div className="text-decoration-line-through discount">
                                ₹1500
                              </div>
                              <div className="payment">₹1275</div>
                              <button className="btn border-0 p-0 removebtn">
                                <img
                                  src="assets/img/vandorProfile/remove.svg"
                                  alt="cross"
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="row mx-0 px-0 bg-dark py-2 rounded-3 text-white mb-3">
                          <div className="col-6 leftSideContent">
                            <div className="carditemHeading">
                              Full Body Bleach
                            </div>
                            <div className="imagetimegender ">
                              <span className="image">
                                <img
                                  className="w-100 h-100"
                                  src="assets/img/vandorProfile/clock.svg"
                                  alt
                                />
                              </span>
                              <span className="time">30 min </span> |
                              <span className="gender">Female</span>
                            </div>
                          </div>
                          <div className="col-6 rightSideContent">
                            <div className="d-flex align-items-center justify-content-around">
                              <div className="text-decoration-line-through discount">
                                ₹1500
                              </div>
                              <div className="payment">₹1275</div>
                              <button className="btn border-0 p-0 removebtn">
                                <img
                                  src="assets/img/vandorProfile/remove.svg"
                                  alt="cross"
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="row mx-0 px-0 bg-dark py-2 rounded-3 text-white mb-3">
                          <div className="col-6 leftSideContent">
                            <div className="carditemHeading">
                              Full Body Bleach
                            </div>
                            <div className="imagetimegender ">
                              <span className="image">
                                <img
                                  className="w-100 h-100"
                                  src="assets/img/vandorProfile/clock.svg"
                                  alt
                                />
                              </span>
                              <span className="time">30 min </span> |
                              <span className="gender">Female</span>
                            </div>
                          </div>
                          <div className="col-6 rightSideContent">
                            <div className="d-flex align-items-center justify-content-around">
                              <div className="text-decoration-line-through discount">
                                ₹1500
                              </div>
                              <div className="payment">₹1275</div>
                              <button className="btn border-0 p-0 removebtn">
                                <img
                                  src="assets/img/vandorProfile/remove.svg"
                                  alt="cross"
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="row mx-0 px-0 bg-dark py-2 rounded-3 text-white mb-3">
                          <div className="col-6 leftSideContent">
                            <div className="carditemHeading">
                              Full Body Bleach
                            </div>
                            <div className="imagetimegender ">
                              <span className="image">
                                <img
                                  className="w-100 h-100"
                                  src="assets/img/vandorProfile/clock.svg"
                                  alt
                                />
                              </span>
                              <span className="time">30 min </span> |
                              <span className="gender">Female</span>
                            </div>
                          </div>
                          <div className="col-6 rightSideContent">
                            <div className="d-flex align-items-center justify-content-around">
                              <div className="text-decoration-line-through discount">
                                ₹1500
                              </div>
                              <div className="payment">₹1275</div>
                              <button className="btn border-0 p-0 removebtn">
                                <img
                                  src="assets/img/vandorProfile/remove.svg"
                                  alt="cross"
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="row mx-0 px-0 bg-dark py-2 rounded-3 text-white mb-3">
                          <div className="col-6 leftSideContent">
                            <div className="carditemHeading">
                              Full Body Bleach
                            </div>
                            <div className="imagetimegender ">
                              <span className="image">
                                <img
                                  className="w-100 h-100"
                                  src="assets/img/vandorProfile/clock.svg"
                                  alt
                                />
                              </span>
                              <span className="time">30 min </span> |
                              <span className="gender">Female</span>
                            </div>
                          </div>
                          <div className="col-6 rightSideContent">
                            <div className="d-flex align-items-center justify-content-around">
                              <div className="text-decoration-line-through discount">
                                ₹1500
                              </div>
                              <div className="payment">₹1275</div>
                              <button className="btn border-0 p-0 removebtn">
                                <img
                                  src="assets/img/vandorProfile/remove.svg"
                                  alt="cross"
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="row mx-0 px-0 bg-dark py-2 rounded-3 text-white mb-3">
                          <div className="col-6 leftSideContent">
                            <div className="carditemHeading">
                              Full Body Bleach
                            </div>
                            <div className="imagetimegender ">
                              <span className="image">
                                <img
                                  className="w-100 h-100"
                                  src="assets/img/vandorProfile/clock.svg"
                                  alt
                                />
                              </span>
                              <span className="time">30 min </span> |
                              <span className="gender">Female</span>
                            </div>
                          </div>
                          <div className="col-6 rightSideContent">
                            <div className="d-flex align-items-center justify-content-around">
                              <div className="text-decoration-line-through discount">
                                ₹1500
                              </div>
                              <div className="payment">₹1275</div>
                              <button className="btn border-0 p-0 removebtn">
                                <img
                                  src="assets/img/vandorProfile/remove.svg"
                                  alt="cross"
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="row mx-0 px-0 bg-dark py-2 rounded-3 text-white mb-3">
                          <div className="col-6 leftSideContent">
                            <div className="carditemHeading">
                              Full Body Bleach
                            </div>
                            <div className="imagetimegender ">
                              <span className="image">
                                <img
                                  className="w-100 h-100"
                                  src="assets/img/vandorProfile/clock.svg"
                                  alt
                                />
                              </span>
                              <span className="time">30 min </span> |
                              <span className="gender">Female</span>
                            </div>
                          </div>
                          <div className="col-6 rightSideContent">
                            <div className="d-flex align-items-center justify-content-around">
                              <div className="text-decoration-line-through discount">
                                ₹1500
                              </div>
                              <div className="payment">₹1275</div>
                              <button className="btn border-0 p-0 removebtn">
                                <img
                                  src="assets/img/vandorProfile/remove.svg"
                                  alt="cross"
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="row mx-0 px-0 bg-dark py-2 rounded-3 text-white mb-3">
                          <div className="col-6 leftSideContent">
                            <div className="carditemHeading">
                              Full Body Bleach
                            </div>
                            <div className="imagetimegender ">
                              <span className="image">
                                <img
                                  className="w-100 h-100"
                                  src="assets/img/vandorProfile/clock.svg"
                                  alt
                                />
                              </span>
                              <span className="time">30 min </span> |
                              <span className="gender">Female</span>
                            </div>
                          </div>
                          <div className="col-6 rightSideContent">
                            <div className="d-flex align-items-center justify-content-around">
                              <div className="text-decoration-line-through discount">
                                ₹1500
                              </div>
                              <div className="payment">₹1275</div>
                              <button className="btn border-0 p-0 removebtn">
                                <img
                                  src="assets/img/vandorProfile/remove.svg"
                                  alt="cross"
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mx-0 py-2 justify-content-between text-black footer border-top rounded-0 bg-light">
                        <div className="col-4">
                          <div className="totalitems">11 items</div>
                          <div className="paymenttotal">₹4037</div>
                        </div>
                        <div className="col-8 text-end">
                          <div className="buttonfooter">
                            <button className=" btn border-0  shadow-none bg-theme2 text-white rounded-3 Schedulebtn">
                              Schedule Your Visit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade Schedule"
                      id="pills-schedule"
                      role="tabpanel"
                      aria-labelledby="pills-schedule-tab"
                      tabIndex={0}
                    >
                      <div className="row mx-0 px-0 selectedtimedate">
                        <div className="col-12 mb-2">
                          <div className="selectDate">Select Date</div>
                          <div className="month text-muted">February</div>
                        </div>
                        <div className="col-auto datetimeContent mb-2 disabled">
                          <label className="option">
                            <input type="radio" name="optradio" />
                            <span className="btn btn-theme1 btn-option">
                              <div>S</div>
                              <div>01</div>
                            </span>
                          </label>
                        </div>
                        <div className="col-auto datetimeContent mb-2">
                          <label className="option">
                            <input type="radio" name="optradio" />
                            <span className="btn btn-theme1 btn-option">
                              <div>M</div>
                              <div>02</div>
                            </span>
                          </label>
                        </div>
                        <div className="col-auto datetimeContent mb-2">
                          <label className="option">
                            <input type="radio" name="optradio" />
                            <span className="btn btn-theme1 btn-option">
                              <div>T</div>
                              <div>03</div>
                            </span>
                          </label>
                        </div>
                        <div className="col-auto datetimeContent mb-2">
                          <label className="option">
                            <input type="radio" name="optradio" />
                            <span className="btn btn-theme1 btn-option">
                              <div>W</div>
                              <div>04</div>
                            </span>
                          </label>
                        </div>
                        <div className="col-auto datetimeContent mb-2">
                          <label className="option">
                            <input type="radio" name="optradio" />
                            <span className="btn btn-theme1 btn-option">
                              <div>Th</div>
                              <div>05</div>
                            </span>
                          </label>
                        </div>
                        <div className="col-auto datetimeContent mb-2">
                          <label className="option">
                            <input type="radio" name="optradio" />
                            <span className="btn btn-theme1 btn-option">
                              <div>F</div>
                              <div>06</div>
                            </span>
                          </label>
                        </div>
                        <div className="col-auto datetimeContent mb-2">
                          <label className="option">
                            <input type="radio" name="optradio" />
                            <span className="btn btn-theme1 btn-option">
                              <div>S</div>
                              <div>07</div>
                            </span>
                          </label>
                        </div>
                        <div className="col-12 py-2">
                          <div className="selectDate">Choose Time Slot</div>
                        </div>
                        <div className="col-sm-auto col-4 datetimeContent mb-2 disabled">
                          <label className="option w-100">
                            <input type="radio" name="optradio" />
                            <span className="btn btn-theme1 btn-option opectiontime">
                              <div className="time">12:00 PM</div>
                            </span>
                          </label>
                        </div>
                        <div className="col-sm-auto col-4 datetimeContent mb-2">
                          <label className="option w-100">
                            <input type="radio" name="optradio" />
                            <span className="btn btn-theme1 btn-option opectiontime">
                              <div className="time">01:00 PM</div>
                            </span>
                          </label>
                        </div>
                        <div className="col-sm-auto col-4 datetimeContent mb-2">
                          <label className="option w-100">
                            <input type="radio" name="optradio" />
                            <span className="btn btn-theme1 btn-option opectiontime">
                              <div className="time">01:15 PM</div>
                            </span>
                          </label>
                        </div>
                        <div className="col-sm-auto col-4 datetimeContent mb-2">
                          <label className="option w-100">
                            <input type="radio" name="optradio" />
                            <span className="btn btn-theme1 btn-option opectiontime">
                              <div className="time">01:30 PM</div>
                            </span>
                          </label>
                        </div>
                        <div className="col-sm-auto col-4 datetimeContent mb-2">
                          <label className="option w-100">
                            <input type="radio" name="optradio" />
                            <span className="btn btn-theme1 btn-option opectiontime">
                              <div className="time">01:45 PM</div>
                            </span>
                          </label>
                        </div>
                        <div className="col-sm-auto col-4 datetimeContent mb-2">
                          <label className="option w-100">
                            <input type="radio" name="optradio" />
                            <span className="btn btn-theme1 btn-option opectiontime">
                              <div className="time">02:00 PM</div>
                            </span>
                          </label>
                        </div>
                        <div className="col-sm-auto col-4 datetimeContent mb-2">
                          <label className="option w-100">
                            <input type="radio" name="optradio" />
                            <span className="btn btn-theme1 btn-option opectiontime">
                              <div className="time">02:15 PM</div>
                            </span>
                          </label>
                        </div>
                        <div className="col-sm-auto col-4 datetimeContent mb-2">
                          <label className="option w-100">
                            <input type="radio" name="optradio" />
                            <span className="btn btn-theme1 btn-option opectiontime">
                              <div className="time">02:45 PM</div>
                            </span>
                          </label>
                        </div>
                        <div className="col-sm-auto col-4 datetimeContent mb-2">
                          <label className="option w-100">
                            <input type="radio" name="optradio" />
                            <span className="btn btn-theme1 btn-option opectiontime">
                              <div className="time">03:00 PM</div>
                            </span>
                          </label>
                        </div>
                        <div className="col-sm-auto col-4 datetimeContent mb-2">
                          <label className="option w-100">
                            <input type="radio" name="optradio" />
                            <span className="btn btn-theme1 btn-option opectiontime">
                              <div className="time">03:15 PM</div>
                            </span>
                          </label>
                        </div>
                        <div className="col-sm-auto col-4 datetimeContent mb-2">
                          <label className="option w-100">
                            <input type="radio" name="optradio" />
                            <span className="btn btn-theme1 btn-option opectiontime">
                              <div className="time">03:30 PM</div>
                            </span>
                          </label>
                        </div>
                        <div className="col-sm-auto col-4 datetimeContent mb-2">
                          <label className="option w-100">
                            <input type="radio" name="optradio" />
                            <span className="btn btn-theme1 btn-option opectiontime">
                              <div className="time">03:45 PM</div>
                            </span>
                          </label>
                        </div>
                        <div className="col-sm-auto col-4 datetimeContent mb-2">
                          <label className="option w-100">
                            <input type="radio" name="optradio" />
                            <span className="btn btn-theme1 btn-option opectiontime">
                              <div className="time">04:00 PM</div>
                            </span>
                          </label>
                        </div>
                        <div className="col-sm-auto col-4 datetimeContent mb-2">
                          <label className="option w-100">
                            <input type="radio" name="optradio" />
                            <span className="btn btn-theme1 btn-option opectiontime">
                              <div className="time">04:15 PM</div>
                            </span>
                          </label>
                        </div>
                        <div className="col-sm-auto col-4 datetimeContent mb-2">
                          <label className="option w-100">
                            <input type="radio" name="optradio" />
                            <span className="btn btn-theme1 btn-option opectiontime">
                              <div className="time">04:30 PM</div>
                            </span>
                          </label>
                        </div>
                        <div className="col-sm-auto col-4 datetimeContent mb-2">
                          <label className="option w-100">
                            <input type="radio" name="optradio" />
                            <span className="btn btn-theme1 btn-option opectiontime">
                              <div className="time">04:45 PM</div>
                            </span>
                          </label>
                        </div>
                        <div className="col-sm-auto col-4 datetimeContent mb-2">
                          <label className="option w-100">
                            <input type="radio" name="optradio" />
                            <span className="btn btn-theme1 btn-option opectiontime">
                              <div className="time">05:00 PM</div>
                            </span>
                          </label>
                        </div>
                        <div className="col-sm-auto col-4 datetimeContent mb-2">
                          <label className="option w-100">
                            <input type="radio" name="optradio" />
                            <span className="btn btn-theme1 btn-option opectiontime">
                              <div className="time">05:15 PM</div>
                            </span>
                          </label>
                        </div>
                        <div className="col-sm-auto col-4 datetimeContent mb-2">
                          <label className="option w-100">
                            <input type="radio" name="optradio" />
                            <span className="btn btn-theme1 btn-option opectiontime">
                              <div className="time">05:30 PM</div>
                            </span>
                          </label>
                        </div>
                        <div className="col-sm-auto col-4 datetimeContent mb-2">
                          <label className="option w-100">
                            <input type="radio" name="optradio" />
                            <span className="btn btn-theme1 btn-option opectiontime">
                              <div className="time">05:45 PM</div>
                            </span>
                          </label>
                        </div>
                        <div className="col-sm-auto col-4 datetimeContent mb-2">
                          <label className="option w-100">
                            <input type="radio" name="optradio" />
                            <span className="btn btn-theme1 btn-option opectiontime">
                              <div className="time">06:00 PM</div>
                            </span>
                          </label>
                        </div>
                        <div className="col-sm-auto col-4 datetimeContent mb-2">
                          <label className="option w-100">
                            <input type="radio" name="optradio" />
                            <span className="btn btn-theme1 btn-option opectiontime">
                              <div className="time">06:15 PM</div>
                            </span>
                          </label>
                        </div>
                        <div className="col-sm-auto col-4 datetimeContent mb-2">
                          <label className="option w-100">
                            <input type="radio" name="optradio" />
                            <span className="btn btn-theme1 btn-option opectiontime">
                              <div className="time">06:30 PM</div>
                            </span>
                          </label>
                        </div>
                        <div className="col-sm-auto col-4 datetimeContent mb-2">
                          <label className="option w-100">
                            <input type="radio" name="optradio" />
                            <span className="btn btn-theme1 btn-option opectiontime">
                              <div className="time">06:45 PM</div>
                            </span>
                          </label>
                        </div>
                      </div>
                      <div className="row align-items-center px-0 mx-0 py-2 justify-content-between ounded-3 text-black footer bg-light border-bottom rounded-0 ">
                        <div className="col-4">
                          <div className="totalitems">February</div>
                          <div className="paymenttotal">02:30 PM</div>
                        </div>
                        <div className="col-xl-6 col text-xl-center text-end">
                          <div className="buttonfooter">
                            <a
                              role="button"
                              className="text-theme1 text-decoration-none fs-14 me-2 me-xl-0"
                              data-bs-toggle="modal"
                              data-bs-target="#saloonAtHome"
                            >
                              Saloon at Home
                            </a>
                            <button className=" btn border-0  shadow-none bg-theme2 text-white rounded-3 Schedulebtn mt-xl-2">
                              Proceed to checkout
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div class="tab-pane fade" id="pills-checkout" role="tabpanel" aria-labelledby="pills-checkout-tab" tabindex="0">...</div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer2></Footer2>
      <Footer></Footer>
    </>
  );
};

export default Packeges;
