import { Box, Center, Grid, HStack } from "@chakra-ui/react";
import QrReader from "../Qr/Reader/QrReader";

const Admin = () => {
    return (
        <Center>
            <Grid>
                <HStack padding="30px">
                    <Box w="500px" h="650px">
                        <QrReader />
                    </Box>
                </HStack>
                {/* <HStack padding="30px">
                    <Dashboard />
                </HStack> */}
            </Grid>
        </Center>
    );
};

export default Admin;
