import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/login/login";
import Signup from "./pages/login/signup";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  HashRouter,
} from "react-router-dom";
import Verifyotp from "./pages/login/verifyotp";
import Home from "./pages/home/Home";
import Authentication from "./Authentication/authentication";
import Dasbord from "./pages/home/Dasbord";
import UserProfile from "./pages/profile/UserProfile";
import EditProfile from "./pages/profile/EditProfile";
import { useDispatch } from "react-redux";
import { setUsers } from "./components/redux/redux1/actions";
import { useEffect } from "react";
import { getData } from "./components/apiinstance/Api";
import Hair_cut from "./pages/cart/Hair_cut";
import Services from "./pages/cart/Services";
import Blog from "./pages/blog/Blog";
import BlogInnerPage from "./pages/blog/BlogInnerPage";
import CheckOut from "./pages/checkout/CheckOut";
import ContactUs from "./pages/ContactUs/ContactUs";
import PartnerLogin from "./pages/PartnerWithUs/PartnerLogin";
import SignUpPartner from "./pages/PartnerWithUs/SignUpPartner";
import SignUpPartnerStepOne from "./pages/PartnerWithUs/SignUpPartnerStepOne";
import SignUpPartnerStepTwo from "./pages/PartnerWithUs/SignUpPartnerStepTwo";
import SignUpPartnerStepThree from "./pages/PartnerWithUs/SignUpPartnerStepThree";
import SignUpPartnerStepFour from "./pages/PartnerWithUs/SignUpPartnerStepFour";
// import ArtistRegistration from "./pages/ArtistSignUp/ArtistRegistration";
import { useState } from "react";
import Hair_cut2 from "./pages/cart/Hair_cut2";
function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("token");
    if (!token) {
      return <Navigate to="/home" />;
    }
    return children;
  };

  const userprofile = async () => {
    const profile = await getData("user-Profile");
    dispatch(setUsers(profile.data));
  };

  useEffect(() => {
    if (token) {
      userprofile();
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Authentication />}>
          <Route
            exact
            path="/"
            element={
              localStorage.getItem("token") ? (
                <Navigate replace to="/Dashboard" />
              ) : (
                <Navigate replace to="/home" />
              )
            }
          />
          <Route exact path="/Dashboard" element={<Home />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/contact" element={<ContactUs />} />
          <Route exact path="/nextblog/:id" element={<BlogInnerPage />} />
          <Route exact path="/userprofile" element={<UserProfile />} />
          <Route exact path="/hair" element={<Hair_cut />} />
          <Route exact path="/salon-in" element={<Hair_cut2/>} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/checkout" element={<CheckOut />} />
        </Route>
        <Route exact path="/home" element={<Dasbord />} />
        <Route exact path="/verifyotp" element={<Verifyotp />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/partnerlogin" element={<PartnerLogin/>}/>
        <Route exact path="/signup-partner" element={<SignUpPartner/>}/>
        <Route exact path="/signup-partner-step-one" element={<SignUpPartnerStepOne/>}/>
        <Route exact path="/signup-partner-step-two" element={<SignUpPartnerStepTwo/>}/>
        <Route exact path="/signup-partner-step-three" element={<SignUpPartnerStepThree/>}/>
        <Route exact path="/signup-partner-confirmation" element={<SignUpPartnerStepFour/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;