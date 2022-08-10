import React from "react";
import s from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";

const Sidebar = (props) => {
  let path = "/dialogs/" + props.sidebar.friends.id;
  let friendsElements = props.sidebar.friends.map((f) => (
    <NavLink to={path}>
      <div className={s.friend}>
        <div>
          <img className={s.friendImg} src={f.src} />
        </div>
        <div>{f.name}</div>
      </div>
    </NavLink>
  ));

  return (
    <div className={s.sidebar}>
      <h3>Friends</h3>
      <div className={s.friends}>
        {friendsElements}
        <div />
      </div>
    </div>
  );
};

export default Sidebar;
