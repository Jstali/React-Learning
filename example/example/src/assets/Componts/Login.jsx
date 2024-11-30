    import React from 'react'
import Lable from './Lable';
import Input from './Input';
    
    const Login = ({setfirst}) => {
      return (
        <div>
          <h1>LOG IN</h1>
          <h4>
            need a account?{" "}
            <button onClick={() => setfirst("register")}>
              create an account
            </button>
          </h4>

          <Lable name={"username or email"} />
          <br></br>
          <br></br>
          <Input text={"text"} />

          <Lable name={"password"} />
          <br></br>
          <Input text={"password"} />

          <br></br>
          <br></br>
          <Input text={"checkbox"} />
          <Lable name={"keep logged in"} />

          <button>login</button>
          <h4>forgot username? forgot password?</h4>
          <h4>can't login?</h4>
        </div>
      );
    }
    
    export default Login