import React from "react";
import InputComponent from "./components/InputComponent";
import ButtonComponent from "./components/ButtonComponent";

const App = () => {
  return (
    <div>
       <InputComponent label={"name: "} type={"text"}/>
      <InputComponent label={"Email: "} type={"text"} />
      <InputComponent label={"Password: "} type={"password"} />
      <InputComponent label={"confirm pass: "} type={"password"} />
      <ButtonComponent button={"login"} />
    </div>
  );
};

export default App;
