import { useParams } from "react-router-dom";
import HeaderEvent from "./HeaderEvent/HeaderEvent";

function Dashboard() {
  const { id } = useParams();

  return (
    <div>
      <h1>Detalles del evento {id}</h1>
      <HeaderEvent/>
    </div>
  );
}

export default Dashboard;
