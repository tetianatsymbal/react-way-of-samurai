import React from "react";
import s from "./Paginator.module.css";

const  Paginator = ({currentPage, totalUsersCount, pageSize, onPageChanged}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let currentPage = currentPage;
  let currentPageF = currentPage - 5 < 0 ? 0 : currentPage - 5;
  let currentPageL = currentPage + 5;
  let slicedPages = pages.slice(currentPageF, currentPageL);

  return (
    <div className={s.pages}>
      {slicedPages.map((p) => {
        return (
          <span
            className={currentPage === p && s.selectedPage}
            onClick={(e) => {
              onPageChanged(p);
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
