import React, { useEffect, useState } from "react";
import Footer from "../../common/layout/footer/footer";
import Footer2 from "../../common/layout/footer/Footer2 ";
import Header2 from "../../common/layout/header/Header2";
import { getData, postData } from "../../components/apiinstance/Api";
import parse from "html-react-parser";

const FAQs = () => {
  const [data, setData] = useState([]);
  const [questions, setQuestions] = useState("");
  const getFaq = async () => {
    const res = await getData("get-faq");
    console.log(res.data[0]);
    setData(res.data[0]);
  };

  useEffect(() => {
    getFaq();
  }, []);

  const askQuestion = async () => {
    const res = await postData(`Ask-qustion?qustion=${questions}`);
    console.log(res);
  };
  return (
    <div>
      <Header2 />
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
                      {data
                        .slice(0, Math.floor(data.length / 2 + 1))
                        .map((item) => {
                          return (
                            <div className="col-12">
                              <div className="accordion-item bg-black border-theme1">
                                <h2
                                  className="accordion-header"
                                  id="headingOne"
                                >
                                  <button
                                    className="accordion-button shadow-none bg-theme1 text-white fs-14 justify-content-between d-flex align-items-center"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#${item?._id}`}
                                    aria-expanded="true"
                                    aria-controls={`${item?._id}`}
                                  >
                                    <span>{item?.question}</span>
                                    <span className="d-block circle position-relative">
                                      <span className="d-block position-absolute bg-white m-auto horizontal" />
                                      <span className="d-block position-absolute bg-white m-auto vertical" />
                                    </span>
                                  </button>
                                </h2>
                                <div
                                  id={`${item?._id}`}
                                  className="accordion-collapse collapse"
                                  aria-labelledby="headingOne"
                                  data-bs-parent="#accordionFaq"
                                >
                                  <div className="accordion-body">
                                    <div className="title text-white">
                                      Kindly follow the given steps :-
                                    </div>
                                    <div className="txt text-white fs-14 text-opacity-75 mt-2">
                                      {parse(item?.answer)}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="accordion d-flex flex-column gap-3">
                    <div className="row gap-3">
                      {data
                        .slice(Math.floor(data.length / 2) + 1, data.length)
                        .map((item) => {
                          return (
                            <div className="col-12">
                              <div className="accordion-item bg-black border-theme1">
                                <h2
                                  className="accordion-header"
                                  id="headingSeven"
                                >
                                  <button
                                    className="accordion-button shadow-none bg-theme1 text-white fs-14 justify-content-between d-flex align-items-center collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#${item?._id}`}
                                    aria-expanded="true"
                                    aria-controls={`${item?._id}`}
                                  >
                                    <span>{item?.question}</span>
                                    <span className="d-block circle position-relative">
                                      <span className="d-block position-absolute bg-white m-auto horizontal" />
                                      <span className="d-block position-absolute bg-white m-auto vertical" />
                                    </span>
                                  </button>
                                </h2>
                                <div
                                  id={`${item?._id}`}
                                  className="accordion-collapse collapse"
                                  aria-labelledby="headingSeven"
                                  data-bs-parent="#accordionFaq"
                                >
                                  <div className="accordion-body">
                                    <div className="title text-white">
                                      Kindly follow the given steps :-
                                    </div>
                                    <div className="txt text-white fs-14 text-opacity-75 mt-2">
                                      {parse(item?.answer)}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 mx-auto">
              <div className="askQuestion bg-theme1 p-2 rounded-pill mt-5">
                <div className="row">
                  <div className="col-12 mx-auto">
                    <div className="input-group position-relative">
                      <input
                        type="text"
                        className="form-control shadow-none  rounded-pill pe-5 border-theme1 ps-3 fs-14 p-2"
                        placeholder="Please  Ask any questions ? "
                        onChange={(e) => setQuestions(e.target.value)}
                      />
                      <button
                        className="btn btn-dark shadow-none px-4 askQuestionBtn rounded-pill fs-14 position-absolute top-0 end-0 h-100"
                        onClick={askQuestion}
                      >
                        Ask
                      </button>
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

export default FAQs;
