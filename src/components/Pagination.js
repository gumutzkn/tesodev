import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { PaginationContext } from "../context/PaginationContext";
import styles from "./Pagination.module.scss";

export default function Pagination() {
  const { filteredData } = useContext(DataContext);
  const {
    itemsPerPage,
    currentPage,
    changePage,
    nextPage,
  } = useContext(PaginationContext);

  const pages = [];

  if (filteredData.length) {
    for (
      let i = 1;
      i <= Math.ceil(filteredData.length / itemsPerPage);
      i++
    ) {
      pages.push(i);
    }
  }

  return (
    <div className={styles.buttons}>
      {pages.map((number) => (
        <div
          key={number}
          className={`${styles.button} ${
            currentPage === number ? `${styles.active}` : ""
          }`}
          onClick={() => changePage(number)}>
          {number}
        </div>
      ))}

      <div
        onClick={nextPage}
        className={`${styles.button} ${styles.next}`}>
        Next
      </div>
    </div>
  );
}
