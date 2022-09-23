import React from "react";
import { Route, Routes } from "react-router-dom";
import { config } from "./RouteConfig";

function Router() {
   const createRoute = ({ id, path, Element, role, children }, index) => {
      return (
         <Route key={id} path={path} element={children ? <Element role={role} /> : <Element />}>
            {children && children.map(createRoute)}
         </Route>
      );
   };

   return <Routes>{config.map(createRoute)}</Routes>;
}

export default Router;
