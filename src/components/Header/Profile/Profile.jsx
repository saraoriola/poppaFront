import { Avatar } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const userConnected = useSelector((state) => state.auth.userConnected);

  const { avatar, name } = userConnected;

  return (
    <>
      <Avatar name={name} src={avatar} size={"sm"} />
    </>
  );
};

export default Profile;
