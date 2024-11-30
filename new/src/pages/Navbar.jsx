import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const data = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Contact", link: "/contact" },
    { id: 3, name: "About", link: "/about" },
    { id: 4, name: "signup", link: "/signup" },
  ];
  return (
    <div className=" flex justify-between p-5">
      <div>
        <h1 className="text-3xl font-semibold">Exclusive </h1>
      </div>
      <div className="flex gap-5 text-xl">
        {data.map((data) => (
          <Link to={data.link} key={data.id}>
            {data.name}
          </Link>
        ))}
      </div>
      <div className=" text-lg flex items-center relative">
        <input
          type="search"
          name=""
          placeholder="what are you looking for?"
          className=" bg-gray-300 px-2 placeholder:text-sm rounded-sm"
        />
        <FaSearch className=" absolute right-2 text-sm" />
      </div>
    </div>
  );
};

export default Navbar;
