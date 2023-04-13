import React, { useEffect } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import * as yup from "yup";
import { postData, getData } from "../../components/apiinstance/Api";
import { NavLink, useNavigate } from "react-router-dom";
import Header from "../../common/layout/header/header";
import Footer from "../../common/layout/footer/footer";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function Login() {
  let navigate = useNavigate();
  const [defaultvalues, setdefaultvalues] = useState({
    phone: "",
  });

  const [otp, setOtp] = useState("");
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [otpvalue, setotpvalue] = useState("");
  const continu = async (value) => {
    console.log("kkkk");
    console.log(value);
    setMinutes(2);
    setSeconds(59);
    var body = {
      phone: value.phone,
    };
    const res = await postData("otp-sent", body);

    console.log(res);
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const validationschema = yup.object().shape({
    phone: yup
      .string()
      .required("Enter your mobile number")
      .length(10, "Please enter a valid mobile number.")
      .matches(phoneRegExp, "Please enter a valid mobile number."),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [otp]);

  const hanlder = async (value) => {
    console.log(value);
    var body = {
      phone: value,
    };
    const res = await postData("login", body);
    if(res.status){
      localStorage.setItem("phone",res?.data[0]?.phone)
      toast.success(res.message, {
        position: toast.POSITION.TOP_RIGHT,
    });
    setTimeout(() => {
      navigate("/verifyotp");
}, 2000);
     }else{
      toast.error(res.message, {
        position: toast.POSITION.TOP_RIGHT,
    });
     }
    console.log(res?.data[0]?.phone);
    // setotpvalue(res?.data[0]?.phone)
  };
  console.log(otpvalue);

  return (
    <>
      <div className="container-fluid login px-5">
    <ToastContainer
      autoClose ='2000'/>
      
        <div className="login2 h-100">
          <div className="row h-100 align-items-center">
            <div className="col-md-5 col-12  order-md-1 order-2 h-100 d-flex flex-column justify-content-center mt-5 px-5">
              <div className="d-flex align-items-center hedtext mb-4">
                <span className="pe-2">
                  <img src="assets/img/signin/iconimage.png" alt="" />
                </span>{" "}
                Saloon
              </div>
              <div className="h3 text-theme1 mb-4 subheading">
                Login an account
              </div>
              <div className=" text-theme2 mb-4 textp">
                Let's get started with your 30 day free trail.
              </div>

              <Formik
                initialValues={defaultvalues}
                validationSchema={validationschema}
                onSubmit={(value) => continu(value)}
              >
                {(props) => {
                  console.log(props);
                  return (
                    <Form>
                      <div className="mb-4">
                        {/* <Field
                      type="tel"
                      name="phone"
                      className="form-control border-bottom shadow-none border-0"
                      id="formGroupExampleInput1"
                      placeholder="+91"
                    /> */}

                        <input
                          type="tel"
                          name="phone"
                          value={props.values.phone}
                          onChange={props.handleChange}
                          className="form-control border-bottom shadow-none border-0"
                          id="formGroupExampleInput2"
                          placeholder="+91"
                        />
                      </div>
                      <p className="text-danger text-start">
                        {props.errors.phone ? props.errors.phone : ""}
                      </p>
                      <div className="mb-4 chekboxcol">
                        <div className="form-check text-start">
                          <input
                            className="form-check-input shadow-none"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                            // checked
                          />
                          <label
                            className="form-check-label textleb"
                            for="flexCheckChecked"
                          >
                            By continuing, I agree to the{" "}
                            <NavLink className="text-decoration-none" to="/">
                              Terms & Conditions
                            </NavLink>{" "}
                            &{" "}
                            <NavLink className="text-decoration-none" to="/">
                              Privacy Policy
                            </NavLink>
                          </label>
                        </div>
                      </div>
                      <div className="mb-4 text-center">
                        <NavLink
                          to={{
                            //  pathname:'/verifyotp',
                            state: { title: otpvalue },
                          }}
                        >
                          <button
                            className="btn text-white signinbtn"
                            type="submit"
                            onClick={() => hanlder(props.values.phone)}
                          >
                            Continue
                          </button>
                        </NavLink>
                      </div>
                    
                      <div className="text-center">
                      <NavLink
                        className="text-theme1 recendtext text-decoration-none"
                        to="/login-with-password"
                      >
                        Log In using Password
                      </NavLink>
                        <div className="textfooter">
                          Don't have an account?
                          <NavLink
                            className="text-theme2 fw-md-lighter text-decoration-none"
                            to="/signup"
                          >
                            Sign Up Now
                          </NavLink>
                        </div>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </div>
            <div className="col-md-7 col-12 order-md-2 order-1">
              <div className="sideImage  mb-3 mb-sm-0">
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

export default Login;
