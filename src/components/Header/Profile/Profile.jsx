import { Avatar } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Profile = () => {
    const userConnected = useSelector((state) => state.auth.userConnected);

    return (
        <>
            <Link to="/approved/accepted">
                <Avatar name={userConnected?.name} src={userConnected?.avatar} size={"sm"} />
            </Link>
        </>
    );
};

export default Profile;
