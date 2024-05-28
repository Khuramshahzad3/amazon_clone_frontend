import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage";
import NavBar from "./Components/NavBar";
import { Checkout, Productpage, SearchResults } from "./Components";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product/:id" element={<Productpage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
