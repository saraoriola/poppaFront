import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Input,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllEvents } from "../../../features/event/eventSlice";

const Search = () => {
  const [search, setSearch] = useState("");
  const { events, isLoading } = useSelector((state) => state.event);
  const dispatch = useDispatch();

  useEffect(() => {
    // Llamar a la acción para obtener todos los eventos cuando el componente se monta
    dispatch(getAllEvents());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  let results = [];

  const searcher = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
    console.log(searchTerm);
  };

  if (!search) {
    results = events;
  } else {
    results = events.filter((data) => {
      return data.title.toLowerCase().includes(search.toLowerCase());
    });
  }

  const printEvents = results.map((event) => {
    return (
      <Card key={event.id}>
        <CardHeader>{event.banner}</CardHeader>
        <CardBody>
          {/* NOTE: Aquí iría la url del banner */}
          <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
          <Text>{event.title}</Text>
          <Text>{event.description}</Text>
        </CardBody>
        <CardFooter>
          <Box>{event.dateTime}</Box>
          {/* Aquí de momento dejo la duración del evento ya que en dateTime supongo que está la hora */}
          <Box>{event.duration_min}</Box>
          <Box>{event.dateTime}</Box>
        </CardFooter>
      </Card>
    );
  });

  return (
    <>
      <Input
        value={search}
        onChange={searcher}
        type="text"
        placeholder="Búsqueda"
      />
      {printEvents}
    </>
  );
};

export default Search;
