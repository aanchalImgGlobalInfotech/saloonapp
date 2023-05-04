import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Footer from "../../common/layout/footer/footer";
import { getData } from "../../components/apiinstance/Api";
import parse from "html-react-parser";

function Blog() {
  const navigate = useNavigate();
  const [Blog, setBlog] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [category, setCategory] = useState();
  const [searchValue, setSearchValue] = useState("");
  const getBlog = async () => {
    const res = await getData("get-blog");
    const response = await getData("getCategoryListing");
    setCategory(response.data);
    setBlog(res.data[0]);
    console.log(res, "get blog");
    console.log(response.data, "categorylist");
  };

  useEffect(() => {
    getBlog();
  }, []);

  const selectHandler = (e) => {
    console.log(e.target.value);
    navigate("/blog-search-result", {
      state: {
        categoryId: e.target.value,
      },
    });
  };
  //  Custom Pegination

  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 4;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const records = Blog?.slice(firstIndex, lastIndex);
  const npage = Math.ceil(Blog?.length / recordPerPage) || 1;
  const numbers = [...Array(npage + 1).keys()].slice(1);
  console.log("recordsrecords", records);
  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const changePage = (id) => {
    setCurrentPage(id);
  };
  const nextPage = () => {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  };

  const startSearch = () => {
    navigate("/blog-search-result", {
      state: {
        searchKey: searchValue,
      },
    });
  };
  return (
    <div>
      <nav
        className="navbar navbar-expand-md navbar-dark bg-theme2 navbarhed position-fixed w-100"
        aria-label="Fourth navbar example"
      >
        <div className="container">
          <Link className="navbar-brand logonav" to="/Dashboard">
            <img src="assets/img/header/logo.svg" alt="logo" />
          </Link>
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
                          src="/assets/img/blog/blogMain.jpg"
                          alt="image"
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
                          <label htmlFor="" className="form-label text-white">
                            Select Category
                          </label>
                          <select
                            className="form-select w-100 rounded-1 py-2 ps-3 shadow-none"
                            aria-label="Default select example"
                            onChange={selectHandler}
                          >
                            <option selected>Select Category</option>
                            {category?.map((el, i) => (
                              <option value={el._id} key={i}>
                                {el.Name}
                              </option>
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
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                          />
                          <button
                            type="button"
                            className="btn btn-transparent searchBtn border-0 shadow-none position-absolute z-3 bottom-0 end-0 border-start py-2"
                            onClick={startSearch}
                          >
                            <img
                              src="/assets/img/icon/search1.svg"
                              alt="image"
                            />
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
                          {records?.map((item, i) => (
                            <NavLink
                              key={i}
                              to="/blog-details"
                              state={{ itemId: item._id }}
                              className="col-lg-3 col-sm-6"
                              style={{ textDecoration: "none", color: "black" }}
                            >
                              <div className="blogOuter rounded-4 overflow-hidden position-relative">
                                <div className="imgOuter overflow-hidden">
                                  <img
                                    className="w-100 h-100"
                                    src={item?.image}
                                    alt="image"
                                  />
                                </div>
                                <div className="blogDetail p-3 bg-white row gap-2 mx-0">
                                  <div className="blogTitle col-12 px-0">
                                    {item.Title}
                                  </div>
                                  <div className="blogDecription col-12 px-0 overflow-hidden">
                                    {parse(
                                      item.Description
                                        ? item.Description?.slice(0, 100)
                                        : "Valentine’s week is around! Are you excited? The main focus is the look we carry. When it comes to valentine’s day makeup look, women are not sure about how to become date-perfect."
                                    )}
                                  </div>
                                  <ul className="d-flex align-items-center gap-sm-3 gap-2 list-unstyled p-0 m-0 col-12 px-0">
                                    <li className="text-muted border-end border-2 border-gray pe-sm-3 pe-2">
                                      Beauty, Tranding
                                    </li>
                                    <li className="text-muted">
                                      {/* {item.WriteDate} */}
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
                          <Link
                            to=""
                            onClick={prevPage}
                            disabled={currentPage == 1}
                          >
                            <span className="arrowIcon d-flex align-items-center justify-content-center p-sm-2">
                              <img
                                className="w-100"
                                src="/assets/img/icon/leftDubbleArrow.svg"
                                alt="image"
                              />
                            </span>
                          </Link>
                          <ul className="list-unstyled m-0 d-inline p-0">
                            {numbers.map((n, i) => (
                              <li
                                key={i}
                                className={`rounded-1 d-inline-flex justify-content-center align-items-center ${
                                  currentPage == n ? "current" : ""
                                }`}
                              >
                                <Link
                                  className="text-decoration-none"
                                  to=""
                                  onClick={() => changePage(n)}
                                >
                                  {n}
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <Link
                            to=""
                            onClick={nextPage}
                            disabled={currentPage == numbers.length}
                          >
                            <span className="arrowIcon d-flex align-items-center justify-content-center p-sm-2">
                              <img
                                className="w-100"
                                src="/assets/img/icon/rightDubbleArrow.svg"
                                alt="image"
                              />
                            </span>
                          </Link>
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
