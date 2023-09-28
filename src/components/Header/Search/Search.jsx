import { Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      navigate("getbytitle/" + search);
    }
  };

  return (
    <Input className="search-input" type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} onKeyUp={handleSearch} />
  );
};

export default Search;
