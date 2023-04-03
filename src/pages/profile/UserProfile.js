import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Formik, Form, input, ErrorMessage } from "formik";
import * as yup from "yup";
import * as Yup from "yup";
import {
  getData,
  postData,
  postformdata,
} from "../../components/apiinstance/Api";
import Header from "../../common/layout/header/header";
import { setUsers } from "../../components/redux/redux1/actions";
import { useDispatch, useSelector } from "react-redux";
import HeaderHome from "../../common/layout/header/HeaderHome";

function UserProfile() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.userData);

  // console.log(location?.state?.title);
  const arr = location?.state?.title.map((el) => el);
  const [whishlist, setWhishlist] = useState([]);
  const [wishCount, setWishCount] = useState(0);
  const [isWishAdd, setIsWishAdd] = useState();
  const [color, setcolor] = useState("");
  const [images, setimages] = useState([]);
  const [BookedData, setBookedData] = useState([]);
  const [modaldata, setModalData] = useState([]);
  const [modalvalue, setmaodalvalue] = useState({
    data: "",
  });
  console.log("BookedData", BookedData);
  const [defaultvalues, setdefaultvalues] = useState({
    name: Data[0]?.name,
    phone: Data[0]?.phone,
    email: Data[0]?.email,
    dateOfBirth: Data[0]?.dateOfBirth,
    gender: Data[0]?.gender,
    file: Data?.image,
  });

  const handler = async (value) => {
    var formdata = new FormData();

    for (var key in value) {
      formdata.append(key, value[key]);
      console.log(key, value[key]);
    }
    console.log(formdata, "formdataaaaaa");
    const res = await postformdata("user-Edit-Profile", formdata);
    console.log("ress", res);

    const profile = await getData("user-Profile");
    dispatch(setUsers(profile.data));
  };

  function logout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  const Getwhishlist = async () => {
    const res = await getData("get-wishlist");

    setWhishlist(res.data);
  };

  useEffect(() => {
    Getwhishlist();
  }, []);

  useEffect(() => {
    setimages(Data[0]?.image);
  }, []);
  const whishlistApi = async (value) => {
    console.log("valuevalue", value);
    const path = `remove-store-from-wishlist?id=${value ? value : ""}`;
    const res = await getData(path);
    Getwhishlist();
  };



  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const validationschema = yup.object().shape({
    phone: yup
      .string()
      .required("Enter your mobile number")
      .length(10, "Please enter a valid mobile number.")
      .matches(phoneRegExp, "Please enter a valid mobile number."),
    name: Yup.string()
      .min(2, "Too Short!")
      .max(20, "Too Long!")
      .required("Name is required"),
    email: Yup.string().email().required("Email is required"),
    // gender: Yup.boolean().required("gender is required"),
    // date: yup.date().required().max(new Date(), "Are you a time traveler?!"),
  });
  const [Items, setitems] = useState([]);
  const BookingApi = async () => {
    const res = await getData("get-user-order");
    setBookedData(res.data[0]);
  };
  const Itemhandle = (el) => {
    setmaodalvalue({ data: el });
  };

  useEffect(() => {
    BookingApi();
  }, []);

  const cancelApi = async (id) => {
    const res = await getData(`order-cancel?id=${id ? id : ""}`);
    if (res.status) {
      BookingApi();
    }
  };

  return (
    <div>
      <HeaderHome />
      <section className="container-fluid profilepage py-5 bg-dark">
        <div className="row">
          <div className="col-12">
            <div className="bannerMainBox position-relative bg-white mt-2">
              <div className="profileCoverImg  rounded-3">
                <img
                  className="w-100 h-100"
                  src="assets/img/profile/bussine1.png"
                  alt="bussine1"
                />
              </div>
              <div className="userProfileTxt">
                <div className="row align-items-center gap-0 gap-sm-0">
                  <div className="col-auto colImg ms-sm-4 ps-sm-4">
                    <div className="profileImage ms-auto  position-relative">
                      <img
                        className="w-100 h-100"
                        src={arr ? Data[0]?.image : ""}
                        alt="image-75"
                      />
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="fw-bold userName mb-3">{Data[0]?.name}</div>
                  </div>
                  <div className="col-auto gap-2 gap-sm-3 d-flex">
                    <button
                      type="button"
                      className="btn border-0 editProfileBtn"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <img
                        className="w-100"
                        src="assets/img/profile/image-131.png"
                        alt="image-131"
                      />
                    </button>
                  </div>
                  <div className="col">
                    <div className="logOutBtn text-end">
                      <button
                        type="button"
                        className="btn bg-transparent border-0 shadow-none"
                        onClick={() => logout()}
                      >
                        Log Out
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 px-0 row mx-0">
            <div className="col-12 col-sm-12 col-md-12 col-lg-4 mt-3 mt-lg-4 h-md-100 leftSection">
              <div className="row innerrowP">
                <div className="col-12">
                  <div className="bg-white userProfileSection overflow-hidden">
                    <div className="d-flex align-items-start w-100">
                      <div
                        className="nav flex-column nav-pills  navPill w-100"
                        id="v-pills-tab"
                        role="tablist"
                        aria-orientation="vertical"
                      >
                        <button
                          className="nav-link nav-link border-0 rounded-0 ps-lg-4 ps-xl-5 navLink"
                          id="v-pills-disabled-tab "
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-disabled"
                          type="button"
                          role="tab"
                          aria-controls="v-pills-disabled"
                          aria-selected="false"
                          disabled
                        >
                          <span>
                            {" "}
                            <span className="pe-3">
                              <img src="assets/img/profile/at.svg" alt />
                            </span>
                            {Data[0]?.email}
                          </span>
                        </button>
                        <button
                          className="nav-link nav-link border-0 rounded-0 ps-lg-4 ps-xl-5 navLink"
                          id="v-pills-disabled-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-disabled"
                          type="button"
                          role="tab"
                          aria-controls="v-pills-disabled"
                          aria-selected="false"
                          disabled
                        >
                          <span>
                            {" "}
                            <span className="pe-3">
                              <img src="assets/img/profile/telephone.svg" alt />
                            </span>
                            {Data[0]?.phone}
                          </span>
                          {/* <span>1</span> */}
                        </button>
                        <button
                          className="nav-link border-0 rounded-0 ps-lg-4 ps-xl-5 navLink navlink2 active"
                          id="v-pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-home"
                          type="button"
                          role="tab"
                          aria-controls="v-pills-home"
                          aria-selected="true"
                        >
                          <span onClick={() => BookingApi()}>
                            {" "}
                            <span className="pe-3">
                              <img src="assets/img/profile/heart.svg" alt />
                            </span>
                            My Booking
                          </span>
                          <span>{BookedData ? BookedData.length : 0}</span>
                        </button>
                        <button
                          className="nav-link border-0 rounded-0 ps-lg-4 ps-xl-5 navLink navlink2"
                          id="v-pills-profile-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-profile"
                          type="button"
                          role="tab"
                          aria-controls="v-pills-profile"
                          aria-selected="false"
                        >
                          <span>
                            {" "}
                            <span className="pe-3">
                              <img src="assets/img/profile/heart.svg" alt />
                            </span>{" "}
                            My Wishlist
                          </span>
                          <span>{whishlist.length}</span>
                        </button>
                        <button
                          className="nav-link border-0 rounded-0 ps-lg-4 ps-xl-5 navLink navlink2"
                          id="v-pills-messages-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-messages"
                          type="button"
                          role="tab"
                          aria-controls="v-pills-messages"
                          aria-selected="false"
                        >
                          <span>
                            {" "}
                            <span className="pe-3">
                              <img src="assets/img/profile/alarm.svg" alt />
                            </span>{" "}
                            Saloon Points
                          </span>
                          <span>100</span>
                        </button>
                        <button
                          className="nav-link border-0 rounded-0 ps-lg-4 ps-xl-5 navLink navlink2"
                          id="v-pills-settings-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-settings"
                          type="button"
                          role="tab"
                          aria-controls="v-pills-settings"
                          aria-selected="false"
                        >
                          <span>
                            {" "}
                            <span className="pe-3">
                              <img src="assets/img/profile/user.svg" alt />
                            </span>{" "}
                            Refer &amp; Earn
                          </span>
                          <span>0</span>
                        </button>
                      </div>
                      ;
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-8 mt-3 mt-lg-4 flex-fill h-100 rightSection">
              <div
                className="tab-content bg-white tabInnerR"
                id="v-pills-tabContent"
              >
                <div
                  className="tab-pane fade p-sm-4 p-3 tabsfirst show active "
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                  tabIndex={0}
                >
                  <div className="row innerrow">
                    <div className="col-12 innercolcontent">
                      <ul
                        className="nav nav-pills mb-3 innernavpill"
                        id="pills-tab"
                        role="tablist"
                      >
                        <li
                          className="nav-item innerNavItem"
                          role="presentation"
                        >
                          <button
                            className="nav-link inerNavLink active"
                            id="pills-saloon-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-saloon"
                            type="button"
                            role="tab"
                            aria-controls="pills-saloon"
                            aria-selected="true"
                          >
                            Saloon
                          </button>
                        </li>
                        <li
                          className="nav-item innerNavItem"
                          role="presentation"
                        >
                          <button
                            className="nav-link inerNavLink"
                            id="pills-saloonatHome-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-saloonatHome"
                            type="button"
                            role="tab"
                            aria-controls="pills-saloonatHome"
                            aria-selected="false"
                          >
                            Saloon at Home
                          </button>
                        </li>
                      </ul>
                      <div
                        className="tab-content innertabContent"
                        id="pills-tabContent"
                      >
                        <div
                          className="tab-pane fade show p-sm-4 p-3 active"
                          id="pills-saloon"
                          role="tabpanel"
                          aria-labelledby="pills-saloon-tab"
                          tabIndex={0}
                        >
                          <div className="row tabInnerRow">
                            <div className="col-md-10 mx-auto">
                              {BookedData?.map((el) => {
                                console.log(el.item.data[0]?._id);
                                return (
                                  <>
                                    <div
                                      className="card mb-3 border-0 shadow myBookingCard"
                                      
                                    >
                                      <div className="row g-0">
                                        <div className="col-md-4 leftSide">
                                          <div className="cardleftimage h-100 w-100">
                                            <img
                                              className="w-100 h-100 rounded-3"
                                              src={el.image[0]}
                                              alt="..."
                                            />
                                          </div>
                                        </div>
                                        <div className="col-md-8 rightSide">
                                          <div className="card-body bodycard">
                                            <div className="body-Header d-flex align-items-center justify-content-between ">
                                              <div className="orderid text-theme2 mb-3">
                                                Order Id:{" "}
                                                {el?.item.data[0]?.orderId}
                                              </div>
                                              <div className="panding text-theme1 mb-3">
                                                {el?.item.data[0]?.status}
                                              </div>
                                            </div>
                                            <div className="cardHeading my-2">
                                              {el?.storeName}
                                            </div>
                                            <p className="dateText mb-3 d-flex align-items-center">
                                              <img
                                                className="w100 h100 me-2"
                                                src="assets/img/profile/calendar.svg"
                                                alt
                                              />
                                              {""}
                                              <span>
                                                {new Date(el?.updatedAt)
                                                  .toString()
                                                  .slice(0, 15)}
                                              </span>
                                            </p>
                                            <div className="row align-items-center mb-3 gap-3 paymentItems">
                                              <div className="col d-flex gap-3 align-items-center">
                                                <p className="card-text mb-0">
                                                  <small className="text-theme2">
                                                    ₹{" "}
                                                    {
                                                      el?.item.data[0]
                                                        ?.totalamount
                                                    }
                                                  </small>
                                                </p>
                                                <button
                                                  className="btn btn-theme1 text-white rounded-5 py-1 border-0 shadow-none itemsbtn" data-bs-toggle="modal"
                                                  data-bs-target="#exampleModal1"
                                                  onClick={() => Itemhandle(el)}
                                                >
                                                  {el.item.data.length == 1
                                                    ? `${el.item.data.length} Item`
                                                    : ` ${el.item.data.length} Items`}
                                                </button>
                                              </div>
                                              <div className="col-auto">
                                                <p className="card-text mb-0  ">
                                                  <small
                                                    className="text-theme2 text-danger fs-12"
                                                    onClick={() =>
                                                      cancelApi(el.item.data[0]?._id)
                                                    }
                                                  >
                                                    cancel
                                                  </small>
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade p-sm-4 p-3"
                          id="pills-saloonatHome"
                          role="tabpanel"
                          aria-labelledby="pills-saloonatHome-tab"
                          tabIndex={0}
                        >
                          2
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade p-sm-4 p-3 tabSecond"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                  tabIndex={0}
                >
                  {whishlist?.map((el) => {
                    return (
                      <>
                        <div className="row innerrowtab g-3">
                          <div className="col-12">
                            <div className="card mb-3 border-0 shadow rounded-3 cardwishlist">
                              <div className="row g-0">
                                <div className="col-md-4 imageleft">
                                  <div className="imagewishlistcard position-relative">
                                    <img
                                      className="w-100 h-100 rounded-2"
                                      src={el?.image[0]}
                                      alt="..."
                                    />
                                    <div className="position-absolute top-0 end-0 me-1 imagesvg align-items-center">
                                      <div class="form-check p-0 myFavouriteBtn">
                                        {/* <span
                                          class="form-check-input"
                                          type="checkbox"
                                          value=""
                                          id="favourite"
                                          hidden
                                          onClick={() => {
                                        
                                            );
                                            // whishlistApi(el.saloonId);
                                            // whishlistcolor("red");
                                          }}
                                        /> */}
                                        <label
                                          class="form-check-label"
                                          onClick={() => {
                                            whishlistApi(el.saloonId);
                                          }}
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="21.637"
                                            height={19}
                                            viewBox="0 0 21.637 19"
                                          >
                                            <path
                                              id="Icon_feather-heart"
                                              data-name="Icon feather-heart"
                                              d="M21.369,6.089a5.43,5.43,0,0,0-7.681,0L12.641,7.135,11.595,6.089A5.431,5.431,0,1,0,3.914,13.77L4.96,14.816,12.641,22.5l7.681-7.681,1.047-1.047a5.43,5.43,0,0,0,0-7.681Z"
                                              transform="translate(-1.823 -3.997)"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              fill="red"
                                              strokeWidth={1}
                                            />
                                          </svg>
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-8 contentcardright">
                                  <div className="card-body">
                                    <div className="text-theme1 saloon">
                                      {el?.storeName}
                                    </div>
                                    <div className="saloonname text-theme2">
                                      {el?.description}
                                    </div>
                                    <p className="card-text text-muted">
                                      Sec 110,
                                    </p>
                                    <div className="border-bottom bordermb" />
                                    <div className="footerimage d-flex align-items-center justify-content-between ">
                                      <ul className="d-flex align-items-center justify-content-start list-unstyled gap-3 listImage mb-0 ">
                                        <li>
                                          <img
                                            className="w-100 h-100"
                                            src="assets/img/profile/drink.png"
                                            alt={1}
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            data-bs-title="Beverage"
                                          />
                                        </li>
                                        <li>
                                          <img
                                            className="w-100 h-100"
                                            src="assets/img/profile/wifi.png"
                                            alt={2}
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            data-bs-title="WiFi"
                                          />
                                        </li>
                                        <li>
                                          <img
                                            className="w-100 h-100"
                                            src="assets/img/profile/ac.png"
                                            alt={3}
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            data-bs-title="AC"
                                          />
                                        </li>
                                        <li>
                                          <img
                                            className="w-100 h-100"
                                            src="assets/img/profile/TV-old.png"
                                            alt={4}
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            data-bs-title="TV"
                                          />
                                        </li>
                                        <li>
                                          <img
                                            className="w-100 h-100"
                                            src="assets/img/profile/PARKING.png"
                                            alt={5}
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            data-bs-title="Parking"
                                          />
                                        </li>
                                        <li>
                                          <img
                                            className="w-100 h-100"
                                            src="assets/img/profile/ONLINE-PAYMENT.png"
                                            alt={6}
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            data-bs-title="Card Payment"
                                          />
                                        </li>
                                      </ul>
                                      <div className="distanceimage">
                                        <img
                                          className="h-100 w-100"
                                          src="assets/img/profile/km-icon.png"
                                          alt="km"
                                        />
                                        <small className="text-black kmeeter">
                                          {" "}
                                          5 km
                                        </small>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
                <div
                  className="tab-pane fade p-sm-4 p-3 tabthird"
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                  tabIndex={0}
                >
                  <div className="row">
                    <div className="col-12">
                      <div className="heading mb-0">100</div>
                      <div className="headingSub">
                        Total Available Saloon Points
                      </div>
                      <div className="ponitext">
                        Total Available Saloon Points
                      </div>
                      <div className="paymenttext">
                        You can use 50pts in one transaction on payment page
                        during checkout
                      </div>
                    </div>
                    <div className="col-12 d-none">
                      <nav className="innertabs py-3">
                        <div
                          className="nav nav-tabs navTabsinner gap-3"
                          id="nav-tab"
                          role="tablist"
                        >
                          <button
                            className="nav-link innerNavLink active"
                            id="nav-all-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-all"
                            type="button"
                            role="tab"
                            aria-controls="nav-all"
                            aria-selected="true"
                          >
                            all
                          </button>
                          <button
                            className="nav-link innerNavLink"
                            id="nav-referrals-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-referrals"
                            type="button"
                            role="tab"
                            aria-controls="nav-referrals"
                            aria-selected="false"
                          >
                            Referrals
                          </button>
                          <button
                            className="nav-link innerNavLink"
                            id="nav-credited-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-credited"
                            type="button"
                            role="tab"
                            aria-controls="nav-credited"
                            aria-selected="false"
                          >
                            Credited
                          </button>
                          <button
                            className="nav-link innerNavLink"
                            id="nav-redeemed-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-redeemed"
                            type="button"
                            role="tab"
                            aria-controls="nav-redeemed"
                            aria-selected="false"
                          >
                            Redeemed
                          </button>
                        </div>
                      </nav>
                      <div className="tab-content" id="nav-tabContent">
                        <div
                          className="tab-pane fade show active"
                          id="nav-all"
                          role="tabpanel"
                          aria-labelledby="nav-all-tab"
                          tabIndex={0}
                        >
                          Empty
                        </div>
                        <div
                          className="tab-pane fade"
                          id="nav-referrals"
                          role="tabpanel"
                          aria-labelledby="nav-referrals-tab"
                          tabIndex={0}
                        >
                          Empty
                        </div>
                        <div
                          className="tab-pane fade"
                          id="nav-credited"
                          role="tabpanel"
                          aria-labelledby="nav-credited-tab"
                          tabIndex={0}
                        >
                          Empty
                        </div>
                        <div
                          className="tab-pane fade"
                          id="nav-redeemed"
                          role="tabpanel"
                          aria-labelledby="nav-redeemed-tab"
                          tabIndex={0}
                        >
                          Empty
                        </div>
                      </div>
                    </div>
                    <div className="col-12 referEran py-3">
                      <div className="saloontext mb-3">
                        Saloon Wallet Points
                      </div>
                      <p className="saloonperograph">
                        Saloon Points/Wallet Points are the points given in the
                        user’s account that can be deemed during payment for
                        appointment booking on Saloon Platform as per the
                        outlined terms and conditions. Saloon Points have a
                        validity period that is generally mentioned in Terms and
                        Conditions and can differ as per Saloon's discretion.
                        SALOON WEB SERVICES PRIVATE LIMITED reserves the right
                        to update, amend, or cancel provision for Saloon Points
                        for its users at any given point of time without any
                        prior notice.
                      </p>
                      <div className="saloonsubtext mb-3">
                        Saloon Wallet Points
                      </div>
                      <ul className="unlist">
                        <li>
                          As a welcome bonus, Saloon provides 100 Points to the
                          new users on app downloads.
                        </li>
                        <li>
                          1 Saloon Point is equivalent to Rs. 1. Thus, 100
                          Saloon Points is worth Rs. 100.
                        </li>
                        <li>
                          Users can redeem 50 Points for order value ranging
                          from Rs. 99 to Rs. 499 and 100 Points on order value
                          equal to or more than Rs. 500.
                        </li>
                        <li>
                          Saloon Points can't be cancelled or transferred to any
                          other Saloon Wallet.
                        </li>
                        <li>
                          Saloon Points can't be transferred to any bank account
                          or withdrawn to another in the form of cash.
                        </li>
                      </ul>
                      <div className="saloontext mb-3">
                        Use of Saloon Points in the event of Appointment
                        Cancellations
                      </div>
                      <ul className="unlist">
                        <li>
                          When the customer cancels the appointment(s), the
                          Saloon Points used for the transaction(s) (if any)
                          will not be refunded.
                        </li>
                        <li>
                          When a Saloon Partner or Artist cancels the
                          appointment(s), the Saloon Points used for the
                          transaction(s) (if any) will be refunded to the
                          customers, which they can reuse later.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade p-sm-4 p-3 tabForth"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                  tabIndex={0}
                >
                  <div className="row mx-0 ">
                    <div className="col-12 howitworks">
                      <div className="card mb-3 howitcard border-0 shadow">
                        <div className="row g-0">
                          <div className="col-md-4 leftSideContent">
                            <div className="text-center imagehow">
                              <img
                                src="assets/img/profile/how-its-works.svg"
                                className="img-fluid rounded-start w-100 h-100"
                                alt="..."
                              />
                            </div>
                          </div>
                          <div className="col-md-8 ightSideContent">
                            <div className="card-body flex-column align-items-cente justify-content-center d-flex h-100">
                              <h5 className="card-title">How it Works?</h5>
                              <p className="card-text">
                                Share the referral code with your friends.
                                Ensure that they download the app and enter this
                                referral code. Check your points in your wallet.
                                The more you refer, the more points you get.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="card mb-3 refercard border-0 shadow">
                        <div className="row g-0">
                          <div className="col-md-4 d-flex align-items-cente justify-content-center flex-column leftSideContent">
                            <div className="text100">100</div>
                            <div className="textSubHeading text-center">
                              Your Total Referral Earning
                            </div>
                          </div>
                          <div className="col-md-8 rightSideContent">
                            <div className="card-body bodycard">
                              <h5 className="card-title">
                                Share Earn &amp; Have Fun
                              </h5>
                              <p className="card-text">
                                Get 50 Points for every person you refer to.
                                Your friend will also get 100 points when they
                                download the app
                              </p>
                              <p className="card-textsub">
                                <small>
                                  You can use 50pts in one transaction on
                                  payment page during checkout
                                </small>
                              </p>
                              <div className="border-bottom bdbottom my-3" />
                              <div className="sharetext">
                                <small className="text-muted">
                                  Share your unique referral Code
                                </small>
                              </div>
                              <div className="copytext">
                                <div className="copy-text">
                                  <input
                                    type="text"
                                    className="text"
                                    defaultValue="Q06730U"
                                  />
                                  <button className="position-absolute end-0 me-2">
                                    <img
                                      src="assets/img/profile/copyicon.svg"
                                      alt
                                    />
                                  </button>
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
            </div>
          </div>
          ;
        </div>
      </section>

      {/* edit profile */}
      <div
        className="modal fade editmodal"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-bottom-0">
              <button
                type="button"
                className="btn-close shadow-none"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>

            <Formik
              initialValues={defaultvalues}
              validationSchema={validationschema}
              onSubmit={(value) => handler(value)}
            >
              {(props) => {
                return (
                  <Form onSubmit={props.handleSubmit}>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-12 mb-3">
                          <div className="userimagesection">
                            <label
                              htmlFor="formFile"
                              className="form-label mb-0 w-100 h-100 position-relative"
                            >
                              <div className="image w-100 h-100 border border-2 border-theme1 rounded-circle overflow-hidden">
                                {/* style={{height: "80px",width: "80px",borderRadius: "50%"}} */}
                                <img
                                  className="w-100 h-100"
                                  src={
                                    defaultvalues.file
                                      ? defaultvalues.file
                                      : images
                                  }
                                  alt="user"
                                />
                              </div>
                            </label>
                            <input
                              className="form-control "
                              type="file"
                              id="formFile"
                              name="file"
                              hidden
                              onChange={(event) => {
                                props.setTouched({
                                  ...props.touched,
                                  file: true,
                                });
                                props.setFieldValue(
                                  "file",
                                  event.target.files[0],
                                  setimages(
                                    URL.createObjectURL(event.target.files[0])
                                  )
                                );
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="inputIconGroup d-flex align-items-center justify-content-start">
                            <div className="icon">
                              <img
                                src="assets/img/profile/Icon feather-user.svg"
                                alt="usericon"
                              />
                            </div>
                            <input
                              className="form-cantrol inputform shadow-none py-2 border-0 border-bottom ms-2 w-100"
                              type="text"
                              name="name"
                              value={props.values.name}
                              onChange={props.handleChange}
                              placeholder="Name"
                            />
                          </div>
                          <p className="text-danger text-start">
                            {props.errors.name ? props.errors.name : ""}
                          </p>
                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="inputIconGroup d-flex align-items-center justify-content-start">
                            <div className="icon">
                              <img
                                src="assets/img/profile/Icon simple-email.svg"
                                alt="@icon"
                              />
                            </div>
                            <input
                              className="form-cantrol inputform shadow-none py-2 border-0 border-bottom ms-2 w-100"
                              type="email"
                              name="email"
                              value={props.values.email}
                              onChange={props.handleChange}
                              id="formGroupExampleemail"
                              placeholder="Email"
                            />
                          </div>
                          <p className="text-danger text-start">
                            {props.errors.email ? props.errors.email : ""}
                          </p>
                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="inputIconGroup d-flex align-items-center justify-content-start">
                            <div className="icon">
                              <img
                                src="assets/img/profile/phone.svg"
                                alt="@icon"
                              />
                            </div>
                            <input
                              className="form-cantrol inputform shadow-none py-2 border-0 border-bottom ms-2 w-100"
                              type="tel"
                              name="phone"
                              value={props.values.phone}
                              onChange={props.handleChange}
                            />
                          </div>
                          <p className="text-danger text-start">
                            {props.errors.phone ? props.errors.phone : ""}
                          </p>
                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="inputIconGroup d-flex align-items-center justify-content-start">
                            <div className="icon ">
                              <img
                                src="assets/img/profile/birthday.svg"
                                alt="@icon"
                              />
                            </div>
                            <input
                              className="form-cantrol inputform shadow-none py-2 border-0 border-bottom ms-2 w-100"
                              type="date"
                              name="dateOfBirth"
                              value={props.values.date}
                              onChange={props.handleChange}
                            />
                          </div>
                          <p className="text-danger text-start">
                            {props.errors.date ? props.errors.date : ""}
                          </p>
                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="inputIconGroup d-flex align-items-center">
                            <div className="icon me-2">
                              <img src="assets/img/profile/gander.svg" alt />
                            </div>
                            <div className="d-flex align-items-cente">
                              <div className="form-check px-4">
                                <input
                                  className="form-check-input checkinput shadow-none"
                                  type="radio"
                                  value={"male"}
                                  name="gender"
                                  checked={props.values.gender == "male"}
                                  onChange={props.handleChange}
                                  id="flexCheckDefault"
                                />
                                <label
                                  className="form-check-label checklebal shadow-none"
                                  htmlFor="flexCheckDefault"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check ps-3">
                                <input
                                  className="form-check-input checkinput shadow-none"
                                  type="radio"
                                  name="gender"
                                  value={"Female"}
                                  checked={props.values.gender == "Female"}
                                  onChange={props.handleChange}
                                  id="flexCheckChecked"
                                />
                                <label
                                  className="form-check-label checklebal shadow-none"
                                  htmlFor="flexCheckChecked"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 groupbtnsave text-center">
                          <div className="d-grid gap-3 d-md-flex justify-content-center">
                            <button
                              className="btn bg-theme1 fw-bold text-white btnsave  me-md-2 rounded-4 px-4"
                              type="submit"
                            >
                              Save Changes
                            </button>
                            <button
                              className="btn bg-white fw-bold text-danger border-theme1 btncancel rounded-4 px-5"
                              data-bs-dismiss="modal"
                              type="button"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
      {/* edit profile end */}
      <div
        className="modal fade bookingmodal"
        id="exampleModal1"
        tabIndex={-1}
        aria-labelledby="exampleModal1Label"
        aria-hidden="true"
      >
        <div className="modal-dialog  modal-dialog-scrollable">
          <div div className="modal-content">
            <div className="modal-header d-flex align-items-center justify-content-between">
              <h1
                className="modal-title d-flex align-items-center"
                id="exampleModalLabel"
              >
                Order Id : {modalvalue.data?.item?.data[0]?.orderId}{" "}
                <span className>
                  <img
                    className="w-100 h-100 ms-1"
                    src="assets/img/profile/modalcopy.svg"
                    alt="copy"
                  />
                </span>
              </h1>
              <div
                type="button"
                className="shadow-none buttonprnding d-flex align-items-center"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Pending
                <span>
                  <img
                    className="w-100 h-100 ms-1"
                    src="assets/img/profile/arrow.svg"
                    alt
                  />
                </span>
              </div>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-12">
                  <div className="card border-0 shadow position-relative">
                    <div className="card-image w-100 ">
                      <img
                        className="w-100 h-100 rounded-3"
                        src={modalvalue.data?.image}
                        alt
                      />
                      <div className="saloontext">Kalon Unisex saloon</div>
                    </div>
                    <div className="card-body">
                      <div className="icontext d-flex align-items-center gap-4 mb-3">
                        <span>
                          <img
                            className="w-100 h-100 me-3"
                            src="assets/img/profile/calendar.svg"
                            alt
                          />
                        </span>
                        {new Date(modalvalue.data?.updatedAt)
                          .toString()
                          .slice(0, 15)}
                      </div>
                      <div className="addarestext d-flex  gap-4 mb-3">
                        <span>
                          <img
                            className="w-100 h-100 me-3"
                            src="assets/img/profile/geo-alt-fill.svg"
                          />
                        </span>
                        {modalvalue.data?.location?.aria} ,{" "}
                        {modalvalue.data?.location?.pincode},
                        {modalvalue.data?.location?.city} ,{" "}
                        {modalvalue.data?.location?.state}
                      </div>
                      <div className="icontext ">
                        <a
                          className="text-decoration-none d-flex align-items-center gap-4 mb-3 text-theme2"
                          href="#"
                        >
                          <span>
                            <img
                              className="w-100 h-100 me-3"
                              src="assets/img/profile/cursor.svg"
                              alt
                            />
                          </span>
                          See direction
                        </a>
                      </div>
                    </div>

                    <div className="bg-dark  px-3 py-3 bottomfooter">
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <div className="Servicestext text-theme1">Services</div>
                      </div>
                      {modalvalue.data?.item?.data?.map((el) => {
                        // console.log("elelelle3333", el);
                        return (
                          <>
                            <div className="d-flex align-items-center justify-content-between mb-3">
                              <div className="Servicestext text-white">
                                {el.ServiceName}
                              </div>
                              <div className="Servicestext text-white">
                                ₹ {el.ServicePrice}
                              </div>
                            </div>
                          </>
                        );
                      })}
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <div className="Servicestext text-white">Sub-Total</div>
                        <div className="Servicestext text-white">
                          ₹ {modalvalue.data?.item?.data[0]?.totalamount}
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <div className="Servicestext text-white">Discount</div>
                        <div className="Servicestext text-white">-₹0</div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <div className="Servicestext text-white">
                          Booking Charge
                        </div>
                        <div className="Servicestext text-success">
                          <span className="text-decoration-line-through text-theme1 me-1">
                            ₹49
                          </span>
                          Free
                        </div>
                      </div>
                    </div>

                    <div className="position-absolute bottom-0 py-3 bg-theme2 w-100 footercard">
                      <div className="text-theme1 text-center offertext">
                        Your Save ₹0 on this Order
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Page end */}
      {/* herewe we Section start */}
      <section className="container-fluid wherWeSection bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="heading py-3">Where We Are</div>
            </div>
            <div className="col-12">
              <ul className="where-we-list">
                <li>
                  <a href="#">Greater Noida West</a>
                </li>
                <li>
                  <a href="#">Greater Noida</a>
                </li>
                <li>
                  <a href="#">Faridabad</a>
                </li>
                <li>
                  <a href="#">Delhi</a>
                </li>
                <li>
                  <a href="#">Ghaziabad</a>
                </li>
                <li>
                  <a href="#">Lucknow</a>
                </li>
                <li>
                  <a href="#">Meerut</a>
                </li>
                <li>
                  <a href="#">Agra</a>
                </li>
                <li>
                  <a href="#">Chandigarh</a>
                </li>
                <li>
                  <a href="#">Mohali</a>
                </li>
                <li>
                  <a href="#">Zirakpur</a>
                </li>
                <li>
                  <a href="#">Jalandhar City</a>
                </li>
                <li>
                  <a href="#">Aligarh</a>
                </li>
                <li>
                  <a href="#">Jaipur</a>
                </li>
                <li>
                  <a href="#">Pune</a>
                </li>
                <li>
                  <a href="#">Bhopal</a>
                </li>
                <li>
                  <a href="#">Ludhiana</a>
                </li>
                <li>
                  <a href="#">Khair</a>
                </li>
                <li>
                  <a href="#">Panchkula</a>
                </li>
                <li>
                  <a href="#">Gorakhpur</a>
                </li>
                <li>
                  <a href="#">Daman</a>
                </li>
                <li>
                  <a href="#">Haridwar</a>
                </li>
                <li>
                  <a href="#">Roorkee</a>
                </li>
                <li>
                  <a href="#">Dehradun</a>
                </li>
                <li>
                  <a href="#">Kanpur</a>
                </li>
                <li>
                  <a href="#">Unnao</a>
                </li>
                <li>
                  <a href="#">Karnal</a>
                </li>
                <li>
                  <a href="#">Kurukshetra</a>
                </li>
                <li>
                  <a href="#">Panipat</a>
                </li>
                <li>
                  <a href="#">Amritsar</a>
                </li>
                <li>
                  <a href="#">Kota</a>
                </li>
                <li>
                  <a href="#">Gurugram</a>
                </li>
                <li>
                  <a href="#">Noida</a>
                </li>
              </ul>
              <div className="tabswhere py-3">
                <ul
                  className="nav nav-pills mb-3 pillcontent"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item navitem" role="presentation">
                    <button
                      className="nav-link navLink active"
                      id="pills-saloon-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-saloon"
                      type="button"
                      role="tab"
                      aria-controls="pills-saloon"
                      aria-selected="true"
                    >
                      Saloon
                    </button>
                  </li>
                  <li className="nav-item navitem" role="presentation">
                    <button
                      className="nav-link navLink"
                      id="pills-parlour-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-parlour"
                      type="button"
                      role="tab"
                      aria-controls="pills-parlour"
                      aria-selected="false"
                    >
                      Parlour
                    </button>
                  </li>
                  <li className="nav-item navitem" role="presentation">
                    <button
                      className="nav-link navLink"
                      id="pills-spa-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-spa"
                      type="button"
                      role="tab"
                      aria-controls="pills-spa"
                      aria-selected="false"
                    >
                      Spa
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-saloon"
                    role="tabpanel"
                    aria-labelledby="pills-saloon-tab"
                    tabIndex={0}
                  >
                    <div>
                      <ul className="where-we-list category_list">
                        <li>
                          <a href={3}>Salon in Greater Noida West</a>
                        </li>
                        <li>
                          <a href={3}>Salon in Greater Noida</a>
                        </li>
                        <li>
                          <a href={3}>Salon in Faridabad</a>
                        </li>
                        <li>
                          <a href={3}>Salon in Delhi</a>
                        </li>
                        <li>
                          <a href={3}>Salon in Ghaziabad</a>
                        </li>
                        <li>
                          <a href="#">Salon in Lucknow</a>
                        </li>
                        <li>
                          <a href="#">Salon in Meerut</a>
                        </li>
                        <li>
                          <a href="#">Salon in Agra</a>
                        </li>
                        <li>
                          <a href="#">Salon in Chandigarh</a>
                        </li>
                        <li>
                          <a href="#">Salon in Mohali</a>
                        </li>
                        <li>
                          <a href="#">Salon in Jalandhar City</a>
                        </li>
                        <li>
                          <a href="#">Salon in Aligarh</a>
                        </li>
                        <li>
                          <a href="#">Salon in Jaipur</a>
                        </li>
                        <li>
                          <a href="#">Salon in Pune</a>
                        </li>
                        <li>
                          <a href="#">Salon in Bhopal</a>
                        </li>
                        <li>
                          <a href="#">Salon in Ludhiana</a>
                        </li>
                        <li>
                          <a href="#">Salon in Khair</a>
                        </li>
                        <li>
                          <a href="#">Salon in Panchkula</a>
                        </li>
                        <li>
                          <a href="#">Salon in Gorakhpur</a>
                        </li>
                        <li>
                          <a href="#">Salon in Daman</a>
                        </li>
                        <li>
                          <a href="#">Salon in Haridwar</a>
                        </li>
                        <li>
                          <a href="#">Salon in Roorkee</a>
                        </li>
                        <li>
                          <a href="#">Salon in Dehradun</a>
                        </li>
                        <li>
                          <a href="#">Salon in Kanpur</a>
                        </li>
                        <li>
                          <a href="#">Salon in Unnao</a>
                        </li>
                        <li>
                          <a href="#">Salon in Karnal</a>
                        </li>
                        <li>
                          <a href="#">Salon in Kurukshetra</a>
                        </li>
                        <li>
                          <a href="#">Salon in Panipat</a>
                        </li>
                        <li>
                          <a href="#">Salon in Amritsar</a>
                        </li>
                        <li>
                          <a href="#">Salon in Kota</a>
                        </li>
                        <li>
                          <a href="#">Salon in Gurugram</a>
                        </li>
                        <li>
                          <a href="#">Salon in Noida</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-parlour"
                    role="tabpanel"
                    aria-labelledby="pills-parlour-tab"
                    tabIndex={0}
                  >
                    <div>
                      <ul className="where-we-list category_list">
                        <li>
                          <a href="#">Parlour in Greater Noida West</a>
                        </li>
                        <li>
                          <a href="#">Parlour in Greater Noida</a>
                        </li>
                        <li>
                          <a href="#">Parlour in Faridabad</a>
                        </li>
                        <li>
                          <a href="#i">Parlour in Delhi</a>
                        </li>
                        <li>
                          <a href="#">Parlour in Ghaziabad</a>
                        </li>
                        <li>
                          <a href="#">Parlour in Lucknow</a>
                        </li>
                        <li>
                          <a href="#">Parlour in Meerut</a>
                        </li>
                        <li>
                          <a href="#">Parlour in Agra</a>
                        </li>
                        <li>
                          <a href="#">Parlour in Chandigarh</a>
                        </li>
                        <li>
                          <a href="#">Parlour in Mohali</a>
                        </li>
                        <li>
                          <a href="#">Parlour in Zirakpur</a>
                        </li>
                        <li>
                          <a href="#">Parlour in Jalandhar City</a>
                        </li>
                        <li>
                          <a href="#">Parlour in Aligarh</a>
                        </li>
                        <li>
                          <a href="#">Parlour in Jaipur</a>
                        </li>
                        <li>
                          <a href="#">Parlour in Pune</a>
                        </li>
                        <li>
                          <a href="#">Parlour in Bhopal</a>
                        </li>
                        <li>
                          <a href="#">Parlour in Ludhiana</a>
                        </li>
                        <li>
                          <a href="#">Parlour in Daman</a>
                        </li>
                        <li>
                          <a href="#">Parlour in Haridwar</a>
                        </li>
                        <li>
                          <a href="#">Parlour in Roorkee</a>
                        </li>
                        <li>
                          <a href="#">Parlour in Dehradun</a>
                        </li>
                        <li>
                          <a href="#">Parlour in Kanpur</a>
                        </li>
                        <li>
                          <a href="#">Parlour in Unnao</a>
                        </li>
                        <li>
                          <a href="#">Parlour in Karnal</a>
                        </li>
                        <li>
                          <a href="#">Parlour in Kurukshetra</a>
                        </li>
                        <li>
                          <a href="#">Parlour in Panipat</a>
                        </li>
                        <li>
                          <a href="#">Parlour in Amritsar</a>
                        </li>
                        <li>
                          <a href="#">Parlour in Kota</a>
                        </li>
                        <li>
                          <a href="#">Parlour in Gurugram</a>
                        </li>
                        <li>
                          <a href="#">Parlour in Noida</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-spa"
                    role="tabpanel"
                    aria-labelledby="pills-spa-tab"
                    tabIndex={0}
                  >
                    <div>
                      <ul className="where-we-list category_list">
                        <li>
                          <a href="#">Spa in Greater Noida</a>
                        </li>
                        <li>
                          <a href="#">Spa in Faridabad</a>
                        </li>
                        <li>
                          <a href="#">Spa in Delhi</a>
                        </li>
                        <li>
                          <a href="#">Spa in Ghaziabad</a>
                        </li>
                        <li>
                          <a href="#">Spa in Lucknow</a>
                        </li>
                        <li>
                          <a href="#">Spa in Chandigarh</a>
                        </li>
                        <li>
                          <a href="#">Spa in Mohali</a>
                        </li>
                        <li>
                          <a href="#">Spa in Zirakpur</a>
                        </li>
                        <li>
                          <a href="#">Spa in Jalandhar City</a>
                        </li>
                        <li>
                          <a href="#">Spa in Jaipur</a>
                        </li>
                        <li>
                          <a href="#">Spa in Pune</a>
                        </li>
                        <li>
                          <a href="#">Spa in Ludhiana</a>
                        </li>
                        <li>
                          <a href="#">Spa in Daman</a>
                        </li>
                        <li>
                          <a href="#">Spa in Roorkee</a>
                        </li>
                        <li>
                          <a href="#">Spa in Dehradun</a>
                        </li>
                        <li>
                          <a href="#">Spa in Gurugram</a>
                        </li>
                        <li>
                          <a href="#">Spa in Noida</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UserProfile;
