import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { getData } from "../../../components/apiinstance/Api";
import {  cityFooter, cityName } from "../../../components/redux/redux1/actions";

const Footer2 = () => {
  const[allCity,setAllCity]=useState();
  const[cate,setCate]=useState('saloon')
  
  const[allCityCategory,setAllCityCategory]=useState()
  const dispatch = useDispatch()
  const navigate=useNavigate()
       const getAllSaloonCity = async() =>{
          const res = await getData(`get-all-saloon-city`)
          console.log(res)
          setAllCity(res.data)
       }
   
    const getAllSaloonCityByCategory = async(category)=>{
      let categoryName =category||'saloon'
       
      const res = await getData(`get-all-saloon-city?category=${categoryName}`)
      setAllCityCategory(res.data)
     
    }


    const cityHandler = (city) => {
          dispatch(cityName(city));
          navigate('/Dashboard')
          
    }

    const cityHandlerByTypes = (data,cate) =>{
           dispatch(cityName(data))
           navigate('/salon-in',{state:cate})
              console.log('Hello this is console from footer2' )
              localStorage.setItem('category',cate)
    }
   useEffect(()=>{
        getAllSaloonCity()
        getAllSaloonCityByCategory()
       },[])
       
  return (
    <>
      <section className="container-fluid wherWeSection bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="heading py-3">Where We Are</div>
            </div>
            <div className="col-12">
              <ul className="where-we-list">
                {
                  allCity?.map((name)=>{
                    return(
                           <li>
                  <a  onClick={()=>cityHandler(name)}>{name}</a>
                </li>
                    )
                 
                  })
                }
                
               
              </ul>
              <div className="tabswhere py-3">
                <ul
                  className="nav nav-pills mb-3 pillcontent"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item navitem" role="presentation">
                    <button
                      className="nav-link navLink active"
                      id="pills-saloon-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-saloon"
                      type="button"
                      role="tab"
                      aria-controls="pills-saloon"
                      aria-selected="true"
                      onClick={()=>{getAllSaloonCityByCategory('saloon');setCate('saloon')}}
                    >
                      Saloon
                    </button>
                  </li>
                  <li className="nav-item navitem" role="presentation">
                    <button
                      className="nav-link navLink"
                      id="pills-parlour-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-saloon"
                      type="button"
                      role="tab"
                      aria-controls="pills-parlour"
                      aria-selected="false"
                      onClick={()=>{getAllSaloonCityByCategory('parlour');setCate('parlour')}}
                    >
                      Parlour
                    </button>
                  </li>
                  <li className="nav-item navitem" role="presentation">
                    <button
                      className="nav-link navLink"
                      id="pills-spa-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-saloon"
                      type="button"
                      role="tab"
                      aria-controls="pills-spa"
                      aria-selected="false"
                      onClick={()=>{ getAllSaloonCityByCategory('spa');setCate('spa')}}
                    >
                      Spa
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-saloon"
                    role="tabpanel"
                    aria-labelledby="pills-saloon-tab"
                    //tabIndex="{0}"
                  >
                    <div>
                      <ul className="where-we-list category_list">
                        {
                          allCityCategory?.map((data)=>{
                             return(
                              <li>
                              <a onClick={()=>cityHandlerByTypes(data,cate)}>{data}</a>
                            </li>
                             )
                          })
                        }
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer2;
