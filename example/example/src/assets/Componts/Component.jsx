// import React from "react";

// const Component = ( {label, type,placeholder }) => {
//   return (
//     <div>
//       <label htmlFor="">{label}</label>
//       <input type={type} placeholder={placeholder} name="email" id="" />

//     </div>
//   );
// };

// export default Component;

import React from 'react'

const InputComponent = ({label,type}) => {
  return (
    <div>
      <label htmlFor="">{label}</label>
      <input type={type} name="" id="" />
    
    </div>
  )
}

export default InputComponent;

