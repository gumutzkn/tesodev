import React, { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import { PaginationContext } from "../context/PaginationContext";
import { RouteContext } from "../context/RouteContext";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const { pushPage } = useContext(RouteContext);

  const {
    data,
    input,
    setInput,
    setFilteredData,
    setData,
  } = useContext(DataContext);
  const { setCurrentPage } = useContext(PaginationContext);

  useEffect(() => {
    fetch("generated.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [setData]);

  function searchValue(datas) {
    if (input.length > 0) {
      const filterData = datas.filter(
        (data) => data.title.indexOf(input.toUpperCase()) > -1
      );
      setFilteredData(filterData);
      setCurrentPage(1);
      setInput("");
    }
  }

  return (
    <nav className={styles.navbar}>
      <div onClick={pushPage} className={styles.logo}></div>
      <form
        className={styles.search}
        onSubmit={(e) => {
          e.preventDefault();
          searchValue(data);
        }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={styles.search__input}
          type="text"
          placeholder="Search anything"
        />
        <input
          className={styles.search__btn}
          type="submit"
          value="Search"
        />
      </form>
    </nav>
  );
}
