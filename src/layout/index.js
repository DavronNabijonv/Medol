import React from "react";
import { routes } from "../pages/routesConfig";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/homepage";
import Footer from "./footer";
import Product from "../pages/product";
import BuildPage from "../pages/buildPage";
import Services from "../pages/services";
import Aksiya from "../pages/aksiya";

export default function AppLayout() {
  return (
    <>
      
        {/* {routes.map(({ id, ...rest }) => {
            <Route key={id} {...rest} />;
          })} */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="/buildPage" element={<BuildPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/aksiya" element={<Aksiya />} />
        </Routes>
      <Footer />
    </>
  );
}
