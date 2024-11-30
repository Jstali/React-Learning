import React from "react";
import Inputcomps from "../Customcomponent/Inputcomps";
import Buttoncomps from "../Customcomponent/Buttoncomps";
const Login = () => {
  return (
    <div className="flex flex-col items-center w-full  gap-4">
      <h1 className="text-2xl font-bold">Log in to Exclusive</h1>
      <h6 className="text-xs">Enter your details below</h6>

      <Inputcomps type="text" name="" placeholder="Email or phone number" />
      <Inputcomps type="password" name="" placeholder="Password" />
      <div className="flex gap-6 ">
        <Buttoncomps Button={"Login"} />
        <h4 className="text-orange-600">Forget password?</h4>
      </div>
    </div>
  );
};

export default Login;
