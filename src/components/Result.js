import React from "react";

import styles from "./Result.module.scss";

export default function Result({ title, name, createdAt }) {
  return (
    <div className={styles.result}>
      <h3>{title}</h3>
      <span>
        {name} - {createdAt.slice(0, 4)}
      </span>
    </div>
  );
}
