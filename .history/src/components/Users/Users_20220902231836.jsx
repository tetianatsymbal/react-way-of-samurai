import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/default-photo.jpeg";
import Paginator from "../common/Paginator/Paginator";
import s from "./Users.module.css";

let Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, ...props}) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let currentPage = props.currentPage;
  let currentPageF = currentPage - 5 < 0 ? 0 : currentPage - 5;
  let currentPageL = currentPage + 5;
  let slicedPages = pages.slice(currentPageF, currentPageL);

  return (
    <div className={s.usersBlock}>

    <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount} pageSize={pageSize}/>

      <div className={s.users}>
        {props.users.map((u) => (
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
        ))}
      </div>
    </div>
  );
};
export default Users;
