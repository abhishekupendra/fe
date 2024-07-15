import React from "react";
import "./myStyle.css";
import logo from "../Images/live-chat.png";
import IconButton from "@mui/material/IconButton";
import Search from "@mui/icons-material/Search";
import { AnimatePresence, motion } from "framer-motion";

function Users() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ ease: "anticipate", duration: "0.3" }}
        className="list-container"
      >
        <div className="ug-header">
          <img
            src={logo}
            alt="logo"
            style={{ height: "2rem", width: "2rem" }}
          />
          <p className="ug-title">Online Users</p>
        </div>
        <div className="sd-search">
          <IconButton>
            <Search />
          </IconButton>
          <input placeholder="Search" className="search-box" />
        </div>
        <div className="ug-list">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
            className="ug-list-item"
          >
            <p className="con-icon">T</p>
            <p className="con-title">Test user</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
            className="ug-list-item"
          >
            <p className="con-icon">T</p>
            <p className="con-title">Test user</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
            className="ug-list-item"
          >
            <p className="con-icon">T</p>
            <p className="con-title">Test user</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
            className="ug-list-item"
          >
            <p className="con-icon">T</p>
            <p className="con-title">Test user</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
            className="ug-list-item"
          >
            <p className="con-icon">T</p>
            <p className="con-title">Test user</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
            className="ug-list-item"
          >
            <p className="con-icon">T</p>
            <p className="con-title">Test user</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
            className="ug-list-item"
          >
            <p className="con-icon">T</p>
            <p className="con-title">Test user</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
            className="ug-list-item"
          >
            <p className="con-icon">T</p>
            <p className="con-title">Test user</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
            className="ug-list-item"
          >
            <p className="con-icon">T</p>
            <p className="con-title">Test user</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
            className="ug-list-item"
          >
            <p className="con-icon">T</p>
            <p className="con-title">Test user</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
            className="ug-list-item"
          >
            <p className="con-icon">T</p>
            <p className="con-title">Test user</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
            className="ug-list-item"
          >
            <p className="con-icon">T</p>
            <p className="con-title">Test user</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
            className="ug-list-item"
          >
            <p className="con-icon">T</p>
            <p className="con-title">Test user</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
            className="ug-list-item"
          >
            <p className="con-icon">T</p>
            <p className="con-title">Test user</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
            className="ug-list-item"
          >
            <p className="con-icon">T</p>
            <p className="con-title">Test user</p>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Users;
