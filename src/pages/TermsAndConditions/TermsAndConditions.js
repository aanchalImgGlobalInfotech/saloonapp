import parse from "html-react-parser";
import React, { useEffect, useState } from "react";
import Footer from "../../common/layout/footer/footer";
import Footer2 from "../../common/layout/footer/Footer2 ";
import Header2 from "../../common/layout/header/Header2";
import { getData } from "../../components/apiinstance/Api";
const TermsAndConditions = () => {
  const [dataArtist, setDataArtist] = useState([]);
  const [dataCustomer, setDataCustomer] = useState([]);
  const getDataForTermsAndCondition = async () => {
    const res = await getData(
      "get-faq?question=Terms and Conditions for Artist"
    );
    const res2 = await getData(
      "get-faq?question=Terms and Conditions for Customer"
    );
    setDataArtist(res.data[0]);
    setDataCustomer(res2.data[0]);
  };
  useEffect(() => {
    getDataForTermsAndCondition();
  }, []);
  return (
    <div classname="overflow-hideen ">
      <Header2 />
      <div className="treamConditionMain bg-dark">
        <div className="container">
          <div className="row gap-4">
            <div className="col-12">
              <div className="pageHeading text-white">Terms and Conditions</div>
            </div>
            <div className="col-12">
              <div className="row gap-4">
                <div className="col-12">
                  <ul
                    className="nav nav-tabs customTabs border-0 bg-black"
                    id="myTab"
                    role="tablist"
                  >
                    <li className="nav-item border-0 m-0" role="presentation">
                      <button
                        className="nav-link border-0  px-0 text-white rounded-0 text-center fs-14 w-100 bg-black active"
                        id="customer-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#customer-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="customer-tab-pane"
                        aria-selected="true"
                      >
                        Customer
                      </button>
                    </li>
                    <li className="nav-item border-0 m-0" role="presentation">
                      <button
                        className="nav-link border-0  px-0 text-white rounded-0 text-center fs-14 w-100 bg-black"
                        id="artist-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#artist-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="artist-tab-pane"
                        aria-selected="false"
                      >
                        Artist
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="col-12">
                  <div
                    className="tab-content customTabContent"
                    id="myTabContent"
                  >
                    <div
                      className="tab-pane fade show active"
                      id="customer-tab-pane"
                      role="tabpanel"
                      aria-labelledby="customer-tab"
                      tabIndex={0}
                    >
                      <div className="title text-white">For Customers</div>
                      <div className="txt text-white fs-14 text-opacity-75 mt-2">
                        {parse(
                          dataCustomer[0]?.answer
                            ? dataCustomer[0]?.answer
                            : "No Data"
                        )}
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="artist-tab-pane"
                      role="tabpanel"
                      aria-labelledby="artist-tab"
                      tabIndex={0}
                    >
                      <div className="title text-white">
                        For Salon/Spa Partners and Individual Artists
                      </div>
                      <div className="txt text-white fs-14 text-opacity-75 mt-2">
                        {parse(
                          dataArtist[0]?.answer
                            ? dataArtist[0]?.answer
                            : "No Data"
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
      <Footer />
    </div>
  );
};
export default TermsAndConditions;
