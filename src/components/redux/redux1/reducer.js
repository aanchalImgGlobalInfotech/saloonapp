import { act } from "@testing-library/react";
import { useSelector } from "react-redux";
import { CART, CARTDATA, CATEGORYID, CHECKOUT, INCREASE, PAY, SALOONSERVICE, SETUSERS, WHISH , CITYNAME, COUPONSID, CHECKVALUE, SEARCH} from "./Const";


const initial_state = {
    userData: [],
    saloonData : [],
    carts: [],
    categoryItem  : [],
    search : [],
    tempcart : [],
    whishlistItem : [],
    payment : [],
    chekouts : [],
    checkstate : [],
    cityName : [],
    CouponItem : [],
  };
const Reducers = (state = initial_state, action) => {
 
    switch (action.type) {
      case SETUSERS:
        return { ...state, userData: action.payload };
        case SALOONSERVICE:
          return {...state , saloonData : action.payload};
          case CART :
            return {...state , carts : action.payload};
            case CATEGORYID :
              return {...state , categoryItem : action.payload,
              
              }
              case SEARCH :
                return {...state , search : action.payload,
                
                }
           case PAY :
            return {...state , payment : action.payload}
         case CHECKOUT :
          return {...state , chekouts : action.payload}
          case CHECKVALUE :
            return {...state , checkstate : action.payload}
          case WHISH :
            return {...state , whishlistItem : action.payload }
            case CITYNAME:
            return{...state , cityName : action.payload,
                  
            }
            case  COUPONSID:
              return {
                ...state , CouponItem : action.payload
              }
          
        default:
      return state;
    }}


    export default Reducers;