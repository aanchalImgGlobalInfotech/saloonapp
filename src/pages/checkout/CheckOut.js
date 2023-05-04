import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import HeaderHome from "../../common/layout/header/HeaderHome";
import { getData, postData } from "../../components/apiinstance/Api";
import { checkoutvalues, couPon } from "../../components/redux/redux1/actions";
import Footer2 from "../../common/layout/footer/Footer2 ";
import Footer from "../../common/layout/footer/footer";

const CheckOut = ({ setCouponID }) => {
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.payment);
  const value = useSelector((state) => state.saloonData);
  const checkstate = useSelector((state) => state.checkstate);
  const walletbalanced = useSelector((state) => state.userData);
  const location = useLocation();
  const [coupon, setCoupon] = useState([]);
  const [check, setcheck] = useState("");
  const [coupnsvalue, setCouponvalue] = useState("");
  const [arr, Setarr] = useState(checkstate);
  const [couponData, SetCouponData] = useState([]);
  const [couponamount, setCouponAmount] = useState("");
  const [PayId, setPayId] = useState("");
  const [PaymentId, setPaymentId] = useState("");
  const [walletdata, setwallet] = useState("");
  const [addWallet, setAddWallet] = useState("");
  // const walletmoney = J0SON.parse(addWallet);
  console.log("kkkkkkk", walletbalanced);
  const navigate = useNavigate();

  const cheoutpage = async (id) => {
    console.log("hhhhhhhh");
    if (id) {
      const path = `Checkout?saloonId=${
        value[0]?._id ? value[0]?._id : ""
      }&couponId=${id ? id : ""}`;
      const res = await getData(path);
      setCouponAmount(res.data[0]?.finalTotalAmount);
      SetCouponData(res.data);
    } else {
      const path = `Checkout?saloonId=${
        value[0]?._id ? value[0]?._id : ""
      }&balance=${true}`;
      const res = await getData(path);
      dispatch(checkoutvalues(res.data));
    }
  };

  const CreateRazor = async (data) => {
    console.log("datatatatat", data);
    const value = couponamount
      ? couponamount
      : addWallet
      ? addWallet.pay
      : data;
    console.log("valuevalue", value);
    var body = {
      amount: value,
    };
    const res = await postData("create/orderId", body);
    // setPayId(res.data[0]?._id);
    console.log("paaaaaaaaaaaayyee", res.data[0]?._id);
    await plan(res.data[0]?._id, res.data[0]?.orderData?.id);
  };
  console.log("arrarrarr", arr);
  const cartId = localStorage.getItem("cartid");
  console.log("cartidcartidcartid", cartId);
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
      key: "rzp_test_du8jJUxQb7hup4",
      order_id: value,

      handler: async function (response) {
        var body = {
          response,
        };
        console.log("response", response);

        const resorder = await getData(
          `order?PaymentId=${id}&cartId=${cartId ? cartId : ""}`
        );
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
  const ConfirmOrderid = () => {
    navigate("/orderId");
  };
  const walletApi = async (e) => {
    const checked = e.target.checked;
    if (checked) {
      const path = `apply-balance?cartId=${
        arr[0]?.cartId ? arr[0]?.cartId : ""
      }`;
      const res = await getData(path);
      localStorage.setItem("walletmoney", JSON.stringify(res.data[0]));
      setAddWallet(res.data[0]);
    } else {
      localStorage.removeItem("walletmoney");
      setAddWallet(null);
    }
  };
  useEffect(() => {
    const wallets = localStorage.getItem("walletmoney");
    setAddWallet(JSON.parse(wallets) ? JSON.parse(wallets) : "");
  }, []);
  return (
    <>
      <div>
        <HeaderHome />
        <div className="checkoutMain bg-dark">
          <div className="container">
            <div className="row gap-4 mx-0">
              <div className="col-12">
                <div className="row align-items-center">
                  <div className="col">
                    <div className="pageHeading text-white">Checkout</div>
                  </div>
                  {arr[0]?.userAddress ? (
                    <div className="col-auto">
                      <div className="miniheading text-white">
                        Saloon at Home
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
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
                    {arr[0]?.userAddress ? (
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
                              <div className="dec text-white">
                                {arr[0]?.userAddress?.Area}
                              </div>
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
                    ) : (
                      ""
                    )}
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
                            ? couponData[0]?.cart?.map((el, i) => {
                                return (
                                  <div
                                    className="row p-3 mx-0 px-4 border-bottom"
                                    key={i}
                                  >
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
                            : arr[0]?.cart?.map((el, i) => {
                                return (
                                  <div
                                    className="row p-3 mx-0 px-4 border-bottom"
                                    key={i}
                                  >
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
                                  : addWallet
                                  ? addWallet.disCount
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
                                  : addWallet
                                  ? addWallet.pay
                                  : arr[0]?.totalamount}
                              </div>
                            </div>
                          </div>
                          <div className="otherDetails p-4">
                            <div className="row gap-3">
                              <div className="col-12 d-flex justify-content-between align-items-center ">
                                <div className=" text-white d-flex justify-content-between align-items-center">
                                  <div className="form-check form-check-lg ">
                                    <input
                                      type="checkbox"
                                      checked={addWallet}
                                      className="form-check-inaazput checkinput shadow-none "
                                      onClick={(e) => {
                                        walletApi(e);
                                        setwallet("data");
                                      }}
                                    />
                                    {/* <label className="form-check-label">
                                      Checkbox Label
                                    </label> */}
                                  </div>

                                  <div className="fs-12 ms-2 text-opacity-75 py-sm-3">
                                    saloon wallet . <br />
                                    you are eligible to use: ₹
                                    {walletbalanced[0]?.userWallet?.balance}
                                  </div>
                                </div>

                                <div className="fs-12 text-white text-opacity-75 py-sm-3">
                                  Note: The prices are all inclusive of GST
                                </div>
                              </div>
                              <div className="col-12 mb-4">
                                <form className="form">
                                  <div className="input-group">
                                    <input
                                      type="text"
                                      value={check}
                                      className="form-control shadow-none fs-12"
                                      onChange={(e) => setcheck(e.target.value)}
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
                                <button
                                  className="btn btn-theme1 shadow-none w-100 text-white fs-14 py-sm-2"
                                  onClick={() => ConfirmOrderid()}
                                >
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
              <Footer />
            </div>
          </div>
        </section>
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
                    <form className="form">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control shadow-none fs-12"
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
                  {coupon.map((el, i) => {
                    // console.log('elelele',el)
                    return (
                      <div className="col-12" key={i}>
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
                            <div className="d-flex justify-content-between">
                            <div
                              className="code p-sm-2 p-1 rounded-1 text-theme1 d-inline-block px-3 fs-12 text-uppercase"
                              onClick={() => {
                                setcheck(el?.CouponCode);
                                setCouponvalue(el?._id);
                              }}
                            >
                              {`${el?.CouponCode}`}
                            </div>
                            <div className="fs-12 text-theme1">
                              discount : ₹{el?.Discount}
                            </div>
                            </div>
                            <div className="mt-sm-3 mt-2 text-white fs-12">
                              {/* Enjoy Professional Beauty Services at Home, only
                              through "SALOON"! */}
                              {el.Title}
                            </div>
                            <div className="d-flex justify-content-between mt-2">
                            <div className="fs-12">
                              start date : {el.StartDate}
                            </div>
                            <div className="fs-12">
                              end date : {el?.EndDate}
                            </div>
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
