import { Box, Image, Text } from "@chakra-ui/react";
import { Link, useRouteError } from "react-router-dom";
import pageNotFoundImg from "../../assets/images/404.png";

const ErrorPage = () => {
    const error = useRouteError();
    const pageNotFound = `${error.status} ~ Page not found!`;

    return (
        <Box ml="30%">
            <Image w="100%" src={pageNotFoundImg} />
            <Text as="b">{pageNotFound}</Text>
            <Link color="blue" to="/">
                <Text as="b" color="blue">
                    <br /> Return home
                </Text>
            </Link>
        </Box>
    );
};

export default ErrorPage;
