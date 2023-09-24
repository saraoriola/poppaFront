import React from "react";
import { useParams } from "react-router-dom";
import HeaderEvent from "./HeaderEvent/HeaderEvent";
import Attendees from "./Attendees/Attendees";

function Dashboard() {
  const { id } = useParams();

  return (
    <div>
      <h1>Detalles del evento {id}</h1>
      <HeaderEvent/>
      <Attendees/>
    </div>
  );
}

export default Dashboard;
