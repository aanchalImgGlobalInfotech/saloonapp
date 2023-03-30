import React, { useState } from "react";
import Footer from "../../common/layout/footer";
import HeaderHome from "../../common/layout/header/HeaderHome";
import * as yup from "yup";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { postData } from "../../components/apiinstance/Api";


function ContactUs() {
  const [ Value ,setValue] = useState("")
  const [defaultvalues, setdefaultvalues] = useState({
    name: "",
    phone: "",
    email: "",
    massage:'',
  });
  const continu = async (value) => {
    var body = {
      name: value.name,
      services:Value,
      phone: value.phone,
      email: value.email,
      massage: value.massage,
    };
    const res = await postData("Contact-Us", body);

    console.log(res,'ressssssssssssssssssssss');
  };
  // console.log(value,'vvvvvvvvvvvvvvvvvvvvvvvv')
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
  massage:Yup.string().required('massage is required')
});

  return (
    <div>
      <HeaderHome />
      <div>
        <div className="TopBannerHeading">
          <div className="container-fluid px-0">
            <div className="row mx-0">
              <div className="col-12 px-0">
                <div className="topBanner w-100">
                  <div className="heading text-center text-white">
                    Contact Us
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Banner Headign End */}
        {/* Contact Us Cards Start */}
        <div className="contactUsCards bg-dark py-5">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-4 col-md-6">
                <div className="drop dropOne position-relative d-flex align-items-center justify-content-center mx-auto">
                  <div className="content d-flex flex-column justify-content-center align-items-center gap-sm-3 gap-2 text-center">
                    <div className="circle text-theme1 position-relative rounded-circle d-flex justify-content-center align-items-center">
                      <img
                        className="w-100"
                        src="assets/img/contact/cardIcon1.svg"
                        alt
                      />
                    </div>
                    <div className="detail d-flex flex-column gap-2">
                      <div className="title text-white">Corporate Office</div>
                      <div className="contact text-white fs-12">
                        <span>Email : </span>
                        <a
                          className="text-decoration-none text-white"
                          href="mailTo: saloon.info@gmail.com"
                        >
                          saloon.info@gmail.com
                        </a>
                      </div>
                      <div className="contact text-white fs-12">
                        <span>Toll Free : </span>
                        <a
                          className="text-decoration-none text-white"
                          href="tel: +91 9876541230"
                        >
                          +91 9876541230
                        </a>
                      </div>
                      <div className="address text-white fs-12">
                        Saloon parlour service, vaishali Nagar, Jaipur, 302021
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="drop dropTwo position-relative d-flex align-items-center justify-content-center mx-auto">
                  <div className="content d-flex flex-column justify-content-center align-items-center gap-sm-3 gap-2 text-center">
                    <div className="circle text-theme1 position-relative rounded-circle d-flex justify-content-center align-items-center">
                      <img
                        className="w-100"
                        src="assets/img/contact/cardIcon2.png"
                        alt
                      />
                    </div>
                    <div className="detail d-flex flex-column gap-2">
                      <div className="title text-white">
                        Saloon For Business
                      </div>
                      <div className="contact text-white fs-12">
                        <span>Email : </span>
                        <a
                          className="text-decoration-none text-white"
                          href="mailTo: saloon.info@gmail.com"
                        >
                          saloon.info@gmail.com
                        </a>
                      </div>
                      <div className="contact text-white fs-12">
                        <span>Toll Free : </span>
                        <a
                          className="text-decoration-none text-white"
                          href="tel: +91 9876541230"
                        >
                          +91 9876541230
                        </a>
                      </div>
                      <div className="address text-white fs-12">
                        Saloon parlour service, vaishali Nagar, Jaipur, 302021
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md ">
                <div className="drop dropThree position-relative d-flex align-items-center justify-content-center mx-auto">
                  <div className="content d-flex flex-column justify-content-center align-items-center gap-sm-3 gap-2 text-center">
                    <div className="circle text-theme1 position-relative rounded-circle d-flex justify-content-center align-items-center">
                      <img
                        className="w-100"
                        src="assets/img/contact/cardIcon3.svg"
                        alt
                      />
                    </div>
                    <div className="detail d-flex flex-column gap-2">
                      <div className="title text-white">Work With Us</div>
                      <div className="contact text-white fs-12">
                        <span>Email : </span>
                        <a
                          className="text-decoration-none text-white"
                          href="mailTo: saloon.info@gmail.com"
                        >
                          saloon.info@gmail.com
                        </a>
                      </div>
                      <div className="contact text-white fs-12">
                        <span>Toll Free : </span>
                        <a
                          className="text-decoration-none text-white"
                          href="tel: +91 9876541230"
                        >
                          +91 9876541230
                        </a>
                      </div>
                      <div className="address text-white fs-12">
                        Saloon parlour service, vaishali Nagar, Jaipur, 302021
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 d-none">
                <div className="drop">
                  <div className="content d-flex flex-column justify-content-center align-items-center gap-3 text-center">
                    <div className="circle text-theme1 position-relative rounded-circle d-flex justify-content-center align-items-center">
                      02
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Qui, vel.
                    </p>
                    {/* <a href="#">Read More</a> */}
                  </div>
                </div>
                <div className="drop">
                  <div className="content d-flex flex-column justify-content-center align-items-center gap-3 text-center">
                    <div className="circle text-theme1 position-relative rounded-circle d-flex justify-content-center align-items-center">
                      03
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Qui, vel.
                    </p>
                    {/* <a href="#">Read More</a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Contact Us Cards End */}
        {/* Contact Us Form Start */}
        <div className="contactFormMain bg-black py-5">
          <div className="container">
            <div className="row align-items-center g-4">
              <div className="col-lg-6">
                <div className="otherDetailOuter">
                  <div className="details d-flex flex-column gap-3 p-lg-5 pe-sm-5">
                    <div className="title text-white">
                      Got Some Questions? Feel Free to Ask Us!
                    </div>
                    <div className="miniTitle text-white pe-sm-5">
                      Our professionals are always ready to help you with all
                      the important information about our services.
                    </div>
                    <div className="calling d-flex gap-2 align-items-center position-relative fs-14">
                      <span className="icon rounded-circle bg-theme1">
                        <img
                          className="w-100"
                          src="assets/img/icon/callingWhite.svg"
                          alt
                        />
                      </span>{" "}
                      <a
                        className="text-decoration-none text-white stretched-link"
                        href="tel: 18001800186"
                      >
                        18001800186
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="formOuter">
                  <div className="heading text-white text-center">
                    Write to Us
                  </div>
                  <Formik
                    initialValues={defaultvalues}
                    validationSchema={validationschema}
                    onSubmit={(value) => continu(value)}
                  >
                  {(props) => {
                console.log("ppppttttt", props);
                return (
                  <Form
                    onSubmit={props.handleSubmit}
                    action
                    className="form mt-4"
                  >
                    <div className="row g-4">
                      <div className="col-sm-6">
                        <div className="input-group d-block position-relative">
                          <label
                            htmlFor="name"
                            className="form-label text-white"
                          >
                            Your Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={props.values.name}
                            onChange={props.handleChange}
                            className="form-control m-0 w-100 rounded-1 py-2 ps-3 shadow-none bg-dark border-dark"
                            id="name"
                            placeholder="Enter Your Name"
                          />
                        </div>
                        <p className="text-danger text-start">
                          {props.errors.name ? props.errors.name : ""}
                        </p>
                      </div>
                      <div className="col-sm-6">
                        <div className="input-group d-block">
                          <label htmlFor className="form-label text-white">
                            Type of Query
                          </label>
                          <select
                            onChange={(e) => setValue(e.target.value)}
                            className="form-select w-100 rounded-1 py-2 ps-3 shadow-none bg-dark border-dark"
                            aria-label="Default select example"
                          >
                            <option selected>Services</option>
                            <option value="Booking">Booking</option>
                            <option value="Refund">Refund</option>
                            <option value="Skin">Skin</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="input-group d-block position-relative">
                          <label
                            htmlFor="email"
                            className="form-label text-white"
                          >
                            Your Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={props.values.email}
                            onChange={props.handleChange}
                            className="form-control m-0 w-100 rounded-1 py-2 ps-3 shadow-none bg-dark border-dark"
                            id="email"
                            placeholder="Enter Your Email"
                          />
                        </div>
                        <p className="text-danger text-start">
                          {props.errors.name ? props.errors.email : ""}
                        </p>
                      </div>
                      <div className="col-sm-6">
                        <div className="input-group d-block position-relative">
                          <label
                            htmlFor="mobileNumber"
                            className="form-label text-white"
                          >
                            Mobile Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={props.values.phone}
                            onChange={props.handleChange}
                            className="form-control m-0 w-100 rounded-1 py-2 ps-3 shadow-none bg-dark border-dark"
                            id="mobileNumber"
                            placeholder="Enter Your obile Number"
                          />
                        </div>
                        <p className="text-danger text-start">
                          {props.errors.name ? props.errors.phone : ""}
                        </p>
                      </div>
                      <div className="col-12">
                        <div className="input-group d-block position-relative">
                          <label
                            htmlFor="Message"
                            className="form-label text-white"
                          >
                            Message
                          </label>
                          <textarea
                            rows={5}
                            name="massage"
                            value={props.values.massage}
                            onChange={props.handleChange}
                            className="form-control m-0 w-100 rounded-1 py-2 ps-3 shadow-none bg-dark border-dark"
                            id="Message"
                            placeholder="Note: Explicit/spammy words and unverified URLs are restricted."
                            defaultValue={""}
                          />
                        </div>
                        <p className="text-danger text-start">
                          {props.errors.name ? props.errors.massage : ""}
                        </p>
                      </div>
                      <div className="col"></div>
                      <div className="col-auto">
                        <button
                          type="submit"
                          className="btn btn-theme1 text-white border-0 shadow-none"
                        >
                          Submit
                        </button>
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
        {/* Contact Us Form End */}
        {/* herewe we Section start */}
        <section className="container-fluid wherWeSection bg-dark py-5">
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
      <Footer />
    </div>
  );
}

export default ContactUs;
