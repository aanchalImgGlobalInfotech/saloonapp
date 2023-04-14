import React from "react";
import axios from "axios";
import { Formik, Form, input, ErrorMessage } from "formik";
import { useState } from "react";
import * as yup from "yup";
import * as Yup from "yup";
import { postData, getData } from "../../components/apiinstance/Api";
import { NavLink } from "react-router-dom";
import Header from "../../common/layout/header/header";
import Footer from "../../common/layout/footer/footer";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
  const [defaultvalues, setdefaultvalues] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmpassword: "",
    referral : ""
  });
  const [isPwd, setIsPwd] = useState(false);
  const [isconfirmPwd, setisconfirmPwd] = useState(false);
  const [phone, setphone] = useState("");
  const [openpop, setopen] = useState(false);
  // const [verifyy , setverify] = useState(false)
  console.log(phone);
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
      .max(50, "Too Long!")
      .required("Firstname is required"),

    email: Yup.string().email().required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password is too short - should be 6 chars minimum"),
    confirmpassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
    
  });
  const handler = async (value) => {
    console.log("jjjjjjjj");
    console.log(value);
    var data = {
      name: value.name,
      phone: value.phone,
      email: value.email,
      password: value.password,
      otp: "1234",
      referral : value.referral
    };
    const res = await postData("register", data);
    if(res.status){
      toast.success(res.message, {
        position: toast.POSITION.TOP_RIGHT,
    })}else {
      toast.error(res.message, {
        position: toast.POSITION.TOP_RIGHT,
    });
    }
  };

  const sendotp = async (value) => {
    // console.log(value);
    if (value) {
      var body = {
        phone: value,
      };
      const res = await postData("otp-sent", body);
      setopen((prev) => !prev);
      if(res.status){
        toast.success(res.message, {
          position: toast.POSITION.TOP_RIGHT,
      })}else {
        toast.error(res.message, {
          position: toast.POSITION.TOP_RIGHT,
      });
      }
    } else {
      alert("please enter valid number!");
    }
  
  };
  const verify = async (value) => {
    var body = {
      phone: value,
      otp: "1234",
    };
    const res = await postData("otp-verify", body);
    setopen((prev) => !prev);
    if(res.status){
      toast.success(res.message, {
        position: toast.POSITION.TOP_RIGHT,
    })}else {
      toast.error(res.message, {
        position: toast.POSITION.TOP_RIGHT,
    });
    }
  };

  return (
    <>
      <div className="container-fluid login px-5 ">
      <ToastContainer
      autoClose ='2000'/>
        <div className="login2 h-100">
          <div className="row h-100 align-items-center">
            <div className="col-md-5 col-12  order-md-1 order-2 h-100 d-flex flex-column justify-content-center mt-5 px-5">
              <div className="d-flex align-items-center hedtext mb-4">
                <span className="pe-2">
                  <img src="assets/img/signin/iconimage.png" alt="" />
                </span>
                Saloon
              </div>
              <div className="h3 text-theme1 mb-4 subheading">
                Create an account
              </div>
              <div className=" text-theme2 mb-4 textp">
                Let's get started with your 30 day free trail.
              </div>
              <Formik
                initialValues={defaultvalues}
                validationSchema={validationschema}
                onSubmit={(value) => handler(value)}
              >
                {(props) => {
                  return (
                    <Form onSubmit={props.handleSubmit}>
                      <div className="mb-4">
                        <input
                          type="text"
                          name="name"
                          value={props.values.name}
                          onChange={props.handleChange}
                          className="form-control border-bottom shadow-none border-0"
                          id="formGroupExampleInput1"
                          placeholder="Name"
                        />
                      </div>
                      <p className="text-danger text-start">
                        {props.errors.name ? props.errors.name : ""}
                      </p>
                      <div class="mb-4 d-flex justify-content-around position-relative">
                        <input
                          type="tel"
                          name="phone"
                          value={props.values.phone}
                          onChange={props.handleChange}
                          className="form-control border-bottom shadow-none border-0"
                          id="formGroupExampleInput2"
                          placeholder="Phone"
                        />
                        <div>
                          {/* <NavLink to=""> */}
                          <button
                            className="border rounded position-absolute end-0"
                            style={{
                              position: "relative",
                              zIndex: "2",
                              marginBottom: "15px",
                            }}
                            type="button"
                            onClick={() => sendotp(props.values.phone)}
                          >
                            Getotp
                          </button>
                          {/* </NavLink> */}
                        </div>
                      </div>
                      {openpop ? (
                        <div class="input-group signup-OTPSection justify-content-center py-3">
                          <div class="">
                            <div id="divOuter" class="outerdiv">
                              <div class="divinner" id="divInner">
                                <input
                                  id="signup-partitioned"
                                  type="text"
                                  class="number outline-none signuo-partitioned"
                                  maxlength="4"
                                />
                              </div>
                            </div>
                            <div class="input-group-prepend form-control-test mt-3">
                              <div class="input-group-text bg-transparent border-0  p-0">
                                <button
                                  class="btn btn-link signup-partitioned-btn font-12 text-decoration-none px-0 text-theme1"
                                  type="button"
                                  onClick={() => verify(props.values.phone)}
                                >
                                  Verify OTP
                                </button>
                                <button
                                  class="btn btn-link signup-phone-btn signup-resendOTP font-12 text-decoration-none text-theme1"
                                  type="button"
                                >
                                  Resend OTP
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}

                      <p className="text-danger text-start">
                        {props.errors.phone ? props.errors.phone : ""}
                      </p>
                      <div className="mb-4">
                        <input
                          type="email"
                          name="email"
                          value={props.values.email}
                          onChange={props.handleChange}
                          className="form-control border-bottom shadow-none border-0"
                          id="formGroupExampleemail"
                          placeholder="Email"
                        />
                      </div>
                      <p className="text-danger text-start">
                        {props.errors.email ? props.errors.email : ""}
                      </p>
                      <div className="mb-4 d-flex align-items-center position-relative">
                        <input
                          className="form-control border-bottom shadow-none border-0"
                          type={isPwd ? "text" : "password"}
                          name="password"
                          value={props.values.password}
                          onChange={props.handleChange}
                          placeholder="password"
                        />

                        <span
                          className="image-eye position-absolute end-0"
                          onClick={() => setIsPwd((prevState) => !prevState)}
                        >
                          {isPwd ? (
                            <i className="bi bi-eye"></i>
                          ) : (
                            <i className="bi bi-eye-slash"></i>
                          )}
                        </span>
                      </div>
                      <p className="text-danger text-start">
                        {props.errors.password ? props.errors.password : ""}
                      </p>
                      <div className="mb-4 d-flex align-items-center position-relative">
                        <input
                          className="form-control border-bottom shadow-none border-0"
                          type={isconfirmPwd ? "text" : "password"}
                          name="confirmpassword"
                          value={props.values.confirmpassword}
                          onChange={props.handleChange}
                          placeholder="password Confirm"
                        />
                        <span
                          className="image-eye position-absolute end-0"
                          onClick={() =>
                            setisconfirmPwd((prevState) => !prevState)
                          }
                        >
                          {isconfirmPwd ? (
                            <i className="bi bi-eye"></i>
                          ) : (
                            <i className="bi bi-eye-slash"></i>
                          )}
                        </span>
                      </div>
                      <p className="text-danger text-start">
                        {props.errors.confirmpassword
                          ? props.errors.confirmpassword
                          : ""}
                      </p>
                      <div className="mb-4">
                        <input
                          type="text"
                          name="referral"
                          value={props.values.referral}
                          onChange={props.handleChange}
                          className="form-control border-bottom shadow-none border-0"
                          id="formGroupExampleInput1"
                          placeholder="referral code (optional)"
                        />
                      </div>
                      <div className="mb-4 chekboxcol">
                        <div className="form-check">
                          <input
                            className="form-check-input shadow-none"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                          />
                          <label
                            className="form-check-label textleb"
                            for="flexCheckChecked"
                          >
                            By signing up, you agree to our{" "}
                            <NavLink className="text-decoration-none" to="/">
                              Terms & Conditions,
                            </NavLink>{" "}
                            Cookie Policy, and{" "}
                            <NavLink className="text-decoration-none" to="/">
                              Privacy Policy
                            </NavLink>
                          </label>
                        </div>
                      </div>
                      <div className="mb-4 text-center">
                        <button
                          className="btn text-white signinbtn"
                          type="submit"
                        >
                          Sign up
                        </button>
                      </div>
                      <div className="text-center mb-3">
                        <div className="textfooter">
                          Already have an account?{" "}
                          <NavLink
                            className="text-theme2 fw-md-bold text-decoration-none"
                            to="/login"
                          >
                            <span type="">Log in</span>{" "}
                          </NavLink>
                        </div>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </div>
            <div className="col-md-7 col-12 order-md-2 order-1">
              <div className="sideImage mb-3 mb-sm-0 h-100">
                <img
                  className="w-100 h-100"
                  src="assets/img/signin/login.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
