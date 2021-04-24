import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { PaginationContext } from "../context/PaginationContext";
import OrderBtn from "./OrderBtn";
import Result from "./Result";

import styles from "./Results.module.scss";

export default function Results() {
  const { filteredData } = useContext(DataContext);
  const { itemsPerPage, currentPage } = useContext(PaginationContext);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const itemsForPage = filteredData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <section className={styles.results}>
      {filteredData.length && <OrderBtn />}
      {filteredData.length &&
        itemsForPage.map((item) => (
          <Result
            key={item.id}
            title={item.title}
            name={item.name}
            createdAt={item.createdAt}
          />
        ))}
    </section>
  );
}
