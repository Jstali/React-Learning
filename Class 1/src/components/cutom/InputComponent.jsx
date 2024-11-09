import React from "react";

const InputComponent = ({ label, type }) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input type={type} id={label} />
    </div>
  );
};

export default InputComponent;
