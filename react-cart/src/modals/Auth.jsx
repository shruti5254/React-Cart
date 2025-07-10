import { useState } from "react";
// import { useContext } from 'react';
// import { AppContext } from "../context/AppContext";
const Auth = () => {
  const [state, setState] = useState("login");
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("name", name, "email", email, "password", password);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <span>user</span> {state === "login" ? "Login" : "Sinup"}
        </p>
        {state === "register" && (
          <div>
            <p>Name</p>
            <input type="text" onChange={ (e) => setName(e.target.value)}/>
          </div>
        )}

        <div>
          <p> Email </p>
          <input type="email" onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div>
          <p> password </p>
          <input type="password" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        {state === "register" ? (
          <div>
            <p>
              already have an account? <span onClick ={() => setState("login")}>click here to login</span>
            </p>
          </div>
        ) : (
          <div>
            <p>
              create account. <span onClick = {() => setState("register")}>click here to create an account</span>
            </p>
          </div>
        )}
        <button>{state === "register" ? "create account" : "Login"}</button>
      </form>
    </div>
  );
};
export default Auth;