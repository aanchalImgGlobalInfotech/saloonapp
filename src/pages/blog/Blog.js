import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../../common/layout/footer";
import { getData } from "../../components/apiinstance/Api";

function Blog() {
  const [Blog, setBlog] = useState([]);
  const [category, setCategory] = useState();
  const getBlog = async () => {
    const res = await getData("get-blog");
    const response = await getData("getCategoryListing");
    setCategory(response.data);
    setBlog(res.data);
    console.log(res.data, "rrrrrrrrrrrrrrrrr");
    console.log(response.data, "rrrrrrrrrrrrrrrrr");
  };
  console.log(Blog, "blogggggggggggggggggggg");
  useEffect(() => {
    getBlog();
  }, []);

  return (
    <div>
      <nav
        className="navbar navbar-expand-md navbar-dark bg-theme2 navbarhed position-fixed w-100"
        aria-label="Fourth navbar example"
      >
        <div className="container">
          <a className="navbar-brand logonav" href="index.html">
            <img src="assets/img/header/logo.svg" alt="logo" />
          </a>
          <div className="buttons d-flex gap-sm-3 gap-2">
            <NavLink
              to="/downloadPage"
              className="btn btn-light loginBtn px-sm-4 py-sm-2"
              download
            >
              Download
            </NavLink>
            <NavLink
              to="/login"
              className="btn btn-theme1 loginBtn text-white px-sm-4 py-sm-2"
            >
              Login
            </NavLink>
          </div>
        </div>
      </nav>
      <div className="breadcrumbMain position-absolute">
        <ul className="breadcrumb d-block m-auto list-unstyled">
          <li className="crumb first-crumb position-relative d-inline-block fs-12 float-start text-white">
            <NavLink
              className="text-decoration-none text-white"
              to="/Dashboard"
            >
              Home
            </NavLink>
          </li>
          <li className="crumb middle-crumb position-relative d-inline-block fs-12 float-start text-white active">
            Blog
          </li>
        </ul>
      </div>
      <div className="blogMain possition-re;ative">
        <div className="container-fluid px-0">
          <div className="mainInner">
            <div className="row mx-0">
              <div className="col-12 px-0">
                <div className="banner">
                  <div className="row mx-0">
                    <div className="col-lg-8 col-md-7 px-0">
                      <div className="imgOuter w-100">
                        <img
                          className="w-100 h-100"
                          src="assets/img/blog/blogMain.jpg"
                          alt
                        />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-5 px-0 bg-black d-flex align-items-center">
                      <div className="formOuter p-4 px-sm-5">
                        <div className="title text-white">Quote of the Day</div>
                        <div className="text text-white mt-3">
                          " A woman whose smile is open and whose expression is
                          glad has a kind of beauty no matter what she wears. "
                        </div>
                        <div className="category text-white fs-sm-5 fs-6 mt-4">
                          Category
                        </div>
                        <div className="input-group d-block mt-3">
                          <label htmlFor className="form-label text-white">
                            Select Category
                          </label>
                          <select
                            className="form-select w-100 rounded-1 py-2 ps-3 shadow-none"
                            aria-label="Default select example"
                          >
                            <option selected>Select Category</option>
                            {category?.map((el, i) => (
                              <option value={i}>{el.Name}</option>
                            ))}
                          </select>
                        </div>
                        <div className="input-group d-block mt-3 position-relative">
                          <label
                            htmlFor="search"
                            className="form-label text-white"
                          >
                            Search
                          </label>
                          <input
                            type="search"
                            className="form-control m-0 w-100 rounded-1 py-2 ps-3 shadow-none pe-5 z-2"
                            placeholder="Search..."
                          />
                          <button
                            type="button"
                            className="btn btn-transparent searchBtn border-0 shadow-none position-absolute z-3 bottom-0 end-0 border-start py-2"
                          >
                            <img src="assets/img/icon/search1.svg" alt />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 bg-dark">
                <div className="container">
                  <div className="blogsOuter py-sm-5 py-4">
                    <div className="row gap-3">
                      <div className="col-12">
                        <div className="pageHeading text-white d-flex align-items-center gap-3">
                          <span className="title">Latest update</span>
                          <span className="lines d-flex gap-3" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="row g-4">
                          {Blog[0]?.map((item) => (
                            <NavLink
                              to={`/nextblog/${item._id}`}
                              className="col-lg-3 col-sm-6"
                              style={{ textDecoration: "none", color: "black" }}
                            >
                              <div className="blogOuter rounded-4 overflow-hidden position-relative">
                                <div className="imgOuter overflow-hidden">
                                  <img
                                    className="w-100 h-100"
                                    src="assets/img/blog/blogImg1.jpg"
                                    alt
                                  />
                                </div>
                                <div className="blogDetail p-3 bg-white row gap-2 mx-0">
                                  <div className="blogTitle col-12 px-0">
                                    {item.Title}
                                  </div>
                                  <div className="blogDecription col-12 px-0 overflow-hidden">
                                    {item.Description}
                                  </div>
                                  <ul className="d-flex align-items-center gap-sm-3 gap-2 list-unstyled p-0 m-0 col-12 px-0">
                                    <li className="text-muted border-end border-2 border-gray pe-sm-3 pe-2">
                                      Beauty, Tranding
                                    </li>
                                    <li className="text-muted">
                                      {item.WriteDate}
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </NavLink>
                          ))}
                        </div>
                      </div>
                      <div className="col-12">
                        <div
                          className="pagination justify-content-center gap-2 gap-sm-3"
                          data-pagination
                        >
                          <a href="#" disabled>
                            <span className="arrowIcon d-flex align-items-center justify-content-center p-sm-2">
                              <img
                                className="w-100"
                                src="assets/img/icon/leftDubbleArrow.svg"
                                alt
                              />
                            </span>
                          </a>
                          <ul className="list-unstyled m-0 d-inline p-0">
                            <li className="rounded-1 d-inline-flex justify-content-center align-items-center current">
                              <a className="text-decoration-none" href="#1">
                                1
                              </a>
                            </li>
                            <li className="rounded-1 d-inline-flex justify-content-center align-items-center">
                              <a className="text-decoration-none" href="#2">
                                2
                              </a>
                            </li>
                            <li className="rounded-1 d-inline-flex justify-content-center align-items-center">
                              <a className="text-decoration-none" href="#3">
                                3
                              </a>
                            </li>
                            <li className="rounded-1 d-inline-flex justify-content-center align-items-center">
                              <a className="text-decoration-none" href="#4">
                                4
                              </a>
                            </li>
                            <li className="rounded-1 d-inline-flex justify-content-center align-items-center">
                              <a className="text-decoration-none" href="#5">
                                …
                              </a>
                            </li>
                            <li className="rounded-1 d-inline-flex justify-content-center align-items-center">
                              <a className="text-decoration-none" href="#10">
                                10
                              </a>
                            </li>
                          </ul>
                          <a href="#2">
                            <span className="arrowIcon d-flex align-items-center justify-content-center p-sm-2">
                              <img
                                className="w-100"
                                src="assets/img/icon/rightDubbleArrow.svg"
                                alt
                              />
                            </span>
                          </a>
                        </div>
                      </div>
                      <Footer />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
