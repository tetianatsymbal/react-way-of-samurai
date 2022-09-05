import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/default-photo.jpeg";
import Paginator from "../common/Paginator/Paginator";
import s from "./Users.module.css";

let User = ({user}) => {
  let u = user;

return (
  <div className={s.user} key={u.id}>
    <div>
      <div>
        <NavLink to={'./../profile/' + u.id}>
          <img
            className={s.userPhoto}
            src={u.photos.small != null ? u.photos.small : userPhoto}
          />
        </NavLink>
      </div>
      <div>
        {u.followed ? (
          <button disabled={props.followingInProgress.some(id => id===u.id)} 
          onClick={() => { props.unFollow(u.id) }}> UNFOLLOW </button>
        ) : (
          <button disabled={props.followingInProgress.some(id => id===u.id)} 
          onClick={() => { props.follow(u.id) }}> FOLLOW </button>
        )}
      </div>
    </div>
    <div>
      <span>
        <div>{u.name}</div>
        <div>{u.status}</div>
      </span>
      <span>
        <div>{"u.location.country"}</div>
        <div>{"u.location.city"}</div>
      </span>
    </div>
  </div>
);
}
export default User;
