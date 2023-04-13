import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { postData } from "../../components/apiinstance/Api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUsers } from "../../components/redux/redux1/actions";

const LoginWithPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [initialValue, setInitialValue] = useState({
    email: "",
    password: "",
  });

  const submitHandler = async (value) => {
    const body = {
      email: value?.email,
      password: value?.password,
    };

    const res = await postData("login", body);
    console.log(res);
    if (res.status) {
      toast.success(res.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      dispatch(setUsers(res.data));
      setTimeout(() => {
        navigate("/Dashboard");
      }, 2000);
    } else {
      toast.error(res.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    let token = localStorage.setItem("token", res?.data[1]?.auth);
  };
  return (
    <div>
      <div className="container-fluid login px-lg-5">
        <ToastContainer autoClose={1000} />
        <div className="login2 h-100">
          <div className="row h-100 align-items-center">
            <div className="col-md-5 col-12  order-md-1 order-2 h-100 d-flex flex-column justify-content-center mt-5 px-sm-5">
              <div className="text-center text-md-start leftsidesection px-0 px-xl-5 mx-xl5 mx-0">
                <div className="d-flex align-items-center justify-content-center justify-content-md-start hedtext mb-4">
                  <span className="pe-2">
                    <img src="assets/img/signin/iconimage.png" alt />
                  </span>
                  Saloon
                </div>

                <div className="usingPassword  ">
                  <Formik
                    initialValues={initialValue}
                    onSubmit={(value) => submitHandler(value)}
                  >
                    {(formik) => {
                      return (
                        <Form>
                          <div className="row my-4">
                            <div className="col-12">
                              <div className="mb-4">
                                <Field
                                  type="email"
                                  className="form-control border-bottom shadow-none border-0 rounded-0 fs-12"
                                  id="formGroupExampleInput1"
                                  placeholder="Enter Your Email or Number"
                                  name="email"
                                />
                              </div>
                              <div className="mb-1">
                                <Field
                                  type="password"
                                  className="form-control border-bottom shadow-none border-0 rounded-0  fs-12"
                                  id="formGroupExampleInput1"
                                  placeholder="Password"
                                  name="password"
                                  required
                                />
                              </div>
                              <div className="text-center">
                                <button
                                  type="button"
                                  className="text-theme1 p-0 border-0 bg-transparent fs-12"
                                >
                                  Forgot Password?
                                </button>
                              </div>
                              <div className="text-center mt-3">
                                <button
                                  type="submit"
                                  className="btn btn-theme1 rounded-pill px-3 text-white fs-14"
                                >
                                  Continue
                                </button>
                              </div>
                            </div>
                          </div>
                        </Form>
                      );
                    }}
                  </Formik>
                </div>
                <div className="text-center pb-3">
                  <div className="textresend">
                    Have trouble logging in?
                    <a
                      className="text-theme1 fw-md-bold text-decoration-none"
                      href="#"
                    >
                      {" "}
                      Get Help
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-12 order-md-2 order-1 ">
              <div className="sideImage  mb-3 mb-sm-0 ">
                <img
                  className="w-100 h-100"
                  src="assets/img/signin/login.jpg"
                  alt
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginWithPassword;
