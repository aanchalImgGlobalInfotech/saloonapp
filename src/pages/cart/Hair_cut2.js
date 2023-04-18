import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Footer from "../../common/layout/footer/footer";
import Footer2 from "../../common/layout/footer/Footer2 ";
import HeaderHome from "../../common/layout/header/HeaderHome";
import { getData } from "../../components/apiinstance/Api";
import {
  saloonservice,
  WhislistItem,
} from "../../components/redux/redux1/actions";

function Hair_cut2() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [dataByLocation, setDataByLocation] = useState();
  const [packages, setPackages] = useState([]);
  const [type, setType] = useState("saloon");
  const cityName = useSelector((state) => state.cityName);
  const [category, setCategory] = useState("");
  const categories = localStorage.getItem("category");
  const [multiGender, setMultiGender] = useState([]);
  const [preferencesForm, setPreferencesForm] = useState({
    minPrice: "",
    maxPrice: "",
    sortPrice: "",
  });

  const multiGenderHandler = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    if (checked) {
      setMultiGender([...multiGender, value]);
    } else {
      setMultiGender(multiGender.filter((e) => e !== value));
    }
  };
  const handleChange = (evt) => {
    const value = evt.target.value;
    setPreferencesForm({
      ...preferencesForm,
      [evt.target.name]: value,
    });
  };

  const handler = async (value) => {
    const path = `saloon-store?id=${value ? value : ""}`;
    const res = await getData(path);
    dispatch(saloonservice(res.data));
  };

  const getWhislistapi = async (value) => {
    const path = `get-wishlist?id=${value ? value : ""}`;
    const res = await getData(path);

    if (res.status == true) {
      dispatch(WhislistItem(res.data));
      navigate("/services");
    } else {
      dispatch(WhislistItem(res.data));
      navigate("/services");
    }
  };

  //  Filter according saloon ,parlour and spa
  const filterAllData = async (typ) => {
    console.log("ghghhnghnhg", typ, "ll", categories);
    let types = typ || categories || type;
    let typeMale = `&type=${multiGender[0]}`;
    let typeFemale = `&type=${multiGender[1]}`;
    let typeUnisex = `&type=${multiGender[2]}`;
    let max = `&ServicePrice_lt=${preferencesForm.maxPrice}`;
    let min = `&ServicePrice_gt=${preferencesForm.minPrice}`;
    let sort = `&sort=${preferencesForm.sortPrice}`;
    const res = await getData(
      `get-saloon-by-location?city=${cityName}${
        preferencesForm.maxPrice ? max : ""
      }${preferencesForm.minPrice ? min : ""}${
        preferencesForm.sortPrice ? sort : ""
      }${multiGender[1] !== undefined ? typeFemale : ""}${
        multiGender[2] !== undefined ? typeUnisex : ""
      }${multiGender[0] !== undefined ? typeMale : ""}`
    );
    //  console.log('jdfjfgjjfjjfj', res.data)
    const FilterData = res.data.filter((item) => {
      return item.category.includes(types ? types : typ);
    });
    setDataByLocation(FilterData);
  };
  useEffect(() => {
    filterAllData();
  }, [cityName]);
  useEffect(() => {
    filterAllData();
  }, [preferencesForm, multiGender]);

  useEffect(() => {
    filterAllData();
  }, [type, categories]);

  const clearLocalStorage = () => {
    localStorage.removeItem("category");
  };

  const getPackages = async () => {
    const res = await getData("getCategoryListing?type=pakeges");
    setPackages(res.data);
  };

  useEffect(() => {
    getPackages();
  }, []);
  console.log(dataByLocation);
  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 6;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const records = dataByLocation?.slice(firstIndex, lastIndex);
  const npage = Math.ceil(dataByLocation?.length / recordPerPage) || 1;
  const numbers = [...Array(npage + 1).keys()].slice(1);

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
  return (
    <div>
      <HeaderHome />
      {/* cardSection */}
      <section className="container-fluid cardSection py-4 bg-dark">
        <div className="container">
          <div className="row g-4">
            <div className="col-12">
              <div className="heading text-end pb-lg-5 pb-3">
                Curated Offers
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="card h-100 cardmain rounded-3 border-0">
                <div className="card-image">
                  <img
                    className="rounded-3 w-100"
                    src="/assets/img/index/image1card.jpg"
                    alt
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="card h-100 cardmain rounded-3 border-0">
                <div className="card-image">
                  <img
                    className="rounded-3 w-100"
                    src="/assets/img/index/image2card.jpeg"
                    alt
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="card h-100 cardmain rounded-3 border-0">
                <div className="card-image">
                  <img
                    className="rounded-3 w-100"
                    src="/assets/img/index/image3card.jpg"
                    alt
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="card h-100 cardmain rounded-3 border-0">
                <div className="card-image">
                  <img
                    className=" rounded-3 w-100"
                    src="/assets/img/index/image4card.jpg"
                    alt
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* cardSectionEnd */}
      {/* Filter & Package Page Start */}
      <div className="mainOuter bg-dark py-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="cardMainOuter">
                <div className="cardsOuter">
                  <div className="row gap-3">
                    <div className="col-12 position-relative py-2 sectionHeader d-flex align-items-center justify-content-between">
                      <div className="dropdown">
                        <button
                          className="p-0 m-0 bg-transparent border-0 text-white dropdownBtn"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Choose Packages{" "}
                          <img
                            className="ms-2"
                            src="/assets/img/icon/downArrowIcon.svg"
                            alt
                          />
                        </button>
                        <ul className="dropdown-menu bg-light p-0 overflow-hidden">
                          <li>
                            <a
                              className="dropdown-item px-3 p-2"
                              role="button"
                              data-bs-toggle="modal"
                              data-bs-target="#feMale"
                            >
                              For Female
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item px-3 p-2"
                              role="button"
                              data-bs-toggle="modal"
                              data-bs-target="#malePackages"
                            >
                              For Male
                            </a>
                          </li>
                        </ul>
                      </div>
                      <button
                        className="btn p-0 d-lg-none"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasFilter"
                        aria-controls="offcanvasFilter"
                      >
                        <img src="/assets/img/icon/filter.svg" alt />
                      </button>
                    </div>

                    {/* Search By Location */}
                    <div className={``}>
                      <div
                        className={`col-sm order-3 order-sm-2 mt-3 mt-sm-0 ${
                          location.state == null ? "d-none" : ""
                        }`}
                      >
                        <ul
                          className="nav nav-tabs customTabs border-0 bg-black"
                          id="myTab"
                          role="tablist"
                        >
                          <li
                            className="nav-item border-end border-theme1 m-0"
                            role="presentation"
                          >
                            <button
                              className={`nav-link border-0  px-0 text-white rounded-0 text-center fs-14 w-100 bg-black ${
                                location.state == "saloon" ? "active" : ""
                              }`}
                              id="salons-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#salons-tab-pane"
                              type="button"
                              role="tab"
                              aria-controls="salons-tab-pane"
                              aria-selected="true"
                              onClick={() => {
                                filterAllData("saloon");
                                setType("saloon");
                                clearLocalStorage();
                              }}
                            >
                              Salons
                            </button>
                          </li>
                          <li
                            className="nav-item border-end border-theme1 m-0"
                            role="presentation"
                          >
                            <button
                              className={`nav-link border-0  px-0 text-white rounded-0 text-center fs-14 w-100 bg-black ${
                                location.state == "parlour" ? "active" : ""
                              }`}
                              id="parlours-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#salons-tab-pane"
                              type="button"
                              role="tab"
                              aria-controls="parlours-tab-pane"
                              aria-selected="false"
                              onClick={() => {
                                filterAllData("parlour");
                                setType("parlour");
                                clearLocalStorage();
                              }}
                            >
                              Parlours
                            </button>
                          </li>
                          <li
                            className="nav-item border-end border-theme1 m-0"
                            role="presentation"
                          >
                            <button
                              className={`nav-link border-0  px-0 text-white rounded-0 text-center fs-14 w-100 bg-black ${
                                location.state == "spa" ? "active" : ""
                              }`}
                              id="spas-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#salons-tab-pane"
                              type="button"
                              role="tab"
                              aria-controls="spas-tab-pane"
                              aria-selected="false"
                              onClick={() => {
                                filterAllData("spa");
                                setType("spa");
                                clearLocalStorage();
                              }}
                            >
                              Spa
                            </button>
                          </li>
                        </ul>
                      </div>
                      <div
                        className={`col-sm order-3 order-sm-2 mt-3 mt-sm-0 ${
                          location.state == null ? "" : "d-none"
                        }`}
                      >
                        <ul
                          className="nav nav-tabs customTabs border-0 bg-black"
                          id="myTab"
                          role="tablist"
                        >
                          <li
                            className="nav-item border-end border-theme1 m-0"
                            role="presentation"
                          >
                            <button
                              className={`nav-link border-0  px-0 text-white rounded-0 text-center fs-14 w-100 bg-black active`}
                              id="salons-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#salons-tab-pane"
                              type="button"
                              role="tab"
                              aria-controls="salons-tab-pane"
                              aria-selected="true"
                              onClick={() => {
                                filterAllData("saloon");
                                setType("saloon");
                              }}
                            >
                              Salons
                            </button>
                          </li>
                          <li
                            className="nav-item border-end border-theme1 m-0"
                            role="presentation"
                          >
                            <button
                              className={`nav-link border-0  px-0 text-white rounded-0 text-center fs-14 w-100 bg-black`}
                              id="parlours-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#salons-tab-pane"
                              type="button"
                              role="tab"
                              aria-controls="parlours-tab-pane"
                              aria-selected="false"
                              onClick={() => {
                                filterAllData("parlour");
                                setType("parlour");
                              }}
                            >
                              Parlours
                            </button>
                          </li>
                          <li
                            className="nav-item border-end border-theme1 m-0"
                            role="presentation"
                          >
                            <button
                              className={`nav-link border-0  px-0 text-white rounded-0 text-center fs-14 w-100 bg-black`}
                              id="spas-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#salons-tab-pane"
                              type="button"
                              role="tab"
                              aria-controls="spas-tab-pane"
                              aria-selected="false"
                              onClick={() => {
                                filterAllData("spa");
                                setType("spa");
                              }}
                            >
                              Spa
                            </button>
                          </li>
                        </ul>
                      </div>
                      <div className="col-auto order-2 order-sm-3 d-lg-none">
                        <button
                          className="btn p-0"
                          type="button"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasFilter"
                          aria-controls="offcanvasFilter"
                        >
                          <img src="/assets/img/icon/filter.svg" alt />
                        </button>
                      </div>
                      <div className={`col-12 mt-3`}>
                        <div
                          className="tab-content customTabContent"
                          id="myTabContent"
                        >
                          <div
                            className="tab-pane fade show active"
                            id="salons-tab-pane"
                            role="tabpanel"
                            aria-labelledby="salons-tab"
                            tabIndex={0}
                          >
                            <div className="row g-sm-4 g-3 ">
                              {records?.map((items) => {
                                return (
                                  <div className="col-md-4 col-6">
                                    <p
                                      onClick={() => {
                                        handler(items._id);
                                        getWhislistapi(items._id);
                                      }}
                                    >
                                      <div className="cardOuter rounded-sm-4 rounded-3 overflow-hidden position-relative bg-white">
                                        <div className="imgOuter w-100 position-relative">
                                          <img
                                            className="w-100 h-100"
                                            src={
                                              items?.image
                                                ? items?.image
                                                : "/images/mahi hairstyle.jpg"
                                            }
                                            alt
                                          />
                                          <div className="showRating position-absolute text-white bottom-0 end-0">
                                            ★ 4
                                          </div>
                                        </div>
                                        <div className="saloonDetail p-sm-3 p-2 d-flex flex-column gap-sm-2 gap-1">
                                          <p className="saloonName stretched-link text-decoration-none text-black">
                                            {items?.storeName}
                                          </p>
                                          <div className="d-flex justify-content-between align-items-center">
                                            <div className="serviceName">
                                              {items?.description?.slice(0, 10)}
                                            </div>
                                            <div className="price">
                                              {items?.type}
                                            </div>
                                          </div>
                                          <div className="d-flex justify-content-between align-items-center address">
                                            <div className="add">
                                              {items.location?.aria} ,{" "}
                                              {items.location?.city},{" "}
                                              {items.location?.state}
                                            </div>
                                            <div className="distance d-flex align-items-center gap-1">
                                              <span className="icon">
                                                <img
                                                  className="w-100"
                                                  src="/assets/img/icon/locationGoldan.svg"
                                                  alt
                                                />
                                              </span>
                                              <span>500m</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </p>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
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
                                alt
                              />
                            </span>
                          </Link>
                          <ul className="list-unstyled m-0 d-inline p-0">
                            {numbers.map((n, i) => (
                              <li
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
                                alt
                              />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 offcanvasFilter offcanvas-lg offcanvas-start"
              data-bs-backdrop="static"
              tabIndex={-1}
              id="offcanvasFilter"
              aria-labelledby="offcanvasFilterLabel"
            >
              <div className="filterMain bg-theme4 position-sticky">
                <div className="row mx-0 h-100 flex-nowrap flex-column">
                  <div className="col-12 p-4 p-lg-2 px-4 border-bottom border-dark">
                    <div className="filterHeader d-flex align-items-center justify-content-between">
                      <div className="filterTitle text-white">Preferences</div>
                      <div className="filterIcon d-none d-lg-block">
                        <img src="/assets/img/icon/filter.svg" alt />
                      </div>
                      <button
                        type="button"
                        className="btn-close d-lg-none shadow-none"
                        data-bs-dismiss="offcanvas"
                        data-bs-target="#offcanvasFilter"
                        aria-label="Close"
                      />
                    </div>
                  </div>
                  <div className="col-12 px-0 flex-fill h-100 overflow-hidden">
                    <div className="filterBody">
                      <form>
                        <div className="row mx-0">
                          <div
                            className={`col-12 filterGroup p-4 d-flex flex-column gap-2 border-bottom border-dark`}
                          >
                            <div className="grouptitle text-white">Gender</div>
                            <div className="form-check d-flex justify-content-between align-items-center p-0">
                              <label
                                className="form-check-label text-white"
                                htmlFor="male"
                              >
                                Male
                              </label>
                              <input
                                className="form-check-input shadow-none rounded-1"
                                type="checkbox"
                                name="typeMale"
                                id="male"
                                value="male"
                                // checked={preferencesForm.typeMale}
                                onChange={multiGenderHandler}
                              />
                            </div>
                            <div className="form-check d-flex justify-content-between align-items-center p-0">
                              <label
                                className="form-check-label text-white"
                                htmlFor="feMail"
                              >
                                Femail
                              </label>
                              <input
                                className="form-check-input shadow-none rounded-1"
                                type="checkbox"
                                name="typeFemale"
                                id="feMail"
                                value="female"
                                //checked={preferencesForm.typeFemale}
                                onChange={multiGenderHandler}
                              />
                            </div>
                            <div className="form-check d-flex justify-content-between align-items-center p-0">
                              <label
                                className="form-check-label text-white"
                                htmlFor="uniSex"
                              >
                                Unisex
                              </label>
                              <input
                                className="form-check-input shadow-none rounded-1"
                                type="checkbox"
                                name="typeUnisex"
                                value="unisex"
                                id="uniSex"
                                onChange={multiGenderHandler}
                              />
                            </div>
                          </div>

                          <div className="col-12 filterGroup p-4 d-flex flex-column gap-2 border-bottom border-dark">
                            <div className="grouptitle text-white">
                              Price Range
                            </div>
                            <div className="d-flex align-items-center gap-2 text-white mt-2">
                              <input
                                className="form-control shadow-none rounded-1 bg-dark border-dark text-white"
                                type="tel"
                                name="minPrice"
                                id="min"
                                placeholder="₹0"
                                value={preferencesForm.minPrice}
                                onChange={handleChange}
                              />
                              -
                              <input
                                className="form-control shadow-none rounded-1 bg-dark border-dark text-white"
                                type="tel"
                                name="maxPrice"
                                id="max"
                                placeholder="₹5000"
                                value={preferencesForm.maxPrice}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-12 filterGroup p-4 d-flex flex-column gap-2 border-bottom border-dark">
                            <div className="grouptitle text-white">
                              Sort Price
                            </div>
                            <div className="form-check d-flex justify-content-between align-items-center p-0">
                              <label
                                className="form-check-label text-white"
                                htmlFor="lowToHigh"
                              >
                                Low to high
                              </label>
                              <input
                                className="form-check-input shadow-none rounded-1"
                                type="radio"
                                name="sortPrice"
                                id="lowToHigh"
                                value="1"
                                onChange={handleChange}
                              />
                            </div>
                            <div className="form-check d-flex justify-content-between align-items-center p-0">
                              <label
                                className="form-check-label text-white"
                                htmlFor="highToLow"
                              >
                                High to low
                              </label>
                              <input
                                className="form-check-input shadow-none rounded-1"
                                type="radio"
                                name="sortPrice"
                                id="highToLow"
                                value="-1"
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-12 filterGroup p-4 d-flex flex-column gap-2 border-bottom border-dark">
                            <div className="grouptitle text-white d-flex justify-content-between align-items-center">
                              <span>Ratings</span>
                              <span className="ratingValue">0</span>
                            </div>
                            <div className="rate d-flex gap-2 justify-content-end">
                              <input
                                type="radio"
                                id="star5"
                                name="rate"
                                defaultValue={5}
                              />
                              <label htmlFor="star5" title="text" />
                              <input
                                type="radio"
                                id="star4"
                                name="rate"
                                defaultValue={4}
                              />
                              <label htmlFor="star4" title="text" />
                              <input
                                type="radio"
                                id="star3"
                                name="rate"
                                defaultValue={3}
                              />
                              <label htmlFor="star3" title="text" />
                              <input
                                type="radio"
                                id="star2"
                                name="rate"
                                defaultValue={2}
                              />
                              <label htmlFor="star2" title="text" />
                              <input
                                type="radio"
                                id="star1"
                                name="rate"
                                defaultValue={1}
                              />
                              <label htmlFor="star1" title="text" />
                            </div>
                          </div>
                          <div className="col-12 filterGroup p-4 d-flex flex-column gap-2 border-bottom border-dark">
                            <div className="grouptitle text-white">
                              Discount
                            </div>
                            <div className="form-check d-flex justify-content-between align-items-center p-0">
                              <label
                                className="form-check-label text-white"
                                htmlFor="upTo10"
                              >
                                Up to 10% off
                              </label>
                              <input
                                className="form-check-input shadow-none rounded-1"
                                type="radio"
                                name="discount"
                                id="upTo10"
                              />
                            </div>
                            <div className="form-check d-flex justify-content-between align-items-center p-0">
                              <label
                                className="form-check-label text-white"
                                htmlFor="upTo25"
                              >
                                Up to 25% off
                              </label>
                              <input
                                className="form-check-input shadow-none rounded-1"
                                type="radio"
                                name="discount"
                                id="upTo25"
                              />
                            </div>
                            <div className="form-check d-flex justify-content-between align-items-center p-0">
                              <label
                                className="form-check-label text-white"
                                htmlFor="upTo50"
                              >
                                Up to 50% off
                              </label>
                              <input
                                className="form-check-input shadow-none rounded-1"
                                type="radio"
                                name="discount"
                                id="upTo50"
                              />
                            </div>
                          </div>
                          <div className="col-12 filterGroup p-4 d-flex flex-column gap-2 border-bottom border-dark">
                            <div className="grouptitle text-white">
                              Discount
                            </div>
                            <div className="form-check d-flex justify-content-between align-items-center p-0">
                              <label
                                className="form-check-label text-white"
                                htmlFor="upTo10"
                              >
                                Z+ Hygene
                              </label>
                              <input
                                className="form-check-input shadow-none rounded-1"
                                type="checkbox"
                                name="discount"
                                id="upTo10"
                              />
                            </div>
                          </div>
                          {/* <div className="col-12 filterGroup p-4 d-flex flex-column gap-2 border-bottom border-dark">
                          <div className="grouptitle text-white">Discount</div>
                          <div className="form-check d-flex justify-content-between align-items-center p-0">
                            <button 
                              className="btn btn-primary"
                              // htmlFor="upTo10"
                              onClick={submitData}
                            >
                            Submit
                            </button>
                            
                          </div>
                        </div> */}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Filter & Package Page End */}
      {/* herewe we Section start */}
      <Footer2 />
      <Footer />
      {/* Footer End */}
      {/* Modal */}
      <div
        className="modal customModal fade"
        id="feMale"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="feMaleLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title" id="feMaleLabel">
                Female Packages
              </div>
              <button
                type="button"
                className="btn-close shadow-none"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="row gap-3">
                {packages?.map((item) => {
                  return (
                    <div className="col-12">
                      <div className="outer p-sm-3 p-2 border rounded-4 overflow-hidden position-relative">
                        <div
                          className="row mx-0 gap-3 align-items-center"
                          role="button"
                          onClick={() =>
                            navigate("/packages", { state: { id: item?._id } })
                          }
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
                          <div className="col-auto px-0">
                            <div className="imgOuter  rounded-4 overflow-hidden">
                              <img
                                //style={{height:'60px',width:'60px'}}
                                className="w-100 h-100 "
                                src={item?.image}
                                alt
                              />
                            </div>
                          </div>
                          <div className="col px-0">
                            <div className="packagename">{item?.Name}</div>
                            <div className="packageDec">
                              A variety of pampering bridal packages for all
                              wedding and pre-wedding functions.
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
      {/* Modal */}
      <div
        className="modal fade"
        id="malePackages"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="malePackagesLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title" id="malePackagesLabel">
                Male Packages
              </div>
              <button
                type="button"
                className="btn-close shadow-none"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="row gap-3">
                <div className="col-12">
                  <div className="outer p-sm-3 p-2 border rounded-4 overflow-hidden position-relative">
                    <div className="row mx-0 gap-3 align-items-center">
                      <div className="col-auto px-0">
                        <div className="imgOuter rounded-4 overflow-hidden">
                          <img
                            className="w-100 h-100"
                            src="/assets/img/img-2.png"
                            alt
                          />
                        </div>
                      </div>
                      <div className="col px-0">
                        <div className="packagename">Groom</div>
                        <div className="packageDec">
                          Packages to make you look and feel your best on your
                          Wedding day.
                        </div>
                        <a href="#" className="stretched-link" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="outer p-sm-3 p-2 border rounded-4 overflow-hidden position-relative">
                    <div className="row mx-0 gap-3 align-items-center">
                      <div className="col-auto px-0">
                        <div className="imgOuter rounded-4 overflow-hidden">
                          <img
                            className="w-100 h-100"
                            src="/assets/img/img-2.png"
                            alt
                          />
                        </div>
                      </div>
                      <div className="col px-0">
                        <div className="packagename">Trending</div>
                        <div className="packageDec">
                          The man in you needs some pampering too, and we can
                          help.
                        </div>
                        <a href="#" className="stretched-link" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="outer p-sm-3 p-2 border rounded-4 overflow-hidden position-relative">
                    <div className="row mx-0 gap-3 align-items-center">
                      <div className="col-auto px-0">
                        <div className="imgOuter rounded-4 overflow-hidden">
                          <img
                            className="w-100 h-100"
                            src="/assets/img/img-2.png"
                            alt
                          />
                        </div>
                      </div>
                      <div className="col px-0">
                        <div className="packagename">Traditional</div>
                        <div className="packageDec">
                          Because, why should girls have all the fun? Nail it on
                          next Garba Night.
                        </div>
                        <a href="#" className="stretched-link" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="outer p-sm-3 p-2 border rounded-4 overflow-hidden position-relative">
                    <div className="row mx-0 gap-3 align-items-center">
                      <div className="col-auto px-0">
                        <div className="imgOuter rounded-4 overflow-hidden">
                          <img
                            className="w-100 h-100"
                            src="/assets/img/img-2.png"
                            alt
                          />
                        </div>
                      </div>
                      <div className="col px-0">
                        <div className="packagename">Formal</div>
                        <div className="packageDec">
                          Show up classy on your next business event. Pick from
                          the best packages.
                        </div>
                        <a href="#" className="stretched-link" />
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
  );
}

export default Hair_cut2;
