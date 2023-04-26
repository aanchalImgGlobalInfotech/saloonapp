import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import Footer from "../../common/layout/footer/footer";
import Footer2 from "../../common/layout/footer/Footer2 ";
import HeaderHome from "../../common/layout/header/HeaderHome";
import { getData, postData } from "../../components/apiinstance/Api";
import {
  checkoutvalues,
  packageSaloonId,
} from "../../components/redux/redux1/actions";

const Packeges = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [PackagesTab, setPackagesTab] = useState([]);
  const [packages, setPackage] = useState([]);
  const [saloonId, setSaloonId] = useState("");
  const [count, setCount] = useState(1);
  const [cartData, setCartData] = useState([]);
  const [cartId, setCartId] = useState("");
  const [total, settoatal] = useState("");
  const [isOpen, setIsOpen] = useState("cart");
  let saloonopen = JSON.parse(localStorage.getItem("saloonopen"));
  let saloonData = JSON.parse(localStorage.getItem("saloonData"));
  let packagedId = JSON.parse(localStorage.getItem("packagedId"));
  const [PackagesId, setPackagesId] = useState(packagedId);
  let saloonStoreID = saloonData?._id;
  let saloonStartTime = saloonData?.ProfileInfo?.starting_time;
  let saloonEndTime = saloonData?.ProfileInfo?.ending_time;
  const [slots, setSlots] = useState({
    time: "",
    date: "",
  });

  const [clikedDate, setClikedDate] = useState(
    new Date(Date.now()).toISOString()
  );
  const [sheduledata, setsheduleData] = useState(saloonopen);
  const packageSaloonIds = useSelector((state) => state.packageSaloonId);
  const getPackageTab = async () => {
    const res = await getData("getCategoryListing?type=pakeges");
    setPackagesTab(res.data);
  };

  const getPackages = async () => {
    const res = await getData(`get-service-Package?categoryId=${PackagesId}`);
    setPackage(res.data);
    console.log("resresres", res.data);
  };
  useEffect(() => {
    getPackages();
  }, [PackagesId]);
  useEffect(() => {
    getPackageTab();
  }, []);
  console.log("cartDatacartData", cartData);
  const addToCart = async (saloonid, serviceId, item) => {
    console.log("itemitemitem", item);
    localStorage.setItem("saloonopen", JSON.stringify(item));
    const res = await getData(
      `add-cart?saloonId=${saloonid}&serviceId=${serviceId}`
    );
    if (res.status == true) {
      getCartData();
      getPackages();
    }
    console.log(res, "from add to cart");
    console.log(packageSaloonIds, "thisisisisiisis");
    setSaloonId(saloonid);
  };

  const getCartData = async () => {
    const res = await getData(`get-cart?saloonId=${packageSaloonIds}`);
    console.log(res, "this is cartttt");
    setCartData(res?.data[0]?.cart);
    setCartId(res.data[0]?.cart[0]._id);
  };

  useEffect(() => {
    getCartData();
    getPackages();
  }, [count]);

  const removeCart = async (serviceId, cartId) => {
    console.log(cartId);
    const res = await getData(
      `remove-service-from-cart/?id=${cartId}&serviceId=${serviceId}`
    );
    if (res.status == true) {
      getCartData();
      getPackages();
    }
  };

  var timeArry = [];
  const setSlot = (el) => {
    const uniqueNames = timeArry.filter((val) => val?.includes(el));
    setSlots({ ...slots, time: uniqueNames[0] });
  };

  let weekDays = [0, 1, 2, 3, 4, 5, 6].map((d) => ({
    day: new Date(Date.now() + d * 24 * 60 * 60 * 1000)
      .toLocaleDateString("en-US", { weekday: "long" })
      .slice(0, 9),
    month: new Date().toLocaleDateString("en-US", { month: "long" }),
    date: new Date(Date.now() + d * 24 * 60 * 60 * 1000).toISOString(),
  }));

  var startTime1 = saloonStartTime;
  const endTime1 = saloonEndTime;
  const durationInMinutes = "15";
  while (startTime1 <= endTime1) {
    startTime1 = moment(startTime1, "HH:mm:ss ")
      .add(durationInMinutes, "minutes")
      .format("HH:mm A");
    timeArry.push(startTime1);
  }

  let currenttime = new Date().toTimeString().slice(0, 5);
  let timevalue = [];
  if (
    new Date(Date.now()).toISOString().slice(0, 10) == clikedDate.slice(0, 10)
  ) {
    timevalue = timeArry?.filter((el) => {
      if (el >= currenttime && el <= endTime1) {
        return el;
      }
    });
  } else {
    timevalue = timeArry.filter((el) => {
      if (el <= endTime1) {
        return el;
      }
    });
  }

  const hanldeSlot = async () => {
    var body = {
      date: slots.date.slice(0, 10),
      timeslot: slots.time,
    };
    const res = await postData(
      `Schedule-your-visit?saloonId=${saloonStoreID ? saloonStoreID : ""}`,
      body
    );
    console.log("nnnnnn", res.data);
  };

  const cheoutpage = async () => {
    const path = `Checkout?saloonId=${saloonStoreID ? saloonStoreID : ""}`;
    const res = await getData(path);
    console.log("mjmnbnbb", res.data);
    settoatal(...total, res.data[0]?.totalamount);
    dispatch(checkoutvalues(res.data));
    if (res.status) {
      navigate("/checkout");
    }
  };
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
                            <img src="assets/img/icon/filter.svg" />
                          </button>
                        </div>
                        <div className="col-10 col-sm">
                          <ul
                            className="nav nav-tabs customTabs border-0 bg-black d-flex flex-nowarp flex-sm-wrap"
                            id="myTab"
                            role="tablist"
                          >
                            {PackagesTab?.map((item, i) => {
                              return (
                                <li
                                  className="nav-item border-end border-theme1 m-0"
                                  role="presentation"
                                  key={i}
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
                            {packages?.map((item, i) => {
                              //console.log(item)
                              return (
                                <div className="col-12" key={i}>
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
                                            {item?.service?.map(
                                              (innerItem, i) => {
                                                //console.log(innerItem,'this iii')
                                                return (
                                                  <div
                                                    className="col-12 package py-sm-3 py-2 px-0"
                                                    key={i}
                                                  >
                                                    <div className="row gap-2 gap-sm-0 align-items-center">
                                                      <div className="col-sm-5 packageDetail">
                                                        <div className="packageTitle fs-14 text-white">
                                                          {
                                                            innerItem?.packageName
                                                          }
                                                        </div>
                                                        <div className="packageDec mt-3">
                                                          {innerItem?.ServicesName?.map(
                                                            (services, i) => {
                                                              return (
                                                                <React.Fragment
                                                                  key={i}
                                                                >
                                                                  <span>
                                                                    {
                                                                      services?.ServiceName
                                                                    }
                                                                  </span>
                                                                  <span>,</span>
                                                                </React.Fragment>
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
                                                                />
                                                              </div>
                                                              <span>
                                                                {
                                                                  innerItem?.packageServiceTime
                                                                }
                                                              </span>
                                                              <span> Min</span>
                                                            </div>
                                                          </div>
                                                          <div className="col d-flex justify-content-sm-center">
                                                            <div className="price text-end d-flex align-items-center gap-1 d-sm-block">
                                                              <div className="oldPrice fs-12 text-white">
                                                                ₹{" "}
                                                                {
                                                                  innerItem?.packagePrice
                                                                }
                                                              </div>
                                                              <div className="newPrice fs-16 text-white">
                                                                ₹{" "}
                                                                {
                                                                  innerItem?.packageFinalPrice
                                                                }
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div className="col-auto">
                                                            <div className="addCart inc-dec-item bg-theme1 rounded-1 overflow-hidden d-flex flex-sm-column align-items-center justify-content-center">
                                                              <button
                                                                className="btn btn-theme1 rounded-0 p-0 removeToCartBtn text-white border-0 d-none"
                                                                onClick={() => {
                                                                  addToCart(
                                                                    item.saloon
                                                                      ? item
                                                                          .saloon[0]
                                                                          ?._id
                                                                        ? item
                                                                            .saloon[0]
                                                                            ?._id
                                                                        : ""
                                                                      : "",
                                                                    innerItem?._id,
                                                                    item
                                                                      ?.saloon[0]
                                                                      ?.ProfileInfo
                                                                      ?.workingday
                                                                  );
                                                                  dispatch(
                                                                    packageSaloonId(
                                                                      item.saloon
                                                                        ? item
                                                                            .saloon[0]
                                                                            ?._id
                                                                          ? item
                                                                              .saloon[0]
                                                                              ?._id
                                                                          : ""
                                                                        : ""
                                                                    )
                                                                  );
                                                                  setCount(
                                                                    count + 1
                                                                  );
                                                                  localStorage.setItem(
                                                                    "saloonData",
                                                                    JSON.stringify(
                                                                      item.saloon
                                                                        ? item
                                                                            .saloon[0]
                                                                        : null
                                                                    )
                                                                  );
                                                                }}
                                                              >
                                                                +
                                                              </button>
                                                              {/* <input
                                                                type="text"
                                                                className="form-control border-theme1 rounded-0 fs-12 p-0 text-center py-1 d-none itemValue"
                                                                defaultValue={innerItem?.Quantity_In_Cart}
                                                              /> */}
                                                              <span className="form-control border-theme1 rounded-0 fs-12 p-0 text-center py-1 d-none itemValue">
                                                                {innerItem
                                                                  ? innerItem?.Quantity_In_Cart
                                                                  : ""}
                                                              </span>
                                                              <button
                                                                className="btn btn-theme1 rounded-0 p-0 addToCartBtn text-white border-0"
                                                                onClick={() =>
                                                                  removeCart(
                                                                    innerItem?._id,
                                                                    cartId
                                                                  )
                                                                }
                                                              >
                                                                -
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
                      className={`nav-item navItem ${
                        isOpen == "checkout" ? "active" : ""
                      }`}
                      aria-selected={isOpen == "checkout" ? "false" : "true"}
                      tabIndex={isOpen == "checkout" ? "-1" : ""}
                      onClick={() => setIsOpen("checkout")}
                    >
                      <button
                        className="nav-link navLink"
                        onClick={() => {
                          if (slots.date && slots.time) {
                            cheoutpage();
                          } else {
                            alert("please enter date and time both!");
                            setIsOpen("schedule");
                          }
                        }}
                      >
                        Checkout
                      </button>
                    </li>
                    <li
                      className={`nav-item navItem ${
                        isOpen == "schedule" ? "active" : ""
                      }`}
                      aria-selected={isOpen == "schedule" ? "false" : "true"}
                      tabIndex={isOpen == "schedule" ? "-1" : ""}
                      onClick={() => setIsOpen("schedule")}
                    >
                      <button className="nav-link navLink">Schedule</button>
                    </li>
                    <li
                      className={`nav-item navItem ${
                        isOpen == "cart" ? "active" : ""
                      }`}
                      // id="pills-cart-tab"
                      // data-bs-toggle="pill"
                      // data-bs-target="#pills-cart"
                      // type="button"
                      // role="tab"
                      // aria-controls="pills-cart"
                      aria-selected={isOpen == "cart" ? "false" : "true"}
                      tabIndex={isOpen == "cart" ? "-1" : ""}
                      onClick={() => setIsOpen("cart")}
                    >
                      <button
                        className="nav-link navLink"
                        // onClick={() => Postcart(Data[0]?._id)}
                      >
                        Cart
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content pt-3" id="pills-tabContent">
                    <div
                      className={`tab-pane fade cartside ${
                        isOpen == "cart" ? "active show" : ""
                      }`}
                      id="pills-cart"
                      role="tabpanel"
                      aria-labelledby="pills-cart-tab"
                      tabIndex={0}
                    >
                      <div className="addContentt px-2 mb-3">
                        {cartData?.map((cartItem) => {
                          console.log(cartItem,'sonu')
                          return (
                            <div className="row mx-0 px-0 bg-dark py-2 rounded-3 text-white mb-3">
                              <div className="col-6 leftSideContent">
                                <div className="carditemHeading">
                                  {cartItem?.cartdata?.ServiceName}
                                </div>
                                <div className="imagetimegender ">
                                  <span className="image">
                                    <img
                                      className="w-100 h-100"
                                      src="assets/img/vandorProfile/clock.svg"
                                    />
                                  </span>
                                  <span className="time">
                                    {cartItem?.cartdata?.timePeriod_in_minits}
                                  </span>{" "}
                                  |<span className="gender">Female</span>
                                </div>
                              </div>
                              <div className="col-6 rightSideContent">
                                <div className="d-flex align-items-center justify-content-around">
                                  <div className="text-decoration-line-through discount">
                                    ₹{cartItem?.cartdata?.ServicePrice}
                                  </div>
                                  <div className="payment">
                                    ₹ {cartItem?.cartdata?.Amount}
                                  </div>
                                  <button
                                    className="btn border-0 p-0 removebtn"
                                    onClick={() =>
                                      removeCart(
                                        cartItem?.cartdata?.serviceId,
                                        cartItem?._id
                                      )
                                    }
                                  >
                                    <img
                                      src="assets/img/vandorProfile/remove.svg"
                                      alt="cross"
                                    />
                                  </button>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      <div className="row row mx-0 py-2 justify-content-between ounded-3 text-black footer">
                        <div className="col-4">
                          <div className="totalitems">
                            {/* {Cartdata ? Cartdata?.length : ""} */}
                          </div>
                          <div className="paymenttotal">
                            ₹
                            {cartData[0]?.totalamount}
                          </div>
                        </div>
                        <div className="col-8 text-end">
                          <div className="buttonfooter">
                            <button
                              onClick={() => setIsOpen("schedule")}
                              className=" btn border-0  shadow-none bg-theme2 text-white rounded-3 Schedulebtn"
                            >
                              Schedule Your Visit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`tab-pane fade Schedule ${
                        isOpen == "schedule" ? "active show" : ""
                      }`}
                      id="pills-schedule"
                      role="tabpanel"
                      aria-labelledby="pills-schedule-tab"
                      tabIndex={0}
                    >
                      <div className="row mx-0 px-0 selectedtimedate">
                        <div className="col-12 mb-2">
                          <div className="selectDate">Select Date</div>
                          <div className="month text-muted">
                            {weekDays[0]?.month}
                          </div>
                        </div>
                        {weekDays.map((item, i) => {
                          return (
                            <div
                              className={`col-auto px-1 mb-2 datetimeContent ${
                                sheduledata?.includes(item.day)
                                  ? "datetimeContent"
                                  : "disabled"
                              }`}
                              key={i}
                            >
                              <label
                                className="option"
                                style={{
                                  backgroundColor: sheduledata?.includes(
                                    item.day
                                  )
                                    ? ""
                                    : "gray",
                                }}
                              >
                                <input
                                  type="radio"
                                  onChange={() => {
                                    setSlots({ ...slots, date: item.date });
                                    setClikedDate(item.date);
                                  }}
                                  disabled={
                                    sheduledata?.includes(item.day)
                                      ? false
                                      : true
                                  }
                                  name="optradios"
                                />
                                <span
                                  // onClick={() =>
                                  //   setSlots({ ...slots, date: item.date })
                                  // }
                                  className="btn btn-theme1 btn-option"
                                >
                                  <div>{item.day.slice(0, 1)}</div>
                                  <div>{item.date.slice(8, 10)}</div>
                                </span>
                              </label>
                            </div>
                          );
                        })}

                        <div className="col-12 py-2">
                          <div className="selectDate">Choose Time Slot</div>
                        </div>
                        {timevalue?.map((el, i) => {
                          return (
                            <div
                              className="col-sm-auto col-4 datetimeContent  px-2 mb-2"
                              key={i}
                            >
                              <label className="option w-100">
                                <input
                                  type="radio"
                                  // checked={el == slots.time ? true : false}
                                  name="optradio"
                                  onClick={() => setSlot(el)}
                                />
                                <span className="btn btn-theme1 btn-option opectiontime">
                                  <div className="time">{el} </div>
                                </span>
                              </label>
                            </div>
                          );
                        })}
                      </div>
                      <div className="row row mx-0 py-2 justify-content-between ounded-3 text-black footer">
                        <div className="col-4">
                          <div className="totalitems">{weekDays[0]?.month}</div>
                          <div className="paymenttotal">
                            {slots.time ? slots.time : "--Time--"}
                          </div>
                        </div>
                        <div className="col-xl-6 col text-xl-center text-end">
                          <div className="buttonfooter">
                            <a
                              role="button"
                              className="text-theme1 text-decoration-none fs-14 me-2 me-xl-0"
                              data-bs-toggle="modal"
                              data-bs-target="#saloonAtHome"
                              // onClick={() => getAddressApi()}
                            >
                              Saloon at Home
                            </a>
                            <button
                              onClick={() => {
                                setIsOpen("checkout");
                                hanldeSlot();
                                if (slots.date && slots.time) {
                                  cheoutpage();
                                } else {
                                  alert("please enter date and time both!");
                                  setIsOpen("schedule")
                                }
                              }}
                              className=" btn border-0  shadow-none bg-theme2 text-white rounded-3 Schedulebtn mt-xl-2"
                            >
                              Proceed to checkout
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`tab-pane fade ${
                        isOpen == "checkout" ? "active show" : ""
                      }`}
                      id="pills-checkout"
                      role="tabpanel"
                      aria-labelledby="pills-checkout-tab"
                      tabIndex={0}
                    >
                      ...
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
