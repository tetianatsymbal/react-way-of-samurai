import React from "react";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import { Route, Routes } from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import LoginPage from "./components/Login/Login";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <SidebarContainer/>
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/dialogs/*"
            element={<DialogsContainer/>} />
          <Route
            path="/profile/*:userId"
            element={<ProfileContainer/>} />
          <Route path="/users/*" element={<UsersContainer />} />
          <Route path="/login/*" element={<LoginPage />} />
          <Route path="/news/*" element={<News />} />
          <Route path="/music/*" element={<Music />} />
          <Route path="/settings/*" element={<Settings />} />

        </Routes>
      </div>
    </div>
  );
};

export default App;
