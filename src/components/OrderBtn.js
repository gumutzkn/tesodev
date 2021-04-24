import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { PaginationContext } from "../context/PaginationContext";
import styles from "./OrderBtn.module.scss";

export default function OrderBtn() {
  const { filteredData } = useContext(DataContext);
  const { isOpen, setIsOpen } = useContext(PaginationContext);

  function handleOpen() {
    setIsOpen(!isOpen);
  }

  function nameAsc(data) {
    data.sort((a, b) => (a.title > b.title ? 1 : -1));
  }

  function nameDesc(data) {
    data.sort((a, b) => (a.title < b.title ? 1 : -1));
  }

  function yearAsc(data) {
    data.sort((a, b) =>
      a.createdAt.slice(0, 4) > b.createdAt.slice(0, 4) ? 1 : -1
    );
  }

  function yearDesc(data) {
    data.sort((a, b) =>
      a.createdAt.slice(0, 4) < b.createdAt.slice(0, 4) ? 1 : -1
    );
  }

  return (
    <div onClick={handleOpen} className={styles.order_btn}>
      <i className="fas fa-sort-amount-down"></i>
      <span>Order By</span>

      <div
        style={{ display: isOpen ? "block" : "none" }}
        className={styles.order_names}>
        <div
          onClick={() => nameAsc(filteredData)}
          className={styles.order_name}>
          Name ascending
        </div>
        <div
          onClick={() => nameDesc(filteredData)}
          className={styles.order_name}>
          Name descending
        </div>
        <div
          onClick={() => yearAsc(filteredData)}
          className={styles.order_name}>
          Year ascending
        </div>
        <div
          onClick={() => yearDesc(filteredData)}
          className={styles.order_name}>
          Year descending
        </div>
      </div>
    </div>
  );
}
