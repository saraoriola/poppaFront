import { Box, Button, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PrintEvents from "../PrintEvents/PrintEvents";
import "./FilterEvents.scss";

const FitlerEvents = () => {
  const { userRole, userEvents } = useSelector((state) => state.auth);
  const { events } = useSelector((state) => state.event);
  const [filter, setFilter] = useState("Todos");
  const [filteredEvents, setFilteredEvents] = useState(events);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  useEffect(() => {
    switch (filter) {
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
      <Box>
        <Box display="flex" overflowX="auto" whiteSpace="nowrap" ml="10px">
          <Box className="button-scroll-container">
            {/* NOTE: Lo he dejado en scss para no repetir código */}
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
            <Button
              className="filter-input"
              onClick={() => handleFilterChange("Pendiente")}
            >
              Pendientes de aprobación
            </Button>
            {userRole.type === "admin" && (
              <Button
                className="filter-input"
                onClick={() => handleFilterChange("Organizo")}
              >
                Organizo
              </Button>
            )}
            <Button
              className="filter-input"
              onClick={() => handleFilterChange("Finalizado")}
            >
              Finalizado
            </Button>
          </Box>
        </Box>
      </Box>
      <PrintEvents filteredEvents={filteredEvents} />
      <PrintEvents filteredEvents={filteredEvents} />
    </>
  );
};

export default FitlerEvents;
