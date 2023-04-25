import React, { useEffect, useState } from "react";
import Footer from "../../common/layout/footer/footer";
import Footer2 from "../../common/layout/footer/Footer2 ";
import Header2 from "../../common/layout/header/Header2";
import { getData } from "../../components/apiinstance/Api";
import parse from 'html-react-parser'

const PrivacyAndPolicy = () => {
  const[data,setData]=useState([])
    const getDataForPrivacyAndPolicy = async() =>{
         
         const res = await getData("get-faq?question=Privacy Policy")
         setData(res.data[0])
    }

    useEffect(()=>{
      getDataForPrivacyAndPolicy();
    },[])
 
  return (
    <div>
      <Header2 />
      <div className="faqMain bg-dark">
        <div className="container">
          <div className="row gap-2">
            <div className="col-12">
              {/* <div className="pageHeading text-white">Privacy Policy</div> */}
            </div>
            <div className="col-12">
              {/* <div className="title text-white">
                Privacy Policy for Zoylee Web Services Pvt. Ltd
              </div> */}
              <div className="txt text-white fs-14 text-opacity-75 mt-2">
              {parse(data[0]?. answer?data[0]?.answer.toString():'<h1>No Data</h1>' )}
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

export default PrivacyAndPolicy;
