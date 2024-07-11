import React from "react";
import "./myStyle.css";
import logo from "../Images/live-chat.png";
import IconButton from "@mui/material/IconButton";
import Search from "@mui/icons-material/Search";

function Groups() {
  return (
    <div className="list-container">
      <div className="ug-header">
        <img src={logo} alt="logo" style={{ height: "2rem", width: "2rem" }} />
        <p className="ug-title">Online groups</p>
      </div>
      <div className="sd-search">
        <IconButton>
          <Search />
        </IconButton>
        <input placeholder="Search" className="search-box" />
      </div>
      <div className="ug-list">
        <div className="ug-list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test group</p>
        </div>
        <div className="ug-list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test group</p>
        </div>
        <div className="ug-list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test group</p>
        </div>
        <div className="ug-list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test group</p>
        </div>
        <div className="ug-list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test group</p>
        </div>
        <div className="ug-list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test group</p>
        </div>
        <div className="ug-list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test group</p>
        </div>
        <div className="ug-list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test group</p>
        </div>
        <div className="ug-list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test group</p>
        </div>
        <div className="ug-list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test group</p>
        </div>
        <div className="ug-list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test group</p>
        </div>
      </div>
    </div>
  );
}

export default Groups;
