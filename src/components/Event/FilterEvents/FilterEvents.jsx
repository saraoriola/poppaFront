import { Box, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PrintEvents from "../PrintEvents/PrintEvents";
import { useParams } from "react-router-dom";
import { getEventByTitle } from "../../../features/event/eventSlice";

const FilterEvents = () => {
    const { userRole, userEvents } = useSelector((state) => state.auth);

    const { events } = useSelector((state) => state.event);
    const [filter, setFilter] = useState("Todos");

    const filteredEvents = () => {
        switch (filter) {
            case "Inscrito":
                return userEvents;
            case "Pendiente":
                return console.log(events);
            case "Organizo":
                return console.log(events);
            case "Finalizado":
                return console.log(events);
            default:
                return events;
        }
    };

    if (userRole?.type === "admin") {
        return (
            <Box className="filter-container">
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
                <Button className="filter-input" onClick={() => setFilter("Finalizado")}>
                    Finalizado
                </Button>

                {/* FIXME: Esto huele ya que lo renderizo también en home*/}
                {/* <PrintEvents results={filteredEvents()} /> */}
            </Box>
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
                <Button className="filter-input" onClick={() => setFilter("Finalizado")}>
                    Finalizado
                </Button>

                {/* FIXME: Esto huele ya que lo renderizo también en home*/}
                {/* <PrintEvents results={filteredEvents()} /> */}
            </Box>
        );
    }
};

export default FilterEvents;
