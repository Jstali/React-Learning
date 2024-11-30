import React from "react";

const ButtonComponent = ({ button, onClick }) => {
  return (
    <div className=" bg-blue-500 text-white p-1 w-full text-center">
      <button onClick={onClick}>{button}</button>
    </div>
  );
};

export default ButtonComponent;
