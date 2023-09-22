import { Box, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllEvents } from "../../../features/event/eventSlice";
import PrintEvents from "../PrintEvents/PrintEvents";

const FilterEvents = () => {
  const { userConnected, userRole, userEvents } = useSelector(
    (state) => state.auth
  );

  console.log(userEvents);
  console.log(userRole.type);

  const { events } = useSelector((state) => state.event);
  const [filter, setFilter] = useState("Todos"); // Estado local para el filtro

  // Función para filtrar los eventos según el filtro seleccionado
  const filteredEvents = () => {
    switch (filter) {
      case "Inscrito":
        return userEvents;
      case "Pendiente":
        console.log(events);
        return events.filter((event) => userEvents.includes(event.id));
      case "Organizo":
        console.log(events);
        return events.filter((event) => userEvents.includes(event.id));
      case "Finalizado":
        console.log(events);
        return events.filter((event) => userEvents.includes(event.id));
      default:
        return events;
    }
  };

  if (userRole.type === "admin") {
    return (
      <Box>
        <Button onClick={() => setFilter("Todos")}>Todos</Button>
        <Button onClick={() => setFilter("Inscrito")}>Inscrito</Button>
        <Button onClick={() => setFilter("Pendiente")}>
          Pendientes de aprobación
        </Button>
        <Button onClick={() => setFilter("Organizo")}>Organizo</Button>
        <Button onClick={() => setFilter("Finalizado")}>Finalizado</Button>

        <PrintEvents results={filteredEvents()} />
      </Box>
    );
  } else {
    return (
      <Box>
        <Button onClick={() => setFilter("Todos")}>Todos</Button>
        <Button onClick={() => setFilter("Inscrito")}>Inscrito</Button>
        <Button onClick={() => setFilter("Finalizado")}>Finalizado</Button>

        <PrintEvents results={filteredEvents()} />
      </Box>
    );
  }
};

export default FilterEvents;
