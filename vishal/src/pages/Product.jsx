import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const [first, setfirst] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const hsa = async () => {
      const sha = await fetch("https://reqres.in/api/login");
      const lee = await sha.json();
      setfirst(lee.data);
    };
    hsa();
  }, []);

  console.log(first, "first");

  const handleClick = (item) => {
    navigate(`${item.key}`, { state: { data: item } });
  };

  return (
    <div className="bg-blue-300">
      {first.map((item, ind) => (
        <div
          key={ind}
          style={{ backgroundColor: `${item.color}` }}
          onClick={() => handleClick(item)}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Product;
