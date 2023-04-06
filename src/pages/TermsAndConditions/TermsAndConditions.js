import React from 'react'
import Footer from '../../common/layout/footer/footer'
import Footer2 from '../../common/layout/footer/Footer2 '
import Header2 from '../../common/layout/header/Header2'

const TermsAndConditions = () => {
  return (
    
<div classname="overflow-hideen ">
  {/* Header Start */}
  <Header2/>
  {/* Header End */}
  <div className="treamConditionMain bg-dark">
    <div className="container">
      <div className="row gap-4">
        <div className="col-12">
          <div className="pageHeading text-white">Terms and Conditions</div>
        </div>
        <div className="col-12">
          <div className="row gap-4">
            <div className="col-12">
              <ul className="nav nav-tabs customTabs border-0 bg-black" id="myTab" role="tablist">
                <li className="nav-item border-0 m-0" role="presentation">
                  <button className="nav-link border-0  px-0 text-white rounded-0 text-center fs-14 w-100 bg-black active" id="customer-tab" data-bs-toggle="tab" data-bs-target="#customer-tab-pane" type="button" role="tab" aria-controls="customer-tab-pane" aria-selected="true">Customer</button>
                </li>
                <li className="nav-item border-0 m-0" role="presentation">
                  <button className="nav-link border-0  px-0 text-white rounded-0 text-center fs-14 w-100 bg-black" id="artist-tab" data-bs-toggle="tab" data-bs-target="#artist-tab-pane" type="button" role="tab" aria-controls="artist-tab-pane" aria-selected="false">Artist</button>
                </li>
              </ul>
            </div>
            <div className="col-12">
              <div className="tab-content customTabContent" id="myTabContent">
                <div className="tab-pane fade show active" id="customer-tab-pane" role="tabpanel" aria-labelledby="customer-tab" tabIndex={0}>
                  <div className="title text-white">For Customers</div>       
                  <div className="txt text-white fs-14 text-opacity-75 mt-2">
                    This document is a digital record in terms of the Information Technology Act, 2000, and policies there under as applicable and the modified rules concerned with electronic records in various forms as amended by the IT Act, 2000. It is issued with reference to the provisions of Rule 3(1) of the IT Guidelines (Intermediaries guidelines) Rules, 2011 that require issuing the rules and regulations, Terms of Use, and Privacy Policy for access or usage of Saloon Platform (website: www.saloon.com and Saloon app for mobile devices and tablets). Saloon platform is fully owned and operated by Saloon Web Services Private Limited, a company incorporated under the Companies Act, 1956 and having its registered office at C-10, First Floor, Sector-3, Noida - 201301.
                    <br /><br />    
                    Kindly read this document in consonance with the Terms and Conditions (URL) defined for Saloon Partners and Independent Artist.
                  </div>
                  <div className="title text-white mt-5">Terms of Use</div>
                  <div className="txt text-white fs-14 text-opacity-75 mt-2">
                    The listed "Terms of Use" on this page govern your use of the Saloon Website and Saloon Application for smart devices. Both the “Application” and the “Website” are referred to as the "Platform".
                    <br /><br />
                    You are requested to go through these “Terms of Use” before subscribing or using the services offered by Saloon Platform. By downloading, installing or even simply accessing the Saloon platform, you shall be contracting with Saloon and you signify that you agree to our Terms of Use and other policies, including Privacy Policy, Cookie Policy, Cancellation, and Refund Policy, and Take Down Policy, which comes into effect on the very date when you download, install or use the Services, and form a legally binding setting to abide by the same.
                    <br /><br />
                    With reference to the implementation of these Terms of Use, "our”, we" or "us", or “Company” in some context in this document shall denote "Saloon" (a digital platform of the Saloon Web Services Private Limited). Also, the terms "you" or “your” shall denote any individual user who has agreed to become a Saloon Member by providing essential information for registration on the platform using any web-connected device.
                    <br /><br />
                    Saloon enables transactions (both cash and online) between partners and customers. The partners can list their business on the Saloon platform so that the potential customers can locate them and make bookings. On the other hand, Saloon platform allows the customers to find, select, and book appointments for required grooming and personal care services from the listed neighbourhood services including but not limited to the salons, spas, and beauty parlours on the platform.
                  </div>
                  <div className="title text-white mt-5">Definitions of Different Terminologies Used in this Document:</div>
                  <div className="txt text-white fs-14 text-opacity-75 mt-2">
                    <b>Service(s):</b> It can be defined as any of the services listed by Partners or Saloon Artists on the Saloon App and Website for customers, including the services proposed to be rendered and listed on the Saloon Platform.
                    <br /><br />
                    <b>Bookings or Appointments:</b> Bookings or appointments can be described as the process where the customer/user selects the services of their choice listed on the Saloon App or website and books/requests an appointment as per their convenient time.
                    <br /><br />
                    <b>Booking Amount, Fees, Charges:</b> IIt can be defined as the total amount to be charged for the services and acceptance of the terms of use for receiving the services, Booking ID shall be generated containing the booking details. For Partners, booking amount can be both cash (Pay at Counter) and online (Prepay) while for Artists, there is only one provision for payment (Online Prepay). The prices of the services listed on the Saloon App and Website shall be inclusive of all costs and GST as applicable.
                    <br /><br />
                    <b>Customer(s) or User(s):</b> “Customers” or “Users” are the individuals or group of individuals with the purpose of getting the hair, beauty, makeup, grooming and spa services provided by the partners or artists.
                    <br /><br />
                    <b>Confidential Data:</b> “Confidential Details'' is the information related to Saloon Platform, to the customers and services solicited through the Platform that is not meant for the general mass that include but are not limited to any data signifying or unique to specific users, insights, reports, and other sensitive details about the Services, information derived from the services and bookings. Saloon Platform and its customers’ personal data shall be deemed ‘Confidential’ at all times.
                    <br /><br />
                    <b>Saloon Partners and Partner’s Location:</b> “Saloon Partners” refers to the registered salons, parlours and spas which are entitled to enlist their services and other details related to the services on the Saloon App and Website for solicitation of end-customers. The Location of outlets/facilities for delivery of services which the partners provide during the process of Partner Registration shall be known as Partner’s Location.
                    <br /><br />
                    <b>Saloon Artists:</b> Saloon Artists are those independent professionals or entities who have registered with Saloon to deliver hair, beauty and makeup services at home (or place of their choice) of the customers.
                    <br /><br />
                    <b>Provision of Services for Saloon Partners:</b> It is the process of delivering the enlisted and booked service by the registered Partner to the customer during the time when the customer was present at the Partner’s Location.
                    <br /><br />
                    <b>Provision of Services for Saloon Artists:</b> It is the process of delivering the enlisted and booked service by the registered Artist to the customer at the scheduled date, time and location shared by the customer.
                    <br /><br />
                    <b>Rights to Intellectual Property:</b> “Intellectual Property Rights” means any Trademark, copyright, patent, trade secret, moral right or any possible intellectual property right arising under any Laws and all ancillary and related rights, including all rights of registration and renewal and causes of action for violation, misappropriation or infringement of any of the Intellectual Property.
                    <br /><br />
                    <b>Law(s):</b> Law shall be any law, rule, ordinance, regulation, order, licence, permit, judgement, decision or other requirement, now or hereafter in effect, of any government authority of competent jurisdiction applicable in India.
                  </div>
                  <div className="title text-white mt-5">Amendments and Modifications</div>       
                  <div className="txt text-white fs-14 text-opacity-75 mt-2">
                    The above-mentioned “Terms of Use” are subject to amendments/modifications at any time. Saloon reserves the right to make any kind of changes or amendments in the policies by posting the same on the platform as well as its social media handles, and you shall be responsible to keep yourself updated about the changes (if any) by checking the Saloon website or social media channels . At all times, you shall be responsible to check the “Terms of Use” and other policies of Saloon.
                    <br /><br />
                    Your continued use of the platform and the offered services after any amendment/modification means you agree to our updated policies. “Terms of Use”, Saloon provides you a personalised, non-transferable, non-exclusive, limited privilege to access, search and make appointment bookings for grooming and personal care through the platform. By agreeing to accept the given “Terms of Use”, you also accept and agree to follow our Terms and Conditions as well as other policies, which include Privacy Policy, Cookie Policy, and Cancellation and Refund Policy.
                  </div>
                  <div className="title text-white mt-5 mb-4">Registration, Booking Fees, Payments and Taxation</div>       
                  <div className="txt text-white fs-14 text-opacity-75 mt-2">
                    <span className="px-3 py-2 bg-theme1 text-white bg-opacity-50">Registration Fees</span>
                    <br /><br />
                    Saloon doesn't charge any amount for registration or appointment booking (Booking Fees). However, the Company reserves the right to charge membership and/or booking fees, by giving prior notice on its platform and social channels.
                    <br /><br />
                    <span className="px-3 py-2 bg-theme1 text-white bg-opacity-50">Payments</span>
                    <br /><br />
                    Saloon allows users to make both cash and online payments for the services. Cash Payments: Customers, when requesting for an appointment, can choose the 'Pay at Counter' option and make the payment at the venue. However, in the case of “Salon at Home” services, cash payments are not applicable. Customers can only make the online payments (in advance) to book their appointments.
                    <br /><br />
                    <span className="px-3 py-2 bg-theme1 text-white bg-opacity-50">Online Payments</span>
                    <br /><br />
                    Customers, when requesting for an appointment, can choose the 'Pay Online' option to make advance payment for the service.
                    <br /><br />
                    In this case, Saloon will collect the payment on behalf of the relevant partner and share a Payment Receipt (not Tax Invoice) with the user. For online transactions, Saloon collects required financial information (such as your debit or credit number, CVV number, and expiration date) as required for payment processing. However, for safety reasons, we do not store the data. As mentioned in the previous section, online payment during the time of booking is the only mode of payment in case of “Salon at Home” Services.
                    <br /><br />
                    <span className="px-3 py-2 bg-theme1 text-white bg-opacity-50">Taxation</span>
                    <br /><br />
                    All the services and prices listed on Saloon Website and Saloon Application are bound under the Finance Act of the Government of India. Presently, Saloon follows Goods and Services Tax introduced as The Constitution Act, 2017, following the passage of Constitution 122nd amendment bill. Thus, the prices of services listed on the Platform are inclusive of 18% GST.
                    <br /><br />
                    <span className="px-3 py-2 bg-theme1 text-white bg-opacity-50">Saloon Wallet</span>
                    <br /><br />
                    <ul className="m-0 d-flex flex-column gap-3 ps-4">
                      <li>As a welcome bonus, Saloon provides 100 Points to the new users on app downloads.</li>
                      <li>One Saloon Point is equivalent to Rs. 1. Thus, 100 Saloon Points is worth Rs. 100.</li>
                      <li>Users can redeem 50 Points for order value ranging from Rs. 99 to Rs. 499 and 100 Points on order value equal to or more than Rs. 500.</li>
                      <li>Saloon Points can't be cancelled or transferred to any other Saloon Wallet.</li>
                      <li>Saloon Points can't be transferred to any bank account or withdrawn to another in the form of cash.</li>
                    </ul>
                    <br /><br />
                    <span className="px-3 py-2 bg-theme1 text-white bg-opacity-50">Use of Saloon Points in the event of Appointment Cancellations</span>
                    <br /><br />
                    When the customer cancels the appointment(s), the Saloon Points used for the transaction(s) (if any) will not be refunded.
                    <br /><br />
                    <span className="px-3 py-2 bg-theme1 text-white bg-opacity-50">Saloon Coupons</span>
                    <br /><br />
                    In its own discretion, Saloon, from time to time, may issue Promotional Coupons and Codes - free of charge - that can be redeemed by the users to get discounts and/or financial gains on different services.
                    <br /><br />
                    <b>You agree that Saloon Promotional Coupons:</b>
                    <br /><br />
                    <ul className="m-0 list-style-number d-flex flex-column gap-3 ps-4">
                      <li>shall not be duplicated, transferred or sold in any manner;</li>
                      <li>shall not be shared with others;</li>
                      <li>should be used within its validity;</li>
                      <li>may be cancelled or disabled by Saloon at any point of time for any reason without liability to the company.</li>
                    </ul>
                    <br /><br />
                    Saloon reserves the right to deduct or remove Promotional Coupons and Codes in the event that the Company reasonably determines or finds that the use of the same was in error, illegal, fraudulent, or in violation of the terms and conditions of the Promotional Coupons.
                  </div>
                  <div className="title text-white mt-5 mb-4">Appointment Cancellation, Rescheduling, and Rebooking</div>
                  <div className="txt text-white fs-14 text-opacity-75 mt-2">
                    <span className="px-3 py-2 bg-theme1 text-white bg-opacity-50">Spa, Salon, and Parlour Appointments</span>
                    <br /><br />
                    To make the appointment bookings and delivery of services easier and hassle-free for both customers and partners, we allow rescheduling, rebooking, and cancellation of service via Saloon Platform (Website and Application).
                    <br /><br />
                    <span className="px-3 py-2 bg-theme1 text-white bg-opacity-50">Cancellation</span>
                    <br /><br />
                    Customers can also choose to cancel their appointment either salon, spa or home-based appointment, 2 hours prior to their scheduled time-slot. To cancel the appointment, you can access the Profile section (on Website) or My Bookings (on Application) and select the Cancel option to cancel the service. Please read the Cancellation and Refund Policy for a better understanding of our cancellation and refund policy.
                    <br /><br />
                    <span className="px-3 py-2 bg-theme1 text-white bg-opacity-50">Rescheduling</span>
                    <br /><br />
                    Customers can reschedule their booking - either salon, spa or home-based appointment, 24 hours prior to their scheduled time-slot. To reschedule, you can access the Profile section (on Website) or My Bookings (on Saloon App) and click on the Reschedule button to change the date and time. As of now, Saloon doesn’t charge any amount for the rescheduling facility, however, the company reserves the rights to make amendments in this policy.
                    <br /><br />
                    <span className="px-3 py-2 bg-theme1 text-white bg-opacity-50">Rebooking</span>
                    <br /><br />
                    Saloon allows an appointment rebooking facility via website and application. Once the booking is completed, the option to rebook the same service(s) is provided to the users. Even if a Saloon Partner or Artist cancels the reservation, users can choose to rebook the same facility or accept the cancellation and request a fresh appointment with another partner.
                  </div>
                  <div className="title text-white mt-5 mb-4">For Saloon at Home Appointments</div>
                  <div className="txt text-white fs-14 text-opacity-75 mt-2">
                    <span className="px-3 py-2 bg-theme1 text-white bg-opacity-50">Cancellation:</span>
                    <br /><br />
                    In case of same day booking, users can CANCEL their appointment within 15 minutes of booking at no additional cost. Cancelling the appointment after 15 minutes of booking may attract a Cancellation Fee of Rs. 50 (subject to change).
                    <br /><br />
                    In case of advance booking, users are entitled to CANCEL the appointment 2 hours before the scheduled time-slot at no additional cost. Cancelling the appointment after that may attract a Cancellation Fee of Rs. 50 (subject to change).
                    <br /><br />
                    <span className="px-3 py-2 bg-theme1 text-white bg-opacity-50">Rescheduling:</span>
                    <br /><br />
                    Users are entitled to Reschedule their appointment at least 2 hours prior to the scheduled time-slot. Please be informed that rescheduling of the appointment is only applicable once per booking.
                    <br /><br />
                    <span className="px-3 py-2 bg-theme1 text-white bg-opacity-50">Rebooking:</span>
                    <br /><br />
                    Users are entitled to rebook any service once the booking is successfully completed.
                    <br /><br />
                    <span className="px-3 py-2 bg-theme1 text-white bg-opacity-50">Text Messages and Emails</span>
                    <br /><br />
                    By creating a Saloon Account, you agree that the company may send you SMS and emails as part of your use of the Saloon Services. You consent to receive information and notifications regarding the business operations of Saloon through text messages and emails and that you acknowledge that any actions you perform to prevent such messages and emails will affect your use of the Services.
                    <br /><br />
                    Saloon, as a courtesy, will send a reminder through text message to the customer about the reserved appointment 1 hour prior to the scheduled time. In case, Saloon is not able to send the text message, please understand that it is your responsibility to remember your appointment times and dates to avoid late arrivals and missed appointments.
                    <br /><br />
                    <span className="px-3 py-2 bg-theme1 text-white bg-opacity-50">Disclaimers</span>
                    <br /><br />
                    <ul className="m-0 d-flex flex-column gap-3 ps-4">
                      <li>Prices of the services mentioned on the Saloon website and Mobile apps are inclusive of GST.</li>
                      <li>All business and contractual policies are granted by and agreed to between the partners and customers. These terms mainly comprise without limitation price, taxes, payment terms, payment channels, time and date of the services and after-sales facilities, if provided by the partner. Saloon doesn't regulate or have any control over the services or acceptance of any commercial/contractual agreements between our partners and the customers. However, Saloon may provide support facilities to the partners as and when required to ensure fulfillment of order and collection of payment under the contractual agreement executed by the company with the partners.</li>
                      <li>Saloon doesn't endorse or ensure warranty of the item-specifics, such as identity, legal titles, patented facilities, creditworthiness, etc. of any partner listed on the Saloon platform. You are requested to review and verify the bona fides on your own of the partner that you choose to deal with and choose the one that fits your specific requirements.</li>
                      <li>Partner will deliver the services along with content and data on an “As is” and “As Available” basis.</li>
                      <li>The discounts and special offers given by our partners are subject to the terms and conditions of the respective partner. The allotted artists and time-slots are subject to revision, depending on the availability.</li>
                      <li>Saloon shall not be responsible for any breach or non-acceptance or any contractual terms between our partners and the customers. Saloon can't and doesn't guarantee that the involved customers or/and partners will carry out any transaction as mentioned on the platform.</li>
                      <li>Saloon operates as an online marketplace aggregator and has taken the role of facilitator. Saloon, during any transaction between the partner and the customer on the platform, comes into or claim possession of any service provided by the partner.</li>
                      <li>Saloon only provides a digital platform (Website and Mobile App) for appointment booking and it is agreed that the contract for sale of any beauty, grooming, and personal care services shall be a strictly bipartite contract between the partner and the customer. In case of complaints from the customer about online booking, quality of services, payment or any other such issues, Saloon shall forward the same to the partner on behalf of the customer and assist them by providing relevant information. The partner shall be responsible for ensuring a satisfactory resolution of the complaints.</li>
                      <li>Saloon will not be held liable for any of the transactions made for using the service(s) offered by the partners.</li>
                      <li>Each claim and complaint related to any incorrect or failed payments must be directed to our payment processing partners and/or your bank (depending on the case)</li>
                    </ul>
                  </div>
                  <div className="title text-white mt-5 mb-4">Saloon - Website and Mobile Apps (iOS and Android) Access and Use</div>
                  <div className="txt text-white fs-14 text-opacity-75 mt-2">
                    You accept, undertake, and agree that the access and use of Saloon platform by you shall be regulated by the given guidelines:
                    <br /><br />
                    You shall not upload, download, host, display, post, publish, update or share any data which:
                    <br /><br />
                    You are not entitled to, do not have any right to or belongs to another individual or business; 
                    <br /><br />
                    <ul className="m-0 d-flex flex-column gap-3 ps-4">
                      <li>Is defamatory, harassing, paedophilic, harmful, obscene, pornographic, blasphemous, pornographic, libelous, slanderous, criminally inciting or invasive of someone's privacy, hateful, or ethnically, racially offensive, disparaging, relating or promoting gambling or money laundering, or otherwise unlawful/illegal in any way; or unlawfully threatening or unlawfully harassing including but not limited to "indecent representation of women" within the meaning of the Indecent Representation of Women (Prohibition) Act, 1986;</li>
                      <li>Is misleading or misrepresentative in any manner;</li>
                      <li>Is patently offensive to the online community, such as sexually explicit content, or content that promotes obscenity, pedophilia, racism, bigotry, hatred or physical harm of any kind against any person or community;</li>
                      <li>Threats, harasses or encourages harassment of any individual;</li>
                      <li>Implicates the circulation of unsolicited mass emailing mailing (referred to as "spamming");</li>
                      <li>Promotes or encourages illegal activities that are threatening, abusive, obscene or defamatory;</li>
                      <li>Hampers any individual's or group's rights [including, but not limited to, rights related to copyright infringement, intellectual property, rights of publicity or rights of privacy (including without limitation unauthorized disclosure of their personal data);</li>
                      <li>Advocates an unlawful or unauthorized copy of someone else's copyrighted work, such as sharing pirated tools, programs or links to them, sharing information to evade manufacture-installed copy-protect systems, etc.;</li>
                      <li>Consists of hidden, restricted or password-only access pages, or images;</li>
                      <li>Provides instructions/guidelines regarding unlawful activities like making or purchasing illegal arms, breaching other's privacy, or devel</li>
                    </ul>
                  </div>
                </div>
                <div className="tab-pane fade" id="artist-tab-pane" role="tabpanel" aria-labelledby="artist-tab" tabIndex={0}>
                  <div className="title text-white">For Salon/Spa Partners and Individual Artists</div>       
                  <div className="txt text-white fs-14 text-opacity-75 mt-2">
                    This document is a digital record in terms of the Information Technology Act, 2000, and policies there under as applicable and the modified rules concerned with electronic records in various forms as amended by the IT Act, 2000.
                    <br /><br />    
                    It outlines the terms and conditions (in form of policies, instructions, and guidelines) that govern the access and use of Saloon Platform (website: www.saloon.com as well as mobile apps - Saloon, Saloon Business, and Saloon Artist) via a specific account or accounts and is a mutual agreement between Salon, Spa and Parlour Owners and Independent Saloon Artists (Contract-based) and Saloon Web Services Private Limited with respect to the Terms and Conditions of registering on Saloon Platform and listing/providing the services for soliciting users through the Saloon Platform. Registering/partnering with Saloon means the partners and artists agree to adhere to Saloon Terms and Conditions for rendering the services. Also, this document is an extended version
                  </div>
                  <div className="title text-white mt-5">General Overview and Scope of this Document</div>       
                  <div className="txt text-white fs-14 text-opacity-75 mt-2">
                    Saloon Platform encompasses the website (www.saloon.com) as well as Mobile Apps - Saloon, Saloon Business, and Saloon Artist Apps for both Android and iOS devices, (hereinafter referred to as “Saloon”, “Saloon Platform” unless specified).
                    <br /><br />    
                    Saloon Platform is fully owned and operated by Saloon Web Services Private Limited, a company incorporated under the Companies Act, 1956 and having its registered office at C-10, First Floor, Sector-3, Noida - 201301.
                    <br /><br />
                    The purpose behind creating Saloon Business and Saloon Artist App is to solicit relevant hair beauty and makeup work for salons, spas and parlours (hereinafter referred to as “Partners”) as well as Independent service providers (hereinafter referred to as “Saloon Artists” or “Artists”).
                    <br /><br />
                    Saloon Partners are required to deliver the booked hair, grooming and beauty services through the Saloon App or website in their registered facility while Saloon Artists are required to deliver the booked services at home or the desired location of the customers. This document further specifies the specific responsibilities, roles, rights, duties, liabilities and obligations of all the involved parties as defined and elaborated in the forthcoming provisions of this document.
                  </div>
                  <div className="title text-white mt-5">Definitions of Different Terminologies Used in this Document:</div>       
                  <div className="txt text-white fs-14 text-opacity-75 mt-2">
                    <b>Service(s):</b> It can be defined as any of the services listed by Partners or Saloon Artists on the Saloon App and Website for customers, including the services proposed to be rendered and listed on the Saloon Platform.
                    <br /><br />    
                    <b>Bookings or Appointments:</b> Bookings or appointments can be described as the process where the customer/user selects the services of their choice listed on the Saloon App or website and books/requests an appointment as per their convenient time.
                    <br /><br />
                    <b>Booking Amount, Fees, Charges:</b> It can be defined as the total amount to be charged for the services and acceptance of the terms of use for receiving the services, Booking ID shall be generated containing the booking details. For Partners, booking amount can be both cash (Pay at Counter) and online (Prepay) while for Artists, there is only one provision for payment (Online Prepay). The prices of the services listed on the Saloon App and Website shall be inclusive of all costs and GST as applicable.
                    <br /><br />
                    <b>Customer(s) or User(s):</b> “Customers” or “Users” are the individuals or group of individuals with the purpose of getting the hair, beauty, makeup, grooming and spa services provided by the partners or artists.
                    <br /><br />
                    <b>Confidential Data:</b> “Confidential Details'' is the information related to Saloon Platform, to the customers and services solicited through the Platform that is not meant for the general mass that include but are not limited to any data signifying or unique to specific users, insights, reports, and other sensitive details about the Services, information derived from the services and bookings. Saloon Platform and its customers’ personal data shall be deemed ‘Confidential’ at all times.
                    <br /><br />
                    <b>Saloon Partners and Partner’s Location:</b> “Saloon Partners” refers to the registered salons, parlours and spas which are entitled to enlist their services and other details related to the services on the Saloon App and Website for solicitation of end-customers. The Location of outlets/facilities for delivery of services which the partners provide during the process of Partner Registration shall be known as Partner’s Location.
                    <br /><br />
                    <b>Saloon Artists:</b> Saloon Artists are those independent professionals or entities who have registered with Saloon to deliver hair, beauty and makeup services at home (or place of their choice) of the customers.
                    <br /><br />
                    <b>Provision of Services for Saloon Partners:</b> It is the process of delivering the enlisted and booked service by the registered Partner to the customer during the time when the customer was present at the Partner’s Location.
                    <br /><br />
                    <b>Provision of Services for Saloon Artists:</b> It is the process of delivering the enlisted and booked service by the registered Artist to the customer at the scheduled date, time and location shared by the customer.
                    <br /><br />
                    <b>Rights to Intellectual Property:</b> “Intellectual Property Rights” means any Trademark, copyright, patent, trade secret, moral right or any possible intellectual property right arising under any Laws and all ancillary and related rights, including all rights of registration and renewal and causes of action for violation, misappropriation or infringement of any of the Intellectual Property.
                    <br /><br />
                    <b>Law(s):</b> Law shall be any law, rule, ordinance, regulation, order, licence, permit, judgement, decision or other requirement, now or hereafter in effect, of any government authority of competent jurisdiction applicable in India.
                  </div>
                  <div className="title text-white mt-5">The Policies to be Understood and Mandatorily Agreed by Saloon Artists and Partners, Who Wish to Solicit Customers/Work are as Following:</div>       
                  <div className="txt text-white fs-14 text-opacity-75 mt-2">
                    <ul className="m-0 d-flex flex-column gap-3 ps-4 list-styled-number">
                      <li><b>Saloon Modus Operandi:</b> To work as an online marketplace aggregator and facilitator by registering partners and artists and delivering an online platform (Mobile app and web), to be accessed and used by end customers who are looking for salon and spa services either at the partner location or their home.</li>
                      <li><b>Acceptance of Terms:</b> By Registering with Saloon, the partner or artist hereby agrees to have read, understood and accepted the terms and conditions, rules, policies and guidelines put forward by Saloon.</li>
                      <li><b>Possible Changes or Amendments to the Terms and Conditions:</b> Saloon shall provide notice 3 to 7 days in advance regarding any updates or changes to the Agreement before they come into effect. However, Saloon also reserves the right to change or update the Terms and Conditions or any applicable policy at any point of time with immediate effect:
                        <br /><br />
                        <ul className="m-0 d-flex flex-column gap-3 ps-4">
                          <li>to mitigate or prevent legal, regulatory, fraud and abuse, or security concerns;</li>
                          <li>to change existing features or include new features to the Saloon Platform or the Services (where this does not materially adversely affect the use of Services); or</li>
                          <li>to restrict or limit the services or activities that Saloon considers offensive, inappropriate, or unsafe.</li>
                        </ul>
                        <br /><br />
                        Continued usage of the Saloon Platform or the listed services after the effective date of any change to this Agreement will constitute the acceptance of that change by the partner or artist. In case, the effective amendments or changes are unacceptable to the artist or partner and they decide not to continue with Saloon, they may terminate the contract as defined in this document’s Termination Clause. However, as a special relief, Saloon, at its wish and discretion, might make the changes, amendments or adjustments for a particular partner or artist. Saloon reserves the right to take the final call on any or all matters.
                      </li>
                      <li>
                        <b>Terms of Payouts and Settlements:</b> The payments from customers shall be received in two ways:
                        <br /><br />
                        <ul className="m-0 d-flex flex-column gap-3 ps-4">
                          <li>Online via any reliable web-based payment gateway integrated to the Saloon Platform.</li>
                          <li>Cash, including hard cash and electronic mode of payments, is collected at the Partner location. After calculating the payables and receivable after successful delivery of services, Saloon and the partner shall transfer the amount payable or receivable to or from each other after deductions and/or adjustments, as applicable, of agreed terms including the GST, if applicable. The payment cycle would be mentioned in the contract of the partner/artist.</li>
                        </ul>
                        <br /><br />
                        location. After calculating the payables and receivable after successful delivery of services, Saloon and the partner shall transfer the amount payable or receivable to or from each other after deductions and/or adjustments, as applicable, of agreed terms including the GST, if applicable. The payment cycle would be mentioned in the contract of the partner/artist.
                      </li>
                      <li><b>Tax and Other Mandatory Obligations:</b> It shall be the sole responsibility of the partners and artists (who are registered under GST) to adhere to the compliances of applicable tax, including but not limited to GST and other statutory dues, as applicable, including the deposition of taxes to the government account and filing of statutory dues.</li>
                      <li><b>Remuneration/Commission for using Saloon Platform:</b> Saloon may charge a compensation in form of commission at a pre-defined percentage of the Pre-GST/GST Inclusive amount (as mentioned in the contract) of the requested service rendered successfully by the partners and artists along with the applicable GST on the amount. It shall be the sole discretion of Saloon to fix the commission from the Partners and Artists. Applicable charges shall be notified to the Partners and Artists via email, SMS or push notifications on the Saloon Business or Artist app, or any other convenient medium. Saloon may withhold, in case of payments made by customers through the integrated payment gateway, the Payment Gateway fees as charged by the service provider against the received amount from the customers.</li>
                      <li><b>Ownership and Rights of Intellectual Property Assets:</b> The ownerships and rights of any Logos, Banners, Trademarks, Symbols, Marks, or any other Intellectual Property being used by Saloon shall be deemed as the property and ownership of the Saloon at all times (unless specified). Artists and Partners shall have no right or permission to use, display, claim, the name or logo or any intellectual property asset of the Saloon Platform or Saloon Web Services Private Limited. Saloon may file a suit legally for recovery and compensation of damages and prosecution, through a civil suit for breach of this clause, in case any infringement of this clause is prima facie established.</li>
                      <li><b>Indemnity Clauses:</b> Artists and Partners shall release the Saloon Platform from, and agree to indemnify, defend and hold harmless us (and any Directors, Officers, Employees, Agents and Affiliates) against, any third party claim, damage, loss, damage, cost, settlement, taxes, expense or other liability (including, without limitation, attorneys’ fees) (each, a “Claim”) arising from or related to:
                        <br /><br />
                        <ul className="m-0 d-flex flex-column gap-3 ps-4">
                          <li>any alleged or actual breach of any representations they have made;</li>
                          <li>any claims related to hygiene and/or quality of services from the customer(s) who have booked, received, or during the provision of the services through Saloon Platform;</li>
                          <li>GST or the collection, payment, or failure to collect or pay GST, or the failure to meet tax registration obligations or duties; or</li>
                          <li>any non-compliance with applicable clause/laws</li>
                        </ul>
                      </li>
                      <li><b>Authenticity of Registered Profile:</b> Saloon Artists and Partners shall validly and appropriately disclose their identity while completing the registration process with Saloon including all essential information. An OTP (One Time Password) verification of the contact information including the Phone Number shall be done by Saloon. The sole responsibility of the authenticity of all the information provided during the registration process shall be of the partners and artists.</li>
                      <li><b>Unauthorised Usage:</b> In case the Saloon Artists and Partners, with a malafide intention of creating nuisance/disturbance of any unwanted activities that may potentially deteriorate or hamper the reputation of the Saloon Platform or Saloon Web Services Private Limited, then in such a scenario the company may remove, suspend, or modify contents or may even terminate the contract of the partner/artist as mentioned in Clause 12, without any prior intimation or notice. For any breach of any Code of Conduct as outlined in this document, the partner/artist shall be solely responsible and shall be liable to indemnify Saloon Web Services Private Limited as given in Clause 9 of this document. The company shall be free to legally file a suit for recovery of damages and prosecution, through a civil suit for breach of this clause, in case any infringement of this clause is prima facie established.</li>
                      <li>
                        <b>Termination Clause:</b> This contract shall terminate on breaching or invoking any of the terms listed below:
                        <br /><br />
                        <ul className="m-0 d-flex flex-column gap-3 ps-4">
                          <li>Saloon Web Services Private Limited may suspend or terminate the contractual relationship with Artist/Partner on breach of any of the clauses of this document, which may warrant such suspension/termination.</li>
                          <li>The Partner/Artist may terminate the contractual relationship if they wish to de-list their services from the Saloon Platform.</li>
                        </ul>
                      </li>
                      <li><b>Customer Review:</b> Saloon Platform has its own unique User Review System, which allows customers to drop their reviews and feedback based on the solicited service and/or experience. Team Saloon has access to the user reviews. Therefore, it shall be deemed a breach of trust as well as the some clauses of this document, if the Saloon Artists and Partners seek forced reviews from the customers or get fake reviews from non-customers for gaining unscrupulous visibility and customers.</li>
                      <li><b>Legal Remedy:</b> Saloon and the registered Artists and Partners shall be bound by this agreement and applicable laws governing the signed contract. Saloon, barring Clause 12 of this agreement, shall also be free to legally file a suit for recovery of damages and prosecution, through a civil suit for breach of this agreement, in case any infringement is prima facie.</li>
                      <li><b>Governing Laws:</b> Any conflict that might arise between the involved parties hereto shall be subjected to the law of the State of Uttar Pradesh, where Saloon has its registered office. Hence, the Courts in Uttar Pradesh shall have exclusive jurisdiction in such matters.</li>
                      <li><b>Marketing Resources and Offers like Discount Coupons Provided by Saloon:</b> To drive new sales and enhance customer retention, Saloon and/or the partners may decide to offer additional discounts in form of coupon codes and cashbacks which minimise the transaction amount for the customers. The party hereto which offers such coupons and discounts shall bear its cost, and therefore, shall keep the other party unaffected.</li>
                      <li><b>Force Majeure:</b> The Company shall not be liable for any delay or failure to perform any of the obligations under this Agreement by any reasons, events or other events beyond its control.</li>
                      <li><b>Waiver:</b> If any Saloon Partner or Artist breaches any of the conditions of this agreement and the company doesn’t take any action against it, it will still be entitled to exercise its rights and remedies in any other situation where any breach of the agreement has been done by the Partner or Artist.</li>
                    </ul>
                  </div>
                  <div className="title text-white mt-5">The Guidelines to be Understood, Agreed, and Compulsorily Practised by Saloon Partners, Who Wish to Solicit Customers/Services through the Saloon Platform are as Follows:</div>       
                  <div className="txt text-white fs-14 text-opacity-75 mt-2">
                    <ul className="m-0 d-flex flex-column gap-3 ps-4 list-styled-number">
                      <li><b>Performance of Services:</b> Saloon Partners and Artists resolve to abide by the policies and instructions as mentioned in this document. Saloon Artists and Partners shall be obliged to deliver the best quality services using quality products, tools and equipment.</li>
                      <li><b>Appointment/Booking Acceptability:</b> Saloon has provisioned a proprietary online booking acceptance system, which allows the platform to automatically accept the booking requests and notifies the respective Saloon Partners and Artists through the Saloon Business/Saloon Artist App, about the appointment requested by the customer for the listed services. Other communication channels might or might not be used to intimate Saloon Artists or Partners. It shall be the responsibility of the Artists and Partners to accept and acknowledge the confirmed appointment and provide the booked services. Failing to do so may force Saloon to take strict action against the party or even terminate the contract.</li>
                      <li><b>Appointment/Booking Cancellation:</b> Saloon Artists and Partners are permitted to cancel the appointment 2 Hours before the scheduled time. If the appointment schedule is under 2 hours, then the Artists and Partners are bound to complete the booking except for justified/valid inoperability because of the measures beyond their control. Visit Cancellation and Refund Policy to learn more about the policy.</li>
                      <li><b>General Code of Conduct:</b> Saloon Artists and Partners are required to follow the policies and guidelines in spirit. They shall also be obliged to rigorously follow the code of ethics or fair practices in case any issue/conflict arises that is not outlined in this document. In case a generally acceptable principle clashes with any specific clause of this document then the latter shall prevail over the prior.</li>
                      <li><b>Maintaining Hygiene and Cleanliness:</b> Saloon Partners, in particular, shall keep the premises as well as tools and equipment for rendering of service clean and hygienic to ensure quality of service.</li>
                      <li><b>Parity of Charges/Fees:</b> Saloon Artists and Partners shall not, with intent to earn unethical profits, provide the services through the Saloon Platform, at such prices which are more than general market standards.</li>
                      <li><b>Payment Terms:</b> Saloon Partners and Artists are expected to keep records of the amount collected from customers by cash and electronic means of payment.</li>
                      <li><b>Solicitation of Customers:</b> The customers who visit the Partners’ outlets through the Saloon Platform or the artists who visit the customers’ place for rendering services mustn’t be solicited to gain personal and unethical business. It will be considered a serious breach of agreed terms and behaviour in general.</li>
                      <li><b>Date and Time Slots:</b> Saloon Platform allows users to book appointments as per their convenient date and time. In case the customer has chosen a slot and the Saloon Artist/Partner has agreed to the booking, then in that case it shall make all possible arrangements to deliver the service(s) at that particular date and time.</li>
                      <li><b>Confidential Customers Information:</b> The confidential information of the customers, such as name, contact details, address and other personal details that come to the knowledge of Saloon shall be kept confidential and no intentional or unintentional use of the customer data shall be allowed.</li>
                      <li><b>Responsibility:</b> Saloon Artists and Partners shall not be allowed to use the Saloon Platform in any way that results in, or is likely to cause, the Platform or access to it to be interrupted or hampered. Saloon Partners and Artists must understand and agree that they, and not Saloon, are responsible for all electronic communications and content shared from their device, and thus, they must use Saloon Platform solely for ethical/lawful purposes.</li>
                      <li>
                        <b>Saloon Artists and Partners shall not use the platform for the following points:</b>
                        <br /><br />
                        <ul className="m-0 d-flex flex-column gap-3 ps-4 list-styled-number">
                          <li>for unlawful activities and fraudulent purposes, or in connection with a criminal</li>
                          <li>to send, access, use or reuse any material that does not belong to them; or is illegal, harassing, obsense, deabsusive, offensive (including but not limited to pornography or sexually explicit materials)</li>
                          <li>that advocates/promotes/encourages racism, hatred, bigotry, or physical harm), indecent, deceptive, defamatory, misleading, blasphemous, libelous, pedophilic or menacing; ethnically objectionable, disparaging, or,</li>
                          <li>in breach of copyright, trademark, confidentiality, privacy or any other proprietary information or right; or,</li>
                          <li>is otherwise injurious to third parties; or</li>
                          <li>relates to or promotes money laundering or gambling; or,</li>
                          <li>is harmful to minors in any way; or,</li>
                          <li>impersonates another person; or threatens the unity, integrity, security or sovereignty of India or friendly relations with foreign States; or,</li>
                          <li>objectionable or otherwise unlawful in any manner whatsoever; or,</li>
                          <li>which consists of or comprises software viruses, political campaigning, commercial solicitation, chain letters, mass mailings or any “spam; or</li>
                          <li>to cause annoyance, inconvenience or needless anxiety.</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="title text-white mt-5 mb-4">Registration, Booking Fees, Payments and Taxation</div>       
                  <div className="txt text-white fs-14 text-opacity-75 mt-2">
                    <span className="px-3 py-2 bg-theme1 text-white bg-opacity-50">Registration Fees</span>
                    <br /><br />
                    Saloon doesn't charge any amount for registration or appointment booking (Booking Fees). However, the Company reserves the right to charge membership and/or booking fees, by giving prior notice on its platform and social channels.
                    <br /><br />
                    <span className="px-3 py-2 bg-theme1 text-white bg-opacity-50">Payments</span>
                    <br /><br />
                    Saloon allows users to make both cash and online payments for the services.
                    <br /><br />
                    <ul className="m-0 d-flex flex-column gap-3 ps-4">
                      <li>
                        <span className="text-white text-opacity-100">Cash Payments:</span>
                        <br />
                        Customers, when requesting for an appointment, can choose the 'Pay at Counter' option and make the payment at the venue. However, in the case of “Salon at Home” services, cash payments are not applicable. Customers can only make the online payments (in advance) to book their appointments.
                      </li>
                      <li>
                        <span className="text-white text-opacity-100">Online Payments:</span>
                        <br />
                        Customers, when requesting for an appointment, can choose the 'Pay Online' option to make advance payment for the service.
                      </li>
                    </ul>
                    <br />
                    In this case, Saloon will collect the payment on behalf of the relevant partner and share a Payment Receipt (not Tax Invoice) with the user. For online transactions, Saloon collects required financial information (such as your debit or credit number, CVV number, and expiration date) as required for payment processing. However, for safety reasons, we do not store the data.
                    <br /><br />
                    As mentioned in the previous section, online payment is the only mode of payment in case of “Salon at Home” Services.
                  </div>
                  <div className="title text-white mt-5">Taxation</div>       
                  <div className="txt text-white fs-14 text-opacity-75 mt-2">
                    All the services and prices listed on Saloon Website and Saloon Application are bound under the Finance Act of the Government of India. Presently, Saloon follows Goods and Services Tax introduced as The Constitution Act, 2017, following the passage of Constitution 122nd amendment bill. Thus, the prices of services listed on the Platform are inclusive of 18% GST.
                  </div>
                  <div className="title text-white mt-5">Declaration For Gst Registered Saloon Partners And Artists For Gst Compliances Wrt Transactions Through Saloon Platform</div>       
                  <div className="txt text-white fs-14 text-opacity-75 mt-2">
                    I/We, being the “GST Registered Service Provider” registering on behalf of our Salon/Spa/Parlour and services of the similar nature providing entity on the Saloon Platform, which is owned and operated by Saloon Web Services Private Limited, hereby declare the below mentioned points:
                    <br />
                    <ul className="m-0 d-flex flex-column gap-3 ps-4">
                      <li>Our/My Business or my Individual practice is registered with the GST Tax Department of Government of India under the GSTN, as being declared on the Registration Profile section of Saloon Platform.</li>
                      <li>I/We agree that I/We am/are not a Composition Scheme service provider under the GSTN and that my/our GST Registration is under the regular scheme of the GST Tax Department.</li>
                      <li>I/We am/are acknowledge that the transactions with Saloon Web Services Private Limited through the mobile and web-based platform owned and operated by it.</li>
                      <li>I/We am/are aware of my/our duty of collection and payment of taxes collected against the services provided through the Saloon platform, with respect to business generated by me/us through the Saloon Platform as</li>
                      <li>I/We acknowledge my/our duty of timely filing of GST for the business generated by me/us through the Saloon Platform.</li>
                      <li>I/We, am/are aware that the transactions and settlement with Saloon is liable to TCS (Tax Collected At Source) of the current GST provisions under section 24(x) of CGST Act, 2017 (“Includes Reference to Similar Provisions under respective State, UT GST Acts”) as applicable to Saloons, and hence, TCS shall be deducted and paid to the credit of Government by the Saloon and the credit of which shall be available to me/us as per applicable GST</li>
                      <li>I/We am/are aware of my/our responsibility of timely intimation to the Saloon in case my/our GST registration is Revoked/Surrendered/Cancelled owing to any consequence whatsoever under the Rules and Provisions of CGST Act, 2017.</li>
                      <li>I/We, am/are aware that the amount charged through the invoice(s) for Commission/Fee/Remuneration by the Saloon for the generated business by me/us through the Saloon Platform is liable to applicable GST.</li>
                      <li>I/We, hereby acknowledge that this declaration shall be deemed to be filled, agreed, and communicated, along with all the relevant information as needed in this declaration, to the Saloon on verification of the profile to be filled in by me/us provided on Saloon Platform.</li>
                    </ul>
                  </div>
                  <div className="title text-white mt-5">Declaration For Existing Unregistered Gst Partners And Saloon Artists With Respect To Transactions Through The Saloon Platform</div>       
                  <div className="txt text-white fs-14 text-opacity-75 mt-2">
                    I/We, being the “Unregistered GST Service Provider” registering on behalf of our Salon/SPA/Beauty Parlour and services of similar nature providing entity on the Saloon Platform, hereby declare the following as mentioned below:
                    <br /><br />
                    I/We acknowledge that the transactions through Saloon Platform, owned by Saloon Web Services Private Limited, falls under the category of e-commerce transactions.
                    <br /><br />
                    <ul className="m-0 d-flex flex-column gap-3 ps-4">
                      <li>I/We hereby declare that my/our business entity or individual practice is not registered with the Goods and Services Tax Department as my/our aggregate taxable delivery of goods and services is well below the set threshold limit for GST.</li>
                      <li>I/We, am/are, aware of my/our duty and responsibility of timely intimation to Saloon Web Services Private Limited in case my/our aggregate taxable turnover exceeds the threshold limit for GST as well as obtaining the GST Certificate and timely notification of the GSTN to Saloon Web Services Private Limited.</li>
                      <li>I/We acknowledge that the amount charged/requested through the invoice(s) for Commission/Fee/Remuneration by Saloon business generation for me/us through their Online Platform is liable to GST as applicable.</li>
                      <li>I/We hereby acknowledge that this declaration shall be deemed to be filled, agreed, and communicated, along with all the relevant information as needed in this declaration, to Saloon on verification of the profile to be filled in by me/us provided on the Saloon Platform.</li>
                    </ul>
                    This is an electronically generated declaration, and does not require any physical signature.
                  </div>
                  <div className="title text-white mt-5">Saloon Points/Wallet Points</div>       
                  <div className="txt text-white fs-14 text-opacity-75 mt-2">
                    Saloon Points/Wallet Points are the points given in the user’s account that can be deemed during payment for appointment booking on Saloon Platform as per the outlined terms and conditions. Saloon Points have a validity period that is generally mentioned in Terms and Conditions and can differ as per Saloon’s discretion. Saloon WEB SERVICES PRIVATE LIMITED reserves the right to update, amend, or cancel provision for Saloon Points for its users at any given point of time without any prior notice.
                    <br /><br />
                    <b>Saloon Wallet Points</b>
                    <br />
                    <ul className="m-0 d-flex flex-column gap-3 ps-4">
                      <li>As a welcome bonus, Saloon provides 100 Points to the new users on app downloads.</li>
                      <li>1 Saloon Point is equivalent to Rs. 1. Thus, 100 Saloon Points is worth Rs. 100.</li>
                      <li>Users can redeem 50 Points for order value ranging from Rs. 99 to Rs. 499 and 100 Points on order value equal to or more than Rs. 500.</li>
                      <li>Saloon Points can't be cancelled or transferred to any other Saloon Wallet.</li>
                      <li>Saloon Points can't be transferred to any bank account or withdrawn to another in the form of cash.</li>
                    </ul>
                    <br />
                    Use of Saloon Points in the event of Appointment Cancellations
                    <br /><br />
                    <ul className="m-0 d-flex flex-column gap-3 ps-4">
                      <li>When the customer cancels the appointment(s), the Saloon Points used for the transaction(s) (if any) will not be refunded.</li>
                      <li>When a Saloon Partner or Artist cancels the appointment(s), the Saloon Points used for the transaction(s) (if any) will be refunded to the customers, which they can reuse later.</li>
                    </ul>
                  </div>
                  <div className="title text-white mt-5">Saloon Coupons</div>       
                  <div className="txt text-white fs-14 text-opacity-75 mt-2">
                    In its own discretion, Saloon, from time to time, may issue Promotional Coupons and Codes - free of charge - that can be redeemed by the users to get discounts and/or financial gains on different services.
                    <br /><br />
                    You agree that Saloon Promotional Coupons:
                    <br />
                    <ul className="m-0 d-flex flex-column gap-3 ps-4">
                      <li>shall not be duplicated, transferred or sold in any manner;</li>
                      <li>shall not be shared with others;</li>
                      <li>should be used within its validity;</li>
                      <li>may be cancelled or disabled by Saloon at any point of time for any reason without liability to the company.</li>
                    </ul>
                    <br />
                    Saloon reserves the right to deduct or remove Promotional Coupons and Codes in the event that the Company reasonably determines or finds that the use of the same was in error, illegal, fraudulent, or in violation of the terms and conditions of the Promotional Coupons.
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
 
</div>

  )
}

export default TermsAndConditions