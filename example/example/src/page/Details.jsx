import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Details = () => {
  const baselink = "https://api.storerestapi.com/users";
  const [data, setdata] = useState([]);
  const navigate=useNavigate()
  useEffect(() => {
    const fn = async () => {
      const fetchdata = await fetch(baselink);
      const jsondata = await fetchdata.json();
      setdata(jsondata.data);
    };
    fn();
  }, []);
  console.log(data);
  const handleclick = (data)=>{
    console.log(data);
    navigate(`/${data._id}`,{state:{data}})
  }

  return (
    <div>
      <h1 className="font-bold size-100">User Details</h1>
      {data.map((data) => (
        <div>
          <h1>{data.name}</h1>
          <h1>{data.role}</h1>
          <button >More details</button>
        </div>
      ))}
    </div>
  );
};

export default Details;
