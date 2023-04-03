import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Home from "../pages/home/Home";

const Authentication = () => {
  const token = localStorage.getItem("token");
  
  return token ? (
    <>
      
      <Outlet />
    </>
  ) : (
    <Navigate to="/home" />
  );
};
export default Authentication;
