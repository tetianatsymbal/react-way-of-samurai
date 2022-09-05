import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { compose } from "redux";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import ProfileContainer, { withRouter } from "./components/Profile/ProfileContainer";
import Settings from "./components/Settings/Settings";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import { initializeAppThunk } from './redux/app-reducer';

class App extends Component {
  componentDidMount() {
    this.props.getAuthThunk();
  }
  render() {
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <SidebarContainer/>
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/dialogs/*"
              element={<DialogsContainer />} />
            <Route
              path="/profile"
              element={<ProfileContainer key={1} />} exact/>
            <Route
              path="/profile/:userId"
              element={<ProfileContainer key={2} />} />
            <Route path="/users/*" element={<UsersContainer />} />
            <Route path="/news/*" element={<News />} />
            <Route path="/music/*" element={<Music />} />
            <Route path="/login/*" element={<LoginPage />} />ы
            <Route path="/settings/*" element={<Settings />} />

          </Routes>
        </div>
      </div>
    );
  };
};

export default compose(
  withRouter,
  connect(null, {initializeAppThunk}))
  (App);
