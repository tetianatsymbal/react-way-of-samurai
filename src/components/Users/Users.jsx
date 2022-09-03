import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import s from "./Users.module.css";

let Users = ({
  currentPage,
  totalUsersCount,
  pageSize,
  onPageChanged,
  users,
  ...props
}) => {
  return (
    <div className={s.usersBlock}>
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
      />
      <div className={s.users}>
        {users.map((u) => (
          <User
            user={u}
            followingInProgress={props.followingInProgress}
            unFollow={props.unFollow}
            follow={props.follow}
            key={u.id}
          />
        ))}
      </div>
    </div>
  );
};
export default Users;
