import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import logo from "../../assets/logo.jpg";
import { Route } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
      <div className={s.label}>
        <img src={logo} />
        <span className={s.socialName}> FETLOCK </span>
      </div>
      <div className={s.loginBlock}>
      { props.isAuth
      ? <div> {props.login}  - <button onClick={props.logout}>Log out</button></div>
      : <Route path= {"/login"}>Login</Route> }
      </div>
    </header>
  );
};

export default Header;
