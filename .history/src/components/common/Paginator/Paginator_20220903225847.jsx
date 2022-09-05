import React from "react";
import { useState } from "react";
import s from "./Paginator.module.css";

const  Paginator = ({currentPage, totalItemsCount, pageSize, onPageChanged, portionSize=10}) => {

  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={s.pages}>
      { portionNumber > 1 && 
      <button onClick={() => {setPortionNumber(portionNumber - 1)}} className={s.arrow}>←</button> }
      {pages
        .filter(p => p>=leftPortionPageNumber && p<=rightPortionPageNumber)
        .map((p) => {
        return (
          <span
            className={ currentPage === p && s.selectedPage }
            key={p}
            onClick={(e) => {
              onPageChanged(p);
            }}
          >
            {p}
          </span>
        );
      })}
      { portionNumber < portionCount && 
      <button onClick={() => {setPortionNumber(portionNumber + 1)}} className={s.arrow}>→</button> }
    </div>

  );
};
export default Paginator;
