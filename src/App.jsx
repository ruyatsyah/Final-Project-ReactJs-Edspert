import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Detail from "./pages/Detail";
import Checkout from "./pages/Checkout";
import CheckoutPayment from "./pages/CheckoutPayment";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/detail/checkout" element={<Checkout />} />
        <Route path="/detail/checkout/payment" element={<CheckoutPayment />} />
      </Routes>
    </Router>
  );
};

export default App;
