import React from "react";

const Buttoncomps = ({ Button, onClick }) => {
  return (
    <div>
      <button onClick={onClick}>{Button}</button>
    </div>
  );
};

export default Buttoncomps;
