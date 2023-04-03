import { CARTDATA, INCREASE, SETUSERS , CART, PAY, CHECKOUT, CATEGORYID, WHISH, CITYNAME, COUPONSID, CHECKVALUE, SEARCH} from "./Const";
import { SALOONSERVICE } from "./Const";
import { LOGOUT } from "./Const";
export const setUsers = (payload) => {
  return {
    type: SETUSERS,
    payload: payload,
  };
};

export const saloonservice = (payload) => {
  return {
    type: SALOONSERVICE,
    payload: payload,
  };
};

export const cartdata = (payload) => {
  return {
    type: INCREASE,
    payload: payload,
  };
};

export const serviceId = (payload) => {
  return {
    type : CATEGORYID,
    payload : payload,
  }
};
export const searchdata = (payload) => {
  return {
    type : SEARCH,
    payload : payload,
  }
};
export const cart = (payload) => {
  return {
    type: CART,
    payload: payload,
  };
};

export const Razor = (payload) => {
  return {
    type: PAY,
    payload: payload,
  };
};

export const checkoutvalues = (payload) => {
  return {
    type : CHECKVALUE,
    payload : payload,
  };
}

export const checkout = (payload) => {
  return {
    type: CHECKOUT,
    payload: payload,
  };
};

export const WhislistItem = (payload) => {
  return {
    type : WHISH,
    payload: payload
  }
}
;
export const cityName= (payload)=>{
  return{
      type: CITYNAME,
      payload: payload,
  };
}
export const couPon = (payload) => {
  return {
    type : COUPONSID,
    payload : payload ,
  }
}