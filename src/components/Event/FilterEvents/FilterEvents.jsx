import { Box, Button, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PrintEvents from "../PrintEvents/PrintEvents";

const FilterEvents = () => {
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
          events.filter((event) => event.organizador === userRole?.id)
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
  }, [filter, userEvents, userRole?.id, events]);

    return (
        <>
            <Box overflowX="auto" whiteSpace="nowrap" mb={5}>
                <Box className="button-scroll-container" display="inline-block">
                    <Button
                        width="auto" height="auto" borderRadius="20px" color="#cb7862" fontFamily="PPTelegraf-UltraLight" fontSize={14} mr={2} onClick={() => handleFilterChange("Todos")}  _hover={{ bg: "#cb7862", color: "white" }}  _active={{ bg: "#cb7862", color: "white" }} style={{ background: "#cb7862", color: "white" }}>
                        <Text as="span" whiteSpace="normal" paddingY="6px" paddingX="6px"> Todos</Text>
                    </Button>
                    <Button width="auto" height="auto" borderRadius="20px" color="#cb7862"  fontFamily="PPTelegraf-UltraLight"  fontSize={14}  mr={2}  onClick={() => handleFilterChange("Inscrito")}  _hover={{ bg: "#cb7862", color: "white" }} _active={{ bg: "#cb7862", color: "white" }} style={{ background: "#f2f2f2", color: "#cb7862" }}>
                        <Text as="span" whiteSpace="normal" paddingY="6px" paddingX="6px">
                            Inscrito
                        </Text>
                    </Button>
                    <Button  width="auto"  height="auto" borderRadius="20px"   color="#cb7862"   fontFamily="PPTelegraf-UltraLight"  fontSize={14}mr={2} onClick={() => handleFilterChange("Pendiente")}  _hover={{ bg: "#cb7862", color: "white" }}  _active={{ bg: "#cb7862", color: "white" }} style={{ background: "#f2f2f2", color: "#cb7862" }}>
                        <Text as="span" whiteSpace="normal" paddingY="6px" paddingX="6px">
                            Pendientes de aprobación
                        </Text>
                    </Button>
                    {userRole?.type === "admin" && (
                        <Button width="auto" height="auto" borderRadius="20px"color="#cb7862" fontFamily="PPTelegraf-UltraLight" fontSize={14}   mr={2} onClick={() => handleFilterChange("Organizo")} _hover={{ bg: "#cb7862", color: "white" }} _active={{ bg: "#cb7862", color: "white" }} style={{ background: "#f2f2f2", color: "#cb7862" }}>
                            <Text as="span" whiteSpace="normal" paddingY="6px" paddingX="6px">
                                Organizo
                            </Text>
                        </Button>
                    )}
                    <Button width="auto"height="auto" borderRadius="20px" color="#cb7862" fontFamily="PPTelegraf-UltraLight"fontSize={14}mr={2} onClick={() => handleFilterChange("Finalizado")} _hover={{ bg: "#cb7862", color: "white" }} _active={{ bg: "#cb7862", color: "white" }}style={{ background: "#f2f2f2", color: "#cb7862" }}>
                        <Text as="span" whiteSpace="normal" paddingY="6px" paddingX="6px">
                            Finalizado
                        </Text>
                    </Button>
                </Box>
            </Box>

            <PrintEvents filteredEvents={filteredEvents} />
        </>
    );
};

export default FilterEvents;
