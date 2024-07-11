import React from "react";
import "./myStyle.css";
import { IconButton } from "@mui/material";
import { DoneOutlineRounded } from "@mui/icons-material";

function CreateGroup() {
  return (
    <div className="createGroup-container">
      <input placeholder="Enter Group Name" className="search-box" />
      <IconButton>
        <DoneOutlineRounded />
      </IconButton>
    </div>
  );
}
export default CreateGroup;
