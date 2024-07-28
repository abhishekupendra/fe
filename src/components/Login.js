import React, { useState } from "react";
import "./myStyle.css";
import logo from "../Images/live-chat.png";
import { TextField, Button, CircularProgress, Backdrop } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
//import Toaster from "./Toaster";

function Login() {
  const [showLogin, setShowLogin] = useState(false);
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [logInstatus, setlogInStatus] = useState("");
  const [signInStatus, setSignInstatus] = useState("");

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const loginHandler = async (e) => {
    setLoading(true);
    console.log(data);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const responce = await axios.post(
        "http://localhost:8100/user/login",
        data,
        config
      );
      console.log("Login: ", responce);
      setlogInStatus({ msg: "Success", key: Math.random() });
      setLoading(false);
      localStorage.setItem("userData", JSON.stringify(responce));
      navigate("/app/welcome");
    } catch (err) {
      setlogInStatus({
        msg: "Invalid Username or Password!!",
        key: Math.random(),
      });
    }
    setLoading(false);
  };
  const navigate = useNavigate();
  return (
    <div className="login-container">
      <div className="image-container">
        <img src={logo} alt="logo" className="welcome-logo" />
      </div>
      <div className="login-box">
        <p className="login-text">Login To Your Acount</p>
        <TextField
          id="standard-basic"
          label="Username"
          variant="outlined"
          onChange={changeHandler}
          name="name"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          autoComplete="current-password"
          onChange={changeHandler}
          name="password"
        />
        <Button variant="outlined" onClick={loginHandler}>
          Login
        </Button>
        <p>
          Don't have acount?{" "}
          <Button
            variant="outlined"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Sign Up
          </Button>
        </p>
      </div>
    </div>
  );
}

export default Login;
