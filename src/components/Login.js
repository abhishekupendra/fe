import React from "react";
import "./myStyle.css";
import logo from "../Images/live-chat.png";
import { TextField, Button } from "@mui/material";
function Login() {
  return (
    <div className="login-container">
      <div className="image-container">
        <img src={logo} alt="logo" className="welcome-logo" />
      </div>
      <div className="login-box">
        <p className="login-text">Login To Your Acount</p>
        <TextField id="standard-basic" label="Username" variant="outlined" />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <Button variant="outlined">Login</Button>
      </div>
    </div>
  );
}

export default Login;
