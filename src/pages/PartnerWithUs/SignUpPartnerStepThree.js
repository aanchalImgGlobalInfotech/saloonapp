import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import BusinessFooter from "./BusinessFooter";
import BusinessHeader from "./BusinessHeader";
import {Formik,Form,Field} from 'formik'
import { postData, postformdata } from "../../components/apiinstance/Api";
import axios from 'axios'


const SignUpPartnerStepThree = () => {
  const navigate=useNavigate()
  const location=useLocation()
  const[userData,setUserData]=useState(location.state)
  const[initialValues,setInitialValues]=useState({
        BannerLogo:'',
        logoImage:'',
        panImage:'',
        businessCertificate:''   
  });

  const submitHandler = async( value ) =>{
        
    var formdata = new FormData();

    for (var key in value) {
      formdata.append(key, value[key]);
    }
   
   const response = await postformdata(`business-uplode-document?id=${userData._id}`,formdata)
    if(response.status){
     navigate('/signup-partner-confirmation',{
       state:userData
     })
    }
    console.log(response,'uuu')
  }

 
  return (
    <div className="overflow-hideen vh-100 innerFooter">
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
                <ul className="steps step3 list-unstyled d-flex align-items-center justify-content-around position-relative">
                  <li className="step text-center w-25">
                    <div className="imgOuter mx-auto rounded-circle border border-dark bg-white d-flex align-items-center justify-content-center">
                      <img
                        className="w-100"
                        src="assets/img/icon/stepUser.svg"
                        alt
                      />
                    </div>
                    <div className="title fs-14 mt-1">Profile</div>
                  </li>
                  <li className="step text-center w-25">
                    <div className="imgOuter mx-auto rounded-circle border border-dark bg-white d-flex align-items-center justify-content-center">
                      <img
                        className="w-100"
                        src="assets/img/icon/stepBank.svg"
                        alt
                      />
                    </div>
                    <div className="title fs-14 mt-1">Bank</div>
                  </li>
                  <li className="step text-center w-25">
                    <div className="imgOuter mx-auto rounded-circle border border-dark bg-white d-flex align-items-center justify-content-center">
                      <img
                        className="w-100"
                        src="assets/img/icon/stepIdCard.svg"
                        alt
                      />
                    </div>
                    <div className="title fs-14 mt-1">Documents</div>
                  </li>
                  <li className="step text-center w-25">
                    <div className="imgOuter mx-auto rounded-circle border border-dark bg-white d-flex align-items-center justify-content-center">
                      <img
                        className="w-100"
                        src="assets/img/icon/stepConfirmation.svg"
                        alt
                      />
                    </div>
                    <div className="title fs-14 mt-1">Confirmation</div>
                  </li>
                </ul>
              </div>
              <div className="col-12">
                <Formik
                 initialValues={initialValues}
                 onSubmit={(value)=>submitHandler(value)}
                
                >
                  {
                    (props)=>{ 
                      return(
                        <Form className="form"   > 
                            
                  <div className="row gap-4">
                    <div className="col-12">
                      <div className="miniHeading mb-3">Upload Document:</div>
                      <div className="row g-3">
                        <div className="col-sm-6">
                          <div className="input-group d-block">
                            <label htmlFor="bannerImage" className="form-label">
                              Banner Image
                            </label>
                            <div className=" position-relative">
                              <input
                                type="file"
                                className="form-control m-0 w-100 rounded-1 py-2 ps-3 shadow-none"
                                id="bannerImage"
                                name='BannerLogo'
                               
                                onChange={(event) => {
                                  props.setTouched({
                                    ...props.touched,
                                    BannerLogo: true,
                                  });
                                  props.setFieldValue(
                                    "BannerLogo",
                                    event.target.files[0],
                                  );
                                }}
                              />
                              {/* <button
                                type="button"
                                className="btn btn-theme1 text-white rounded-1 m-0 fs-14 px-4 position-absolute top-0 bottom-0 end-0"
                              >
                                Upload
                              </button> */}
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="input-group d-block">
                            <label htmlFor="logoImg" className="form-label">
                              Logo Image (100×100)
                            </label>
                            <div className=" position-relative">
                              <input
                                type="file"
                                className="form-control m-0 w-100 rounded-1 py-2 ps-3 shadow-none"
                                id="logoImg"
                                name='logoImage'
                                onChange={(event) => {
                                  props.setTouched({
                                    ...props.touched,
                                    logoImage: true,
                                  });
                                  props.setFieldValue(
                                    "logoImage",
                                    event.target.files[0],
                                  );
                                }}
                              />
                              {/* <button
                                type="button"
                                className="btn btn-theme1 text-white rounded-1 m-0 fs-14 px-4 position-absolute top-0 bottom-0 end-0"
                              >
                                Upload
                              </button> */}
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="input-group d-block">
                            <label htmlFor="panImage" className="form-label">
                              Pan Image (400×400)
                            </label>
                            <div className=" position-relative">
                              <input
                                type="file"
                                className="form-control m-0 w-100 rounded-1 py-2 ps-3 shadow-none"
                                id="panImage"
                                name='panImage'
                                onChange={(event) => {
                                  props.setTouched({
                                    ...props.touched,
                                    panImage: true,
                                  });
                                  props.setFieldValue(
                                    "panImage",
                                    event.target.files[0],
                                  );
                                }}
                              />
                              {/* <button
                                type="button"
                                className="btn btn-theme1 text-white rounded-1 m-0 fs-14 px-4 position-absolute top-0 bottom-0 end-0"
                              >
                                Upload
                              </button> */}
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="input-group d-block">
                            <label htmlFor="bannerImage" className="form-label">
                              Business Certificate (Allow PDF)
                            </label>
                            <div className=" position-relative">
                              <input
                                type="file"
                                className="form-control m-0 w-100 rounded-1 py-2 ps-3 shadow-none"
                                id="bannerImage"
                                name='businessCertificate'
                                onChange={(event) => {
                                  props.setTouched({
                                    ...props.touched,
                                    businessCertificate: true,
                                  });
                                  props.setFieldValue(
                                    "businessCertificate",
                                    event.target.files[0],
                                  );
                                }}
                                
                              />
                              <Link to='/signup-partner-confirmation'>
                              {/* <button
                                type="button"
                                className="btn btn-theme1 text-white rounded-1 m-0 fs-14 px-4 position-absolute top-0 bottom-0 end-0"
                              >
                                Upload
                              </button> */}
                              </Link>
                            </div>
                          </div>
                        </div>
                        
                        <div className="col-12">
                          <div className="row">
                            <div className="col">
                              <button
                                type="button"
                                className="btn btn-dark rounded-1 m-0 fs-14"
                              >
                                Back
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                    <div className="row g-3">
                      <div className="col d-flex justify-content-between">
                      </div>
                      <div className="col-sm-auto d-flex gap-sm-3 gap-2 justify-content-between">
                        <button type="submit" className="btn btn-theme1 text-white rounded-1 m-0 fs-12 order-2 order-sm-1">Upload and Continue</button>
                      </div>
                    </div>
                  </div>
                      </div>
                    </div>
                  </div>
                
                        </Form>
                      )
                    }
                  }
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

export default SignUpPartnerStepThree;
