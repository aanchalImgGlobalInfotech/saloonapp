import React, { useState } from 'react'
import BusinessFooter from '../PartnerWithUs/BusinessFooter'
import BusinessHeader from '../PartnerWithUs/BusinessHeader'
import { Formik,Form,Field } from 'formik'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
import * as Yup from "yup";
import { postData } from '../../components/apiinstance/Api';
import { useNavigate } from 'react-router-dom';



const ArtistRegistration = () => {
  const  navigate=useNavigate()
 const[initialValue,setInitialValue]=useState({
    name:'',
    mobile:'',
    email:'',
    location:''
})

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const validationschema = yup.object().shape({
  mobile: yup
    .string()
    .required("Enter your mobile number")
    .length(10, "Please enter a valid mobile number.")
    .matches(phoneRegExp, "Please enter a valid mobile number."),
  name: Yup.string()
  .required("Please Enter Your Name"),
  email: Yup.string().email().required("Please Enter Email"),

  location: Yup.string().required("Please fill this field"),
});
const submitHandler  = async(value,{resetForm}) =>{
  const data = {
    name: value.name,
    email: value.email,
    phone: value.mobile,
    gender: "",
    location: {
      city: value.location,
    },
    skiils: "",
  };

  

  const res = await postData("artist-signup", data);
  if (res.status) {
    toast.success(res.message, {
      position: toast.POSITION.TOP_RIGHT,
    });
    resetForm();
    setTimeout(()=>{
       navigate('/Dashboard')
    },2000)
  } else {
    toast.error(res.message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
 console.log(value)
}
  return (
  <div className="overflow-hideen vh-100 innerFooter">
  {/* Header Start */}

  <BusinessHeader/>
  {/* Header End */}
  {/* Partner With Us Section Start */}
    <ToastContainer
      autoClose={1000}
    />
  <div className="artistRegistration align-items-center d-flex">
    <div className="container">
      <div className="mainInner">
        <div className="row">
          <div className="col-12">
            <div className="formOuter">
              <div className="row gap-3">
                <div className="col-12">
                  <div className="loginOuter rounded-4 overflow-hidden border border-theme1">
                    <div className="loginHeader bg-theme1 text-white p-3 text-center">
                      <span className="text-uppercase">Saloon Artist Registration</span>
                      <span className="text-white fs-12 d-block">Drop in Your Request</span>
                    </div>
                          <Formik
                                initialValues={initialValue}
                                onSubmit={(value, resetForm) =>
                                  submitHandler(value, resetForm)
                                }
                                validationSchema={validationschema}
                                enableReinitialize={true}
                              >
                          {(formik) => {
                           return(
                            <Form className="form p-3 d-flex flex-column gap-2 gap-sm-3">
                            <div className="input-group d-block">
                              <label
                                htmlFor="loginMail"
                                className="form-label text-white mb-1 mb-sm-2"
                              >
                                Your Name
                              </label>
                              <Field
                                type="text"
                                className="form-control w-100 rounded-1 border-0 py-2 ps-3 shadow-none"
                                id="loginMail"
                                placeholder="Enter Your Name*"
                                name='name'
                              />
                              <p className="text-danger text-start">
                                            {formik.touched.name &&
                                            formik.errors.name
                                              ? formik.errors.name
                                              : ""}
                                          </p>
                            </div>
                            <div className="input-group d-block">
                              <label
                                htmlFor="phoneNumber"
                                className="form-label text-white mb-1 mb-sm-2"
                              >
                                Phone Number
                              </label>
                              <Field
                                type="number"
                                className="form-control w-100 rounded-1 border-0 py-2 ps-3 shadow-none"
                                id="phoneNumber"
                                placeholder="Enter Your Phone Number*"
                                name='mobile'
                              /><p className="text-danger text-start">
                              {formik.touched.mobile &&
                              formik.errors.mobile
                                ? formik.errors.mobile
                                : ""}
                            </p>
                            </div>
                            <div className="input-group d-block">
                              <label
                                htmlFor="email"
                                className="form-label text-white mb-1 mb-sm-2"
                              >
                                Your Email
                              </label>
                              <Field
                                type="email"
                                className="form-control w-100 rounded-1 border-0 py-2 ps-3 shadow-none"
                                id="email"
                                placeholder="Enter Your Email*"
                                name='email'
                              />
                              <p className="text-danger text-start">
                                            {formik.touched.email &&
                                            formik.errors.email
                                              ? formik.errors.email
                                              : ""}
                                          </p>
                            </div>
                            <div className="input-group d-block">
                              <label
                                htmlFor="address"
                                className="form-label text-white mb-1 mb-sm-2"
                              >
                                Address
                              </label>
                              <Field
                                type='text'
                                className="form-control w-100 rounded-1 border-0 py-2 ps-3 shadow-none"
                                id="address"
                                placeholder="Enter Your Address..."
                                name='location'
                                
                              />
                              <p className="text-danger text-start">
                                            {formik.touched.location &&
                                            formik.errors.location
                                              ? formik.errors.location
                                              : ""}
                                          </p>
                            </div>
                            <div className="btns text-end mt-2">
                              <button
                                type="submit"
                                className="btn btn-theme1 loginBtn text-white px-4 py-2"
                                //data-bs-toggle="modal"
                                //data-bs-target="#artistRegistrationConfirmation"
                              >
                                Send a Request
                              </button>
                            </div>
                          </Form>
                           )
                          }}
                        </Formik>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Partner With Us Section end */}
  {/* Modal */}
  <div className="modal fade customModal" id="artistRegistrationConfirmation" data-bs-backdrop="static" tabIndex={-1} aria-labelledby="artistRegistrationConfirmationLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content bg-dark bg-opacity-75">
        <div className="modal-header">
          <h1 className="modal-title text-white fs-5" id="artistRegistrationConfirmationLabel">Artist Registration</h1>
          <button type="button" className="btn-close fs-12 shadow-none" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <div className="row gap-md-4 gap-3">
            <div className="col-12">
              <div className="orderStatus py-2">
                <div className="imgOuter mx-auto rounded-circle overflow-hidden bg-white">
                  <img className="w-100" src="assets/img/CheckCircleFill.svg" alt />
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="orderDec text-white text-center">
                <div className="text fs-16">Thank you for showing interest in Saloon. Our team will contact you soon!</div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-theme1 px-3 text-white" data-bs-dismiss="modal">Ok</button>
        </div>
      </div>
    </div>
  </div>
  <BusinessFooter/>
</div>

  )
}


export default ArtistRegistration