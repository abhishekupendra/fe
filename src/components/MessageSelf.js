import React from "react";
import "./myStyle.css";

function MessageSelf() {
  var props2 = {
    name: "Gaurav",
    message: "This is sent messagefvbzdfbfdv sdv wefcaesd  ddfcwfcdaffx wdf we",
  };
  return (
    <div className="self-message-container">
      <div className="messageBox">
        <p className="messageText">{props2.message}</p>
        <p className="self-timeStamp">12:00am</p>
      </div>
    </div>
  );
}
export default MessageSelf;
