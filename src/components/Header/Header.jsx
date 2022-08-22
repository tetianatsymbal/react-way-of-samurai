import React from "react";
import s from "./Header.module.css";
import logo from "../../assets/logo.jpg";

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
      : <a href="/login">Login</a> }
      </div>
    </header>
  );
};

export default Header;
