import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { getData, postData } from "../../components/apiinstance/Api";
import { setLocale } from "yup";
import { NavLink, useNavigate } from "react-router-dom";
import { checkoutvalues, Razor } from "../../components/redux/redux1/actions";
import CheckOut from "../checkout/CheckOut";
import Footer2 from "../../common/layout/header/Footer2";

function CartAdd({
  subdata,
  couponid,
  homecheckoutId,
  Cartdata,
  getAddressApi,
  Cartfun,
  subsData,
  categoryId,
}) {
  const value = useSelector((state) => state.saloonData);
  const coupid = useSelector((state) => state.CouponItem);
  const value1 = localStorage.getItem("cartid");
  const navigate = useNavigate();
  const [data, setdata] = useState([]);
  const [alldays, setAlldays] = useState([]);
  const [OderId, setOderId] = useState([]);

  const [currentTime, setCurrentTime] = useState("");
  const [sheduledata, setsheduleData] = useState([]);
  const [slots, setSlots] = useState({
    time: "",
    date: "",
  });

  var timeStops = [];
  const setSlot = (el) => {
    const uniqueNames = timeStops.filter((val) => val.includes(el));
    console.log("aaa", uniqueNames[0]);
    setSlots({ ...slots, time: uniqueNames[0] });
  };
  const [total, settoatal] = useState("");
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState("cart");

  const Data = useSelector((state) => state.payment);
  console.log(sheduledata, "this is sheduele data");
  const removeCart = async (id, serviceId) => {
    const res = await getData(
      `remove-service-from-cart/?id=${id}&serviceId=${serviceId}`
    );
    if (res.status) {
      Cartfun();
      subsData(categoryId);
    }
  };

  let weekDays = [0, 1, 2, 3, 4, 5, 6, 7].map((d) => ({
    day: new Date(Date.now() + d * 24 * 60 * 60 * 1000)
      .toLocaleDateString("en-US", { weekday: "long" })
      .slice(0, 9),
    date: new Date(Date.now() + d * 24 * 60 * 60 * 1000).toISOString(),
  }));

  const scheduleArray = sheduledata.map((el) => {
    const matchedDays = weekDays.filter((day1) =>el.includes(day1.day));
    console.log('matchedDays', matchedDays)
    if (matchedDays.length > 0) {
      return {
        day: matchedDays[0].day,
        date:matchedDays[0].date,
      };
    } 
  }); ;  

   console.log('kkknnnnn', scheduleArray)
  var startTime = moment().startOf("hour");
  var endTime = moment().utc().set({ hour: 15 });

  while (startTime <= endTime) {
    timeStops.push(new moment(startTime).format("hh:mm a"));
    startTime.add(15, "minutes");
  }

  const hanldeSlot = async () => {
    var body = {
      date: slots.date.slice(0, 10),
      timeslot: slots.time,
    };

    const res = await postData(
      `Schedule-your-visit?saloonId=${value[0]?._id ? value[0]?._id : ""}`,
      body
    );
 
    setsheduleData(res?.data);
  };


  const cheoutpage = async () => {
    const path = `Checkout?saloonId=${
      value[0]?._id ? value[0]?._id : ""
    }&addressId=${homecheckoutId ? homecheckoutId : ""}`;
    const res = await getData(path);

    settoatal(...total, res.data[0]?.totalamount);
    // CreateRazor(res.da

    dispatch(checkoutvalues(res.data));
    if (res.status) {
      if (slots.time == "") {
        alert("please choose date & time !");
      } else {
        // navigate("/checkout");
      }
    }
  };

  // const checkTimeslots = () => {
  //   console.log('jjjjjj')
  // if(slots.time || slots.date == ''){
  //   alert('please choose date & time !')
  // }
  // }

  return (
    <>
      <div className="col-xl-4 col-12 rightSideContent pt-2">
        <div className="row innerrighttab">
          <ul
            className="nav nav-pills mb-3 justify-content-around navpill"
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
              <button className="nav-link navLink">Checkout</button>
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
              className={`nav-item navItem ${isOpen == "cart" ? "active" : ""}`}
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
              <div className="addContentt">
                {Cartdata?.map((items) => {
                  return (
                    <>
                      <div className="row mx-0 px-0 bg-dark rounded-3 text-white mb-3">
                        <div className="col-12 py-3 border-bottom border-gray">
                          <div className="row align-items-center">
                            <div className="col-6 leftSideContent">
                              <div className="carditemHeading">
                                {items?.cartdata?.ServiceName}
                              </div>
                              <div className="imagetimegender ">
                                <span className="image">
                                  <img
                                    className="w-100 h-100"
                                    src="assets/img/vandorProfile/clock.svg"
                                    alt
                                  />
                                </span>
                                <span className="time">
                                  {items?.cartdata?.timePeriod_in_minits}
                                </span>{" "}
                                |
                                <span className="gender">
                                  {items?.cartdata?.serviceProvider}
                                </span>
                              </div>
                            </div>
                            <div className="col-6 rightSideContent">
                              <div className="d-flex align-items-center justify-content-around">
                                <div className="text-decoration-line-through discount">
                                  ₹1500
                                </div>
                                <div className="payment">
                                  {items?.cartdata?.Amount}
                                </div>
                                <button
                                  className="btn border-0 p-0 removebtn"
                                  onClick={() =>
                                    removeCart(
                                      items._id,
                                      items?.cartdata?.serviceId
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
                        </div>
                      </div>
                    </>
                  );
                })}
                {/* <div className="col-6 leftSideContent">
                  <div className="carditemHeading">Full Body Bleach</div>
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
                </div> */}
              </div>

              <div className="row row mx-0 py-2 justify-content-between ounded-3 text-black footer">
                <div className="col-4">
                  <div className="totalitems">
                    {Cartdata ? Cartdata?.length : ""}
                  </div>
                  <div className="paymenttotal">
                    ₹{Cartdata ? Cartdata[0]?.totalamount : "Total Amount"}
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
                  <div className="month text-muted">March</div>
                </div>
                {weekDays.map((item, i) => {
                  console.log('weekdayass' , item)
                  return (
                    <div className="col-auto datetimeContent px-1 mb-2">
                      <label className="option">
                        <input
                          type="checkbox"
                          checked={
                            item.date.slice(0, 10) == slots.date.slice(0, 10)
                              ? true
                              : false
                          }
                          disabled 
                          name="optradio"
                        />
                        <span
                          onClick={() =>
                            setSlots({ ...slots, date: item.date })
                          }
                          className="btn btn-theme1 btn-option"
                        >
                          <div>{item.day}</div>
                          <div>{item.date.slice(8, 10)}</div>
                        </span>
                      </label>
                    </div>
                  );
                })}

                <div className="col-12 py-2">
                  <div className="selectDate">Choose Time Slot</div>
                </div>
                {timeStops.map((el) => {
                  // console.log('elelelelleellelelele', el)
                  return (
                    <div className="col-sm-auto col-4 datetimeContent px-2 mb-2">
                      <label className="option w-100">
                        <input
                          type="checkbox"
                          checked={el == slots.time ? true : false}
                          name="optradio"
                        />
                        <span
                          className="btn btn-theme1 btn-option opectiontime"
                          onClick={() => setSlot(el)}
                        >
                          <div className="time">{el} </div>
                        </span>
                      </label>
                    </div>
                  );
                })}
              </div>
              <div className="row row mx-0 py-2 justify-content-between ounded-3 text-black footer">
                <div className="col-4">
                  <div className="totalitems">March</div>
                  <div className="paymenttotal">
                    {slots.time ? slots.time : "--Time--"}
                  </div>
                </div>
                <div className="col-xl-6 col text-xl-center text-end">
                  <div className="buttonfooter">
                    <a
                      role="button"
                      class="text-theme1 text-decoration-none fs-14 me-2 me-xl-0"
                      data-bs-toggle="modal"
                      data-bs-target="#saloonAtHome"
                      onClick={() => getAddressApi()}
                    >
                      Saloon at Home
                    </a>
                    <button
                      onClick={() => {
                        setIsOpen("checkout");
                        hanldeSlot();
                        cheoutpage();
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
          </div>
        </div>
      </div>
    </>
  );
}

export default CartAdd;
