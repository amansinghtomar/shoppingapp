import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Empty from "../components/Empty/Empty";
import NoData from "../assets/Nodata.svg";
import { useSelector } from "react-redux";

function PrivateRoutes({ role }) {
   const auth = useSelector((state) => state.auth.isAuthenticated);
   const router = useNavigate();
   return auth ? (
      <Outlet />
   ) : (
      <Empty
         image={NoData}
         message="Please login to view items"
         btnTitle="Login"
         handleBtn={() => {
            router("../login", { replace: true });
         }}
      />
   );
}

export default PrivateRoutes;
