import React from "react";
import "./myStyle.css";
import { Delete, Send } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import MessageOthers from "./MessageOthers";
import MessageSelf from "./MessageSelf";

function ChatArea() {
  var props = { name: "Abhishek", timeStamp: "12:00am" };
  console.log(props.name[0]);
  return (
    <div className="chatArea-container">
      <div className="chatArea-header">
        <p className="con-icon">{props.name[0]}</p>
        <div className="header-text">
          <p className="con-title">{props.name}</p>
          <p className="con-timeStamp">{props.timeStamp}</p>
        </div>
        <IconButton>
          <Delete />
        </IconButton>
      </div>

      <div className="messages-container">
        <MessageOthers />
        <MessageSelf />
        <MessageOthers />
        <MessageSelf />
        <MessageOthers />
        <MessageSelf />
        <MessageOthers />
        <MessageSelf />
        <MessageOthers />
        <MessageSelf />
      </div>
      <div className="text-input-area">
        <input placeholder="Type a Message" className="search-box" />
        <IconButton>
          <Send />
        </IconButton>
      </div>
    </div>
  );
}
export default ChatArea;
