import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Delete as DeleteLocationAction } from "../../../features/location/locationSlice"; 
import { Box, Button, FormControl, FormLabel, Input} from "@chakra-ui/react";

const DeleteLocation = () => {
    const dispatch = useDispatch();
    const [locationId, setLocationId] = useState('');

    const handleChange = (e) => {
        setLocationId(e.target.value);
    };

    const handleDelete = () => {
       
        dispatch(DeleteLocationAction(locationId)).then((result) => {
            if (DeleteLocationAction.fulfilled.match(result)) {
                console.log("Location deleted successfully!");
            } else if (DeleteLocationAction.rejected.match(result)) {
                console.error("Error deleting location:", result.error.message);
            }
        });

        setLocationId('');
    };

    return (
        <Box p="4%">
            <FormControl>
                <FormLabel>Delete location by ID:</FormLabel>
                <Input type="text" value={locationId} onChange={handleChange} />
            </FormControl>
            <Button mt={10} colorScheme="blue"
                onClick={handleDelete} style={{ top: "50%",left: "50%", transform: "translate(-50%, -50%)"}} >
                Delete Location
            </Button>
        </Box>
    );
};

export default DeleteLocation;
