import React from "react";
import { useLocation } from "react-router-dom";

const Productdetails = () => {
  const location = useLocation();

  const { state } = location;

  console.log(location);

  const data = state.data;

  return (
    <div className="bg-red-950">
      <h1>{data.email}</h1>
      <h1>{data.name}</h1>
      <h1>{data.number}</h1>
      <h1>{data.password}</h1>
      <h1>{data.role}</h1>
    </div>
  );
};

export default Productdetails;
