import React from 'react'
import Footer from '../../common/layout/footer/footer'
import Footer2 from '../../common/layout/footer/Footer2 '
import Header2 from '../../common/layout/header/Header2'

const SaloonSafetyProgram = () => {
  return (
    <div className="overflow-hideen ">
  {/* Header Start */}
 <Header2/>
  {/* Header End */}
  <div className="seftyMain bg-dark">
    <div className="container">
      <div className="row gap-4 gap-lg-0">
        <div className="col-lg-5">
          <div className="imgOuter rounded-4 overflow-hidden h-100">
            <img className="w-100 h-100" src="assets/img/aboutBg.jpg" alt="image" />
          </div>
        </div>
        <div className="col-lg-7">
          <div className="detail">
            <div className="title text-theme1">Ensuring safety and well being is at the core of</div>
            <div className="txt text-white mt-2">
              Saloon, in collaboration with the partners, have introduced a Safety Program based on the SOPs (standard operating procedures) issued by the government to prevent spread of the COVID-19. The purpose of the Safety Program is to ensure that the partners and the staff follow the safety, disinfection and sanitization protocols to safeguard the staff and customers from getting infected.
            </div>
            <div className="title text-theme1 mt-3">Saloon Safety Program</div>
            <div className="txt text-white mt-2">
              Prioritizing the health, safety and well being of the staff and customers, the Safety Program is divided into three levels - Care+, Safety+, and Hygiene+. While the basic safety protocols related to salon operations such as appointment pre- booking, social distancing, hand sanitizing, tools and kits disinfecting, and online payments, remain the same in all three levels, our team does a proper inspection of the premises and procedures that our partners follow and basis our checklist, we award them a Safety Badge. All in all, it is mandatory for all of our partners to practice the highest level safety measures to ensure health and safety of both the staff and customers.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="seftyLevelMain bg-black">
    <div className="container">
      <div className="row gap-4">
        <div className="col-12">
          <div className="pageHeading text-white">Safety Level Checklist</div>
        </div>
        <div className="col-12">
          <div className="tableOuter">
            <table className="table table-dark table-hover customTable">
              <thead>
                <tr>
                  <th scope="col" className="border-end">Safety Parameters</th>
                  <th scope="col" className="border-end">Hygiene+</th>
                  <th scope="col" className="border-end">Safety+</th>
                  <th scope="col">Care+</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Aarogya Setu App</td>
                  <td><img src="assets/img/icon/checkIcon.svg" alt="image" /></td>
                  <td><img src="assets/img/icon/checkIcon.svg" alt="image" /></td>
                  <td><img src="assets/img/icon/checkIcon.svg" alt="image" /></td>
                </tr>
                <tr>
                  <td>Hand Sanitisation</td>
                  <td><img src="assets/img/icon/checkIcon.svg" alt="image" /></td>
                  <td><img src="assets/img/icon/checkIcon.svg" alt="image" /></td>
                  <td><img src="assets/img/icon/checkIcon.svg" alt="image" /></td>
                </tr>
                <tr>
                  <td>Masks</td>
                  <td><img src="assets/img/icon/checkIcon.svg" alt="image" /></td>
                  <td><img src="assets/img/icon/checkIcon.svg" alt="image" /></td>
                  <td><img src="assets/img/icon/checkIcon.svg" alt="image" /></td>
                </tr>
                <tr>
                  <td>Sterilization of Tools After Every Use</td>
                  <td><img src="assets/img/icon/checkIcon.svg" alt="image" /></td>
                  <td><img src="assets/img/icon/checkIcon.svg" alt="image" /></td>
                  <td><img src="assets/img/icon/checkIcon.svg" alt="image" /></td>
                </tr>
                <tr>
                  <td>Limited Entry of Customers</td>
                  <td><img src="assets/img/icon/checkIcon.svg" alt="image" /></td>
                  <td><img src="assets/img/icon/checkIcon.svg" alt="image" /></td>
                  <td><img src="assets/img/icon/checkIcon.svg" alt="image" /></td>
                </tr>
                <tr>
                  <td>Outlet Sanitisation on Regular Basis</td>
                  <td><img src="assets/img/icon/checkIcon.svg" alt="image" /></td>
                  <td><img src="assets/img/icon/checkIcon.svg" alt="image" /></td>
                  <td><img src="assets/img/icon/uncheckIcon.svg" alt="image" /></td>
                </tr>
                <tr>
                  <td>Disposable Gloves</td>
                  <td><img src="assets/img/icon/checkIcon.svg" alt="image" /></td>
                  <td><img src="assets/img/icon/checkIcon.svg" alt="image" /></td>
                  <td><img src="assets/img/icon/uncheckIcon.svg" alt="image" /></td>
                </tr>
                <tr>
                  <td>Thermal Checking</td>
                  <td><img src="assets/img/icon/checkIcon.svg" alt="image" /></td>
                  <td><img src="assets/img/icon/checkIcon.svg" alt="image" /></td>
                  <td><img src="assets/img/icon/uncheckIcon.svg" alt="image" /></td>
                </tr>
                <tr>
                  <td>Disposable Gown/Cutting Sheet</td>
                  <td><img src="assets/img/icon/checkIcon.svg" alt="image" /></td>
                  <td><img src="assets/img/icon/uncheckIcon.svg" alt="image" /></td>
                  <td><img src="assets/img/icon/uncheckIcon.svg" alt="image" /></td>
                </tr>
                <tr>
                  <td>PPE Kit</td>
                  <td><img src="assets/img/icon/checkIcon.svg" alt="image" /></td>
                  <td><img src="assets/img/icon/uncheckIcon.svg" alt="image" /></td>
                  <td><img src="assets/img/icon/uncheckIcon.svg" alt="image" /></td>
                </tr>
                <tr>
                  <td>Disposable Razors</td>
                  <td><img src="assets/img/icon/checkIcon.svg" alt="image" /></td>
                  <td><img src="assets/img/icon/uncheckIcon.svg" alt="image" /></td>
                  <td><img src="assets/img/icon/uncheckIcon.svg" alt="image" /></td>
                </tr>
                <tr>
                  <td>Customer Sanitisation</td>
                  <td><img src="assets/img/icon/checkIcon.svg" alt="image" /></td>
                  <td><img src="assets/img/icon/uncheckIcon.svg" alt="image" /></td>
                  <td><img src="assets/img/icon/uncheckIcon.svg" alt="image" /></td>
                </tr>
                <tr>
                  <td>Others</td>
                  <td><img src="assets/img/icon/checkIcon.svg" alt="image" /></td>
                  <td><img src="assets/img/icon/uncheckIcon.svg" alt="image" /></td>
                  <td><img src="assets/img/icon/uncheckIcon.svg" alt="image" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="seftyMain bg-dark py-5">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="detail">
            <div className="title text-theme1">Note</div>
            <div className="txt text-white mt-2">
              The partners may charge certain amount as Hygiene Fees for disposable protective equipment and kits. You are advised to check your receipt before making the payment.
              <br /><br />
              Feel free to drop an email at support@saloon.com to know more about our Safety Program.
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
 
</div>

  )
}

export default SaloonSafetyProgram