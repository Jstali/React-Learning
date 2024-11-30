import React from "react";
import Navbar from "./navbar";
import Buttoncomps from "../Customcomponent/Buttoncomps";
import image from "../assets/2.png";

const Home = () => {
  const data = [
    { id: 1, name: "Woman's Fashon " },
    { id: 1, name: "Men's Fashion " },
    { id: 1, name: "Electronics" },
    { id: 1, name: "Home & Lifestyle" },
    { id: 1, name: "Medicine" },
    { id: 1, name: "Sports & Outdoor" },
    { id: 1, name: "Baby's & Toys" },
    { id: 1, name: "Groceries & pets" },
    { id: 1, name: "Health & Beauty" },
  ];
  return (
    <div>
      <Navbar />
      <div className=" flex p-5">
        <div className=" w-[15%] space-y-5 font-thin">
          {data.map((data) => (
            <h4 key={data.id}>{data.name}</h4>
          ))}
        </div>
        <div className=" w-[85%]">
          <img src={image} alt="" srcset="" className="" width={"100%"} />
        </div>
      </div>
    </div>
  );
};

export default Home;
