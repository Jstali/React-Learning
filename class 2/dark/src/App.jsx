import React, { useState } from "react";
import Inputcompd from "./Components/Inputcompd";
import Buttoncomps from "./Components/Buttoncomps";
const App = () => {
  const [first, setfirst] = useState("login");
  return (
    <div>
      {first === "login" ? (
        <div className="">
          <h1>login</h1>
          <Inputcompd label={"email"} type={"text"} />
          <Inputcompd label={"password"} type={"password"} />
          <Buttoncomps Button="login" />
          <Buttoncomps
            onClick={() => setfirst("register")}
            Button={"Register"}
          />
        </div>
      ) : (
        <div className="">
          <h1>register</h1>
          <Inputcompd label={"user name"} type={"text"} />
          <Inputcompd label={"email"} type={"text"} />
          <Inputcompd label={"password"} type={"password"} />
          <Inputcompd label={"confirm pass"} type={"password"} />
          <Buttoncomps Button={"regiter"}>register</Buttoncomps>
          <Buttoncomps onClick={() => setfirst("login")} Button={"Login"} />
        </div>
      )}
    </div>
  );
};

export default App;
