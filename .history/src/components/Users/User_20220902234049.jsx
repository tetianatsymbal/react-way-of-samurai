import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/default-photo.jpeg";
import Paginator from "../common/Paginator/Paginator";
import s from "./Users.module.css";

let User = ({user, followingInProgress, unFollow, follow }) => {

return (
  <div className={s.user} key={user.id}>
    <div>
      <div>
        <NavLink to={'./../profile/' + user.id}>
          <img
            className={s.userPhoto}
            src={user.photos.small != null ? user.photos.small : userPhoto}
          />
        </NavLink>
      </div>
      <div>
        {user.followed ? (
          <button disabled={followingInProgress.some(id => id===user.id)} 
          onClick={() => { unFollow(user.id) }}> UNFOLLOW </button>
        ) : (
          <button disabled={followingInProgress.some(id => id===user.id)} 
          onClick={() => { follow(user.id) }}> FOLLOW </button>
        )}
      </div>
    </div>
    <div>
      <span>
        <div>{user.name}</div>
        <div>{user.status}</div>
      </span>
      <span>
        <div>{"user.location.country"}</div>
        <div>{"user.location.city"}</div>
      </span>
    </div>
  </div>
);
}
export default User;
