import React, { useState } from "react";
import Button from "../components/buttons";
import { adminDetails } from "../data";
import toast from "react-hot-toast";

const Login = ({ setItemInLocalStorage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === adminDetails[0].email) {
      setItemInLocalStorage("email", email);
      toast.success("Login Successfull!");
    } else if (!email || !password) {
      toast.error("Enter All Credentials");
    } else {
      toast.error("Invalid Login Credentials");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center gap-10 pt-32">
      <h1 className="text-black text-2xl font-mono ">Login</h1>
      <div className="flex flex-col gap-10 border-solid border-2 border-black rounded-xl w-1/2 p-5 ">
        <input
          name="email"
          type="email"
          value={email}
          placeholder="Enter Email here..."
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="outline-none border-b-2 border-b-teal-500 pb-2"
        />
        <input
          name="password"
          type="password"
          value={password}
          placeholder="Enter Password here..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="outline-none border-b-2 border-b-teal-500 pb-2"
        />
        <Button
          buttonType="primary"
          buttonText="Login"
          buttonAction={handleLogin}
        />
      </div>
    </div>
  );
};

export default Login;
