import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { postData } from "../../components/apiinstance/Api";
import { setUsers } from "../../components/redux/redux1/actions";
import Footer from "../../common/layout/footer/footer";
import { ToastContainer, toast } from "react-toastify";

function Verifyotp() {
  let location = useLocation();
  const dispatch = useDispatch();
  console.log(location.state);
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(1);
 const phoneNum = localStorage.getItem('phone')
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      console.log("first");
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
  }, [seconds]);

  const resendOTP = async(e) => {
    var body = {
      phone: phoneNum,
    };
    const res = await postData("login", body);
    setMinutes(1);
    setSeconds(1);
  };
  const handleChange = (e) => {
    let a = e.target.value;
    console.log('ototototppp', a)
    console.log(a);
    setOtp((prev) => prev + a);
    if (e.target.name == "otp4") {
      genOtp(e.target.value);
    }
  };

  const genOtp = async (digit) => {
    var body = {
      otp: Number(otp + digit),
      phone: phoneNum,
    };
    const res = await postData("login-otp-verify", body);
    if(res.status){
      toast.success(res.message,{
        position: toast.POSITION.TOP_RIGHT,})
        dispatch(setUsers(res.data));
        setTimeout(() => {
          navigate("/Dashboard");
        }, 2000);
    }else{
       toast.error(res.message,{
        position:toast.POSITION.TOP_RIGHT
       })
    }
    let token = localStorage.setItem("token", res?.data[1]?.auth);
    console.log(res, "ressssss56789");
    setMinutes(0);
    setSeconds(0);
  };



  return (
    <div>
      <div className="container-fluid login px-lg-5">
      <ToastContainer
        autoClose ='2000'/>
        <div className="login2 h-100">
          <div className="row h-100 align-items-center">
            <div className="col-md-5 col-12  order-md-1 order-2 h-100 d-flex flex-column justify-content-center mt-5 px-sm-5">
              <div className="text-center text-md-start leftsidesection px-0 px-xl-5 mx-xl-5 mx-0">
                <div className="d-flex align-items-center justify-content-center justify-content-md-start hedtext mb-4">
                  <span className="pe-2">
                    <img src="assets/img/signin/iconimage.png" alt />
                  </span>
                  Saloon
                </div>
                <div className="h3 text-theme1 mb-4 subheading">
                  Verify with OTP
                </div>
                <div className=" text-theme2 mb-4 textp">
                  Sent to {location.state}
                </div>
                <form action>
                  <div className="my-4 optsection">
                    <div
                      id="otp"
                      className="inputs d-flex flex-row justify-content-center justify-content-md-start mt-2 gap-sm-2"
                    >
                      <input
                        className="m-2 text-center form-control rounded formotp"
                        // value={otp}
                        name="otp1"
                        onChange={handleChange}
                        type="text"
                        id="first"
                        maxLength={1}
                      />
                      <input
                        className="m-2 text-center form-control rounded formotp"
                        // value={otp}
                        name="otp2"
                        onChange={handleChange}
                        type="text"
                        id="second"
                        maxLength={1}
                      />
                      <input
                        className="m-2 text-center form-control rounded formotp"
                        // value={otp}
                        name="opt3"
                        onChange={handleChange}
                        type="text"
                        id="third"
                        maxLength={1}
                      />
                      <input
                        className="m-2 text-center form-control rounded formotp"
                        // value={otp}
                        name="otp4"
                        onChange={handleChange}
                        type="text"
                        id="fourth"
                        maxLength={1}
                      />
                    </div>

                    {seconds > 0 || minutes > 0 ? (
                      <p>
                        Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}
                        :{seconds < 10 ? `0${seconds}` : seconds}
                      </p>
                    ) : (
                      <div>
                        <p>Didn't recieve otp?</p>
                        <div className="text-center my-3">
                          <button
                            className="recendtext text-center  border-0 "
                            disabled={seconds > 0 || minutes > 0}
                            style={{
                              color:
                                seconds > 0 || minutes > 0
                                  ? "#DFE3E8"
                                  : "#FF5630",
                            }}
                            onClick={() => {resendOTP(); setOtp('');}}
                          >
                            Resend OTP
                          </button>
                        </div>
                      </div>
                    )}

                    <div className="or-border position-relative text-theme1">
                      <span>or</span>
                    </div>
                    <div className="my-3 text-center">
                      <a
                        className="text-theme1 recendtext text-decoration-none"
                        href="login.html"
                      >
                        Log In using Password
                      </a>
                    </div>
                  </div>
                </form>
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
}

export default Verifyotp;
