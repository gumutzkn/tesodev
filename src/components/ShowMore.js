import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import styles from "./ShowMore.module.scss";

export default function ShowMore() {
  const { filteredData } = useContext(DataContext);

  return (
    <div className={styles.results_container}>
      {filteredData &&
        filteredData.slice(0, 3).map((item) => (
          <div key={item.id} className={styles.result}>
            <h3>{item.title}</h3>
            <span>
              {item.name} - {item.createdAt.slice(0, 4)}
            </span>
          </div>
        ))}
      {filteredData.length > 2 && (
        <div className={styles.show_more}>
          <Link to="/results">Show More</Link>
        </div>
      )}
    </div>
  );
}
