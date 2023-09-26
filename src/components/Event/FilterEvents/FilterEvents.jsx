import { Box, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PrintEvents from "../PrintEvents/PrintEvents";

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
                setFilteredEvents(events.filter((event) => event.estado === "Pendiente"));
                break;
            case "Organizo":
                setFilteredEvents(events.filter((event) => event.organizador === userRole.id));
                break;
            case "Finalizado":
                setFilteredEvents(events.filter((event) => event.estado === "Finalizado"));
                break;
            default:
                setFilteredEvents(events);
        }
    }, [filter, userEvents, userRole?.id, events]);

    return (
      <>
        <Box>
          <Box display="flex" overflowX="auto" whiteSpace="nowrap" ml="10px">
            <Box className="button-scroll-container">
              {/* NOTE: Cambiar color - active y fuente de letra */}
              <Button
                borderRadius="20px"
                m="0px 5px"
                height="2rem"
                color="#cb7862"
                fontFamily="Telegraf-UltraLight"
                onClick={() => handleFilterChange("Todos")}
              >
                Todos
              </Button>
              <Button
                borderRadius="20px"
                m="0px 5px"
                height="2rem"
                color="#cb7862"
                fontFamily="Telegraf-UltraLight"
                onClick={() => handleFilterChange("Inscrito")}
              >
                Inscrito
              </Button>
              <Button
                borderRadius="20px"
                m="0px 5px"
                height="2rem"
                color="#cb7862"
                fontFamily="Telegraf-UltraLight"
                onClick={() => handleFilterChange("Pendiente")}
              >
                Pendientes de aprobación
              </Button>
              {userRole.type === "admin" && (
                <Button
                  borderRadius="20px"
                  m="0px 5px"
                  height="2rem"
                  color="#cb7862"
                  fontFamily="Telegraf-UltraLight"
                  onClick={() => handleFilterChange("Organizo")}
                >
                  Organizo
                </Button>
              )}
              <Button
                borderRadius="20px"
                m="0px 5px"
                height="2rem"
                color="#cb7862"
                fontFamily="Telegraf-UltraLight"
                onClick={() => handleFilterChange("Finalizado")}
              >
                Finalizado
              </Button>
            </Box>
          </Box>
        </Box>
        <PrintEvents filteredEvents={filteredEvents} />
      </>
    );
};

export default FitlerEvents;
