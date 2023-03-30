import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import BusinessFooter from "./BusinessFooter";
import BusinessHeader from "./BusinessHeader";
import { Formik, Form, Field } from "formik";
import { postData } from "../../components/apiinstance/Api";

const SignUpPartnerStepTwo = () => {
   const navigate=useNavigate()
   const location=useLocation()
   const[userData,setUserData]=useState(location.state)
  const [initialValues, setInitialValues] = useState({
    panNumber: "",
    gstNumber: "",
    bankName: "",
    branchName: "",
    accountNumber: "",
    accountHolder: "",
    ifscCode: "",
    kyc: "",
  });
  

      const submitHandler = async(value) =>{
        const data={
          panNo: value.panNumber,
          gstNo: value.gstNumber,
          bankName: value.bankName,
          branchName:value.branchName ,
          accountNo:value.accountNo,
          accoutHolder:value.accountHolder,
          ifscCode: value.ifscCode,
          kyc: value.kyc
        }
         const res = await postData(`business-bank-information?id=${userData._id}`,data)
          if(res.status){
             navigate('/signup-partner-step-three',{
              state:userData
             })
          }
      }
    
  return (
    <div className="overflow-hideen vh-100 innerFooter">
      <BusinessHeader />
      <div className="signUpPartnermain">
        <div className="container">
          <div className="mainInner">
            <div className="row gap-4">
              <div className="col-12">
                <div className="pageHeading text-center">{userData.storeName}</div>
                <div className="subHeading fs-20 fw-medium text-center text-theme1">
                  Partner Registration Form - 2
                </div>
                <div className="subHeadingSecond fw-medium text-center">
                  Please fill the given filds.
                </div>
              </div>
              <div className="col-12">
                <ul className="steps step2 list-unstyled d-flex align-items-center justify-content-around position-relative">
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
                  {(formik) => {
                    return (
                      <Form className="form">
                        <div className="row gap-4">
                          <div className="col-12">
                            <div className="miniHeading mb-3">
                              Bank Information:
                            </div>
                            <div className="row g-3">
                              <div className="col-sm-6">
                                <div className="input-group d-block">
                                  <label
                                    htmlFor="panNumber"
                                    className="form-label"
                                  >
                                    Pan No.
                                  </label>
                                  <Field
                                    type="text"
                                    className="form-control m-0 w-100 rounded-1 py-2 ps-3 shadow-none"
                                    id="panNumber"
                                    placeholder="Pan Number"
                                    name='panNumber'
                                  />
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="input-group d-block">
                                  <label
                                    htmlFor="gstNumber"
                                    className="form-label"
                                  >
                                    GST No.
                                  </label>
                                  <Field
                                    type="text"
                                    className="form-control m-0 w-100 rounded-1 py-2 ps-3 shadow-none"
                                    id="gstNumber"
                                    placeholder="GST Number"
                                    name='gstNumber'
                                  />
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="input-group d-block">
                                  <label htmlFor className="form-label">
                                    Bank Name
                                  </label>
                                  <Field
                                    className="form-select w-100 rounded-1 py-2 ps-3 shadow-none"
                                    aria-label="Bank Name"
                                    as='select'
                                    name='bankName'
                                  >
                                    <option selected>Select Bank</option>
                                    <option value='State Bank'>State Bank</option>
                                    <option value='HDFC Bank'>HDFC Bank</option>
                                    <option value='ICICI Bank'>ICICI Bank</option>
                                  </Field>
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="input-group d-block">
                                  <label
                                    htmlFor="branchName"
                                    className="form-label"
                                  >
                                    Branch Name
                                  </label>
                                 <Field
                                    className="form-select w-100 rounded-1 py-2 ps-3 shadow-none"
                                    aria-label="Bank Name"
                                    as='select'
                                    name='branchName'
                                  >
                                    <option selected>Select Branch</option>
                                    <option value='Delhi'>Delhi</option>
                                    <option value='Mumbai'>Mumbai</option>
                                    <option value='Pune'>Pune</option>
                                  </Field>
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="input-group d-block">
                                  <label
                                    htmlFor="accountNumber"
                                    className="form-label"
                                  >
                                    Account Number
                                  </label>
                                  <Field
                                    type="number"
                                    className="form-control m-0 w-100 rounded-1 py-2 ps-3 shadow-none"
                                    id="accountNumber"
                                    placeholder="Account Number"
                                    name='accountNumber'
                                  />
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="input-group d-block">
                                  <label
                                    htmlFor="accountHolder"
                                    className="form-label"
                                  >
                                    Account Holder
                                  </label>
                                  <Field
                                    type="text"
                                    className="form-control m-0 w-100 rounded-1 py-2 ps-3 shadow-none"
                                    id="accountHolder"
                                    placeholder="Account Holder"
                                    name='accountHolder'
                                  />
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="input-group d-block">
                                  <label
                                    htmlFor="ifscCode"
                                    className="form-label"
                                  >
                                    IFSC Code
                                  </label>
                                  <Field
                                    type="text"
                                    className="form-control m-0 w-100 rounded-1 py-2 ps-3 shadow-none"
                                    id="ifscCode"
                                    placeholder="IFSC Code"
                                    name='ifscCode'
                                  />
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="input-group d-block">
                                  <label htmlFor="kyc" className="form-label">
                                    KYC (If any)
                                  </label>
                                  <Field
                                    type="text"
                                    className="form-control m-0 w-100 rounded-1 py-2 ps-3 shadow-none"
                                    id="kyc"
                                    placeholder="KYC"
                                    name='kyc'
                                  />
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="row g-3">
                                  <div className="col d-flex justify-content-between">
                                    <button
                                      type="button"
                                      className="btn btn-dark rounded-1 m-0 fs-12"
                                    >
                                      Back
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-dark rounded-1 m-0 fs-12 d-sm-none"
                                    >
                                      Save
                                    </button>
                                  </div>
                                  <div className="col-sm-auto d-flex gap-sm-3 gap-2 justify-content-between">
                                    {/* <button type="button" className="btn btn-dark rounded-1 m-0 fs-12 d-none d-sm-block">Save</button> */}
                                    
                                      <button
                                        type="submit"
                                        className="btn btn-theme1 text-white rounded-1 m-0 fs-12 order-2 order-sm-1"
                                      >
                                        Save and Continue
                                      </button>
                                    
                                    <Link to="/signup-partner-step-three">
                                      <button
                                        type="button"
                                        className="btn btn-dark rounded-1 m-0 fs-12 order-1 order-sm-2"
                                      >
                                        Skip
                                      </button>
                                    </Link>
                                  </div>
                                </div>
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

export default SignUpPartnerStepTwo;
