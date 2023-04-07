import React from 'react'
import Footer from '../../common/layout/footer/footer'
import Footer2 from '../../common/layout/footer/Footer2 '
import Header2 from '../../common/layout/header/Header2'

const CancellationAndRefund = () => {
  return (
<div>
  {/* Header Start */}
  <Header2/>
  {/* Header End */}
  <div className="cancellationRefundMain bg-dark">
    <div className="container">
      <div className="row gap-2">
        <div className="col-12">
          <div className="pageHeading text-white">Cancellation and Refund</div>
        </div>
        <div className="col-12">
          <div className="row gap-4">
            <div className="col-12">
              <div className="txt text-white fs-14 text-opacity-75 mt-2">
                We at Saloon work towards attaining 'Customer Delight', - a step further to achieving 'Customer
                Satisfaction', and thus, we have put forward a very simple and customer-focused cancellation and
                refund
                policy.
              </div>
              <div className="title text-white mt-4">For Salon and Spa Appointments</div>
              <div className="txt text-white fs-14 text-opacity-75 mt-2">
                <b>Case 1: When booking is not confirmed:</b>
                <br />
                In this case, the deducted amount (if any) will be refunded back to the customers through the same mode of payment within 7 Business Days (time taken for refund is subject to the policies of the third party payment gateway)
                <br /><br />
                <b>Case 2: When customers cancel their appointment:</b>
                <br />
                If a customer cancels his/her appointment in advance (24 hours before the appointment), then we will be providing full refund. Refer to Case 1 above for refund timeline.
                <br /><br />
                <b>Case 3: In the event of no-show</b>
                <br />
                When a customer doesn't cancel the booking, neither visits the service provider at the scheduled time, then the refund will be dependent on the discretion &amp; policies of our partner in this case.
              </div>
              <div className="title text-white mt-4">For Home-based Appointments </div>
              <div className="txt text-white fs-14 text-opacity-75 mt-2">
                <b>Case 1: Cancellation Made By Users:</b>
                <br />
                <ul className="m-0 flex-column d-flex gap-3 ps-4">
                  <li>In case of same day booking, users can CANCEL their appointment within 15 minutes of booking at no additional cost. Cancelling the appointment after 15 minutes of booking may attract a Cancellation Fee of Rs. 50 (subject to change).</li>
                  <li>In case of advance booking, users are entitled to CANCEL the appointment 2 hours before the scheduled time-slot at no additional cost. Cancelling the appointment after that may attract a Cancellation Fee of Rs. 50 (subject to change).</li>
                </ul>
                <br />
                <b>Case 2: Cancellation Made by Artists:</b>
                <br />
                In case of cancellation made by the artists, users are eligible for full refund.
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

export default CancellationAndRefund