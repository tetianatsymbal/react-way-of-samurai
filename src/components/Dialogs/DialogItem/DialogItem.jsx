import React from "react";
import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog}>
      <img src="https://i.pinimg.com/564x/69/f7/50/69f7503539aa89c9c116e9ae1b240b57.jpg"/>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
