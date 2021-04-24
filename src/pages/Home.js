import React, { useContext, useEffect } from "react";
import ShowMore from "../components/ShowMore";
import SearchBox from "../components/SearchBox";
import styles from "./Home.module.scss";
import { DataContext } from "../context/DataContext";

export default function Home() {
  const { setData, filteredData } = useContext(DataContext);

  useEffect(() => {
    fetch("generated.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [setData]);

  return (
    <section className={styles.container}>
      <SearchBox />
      {filteredData.length > 0 ? <ShowMore /> : <div></div>}
    </section>
  );
}
