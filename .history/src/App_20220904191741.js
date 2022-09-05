import React, { Component, Suspense } from "react";
import { connect, Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "./redux/redux-store";
import { compose } from "redux";
import "./App.css";
import Preloader from "./components/common/preloader/Preloader";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
// import ProfileContainer from "./components/Profile/ProfileContainer";
import  { withRouter } from "./components/Profile/ProfileContainer";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import { initializeAppThunk } from './redux/app-reducer';
const DialogsContainer = React.lazy(() => import('./components/common/preloader/Preloader'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends Component {
  
  componentDidMount() {
    this.props.initializeAppThunk();
  }

  render() {
    if(!this.props.initialized){
      return <Preloader/>
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <SidebarContainer/>
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/dialogs/*"
              element={
              <Suspense fallback={<div>Loading...</div>}>
                <DialogsContainer />
              </Suspense>} />
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

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

const AppContainer =  compose(
  withRouter,
  connect(mapStateToProps, {initializeAppThunk}))
  (App);

const MainApp = (props) => {
  return <BrowserRouter>
  <Provider store={store}>
    <AppContainer/>
  </Provider>
</BrowserRouter>
}

export default  MainApp;