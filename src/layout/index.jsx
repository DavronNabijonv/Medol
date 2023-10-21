import React from "react";
import Navbar from "./navbar";
import { routes } from "../pages/routesConfig";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Homepage from "../pages/homepage";
import Footer from "./footer";

export default function AppLayout() {
  return (
    <>
      <Navbar />
      <Router>
        {/* {routes.map(({ id, ...rest }) => {
            <Route key={id} {...rest} />;
          })} */}
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}
