import React, { createContext, useState } from "react";

export const DataContext = createContext();

export default function DataContextProvider(props) {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  function searchValue(datas) {
    if (input.length > 0) {
      const filterData = datas.filter(
        (data) => data.title.indexOf(input.toUpperCase()) > -1
      );
      setFilteredData(filterData);
      setInput("");
    }
  }

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        input,
        setInput,
        searchValue,
        filteredData,
        setFilteredData,
      }}>
      {props.children}
    </DataContext.Provider>
  );
}
