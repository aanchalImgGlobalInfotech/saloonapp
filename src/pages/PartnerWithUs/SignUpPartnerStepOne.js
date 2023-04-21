import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BusinessFooter from "./BusinessFooter";
import BusinessHeader from "./BusinessHeader";
import {Formik,Form,Field} from 'formik'
import { postData } from "../../components/apiinstance/Api";
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import * as yup from "yup";
import * as Yup from "yup";

const SignUpPartnerStepOne = () => {
  let location=useLocation()
  const[userData,setUserData]=useState(location?.state?location.state[0]:'')
  let navigate = useNavigate();
  const[initialValues,setInitialValues]=useState({
    yourService:'',
    alternateNumber:'',
    openingTiming:'',
    closingTiming:'',
    workingDays:[ ],
    facebookProfile:'',
    instagramProfile:'',
    websiteUrl:'',
    amenities:[]
  })

  const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const validationschema = yup.object().shape({
  // contactNumber: yup
  //   .string()
  //   .required("Enter your mobile number")
  //   .length(10, "Please enter a valid mobile number.")
  //   .matches(phoneRegExp, "Please enter a valid mobile number."),
  yourService: Yup.string()
    
    .required("Please Enter Mobile Number"),
  alternateNumber: yup
      .string()
      .required("Enter your mobile number")
      .length(10, "Please enter a valid mobile number.")
      .matches(phoneRegExp, "Please enter a valid mobile number."),
 
    openingTiming: Yup.string().required("Please Enter Open Time"),
    closingTiming: Yup.string().required("Please Enter Close Time "),

    amenities:  Yup.array().min(1).of(yup.string().required()).required('Please Enter Amenities'),
    workingDays:  Yup.array().min(1).of(yup.string().required()).required('Please Enter Working Days '),
  
});
  const handleSubmit = async(value) => {
    //navigate("/signup-partner-step-two");
    console.log('asdadadadadadadd')
    const  data={
        yourService:value.yourService,
        alternatePhone:value.alternateNumber,
        starting_time:value.openingTiming,
        ending_time:value.closingTiming,
        workingday:value.workingDays,
        FaceBookProfile:value.facebookProfile,
        instaProfile:value.instaProfile,
        webProfile:value.websiteUrl,
        amenities:value.amenities
      }
      const res= await postData(`business-profile-info?id=${userData._id}`,data)
      if(res.status){
        toast.success(res.message, {
          position: toast.POSITION.TOP_RIGHT,
         
      });
        setTimeout(()=>{

          navigate("/signup-partner-step-two",{
            state:userData
          });
        },2000)
      }else{
        toast.error(res.message, {
          position: toast.POSITION.TOP_RIGHT,
          
      });
      }
      console.log(res)
  };
  console.log(userData)
  return (
    <div className="overflow-hideen vh-100 innerFooter">
      <ToastContainer
        autoClose={1000}
        ></ToastContainer>
      <BusinessHeader />
      <div className="signUpPartnermain">
        <div className="container">
          <div className="mainInner">
            <div className="row gap-4">
              <div className="col-12">
                <div className="pageHeading text-center">{userData?.storeName}</div>
                <div className="subHeading fs-20 fw-medium text-center text-theme1">
                  Partner Registration Form - 2
                </div>
                <div className="subHeadingSecond fw-medium text-center">
                  Please fill the given filds.
                </div>
              </div>
              <div className="col-12">
                <ul className="steps step1 list-unstyled d-flex align-items-center position-relative">
                  <li className="step text-center w-25">
                    <div className="imgOuter mx-auto rounded-circle border border-dark bg-white d-flex align-items-center justify-content-center">
                      <img
                        className="w-100"
                        src="assets/img/icon/stepUser.svg"
                        
                      />
                    </div>
                    <div className="title fs-14 mt-1">Profile</div>
                  </li>
                  <li className="step text-center w-25">
                    <div className="imgOuter mx-auto rounded-circle border border-dark bg-white d-flex align-items-center justify-content-center">
                      <img
                        className="w-100"
                        src="/assets/img/icon/stepBank.svg"
                        
                      />
                    </div>
                    <div className="title fs-14 mt-1">Bank</div>
                  </li>
                  <li className="step text-center w-25">
                    <div className="imgOuter mx-auto rounded-circle border border-dark bg-white d-flex align-items-center justify-content-center">
                      <img
                        className="w-100"
                        src="assets/img/icon/stepIdCard.svg"
                        
                      />
                    </div>
                    <div className="title fs-14 mt-1">Documents</div>
                  </li>
                  <li className="step text-center w-25">
                    <div className="imgOuter mx-auto rounded-circle border border-dark bg-white d-flex align-items-center justify-content-center">
                      <img
                        className="w-100"
                        src="assets/img/icon/stepConfirmation.svg"
                        
                      />
                    </div>
                    <div className="title fs-14 mt-1">Confirmation</div>
                  </li>
                </ul>
              </div>
              <div className="col-12">
                <Formik
                initialValues={initialValues}
                validationSchema={validationschema}
                onSubmit={(value)=>handleSubmit(value)}
                >
                  {(formik) => {
                    return (
                      <Form className="form">
                        <div className="row gap-4">
                          <div className="col-12">
                            <div className="miniHeading mb-3">
                              Profile Information:
                            </div>
                            <div className="row g-3">
                              <div className="col-sm-6">
                                <div className="input-group d-block">
                                  <label
                                    htmlFor="services"
                                    className="form-label"
                                  >
                                    Your Services
                                  </label>
                                  <Field
                                    type="text"
                                    className="form-control m-0 w-100 rounded-1 py-2 ps-3 shadow-none"
                                    id="services"
                                    placeholder="Your Services"
                                    name='yourService'
                                  />
                                </div>
                                <p className="text-danger text-start">
                                  {formik.touched.yourService && formik.errors.yourService
                                    ? formik.errors.yourService
                                    : ""}
                                </p>
                              </div>
                              <div className="col-sm-6">
                                <div className="input-group d-block">
                                  <label
                                    htmlFor="alternatePhone"
                                    className="form-label"
                                  >
                                    Alternate Phone
                                  </label>
                                  <Field
                                    type="number"
                                    className="form-control m-0 w-100 rounded-1 py-2 ps-3 shadow-none"
                                    id="alternatePhone"
                                    placeholder="Alternate Phone"
                                    name='alternateNumber'
                                  />
                                </div>
                                <p className="text-danger text-start">
                                  {formik.touched.alternateNumber && formik.errors.alternateNumber
                                    ? formik.errors.alternateNumber
                                    : ""}
                                </p>
                              </div>
                              <div className="col-sm-6">
                                <div className="input-group d-block">
                                  <label  className="form-label">
                                    Opening Time
                                  </label>
                                  <Field
                                     as='select'
                                    className="form-select w-100 rounded-1 py-2 ps-3 shadow-none"
                                    aria-label="Opening Time"
                                    name='openingTiming'
                                  >
                                    <option selected>Opening Time</option>
                                    <option value='09:30 AM'>9:30AM</option>
                                    <option value='10:00 AM'>10:00AM</option>
                                    <option value='10:30 AM'>10:30AM</option>
                                  </Field>
                                </div>
                                <p className="text-danger text-start">
                                  {formik.touched.openingTiming && formik.errors.openingTiming
                                    ? formik.errors.openingTiming
                                    : ""}
                                </p>
                              </div>
                              <div className="col-sm-6">
                                <div className="input-group d-block">
                                  <label  className="form-label">
                                    Closing Time
                                  </label>
                                  <Field
                                    as='select'
                                    className="form-select w-100 rounded-1 py-2 ps-3 shadow-none"
                                    aria-label="Closing Time"
                                    name='closingTiming'
                                  >
                                    <option selected>Closing Time</option>
                                    <option value='07:00 PM'>7:00PM</option>
                                    <option value='08:00 PM'>8:00PM</option>
                                    <option value='09:00 PM'>9:00PM</option>
                                  </Field>
                                </div>
                                <p className="text-danger text-start">
                                  {formik.touched.closingTiming && formik.errors.closingTiming
                                    ? formik.errors.closingTiming
                                    : ""}
                                </p>
                              </div>
                              <div className="col-12 mt-4">
                                <div className="miniHeading mb-2">
                                  Working Days:
                                </div>
                                <div className="d-md-flex align-items-center gap-3">
                                  <div className="form-check d-inline-flex me-3 gap-2">
                                    <Field
                                      className="form-check-input shadow-none rounded-1"
                                      type="checkbox"
                                      name="workingDays"
                                      id="monday"
                                      value='Monday'
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="monday"
                                    >
                                      Monday
                                    </label>
                                  </div>
                                  <div className="form-check d-inline-flex me-3 gap-2">
                                    <Field
                                      className="form-check-input shadow-none"
                                      type="checkbox"
                                      name="workingDays"
                                      id="tuesday"
                                      value='Tuesday'
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="tuesday"
                                    >
                                      Tuesday
                                    </label>
                                  </div>
                                  <div className="form-check d-inline-flex me-3 gap-2">
                                    <Field
                                      className="form-check-input shadow-none"
                                      type="checkbox"
                                      name="workingDays"
                                      id="wednesday"
                                      value='Wednesday'
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="wednesday"
                                    >
                                      Wednesday
                                    </label>
                                  </div>
                                  <div className="form-check d-inline-flex me-3 gap-2">
                                    <Field
                                      className="form-check-input shadow-none"
                                      type="checkbox"
                                      name="workingDays"
                                      id="thursday"
                                      value='Thursday'
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="thursday"
                                    >
                                      Thursday
                                    </label>
                                  </div>
                                  <div className="form-check d-inline-flex me-3 gap-2">
                                    <Field
                                      className="form-check-input shadow-none"
                                      type="checkbox"
                                      name="workingDays"
                                      id="friday"
                                      value='Friday'
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="friday"
                                    >
                                      Friday
                                    </label>
                                  </div>
                                  <div className="form-check d-inline-flex me-3 gap-2">
                                    <Field
                                      className="form-check-input shadow-none"
                                      type="checkbox"
                                      name="workingDays"
                                      id="saturday"
                                      value='Saturday'
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="saturday"
                                    >
                                      Saturday
                                    </label>
                                  </div>
                                  <div className="form-check d-inline-flex me-3 gap-2">
                                    <Field
                                      className="form-check-input shadow-none"
                                      type="checkbox"
                                      name="workingDays"
                                      id="sunday"
                                      value='Sunday'
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="sunday"
                                    >
                                      Sunday
                                    </label>
                                  </div>
                                </div>
                                <p className="text-danger text-start">
                                  {formik.touched.workingDays && formik.errors.workingDays
                                    ? formik.errors.workingDays
                                    : ""}
                                </p>
                              </div>
                              <div className="col-lg-4 col-sm-6">
                                <div className="input-group d-block">
                                  <label
                                    htmlFor="facebookUrl"
                                    className="form-label"
                                  >
                                    Facebook Profile Link
                                  </label>
                                  <Field
                                    type="text"
                                    className="form-control m-0 w-100 rounded-1 py-2 ps-3 shadow-none"
                                    id="facebookUrl"
                                    placeholder="Facebook Profile Link"
                                    name='facebookProfile'
                                    
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-sm-6">
                                <div className="input-group d-block">
                                  <label
                                    htmlFor="instagramUrl"
                                    className="form-label"
                                  >
                                    Instrgram Profile Link
                                  </label>
                                  <Field
                                    type="text"
                                    className="form-control m-0 w-100 rounded-1 py-2 ps-3 shadow-none"
                                    id="instagramUrl"
                                    placeholder="Instrgram Profile Link"
                                    name='instagramProfile'
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-sm-6">
                                <div className="input-group d-block">
                                  <label
                                    htmlFor="websiteUrl"
                                    className="form-label"
                                  >
                                    Your Website Link
                                  </label>
                                  <Field
                                    type="text"
                                    className="form-control m-0 w-100 rounded-1 py-2 ps-3 shadow-none"
                                    id="websiteUrl"
                                    placeholder="Your Website Link"
                                    name='websiteUrl'
                                  />
                                </div>
                              </div>
                              <div className="col-12 mt-4">
                                <div className="miniHeading mb-2">
                                  Amenities:
                                </div>
                                <div className="d-md-flex align-items-center gap-3">
                                  <div className="form-check  d-inline-flex me-3 gap-2">
                                    <Field
                                      className="form-check-input shadow-none rounded-1"
                                      type="checkbox"
                                      name="amenities"
                                      id="cctv"
                                      value='cctv'
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="cctv"
                                    >
                                      CCTV
                                    </label>
                                  </div>
                                  <div className="form-check  d-inline-flex me-3 gap-2">
                                    <Field
                                      className="form-check-input shadow-none"
                                      type="checkbox"
                                      name="amenities"
                                      id="cardPayment"
                                      value='card payment'
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="cardPayment"
                                    >
                                      Card Payment
                                    </label>
                                  </div>
                                  <div className="form-check  d-inline-flex me-3 gap-2">
                                    <Field
                                      className="form-check-input shadow-none"
                                      type="checkbox"
                                      name="amenities"
                                      id="parking"
                                      value='parking'
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="parking"
                                    >
                                      Parking
                                    </label>
                                  </div>
                                  <div className="form-check  d-inline-flex me-3 gap-2">
                                    <Field
                                      className="form-check-input shadow-none"
                                      type="checkbox"
                                      name="amenities"
                                      id="tv"
                                      value='tv'

                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="tv"
                                    >
                                      TV
                                    </label>
                                  </div>
                                  <div className="form-check  d-inline-flex me-3 gap-2">
                                    <Field
                                      className="form-check-input shadow-none"
                                      type="checkbox"
                                      name="amenities"
                                      id="ac"
                                      value='ac'
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="ac"
                                    >
                                      AC
                                    </label>
                                  </div>
                                  <div className="form-check  d-inline-flex me-3 gap-2">
                                    <Field
                                      className="form-check-input shadow-none"
                                      type="checkbox"
                                      name="amenities"
                                      id="wifi"
                                      value='wi-fi'
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="wifi"
                                    >
                                      WiFi
                                    </label>
                                  </div>
                                  <div className="form-check  d-inline-flex me-3 gap-2">
                                    <Field
                                      className="form-check-input shadow-none"
                                      type="checkbox"
                                      name="amenities"
                                      id="beverage"
                                      value='beverage'
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="beverage"
                                    >
                                      Beverage
                                    </label>
                                  </div>
                                  <p className="text-danger text-start">
                                  {formik.touched.amenities && formik.errors.amenities
                                    ? formik.errors.amenities
                                    : ""}
                                </p>
                                </div>
                              </div>
                              <div className="col-12 justify-content-sm-end justify-content-center d-flex gap-3">
                                {/* <button
                            type="button"
                            className="btn btn-dark rounded-1 m-0 fs-14"
                          >
                            Save
                          </button> */}
                                <button
                                  type="submit"
                                  className="btn btn-theme1 text-white rounded-1 m-0 fs-14"
                                  
                                >
                                  Save and Continue
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

export default SignUpPartnerStepOne;
