import React from "react";
import "./myStyle.css";
import { IconButton } from "@mui/material";

function MessageOthers() {
  var props1 = { name: "RandomUser", message: "This is message received" };
  return (
    <div className="other-message-container">
      <div className="conversation-container other-message">
        <div className="other-text-content">
          <p className="con-lastMessage">{props1.message}</p>
          <p className="con-timeStamp">12:00am</p>
        </div>
      </div>
    </div>
  );
}
export default MessageOthers;
