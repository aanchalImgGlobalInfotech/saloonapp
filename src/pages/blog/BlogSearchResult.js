import React, { useEffect, useState } from "react";
import { useLocation,Link,NavLink } from "react-router-dom";
import Footer from "../../common/layout/footer/footer";
import Footer2 from "../../common/layout/footer/Footer2 ";
import Header2 from "../../common/layout/header/Header2";
import { getData } from "../../components/apiinstance/Api";

const BlogSearchResult = () => {
  const location = useLocation();
  const [categoryId, setCategoryId] = useState(location?.state?.categoryId);
  const [category, setCategory] = useState([]);
  const[searchValue,setSearchValue]=useState(location?.state?.searchKey)
  const [Blog, setBlog] = useState([]);
  const[selectedCategory,setSelectedCategory]=useState('')

  const getBlog = async () => {
    const res = await getData(`get-blog?categoryId=${categoryId?categoryId:''}&Title=${searchValue?searchValue:''}`);
    const response = await getData("getCategoryListing");
    setCategory(response.data);
    setBlog(res.data[0]);
   
    //console.log(response.data,'categorylist' );
  };

  useEffect(() => {
    getBlog();
  }, [categoryId]);

  //  Custom Pegination

  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 4;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const records =  Blog?.slice(firstIndex, lastIndex);
  const npage = Math.ceil(Blog?.length / recordPerPage) || 1;
   const numbers = [...Array(npage + 1)?.keys()]?.slice(1);
  

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

  const selectHandler = (e) =>{
    setCategoryId(e.target.value)
    setSelectedCategory(e.target.value)
    setSearchValue('')
  
  }

  const startSearch = () =>{
    getBlog()
    setCategoryId('')
    setSelectedCategory('')
  }
// console.log(Blog)
  return (
    <div>
      <Header2 />
      <div className="blogMain possition-re;ative">
        <div className="container-fluid px-0">
          <div className="mainInner">
            <div className="row mx-0">
              <div className="col-12 px-0 bg-black">
                <div className="container">
                  <div className="banner">
                    <div className="row mx-0">
                      <div className="col-12 px-0 align-items-center">
                        <div className="formOuter py-5">
                          {/* <div class="title text-white">Quote of the Day</div>
                                          <div class="text text-white mt-3">" A woman whose smile is open and whose expression is glad has a kind of beauty no matter what she wears. "</div> */}
                          <div className="category text-white fs-sm-5 fs-6 ">
                            Category
                          </div>
                          <div className="row">
                            <div className="col-sm-6">
                              <div className="row">
                                <div className="col-8">
                                  <div className="input-group d-block mt-3">
                                    <label
                                     
                                      className="form-label text-white"
                                    >
                                      Select Category
                                    </label>
                                    <select
                                      className="form-select w-100 rounded-1 py-2 ps-3 shadow-none"
                                      aria-label="Default select example"
                                      onChange={selectHandler}
                                      value={selectedCategory}
                                      
                                      >
                                        <option selected  >Select Category</option>
                                        {category?.map((el, i) => (
                                          <option value={el._id} key={i}>{el.Name}</option>
                                        ))}
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="row">
                                <div className="col-8">
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
                                      id="search"
                                      placeholder="Search..."
                                      value={searchValue}
                                      onChange={(e)=>setSearchValue(e.target.value)}
                                    />
                                    <button
                                      type="button"
                                      className="btn btn-transparent searchBtn border-0 shadow-none position-absolute z-3 bottom-0 end-0 border-start py-2"
                                      onClick={startSearch}
                                    >
                                      <img
                                        src="assets/img/icon/search1.svg"
                                        alt='image'
                                      />
                                    </button>
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
                          {records?.map((item,i) => (
                            <NavLink
                            key={i}
                              to='/blog-details'
                              state={{itemId:item._id}}
                              className="col-lg-3 col-sm-6"
                              style={{ textDecoration: "none", color: "black" }}
                            >
                              <div className="blogOuter rounded-4 overflow-hidden position-relative">
                                <div className="imgOuter overflow-hidden">
                                  <img
                                    className="w-100 h-100"
                                    src="assets/img/blog/blogImg1.jpg"
                                    alt='image'
                                  />
                                </div>
                                <div className="blogDetail p-3 bg-white row gap-2 mx-0">
                                  <div className="blogTitle col-12 px-0">
                                    {item.Title}
                                  </div>
                                  <div className="blogDecription col-12 px-0 overflow-hidden">
                                    {item.Description?item.Description
                                    ?.slice(0,100):'Valentine’s week is around! Are you excited? The main focus is the look we carry. When it comes to valentine’s day makeup look, women are not sure about how to become date-perfect.'}
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
                          <Link to="" onClick={prevPage} disabled={currentPage ==1}>
                            <span className="arrowIcon d-flex align-items-center justify-content-center p-sm-2">
                              <img
                                className="w-100"
                                src="/assets/img/icon/leftDubbleArrow.svg"
                                alt='image'
                              />
                            </span>
                          </Link>
                          <ul className="list-unstyled m-0 d-inline p-0">
                            {
                              numbers.map((n ,i)=>
                               (
                                  <li key={i} className={`rounded-1 d-inline-flex justify-content-center align-items-center ${currentPage ==n ?'current':''}`}>
                                  <Link className="text-decoration-none" to="" onClick={(()=>changePage(n))}>
                                    {n}
                                  </Link>
                                </li>
                                )
                              )
                            }
                         </ul>
                          <Link to=""onClick={nextPage} disabled={currentPage == numbers.length} >
                            <span className="arrowIcon d-flex align-items-center justify-content-center p-sm-2">
                              <img
                                className="w-100"
                                src="/assets/img/icon/rightDubbleArrow.svg"
                                alt='image'
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
          </div>
        </div>
      </div>
      <Footer2 />
      <Footer />
    </div>
  );
};

export default BlogSearchResult;
