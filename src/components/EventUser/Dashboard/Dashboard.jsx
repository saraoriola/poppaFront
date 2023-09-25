import React from "react";
import { useParams } from "react-router-dom";
import HeaderEvent from "./HeaderEvent/HeaderEvent";
import Attendees from "./Attendees/Attendees";
import HeaderDash from "./HeaderDash";

function Dashboard() {
  const { id } = useParams();

  return (
    <div>
<HeaderDash/> 
      <HeaderEvent/>
      <Attendees/>
    </div>
  );
}

export default Dashboard;
