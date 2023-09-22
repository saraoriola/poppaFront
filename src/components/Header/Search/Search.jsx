import { Input, Spinner } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllEvents,
  getEventByTitle,
} from "../../../features/event/eventSlice";
import PrintEvents from "../../Event/PrintEvents/PrintEvents";

const Search = () => {
  const [search, setSearch] = useState("");
  const { isLoading } = useSelector((state) => state.event);
  const dispatch = useDispatch();

  const searcher = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);

    if (!searchTerm) {
      dispatch(getAllEvents()); // Si la búsqueda está vacía, obtén todos los eventos
    } else {
      dispatch(getEventByTitle(searchTerm)); // Obtén eventos por título
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Input
        value={search}
        onChange={searcher}
        type="text"
        placeholder="Búsqueda"
      />
      <PrintEvents />
    </>
  );
};

export default Search;
