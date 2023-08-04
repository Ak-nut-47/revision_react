import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import HypertextMarkupLanguage from "../pages/HypertextMarkupLanguage";
import CascadingStyleSheets from "../pages/CascadingStyleSheets";
import Reactjs from "../pages/Reactjs";
import VanillaJavascript from "../pages/VanillaJavascript";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/html" element={<HypertextMarkupLanguage />} />
      <Route path="/css" element={<CascadingStyleSheets />} />
      <Route path="/react" element={<Reactjs />} />
      <Route path="/javascript" element={<VanillaJavascript />} />
    </Routes>
  );
};

export default AllRoutes;
