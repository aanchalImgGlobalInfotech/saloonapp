import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import BusinessFooter from "./BusinessFooter";
import BusinessHeader from "./BusinessHeader";

const SignUpPartnerStepFour = () => {
  const location=useLocation();
  const[userData,setUserData]=useState(location.state)
  console.log(userData)
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
                <ul className="steps step4 list-unstyled d-flex align-items-center justify-content-around position-relative">
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
                        src="assets/img/icon/stepBank.svg"
                        
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
                <div className="text-center">
                  <div className="wish text-success fs-28">Congratulation!</div>
                  <div className="para fs-14">
                    Your Partner Registration has been successfully completed.
                  </div>
                  <div className="para fs-14">
                    Your request is being reviewed by our team. Kindly check
                    your email for confirmation.
                  </div>
                  <div className="para fs-14 mt-5">
                    For any query, please email us at info@saloon.com .
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BusinessFooter />
    </div>
  );
};

export default SignUpPartnerStepFour;
