import React from "react";
import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const location = useLocation();
  console.log(location);

  const { data } = location.state;

  console.log(data, "data");

  return (
    <div style={{ backgroundColor: data.color }}>
      <h1>{data.id}</h1>
      <h1>{data.name}</h1>
      <h1>{data.year}</h1>
      <h1>{data.color}</h1>
      <h1>{data.pantone_value}</h1>
    </div>
  );
};

export default ProductDetails;
