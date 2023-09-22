// Search.js
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Input } from "@chakra-ui/react";

const Search = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  const { events } = useSelector((state) => state.event);

  const searcher = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);

    // Aplicar la lógica de búsqueda y pasar los resultados a la función onSearch
    const results = searchTerm
      ? events.filter((data) =>
          data.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : events;
    onSearch(results);
  };

  return (
    <Input
      value={search}
      onChange={searcher}
      type="text"
      placeholder="Búsqueda"
    />
  );
};

export default Search;
