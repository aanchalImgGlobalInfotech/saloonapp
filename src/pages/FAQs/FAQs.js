import React from 'react'
import Footer from '../../common/layout/footer/footer'
import Footer2 from '../../common/layout/footer/Footer2 '
import Header2 from '../../common/layout/header/Header2'

const FAQs = () => {
  return (
<div>
  {/* Header Start */}
  <Header2/>
  {/* Header End */}
  <div className="faqMain bg-dark">
    <div className="container">
      <div className="row gap-2">
        <div className="col-12">
          <div className="pageHeading text-white">FAQ's</div>
        </div>
        <div className="col-12">
          <div className="row g-4" id="accordionFaq">
            <div className="col-lg-6">
              <div className="accordion d-flex flex-column gap-3">
                <div className="row gap-3">
                  <div className="col-12">
                    <div className="accordion-item bg-black border-theme1">
                      <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button shadow-none bg-theme1 text-white fs-14 justify-content-between d-flex align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          <span>Appointment Booking</span>
                          <span className="d-block circle position-relative">
                            <span className="d-block position-absolute bg-white m-auto horizontal" />
                            <span className="d-block position-absolute bg-white m-auto vertical" />
                          </span>
                        </button>
                      </h2>
                      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionFaq">
                        <div className="accordion-body">
                          <div className="title text-white">How can I book appointment?</div>
                          <div className="txt text-white fs-14 text-opacity-75 mt-2">
                            Kindly follow the given steps to book your appointment for the required services:
                            <br /><br />
                            <b>Step-1</b> Signup/Login to your Zoylee Account.
                            <br /><br />
                            <b>Step-2</b> Enter the location on the “Location Bar” where you want to avail the service. You can also use the Auto Locate feature to set the location.
                            <br /><br />
                            <b>Step-3</b> Click on the Categories Menu and select your preferred category to get a detailed listing of the service providers in that area.
                            <br /><br />
                            <b>Step-4</b> Select your preferred service provider and add the required services to your cart.
                            <br /><br />
                            <b>Step-5</b> Click on the checkout button, select your desired date and time.
                            <br /><br />
                            <b>Step-6</b> Select the mode of payment and book your appointment.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="accordion-item bg-black border-theme1">
                      <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button shadow-none bg-theme1 text-white fs-14 justify-content-between d-flex align-items-center collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                          <span>Is there any cancellation fee for home-based appointments?</span>
                          <span className="d-block circle position-relative">
                            <span className="d-block position-absolute bg-white m-auto horizontal" />
                            <span className="d-block position-absolute bg-white m-auto vertical" />
                          </span>
                        </button>
                      </h2>
                      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionFaq">
                        <div className="accordion-body">
                          <div className="txt text-white fs-14 text-opacity-75 mt-2">
                            Yes, cancellation fees in home-based appointments are levied depending on the following scenarios-
                            <br /><br />
                            <ul className="m-0 d-flex flex-column gap-3 ps-4">
                              <li>If you cancel your service prior to 30 minutes of your scheduled service time then there will be no cancellation fee.</li>
                              <li>If you cancel your service within 30 minutes of your scheduled service time, then there will be a minor cancellation fee of INR 50 to compensate for our artist’s time.</li>
                              <li>If you cancel your service after the artist arrives at your doorstep, then there will be a small fee of INR 100 to compensate for our artist’s time and travelling expenses.</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="accordion-item bg-black border-theme1">
                      <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button shadow-none bg-theme1 text-white fs-14 justify-content-between d-flex align-items-center collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                          <span>How can I edit my Zoylee Profile?</span>
                          <span className="d-block circle position-relative">
                            <span className="d-block position-absolute bg-white m-auto horizontal" />
                            <span className="d-block position-absolute bg-white m-auto vertical" />
                          </span>
                        </button>
                      </h2>
                      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionFaq">
                        <div className="accordion-body">
                          <div className="title text-white">On Website:</div>
                          <div className="txt text-white fs-14 text-opacity-75 mt-2">
                            <ul className="m-0 d-flex flex-column gap-3 ps-4">
                              <li>Please visit the Profile Page</li>
                              <li>Click the 'Edit' Button and edit the desired details.</li>
                              <li>Click the 'Save' Button to save the edited Profile.</li>
                            </ul>
                          </div>
                          <br />
                          <div className="title text-white">On App:</div>
                          <div className="txt text-white fs-14 text-opacity-75 mt-2">
                            <ul className="m-0 d-flex flex-column gap-3 ps-4">
                              <li>Tap the 'My Account' Icon on the Tab Bar.</li>
                              <li>Tap the 'Edit' Button and edit the desired details.</li>
                              <li>Tap the 'Save' Button to save the edited Profile.</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="accordion-item bg-black border-theme1">
                      <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button shadow-none bg-theme1 text-white fs-14 justify-content-between d-flex align-items-center collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                          <span>Partner Registration</span>
                          <span className="d-block circle position-relative">
                            <span className="d-block position-absolute bg-white m-auto horizontal" />
                            <span className="d-block position-absolute bg-white m-auto vertical" />
                          </span>
                        </button>
                      </h2>
                      <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionFaq">
                        <div className="accordion-body">
                          <div className="title text-white">I want to partner with Zoylee. What is the process?</div>
                          <div className="txt text-white fs-14 text-opacity-75 mt-2">
                            If you want to partner with Zoylee, please visit https://business.saloon.com/ or drop an email at partner@saloon.com.
                          </div>
                          <br />
                          <div className="title text-white">I didn't get any confirmation regarding my Zoylee Partner Registration.</div>
                          <div className="txt text-white fs-14 text-opacity-75 mt-2">
                            Please send an email at partner@saloon.com
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="accordion-item bg-black border-theme1">
                      <h2 className="accordion-header" id="headingFive">
                        <button className="accordion-button shadow-none bg-theme1 text-white fs-14 justify-content-between d-flex align-items-center collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                          <span>Can I cancel my appointment?</span>
                          <span className="d-block circle position-relative">
                            <span className="d-block position-absolute bg-white m-auto horizontal" />
                            <span className="d-block position-absolute bg-white m-auto vertical" />
                          </span>
                        </button>
                      </h2>
                      <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionFaq">
                        <div className="accordion-body">
                          <div className="txt text-white fs-14 text-opacity-75 mt-2">
                            In order to cancel your appointment, please go to your Profile section and select 'Bookings' and there you'll have the option to cancel your appointment.Please note that our partner may charge some cancellation fees, if applicable, in such cases.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="accordion-item bg-black border-theme1">
                      <h2 className="accordion-header" id="headingSix">
                        <button className="accordion-button shadow-none bg-theme1 text-white fs-14 justify-content-between d-flex align-items-center collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                          <span>How can I create my Zoylee Profile?</span>
                          <span className="d-block circle position-relative">
                            <span className="d-block position-absolute bg-white m-auto horizontal" />
                            <span className="d-block position-absolute bg-white m-auto vertical" />
                          </span>
                        </button>
                      </h2>
                      <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionFaq">
                        <div className="accordion-body">
                          <div className="txt text-white fs-14 text-opacity-75 mt-2">
                            Visit zoylee.com or download Zoylee App from Play Store or App Store.
                            <br /><br />
                            Click on the 'Signup' button.
                            <br /><br />
                            Fill the required field, and click on the 'Register' button
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="accordion d-flex flex-column gap-3">
                <div className="row gap-3">
                  <div className="col-12">
                    <div className="accordion-item bg-black border-theme1">
                      <h2 className="accordion-header" id="headingSeven">
                        <button className="accordion-button shadow-none bg-theme1 text-white fs-14 justify-content-between d-flex align-items-center collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
                          <span>Can I book appointment for any location?</span>
                          <span className="d-block circle position-relative">
                            <span className="d-block position-absolute bg-white m-auto horizontal" />
                            <span className="d-block position-absolute bg-white m-auto vertical" />
                          </span>
                        </button>
                      </h2>
                      <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionFaq">
                        <div className="accordion-body">
                          <div className="txt text-white fs-14 text-opacity-75 mt-2">
                            Yes, you can book appointment with the partners available on the search results from any location.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="accordion-item bg-black border-theme1">
                      <h2 className="accordion-header" id="headingEight">
                        <button className="accordion-button shadow-none bg-theme1 text-white fs-14 justify-content-between d-flex align-items-center collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="true" aria-controls="collapseEight">
                          <span>Didn't receive OTP?</span>
                          <span className="d-block circle position-relative">
                            <span className="d-block position-absolute bg-white m-auto horizontal" />
                            <span className="d-block position-absolute bg-white m-auto vertical" />
                          </span>
                        </button>
                      </h2>
                      <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionFaq">
                        <div className="accordion-body">
                          <div className="txt text-white fs-14 text-opacity-75 mt-2">
                            Please check if your app is due for an update. If not, please share the details via helpdesk@saloon.com.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="accordion-item bg-black border-theme1">
                      <h2 className="accordion-header" id="headingNine">
                        <button className="accordion-button shadow-none bg-theme1 text-white fs-14 justify-content-between d-flex align-items-center collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="true" aria-controls="collapseNine">
                          <span>Can I book multiple appointments from multiple service providers?</span>
                          <span className="d-block circle position-relative">
                            <span className="d-block position-absolute bg-white m-auto horizontal" />
                            <span className="d-block position-absolute bg-white m-auto vertical" />
                          </span>
                        </button>
                      </h2>
                      <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionFaq">
                        <div className="accordion-body">
                          <div className="txt text-white fs-14 text-opacity-75 mt-2">
                            Yes, you can book multiple appointments from different partners.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="accordion-item bg-black border-theme1">
                      <h2 className="accordion-header" id="headingTen">
                        <button className="accordion-button shadow-none bg-theme1 text-white fs-14 justify-content-between d-flex align-items-center collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="true" aria-controls="collapseTen">
                          <span>Is there a minimum cart value?</span>
                          <span className="d-block circle position-relative">
                            <span className="d-block position-absolute bg-white m-auto horizontal" />
                            <span className="d-block position-absolute bg-white m-auto vertical" />
                          </span>
                        </button>
                      </h2>
                      <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionFaq">
                        <div className="accordion-body">
                          <div className="txt text-white fs-14 text-opacity-75 mt-2">
                            Yes, there are different predefined minimum cart values depending on the nature of service. It can be further divided into the following verticals:
                            <br /><br />
                            <ul className="m-0 d-flex flex-column gap-3 ps-4">
                              <li>Salon/Parlour/Spa Appointments - The minimum cart value is INR 100.</li>
                              <li>Zoylee At Home - The minimum cart value for males is INR 199 and for females is INR 349.</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="accordion-item bg-black border-theme1">
                      <h2 className="accordion-header" id="headingEleven">
                        <button className="accordion-button shadow-none bg-theme1 text-white fs-14 justify-content-between d-flex align-items-center collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="true" aria-controls="collapseEleven">
                          <span>I want to register as a Zoylee Artist. What is the process?</span>
                          <span className="d-block circle position-relative">
                            <span className="d-block position-absolute bg-white m-auto horizontal" />
                            <span className="d-block position-absolute bg-white m-auto vertical" />
                          </span>
                        </button>
                      </h2>
                      <div id="collapseEleven" className="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#accordionFaq">
                        <div className="accordion-body">
                          <div className="txt text-white fs-14 text-opacity-75 mt-2">
                            If you want to register as a Zoylee Artist then you can try either of the two methods:
                            <br /><br />
                            <ul className="m-0 d-flex flex-column gap-3 ps-4">
                              <li>Visit www.saloon.com/artist-registration , share your basic details and our partnerships team will get back to you within 2 business days.</li>
                              <li>You can also directly contact us on our toll free number - 1800-212-2006 and further select option 3 to speak to the partnerships team.</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="accordion-item bg-black border-theme1">
                      <h2 className="accordion-header" id="headingTwelve">
                        <button className="accordion-button shadow-none bg-theme1 text-white fs-14 justify-content-between d-flex align-items-center collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="true" aria-controls="collapseTwelve">
                          <span>Are there cancellation charges on at-salon appointments?</span>
                          <span className="d-block circle position-relative">
                            <span className="d-block position-absolute bg-white m-auto horizontal" />
                            <span className="d-block position-absolute bg-white m-auto vertical" />
                          </span>
                        </button>
                      </h2>
                      <div id="collapseTwelve" className="accordion-collapse collapse" aria-labelledby="headingTwelve" data-bs-parent="#accordionFaq">
                        <div className="accordion-body">
                          <div className="txt text-white fs-14 text-opacity-75 mt-2">
                            No, as of now there are no cancellation charges for outlet appointments. However, three(3) no shows will result in temporary suspension of your user account.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* herewe we Section start */}
  <Footer2/>
  {/* herewe we Section end */}
  {/* Footer Start */}
 <Footer/>
  {/* Footer End */}
 
  {/* Bootstrap Js */}
</div>

  )
}

export default FAQs