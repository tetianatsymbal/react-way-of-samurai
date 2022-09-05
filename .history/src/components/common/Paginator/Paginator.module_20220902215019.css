import React from "react";
import s from "./Users.module.css";

let Paginator = (props) => {
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
    <div className={s.pages}>
      {slicedPages.map((p) => {
        return (
          <span
            className={props.currentPage === p && s.selectedPage}
            onClick={(e) => {
              props.onPageChanged(p);
            }}
          >
            {p}
          </span>
        );
      })}
    </div>
  );
};
export default Paginator;
