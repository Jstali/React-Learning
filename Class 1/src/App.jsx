import React from "react";
import InputComponent from "./components/cutom/InputComponent";
import ButtonComponent from "./components/cutom/ButtonComponent";

const App = () => {
  return (
    <div>
      <InputComponent label={"Email"} type={"password"} />
      <InputComponent label={"Password"} type={"password"} />
      <ButtonComponent button={"Login"} />
    </div>
  );
};

export default App;
