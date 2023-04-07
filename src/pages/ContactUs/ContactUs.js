import React, { useState } from "react";
import Footer from "../../common/layout/footer/footer";
import HeaderHome from "../../common/layout/header/HeaderHome";
import * as yup from "yup";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { postData } from "../../components/apiinstance/Api";
import Footer2 from "../../common/layout/footer/Footer2 ";
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


function ContactUs() {
  const [ Value ,setValue] = useState("")
  const[modalId,setModalId]=useState('')
  const navigate=useNavigate()
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
     if(res.status){
      toast.success(res.message, {
        position: toast.POSITION.TOP_RIGHT,
       
    });
    setTimeout(() => {
      navigate('/Dashboard')
}, 2500);
     }else{
      toast.error(res.message, {
        position: toast.POSITION.TOP_RIGHT,
        
    });
     }
    
   
      
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
  console.log('this is id of modal',modalId)
  return (
    <div>
      <HeaderHome />
      <ToastContainer
       autoClose={1500}
      />
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
       <Footer2/>
      </div>
      <Footer />
     
    </div>
    
     
  );
}

export default ContactUs;
