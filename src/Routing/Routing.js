import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../pages/Cart/Cart";
import Dashboard from "../pages/Dashboard/Dashboard";
import Following from "../pages/Following/Following";
import Login from "../pages/Login/Login";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Profile from "../pages/Profile/Profile";
import Setting from "../pages/Setting/Setting";
import Signup from "../pages/Signup/Signup";
import PrivateRoutes from "./PrivateRoutes";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="profile" element={<Profile />} />
      <Route path="product/:id" element={<ProductDetails />} />
      <Route path="setting" element={<Setting/>}/>
            <Route path="following" element={<Following/>}/>
      <Route
        path="cart"
        element={
          <PrivateRoutes>
            <Cart />
          </PrivateRoutes>
        }
      />
    </Routes>
  );
}

export default Routing;
