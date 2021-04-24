import React, { createContext, useContext, useState } from "react";
import { DataContext } from "./DataContext";

export const PaginationContext = createContext();

export default function PaginationContextProvider(props) {
  const { filteredData } = useContext(DataContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [isOpen, setIsOpen] = useState(false);

  const changePage = (id) => {
    setCurrentPage(id);
  };

  const nextPage = () => {
    if (filteredData.length > currentPage * itemsPerPage) {
      setCurrentPage((prevstate) => prevstate + 1);
    }
    return;
  };

  return (
    <PaginationContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        itemsPerPage,
        setItemsPerPage,
        changePage,
        nextPage,
        isOpen,
        setIsOpen,
      }}>
      {props.children}
    </PaginationContext.Provider>
  );
}
