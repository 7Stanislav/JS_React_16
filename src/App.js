// src/App.js

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Route as Switch,
} from "react-router-dom";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./assets/styles.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart products={[]} />} />
      </Routes>
    </Router>
  );
}


export default App;
