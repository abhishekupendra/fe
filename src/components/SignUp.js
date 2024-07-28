import React from "react";
import "./myStyle.css";
import logo from "../Images/live-chat.png";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  return (
    <div className="login-container">
      <div className="image-container">
        <img src={logo} alt="logo" className="welcome-logo" />
      </div>
      <div className="login-box">
        <p className="login-text">New User Sign Up</p>
        <TextField id="standard-basic" label="Name" variant="outlined" />
        <TextField id="standard-basic" label="Email" variant="outlined" />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <Button variant="outlined">Sign Up</Button>
        <p>
          Already an acount?{" "}
          <Button
            variant="outlined"
            onClick={() => {
              navigate("/");
            }}
          >
            Login
          </Button>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
