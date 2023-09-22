import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PrintEvents from "../../Event/PrintEvents/PrintEvents";
import { Input } from "@chakra-ui/react";

const Search = () => {
  const [search, setSearch] = useState("");
  const { events } = useSelector((state) => state.event);

  let results = [];

  const searcher = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
  };

  if (!search) {
    results = events;
  } else {
    results = events.filter((data) => {
      return data.title.toLowerCase().includes(search.toLowerCase());
    });
  }

  return (
    <>
      <Input
        value={search}
        onChange={searcher}
        type="text"
        placeholder="Búsqueda"
      />
      <PrintEvents results={results} />
    </>
  );
};

export default Search;
