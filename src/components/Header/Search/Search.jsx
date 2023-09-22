import { Input } from "@chakra-ui/react";
import React, { useState } from "react";

const Search = () => {
  // Utiliza el hook useState de forma correcta
  const [search, setSearch] = useState(""); 

  const searcher = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
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

