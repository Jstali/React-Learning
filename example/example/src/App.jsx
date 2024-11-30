// import React, { useState } from "react";
// import Component from "./assets/Componts/Component";

// const App = () => {
//   const [state, setState] = useState(0);
//   const handleSub = () => {
//     setState(state - 1);
//     state <= 0 && setState(0);
//   };
//   const handleAdd = () => {
//     setState(state + 1);
//   };
//   return (
//     <div>
//       <button onClick={handleSub}>Sub</button>
//       {state}
//       <button onClick={handleAdd}>Add</button>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from "react";

// const App = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const handleClick = () => {
//     setShowPassword(!showPassword);
//   };
//   return (
//     <div>
//       <input type={showPassword ? "text" : "password"} name="" id="" />
//       <button onClick={handleClick}>{showPassword ? "Hide" : "Show"}</button>
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import { useState } from "react";

// const App = () => {

//   const [first, setfirst] = useState(0);
//   const handleAdd = () => {
//     setfirst(first + 1);
//   };
//   const handleSub = () => {
//     setfirst(first - 1);
//   };
//   return <div>
//     <button onClick={handleAdd}>add</button>
//     {first}
//     <button onClick={handleSub}>sub</button>
//   </div>;
// };

// export default App;

// import React, { Component } from "react";
// import { useState } from "react";
// import Component from "./assets/Componts/Component";

// // import { Component } from "./assets/Componts/Component";
// // const App = () => {
//   <input type="text" name="email" id="" />;
//   return (
//     <div>

//       <label htmlFor="">email</label>
//       <input type="text" name="email" id="" />

//       <Component label="Moorthy" type={"text"} />
//       <Component label={"Hlo"} type={"password"} />
//       <Component />
//       <Component />

//       <label htmlFor="">password</label>
//       <input type="password" name="password" id="" />

//       <button type="button">login</button>
//     </div>
//   );
// };

// export default App;

// import React from 'react'

// const App = () => {
//   return (
//     <div>

//       <label htmlFor="">email</label>
//       <input type="text" name="email" id="" />
//       <label htmlFor="">password</label>
//       <input type="password" name="" id="" />
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Componts from "./assets/Componts/Component"
// import Component from './assets/Componts/Component'
// import Button from './assets/Componts/Button';
// const App = () => {
//   return (
//     <div>
//       <Component label={"email:"} type={"text"} placeholder={""} />
//       <Component label={"password:"} type={"password"} placeholder={""}/>
//       <Button Button={"login"}/>

//     </div>
//   );
// }

// export default App

// import React from 'react'
// import
// const App = () => {

//   return (
//     <div>
//       <InputComponent
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {
//   const [first, second] = useState(0)
//   const handleAdd= ()=>{
//     second(first + 1)
//   }
//   const handleSub=()=>{
//     second(first - 1)
//   }
//   return (
//     <div>
//       <button onClick={handleAdd}>add</button>

//       {first}
//       <button onClick={handleSub}>sub</button>
//     </div>
//   )
// }

// export default App

// // import React, { useState } from "react";
// import InputComponent from "./assets/Componts/Component";
// import Button from "./assets/Componts/Button";
// const App = () => {
//   const [first, setfirst] = useState("signup");

// return (
//   <div className="">
//     {first === "login" ? (
//       <div>
{
  /*         
          <InputComponent label={"email"} type={"text"} />
          <InputComponent label={"password"} type={"password"} />
          <Button Button={"login"}></Button>
          <button buttononClick={() => setfirst("login")}>
            go to signup page
          </button>
        </div>
      ) : (
        <div className="">
          <InputComponent label={"Name"} type={"text"} />
          <InputComponent label={"email"} type={"text"} />
          <InputComponent label={"password"} type={"password"} />
          <Button Button={"Signup"}></Button>
          <button onClick={() => setfirst("signup")}>go to login page</button>
        </div>
      )}
    </div>
  );
};

export default App; */
}

// import React from "react";
// import InputComponent from "./assets/Componts/Component";
// import Button from "./assets/Componts/Button";
// const App = () => {
//   return (
//     <div>
//       <h1>Login</h1>
//       <h4>Need an account ? Create an account</h4>
//       <label htmlFor="">user na</label>
//       <InputComponent label={"email"} type={"text"} />
//       <InputComponent label={"password"} type={"password"} />

//         <InputComponent type="checkbox" name="" id="" />{" "}
//         <p>keep me logged in</p>

//       <Button Button={"login"}></Button>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from 'react'

// const App = () => {
//   const [first, setfirst] = useState("login")
//   return (
//     <div className="">
//       {first === "login" ? (
//         <div>
//           <h1>lOGIN</h1>
//           <h4>login account or create account</h4>
//           <label htmlFor="">email</label>
//           <input type="text" name="" id="" />
//           <br></br>
//           <label htmlFor="">password</label>
//           <input type="password" name="" id="" />
//           <br></br>
//           <button onClick={() => setfirst("register")}>login</button>
//         </div>
//       ) : (
//         <div>
//           <h1>register</h1>
//           <h4>
//             login account or <button onClick={()=>setfirst("create")}>create account</button>
//           </h4>
//           <label htmlFor="">email</label>
//           <input type="text" name="" id="" />
//           <br></br>
//           <label htmlFor="">password</label>
//           <input type="password" name="" id="" />
//           <br></br>
//           <button>register</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App

// import React, { useState } from 'react'
// import Login from './assets/Componts/Login'
// import Register from './assets/Componts/register';

// const App = () => {
//   const [first, setfirst] = useState("login")
//   return (
//     <div>
//       {first === "login" ? (
//         <Login setfirst={setfirst} />
//       ) : (
//        <Register setfirst={setfirst}/>
//       )}
//     </div>
//   );
// }

// export default App

// import React, { useEffect, useState } from "react";

// const App = () => {
//   const [first, setfirst] = useState([]);
//   useEffect(() => {
//     const dda = async () => {
//       // const prod = await fetch("https://api.storerestapi.com/products");
//       // const json = await prod.json();

//       const prod = await (
//         await fetch("https://api.storerestapi.com/products")
//       ).json();
//       console.log(prod, "prod");

//       setfirst(prod.data ?? []);
//     };

//     dda();
//   }, []);

//   return (
//     <div>
//       {first.map((prod) => (
//         <div>
//           <h1>{prod.title}</h1>
//           <h4>{prod.id}</h4>
//           {prod.price}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";

// const App = () => {
//   const [first, setfirst] = useState([]);
//   useEffect(() => {
//     const cart = async () => {
//       const store = await fetch("https://api.storerestapi.com/products");
//       const york= await store.json();

//       console.log(york,"york");
//       setfirst(york.data);

//     };
//     cart();
//   }, []);

//   return <div>
//    {first.map((pro,ind)=>(
//     <div>
// <p>{pro.title}</p>
// <p>{pro.price}</p>
// <p>{pro._id}</p>
// </div>
//    ))

//    }
//   </div>;
// };

// export default App;

// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";

// const App = () => {
//   const [first, setfirst] = useState([])
//   useEffect(() => {
//     const fruit = async () => {
//       const iqoo = await fetch("https://api.storerestapi.com/users");
//       const joe=await iqoo.json();
//       setfirst(joe.data);
//       console.log(joe.data)
//     };
//     fruit();
//   }, []);

//   return <div>
//     {first.map((tree,you)=>(
//       <div key={you}>
//         <p>{tree.role}</p>
//         <p>{tree.name}</p>
//         <p>{tree._id}</p>
//       </div>
//     ))}
//   </div>;
// };

// export default App;

// import React from "react";
// import Products from "./page/Products";
// import { Route, Routes } from "react-router-dom";
// import Productdetails from "./page/Productdetails";

// const App = () => {
//   return (
//     <Routes>
//       {/* <Route path="/" element={<Products />} />
//       <Route path="/:id" element={<Productdetails />} /> */}
//       <Route path="/" element={<Products/>}/>
//       <Route path="/:id" element={<Productdetails/>}/>
//     </Routes>
//   );
// };

// export default App;

import React from "react";
import Details from "./page/Details";
import Products from "./page/Products";
import { Route, Routes } from "react-router-dom";
import Productdetails from "./page/Productdetails";

const App = () => {
  return (
    <Routes>
      <Route index Component={Details} />
      <Route path="/:id" Component={Productdetails} />
    </Routes>
  );
};

export default App;
