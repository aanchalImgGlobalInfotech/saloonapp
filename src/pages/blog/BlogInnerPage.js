import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import { getData } from "../../components/apiinstance/Api";
import parse from 'html-react-parser'
import Footer from '../../common/layout/footer/footer'
function BlogInnerPage() {
  const location=useLocation()
  const navigate=useNavigate()
  const [InnerData, setInnerData] = useState();
  const[innerId,setInnerId]=useState(location.state.itemId)
  const [categoryId,setCategoryId]=useState('')
  const [category, setCategory] = useState();
  const [searchValue,setSearchValue]=useState('')
  const [Blog, setBlog] = useState([]);
  
  console.log(location, "idddddddddd");

  const BlogInnerData = async () => {
    const res = await getData(`get-blog?id=${innerId}`);
    setInnerData(res.data[0][0]);
    //console.log(res)
  };
  const getBlog = async () => {
    const res = await getData("get-blog");
    const response = await getData("getCategoryListing");
    setCategory(response.data);
    setBlog(res.data[0]);
    //console.log(res, "get blog");
    //console.log(response.data,'categorylist' );
  };

  useEffect(() => {
    getBlog();
  }, []);

  useEffect(() => {
    BlogInnerData();
  }, [innerId]);
  const selectHandler = (e) =>{
    console.log(e.target.value)
    navigate('/blog-search-result',{state:{
      categoryId:e.target.value
   }})
  }
    const startSearch = () =>{
      navigate('/blog-search-result',{state:{
        searchKey:searchValue
     }})
    }
  return (
    <div>
      <nav
        className="navbar navbar-expand-md navbar-dark bg-theme2 navbarhed position-fixed w-100"
        aria-label="Fourth navbar example"
      >
        <div className="container">
          <Link className="navbar-brand logonav" to='/Dashboard' >
            <img src="/assets/img/header/logo.svg" alt="logo" />
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
          <li className="crumb position-relative d-inline-block fs-12 float-start text-white">
            <span>
              <NavLink
                to="/Dashboard"
                className="text-decoration-none text-white"
              >
                Home
              </NavLink>
            </span>
          </li>
          <li className="crumb position-relative d-inline-block fs-12 float-start text-white">
            <span>
              <NavLink to="/blog" className="text-decoration-none text-white">
                Blog
              </NavLink>
            </span>
          </li>
          <li className="crumb position-relative d-inline-block fs-12 float-start text-white">
            <span>
              <a className="text-decoration-none text-white" href="Beauty.html">
                Beauty
              </a>
            </span>
          </li>
          <li className="crumb position-relative d-inline-block fs-12 float-start text-white active">
            <span>Valentine’s Day Makeup Look 2023</span>
          </li>
        </ul>
      </div>
      <div className="blogInnerMain possition-re;ative">
        <div className="container-fluid px-0">
          <div className="mainInner">
            <div className="row mx-0">
              <div className="col-12 px-0">
                <div className="banner">
                  <div className="row mx-0">
                    <div className="col-lg-8 col-md-7 px-0">
                      <div className="imgOuter w-100 position-relative">
                        <img
                          className="w-100 h-100"
                          src={InnerData?.image[0]}
                          alt
                        />
                        <ul className="importantDate position-absolute bottom-0 end-0 p-2 list-unstyled m-0 d-flex fs-12 gap-2 text-white">
                          <li className="pe-2 border-end">{InnerData?.WriteDate.slice(0,10)}</li>
                          <li className>By {InnerData?.WriterName}</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-5 px-0 bg-black d-md-flex align-items-md-center">
                      
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
                            onChange={selectHandler}
                          >
                            <option selected  >Select Category</option>
                            {category?.map((el, i) => (
                              <option value={el._id}>{el.Name}</option>
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
                            onChange={(e)=>setSearchValue(e.target.value)}

                          />
                          <button
                            type="button"
                            className="btn btn-transparent searchBtn border-0 shadow-none position-absolute z-3 bottom-0 end-0 border-start py-2"
                            onClick={startSearch}
                            >

                            <img src="/assets/img/icon/search1.svg" alt />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 bg-dark">
                <div className="container"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Partner With Us Section end */}
      <div className="blogInnerContent py-sm-5 py-4 bg-dark">
        <div className="container">
          <div className="row gap-4 gap-lg-0">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-12">
                  <div className="blogsOuter text-white">
                     {
                    
                     parse(InnerData?.Description?InnerData?.Description:'')
                     
                     }
                    
                  </div>
                  <a
                    href="javascript:;"
                    className="text-decoration-none text-white bg-theme1 p-3 rounded-pill fs-14 w-100 d-block text-center bgiBtn1 position-relative"
                  >
                    BOOK YOUR SERVICES NOW WITH SALOON!
                  </a>
                </div>
                <div className="col-12">
                  
                  {
                    
                  }
                  
                </div>
               
                
              
                <div className="col-12 mt-3">
                  <div className="p-3 bg-white text-theme1 text-center faqHeading">
                    Frequently Asked Questions
                  </div>
                  <div
                    className="accordion mt-4 customAccordion"
                    id="accordionExample"
                  >
                    <div className="accordion-item rounded-0  border-0">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button shadow-none bg-theme1 text-white rounded-0 fs-14 collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          How to do your makeup for Valentine’s Day?
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <div className="txt fs-14 fw-normal">
                            For valentine’s day makeup, you can follow the tips,
                            and watch videos to achieve the perfect look.
                            <br />
                            <br />
                            <ul className>
                              <li>Keeping the base natural</li>
                              <li>Kajal &amp; eyeliner for eyes</li>
                              <li>Mascara for long lashes</li>
                              <li>Pink/ Bold lips</li>
                              <li>Blushy cheeks</li>
                            </ul>
                            Follow these steps to achieve the perfect makeup
                            look this valentine.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item rounded-0  border-0 mt-3">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button shadow-none bg-theme1 text-white rounded-0 fs-14 collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          What makeup styles are trending?
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <div className="txt fs-14 fw-normal">
                            As per the trend, lighter but elegant makeup is
                            preferred. However, you can use shimmers, sparkles,
                            and colors to get a perfect valentine’s look.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item rounded-0  border-0 mt-3">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button shadow-none bg-theme1 text-white rounded-0 fs-14 collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          What are the best makeup tips?
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <div className="txt fs-14 fw-normal">
                            The best makeup tips you can follow are
                            moisturizing, prepping, and using a setting spray to
                            fix everything. Most importantly, buy products that
                            match your skin tone, and do not irritate.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item rounded-0  border-0 mt-3">
                      <h2 className="accordion-header" id="headingFour">
                        <button
                          className="accordion-button shadow-none bg-theme1 text-white rounded-0 fs-14 collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          How to look hot on Valentine’s Day?
                        </button>
                      </h2>
                      <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <div className="txt fs-14 fw-normal">
                            To carry a hot look this valentine, opt for classic
                            colors like red, wine, and pink. If you are wearing
                            off-shoulder or noodle-strap tops then choose a
                            subtle makeup look, and highlight your jawline and
                            cheekbones. Bold and royal makeup with gowns and
                            dresses will complete the look.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item rounded-0  border-0 mt-3">
                      <h2 className="accordion-header" id="headingFive">
                        <button
                          className="accordion-button shadow-none bg-theme1 text-white rounded-0 fs-14 collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFive"
                          aria-expanded="true"
                          aria-controls="collapseFive"
                        >
                          What are the different makeup styles?
                        </button>
                      </h2>
                      <div
                        id="collapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFive"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <div className="txt fs-14 fw-normal">
                            There are different makeup styles women can choose
                            as per the occasion. Some of them are mentioned
                            below:
                            <br />
                            <br />
                            <ul className>
                              <li>Nude makeup</li>
                              <li>Matte makeup</li>
                              <li>Dewy makeup</li>
                              <li>Airbrush makeup</li>
                              <li>Fantasy makeup</li>
                              <li>HD makeup</li>
                              <li>No-makeup look</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item rounded-0  border-0 mt-3">
                      <h2 className="accordion-header" id="headingSix">
                        <button
                          className="accordion-button shadow-none bg-theme1 text-white rounded-0 fs-14 collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSix"
                          aria-expanded="false"
                          aria-controls="collapseSix"
                        >
                          What is simplest makeup?
                        </button>
                      </h2>
                      <div
                        id="collapseSix"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingSix"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <div className="txt fs-14 fw-normal">
                            If you want to know the trick for simple makeup then
                            a nude look is what you can choose. You just have to
                            use minimal products like BB cream, concealer, kajal
                            or eyeliner, and lipstick.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 mt-4">
                  <div className="keyWordsLink d-flex gap-sm-3 gap-1 align-items-center">
                    <span className="p-sm-2 p-1 bg-white fs-16 rounded-1">
                      Keywords :
                    </span>
                    <span>
                      <a
                        className="text-decoration-none text-white fs-14"
                        href="javascript:;"
                      >
                        valentine’s day makeup look
                      </a>
                    </span>
                  </div>
                </div>
                <div className="col-12 mt-4">
                  <div className="socialIcon d-flex align-items-center gap-sm-3 gap-2">
                    <span className="share fs-14 text-white">Share :</span>
                    <ul className="p-0 m-0 list-unstyled d-flex align-items-center gap-sm-3 gap-2">
                      <li className>
                        <a
                          className="text-decoration-none socialLink d-flex p-2 bg-black fsacebook"
                          href
                        >
                          <img src="/assets/img/icon/facebookNew.svg" alt />
                        </a>
                      </li>
                      <li className>
                        <a
                          className="text-decoration-none socialLink d-flex p-2 bg-black instagram"
                          href
                        >
                          <img src="/assets/img/icon/instagramNew.svg" alt />
                        </a>
                      </li>
                      <li className>
                        <a
                          className="text-decoration-none socialLink d-flex p-2 bg-black linkedin"
                          href
                        >
                          <img src="/assets/img/icon/linkedinNew.svg" alt />
                        </a>
                      </li>
                      <li className>
                        <a
                          className="text-decoration-none socialLink d-flex p-2 bg-black tiwtter"
                          href
                        >
                          <img src="/assets/img/icon/twitterNew.svg" alt />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="relatedPostMain position-sticky">
                <div className="row gap-3">
                  <div className="col-12">
                    <div className="heading fs-18 fw-bold text-white">
                      Related Posts
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="row g-4">
                      {
                        InnerData?.RelatedPosts?.map((item)=>{
                          return(
                            <div className="col-lg-12 col-sm-6"
                            style={{cursor:'pointer'}}
                              onClick={()=>setInnerId(item._id)}
                            >
                        
                            <div className="blogOuter rounded-4 overflow-hidden position-relative">
                              <div className="imgOuter overflow-hidden"
                              
                              >
                                <img
                                  className="w-100 h-100"
                                  src="/assets/img/blog/blogImg1.jpg"
                                  alt
                                />
                              </div>
                              <div className="blogDetail p-3 bg-white row gap-2 mx-0">
                                <div className="blogTitle col-12 px-0">
                                  {parse(item?.Description?item?.Description.slice(0,50):'No Data')}
                                </div>
                                <ul className="d-flex align-items-center gap-sm-3 gap-2 list-unstyled p-0 m-0 col-12 px-0">
                                  <li className="text-muted border-end border-2 border-gray pe-sm-3 pe-2">
                                  {item?.Title}
                                  </li>
                                  <li className="text-muted">{item?.WriteDate?.slice(0,10)}</li>
                                </ul>
                                
                              </div>
                            </div>
                          </div>
                          )
                        })
                      }
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default BlogInnerPage;
