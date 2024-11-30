import React from "react";
import Products from "./pages/Products";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Products />} />
      </Routes>
    </div>
  );
};

export default App;
