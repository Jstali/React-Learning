// import React, { useEffect, useState } from "react";

import { useEffect, useState } from "react";

// const Products = () => {
//   const [prod, setProd] = useState([]);
//   useEffect(() => {
//     const fetchFn = async () => {
//       const dataFetch = await fetch("https://fakestoreapi.com/products");

//       const jsonData = await dataFetch.json();

//       setProd(jsonData);
//     };

//     fetchFn();
//   }, []);

//   console.log(prod, "prod");

//   return (
//     <div>
//       {prod.map((data) => (
//         <>
//           <h1>{data.id}</h1>
//           <h1>{data.title}</h1>
//         </>
//       ))}
//     </div>
//   );
// };

// export default Products;

// import React, { useEffect, useState } from "react";

// const Products = () => {
//   const [first, setfirst] = useState([])
//   useEffect(() => {
//   const fetchNn = async()=>{
//   const dataFetch = await fetch("https://fakestoreapi.com/products");
// const products= await dataFetch.json();
// setfirst(products);

//   }
//   fetchNn();

//   }, []);
//   console.log(first,"first")

//   return (
//     <div>
//       {first.map((data) => (
//         <div>
//             <img src="{}" alt=""  />
//           <h1>{data.id}</h1>
//           <h1>{data.title}</h1>
//         </div>
//       ))}
//     </div>
//   );

// };

// export default Products;
// import React from "react";

// const Products = () => {
//   const [first, setfirst] = useState([]);
//   const [isLoading, setIsLoading] = useState([]);
//   useEffect(() => {
//     setIsLoading(true);
//     const fineBc = async () => {
//       const proFetch = await fetch("https://fakestoreapi.com/products");
//       setIsLoading(false);
//       const product = await proFetch.json();
//       setfirst(product);
//     };
//     fineBc();
//   }, []);
//   console.log(first, "first");
//   if(isLoading){
//     return <p>Loading ...</p>
//   }
//   return (
//     <div>
//       {first.map((product, index) => (
//         <div key={index}>
//           {product.id}
//           {product.title}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Products;

import React from "react";

const Products = () => {
  const [first, setfirst] = useState([]);
  useEffect(() => {
    const good = async () => {
      const english = await fetch("https://fakestoreapi.com/products");
      const tamil = await english.json();
      setfirst(tamil);
    };
    good();
  }, []);
  console.log(first, "first");

  return (
    <div>
      {first.map((item,index) => (
        <div key={index}>{item.id}{item.title}
        {/* <img style={{width:"200px"}} src={item.image} alt="" /> */}
        <img src={item.image} style={{width:"80px"}} alt="" />
        </div> 
      ))}
    </div>
  );
};

export default Products;
