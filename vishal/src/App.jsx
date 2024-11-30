// import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";

// const App = () => {
//   const [first, setfirst] = useState([])
//   useEffect(() => {
//     const food = async () => {
//       const door = await fetch("https://dummyjson.com/products");
//       const you=await door.json();
//       console.log(you.products,"you");

//       setfirst(you.products);

//     };
//     food();
//   }, []);

//   return (
//     <div className="bg-white p-5 font-mono   first-lter:capitalize flex flex-wrap flex-grow  gap-5  ">
//       {/* <h1>PRODUCTS</h1> */}
//       {first.map((item, ind) => (
//         <div key={ind} className=" bg-gray-500 flex-grow  p-2 rounded-lg text-center ">
//           {item.id}
//           {item.title}
//           <img src={item.thumbnail} alt="" />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  return (
    <div>
      <Routes>
        {/* <Route index element={<Product />} />
        <Route path="/:id" element={<ProductDetails />} /> */}

        <Route path="/" Component={Product} />
        <Route path="/:id" Component={ProductDetails} />
      </Routes>
    </div>
  );
};

export default App;
