import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { Main } from "./views/Main";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { PlanetsDetails } from "./views/planetsDetails";
import { PersonDetails } from "./views/personDetails";
import { VehicleDetails } from "./views/vehicleDetails";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/Main" element={<Main />} />
            <Route path="/single/:theid" element={<Single />} />
            <Route path="/planetsDetails/:id" element={<PlanetsDetails />} />
            <Route path="/personDetails/:id" element={<PersonDetails />} />
            <Route path="/vehicleDetails/:id" element={<VehicleDetails />} />
            <Route path="*" element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);

