import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../pages/Cart/Cart";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Authentication/Login";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Profile from "../pages/Profile/Profile";
import Signup from "../pages/Authentication/Signup";
import Following from "../pages/Following/Following";
import Setting from "../pages/Setting/Setting";
import PrivateRoutes from "./PrivateRoutes";
import Wishlist from "../pages/Wishlist/Wishlist";
function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="profile" element={<Profile />} />
      <Route path="product/:id" element={<ProductDetails />} />
      <Route path="setting" element={<Setting/>}/>
      <Route path="following" element={<Following />} />
       <Route path="wishlist" element={<Wishlist/>}/>
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
