import React from "react";
import { useNavigate } from "react-router-dom";
import Empty from "../components/Empty/Empty";
import NoData from "../assets/Nodata.svg";

function PrivateRoutes({ children }) {
  const auth = true;
  const router = useNavigate();
  return auth ? (
    children
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
