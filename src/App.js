import Login from "./components/Login";
import "./App.css";
import MainContainer from "./components/MainContainer";
import { Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import ChatArea from "./components/ChatArea";
import Users from "./components/Users";
import CreateGroup from "./components/CreateGroup";
import Groups from "./components/Groups";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="app" element={<MainContainer />}>
          <Route path="welcome" element={<Welcome />}></Route>
          <Route path="chat" element={<ChatArea />}></Route>
          <Route path="users" element={<Users />}></Route>
          <Route path="groups" element={<Groups />}></Route>
          <Route path="create-group" element={<CreateGroup />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
