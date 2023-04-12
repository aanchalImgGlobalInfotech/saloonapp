import React, { useState } from "react";
import BusinessFooter from "./BusinessFooter";
import { Form, Formik, Field } from "formik";
import * as yup from "yup";
import * as Yup from "yup";
import { getData, postData } from "../../components/apiinstance/Api";
import BusinessHeader from "./BusinessHeader";
import { useNavigate } from "react-router-dom";
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const SignUpPartner = () => {
  let navigate=useNavigate()
  const [otp, setOtp] = useState([]);
  const [contactNumber,setContactNumber]=useState('')
  const[otpSend,setOtpSend]=useState(false)
  const[verify,setVerify]=useState(false)
  const[disabled,setDisabled]=useState(true)
  const [initialValues, setInitialValues] = useState({
    brandName: "",
    ownerName: "",
    gender: "",
    email: "",
    password: "",
    confirmPassword: "",
    partnerSize: "",
    category: "",
    state: "",
    city: "",
    zipCode: "",
    fullAddress: "",
  });
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const validationschema = yup.object().shape({
    // contactNumber: yup
    //   .string()
    //   .required("Enter your mobile number")
    //   .length(10, "Please enter a valid mobile number.")
    //   .matches(phoneRegExp, "Please enter a valid mobile number."),
    brandName: Yup.string()
      .min(2, "Too Short!")
      .max(20, "Too Long!")
      .required("Please Enter Brand Name"),
    email: Yup.string().email().required("Please Enter Email"),
    ownerName: Yup.string()
      .min(2, "Too Short!")
      .max(20, "Too Long!")
      .required("Please Enter Owner Name"),
    password: Yup.string()
      .required("Please Enter the password")
      .min(6, "Password is too short - should be 6 chars minimum"),
    confirmPassword: Yup.string()
      .required("Please Enter the password")
      .min(6, "Password is too short - should be 6 chars minimum")
      .matches(initialValues.password, "Password should be same "),
    partnerSize: Yup.string().required("Please Enter Partner Size"),
    category: Yup.string().required("Please Enter Category "),

    state: Yup.string().required("Please Enter state"),
    city: Yup.string().required("Please Enter city"),
    zipCode: Yup.string().required("Please Enter ZipCode"),
    fullAddress: Yup.string().required("Please fill this field"),
    gender: Yup.string().required("Please Enter the Gender"),
  });

  const handleChange = (e) => {
    let a = e.target.value;
    console.log(a);
    setOtp((prev) => prev + a);
    
    if (e.target.name == "otp4") {
      genOtp(e.target.value);
    
    }
  };

  const genOtp = async (digit) => {

    var body = {
      phone:contactNumber ,
      otp:(otp + digit)
      
    };
    const res = await postData("business-otp-verify", body);
    
    console.log(res, "ressssss");
    if (res.status) {
      setOtpSend(false)
      setVerify(true)
    }else{
      setOtp([]);
      setOtpSend(false)
          setDisabled(true)
    }
    console.log(body)
  };

      const otpSending = async() =>{
        var body = {
          phone: contactNumber,
        };
         if(contactNumber !== ''){

           const res = await postData("business-otp-sent", body);
   
           if(res.status){
             setOtpSend(true)
             setDisabled(false)
             console.log('hello otp has been sent')
             setTimeout(()=>{
               setDisabled(true)
               
             },100000)
           }

         }
      
      }
  const handleSubmit = async (value) => {
   
    const data = {
      storeName:value.brandName,
      ownerName:value.ownerName,
      email:value.email,
      password:value.password,
      confromPassword:value.confirmPassword,
      Phone:contactNumber,
      Partner_Size:value.partnerSize,
      category:value.category,
      category:value.category,
      city:value.city,
      pincode:value.zipCode,
      aria:value.fullAddress,
      state:value.state,
      type:value.gender,
    };
      //value.brandName,
      if(verify){

        const res = await postData('business-sign-up', data);
        console.log(value);
        console.log(res);
        if(res.status){
          toast.success(res.message, {
            position: toast.POSITION.TOP_RIGHT,
           
        });
        setTimeout(()=>{

          navigate('/signup-partner-step-one',{
            state:res.data
          })
        },2000)
        }else{
          toast.error(res.message, {
            position: toast.POSITION.TOP_RIGHT,
            
        });
        }
      }
  };
 
  
  return (
    <div className="overflow-hideen vh-100 innerFooter">
      <ToastContainer
      autoClose={1000}
      />
      <BusinessHeader/>
      <div className="signUpPartnermain">
        <div className="container">
          <div className="mainInner">
            <div className="row gap-4">
              <div className="col-12">
                <div className="pageHeading text-center">
                  Partner <span className="text-theme1">Registration</span> Form
                </div>
              </div>
              <div className="col-12">
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationschema}
                  onSubmit={(value) => handleSubmit(value)}
                >
                  {(formik) => {
                    return (
                      <Form className="form">
                        <div className="row gap-4">
                          <div className="col-12">
                            <div className="miniHeading pb-2 border-bottom mb-3">
                              Business Info.
                            </div>
                            <div className="row g-3">
                              <div className="col-lg-4 col-sm-6">
                                <div className="input-group d-block">
                                  <label
                                    htmlFor="brandName"
                                    className="form-label"
                                  >
                                    Brand Name
                                  </label>
                                  <Field
                                    type="text"
                                    name="brandName"
                                    className="form-control m-0 w-100 rounded-1 py-2 ps-3 shadow-none"
                                    id="brandName"
                                    placeholder="Your Brand Name"
                                  />
                                </div>
                                <p className="text-danger text-start">
                                  {formik.touched.brandName && formik.errors.brandName
                                    ? formik.errors.brandName
                                    : ""}
                                </p>
                              </div>
                              <div className="col-lg-4 col-sm-6">
                                <div className="input-group d-block">
                                  <label
                                    htmlFor="ownerName"
                                    className="form-label"
                                  >
                                    Owner name
                                  </label>
                                  <Field
                                    type="text"
                                    name="ownerName"
                                    className="form-control m-0 w-100 rounded-1 py-2 ps-3 shadow-none"
                                    id="ownerName"
                                    placeholder="Owner name"
                                  />
                                </div>
                                <p className="text-danger text-start">
                                  { formik.touched.ownerName && formik.errors.ownerName
                                    ? formik.errors.ownerName
                                    : ""}
                                </p>
                              </div>
                              <div className="col-lg-4 col-sm-6">
                                <div className="input-group d-block">
                                  <label htmlFor className="form-label">
                                    Select Gender
                                  </label>
                                  <Field
                                    as="select"
                                    name="gender"
                                    className="form-select w-100 rounded-1 py-2 ps-3 shadow-none"
                                    aria-label="Default select example"
                                  >
                                    <option selected>Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="unisex">Unisex</option>
                                  </Field>
                                </div>
                                <p className="text-danger text-start">
                                  { formik.touched.gender && formik.errors.gender
                                    ? formik.errors.gender
                                    : ""}
                                </p>
                              </div>
                              <div className="col-lg-4 col-sm-6">
                                <div className="input-group d-block">
                                  <label htmlFor="email" className="form-label">
                                    Your Email
                                  </label>
                                  <Field
                                    type="email"
                                    name="email"
                                    className="form-control m-0 w-100 rounded-1 py-2 ps-3 shadow-none"
                                    id="email"
                                    placeholder="Email"
                                  />
                                </div>
                                <p className="text-danger text-start">
                                  { formik.touched.email && formik.errors.email
                                    ? formik.errors.email
                                    : ""}
                                </p>
                              </div>
                              <div className="col-lg-4 col-sm-6">
                                <div className="input-group d-block">
                                  <label
                                    htmlFor="password"
                                    className="form-label"
                                  >
                                    Password
                                  </label>
                                  <Field
                                    type="password"
                                    name="password"
                                    className="form-control m-0 w-100 rounded-1 py-2 ps-3 shadow-none"
                                    id="password"
                                    placeholder="Password"
                                  />
                                </div>
                                <p className="text-danger text-start">
                                  {  formik.touched.password && formik.errors.password
                                    ? formik.errors.password
                                    : ""}
                                </p>
                              </div>
                              <div className="col-lg-4 col-sm-6">
                                <div className="input-group d-block">
                                  <label
                                    htmlFor="confirmPassword"
                                    className="form-label"
                                  >
                                    Confirm Password
                                  </label>
                                  <Field
                                    type="password"
                                    name="confirmPassword"
                                    className="form-control m-0 w-100 rounded-1 py-2 ps-3 shadow-none"
                                    id="confirmPassword"
                                    placeholder="Confirm Password"
                                  />
                                </div>
                                <p className="text-danger text-start">
                                  { formik.touched.confirmPassword && formik.errors.confirmPassword
                                    ? formik.errors.confirmPassword
                                    : ""}
                                </p>
                              </div>
                              <div className="col-lg-4 col-sm-6">
                                <div className="input-group d-block position-relative overflow-hidden">
                                  <label
                                    htmlFor="contactNumber"
                                    className="form-label"
                                  >
                                    Contact Number
                                  </label>
                                  <input
                                    type="number"
                                    name="contactNumber"
                                    value={contactNumber}
                                    className="form-control m-0 w-100 rounded-1 py-2 ps-3 shadow-none"
                                    id="contactNumber"
                                    minLength={10}
                                    maxLength={10}
                                    placeholder="Contact Number"
                                    onChange={(e)=>setContactNumber(e.target.value)}
                                    disabled={verify}
                                  />
                                  <button
                                    type="button"
                                    className="btn btn-theme1 otpBtn text-white px-3 position-absolute bottom-0 end-0"
                                    onClick={otpSending}
                                    disabled={verify}
                                  >
                                   { verify?'VERIFIED': otpSend ? 'OTP SENT':'SEND OTP'}
                                  </button>
                                </div>
                                
                              </div>
                              <div className={`col-lg-4 col-sm-6  ${otpSend ?'':'d-none'}`}>
                                <div className="input-group d-block overflow-hidden d-flex gap-4 px-xl-5">
                                  <input
                                    type="tel"
                                    className="form-control otpInput text-center m-0 px-0 rounded-0 border-0 border-bottom py-2 shadow-none mb-2"
                                    minLength={1}
                                    maxLength={1}
                                    onChange={handleChange}
                                    name='otp1'
                                    //value={otp.otp1}
                                  />
                                  <input
                                    type="tel"
                                    className="form-control otpInput text-center m-0 px-0 rounded-0 border-0 border-bottom py-2 shadow-none mb-2"
                                    minLength={1}
                                    maxLength={1}
                                    onChange={handleChange}
                                    name='otp2'
                                    //value={otp.otp2}
                                  />
                                  <input
                                    type="tel"
                                    className="form-control otpInput text-center m-0 px-0 rounded-0 border-0 border-bottom py-2 shadow-none mb-2"
                                    minLength={1}
                                    maxLength={1}
                                    onChange={handleChange}
                                    name='otp3'
                                    //value={otp.otp3}
                                  />
                                  <input
                                    type="tel"
                                    className="form-control otpInput text-center m-0 px-0 rounded-0 border-0 border-bottom py-2 shadow-none mb-2"
                                    minLength={1}
                                    maxLength={1}
                                    onChange={handleChange}
                                    name='otp4'
                                    //value={otp.otp4}
                                  />
                                </div>
                                <div className="text-end">
                                  <button
                                    type="button"
                                    className="btn btn-outline-theme1 resendOtp px-2 py-0 fs-12 rounded-0 m-0 shadow-none d-flex align-items-center gap-2 justify-content-end ms-auto "
                                    disabled={!disabled}
                                  >
                                    <div
                                      className="spinner-border text-theme1 fs-12"
                                      role="status"
                                    />
                                    <span>Resend OTP</span>
                                  </button>
                                </div>
                              </div>

                              <div className="col-lg-4 col-sm-6">
                                <div className="input-group d-block">
                                  <label htmlFor className="form-label">
                                    Select Partner Size
                                  </label>
                                  <Field
                                    as="select"
                                    name="partnerSize"
                                    className="form-select w-100 rounded-1 py-2 ps-3 shadow-none"
                                    aria-label="Default select example"
                                  >
                                    <option selected>
                                      COCO (Company owned Company operated)
                                    </option>
                                    <option value={1}>Individual Single</option>
                                    <option value={2}>Individual Chain</option>
                                    <option value={3}>Joint Venture</option>
                                  </Field>
                                </div>
                                <p className="text-danger text-start">
                                  { formik.touched.partnerSize && formik.errors.partnerSize
                                    ? formik.errors.partnerSize
                                    : ""}
                                </p>
                              </div>
                              <div className="col-lg-4 col-sm-6">
                                <div className="input-group d-block">
                                  <label htmlFor className="form-label">
                                    Select Category Type
                                  </label>
                                  <Field
                                    as="select"
                                    name="category"
                                    className="form-select w-100 rounded-1 py-2 ps-3 shadow-none"
                                    aria-label="Default select example"
                                  >
                                    <option selected>
                                      Select Category Type
                                    </option>
                                    <option value={1}>SPA</option>
                                    <option value={2}>Parlor</option>
                                    <option value={3}>Saloon</option>
                                    <option value={4}>Packages</option>
                                  </Field>
                                </div>
                                <p className="text-danger text-start">
                                  { formik.touched.category && formik.errors.category
                                    ? formik.errors.category
                                    : ""}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="miniHeading pb-2 border-bottom mb-3">
                              Address Info.
                            </div>
                            <div className="row g-3">
                              <div className="col-lg-4 col-sm-6">
                                <div className="input-group d-block">
                                  <label
                                    htmlFor="Locality"
                                    className="form-label"
                                  >
                                    State
                                  </label>
                                  <Field
                                    type="text"
                                    name="state"
                                    className="form-control m-0 w-100 rounded-1 py-2 ps-3 shadow-none"
                                    id="Locality"
                                    placeholder="State"
                                  />
                                </div>
                                <p className="text-danger text-start">
                                  {formik.touched.state && formik.errors.state
                                    ? formik.errors.state
                                    : ""}
                                </p>
                              </div>
                              <div className="col-lg-4 col-sm-6">
                                <div className="input-group d-block">
                                  <label htmlFor className="form-label">
                                    City
                                  </label>
                                  <Field
                                    as="select"
                                    name="city"
                                    className="form-select w-100 rounded-1 py-2 ps-3 shadow-none"
                                    aria-label="Default select example"
                                  >
                                    <option selected>City</option>
                                    <option value={1}>Jaipur</option>
                                    <option value={2}>Banglor</option>
                                    <option value={3}>Delhi</option>
                                  </Field>
                                </div>
                                <p className="text-danger text-start">
                                  { formik.touched.city && formik.errors.city ? formik.errors.city : ""}
                                </p>
                              </div>
                              <div className="col-lg-4 col-sm-6">
                                <div className="input-group d-block">
                                  <label
                                    htmlFor="zipCode"
                                    className="form-label"
                                  >
                                    Zipcode
                                  </label>
                                  <Field
                                    type="number"
                                    name="zipCode"
                                    className="form-control m-0 w-100 rounded-1 py-2 ps-3 shadow-none"
                                    id="zipCode"
                                    placeholder="Zipcode"
                                  />
                                </div>
                                <p className="text-danger text-start">
                                  { formik.touched.zipCode &&  formik.errors.zipCode
                                    ? formik.errors.zipCode
                                    : ""}
                                </p>
                              </div>
                              <div className="col-12">
                                <div className="input-group d-block">
                                  <label
                                    htmlFor="address"
                                    className="form-label"
                                  >
                                    Full Address
                                  </label>
                                  <Field
                                    type="text"
                                    name="fullAddress"
                                    className="form-control m-0 w-100 rounded-1 py-2 ps-3 shadow-none"
                                    id="address"
                                    placeholder="Full Address..."
                                  />
                                </div>
                                <p className="text-danger text-start">
                                  {  formik.touched.fullAddress && formik.errors.fullAddress
                                    ? formik.errors.fullAddress
                                    : ""}
                                </p>
                              </div>
                              <div className="col-12 justify-content-between d-flex">
                                <button
                                  type="button"
                                  className="btn btn-dark rounded-1 m-0 fs-14"
                                >
                                  Auto Locate
                                </button>
                                <button
                                  type="submit"
                                  className="btn btn-theme1 text-white rounded-1 m-0 fs-14"
                                >
                                  Save
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
      <BusinessFooter />
    </div>
  );
};

export default SignUpPartner;
