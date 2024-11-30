import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [first, setfirst] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const stro = async () => {
      const fdo = await fetch("https://fakestoreapi.com/products");
      const fing = await fdo.json();

      setfirst(fing);
      console.log(fing);
    };
    stro();
  }, []);
  const hangleClick = (prop) => {
    console.log(prop, "prop");

    navigate(`/${prop.id}`, { state: { data: prop } });
  };
  return (
    <div>
      {first.map((prop) => (
        <div key={prop.id} onClick={() => hangleClick(prop)}>
          <img src={prop.image} alt="" srcset="" height={10} width={50} />
          <p>{prop.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
