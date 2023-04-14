import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import { postData } from "../../../components/apiinstance/Api";
import { useState } from "react";

function Footer() {
  const [initialValue, setInitialValue] = useState({
    email: "",
  });
  const openingPage = (url) => {
    window.open(`${url}`);
  };
  const downloadPage = (url) => {
    window.open(`${url}`);
  };
  const validationschema = yup.object().shape({
    email: Yup.string().email().required("Please Enter Email"),
  });
  const submitHandler = async (value, { resetForm }) => {
    const data = {
      email: value.email,
    };
    const res = await postData("Newsletter", data);
    if (res.status) {
      toast.success(res.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      resetForm();
    } else {
      toast.error(res.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  return (
    <>
      <footer class="container-fluid footer py-5 bg-dark">
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-md-6 col-lg-3 columnfirst">
              <ul class="list-unstyled list1 d-flex align-items-cente justify-content-center gap-3 flex-column">
                <li>
                  <Link class="text-decoration-none text-white" to="/aboutus">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link class="text-decoration-none text-white" to="/contact">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-decoration-none text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    class="text-decoration-none text-white"
                    to="/saloonsafetyprogram"
                  >
                    Saloon Safety Program
                  </Link>
                </li>
                <li>
                  <Link
                    class="text-decoration-none text-white"
                    to="/artist-registration"
                  >
                    Artist Signup
                  </Link>
                </li>
                <li>
                  <Link
                    class="text-decoration-none text-white"
                    to="/partnerlogin"
                  >
                    Partner With Us
                  </Link>
                </li>
              </ul>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-3 columnfirst">
              <ul class="list-unstyled list1 d-flex align-items-cente justify-content-center gap-3 flex-column">
                <li>
                  <Link
                    class="text-decoration-none text-white"
                    to="/termsandconditions"
                  >
                    Terms and Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    class="text-decoration-none text-white"
                    to="/cancellationandrefund"
                  >
                    Cancellation and Refund
                  </Link>
                </li>
                <li>
                  <Link
                    class="text-decoration-none text-white"
                    to="/privacyandpolicy"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    class="text-decoration-none text-white"
                    to="/cookieandpolicy"
                  >
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link class="text-decoration-none text-white" to="/FAQs">
                    FAQs
                  </Link>
                </li>
              </ul>
              <ul class="list-unstyled d-flex iconlist">
                <li>
                  <a
                    class="imagefb"
                    onClick={() =>
                      openingPage("http://facebook.com/prashanttiwari")
                    }
                  >
                    <img src="/assets/img/footer/FB.png" alt="Facebook" />
                  </a>
                </li>
                <li>
                  <a
                    class="imageinsta"
                    onClick={() =>
                      openingPage("http://instagram.com/prashanttiwari6354")
                    }
                  >
                    <img src="/assets/img/footer/insta.png" alt="instagram" />
                  </a>
                </li>
                <li>
                  <a
                    class="imagetwit"
                    onClick={() =>
                      openingPage("http://twitter.com/ShibuDubey01")
                    }
                  >
                    <img src="/assets/img/footer/Twtr.png" alt="twitter" />
                  </a>
                </li>
                <li>
                  <a
                    class="imageyt"
                    onClick={() =>
                      openingPage(
                        "https://www.youtube.com/channel/UCLIybPUSufqpW5ezbdBQ9OA"
                      )
                    }
                  >
                    <img src="/assets/img/footer/YT.png" alt="youtube" />
                  </a>
                </li>
                <li>
                  <a
                    class="imagelink"
                    onClick={() =>
                      openingPage(
                        "https://www.linkedin.com/in/shibu-dubey-3a429421b/"
                      )
                    }
                  >
                    <img src="/assets/img/footer/linkedin.png" alt="linkedin" />
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-3 columnfirst">
              <p class="text-white mb-0">Newsletter</p>
              <Formik
                initialValues={initialValue}
                validationschema={validationschema}
                onSubmit={(value, resetForm) => submitHandler(value, resetForm)}
                enableReinitialize
              >
                {(formik) => {
                  return (
                    <Form className="emailform">
                      <div class="d-flex align-items-cente">
                        <Field
                          class="inputemail"
                          type="email"
                          required
                          placeholder="Enter Your Email ID"
                          name="email"
                        />
                        <button class="inputbtn" type="submit">
                          Subscribe
                        </button>
                      </div>
                      <p className="text-danger text-start">
                        {formik.touched.email && formik.errors.email
                          ? formik.errors.email
                          : ""}
                      </p>
                    </Form>
                  );
                }}
              </Formik>
              <div class="d-flex appiconsection mt-3">
                <ul class="list-unstyled d-flex flex-column gap-3">
                  <li>
                    <a
                      onClick={() =>
                        downloadPage(
                          "https://play.google.com/store/apps/details?id=com.ril.ajio"
                        )
                      }
                    >
                      <img
                        class="w-100 h-100"
                        src="/assets/img/footer/gplay.svg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() =>
                        downloadPage(
                          "https://apps.apple.com/in/app/myntra-fashion-shopping-app/id907394059"
                        )
                      }
                    >
                      <img
                        class="w-100 h-100"
                        src="/assets/img/footer/Appstore.svg"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
