import React, { createContext, useContext } from "react";
import { useHistory } from "react-router-dom";
import { DataContext } from "./DataContext";

export const RouteContext = createContext();

export default function RouteContextProvider(props) {
  const { setFilteredData } = useContext(DataContext);
  let history = useHistory();

  function pushPage() {
    history.push("/");
    setFilteredData([]);
  }

  return (
    <RouteContext.Provider value={{ pushPage }}>
      {props.children}
    </RouteContext.Provider>
  );
}
