import React from "react";

const InputComponent = ({ placeholder, type }) => {
  return (
    <div className="">
      <input
        className=" p-1 border border-black rounded-sm"
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};

export default InputComponent;
