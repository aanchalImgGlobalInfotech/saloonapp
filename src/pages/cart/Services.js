import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../../common/layout/footer/footer";
import HeaderHome from "../../common/layout/header/HeaderHome";
import { getData, postData } from "../../components/apiinstance/Api";
import {
  WhislistItem,
  cart,
  cartdata,
} from "../../components/redux/redux1/actions";
import CartAdd from "./CartAdd";
import * as yup from "yup";
import * as Yup from "yup";
import localStorage from "redux-persist/es/storage";

function Services({ couponid }) {
  const location = useLocation();
  const arry = location?.state?.details;
  const [close, setClose] = useState(false);
  const [values, setvalues] = useState([]);
  // const [subdata, setsubdata] = useState([]);
  const [ser, setsev] = useState([]);
  const [Cartdata, setCartData] = useState([]);
  const [isWishAdd, setIsWishAdd] = useState(false);
  const [wishCount, setWishCount] = useState(0);
  const [count, setCount] = useState("");
  const [Id, setId] = useState("");
  const [accordianId, setAccorianId] = useState("");
  const [serviceId, setservice] = useState("");
  const [categoryId, setCategoryId] = useState(null);
  const [color, setcolor] = useState("");
  const [Cartid, setCartId] = useState("");
  const [reviewdata, setreviewData] = useState([]);
  const [review, setreview] = useState({});
  const [submitReview, setSubmitreview] = useState("");
  const [address, setAddress] = useState([]);
  const [add, setAdd] = useState({});
  const [city, setCity] = useState({});
  const [addressradio, setAddressRadio] = useState("");
  const [editId, setEditId] = useState("");
  const [homecheckoutId, setHomeCheckout] = useState("");
  const [rating, setrating] = useState("");
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [getwishdata, setWishData] = useState("");
  const [localid, setlocalid] = useState('')
  const Data = useSelector((state) => state.saloonData);
  const whishlistarray = useSelector((state) => state.whishlistItem);
  const [selectwishlist, setselectWhishList] = useState([]);
  const userprofile = useSelector((state) => state.userData);
  const search = useSelector((state) => state.search);
  const [Filterdata, setFilterData] = useState([]);
  const [searchdata, setsearchData] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const whishdata = localStorage.getItem("whishlistId");
//   const addressradioId = localStorage.getItem('addressradioId')
//   console.log("addressradioId", addressradioId);

//   async function myFunction() {
//     const myPromise = new Promise((resolve, reject) => {
//       resolve(addressradioId);
//     });
  
//     const result = await myPromise;
//     setlocalid(result)
//   }
//   console.log('mmmmmmmmmmmm',localid);

// useEffect(()=>{
//  myFunction()
// },[localid])
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const validationschema = yup.object().shape({
    name: Yup.string()
      .min(2, "Enter valid name!")
      .max(15, "Too Long!")
      .required("name is required"),
    Mobile: yup
      .string()
      .required("Enter your mobile number")
      .length(10, "Please enter a valid mobile number.")
      .matches(phoneRegExp, "Please enter a valid mobile number."),
    Pincode: Yup.string()
      .min(6, "Enter valid pincode!")
      .max(8, "Too Long!")
      .required("Pincode is required"),
    House: Yup.string()
      .min(1, "Enter valid Housenumber!")
      .max(6, "Too Long!")
      .required("HouseNo. is required"),
    aria: Yup.string()
      .min(2, "Enter valid area!")
      .max(40, "Too Long!")
      .required("area is required"),
    City: Yup.string()
      .min(2, "Enter valid City!")
      .max(20, "Too Long!")
      .required("City is required"),

    State: Yup.string()
      .min(2, "Enter valid State!")
      .max(20, "Too Long!")
      .required("State is required"),
    addressType: Yup.string().required("Select one of the above address"),
  });
  const [Addressdetails, setAddressDetails] = useState({
    name: "",
    House: "",
    aria: "",
    Pincode: "",
    Mobile: "",
    City: "",
    State: "",
    addressType: "",
    dataCheck: false,
  });
  const EditId = async (id, parentId) => {
    let saloonId = Data[0]?._id;
    const res = await getData(`add-cart?saloonId=${saloonId}&serviceId=${id}`);
    if (res.status) {
      getcartApi();
      const cat = parentId?.parent_Name || categoryId;
      if (parentId?.parent_Name) {
        searchApi(searchdata);
      } else {
        subcategory(cat);
      }
    }
    // dispatch(cartdata(res.data))
  };

  const handle = async () => {
    const res = await getData("getCategoryListing");
    setvalues(res.data);
    if (res.status) {
      let catId = categoryId ? categoryId : res?.data[0]?._id;
      subcategory(catId);
      setCategoryId(catId);
    }
  };
  const [TabId, settabId] = useState("");
  const subcategory = async (catid) => {
    let saloonid = Data[0]?._id;

    const res = await getData(
      `get-all-saloon-Service-by-catogory?saloonId=${saloonid}&catogoryId=${catid}`
    );

    // setsubdata(res.data[0].sub);

    setFilterData(res.data[0].sub);
    dispatch(cart(res.data));
  };
  const getcartApi = async () => {
    let saloonid = Data[0]?._id;
    const path = `get-cart?saloonId=${saloonid}`;
    const res = await getData(path);
    localStorage.setItem("cartid", res.data[0]?.cart[0]?._id);
    setCartId(res.data[0]?.cart[0]?._id);
    handleRadioApi(res.data[0]?.cart[0]?._id);
    setCartData(res.data[0]?.cart);
  };

  var Cartfun = getcartApi;
  var subsData = subcategory;
  const removeCart = async (id, parentId) => {
    const res = await getData(
      `remove-service-from-cart/?id=${Cartid}&serviceId=${id}`
    );
    if (res.status) {
      getcartApi();
      if (parentId?.parent_Name) {
        searchApi(searchdata);
      }
    }
  };

  useEffect(() => {
    subcategory();
  }, [count]);

  useEffect(() => {
    EditId();
    handle();
    getcartApi();
  }, [count]);

  const whishlistApi = async (value) => {
    if (!!isWishAdd) {
      const path = `wishlist?id=${value ? value : ""}`;
      const res = await getData(path);
    } else {
      const path = `wishlist?id=${value ? value : ""}`;
      const res = await getData(path);
    }
    setIsWishAdd((prev) => !prev);
    getWhislistapi();
  };

  const getWhislistapi = async () => {
    const path = "get-wishlist";
    const res = await getData(path);
    setselectWhishList(res.data);
  };
  useEffect(() => {
    getWhislistapi();
  }, []);

  const shutAccordian = (id) => {
    if (!accordianId) {
      setAccorianId(id);
    } else {
      setAccorianId("");
    }
  };
  const [valueId, setvalueId] = useState("");
  const popup = (id) => {
    setvalueId(id);
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

  const searchApi = async (data) => {
    let saloonid = Data[0]?._id;

    const res = await getData(
      `get-all-saloon-Service-by-catogory?saloonId=${saloonid}&categoryName=${data}`
    );
    if (!!data) {
      setFilterData(res.data);
    } else {
      subcategory(categoryId);
    }
  };

  const handlesaerch = async (e) => {
    const data = e.target.value;
    searchApi(data);
    setsearchData(data);
  };

  const addreview = async () => {
    let saloonId = Data[0]?._id;
    var body = {
      Rating: rating,
      Description: submitReview,
    };
    const path = `add-reviews?saloonId=${saloonId ? saloonId : ""}`;
    const res = await postData(path, body);
    if (res.data) {
      Getreview();
    }
  };

  const Getreview = async () => {
    let saloonId = Data[0]?._id;
    const path = `get-reviews?saloonId=${saloonId ? saloonId : ""}`;
    const res = await getData(path);
    setreviewData(res.data);
  };
  // useEffect(() => {
  //   Getreview();
  // }, []);

  useEffect(() => {
    if (review) {
      setSubmitreview(review?.Description);
      setrating(review?.Rating);
    }
  }, [review]);
  const editreview = async () => {
    var body = {
      Rating: rating,
      Description: submitReview,
    };
    const path = `add-reviews?id=${review._id ? review._id : ""}`;
    const res = await postData(path, body);
    if (res.data) {
      Getreview();
    }
  };

  useEffect(() => {
    Getreview();
  }, []);

  const handleLikeClick = async (id, val) => {
    const path = `update-like-dislike?id=${id}&${val}=true`;
    const res = await getData(path);
    setLikeCount(res.data[0]?.like[0]);
    if (res.data) {
      Getreview();
    }
  };

  const handleDisikeClick = async (id, val) => {
    const path = `update-like-dislike?id=${id}&${val}=true`;
    const res = await getData(path);
    setDislikeCount(res.data[0]?.dislike[0]);
    if (res.data) {
      Getreview();
    }
  };

  const getAddress = async () => {
    const res = await getData("get-user-address");
    setAddress(res.data);
  };
  var getAddressApi = getAddress;

  const PostAddApi = async (value) => {
    var body = {
      name: value.name,
      mobile: value.Mobile,
      location: {
        houseNumber: value.House,
        aria: value.aria,
        pincode: value.Pincode,
        city: value.City,
        state: value.State,
      },
      type: value.addressType,
      dataCheck: value.dataCheck,
    };

    const res = await postData("add-user-address", body);
  };

  const EditAddresApi = async (value) => {
    var body = {
      name: value.name,
      mobile: value.Mobile,
      location: {
        houseNumber: value.House,
        aria: value.aria,
        pincode: value.Pincode,
        city: value.City,
        state: value.State,
      },
      type: value.addressType,
      dataCheck: value.dataCheck,
    };
    const res = await postData(
      `add-user-address?id=${editId ? editId : ""}`,
      body
    );

    if (res.status) {
      setClose(true);
    }
  };
  const EditAddres = (data) => {
    setAdd(data?.location?.state);
    setCity(data?.location?.city);
    setAddressDetails({
      ...Addressdetails,
      name: data?.name,
      House: data?.location?.houseNumber,
      Mobile: data?.phone,
      aria: data.location?.aria,
      Pincode: data?.location?.pincode,
      City: data?.location?.city,
      State: data?.location?.state,
      addressType: data?.type,
    });
  };

  const deleteAddressApi = async (id) => {
    const res = await getData(`delete-address?id=${id ? id : ""}`);
    if (res.data) {
      getAddress();
    }
  };
  const handleRadioApi = async (id) => {
    const res = await getData(
      `add-addresss-in-user-cart?id=${id ? id : ""}&cartId=${
        Cartid ? Cartid : ""
      }`
    );
    localStorage.setItem('addressradioId',id)
    //  localStorage.setItem('value',res.data[0]?.addressId)
    setHomeCheckout(res.data[0]?.addressId);
  };

 
  return (
    <div>
      <HeaderHome />
      <div className="container-fluid vendorProfile pt-5 ">
        <div className="container mt-3">
          <div className="row">
            <div className="col-12 py-5 section1 position-sticky top-100px">
              <div className="bg-white shadow p-4 rounded-4 my-2">
                <div className="row">
                  {Data?.map((el) => {
                    return (
                      <>
                        <div className="col-lg-8 col-12">
                          <div className="imageleftSide">
                            <div
                              id="carouselExampleFade"
                              className="carousel slide carousel-fade position-relative"
                            >
                              <div className="carousel-inner carousalInner">
                                <div className="carousel-item rounded-2 carousalInneritem active">
                                  <div className="imgOuter">
                                    <img
                                      src={
                                        el?.image[0] ? el?.image[0] : el?.image
                                      }
                                      className="d-block w-100 h-100 rounded-3"
                                      alt
                                    />
                                  </div>
                                </div>
                              </div>
                              <button
                                className="carousel-control-prev prevbtn"
                                type="button"
                                data-bs-target="#carouselExampleFade"
                                data-bs-slide="prev"
                              >
                                <span
                                  className="carousel-control-prev-icon iconcontrol"
                                  aria-hidden="true"
                                />
                                <span className="visually-hidden previewtext">
                                  Previous
                                </span>
                              </button>
                              <button
                                className="carousel-control-next nextbtn"
                                type="button"
                                data-bs-target="#carouselExampleFade"
                                data-bs-slide="next"
                              >
                                <span
                                  className="carousel-control-next-icon iconcontrol"
                                  aria-hidden="true"
                                />
                                <span className="visually-hidden nexttext">
                                  Next
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}

                  <div className="col-lg-4 col-12 border-start">
                    {Data?.map((el) => {
                      return (
                        <div className="contentRightSide row mx-0 position-relative">
                          <div className="col-12 mb-3">
                            <div className="namesaloon">{el?.storeName}</div>
                          </div>
                          <div
                            className="col-12  position-absolute d-flex align-items-center justify-content-end heart"
                            style={{}}
                          >
                            <div class="form-check p-0 myFavouriteBtn">
                              {/* <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="favourite"
                                hidden
                             
                              /> */}
                              <label
                                class="form-check-label"
                                onClick={() => {
                                  whishlistApi(el._id);
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
                                    fill={
                                      selectwishlist.filter((item) =>
                                        item.saloonId.includes(el._id)
                                      ).length
                                        ? "red"
                                        : ""
                                    }
                                    strokeWidth={1}
                                  />
                                </svg>
                              </label>
                            </div>
                          </div>
                          <div className="col-12 mb-3">
                            <div className="saloonAddreas">
                              {el?.location?.aria},{el?.location?.shopNumber},{" "}
                              {el?.location?.pincode} {el?.location?.city},{" "}
                              {el?.location?.state}
                            </div>
                          </div>
                          <div className="col-12 mb-3 border-bottom pb-3">
                            <div className="directionsaloon">
                              <span
                                className="d-flex align-items-center"
                                onClick={() => showDirection(Data[0]?.location)}
                              >
                                <div className="pe-3 image">
                                  <img
                                    className="w-100 h-100"
                                    src="assets/img/vandorProfile/direction.svg"
                                    alt
                                  />
                                </div>
                                <span className="text-decoration-none">
                                  See directions
                                </span>
                              </span>
                            </div>
                          </div>
                          <div className="col-12 mb-3">
                            <div className="typeSaloon">
                              <span className="d-flex align-items-center">
                                <div className="pe-3 image">
                                  <img
                                    className="w-100 h-100"
                                    src="assets/img/vandorProfile/gendar.svg"
                                    alt
                                  />
                                </div>
                                <div className="unisextext">{el?.type}</div>
                              </span>
                            </div>
                          </div>
                          <div className="col-12 mb-3 border-bottom pb-3">
                            <div className="shadualtime">
                              <span className="d-flex align-items-center">
                                <div className="pe-3 image">
                                  <img
                                    className="w-100 h-100"
                                    src="assets/img/vandorProfile/clock.svg"
                                    alt
                                  />
                                </div>
                                <div>Mon-Sun | 9:00 am - 9:00 pm</div>
                              </span>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="buttonGroup justify-content-end d-flex gap-3">
                              <a
                                href="#customBookingId"
                                className="btn bg-theme1 text-white"
                              >
                                Book Now
                              </a>
                              <button
                                type="button"
                                className="btn bg-theme2 text-white"
                              >
                                <img
                                  src="assets/img/vandorProfile/phone.svg"
                                  alt
                                />{" "}
                                Call
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-12 pt-0 pb-5 position-relative z-1 section2 mt-5 pt-5"
              id="customBookingId"
            >
              <div className=" bg-white shadow p-4 rounded-4 mb-2">
                <div className="row">
                  <div className="col-xl-3 col-12 leftSideContent pt-2">
                    <div className="searchforminput">
                      <form>
                        <div className="input-group">
                          <span className="input-group-text">
                            <svg
                              id="Icon_feather-search"
                              data-name="Icon feather-search"
                              xmlns="http://www.w3.org/2000/svg"
                              width="13.167"
                              height="13.167"
                              viewBox="0 0 13.167 13.167"
                            >
                              <path
                                id="Path_8299"
                                data-name="Path 8299"
                                d="M8.925,3a5.925,5.925,0,1,1-4.19,1.735A5.886,5.886,0,0,1,8.925,3Zm0,10.534A4.608,4.608,0,1,0,4.317,8.925,4.614,4.614,0,0,0,8.925,13.534Z"
                                transform="translate(-3 -3)"
                                fill="$theme2"
                              />
                              <path
                                id="Path_8300"
                                data-name="Path 8300"
                                d="M27,27.656a.656.656,0,0,1-.466-.193L23.668,24.6a.658.658,0,0,1,.931-.931l2.864,2.864A.658.658,0,0,1,27,27.656Z"
                                transform="translate(-14.489 -14.489)"
                                fill="$theme2"
                              />
                            </svg>
                          </span>
                          <input
                            type="text"
                            className="form-control inputsearch shadow-none"
                            value={searchdata}
                            onChange={(e) => handlesaerch(e)}
                            placeholder="Search in menu"
                            name="search-services"
                          />
                        </div>
                      </form>
                    </div>
                    <div className="leftSidetabs mt-3">
                      <ul
                        className="nav nav-pills mb-3 gap-2 flex-sm-column navInnerPills"
                        id="pills-tab"
                        role="tablist"
                      >
                        <li
                          className="nav-item navInnerItem"
                          role="presentation"
                        >
                          <button
                            className="nav-link navInnerLink w-100 text-start active"
                            id="pills-menu-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-menu"
                            type="button"
                            role="tab"
                            aria-controls="pills-menu"
                            aria-selected="true"
                          >
                            Menu
                          </button>
                        </li>
                        <li
                          className="nav-item navInnerItem"
                          role="presentation"
                        >
                          <button
                            className="nav-link navInnerLink w-100 text-start"
                            id="pills-about-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-about"
                            type="button"
                            role="tab"
                            aria-controls="pills-about"
                            aria-selected="false"
                          >
                            About
                          </button>
                        </li>
                        <li
                          className="nav-item navInnerItem"
                          role="presentation"
                        >
                          <button
                            className="nav-link navInnerLink w-100 text-start"
                            id="pills-reviews-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-reviews"
                            type="button"
                            role="tab"
                            aria-controls="pills-reviews"
                            aria-selected="false"
                          >
                            Reviews
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-xl-5 col-12 middlecontent pt-2">
                    <div className="tab-content" id="pills-tabContent">
                      <div
                        className="tab-pane fade menutabs show active"
                        id="pills-menu"
                        role="tabpanel"
                        aria-labelledby="pills-menu-tab"
                        tabIndex={0}
                      >
                        <div className="row menutabsinnerrow">
                          <div className="col-12">
                            <ul
                              className="nav nav-pills mb-3 navPillNav"
                              id="pills-tab"
                              role="tablist"
                            >
                              {values.map((items) => {
                                return (
                                  <>
                                    <li
                                      className="nav-item navItem"
                                      role="presentation"
                                    >
                                      <button
                                        className={`nav-link navLink ${
                                          valueId == items?._id
                                            ? "active"
                                            : items?._id ==
                                              "63f485b71822bbd9adee742a"
                                            ? "active"
                                            : ""
                                        }`}
                                        // id="pills-body-tab"
                                        id={valueId}
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-body"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-body"
                                        // aria-selected="true"
                                        aria-selected={
                                          valueId == items?._id
                                            ? "true"
                                            : "false"
                                        }
                                        tabIndex={
                                          valueId == items?._id ? "-1" : ""
                                        }
                                        onClick={() => {
                                          subcategory(items?._id);
                                          popup(items?._id);
                                          setCategoryId(items?._id);
                                        }}
                                      >
                                        {items?.Name}
                                      </button>
                                    </li>
                                  </>
                                );
                              })}
                            </ul>
                            <div
                              className="tab-content middletabsinner"
                              id="pills-tabContent"
                            >
                              <div
                                className="tab-pane fade bodytab show active d-flex flex-column gap-3"
                                id="pills-body"
                                role="tabpane1"
                                aria-labelledby={valueId}
                                tabIndex={0}
                              >
                                {Filterdata.length && (
                                  <div
                                    className="tab-pane fade bodytab show active d-flex flex-column gap-3"
                                    id="pills-body"
                                    role="tabpane1"
                                    aria-labelledby={valueId}
                                    tabIndex={0}
                                  >
                                    <div
                                      className="accordion accordionsection"
                                      id="accordionExample"
                                    >
                                      {Filterdata?.map((items) => {
                                        return (
                                          <div
                                            className="accordion-item"
                                            // data-bs-target="#pills-body"
                                          >
                                            <h2
                                              className="accordion-header"
                                              id="hello"
                                            >
                                              <button
                                                className={`accordion-button justify-content-between ${
                                                  accordianId == items._id
                                                    ? ""
                                                    : "collapsed"
                                                }`}
                                                data-bs-target="#collapseOne"
                                                aria-controls="collapseOne"
                                                type="button"
                                                aria-expanded={
                                                  accordianId == items._id
                                                    ? "true"
                                                    : "false"
                                                }
                                                onClick={() =>
                                                  shutAccordian(items._id)
                                                }
                                              >
                                                {items.Name}
                                                <span className="customIcon position-relative d-flex align-items-cente justify-content-center" />
                                              </button>
                                            </h2>
                                            <div
                                              id="collapseOne"
                                              className={`accordion-collapse collapse ${
                                                accordianId == items._id
                                                  ? "show"
                                                  : ""
                                              }`}
                                              aria-labelledby="hello"
                                              data-bs-parent="#accordionExample"
                                            >
                                              <div className="accordion-body">
                                                <div className="row mx0 px0 gap-3">
                                                  {items.Service.map((el) => {
                                                    return (
                                                      <>
                                                        <div className="col-12">
                                                          <div className="row align-items-center">
                                                            <div className="col-6">
                                                              <div className="heading">
                                                                {el.ServiceName}
                                                              </div>
                                                            </div>
                                                            <div className="col-sm-6 d-flex justify-content-sm-around justify-content-between mt-3 mt-sm-0 ncrmentDecrement">
                                                              <div className="uniongendar">
                                                                <img
                                                                  className="w-100 h-100"
                                                                  src="assets/img/vandorProfile/union-pink.svg"
                                                                  alt
                                                                />
                                                              </div>
                                                              <div className="paymentsection">
                                                                <div className="payment">
                                                                  ₹
                                                                  {
                                                                    el.ServicePrice
                                                                  }
                                                                  <span className="text-decoration-line-through ms-1">
                                                                    ₹2000
                                                                  </span>
                                                                </div>
                                                                <div className="imagetext">
                                                                  <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={16}
                                                                    height={16}
                                                                    fill="currentColor"
                                                                    className="bi bi-clock"
                                                                    viewBox="0 0 16 16"
                                                                  >
                                                                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                                                                  </svg>
                                                                  <span>
                                                                    30 Min
                                                                  </span>
                                                                </div>
                                                              </div>
                                                              <div className="Quantity">
                                                                <div className="counter">
                                                                  <div className="count-box d-flex  justify-content-center align-items-center show-counting rounded-2 ">
                                                                    <span
                                                                      className="plus"
                                                                      onClick={() => {
                                                                        EditId(
                                                                          el._id,
                                                                          items
                                                                        );
                                                                        setservice(
                                                                          el._id
                                                                        );

                                                                        setCount(
                                                                          el.Quantity_In_Cart +
                                                                            1
                                                                        );
                                                                      }}
                                                                    >
                                                                      +
                                                                    </span>
                                                                    <span className="count">
                                                                      {el?.Quantity_In_Cart <=
                                                                      0
                                                                        ? "+"
                                                                        : el?.Quantity_In_Cart}
                                                                    </span>
                                                                    <span
                                                                      className="minus"
                                                                      onClick={() => {
                                                                        removeCart(
                                                                          el._id,
                                                                          items
                                                                        );
                                                                        setCount(
                                                                          el.Quantity_In_Cart -
                                                                            1
                                                                        );
                                                                      }}
                                                                    >
                                                                      -
                                                                    </span>
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
                                          </div>
                                        );
                                      })}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade aboutstabs"
                        id="pills-about"
                        role="tabpanel"
                        aria-labelledby="pills-about-tab"
                        tabIndex={0}
                      >
                        <div className="row">
                          <div className="col-12">
                            <div className="aboutHeading mb-3">
                              About The {Data[0]?.storeName}
                            </div>
                            <p className="abouttext mb-3">
                              {Data[0]?.description}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade reviewtabs"
                        id="pills-reviews"
                        role="tabpanel"
                        aria-labelledby="pills-reviews-tab"
                        tabIndex={0}
                      >
                        <div className="row">
                          <div className="col-12">
                            <div className="reviewHeaer bg-white">
                              <div className="row mx-0 border-bottom pb-3 align-items-center">
                                <div className="col">
                                  <div className="title fs-6 fw-bold">
                                    Review
                                  </div>
                                </div>
                                <div className="col-auto">
                                  <button
                                    type="button"
                                    className="btn btn-theme1 border-2 border-theme1 text-white fs-12 shadow-none"
                                    data-bs-toggle="modal"
                                    data-bs-target="#reviewModal"
                                    onClick={() => {
                                      setrating();
                                      setSubmitreview();
                                      setreview();
                                    }}
                                  >
                                    <img
                                      className="me-1"
                                      src="assets/img/icon/PlusCircleIcon.svg"
                                      alt
                                    />{" "}
                                    Add Review
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 reviewcol">
                            {reviewdata.map((el) => {
                              return (
                                <div className="row mx-0 reviewInnerRow border-bottom py-3 ">
                                  <div className="col-auto">
                                    <div className="userImage">
                                      <img
                                        className="w-100 h-100"
                                        src={el?.user?.image}
                                        alt="User"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-auto ps-0">
                                    <div className="d-flex flex-column align-items-start usernameDate">
                                      <div className="commentusername">
                                        {el?.user?.name}
                                      </div>
                                      <div className="usercommmentTime">
                                        {el?.Date.slice(0, 24)}
                                      </div>
                                    </div>
                                    <div className="rating">
                                      <div
                                        className={`starreating d-flex fs-18 fs-sm-22 gap-sm-1 totalRating${
                                          el.Rating ? el.Rating : ""
                                        }`}
                                      >
                                        <label
                                          for=""
                                          className="reviewStar d-flex align-items-center"
                                        >
                                          &#9733;
                                        </label>
                                        <label
                                          for=""
                                          className="reviewStar d-flex align-items-center"
                                        >
                                          &#9733;
                                        </label>
                                        <label
                                          for=""
                                          className="reviewStar d-flex align-items-center"
                                        >
                                          &#9733;
                                        </label>
                                        <label
                                          for=""
                                          className="reviewStar d-flex align-items-center"
                                        >
                                          &#9733;
                                        </label>
                                        <label
                                          for=""
                                          className="reviewStar d-flex align-items-center"
                                        >
                                          &#9733;
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                  {el.userId == userprofile[0]?._id ? (
                                    <div className="col ps-0">
                                      <button
                                        className="btn btn-light fs-14 border-0 shadow-none align-items-center d-flex justify-content-center ms-auto p-1 editReviewBtn"
                                        data-bs-toggle="modal"
                                        data-bs-target="#reviewModal"
                                        onClick={() => {
                                          setreview(el);
                                        }}
                                      >
                                        <img
                                          src="assets/img/icon/editIcon.svg"
                                          alt
                                        />
                                      </button>
                                    </div>
                                  ) : (
                                    ""
                                  )}

                                  <div className="col-12 mt-3">
                                    <p className="commentText">
                                      {el?.Description}
                                    </p>
                                  </div>

                                  <div className="col-12 likeunlikeGroup mt-2">
                                    <div className="col-12 likeunlikeGroup mt-2 d-flex align-items-center gap-3 wrapper">
                                      <div
                                        className="radio_group"
                                        onClick={() => {
                                          handleLikeClick(el?._id, "like");
                                        }}
                                      >
                                        <label
                                          htmlFor="like"
                                          className={`${
                                            el?.likestatus ? "active" : ""
                                          }`}
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={20}
                                            height={20}
                                            viewBox="0 0 20 20"
                                            fill="none"
                                          >
                                            <g clipPath="url(#clip0_166_9)">
                                              <path
                                                d="M4.0456 8.83376L0.920897 8.87686C0.403173 8.884 -0.0107245 9.30948 -0.00358258 9.8272L0.125731 19.2013C0.132873 19.719 0.558349 20.1329 1.07607 20.1258L4.20078 20.0827C4.7185 20.0755 5.1324 19.6501 5.12526 19.1323L4.99594 9.75824C4.9888 9.24051 4.56332 8.82661 4.0456 8.83376ZM2.61687 18.5419C2.09915 18.549 1.67367 18.1351 1.66653 17.6174C1.65939 17.0997 2.07329 16.6742 2.59101 16.6671C3.10873 16.6599 3.53421 17.0738 3.54135 17.5915C3.54849 18.1093 3.1346 18.5347 2.61687 18.5419ZM14.9053 3.11514C14.9281 4.77186 13.9266 5.71514 13.6564 6.826L17.6296 6.77119C18.9341 6.75319 19.9645 7.82291 19.987 9.00834C19.9999 9.70893 19.7123 10.4673 19.2542 10.9404L19.25 10.9447C19.6467 11.851 19.6019 13.129 18.9293 14.0537C19.2823 15.0605 18.9576 16.3076 18.3297 16.9825C18.507 17.6675 18.4349 18.2536 18.1136 18.729C17.3322 19.8854 15.3566 19.9288 13.6858 19.9518L13.5746 19.9533C11.6886 19.9787 10.1356 19.3133 8.88769 18.7786C8.2606 18.5099 7.44094 18.1779 6.82249 18.1751C6.56698 18.1739 6.35932 17.9683 6.35579 17.7128L6.24061 9.36322C6.23889 9.23823 6.28731 9.11759 6.37499 9.02848C7.90117 7.47822 8.54417 5.85033 9.79485 4.56249C10.3651 3.97519 10.5633 3.09722 10.7549 2.24816C10.9187 1.52314 11.2608 -0.0166084 12.0491 -0.0274832C12.9865 -0.0404146 14.8657 0.246193 14.9053 3.11514Z"
                                                fill="#3498db"
                                              />
                                            </g>
                                            <defs>
                                              <clipPath id="clip0_166_9">
                                                <rect
                                                  width={20}
                                                  height={20}
                                                  fill="white"
                                                />
                                              </clipPath>
                                            </defs>
                                          </svg>
                                          <span className="ratingtype">
                                            {el?.like}
                                          </span>
                                        </label>
                                      </div>
                                      <div
                                        className="radio_group"
                                        onClick={() =>
                                          handleDisikeClick(el?._id, "dislike")
                                        }
                                      >
                                        <label
                                          htmlFor="dislike"
                                          className={`${
                                            el?.dislikeStatus ? "active" : ""
                                          }`}
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={20}
                                            height={20}
                                            viewBox="0 0 20 20"
                                            fill="none"
                                          >
                                            <g clipPath="url(#clip0_166_11)">
                                              <path
                                                d="M0 2.1875V11.5625C0 12.0803 0.419727 12.5 0.9375 12.5H4.0625C4.58027 12.5 5 12.0803 5 11.5625V2.1875C5 1.66973 4.58027 1.25 4.0625 1.25H0.9375C0.419727 1.25 0 1.66973 0 2.1875ZM1.5625 10C1.5625 9.48223 1.98223 9.0625 2.5 9.0625C3.01777 9.0625 3.4375 9.48223 3.4375 10C3.4375 10.5178 3.01777 10.9375 2.5 10.9375C1.98223 10.9375 1.5625 10.5178 1.5625 10ZM12.1875 20C11.3991 20 11.0357 18.4651 10.8621 17.7424C10.6587 16.8961 10.4484 16.0209 9.87016 15.4415C8.60184 14.1711 7.93645 12.5522 6.38902 11.0231C6.34499 10.9796 6.31003 10.9278 6.28617 10.8706C6.26232 10.8135 6.25003 10.7522 6.25004 10.6903V2.33988C6.25004 2.08438 6.45484 1.8759 6.71031 1.87121C7.32871 1.85988 8.14367 1.51656 8.76699 1.23926C10.0074 0.687422 11.5511 0.000664063 13.4373 0H13.5484C15.2194 0 17.1954 0.0161328 17.9927 1.1616C18.3205 1.63258 18.4007 2.21762 18.2329 2.90504C18.87 3.57117 19.2119 4.81375 18.8728 5.82523C19.5581 6.74055 19.6205 8.01789 19.2364 8.92949L19.2407 8.93379C19.7052 9.40055 20.0033 10.1548 20 10.8555C19.9939 12.0412 18.9782 13.125 17.6737 13.125H13.7001C13.9855 14.232 15 15.1614 15 16.8183C15 19.6875 13.125 20 12.1875 20Z"
                                                fill="#ff0000"
                                              />
                                            </g>
                                            <defs>
                                              <clipPath id="clip0_166_11">
                                                <rect
                                                  width={20}
                                                  height={20}
                                                  fill="white"
                                                />
                                              </clipPath>
                                            </defs>
                                          </svg>
                                          <span className="ratingtype">
                                            {" "}
                                            {el?.dislike}
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <CartAdd
                    subdata={ser}
                    Cartdata={Cartdata}
                    serviceId={serviceId}
                    Cartfun={Cartfun}
                    subsData={subsData}
                    categoryId={categoryId}
                    couponid={couponid}
                    getAddressApi={getAddressApi}
                    homecheckoutId={homecheckoutId}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <div
        className="modal reviewModal fade"
        id="reviewModal"
        data-bs-backdrop="static"
        tabIndex={-1}
        aria-labelledby="reviewModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title" id="reviewModalLabel">
                <div className="row align-items-center">
                  <div className="col-auto">
                    <div className="imgOuter rounded-circle overflow-hidden">
                      <img
                        className="w-100 h-100"
                        src={userprofile[0]?.image}
                        alt
                      />
                    </div>
                  </div>
                  <div className="col ps-0">
                    <div className="detail">
                      <div className="name fw-bold fs-14">
                        {userprofile[0]?.name}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="btn-close fs-12 shadow-none"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  setSubmitreview("");
                }}
              />
            </div>

            <div className="modal-body">
              <form action method="post" className="form">
                <div className="row gap-3">
                  <div className="col-12">
                    <div className="star-rating fs-18 fs-sm-22 gap-sm-1">
                      <input
                        type="hidden"
                        name="company_id"
                        defaultValue={179}
                      />
                      <input
                        className="form-control"
                        type="checkbox"
                        // type="radio"
                        id="job-stars-5"
                        // name="Salary_benefits"
                        checked={rating >= 5 ? true : false}
                        value={5}
                        onChange={(e) => setrating(e.target.value)}
                        // defaultValue={5}
                        required
                      />
                      <label
                        htmlFor="job-stars-5"
                        className="star d-flex align-items-center"
                      >
                        ★
                      </label>
                      <input
                        className="form-control"
                        type="checkbox"
                        // type="radio"
                        id="job-stars-4"
                        // name="Salary_benefits"
                        checked={rating >= 4 ? true : false}
                        value={4}
                        onChange={(e) => setrating(e.target.value)}
                        // defaultValue={4}
                        required
                      />
                      <label
                        htmlFor="job-stars-4"
                        className="star d-flex align-items-center"
                      >
                        ★
                      </label>
                      <input
                        className="form-control"
                        type="checkbox"
                        // type="radio"
                        id="job-stars-3"
                        // name="Salary_benefits"
                        checked={rating >= 3 ? true : false}
                        value={3}
                        onChange={(e) => setrating(e.target.value)}
                        // defaultValue={3}
                        required
                      />
                      <label
                        htmlFor="job-stars-3"
                        className="star d-flex align-items-center"
                      >
                        ★
                      </label>
                      <input
                        className="form-control"
                        type="checkbox"
                        // type="radio"
                        id="job-stars-2"
                        // name="Salary_benefits"
                        // defaultValue={2}
                        checked={rating >= 2 ? true : false}
                        value={2}
                        onChange={(e) => setrating(e.target.value)}
                        required
                      />
                      <label
                        htmlFor="job-stars-2"
                        className="star d-flex align-items-center"
                      >
                        ★
                      </label>
                      <input
                        className="form-control"
                        type="checkbox"
                        // type="radio"
                        id="job-stars-1"
                        // name="Salary_benefits"
                        // defaultValue={1}
                        checked={rating >= 1 ? true : false}
                        value={1}
                        onChange={(e) => setrating(e.target.value)}
                        required
                      />
                      <label
                        htmlFor="job-stars-1"
                        className="star d-flex align-items-center"
                      >
                        ★
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <textarea
                      name="comment"
                      className="fs-14 w-100 p-2 border-1 border-gray rounded-3"
                      id="review"
                      rows={5}
                      value={submitReview}
                      onChange={(e) => setSubmitreview(e.target.value)}
                      placeholder="Message..."
                      required
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-12 text-end">
                    <button
                      type="button"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      className="btn btn-theme1 text-white shadow-none border-0"
                      onClick={() => {
                        if (review?._id) {
                          editreview();
                        } else {
                          addreview();
                        }
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          className="modal saloonAtHome fade"
          id="saloonAtHome"
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
                    Saloon at Home
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
                    <li className="nav-item w-50 border-end border-theme1">
                      <button className="nav-link w-100 border-0 rounded-0 m-0 active">
                        My Address
                      </button>
                    </li>
                    <li className="nav-item w-50" role="presentation">
                      <button
                        className="nav-link w-100 border-0 rounded-0 m-0"
                        data-bs-target="#addNewAddress"
                        data-bs-toggle="modal"
                        onClick={() => {
                          setAddressDetails({
                            name: "",
                            House: "",
                            area: "",
                            Pincode: "",
                            Mobile: "",
                            City: "",
                            State: "",
                            addressType: "",
                            dataCheck: false,
                          });
                          setAdd("");
                          setCity("");
                        }}
                      >
                        New Address
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="modal-body p-3">
                <div className="row gap-3">
                  {address.map((el) => {
                    return (
                      <>
                        <div className="col-12">
                          <div className="card bg-white border-0 shadow">
                            <div className="card-header border-0 bg-white">
                              <div className="row">
                                <div className="col fs-16 text-dark d-flex gap-2 align-items-center">
                                  <span>{el?.name}</span>{" "}
                                  <span className="px-2 bg-theme1 bg-opacity-25 fs-12 fw-normal text-dark rounded-1">
                                    {el?.type}
                                  </span>
                                </div>

                                <div className="col-auto d-flex gap-2 align-items-center">
                                  <a
                                    role="button"
                                    className="editB"
                                    data-bs-target="#addNewAddress"
                                    data-bs-toggle="modal"
                                    onClick={() => {
                                      EditAddres(el);
                                      setEditId(el._id);
                                    }}
                                  >
                                    <img
                                      src="assets/img/icon/editIcon.svg"
                                      alt
                                    />
                                  </a>
                                  <div
                                    className="form-check p-0 m-0 align-items-center d-flex justify-content-center"
                                    onClick={(e) => {
                                      setAddressRadio(el?._id);
                                      handleRadioApi(el?._id);
                                      
                                    }}
                                  >
                                    <input
                                      className="form-check-input shadow-none m-0"
                                      type="radio"
                                      name="flexRadioDefault"
                                      value={addressradio}
                                      checked={
                                        addressradio  == el._id ? true : false
                                      }
                                      // id="address1"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-body pt-0">
                              <div className="fs-14 text-muted">
                                <span className="houseNo">
                                  {el?.location?.houseNumber}
                                </span>
                                ,
                                <span className="area">
                                  {el?.location?.aria}
                                </span>
                                ,
                                <span className="pincode">
                                  {el?.location?.pincode}
                                </span>
                                ,
                                <span className="city">
                                  {el?.location?.city}
                                </span>
                                ,
                                <span className="state">
                                  {el?.location?.state}
                                </span>
                              </div>
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="fs-14 mobileNumber mt-2">
                                  +91 {el?.phone}
                                </div>
                                <span
                                  className="text-danger fs-12"
                                  onClick={() => deleteAddressApi(el?._id)}
                                >
                                  remove
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}

                  {/* <div className="col-12 text-end">
                    <button
                      type="button"
                      className="btn btn-theme1 px-3 fs-14 text-white"
                    >
                      Submit
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal saloonAtHome fade"
          id="addNewAddress"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel2"
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
                    Saloon at Home
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
                    <li className="nav-item w-50 border-end border-theme1">
                      <button
                        className="nav-link w-100 border-0 rounded-0 m-0"
                        data-bs-toggle="modal"
                        data-bs-target="#saloonAtHome"
                      >
                        My Address
                      </button>
                    </li>
                    <li className="nav-item w-50" role="presentation">
                      <button
                        className="nav-link w-100 border-0 rounded-0 m-0 active"
                        data-bs-target="#addNewAddress"
                        data-bs-toggle="modal"
                        onClick={() => {
                          setAddressDetails({
                            name: "",
                            House: "",
                            area: "",
                            Pincode: "",
                            Mobile: "",
                            City: "",
                            State: "",
                            addressType: "",
                            dataCheck: false,
                          });
                          setAdd("");
                          setCity("");
                        }}
                      >
                        New Address
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="modal-body p-3">
                <Formik
                  initialValues={Addressdetails}
                  validationSchema={validationschema}
                  onSubmit={(value) => {
                    if (!!editId) {
                      EditAddresApi(value);
                      getAddress();
                    } else {
                      PostAddApi(value);
                      getAddress();
                    }
                  }}
                  enableReinitialize={true}
                >
                  {(props) => {
                    return (
                      <Form onSubmit={props.handleSubmit}>
                        <div className="modal-body p-3">
                          <div className=" form formOuter">
                            <div className="row g-3">
                              <div class="col-12">
                                <div className="input-group">
                                  <label
                                    for="yourName"
                                    className="form-label text-dark"
                                  >
                                    Name
                                  </label>
                                  <input
                                    type="text"
                                    name="name"
                                    className="form-control m-0 w-100 rounded-1 py-2 ps-3 shadow-none pe-5 z-2"
                                    id="yourName"
                                    value={props.values.name}
                                    onChange={props.handleChange}
                                    placeholder="Enter Your Name"
                                  />
                                </div>
                                <p className="text-danger text-start">
                                  {props.errors.name && props.touched.name
                                    ? props.errors.name
                                    : ""}
                                </p>
                              </div>
                              <div className="col-12">
                                <div className="input-group">
                                  <label
                                    htmlFor="houseNumber"
                                    className="form-label text-dark"
                                  >
                                    House / Plat No.
                                  </label>
                                  <input
                                    type="tel"
                                    name="House"
                                    value={props.values.House}
                                    onChange={props.handleChange}
                                    className="form-control m-0 w-100 rounded-1 py-2 ps-3 shadow-none pe-5 z-2"
                                    id="houseNumber"
                                    placeholder="House / Plat No."
                                  />
                                  <p className="text-danger text-start">
                                    {props.errors.House && props.touched.House
                                      ? props.errors.House
                                      : ""}
                                  </p>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="input-group">
                                  <label
                                    htmlFor="area"
                                    className="form-label text-dark"
                                  >
                                    Area
                                  </label>
                                  <input
                                    type="text"
                                    name="aria"
                                    className="form-control m-0 w-100 rounded-1 py-2 ps-3 shadow-none pe-5 z-2"
                                    id="area"
                                    value={props.values.aria}
                                    onChange={props.handleChange}
                                    placeholder="Area"
                                  />
                                  <p className="text-danger text-start">
                                    {props.errors.aria && props.touched.aria
                                      ? props.errors.aria
                                      : ""}
                                  </p>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="input-group">
                                  <label
                                    htmlFor="pincode"
                                    className="form-label text-dark"
                                  >
                                    Pincode
                                  </label>
                                  <input
                                    type="tel"
                                    name="Pincode"
                                    className="form-control m-0 w-100 rounded-1 py-2 ps-3 shadow-none pe-5 z-2"
                                    id="pincode"
                                    value={props.values.Pincode}
                                    onChange={props.handleChange}
                                    placeholder="Pincode"
                                  />
                                  <p className="text-danger text-start">
                                    {props.errors.Pincode &&
                                    props.touched.Pincode
                                      ? props.errors.Pincode
                                      : ""}
                                  </p>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="input-group">
                                  <label
                                    htmlFor="mobileNumber"
                                    className="form-label text-dark"
                                  >
                                    Mobile Number
                                  </label>
                                  <input
                                    type="tel"
                                    name="Mobile"
                                    className="form-control m-0 w-100 rounded-1 py-2 ps-3 shadow-none pe-5 z-2"
                                    id="mobileNumber"
                                    value={props.values.Mobile}
                                    onChange={props.handleChange}
                                    placeholder="Mobile Number"
                                  />
                                  <p className="text-danger text-start">
                                    {props.errors.Mobile && props.touched.Mobile
                                      ? props.errors.Mobile
                                      : ""}
                                  </p>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="input-group">
                                  <label
                                    htmlFor
                                    className="form-label text-dark"
                                  >
                                    Select City
                                  </label>
                                  <select
                                    name="City"
                                    className="form-select w-100 rounded-1 py-2 ps-3 shadow-none"
                                    aria-label="Default select example"
                                    // value={props.values.City}
                                    onChange={(e) =>
                                      props.setFieldValue(
                                        "City",
                                        e.target.value
                                      )
                                    }
                                  >
                                    <option>Select City</option>
                                    <option
                                      selected={city == "Jaipur" ? true : false}
                                      value={"Jaipur"}
                                    >
                                      Jaipur
                                    </option>
                                    <option
                                      selected={city == "Ajmer" ? true : false}
                                      value={"Ajmer"}
                                    >
                                      Ajmer
                                    </option>
                                    <option
                                      selected={city == "Nagour" ? true : false}
                                      value={"Nagour"}
                                    >
                                      Nagour
                                    </option>
                                  </select>
                                  <p className="text-danger text-start">
                                    {props.errors.City && props.touched.City
                                      ? props.errors.City
                                      : ""}
                                  </p>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="input-group">
                                  <label
                                    htmlFor
                                    className="form-label text-dark"
                                  >
                                    Select State
                                  </label>
                                  <select
                                    name="State"
                                    className="form-select w-100 rounded-1 py-2 ps-3 shadow-none"
                                    aria-label="Default select example"
                                    // value={props.values.State}
                                    onChange={(e) =>
                                      props.setFieldValue(
                                        "State",
                                        e.target.value
                                      )
                                    }
                                  >
                                    <option>Select State</option>
                                    <option
                                      value={"Rajasthan"}
                                      selected={
                                        add == "Rajasthan" ? true : false
                                      }
                                    >
                                      Rajasthan
                                    </option>
                                    <option
                                      value={"Punjab"}
                                      selected={add == "Punjab" ? true : false}
                                    >
                                      Punjab
                                    </option>
                                    <option
                                      value={"Hariyana"}
                                      selected={
                                        add == "Hariyana" ? true : false
                                      }
                                    >
                                      Hariyana
                                    </option>
                                  </select>
                                  <p className="text-danger text-start">
                                    {props.errors.State && props.touched.State
                                      ? props.errors.State
                                      : ""}
                                  </p>
                                </div>
                              </div>
                              <div className="col-12">
                                <label className="form-label text-dark">
                                  Address Type
                                </label>
                                <div className="input-group gap-3">
                                  <div className="form-check">
                                    <input
                                      className="form-check-input shadow-none rounded-1"
                                      type="radio"
                                      value="Home"
                                      name="addressType"
                                      id="addressHome"
                                      onChange={props.handleChange}
                                      checked={
                                        props.values.addressType == "Home"
                                          ? true
                                          : false
                                      }
                                      // defaultChecked
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="addressHome"
                                    >
                                      Home
                                    </label>
                                  </div>
                                  <div className="form-check">
                                    <input
                                      className="form-check-input shadow-none rounded-1"
                                      type="radio"
                                      value="Office"
                                      name="addressType"
                                      checked={
                                        props.values.addressType == "Office"
                                          ? true
                                          : false
                                      }
                                      onChange={props.handleChange}
                                      id="addressOffice"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="addressOffice"
                                    >
                                      Office
                                    </label>
                                  </div>
                                  <div className="form-check">
                                    <input
                                      className="form-check-input shadow-none rounded-1"
                                      type="radio"
                                      name="addressType"
                                      value="Other"
                                      checked={
                                        props.values.addressType == "Other"
                                          ? true
                                          : false
                                      }
                                      onChange={props.handleChange}
                                      id="addressOther"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="addressOther"
                                    >
                                      Other
                                    </label>
                                  </div>
                                  <p className="text-danger text-start">
                                    {props.errors.addressType &&
                                    props.touched.addressType
                                      ? props.errors.addressType
                                      : ""}
                                  </p>
                                </div>
                                <div className="input-group mt-3">
                                  <div className="form-check">
                                    <input
                                      className="form-check-input shadow-none rounded-1"
                                      type="checkbox"
                                      name="dataCheck"
                                      id="defaultAddress"
                                      onChange={props.handleChange}
                                      checked={props.values.dataCheck}
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="defaultAddress"
                                    >
                                      Make as default address.
                                    </label>
                                  </div>
                                </div>
                              </div>

                              <div className="col-12 text-end">
                                <button
                                  type="submit"
                                  className="btn btn-theme1 px-3 fs-14 text-white"
                                  // data-bs-dismiss={close ? "modal" : ""}
                                  // aria-label={close ? "Close" : ""}
                                >
                                  Submit
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
        </div>
      </div>
    </div>
  );
}

export default Services;
