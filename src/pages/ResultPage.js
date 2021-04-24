import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";
import Results from "../components/Results";
import { DataContext } from "../context/DataContext";
import PaginationContextProvider from "../context/PaginationContext";

export default function ResultsPage() {
  const { filteredData } = useContext(DataContext);
  return (
    <PaginationContextProvider>
      <Navbar />

      {filteredData.length ? (
        <>
          <Results />
          <Pagination />
        </>
      ) : (
        <div></div>
      )}
    </PaginationContextProvider>
  );
}
