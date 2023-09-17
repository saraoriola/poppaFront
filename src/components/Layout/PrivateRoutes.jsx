import { useSelector } from "react-redux"; // Ajusta la importación según tu configuración de Redux.
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";

const PrivateRoutes = () => {
    const user = useSelector((state) => state.user); // Ajusta el selector según tu configuración de Redux.
    const navigate = useNavigate(); // Obtiene la función de navegación.

    if (!user) {
        navigate("/login"); // Realiza una redirección a la página de inicio de sesión si no está autenticado.
        return null; // Opcional: puedes devolver null o cualquier otro componente mientras se redirige.
    }

    return <Layout />;
};

export default PrivateRoutes;
