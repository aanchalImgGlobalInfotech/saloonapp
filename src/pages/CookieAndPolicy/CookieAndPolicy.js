import React, { useEffect, useState } from "react";
import Footer from "../../common/layout/footer/footer";
import Footer2 from "../../common/layout/footer/Footer2 ";
import Header2 from "../../common/layout/header/Header2";
import { getData } from "../../components/apiinstance/Api";
import parse from "html-react-parser";
const CookieAndPolicy = () => {
  const [data, setData] = useState([]);
  const getDataForCookieAndPolicy = async () => {
    const res = await getData("get-faq?question=Cookie Policy");
    setData(res.data[0]);
  };
  useEffect(() => {
    getDataForCookieAndPolicy();
  }, []);
  console.log(data);
  return (
    <div>
      <Header2 />
      <div className="cancellationRefundMain bg-dark">
        <div className="container">
          <div className="row gap-2">
            <div className="col-12">
              <div className="pageHeading text-white">Cookie Policy</div>
            </div>
            <div className="col-12">
              {parse(data[0]?.answer ? data[0]?.answer : "N0 Data")}
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
      <Footer />
    </div>
  );
};
export default CookieAndPolicy;
