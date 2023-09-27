import { Avatar } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Profile = () => {
    const userConnected = useSelector((state) => state.auth.userConnected);

    // Renderizar el enlace a /approved/accepted si hay un usuario conectado,
    // de lo contrario, renderizar el enlace a /login
    return (
        <>
            {userConnected ? (
                <Link to="/approved/accepted">
                    <Avatar name={userConnected?.name} src={userConnected?.avatar} size={"sm"} />
                </Link>
            ) : (
                <Link to="/login">
                    <Avatar name={userConnected?.name} src={userConnected?.avatar} size={"sm"} />
                </Link>
            )}
        </>
    );
};

export default Profile;
