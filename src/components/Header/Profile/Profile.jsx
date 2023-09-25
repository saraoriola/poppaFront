import { Avatar } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const Profile = () => {
    const userConnected = useSelector((state) => state.auth.userConnected);

    return (
        <>
            <Avatar name={userConnected?.name} src={userConnected?.avatar} size={"sm"} />
        </>
    );
};

export default Profile;
