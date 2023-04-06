import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import HeaderHome from "../../common/layout/header/HeaderHome";
import { getData, postData } from "../../components/apiinstance/Api";
import { couPon } from "../../components/redux/redux1/actions";
import Footer2 from "../../common/layout/footer/Footer2 ";

const CheckOut = ({ setCouponID }) => {
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.payment);
  const value = useSelector((state) => state.saloonData);
  const checkstate = useSelector((state) => state.checkstate);
  const location = useLocation();
  const [coupon, setCoupon] = useState([]);
  const [check, setcheck] = useState("");
  const [coupnsvalue, setCouponvalue] = useState("");
  const [arr, Setarr] = useState(checkstate);
  const [couponData, SetCouponData] = useState([]);
  const [couponamount, setCouponAmount] = useState("");
  const [PayId, setPayId] = useState("");
  const [PaymentId, setPaymentId] = useState("");

  const navigate = useNavigate();
  
  const cheoutpage = async (id) => {
    console.log("hhhhhhhh");
    const path = `Checkout?saloonId=${
      value[0]?._id ? value[0]?._id : ""
    }&couponId=${id ? id : ""}`;
    const res = await getData(path);
    setCouponAmount(res.data[0]?.finalTotalAmount);
    SetCouponData(res.data);
  };

  const CreateRazor = async (data) => {
    console.log("datatatatat", data);
    const value = couponamount ? couponamount : data;
    console.log("valuevalue", value);
    var body = {
      amount: value,
    };
    const res = await postData("create/orderId", body);
    // setPayId(res.data[0]?._id);
    console.log("paaaaaaaaaaaayyee", res.data[0]?._id);
    await plan(res.data[0]?._id, res.data[0]?.orderData?.id);
  };
 console.log('arrarrarr', arr)
 const cartId = localStorage.getItem('cartid')
  console.log('cartidcartidcartid', cartId)
  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }
  const plan = async (id, value) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: "rzp_test_3NbMeDVOudCrn5",
      order_id: value,

      handler: async function (response) {
        var body = {
          response,
        };
        console.log("response", response);

        const resorder = await getData(`order?PaymentId=${id}&cartId=${cartId ? cartId : ''}`);
        const path = `api/payment/verify?orderId=${resorder.data[0]?._id}`;
        const res = await postData(path, body);
        console.log("resssssssssPAyyyemnette", res.data);
        console.log("resorderresorder", resorder);
        alert("Payment Successfully");
        navigate("/Dashboard");
      },
      prefill: {
        name: arr[0]?.name,
        email: Data.email,
        contact: arr[0]?.phone,
      },
    };
    const pay = new window.Razorpay(options);
    pay.open();
  };

  const getcoupon = async () => {
    const res = await getData("get-coupon");
    console.log("get-couponget-coupon", res.data);
    setCoupon(res.data);
  };
  return (
    <>
      <div>
        {/* Header Start */}
        <HeaderHome />
        {/* Header End */}
        <div className="checkoutMain bg-dark">
          <div className="container">
            <div className="row gap-4 mx-0">
              <div className="col-12">
                <div className="row align-items-center">
                  <div className="col">
                    <div className="pageHeading text-white">Checkout</div>
                  </div>
                  <div className="col-auto">
                    <div className="miniheading text-white">Saloon at Home</div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="detailsMain pb-4">
                  <div className="row g-4">
                    <div className="col-12">
                      <div className="miniheading text-white fw-bold">
                        Booking Details
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-5 col-md-6">
                      <div className="bookingDetail p-3 rounded-4 overflow-hidden d-flex flex-column gap-3 border border-gray text-opacity-75 h-100">
                        <div className="row">
                          <div className="col-sm-3 col-4">
                            <div className="title text-white text-opacity-50">
                              Salon :
                            </div>
                          </div>
                          <div className="col">
                            <div className="dec text-white">
                              {arr ? arr[0]?.storedetail?.storeName : ""}
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-3 col-4">
                            <div className="title text-white text-opacity-50">
                              Date :
                            </div>
                          </div>
                          <div className="col">
                            <div className="dec text-white">{arr[0]?.Date}</div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-3 col-4">
                            <div className="title text-white text-opacity-50">
                              Time :
                            </div>
                          </div>
                          <div className="col">
                            <div className="dec text-white">{arr[0]?.Time}</div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-3 col-4">
                            <div className="title text-white text-opacity-50">
                              Venue :
                            </div>
                          </div>
                          <div className="col">
                            <div className="dec text-white">
                              Sector 110, Noida
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-5 col-md-6">
                      <div className="bookingDetail p-3 rounded-4 overflow-hidden d-flex flex-column gap-3 border border-gray text-opacity-75 h-100">
                        <div className="row">
                          <div className="col-sm-3 col-4">
                            <div className="title text-white text-opacity-50">
                              Name :
                            </div>
                          </div>
                          <div className="col">
                            <div className="dec text-white">{arr[0]?.name}</div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-3 col-4">
                            <div className="title text-white text-opacity-50">
                              Phone :
                            </div>
                          </div>
                          <div className="col">
                            <div className="dec text-white">
                              +91 {arr[0]?.phone}
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-3 col-4">
                            <div className="title text-white text-opacity-50">
                              Email :
                            </div>
                          </div>
                          <div className="col">
                            <div className="dec text-white">
                              {arr[0]?.email}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    { arr[0]?.userAddress ? (
                       <div className="col-xl-4 col-lg-5 col-md-6">
                       <div className="bookingDetail p-3 rounded-4 overflow-hidden d-flex flex-column gap-3 border border-gray text-opacity-75 h-100">
                         <div className="row">
                           <div className="col-sm-3 col-4">
                             <div className="title text-white text-opacity-50">
                             House-no :
                             </div>
                           </div>
                           <div className="col">
                             <div className="dec text-white">
                               {arr[0]?.userAddress?.houseNumber}
                             </div>
                           </div>
                         </div>
                         <div className="row">
                           <div className="col-sm-3 col-4">
                             <div className="title text-white text-opacity-50">
                             Area :
                             </div>
                           </div>
                           <div className="col">
                             <div className="dec text-white">{arr[0]?.userAddress?.Area}</div>
                           </div>
                         </div>
                         <div className="row">
                           <div className="col-sm-3 col-4">
                             <div className="title text-white text-opacity-50">
                             City :
                             </div>
                           </div>
                           <div className="col">
                             <div className="dec text-white">
                             {arr[0]?.userAddress?.city}
                             </div>
                           </div>
                         </div>
                         <div className="row">
                           <div className="col-sm-3 col-4">
                             <div className="title text-white text-opacity-50">
                             Pincode :
                             </div>
                           </div>
                           <div className="col">
                             <div className="dec text-white">
                             {arr[0]?.userAddress?.pincode}
                             </div>
                           </div>
                         </div>
                         <div className="row">
                           <div className="col-sm-3 col-4">
                             <div className="title text-white text-opacity-50">
                             State :
                             </div>
                           </div>
                           <div className="col">
                             <div className="dec text-white">
                             {arr[0]?.userAddress?.state}
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                    ) :
                    ''}
                   
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="row g-4">
                  <div className="col-12">
                    <div className="row align-items-center">
                      <div className="col">
                        <div className="miniheading text-white">
                          In your cart
                        </div>
                      </div>
                      <div className="col-auto">
                        <NavLink
                          to="/services"
                          className="btn btn-theme1 text-white d-flex align-items-center fs-14"
                        >
                          <img
                            className="me-2"
                            src="assets/img/icon/PlusCircleIcon.svg"
                            alt
                          />{" "}
                          Add More
                        </NavLink>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="row">
                      <div className="col-12">
                        <div className="cartOuter rounded-4 bg-black overflow-hidden">
                          <div className="row p-3 mx-0 px-4 border-bottom">
                            <div className="col px-0">
                              <div className="services header text-white">
                                Services
                              </div>
                            </div>
                            <div className="col-auto px-0">
                              <div className="price header text-white text-end">
                                Price
                              </div>
                            </div>
                          </div>

                          {couponData.length
                            ? couponData[0]?.cart?.map((el) => {
                                return (
                                  <div className="row p-3 mx-0 px-4 border-bottom">
                                    <div className="col px-0">
                                      <div className="services text-white text-opacity-75">
                                        {el.ServiceName}
                                      </div>
                                    </div>
                                    <div className="col-auto px-0">
                                      <div className="price text-white text-opacity-75 text-end">
                                        ₹{el.ServicePrice}
                                      </div>
                                    </div>
                                  </div>
                                );
                              })
                            : arr[0]?.cart?.map((el) => {
                                console.log("elelelle1111118", el);
                                return (
                                  <div className="row p-3 mx-0 px-4 border-bottom">
                                    <div className="col px-0">
                                      <div className="services text-white text-opacity-75">
                                        {el.ServiceName}
                                      </div>
                                    </div>
                                    <div className="col-auto px-0">
                                      <div className="price text-white text-opacity-75 text-end">
                                        ₹{el.ServicePrice}
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                        </div>
                      </div>
                      {/* <div className="col-12 subTotal">
                        <div className="row mx-0 px-4 py-3">
                          <div className="col px-0">
                            <div className="services header text-white fs-6">
                              Sub Total
                            </div>
                          </div>
                          <div className="col px-0">
                            <div className="price header text-white fs-6 text-end">
                              ₹{ couponData.length ? couponData[0]?.finalTotalAmount :arr[0]?.totalamount}
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="row">
                      <div className="col-12">
                        <div className="cartOuter rounded-4 bg-black overflow-hidden">
                          <div className="row p-3 mx-0 px-4 pb-0">
                            <div className="col-12 px-0">
                              <div className="text-white fs-16">
                                Billing Details
                              </div>
                            </div>
                          </div>
                          <div className="row p-3 mx-0 px-4 border-bottom">
                            <div className="col px-0">
                              <div className="services text-white text-opacity-75">
                                Total price
                              </div>
                            </div>
                            <div className="col-auto px-0">
                              <div className="price text-white text-opacity-75 text-end">
                                ₹{arr[0]?.totalamount}
                              </div>
                            </div>
                          </div>
                          <div className="row p-3 mx-0 px-4 border-bottom">
                            <div className="col px-0">
                              <div className="services text-white text-opacity-75">
                                Discount
                              </div>
                            </div>
                            <div className="col-auto px-0">
                              <div className="price text-white text-opacity-75 text-end">
                                ₹
                                {couponData.length
                                  ? couponData[0]?.Discount
                                  : 0}
                              </div>
                            </div>
                          </div>
                          <div className="row p-3 mx-0 px-4 border-bottom">
                            <div className="col px-0">
                              <div className="services text-white text-opacity-75">
                                Hygiene Fees
                              </div>
                            </div>
                            <div className="col-auto px-0">
                              <div className="price text-white text-opacity-75 text-end">
                                <del>₹50</del>{" "}
                                <span className="newPrice ms-2">Free</span>
                              </div>
                            </div>
                          </div>
                          <div className="row p-3 mx-0 px-4 border-bottom">
                            <div className="col px-0">
                              <div className="services text-white text-opacity-75">
                                Booking Fees:
                              </div>
                            </div>
                            <div className="col-auto px-0">
                              <div className="price text-white text-opacity-75 text-end">
                                <del>₹99</del>{" "}
                                <span className="newPrice ms-2">Free</span>
                              </div>
                            </div>
                          </div>
                          <div className="row p-3 mx-0 px-4 border-bottom">
                            <div className="col px-0">
                              <div className="services text-white text-opacity-75">
                                Service cost:
                              </div>
                            </div>
                            <div className="col-auto px-0">
                              <div className="price text-white text-opacity-75 text-end">
                                <del>₹20</del>{" "}
                                <span className="newPrice ms-2">Free</span>
                              </div>
                            </div>
                          </div>
                          <div className="row p-3 mx-0 px-4 border-bottom">
                            <div className="col px-0">
                              <div className="services total text-white fw-normal fs-16">
                                Total Payable Amount
                              </div>
                            </div>
                            <div className="col-auto px-0">
                              <div className="price total text-white fw-normal fs-16 text-end">
                                {/* ₹{ couponData.length ? couponData[0]?.finalTotalAmount :arr[0]?.totalamount} */}
                                {couponData[0]?.finalTotalAmount === 0
                                  ? arr[0]?.totalamount
                                  : couponData.length
                                  ? couponData[0]?.finalTotalAmount
                                  : arr[0]?.totalamount}
                              </div>
                            </div>
                          </div>
                          <div className="otherDetails p-4">
                            <div className="row gap-3">
                              <div className="col-12">
                                <div className="fs-12 text-white text-opacity-75 py-sm-3">
                                  Note: The prices are all inclusive of GST
                                </div>
                              </div>
                              <div className="col-12 mb-4">
                                <form action className="form">
                                  <div className="input-group">
                                    <input
                                      type="text"
                                      value={check}
                                      className="form-control shadow-none fs-12"
                                      onChange={(e) => setcheck(e.target.value)}
                                      id
                                      placeholder="Apply Promocode"
                                    />
                                    <button
                                      type="button"
                                      className="btn btn-theme1 border-0 text-white shadow-none fs-12 py-2"
                                      onClick={() => {
                                        cheoutpage(coupnsvalue);
                                      }}
                                    >
                                      Apply Coupon
                                    </button>
                                  </div>
                                </form>
                                <button
                                  type="button"
                                  className="btn bg-transparent border-0 shadow-none fs-12 text-theme1 mt-2 p-0 float-end"
                                  data-bs-toggle="modal"
                                  data-bs-target="#availableCoupon"
                                  onClick={() => getcoupon()}
                                >
                                  Available Coupons
                                </button>
                              </div>
                              <div className="col-12">
                                <button
                                  className="btn btn-light shadow-none w-100 fs-14 py-sm-2"
                                  onClick={() => {
                                    // plan( OderId );
                                    CreateRazor(arr[0]?.totalamount);
                                  }}
                                >
                                  Pay Now
                                </button>
                              </div>
                              <div className="col-12">
                                <button className="btn btn-theme1 shadow-none w-100 text-white fs-14 py-sm-2">
                                  Pay at Counter
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
        <section className="container-fluid wherWeSection bg-dark">
          <div className="container">
            <div className="row">
              <Footer2 />
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
        {/* herewe we Section end */}
        {/* Footer Start */}

        {/* Footer End */}
        {/* Modal */}
        <div
          className="modal modalCoupon fade"
          id="availableCoupon"
          data-bs-backdrop="static"
          tabIndex={-1}
          aria-labelledby="availableCouponLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content bg-dark">
              <div className="modal-header border-0 pb-0">
                <div
                  className="modal-title fs-16 text-white"
                  id="availableCouponLabel"
                >
                  Available Coupons
                </div>
                <button
                  type="button"
                  className="btn-close shadow-none"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="row gap-4">
                  <div className="col-12">
                    <form action className="form">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control shadow-none fs-12"
                          id
                          value={check}
                          onChange={(e) => setcheck(e.target.value)}
                          placeholder="Enter Coupon Code"
                        />
                        <button
                          type="button"
                          className="btn btn-theme1 border-0 text-white shadow-none fs-12 py-2"
                          onClick={() => {
                            // cheoutpage(coupnsvalue);
                            if (arr[0]?.totalamount >= 2000) {
                              alert("coupons available !!");
                            } else {
                              alert("not available coupons,book above ₹2000");
                            }
                          }}
                        >
                          check
                        </button>
                      </div>
                    </form>
                  </div>
                  {coupon.map((el) => {
                    // console.log('elelele',el)
                    return (
                      <div className="col-12">
                        <div className="form-check p-0">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="couponFirst"
                            hidden
                          />
                          <label
                            className="form-check-label couponOuter p-sm-3 p-2 text-white rounded-4 w-100"
                            htmlFor="couponFirst"
                          >
                            <div
                              className="code p-sm-2 p-1 rounded-1 text-theme1 d-inline-block px-3 fs-12 text-uppercase"
                              onClick={() => {
                                setcheck(el?.CouponCode);
                                setCouponvalue(el?._id);
                              }}
                            >
                              {`${el?.CouponCode}`}
                            </div>
                            <div className="mt-sm-3 mt-2 text-white fs-12">
                              Enjoy Professional Beauty Services at Home, only
                              through "SALOON"!
                            </div>
                          </label>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
