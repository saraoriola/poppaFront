import { Box, Button, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PrintEvents from "../PrintEvents/PrintEvents";

const FitlerEvents = () => {
  const { userRole, userEvents } = useSelector((state) => state.auth);
  const { events } = useSelector((state) => state.event);
  const [filter, setFilter] = useState("Todos");
  const [filteredEvents, setFilteredEvents] = useState(events);

  console.log(filteredEvents);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  useEffect(() => {
    switch (filter) {
      // Actualiza el estado de los eventos filtrados
      case "Inscrito":
        setFilteredEvents(userEvents);
        break;
      case "Pendiente":
        setFilteredEvents(
          events.filter((event) => event.estado === "Pendiente")
        );
        break;
      case "Organizo":
        setFilteredEvents(
          events.filter((event) => event.organizador === userRole.id)
        );
        break;
      case "Finalizado":
        setFilteredEvents(
          events.filter((event) => event.estado === "Finalizado")
        );
        break;
      default:
        setFilteredEvents(events);
    }
  }, [filter, userEvents, userRole.id, events]);

  return (
    <>
      <Box className="filter-container">
        <Box className="button-container">
          <Button
            className="filter-input"
            onClick={() => handleFilterChange("Todos")}
          >
            Todos
          </Button>
          <Button
            className="filter-input"
            onClick={() => handleFilterChange("Inscrito")}
          >
            Inscrito
          </Button>
          <Button className="filter-input">Pendientes de aprobación</Button>
          {userRole.type === "admin" && (
            <Button className="filter-input">Organizo</Button>
          )}
          <Button className="filter-input">Finalizado</Button>
        </Box>
      </Box>
      <PrintEvents filteredEvents={filteredEvents} />
    </>
  );
};

export default FitlerEvents;
