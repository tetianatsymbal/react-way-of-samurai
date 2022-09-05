import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import logo from "../../assets/logo.jpg";
import { NavLink } from "react-router-dom";

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
      : <NavLink to= {"/login"}>Login</NavLink> }
      </div>
    </header>
  );
};

export default Header;
