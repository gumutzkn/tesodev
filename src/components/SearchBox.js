import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { RouteContext } from "../context/RouteContext";
import styles from "./SearchBox.module.scss";

export default function SearchBox() {
  const { pushPage } = useContext(RouteContext);
  const { data, input, setInput, searchValue } = useContext(
    DataContext
  );

  return (
    <div className={styles.searchbox}>
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
    </div>
  );
}
