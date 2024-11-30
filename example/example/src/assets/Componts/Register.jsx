import React from 'react'
import Lable from './Lable';

const Register = ({setfirst}) => {
  return (
    <div>
      <h1>CREATE AN ACCOUNT</h1>
      <Lable name={"username"} />
      <input type="text" name="" id="" />
      <br></br>
      <br></br>
      <Lable name={"email"} />
      <input type="text" name="" id="" />
      <br></br>
      <br></br>
      <Lable name={"password"} />
      <input type="password" name="" id="" />
      <br></br>
      <br></br>
      <Lable name={"conform password"} />
      <input type="password" name="" id="" />
      <br></br>
      <br></br>
      <button onClick={() => setfirst("login")}>Login</button>
    </div>
  );
}

export default Register
