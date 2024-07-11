import React, { useState } from "react";
import "./myStyle.css";
import {
  AccountCircle,
  PersonAdd,
  GroupAdd,
  AddCircle,
  Bedtime,
  Search,
  LightMode,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import ConversationItem from "./ConversationItem";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Sidebar() {
  const navigate = useNavigate();
  const [lightTheme, setLightTheme] = useState(true);
  const [conversations, setConversations] = useState([
    {
      name: "Test#1",
      lastMessage: "Last Message #1",
      timeStamp: "today",
    },
    {
      name: "Test#2",
      lastMessage: "Last Message #2",
      timeStamp: "today",
    },
    {
      name: "Test#3",
      lastMessage: "Last Message #3",
      timeStamp: "today",
    },
  ]);

  return (
    <div className="sidebar-container">
      <div className={"sd-header" + (lightTheme ? "" : " dark")}>
        <div>
          <IconButton>
            <AccountCircle className={"icon" + (lightTheme ? "" : " dark")} />
          </IconButton>
        </div>
        <div>
          <IconButton
            onClick={() => {
              navigate("/app/users");
            }}
          >
            <PersonAdd className={"icon" + (lightTheme ? "" : " dark")} />
          </IconButton>
          <IconButton
            onClick={() => {
              navigate("/app/groups");
            }}
          >
            <GroupAdd className={"icon" + (lightTheme ? "" : " dark")} />
          </IconButton>
          <IconButton
            onClick={() => {
              navigate("/app/create-group");
            }}
          >
            <AddCircle className={"icon" + (lightTheme ? "" : " dark")} />
          </IconButton>
          <IconButton
            onClick={() => {
              setLightTheme((previousValue) => {
                return !previousValue;
              });
            }}
          >
            {lightTheme && (
              <Bedtime className={"icon" + (lightTheme ? "" : " dark")} />
            )}
            {!lightTheme && (
              <LightMode className={"icon" + (lightTheme ? "" : " dark")} />
            )}
          </IconButton>
        </div>
      </div>
      <div className="sd-search">
        <IconButton>
          <Search />
        </IconButton>
        <input placeholder="Search" className="search-box" />
      </div>
      <div className="sd-conversation">
        {conversations.map((conversation) => {
          return (
            <ConversationItem props={conversation} key={conversation.name} />
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
