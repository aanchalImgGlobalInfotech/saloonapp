import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { getData } from "../../../components/apiinstance/Api";

import {
  saloonservice,
  serviceId,
  setUsers,
  cityName,
} from "../../../components/redux/redux1/actions";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

function HeaderHome() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [address, setAddress] = useState("");
  const [Cartdata, setCartData] = useState([]);
  const value = useSelector((state) => state.saloonData);
  const cityN = useSelector((state) => state.cityName);
  const cityF = useSelector((state) => state.cityFooter);
  const [category, setCategory] = useState();
  const [querysearch, setQuerysearch] = useState("");
  const [subdata, setSubData] = useState([]);
  const [filterdata, setFilterData] = useState([]);
  const [filtered, setfiltered] = useState([]);
  const [query, setQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null,
  });
  const [arr, setarr] = useState([]);
  const handleSelect = async (value) => {
    const result = await geocodeByAddress(value);

    const ll = await getLatLng(result[0]);

    setAddress(value);
    setCoordinates(ll);
  };

  const Data = useSelector((state) => state.userData);
  console.log(
    "recentSearches",
    recentSearches.slice(recentSearches.length - 2),
    recentSearches.length
  );
  const hanlder = async () => {
    const res = await getData("user-Profile");
    if (res.status) {
      dispatch(setUsers(res.data));
      navigate("/userprofile", { state: { title: res.data } });
    }
  };

  const getServicesById = (id) => {
    dispatch(serviceId(id));
    navigate("/hair");
  };
  const searchCategory = async () => {
    const res = await getData("getCategoryListing");
    setCategory(res.data);
    setfiltered(res.data);
  };

  const subcategory = async () => {
    const res = await getData("getAllCategoryListing");
    setSubData(res.data);
  };

  const search = async (value) => {
    setQuerysearch(value);
    if (value.length > 0) {
      const filter = subdata.map((el) =>
        el.subchild?.filter((item) => {
          if (item.Name.toLowerCase()?.includes(value))
            if (!!item.parent_Name) {
              return item;
            }
        })
      );
      setFilterData(filter);
    } else {
      if (!value) {
        setFilterData([]);
      }
    }
  };

  const values1 = localStorage.getItem("selectitem");
  const parseValues1 = JSON.parse(values1);
  const handleSearch = (val) => {
    const values = localStorage.getItem("selectitem");
    const parseValues = JSON.parse(values);
    if (parseValues) {
      localStorage.setItem(
        "selectitem",
        JSON.stringify([...parseValues, val.Name])
      );
    } else {
      localStorage.setItem("selectitem", JSON.stringify([val.Name]));
    }
  };
  const locationSearchHandler = (city) => {
    dispatch(cityName(city));
    navigate(`/salon-in`);
  };
  useEffect(() => {
    searchCategory();
    subcategory();
  }, []);

  const GetCartApi = async () => {
    const res = await getData("get-cart");

    setCartData(res.data);
  };

  const cartHome = Cartdata?.filter((el) => {
    if (el.cart[0]?.addressId) {
      return el;
    }
  });

  const cartShop = Cartdata?.filter((el) => {
    if (!el.cart[0]?.addressId) {
      return el;
    }
  });

  const removeCart = async (id) => {
    const res = await getData(`remove-cart?id=${id}`);
    if (res.status) {
      GetCartApi();
    }
  };

  const getcartApi = async () => {
    let saloonid = value[0]?._id;
    const path = `get-cart?saloonId=${saloonid}`;
    const res = await getData(path);
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-md navbar-dark bg-theme2 navbarhed position-fixed w-100"
        aria-label="Fourth navbar example"
      >
        <div className="container">
          <NavLink className="navbar-brand logonav" to="/Dashboard">
            <img src="/assets/img/header/logo.svg" alt="logo" />
          </NavLink>
          <button
            className="navbar-toggler togglrbtn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample04"
            aria-controls="navbarsExample04"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse navcolapse"
            id="navbarsExample04"
          >
            <ul className="navbar-nav mx-auto mb-2 mb-md-0 navullist">
              <li className="nav-item navitem">
                <NavLink
                  className="nav-link navlink active"
                  aria-current="page"
                  to="index.html"
                ></NavLink>
              </li>
              <li className="nav-item navitem">
                <NavLink className="nav-link navlink active" to="/blog">
                  Blog
                </NavLink>
              </li>
              <li className="nav-item navitem dropdown">
                <NavLink
                  className="nav-link navlink dropdown-toggle droptoglee"
                  to="#"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-bs-auto-close="outside"
                  onClick={() => GetCartApi()}
                >
                  Cart
                </NavLink>
                <ul className="dropdown-menu mt-2 dropDown dropdown2 mt-3 z-2">
                  <ul
                    className="nav nav-pills mb-3 navPill "
                    id="pills-tab"
                    role="tablist"
                  >
                    <li
                      className="nav-item naviteminner px-1"
                      role="presentation"
                    >
                      <button
                        className="nav-link active navlinkinner"
                        id="pills-zoylee-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-zoylee"
                        type="button"
                        role="tab"
                        aria-controls="pills-zoylee"
                        aria-selected="true"
                      >
                        Saloon
                      </button>
                    </li>
                    <li
                      className="nav-item naviteminner px-1"
                      role="presentation"
                    >
                      <button
                        className="nav-link navlinkinner"
                        id="pills-zoyleeHome-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-zoyleeHome"
                        type="button"
                        role="tab"
                        aria-controls="pills-zoyleeHome"
                        aria-selected="false"
                      >
                        Saloon At Home
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content tabContent" id="pills-tabContent">
                    <div
                      className="tab-pane tabpane fade show active"
                      id="pills-zoylee"
                      role="tabpanel"
                      aria-labelledby="pills-zoylee-tab"
                      tabIndex={0}
                    >
                      <div className="cart">
                        {cartShop?.map((el) => {
                          return (
                            <>
                              <div className="card mb-3 h-100 border-0">
                                <div className="row g-0 align-items-center">
                                  <div className="col-auto p-2">
                                    <div className="cardimage">
                                      <img
                                        src="/assets/img/about/img-2.png"
                                        className="img-fluid rounded-start w-100 h-100"
                                        alt="..."
                                      />
                                    </div>
                                  </div>
                                  <div className="col p-1">
                                    <div className="card-body px-2 py-0">
                                      <h5 className="card-title mb-0 my-1">
                                        {el.storeName}
                                      </h5>
                                      <p className="card-text my-2 text-white">
                                        {el?.location?.aria}
                                      </p>
                                      <div className="d-flex align-items-center">
                                        <p className="card-payment mb-0 text-white me-3">
                                          ₹ {el?.cart[0]?.totalamount}
                                        </p>
                                        {/* <NavLink to='/services'> */}

                                        <div className="itemscart">
                                          {" "}
                                          {el?.cart?.length == 1
                                            ? `${el?.cart?.length} item`
                                            : `${el?.cart?.length} items`}
                                        </div>
                                        {/* </NavLink> */}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-auto h-100">
                                    <div className="buttoncard h-100  w-100 rounded">
                                      <button
                                        className="btn cartbtn text-white rounded"
                                        onClick={() => {
                                          removeCart(el?.cart[0]?._id);
                                          getcartApi();
                                        }}
                                      >
                                        <img
                                          className="w-100 h-100"
                                          src="/assets/img/header/times.svg"
                                          alt
                                        />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </div>
                    <div
                      className="tab-pane tabpane fade"
                      id="pills-zoyleeHome"
                      role="tabpanel"
                      aria-labelledby="pills-zoyleeHome-tab"
                      tabIndex={0}
                    >
                      <div className="cart">
                        {cartHome?.map((el) => {
                          return (
                            <>
                              <div className="card mb-3 h-100 border-0">
                                <div className="row g-0 align-items-center">
                                  <div className="col-auto p-2">
                                    <div className="cardimage">
                                      <img
                                        src="/assets/img/about/img-2.png"
                                        className="img-fluid rounded-start w-100 h-100"
                                        alt="..."
                                      />
                                    </div>
                                  </div>
                                  <div className="col p-1">
                                    <div className="card-body px-2 py-0">
                                      <h5 className="card-title mb-0 my-1">
                                        {el.storeName}
                                      </h5>
                                      <p className="card-text my-2 text-white">
                                        {el?.location?.aria}
                                      </p>
                                      <div className="d-flex align-items-center">
                                        <p className="card-payment mb-0 text-white me-3">
                                          ₹ {el?.cart[0]?.totalamount}
                                        </p>
                                        {/* <NavLink to='/services'> */}

                                        <div className="itemscart">
                                          {" "}
                                          {el?.cart?.length == 1
                                            ? `${el?.cart?.length} item`
                                            : `${el?.cart?.length} items`}
                                        </div>
                                        {/* </NavLink> */}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-auto h-100">
                                    <div className="buttoncard h-100  w-100 rounded">
                                      <button
                                        className="btn cartbtn text-white rounded"
                                        onClick={() => {
                                          removeCart(el?.cart[0]?._id);
                                          getcartApi();
                                        }}
                                      >
                                        <img
                                          className="w-100 h-100"
                                          src="/assets/img/header/times.svg"
                                          alt
                                        />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </ul>
              </li>
              <li className="nav-item navitem">
                <NavLink
                  className="nav-link navlink"
                  to="#"
                  onClick={() => hanlder()}
                >
                  {Data[0]?.name}
                </NavLink>
              </li>
            </ul>
            <div className="hiddenDropdown dnone d-lg-flex justify-content-center align-items-center position-relative me-3">
              <span className="dnone fs-14 text-white text-center">
                {cityN}
              </span>
              <div className="dropedownOuter position-absolute end-0 bg-white rounded-1 shadow">
                <div className="inputGroup p-3 pb-2">
                  <input
                    type="search"
                    className="form-control border-0 border-bottom border-2 rounded-0 shadow-none"
                    placeholder="Search City..."
                  />
                  <button
                    className="btn btn-dark shadow-none border-none rounded-pill d-flex gap-1 align-items-center fs-10 mt-2"
                    onClick={() => locationSearchHandler("jaipur")}
                  >
                    <img src="/assets/img/icon/nearmeIcon.svg" alt />{" "}
                    <span>Near Me</span>
                  </button>
                </div>
              </div>
            </div>

            <form
              role="search"
              className="d-flex align-items-center searchsection position-relative"
            >
              <input
                className="form-control searchinput"
                type="search"
                value={querysearch}
                onChange={(e) => {
                  search(e.target.value);
                }}
                placeholder="Search"
                aria-label="Search"
              />

              <div className="loginIcon d-none">
                <a className="btn btnlogin" href="login.html">
                  <img src="/assets/img/header/person-fill.svg" alt="icon" />
                </a>
              </div>
              <div className="card inputdropdown position-absolute">
                <div className="row mx-0 h-100 flex-column flex-nowrap">
                  <div className="col-12 px-0">
                    <ul
                      className="nav nav-pills navPill mb-3"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li className="nav-item navItem w-50" role="presentation">
                        <button
                          className="nav-link navLink active w-100"
                          id="pills-saloonH-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-saloonH"
                          type="button"
                          role="tab"
                          aria-controls="pills-saloonH"
                          aria-selected="true"
                        >
                          Saloon
                        </button>
                      </li>
                      <li className="nav-item navItem w-50" role="presentation">
                        <button
                          className="nav-link navLink w-100"
                          id="pills-atHome-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-atHome"
                          type="button"
                          role="tab"
                          aria-controls="pills-atHome"
                          aria-selected="false"
                        >
                          Saloon At Home
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12 px-0 flex-fill h-100 p-3 overflow-hidden">
                    <div className="row dropOuter h-100 mx-0">
                      <div className="col-12">
                        <div className="tab-content" id="pills-tabContent">
                          <div
                            className="tab-pane fade show active"
                            id="pills-saloonH"
                            role="tabpanel"
                            aria-labelledby="pills-saloonH-tab"
                            tabindex="0"
                          >
                            <div className="row row-cols-3 innertabs g-3">
                              {category?.map((item) => (
                                <div className="col">
                                  <p
                                    className="buttoncontent m-0 rounded-pill w-100 d-flex justify-content-center align-items-center text-decoration-none text-black"
                                    to=""
                                    onClick={() => getServicesById(item._id)}
                                  >
                                    {item.Name}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="pills-atHome"
                            role="tabpanel"
                            aria-labelledby="pills-atHome-tab"
                            tabindex="0"
                          >
                            <div className="row row-cols-3 innertabs g-3">
                              {category?.map((item) => (
                                <div className="col">
                                  <NavLink
                                    className="buttoncontent m-0 rounded-pill w-100 d-flex justify-content-center align-items-center text-decoration-none text-black"
                                    to="/hair"
                                    state={{ id: item._id }}
                                  >
                                    {item.Name}
                                  </NavLink>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 ">
                        <div className="searchResult p-3 dnone">
                          <div className="row gap-3">
                            <div className="col-12">
                              <div className="relatedSearch">
                                <ul className="m-0 p-0 list-unstyled d-flex flex-column gap-3">
                                  {filterdata?.map((el) =>
                                    el?.map((item) => {
                                      return (
                                        <li
                                          onClick={() => {
                                            handleSearch(item);
                                          }}
                                        >
                                          <a
                                            className="text-decoration-none text-dark d-flex align-items-center gap-2 position-relative"
                                            href="javascript:;"
                                          >
                                            {item.Name}
                                          </a>
                                        </li>
                                      );
                                    })
                                  )}
                                </ul>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="vanues">
                                <div className="title gap-2 text-theme1 mb-1 d-flex align-items-center gap-1 ">
                                  recent search
                                </div>
                                {parseValues1
                                  ?.slice(parseValues1.length - 2)
                                  ?.map((el) => {
                                    console.log("elelelle", el);
                                    {
                                      if (el) {
                                        return (
                                          <a
                                            className="text-decoration-none text-dark d-flex align-items-center "
                                            href="javascript:;"
                                          >
                                            <li>{el}</li>
                                          </a>
                                        );
                                      }
                                    }
                                  })}
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="vanues">
                                <div className="title fs-14 text-theme1 mb-3 d-flex align-items-center gap-3">
                                  Venues
                                </div>
                                <ul className="m-0 p-0 list-unstyled d-flex flex-column gap-3">
                                  <li className="venueOuter p-2 rounded-4 border border-light position-relative">
                                    <div className="row align-items-center">
                                      <div className="col-auto pe-2">
                                        <div className="imgOuter rounded-4 overflow-hidden">
                                          <img
                                            className="w-100 h-100"
                                            src="assets/img/img-1.png"
                                            alt
                                          />
                                        </div>
                                      </div>
                                      <div className="col px-2">
                                        <div className="venueDetai">
                                          <a
                                            href="javascript:;"
                                            className="stretched-link text-decoration-none text-dark fs-12"
                                          >
                                            Hair Sage Luxury Salon
                                          </a>
                                          <div className="fs-10 text-muted mt-1">
                                            Sector 104 <span>2.5 km</span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li className="venueOuter p-2 rounded-4 border border-light position-relative">
                                    <div className="row align-items-center">
                                      <div className="col-auto pe-2">
                                        <div className="imgOuter rounded-4 overflow-hidden">
                                          <img
                                            className="w-100 h-100"
                                            src="assets/img/img-1.png"
                                            alt
                                          />
                                        </div>
                                      </div>
                                      <div className="col px-2">
                                        <div className="venueDetai">
                                          <a
                                            href="javascript:;"
                                            className="stretched-link text-decoration-none text-dark fs-12"
                                          >
                                            Hair Sage Luxury Salon
                                          </a>
                                          <div className="fs-10 text-muted mt-1">
                                            Sector 104 <span>2.5 km</span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li className="venueOuter p-2 rounded-4 border border-light position-relative">
                                    <div className="row align-items-center">
                                      <div className="col-auto pe-2">
                                        <div className="imgOuter rounded-4 overflow-hidden">
                                          <img
                                            className="w-100 h-100"
                                            src="assets/img/img-1.png"
                                            alt
                                          />
                                        </div>
                                      </div>
                                      <div className="col px-2">
                                        <div className="venueDetai">
                                          <a
                                            href="javascript:;"
                                            className="stretched-link text-decoration-none text-dark fs-12"
                                          >
                                            Hair Sage Luxury Salon
                                          </a>
                                          <div className="fs-10 text-muted mt-1">
                                            Sector 104 <span>2.5 km</span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HeaderHome;
