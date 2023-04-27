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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer2 from "../../common/layout/footer/Footer2 ";
import Footer from "../../common/layout/footer/footer";

function UserProfile() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.userData);
  // console.log("ggggg", Data);
  const [whishlist, setWhishlist] = useState([]);
  const [values, setvalue] = useState({});
  const [images, setimages] = useState([]);
  const [BookedData, setBookedData] = useState([]);
  const [bookedbyhome, setBookedByHome] = useState([]);
  const [modaldata, setModalData] = useState([]);
  const [modalvalue, setmaodalvalue] = useState({ data: "" });
  const [addmoney, setmoney] = useState([]);
  const [pointId, setpointId] = useState("");
  const [localid, setlocalid] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const [defaultvalues, setdefaultvalues] = useState({
    name: Data[0]?.name,
    phone: Data[0]?.phone,
    email: Data[0]?.email,
    dateOfBirth: Data[0]?.dateOfBirth?.slice(0, 10),
    gender: Data[0]?.gender,
    file: Data?.image,
  });
  const handler = async (value) => {
    console.log(value);
    var formdata = new FormData();

    for (var key in value) {
      formdata.append(key, value[key]);
    }
    //console.log(formdata, "formdataaaaaa");
    const res = await postformdata("user-Edit-Profile", formdata);
    const resimg = await postformdata("Edit-User-Profile", formdata);
    if (res.status || resimg.status) {
      profileApi();
      // toast.success(res.message, {
      //   position: toast.POSITION.TOP_RIGHT,
      // });
    } else {
      // toast.error(res.message, {
      //   position: toast.POSITION.TOP_RIGHT,
      // });
    }
  };

  const profileApi = async () => {
    const profile = await getData(`user-Profile?Transaction=${true}`);
    //console.log("?Transactionnnnnnnnnnn", profile.data[0]._id);
    localStorage.setItem(
      "refertransaction",
      JSON.stringify(profile.data[0].referTransactions)
    );
    dispatch(setUsers(profile.data));
  };
  const refertransaction = localStorage.getItem("refertransaction");
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
    profileApi();
  }, []);

  useEffect(() => {
    setimages(Data[0]?.image);
  }, []);
  const whishlistApi = async (value) => {
    const path = `wishlist?id=${value ? value : ""}`;
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
    gender: Yup.string().required("gender is required"),
    dateOfBirth: Yup.date()
      .required("Date is required!")
      .max(new Date(), "Date should not be later than today!"),
  });
  const [Items, setitems] = useState([]);
  const BookingApi = async () => {
    const res = await getData("get-user-order");
    console.log("ressssss", res.data);
    setBookedData(res.data[0]);
  };

  const SaloonAtHome = () => {
    const filter = BookedData?.filter((el) => {
      if (el.item.addressId != null) {
        return el;
      }
    });
    setBookedByHome(filter);
  };
  //console.log("orderIdorderId", bookedbyhome);
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
  const showDirection = (location) => {
    window.open(
      "https://maps.google.com?q=" +
        location.aria +
        "," +
        location.city +
        "," +
        location.pincode +
        "," +
        location.state
    );
  };

  const Addmoney = async () => {
    const res = await getData("point-to-money-convert");
    setmoney(res.data);
  };

  const selectPoint = (val) => {
    localStorage.setItem("pointId", val);
    setpointId(val);
  };
  useEffect(() => {
    const val = localStorage.getItem("pointId");
    setlocalid(val);
  }, [pointId]);
  const confirmPoint = async () => {
    const res = await getData(
      `point-to-money-convert?id=${localid ? localid : ""}`
    );
    if (res.status) {
      profileApi();
    }
  };
  const handleCopyClick = () => {
    navigator.clipboard.writeText(Data[0]?.referCode);
    setIsCopied((prev) => !prev);
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  const openingPage = (url) => {
    window.open(`${url}`);
  };
  return (
    <div>
      <HeaderHome />
      <ToastContainer autoClose="2000" />
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
                        src={Data[0]?.image}
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
                            <span className="pe-3">
                              <img
                                src="assets/img/profile/at.svg"
                                alt="image"
                              />
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
                            <span className="pe-3">
                              <img
                                src="assets/img/profile/telephone.svg"
                                alt="image"
                              />
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
                              <img
                                src="assets/img/profile/heart.svg"
                                alt="image"
                              />
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
                              <img
                                src="assets/img/profile/heart.svg"
                                alt="image"
                              />
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
                              <img
                                src="assets/img/profile/alarm.svg"
                                alt="image"
                              />
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
                              <img
                                src="assets/img/profile/user.svg"
                                alt="image"
                              />
                            </span>{" "}
                            Refer &amp; Earn
                          </span>
                          <span>0</span>
                        </button>
                        <button
                          className="nav-link border-0 rounded-0 ps-lg-4 ps-xl-5 navLink navlink2"
                          id="wallet-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#wallet"
                          type="button"
                          role="tab"
                          aria-controls="wallet"
                          aria-selected="false"
                        >
                          <span>
                            {" "}
                            <span className="pe-3">
                              <img
                                src="assets/img/profile/user.svg"
                                alt="image"
                              />
                            </span>{" "}
                            Wallet
                          </span>
                          <span>₹ {Data[0]?.userWallet?.balance}</span>
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
                            onClick={() => SaloonAtHome()}
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
                                if (el.item.addressId == null) {
                                  return (
                                    <>
                                      <div className="card mb-3 border-0 shadow myBookingCard">
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
                                                  alt="image"
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
                                                    className="btn btn-theme1 text-white rounded-5 py-1 border-0 shadow-none itemsbtn"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal1"
                                                    onClick={() =>
                                                      Itemhandle(el)
                                                    }
                                                  >
                                                    {el.item.data.length == 1
                                                      ? `${el.item.data.length} Item`
                                                      : ` ${el.item.data.length} Items`}
                                                  </button>
                                                </div>
                                                {el?.item.data[0]?.status === "pending" ? (
                                                  <div className="col-auto">
                                                    <p className="card-text mb-0  ">
                                                      <small
                                                        className="text-theme2 text-danger fs-12"
                                                        onClick={() =>
                                                          cancelApi(
                                                            el.item.data[0]?._id
                                                          )
                                                        }
                                                      >
                                                        cancel
                                                      </small>
                                                    </p>
                                                  </div>
                                                ) : (
                                                  ""
                                                )}
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </>
                                  );
                                }
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
                          {bookedbyhome?.map((el) => {
                            if (el.item.addressId != null) {
                              return (
                                <>
                                  <div className="card mb-3 border-0 shadow myBookingCard">
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
                                              alt="image"
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
                                                className="btn btn-theme1 text-white rounded-5 py-1 border-0 shadow-none itemsbtn"
                                                data-bs-toggle="modal"
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
                                                    cancelApi(
                                                      el.item.data[0]?._id
                                                    )
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
                            }
                          })}
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
                                      src={el?.result.image}
                                      alt="..."
                                    />
                                    <div className="position-absolute top-0 end-0 me-1 imagesvg align-items-center">
                                      <div className="form-check p-0 myFavouriteBtn">
                                        {/* <span
                                          className="form-check-input"
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
                                          className="form-check-label"
                                          onClick={() => {
                                            whishlistApi(el?.result?._id);
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
                                      {el?.result.storeName}
                                    </div>
                                    <div className="saloonname text-theme2">
                                      {el?.result.description}
                                    </div>
                                    <p className="card-text text-muted">
                                      {el?.result.location
                                        ? el?.result.location.aria ||
                                          el?.result.location.aria.city ||
                                          el?.result.location.aria.pincode ||
                                          el?.result.location.aria.shopNumber
                                        : ""}
                                    </p>
                                    <div className="border-bottom bordermb" />
                                    <div className="footerimage d-flex align-items-center justify-content-between ">
                                      <ul className="d-flex align-items-center justify-content-start list-unstyled gap-3 listImage mb-0 ">
                                        {el?.result?.ProfileInfo?.amenities?.map(
                                          (el) => {
                                            if (el == "wifi") {
                                              return (
                                                <li>
                                                  <img
                                                    className="w-100 h-100"
                                                    src="assets/img/profile/wifi.png"
                                                    alt="image"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    data-bs-title="Beverage"
                                                  />
                                                </li>
                                              );
                                            }
                                          }
                                        )}
                                        {el?.result?.ProfileInfo?.amenities?.map(
                                          (el) => {
                                            if (el == "cctv") {
                                              return (
                                                <li>
                                                  <img
                                                    className="w-100 h-100"
                                                    src="assets/img/profile/TV-old.png"
                                                    alt="image"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    data-bs-title="Beverage"
                                                  />
                                                </li>
                                              );
                                            }
                                          }
                                        )}
                                        {/* <li>
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
                                        </li> */}
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
                              <div className="border-bottom bdbottom  my-3" />
                              <div className="sharetext d-flex justify-content-between w-50 ">
                                <small className="text-muted">
                                  Share your unique referral Code
                                </small>
                                <span className="text-theme1 ">
                                  {" "}
                                  {isCopied && Data[0]?.referCode
                                    ? "copied!"
                                    : ""}
                                </span>
                              </div>
                              <div className="copytext ">
                                <div className="copy-text w-50">
                                  <input
                                    type="text"
                                    className="text w-100"
                                    value={Data[0]?.referCode}
                                    disabled
                                  />
                                  <button
                                    className="position-absolute end-0 me-0"
                                    onClick={() => handleCopyClick()}
                                  >
                                    <img
                                      src="assets/img/profile/copyicon.svg"
                                      alt="image"
                                      style={{ width: "20px" }}
                                    />
                                  </button>
                                </div>
                              </div>
                              <div className="socialMedia mt-3 d-flex iconlist align-items-center gap-sm-3 gap-2 mt-2">
                                <div className="fs-14 fw-semibold ">
                                  Share :
                                </div>
                                <ul className="list-unstyled d-flex iconlist align-items-center gap-sm-3 gap-2 mt-2 ">
                                  <li>
                                    <a
                                      className="imagefb"
                                      style={{
                                        width: "30px",
                                        height: "30px",
                                        display: "block",
                                      }}
                                      onClick={() =>
                                        openingPage(
                                          `http://wa.me/?text= Hey, Im sharing a link to download saloon and earn 100 Points.Download the app from here: https://zoylee.onelink.me/GPJS and user my referral code ${Data[0]?.referCode} to get your bonus.Thanks.`
                                        )
                                      }
                                    >
                                      <img
                                        className="w-100"
                                        src="/assets/img/icon/whatsapp.png"
                                        alt="whatsapp"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="imagefb"
                                      style={{
                                        width: "30px",
                                        height: "30px",
                                        display: "block",
                                      }}
                                      onClick={() =>
                                        openingPage(
                                          `http://facebook.com/?text= Hey, Im sharing a link to download saloon and earn 100 Points.Download the app from here: https://zoylee.onelink.me/GPJS and user my referral code ${Data[0]?.referCode} to get your bonus.Thanks.`
                                        )
                                      }
                                    >
                                      <img
                                        className="w-100"
                                        src="/assets/img/icon/facebook.png"
                                        alt="facebook"
                                      />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade p-sm-4 p-3 tabForth"
                  id="wallet"
                  role="tabpanel"
                  aria-labelledby="wallet-tab"
                  tabIndex={0}
                >
                  <div className="row mx-0 ">
                    <div className="col-12">
                      <div className="card mb-3 refercard border-0 shadow">
                        <div className="row g-0">
                          <div className="col-md-4 d-flex align-items-cente justify-content-center flex-column leftSideContent">
                            <div className="text100">
                              {Data[0]?.userWallet?.point}
                            </div>
                            <div className="textSubHeading text-center">
                              Your Total Point Earning
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
                                  Click here & and convert your point into
                                  rupees.
                                </small>
                              </div>
                              <div className="copytext">
                                <button
                                  className="nav-link w-50  border-0 btn btn-warning rounded m-0"
                                  data-bs-toggle="modal"
                                  data-bs-target="#saloonWallet"
                                  onClick={() => Addmoney()}
                                >
                                  Click here
                                </button>
                                {/* <div className="copy-text">
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
                                </div> */}
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
              onSubmit={(value) => {
                handler(value);
              }}
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
                              value={props.values.dateOfBirth}
                              onChange={props.handleChange}
                            />
                          </div>
                          <p className="text-danger text-start">
                            {props.errors.dateOfBirth
                              ? props.errors.dateOfBirth
                              : ""}
                          </p>
                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="inputIconGroup d-flex align-items-center">
                            <div className="icon me-2">
                              <img
                                src="assets/img/profile/gander.svg"
                                alt="image"
                              />
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
                                <p className="text-danger text-start">
                                  {props.errors.gender
                                    ? props.errors.gender
                                    : ""}
                                </p>
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
                                <p className="text-danger text-start">
                                  {props.errors.gender
                                    ? props.errors.gender
                                    : ""}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 groupbtnsave text-center">
                          <div className="d-grid gap-3 d-md-flex justify-content-center">
                            <button
                              className="btn bg-theme1 fw-bold text-white btnsave  me-md-2 rounded-4 px-4"
                              type="submit"
                              data-bs-dismiss="modal"
                              aria-label="Close"
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
          <div className="modal-content">
            <div className="modal-header d-flex align-items-center justify-content-between">
              <h1
                className="modal-title d-flex align-items-center"
                id="exampleModalLabel"
              >
                Order Id : {modalvalue.data?.item?.data[0]?.orderId}{" "}
                <span>
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
                    alt="image"
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
                        alt="image"
                      />
                      <div className="saloontext">Kalon Unisex saloon</div>
                    </div>
                    <div className="card-body">
                      <div className="icontext d-flex align-items-center gap-4 mb-3">
                        <span>
                          <img
                            className="w-100 h-100 me-3"
                            src="assets/img/profile/calendar.svg"
                            alt="image"
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
                          <span
                            onClick={() =>
                              showDirection(modalvalue.data?.location)
                            }
                          >
                            <img
                              className="w-100 h-100 me-3"
                              src="assets/img/profile/cursor.svg"
                              alt="image"
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

      {/* wallet modal */}
      <div
        className="modal saloonAtHome fade"
        id="saloonWallet"
        aria-hidden="true"
        aria-labelledby="saloonAtHomeLabel"
        tabIndex={-1}
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header p-0 mx-0 row">
              <div className="col-12 d-flex justify-content-between align-items-center py-2">
                <div
                  className="modal-title fs-6 text-dark"
                  id="saloonAtHomeLabel"
                >
                  Wallet Money
                </div>
                <button
                  type="button"
                  className="btn-close fs-12 shadow-none"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="col-12 px-0">
                <ul className="nav w-100 nav-tabs border-0">
                  <li className="nav-item w-100 border-end border-theme1">
                    <button className="nav-link w-100 border-0 rounded-0 m-0 active">
                      Choose one of the point
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="modal-body p-3">
              <div className="row gap-3">
                <div className="col-12">
                  <div className="card bg-white border-0 shadow">
                    <div className="card-header border-0 bg-white">
                      <div className="row">
                        <div className="col fs-16 text-dark d-flex gap-2 align-items-center">
                          {/* <span>{el?.name}</span>{" "} */}
                          <span className="px-2 bg-theme1 bg-opacity-25 fs-12 fw-normal text-dark rounded-1">
                            {/* {el?.type} */}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="card-body pt-0 row align-items-center">
                      {addmoney[0]?.map((el) => {
                        return (
                          <div className=" d-flex justify-content-center align-items-center">
                            <div className="fs-14 col">
                              <span className="houseNo">point-{el.point}</span>
                            </div>
                            <div className="col-auto">
                              <div className="fs-14 mobileNumber">
                                rupees-{el.rupee} only
                              </div>
                            </div>
                            <div className="col card-header bg-transparent border-0 h-auto text-end align-items-center d-flex justify-content-end">
                              <div className="form-check p-0 m-0 align-items-center d-flex justify-content-end ">
                                <input
                                  className="form-check-input shadow-none m-0  border-theme1"
                                  type="radio"
                                  name="flexRadioDefault"
                                  // id="address1"
                                  onClick={() => selectPoint(el._id)}
                                />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="col-12 text-end">
                  <button
                    type="button"
                    className="btn btn-theme1 px-3 fs-14 text-white"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={() => {
                      confirmPoint();
                    }}
                  >
                    confirm
                  </button>
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
}

export default UserProfile;
