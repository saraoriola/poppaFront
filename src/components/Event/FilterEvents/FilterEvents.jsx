import { Box, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllEvents } from "../../../features/event/eventSlice";
import PrintEvents from "../PrintEvents/PrintEvents";

const FilterEvents = () => {
  const { userConnected, userRole, userEvents } = useSelector(
    (state) => state.auth
  );

  const { events } = useSelector((state) => state.event);
  const [filter, setFilter] = useState("Todos");

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
      <>
        <Button className="filter-input" onClick={() => setFilter("Todos")}>
          Todos
        </Button>
        <Button className="filter-input" onClick={() => setFilter("Inscrito")}>
          Inscrito
        </Button>
        <Button className="filter-input" onClick={() => setFilter("Pendiente")}>
          Pendientes de aprobación
        </Button>
        <Button className="filter-input" onClick={() => setFilter("Organizo")}>
          Organizo
        </Button>
        <Button
          className="filter-input"
          onClick={() => setFilter("Finalizado")}
        >
          Finalizado
        </Button>

        {/* FIXME: Esto huele ya que lo renderizo también en home*/}
        <PrintEvents results={filteredEvents()} />
      </>
    );
  } else {
    return (
      <Box className="filter-container">
        <Button className="filter-input" onClick={() => setFilter("Todos")}>
          Todos
        </Button>
        <Button className="filter-input" onClick={() => setFilter("Inscrito")}>
          Inscrito
        </Button>
        <Button
          className="filter-input"
          onClick={() => setFilter("Finalizado")}
        >
          Finalizado
        </Button>

{/* FIXME: Esto huele ya que lo renderizo también en home*/}
        <PrintEvents results={filteredEvents()} />
      </Box>
    );
  }
};

export default FilterEvents;
