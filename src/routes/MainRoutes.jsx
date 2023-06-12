import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "C:\Users\HP\Desktop\Proyect react\ecomerce\src/pages/Home";
import Category from "C:\Users\HP\Desktop\Proyect react\ecomerce\src/pages/Category";
import Item from "C:\Users\HP\Desktop\Proyect react\ecomerce\src/pages/Item";
import NavBar from "C:\Users\HP\Desktop\Proyect react\ecomerce\src\components\Navbar";

const MainRouter = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />s
        <Route path="/category/:categoryId" element={<Category />} />
        <Route path="/item/:itemId" element={<Item />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;